<script lang="ts">
    import {CloseIcn} from '../icons/index.svelte';
    import Button from './common/Button.svelte';
    import Input from './common/Input.svelte';
    import Switch from './common/Switch.svelte';
    import Select from './common/Select.svelte';
    import Textarea from './common/Textarea.svelte';
    import type {
        AddMedicationFormType,
        MedicationType, PharmacistVisibility, PractitionerVisibility,
        PrescribedMedicationType
    } from "../types/index.svelte";
    import {Duration, Medication} from '@icure/be-fhc-api'
    import {Medicinalproduct} from "@icure/be-fhc-api/model/Medicinalproduct";
    import {Code} from "../utils/code-utils";
    import {completePosology} from "@icure/medication-sdk";
    import RadioButton from "./common/RadioButton.svelte";
    import {v4 as uuid} from 'uuid'
    import {onDestroy, onMount} from "svelte";
    import {clickOutside} from '../utils/clickOutside'
    import {
        durationTimeUnits, findCommonSequence,
        periodicityTimeUnits,
        pharmacistVisibilityOptions,
        practitionerVisibilityOptions,
        reimbursementOptions
    } from '../helpers/index.svelte'
    import {offsetDate} from "../../lib/fhc";

    let {medicationToPrescribe, prescribedMedication, handleClose, handleSave, modalTitle}: {
        medicationToPrescribe?: MedicationType,
        prescribedMedication?: PrescribedMedicationType,
        handleClose: () => void,
        handleSave: ({}: PrescribedMedicationType[]) => void
        modalTitle: string
    } = $props();

    const medicationTitle = medicationToPrescribe?.title ?? prescribedMedication?.medication.medicinalProduct?.intendedname;

    const formatDateForInput = (dateNumber: number) => {
        const year = Math.floor(dateNumber / 10000);
        const month = Math.floor((dateNumber % 10000) / 100).toString().padStart(2, '0'); // Zero-pad month
        const day = (dateNumber % 100).toString().padStart(2, '0'); // Zero-pad day

        return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
    }

    const getTreatmentStartDate = () => {
        if (prescribedMedication?.medication.beginMoment) {
            return formatDateForInput(prescribedMedication?.medication.beginMoment)
        } else {
            return new Date().toISOString().split('T')[0]
        }
    }
    const getExecutableUntilDate = () => {
        if (prescribedMedication?.medication.endMoment) {
            return formatDateForInput(prescribedMedication?.medication.endMoment);
        } else {
            const startDay = new Date();
            const nextYear = new Date(startDay);
            nextYear.setFullYear(startDay.getFullYear() + 1);
            return nextYear.toISOString().split('T')[0];
        }
    }

    // Compulsory fields
    let dosage: string | undefined = $state(prescribedMedication?.medication.instructionForPatient ?? undefined);
    let dosageFromSuggestion: string | undefined = $state(undefined);
    let duration: number | undefined = $state(prescribedMedication?.medication.duration?.value ?? 1);
    let durationTimeUnit: string = $state(prescribedMedication?.medication.duration?.unit?.code ?? durationTimeUnits[0].value);

    let treatmentStartDate: string | undefined = $state(getTreatmentStartDate());
    let executableUntil: string | undefined = $state(getExecutableUntilDate());

    let prescriptionsNumber: number | undefined = $state(1);
    let periodicityTimeUnit: string = $state(periodicityTimeUnits[0].value);
    let periodicityDaysNumber: number | undefined = $state(1);

    let substitutionAllowed: boolean = $state(prescribedMedication?.medication?.substitutionAllowed ?? false)

    // Extra fields
    let showExtraFields = $state(false);
    let recipeInstructionForPatient: string | undefined = $state(prescribedMedication?.medication.recipeInstructionForPatient ?? undefined);
    let instructionsForReimbursement: string | undefined = $state(prescribedMedication?.medication?.instructionsForReimbursement ?? undefined);
    let practitionerVisibility: PractitionerVisibility = $state(prescribedMedication?.prescriberVisibility ?? practitionerVisibilityOptions[0]?.value);
    let pharmacistVisibility: PharmacistVisibility = $state(prescribedMedication?.pharmacistVisibility ?? pharmacistVisibilityOptions[0]?.value);

    let inputsToValidate: string[] = $state([]);
    let posologySuggestions: string[] = $state([]);


    $effect(() => {
        inputsToValidate = [
            'dosage',
            'duration',
            'durationTimeUnit',
            'treatmentStartDate',
            'executableUntil',
            'prescriptionsNumber',
            'substitutionAllowed',
            (prescriptionsNumber && prescriptionsNumber > 1) ? 'periodicityTimeUnit' : null,
            (periodicityTimeUnit && periodicityTimeUnit === 'x nombre de jours') ? 'periodicityDaysNumber' : null
        ].filter((x): x is string => !!x)
    })

    $effect(() => {
        const dosageWhenCalled = dosage;
        setTimeout(() => {
            if (dosageWhenCalled && dosageWhenCalled === dosage && dosageWhenCalled != dosageFromSuggestion) {
                posologySuggestions = completePosology(dosageWhenCalled)
            }
        }, 100)
    });

    $effect(() => {
        if (periodicityTimeUnit !== '1') {
            periodicityDaysNumber = 1;
        }
    });


    const errorMessages = {
        isRequired: 'Ce champ est obligatoire.'
    }

    let errors: { [inputName: string]: { validationError: string | undefined } } = $state({});

    const isFormValid = (): boolean => {
        return !Object.keys(errors).some((inputName) => errors[inputName].validationError
        );
    }

    const validateForm = (data: { [inputName: string]: any }): void => {
        const setError = (inputName: string, isValid: boolean): void => {
            errors = {
                ...errors,
                [inputName]: {
                    validationError: !isValid ? errorMessages.isRequired : undefined
                }
            }
        }
        const isRequiredFieldValid = (value: string | number) => value != null && value !== '';
        inputsToValidate.forEach((input) => setError(input, isRequiredFieldValid(data[input])))
    }

    const handleSubmit = (e: Event): void => {
        e.preventDefault();

        const data: AddMedicationFormType = {
            dosage,
            duration,
            durationTimeUnit,
            treatmentStartDate,
            executableUntil,
            prescriptionsNumber,
            periodicityTimeUnit,
            periodicityDaysNumber,
            substitutionAllowed,
            recipeInstructionForPatient,
            instructionsForReimbursement,
            prescriberVisibility: practitionerVisibility,
            pharmacistVisibility: pharmacistVisibility,
        };

        validateForm(data);

        if (isFormValid()) {
            const getDurationInDays = (timeUnit: string, value: number) => {
                if (timeUnit === "jour") {
                    return value
                } else if (timeUnit === "semaine") {
                    return value * 7
                }
            }
            const prescribedMedications = prescribedMedication ?
                [{
                    ...prescribedMedication,
                    medication: new Medication({
                        ...prescribedMedication.medication,

                        duration: new Duration({
                            unit: Code.from("CD-TIMEUNIT", "D"),
                            value: getDurationInDays(data.durationTimeUnit as string, data.duration as number)
                        }),
                        instructionForPatient: data.dosage,
                        recipeInstructionForPatient: data.recipeInstructionForPatient,
                        instructionsForReimbursement: data.instructionsForReimbursement,
                        substitutionAllowed: data.substitutionAllowed
                    }),
                    prescriberVisibility: data.prescriberVisibility,
                    pharmacistVisibility: data.pharmacistVisibility,
                }]
                : Array.from({length: (data.prescriptionsNumber ?? 1)}, (_, i) => i).map((idx) => ({
                    uuid: uuid(),
                    medication: new Medication({
                        medicinalProduct: new Medicinalproduct({
                            samId: medicationToPrescribe!.dmppProductId,
                            intendedcds: [Code.from("CD-DRUG-CNK", medicationToPrescribe!.cnk!)],
                            intendedname: medicationToPrescribe!.intendedName
                        }),
                        beginMoment: offsetDate(parseInt((data.treatmentStartDate as string).replace(/-/g, '')), data.periodicityTimeUnit ? parseInt(data.periodicityTimeUnit) * (data.periodicityDaysNumber ?? 1) * idx : 0),
                        endMoment: offsetDate(parseInt((data.executableUntil as string).replace(/-/g, '')), data.periodicityTimeUnit ? parseInt(data.periodicityTimeUnit) * (data.periodicityDaysNumber ?? 1) * idx : 0),

                        duration: new Duration({
                            unit: Code.from("CD-TIMEUNIT", "D"),
                            value: getDurationInDays(data.durationTimeUnit as string, data.duration as number)
                        }),

                        instructionForPatient: data.dosage,
                        recipeInstructionForPatient: data.recipeInstructionForPatient,
                        instructionsForReimbursement: data.instructionsForReimbursement,
                        substitutionAllowed: data.substitutionAllowed
                    }),
                    prescriberVisibility: data.prescriberVisibility,
                    pharmacistVisibility: data.pharmacistVisibility,
                }))

            handleSave(prescribedMedications)
            handleClose()
        } else {
            console.log('Invalid Form');
        }
    }


    let focusedDosageIndex = $state(-1);
    let resultRefs: (HTMLLIElement | null)[] = $state([]); // Array to store references to list items
    let disableHover = $state(false);

    onMount(async () => {
        focusedDosageIndex = -1;
    });

    onDestroy(() => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("mousemove", handleMouseMove);
    });

    const handleKeyDown = (event: KeyboardEvent): void => {
        const defaultActions = () => {
            event.preventDefault(); // Prevent default scrolling behavior
            disableHover = true; // Disable hover effects
        }

        const length = posologySuggestions.length

        if (event.key === 'ArrowDown') {
            defaultActions()
            focusedDosageIndex = (focusedDosageIndex + 1) % length;
            scrollToFocusedItem();
        } else if (event.key === 'ArrowUp') {
            defaultActions()
            focusedDosageIndex = (focusedDosageIndex - 1 + length) % length;
            scrollToFocusedItem();
        } else if (event.key === 'Enter' && focusedDosageIndex >= 0) {
            event.preventDefault();
            disableHover = false;
            const suggestion = posologySuggestions[focusedDosageIndex]

            if (suggestion) {
                const common = findCommonSequence(dosage ?? '', suggestion)
                dosage = (dosage + (common.length ? suggestion.slice(common.length) : ' ' + suggestion)).replace(/ {2,}/g, ' ')
                dosageFromSuggestion = dosage
                posologySuggestions = []
                focusedDosageIndex = -1
            }
        } else if (event.key === 'Escape') {
            if (posologySuggestions.length) {
                event.preventDefault()
                event.stopPropagation()
                posologySuggestions = []
                focusedDosageIndex = -1
            }
        } else if (event.key === 'Enter') {
            handleSubmit(event)
        }
    }

    const scrollToFocusedItem = (): void => {
        if (focusedDosageIndex >= 0 && resultRefs[focusedDosageIndex]) {
            resultRefs[focusedDosageIndex]?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
    }

    const handleMouseMove = () => {
        disableHover = false; // Re-enable hover on mouse movement
    }

    const handleOutsideClick = () => {
        posologySuggestions = []
    }

</script>

<div class="addMedicationModal">
    <div class="addMedicationModal__content">
        <form id="prescriptionForm" class='addMedicationForm' onsubmit={(e) => handleSubmit(e)} autocomplete="off">
            <div class='addMedicationForm__header'>
                <h3>{modalTitle}</h3>
                <button class='addMedicationForm__header__closeIcn' onclick={() =>handleClose()}>
                    <CloseIcn/>
                </button>
            </div>
            <div class='addMedicationForm__body'
                 onkeydown={handleKeyDown}
                 role="listbox"
                 tabindex="0"
                 aria-activedescendant={focusedDosageIndex >= 0 ? `posology-${focusedDosageIndex}` : undefined}
            >
                <div class='addMedicationForm__body__content'>
                    <div class='addMedicationForm__body__content__inputs'>
                        <Input label='Nom groupe DCI' value={medicationTitle} required
                               disabled
                               id='drugName'/>
                        <div class="dosageInput">
                            <Input label='Posologie' id='dosage' bind:value={dosage} required autofocus
                                   errorMessage={errors.dosage?.validationError}/>
                            {#if posologySuggestions.length !== 0}
                                <ul class='dosageInput__dropdown'
                                    onmousemove={handleMouseMove}
                                    use:clickOutside={handleOutsideClick}
                                >
                                    {#each posologySuggestions as posology, index}
                                        <li
                                                id={`posology-${index}`}
                                                class:disableHover
                                                class={focusedDosageIndex === index ? 'focused' : ''}
                                        >
                                            <button onclick={ (e) => {
                                              e.preventDefault()
                                              dosage = (dosage + ' ' + posologySuggestions[index]).replace(/ {2,}/g, ' ')
                                                posologySuggestions = []
                                            }}>
                                                {posology}
                                            </button>
                                        </li>
                                    {/each}
                                </ul>
                            {/if}
                        </div>

                        <div class='addMedicationForm__body__content__inputs__group'>
                            <Input label='Durée (nombre d’unités)' bind:value={duration} required
                                   errorMessage={errors.duration?.validationError}
                                   id='duration' type='number' min={1}/>
                            <Select label='Unité de temps' bind:value={durationTimeUnit} required
                                    id='durationTimeUnit' options={durationTimeUnits}/>
                        </div>
                        <div class='addMedicationForm__body__content__inputs__group'>
                            <Input label='Date début du traitement' bind:value={treatmentStartDate} required
                                   errorMessage={errors.treatmentStartDate?.validationError}
                                   id='treatmentStartDate' type='date'/>
                            <Input label='Exécutable jusqu`au' bind:value={executableUntil} required
                                   errorMessage={errors.executableUntil?.validationError}
                                   id='executableUntil' type='date'/>
                        </div>
                        {#if !prescribedMedication}
                            <div class='addMedicationForm__body__content__inputs__group'>
                                <Input label='Nombre de prescriptions' bind:value={prescriptionsNumber} required
                                       errorMessage={errors.prescriptionsNumber?.validationError}
                                       id='prescriptionsNumber' type='number' min={1} max={12}/>
                                {#if prescriptionsNumber && prescriptionsNumber > 1}
                                    <Select label='Périodicité' bind:value={periodicityTimeUnit} required
                                            id='periodicityTimeUnit' options={periodicityTimeUnits}/>
                                {/if}
                                {#if periodicityTimeUnit === '1'}
                                    <Input label='Nombre de jours' bind:value={periodicityDaysNumber} required
                                           errorMessage={errors.periodicityDaysNumber?.validationError  }
                                           id='periodicityDaysNumber' type='number' min={1}/>
                                {/if}
                            </div>
                        {/if}
                        <div class='addMedicationForm__body__content__inputs__radioBtns'>
                            <RadioButton name="substitutionAllowed" bind:value={substitutionAllowed}
                                         label="Substitution autorisée"
                                         options={[{label: 'Non', value: false, id: 'substitutionIsNotAllowed'}, {label: "Oui", value: true, id: 'substitutionIsAllowed'}]}
                                         required
                                         errorMessage={errors.substitutionAllowed?.validationError}
                            />
                        </div>
                    </div>
                </div>
                <Switch id='showExtraFields' value='Afficher plus'
                        bind:checked={showExtraFields}/>
                {#if !showExtraFields}
                    <div class="addMedicationForm__body__extraFieldsPreview">
                        <p>
                            <span>Instructions pour le patient:</span>
                            <i><span>{recipeInstructionForPatient ?? 'Aucun'}</span></i>
                        </p>
                        <p>
                            <span>Instructions remboursement:</span>
                            <i><span>{reimbursementOptions?.find(x => x.value === instructionsForReimbursement)?.label ?? 'Aucun'}</span></i>
                        </p>
                        <p>
                            <span>Visibilité prescripteur: </span>
                            <i><span> {practitionerVisibilityOptions.find(o => o.value === practitionerVisibility)?.label}</span></i>
                        </p>

                        <p>
                            <span>Visibilité officine:</span>
                            <i><span> {pharmacistVisibilityOptions.find(o => o.value === pharmacistVisibility)?.label}</span></i>
                        </p>

                        <p></p>
                    </div>
                {:else}
                    <div class='addMedicationForm__body__content'>
                        <div class='addMedicationForm__body__content__inputs'>
					<Textarea label='Instructions pour le patient' id='recipeInstructionForPatient'
                              bind:value={recipeInstructionForPatient}/>
                            <Select label='Instructions remboursement' id='instructionsForReimbursement'
                                    bind:value={instructionsForReimbursement} options={reimbursementOptions}/>

                            <Select label='Visibilité prescripteur' bind:value={practitionerVisibility}
                                    id='prescriberVisibility' options={practitionerVisibilityOptions}/>
                            <Select label='Visibilité officine' bind:value={pharmacistVisibility}
                                    id='pharmacyVisibility' options={pharmacistVisibilityOptions}/>

                        </div>
                    </div>
                {/if}
            </div>
            <div class='addMedicationForm__footer'>
                <Button title='Cancel' handleClick={() => handleClose() } view='outlined' type='reset'
                        form="prescriptionForm"/>
                <Button title='Save' view='primary' type='submit' form="prescriptionForm"/>
            </div>
        </form>
    </div>
</div>

<style lang='scss'>
  @use '../../style/app';

  .addMedicationModal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;

    background: rgba(154, 153, 178, 0.3);

    &__content {
      width: 900px;
      height: 100%;
      max-height: 100%;
      border-radius: 0.2em;
      border: none;
      padding: 0;
      background-color: white;
      margin: 0 0 0 auto;

      @include app.media-breakpoint-down(app.$lg) {
        width: 100%;
      }
    }
  }

  .addMedicationForm {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    &__header {
      display: flex;
      padding: 20px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;

      border-radius: 8px 8px 0px 0px;
      border-bottom: 1px solid app.$gray-300;
      background: #FFF;

      @include app.media-breakpoint-down(app.$lg) {
        padding: 20px 16px;
      }

      h3 {
        color: app.$gray-900;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      &__closeIcn {
        width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #FFFFFF;
        border-radius: 4px;

        &:hover {
          background-color: rgba(app.$gray-300, 0.4);
        }
      }
    }

    &__body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding: 24px 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      flex: 1 0 0;
      gap: 12px;
      background-color: app.$gray-50;

      @include app.media-breakpoint-down(app.$lg) {
        padding: 16px;
      }

      @include app.media-breakpoint-down(app.$sm) {
        padding: 8px;
      }

      &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 12px;
        border: 1px solid app.$gray-300;
        background: #FFF;

        &__inputs {
          display: flex;
          padding: 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;

          @include app.media-breakpoint-down(app.$lg) {
            padding: 18px;
          }

          &__group {
            width: 100%;
            display: flex;
            align-items: flex-end;
            gap: 4px;
            align-self: stretch;

            @include app.media-breakpoint-down(app.$sm) {
              flex-direction: column;
              gap: 12px;
            }
          }
        }
      }

      &__extraFieldsPreview {
        display: flex;
        width: 100%;
        padding: 12px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        border-radius: 12px;
        border: 1px solid app.$gray-300;
        background: #FFF;
        box-shadow: 0px 1px 1px 0px rgba(218, 218, 222, 0.25);

        p {
          color: rgba(app.$gray-600, 0.70);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 169.231% */
        }
      }
    }

    &__footer {
      display: flex;
      padding: 20px 24px;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 12px;
      align-self: stretch;
      border-top: 1px solid app.$gray-300;
      background: #FFF;
    }

  }

  .dosageInput {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__dropdown {
      position: absolute;
      top: calc(100% + 2px);

      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 5px;

      background-color: #Fff;
      border: 1px solid app.$burgundy-900;
      border-radius: 6px;
      box-shadow: 0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px 0px rgba(0, 0, 0, 0.12);

      li {
        width: 100%;
        border-radius: 4px;
        background: none;

        &.disableHover:hover {
          background: none;
        }

        &:hover, &.focused, &.disableHover.focused:hover {
          background: app.$gray-300;
        }

        button {
          width: 100%;
          cursor: pointer;
          padding: 8px;
          background: none;
          text-align: left;
        }
      }
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  button {
    display: block;
  }
</style>
