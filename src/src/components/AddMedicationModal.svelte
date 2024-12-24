<script lang="ts">
    import {CloseIcn} from '../icons/index.svelte';
    import Button from './common/Button.svelte';
    import Input from './common/Input.svelte';
    import Switch from './common/Switch.svelte';
    import Select from './common/Select.svelte';
    import Textarea from './common/Textarea.svelte';
    import type {AddMedicationFormType, MedicationType} from "../types/index.svelte";
    import {Duration, Medication, MedicationRenewal} from '@icure/be-fhc-api'
    import {Medicinalproduct} from "@icure/be-fhc-api/model/Medicinalproduct";
    import {Code} from "../utils/code-utils";

    let {selectedMedication, handleClose, handleSave}: {
        selectedMedication: MedicationType,
        handleClose: () => void,
        handleSave: (medication: Medication) => void
    } = $props();

    const medicationTitle = selectedMedication.title ?? selectedMedication.medicinalProduct?.intendedname;

    const durationTimeUnits = [
        {
            value: 'jour',
            label: 'jour'
        },
        {
            value: 'semaine',
            label: 'semaine'
        }];
    const periodicityTimeUnits = [
        {
            value: 'aucune',
            label: 'aucune'
        },
        {
            value: 'semaine',
            label: 'semaine'
        },
        {
            value: '2 semaines',
            label: '2 semaines',
        },
        {
            value: '3 semaines',
            label: '3 semaines',
        },
        {
            value: 'x nombre de jours',
            label: 'x nombre de jours'
        }
    ];
    const prescriberVisibilityOptions = [
        {
            value: 'Visible pour tous les prescripteurs',
            label: 'Visible pour tous les prescripteurs'
        },
        {
            value: 'Visible uniquement pour moi-même',
            label: 'Visible uniquement pour moi-même',
        },
        {
            value: 'Visible uniquement pour le titulaire du DMG',
            label: 'Visible uniquement pour le titulaire du DMG',
        }];
    const pharmacyVisibilityOptions = [
        {
            value: 'Le médicament est visible par tous les pharmaciens',
            label: 'Le médicament est visible par tous les pharmaciens',
        },
        {
            value: 'Le médicament n`est pas visible par tous les pharmaciens',
            label: 'Le médicament n`est pas visible par tous les pharmaciens'
        }
    ];

    const reimbursementOptions = [
        {
            value: null,
            label: 'None'
        },
        {
            value: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
            label: "Paying Third Party",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.FIRSTDOSE,
            label: "First Dose",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.SECONDDOSE,
            label: "Second Dose",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.THIRDDOSE,
            label: "Third Dose",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
            label: "Chronic Kidney Disease",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.DIABETESTREATMENT,
            label: "Diabetes Treatment",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.DIABETESCONVENTION,
            label: "Diabetes Convention",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.NOTREIMBURSABLE,
            label: "Not Reimbursable",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.EXPLAINMEDICATION,
            label: "Explain Medication",
        },
        {
            value: Medication.InstructionsForReimbursementEnum.DIABETESSTARTPATH,
            label: "Diabetes Start Path",
        },
    ];

    const today = new Date();
    const nextYear = new Date(today);
    nextYear.setFullYear(today.getFullYear() + 1);
    const formattedToday = today.toISOString().split('T')[0];
    const formattedNextYear = nextYear.toISOString().split('T')[0];

    let treatmentStartDate: string | undefined = $state(formattedToday);
    let executableUntil: string | undefined = $state(formattedNextYear);

    // Compulsory fields
    let dosage: string | undefined = $state(selectedMedication.instructionForPatient ?? undefined);
    let duration: number | undefined = $state(1);
    let durationTimeUnit: string = $state(durationTimeUnits[0].value);

    let prescriptionsNumber: number | undefined = $state(1);
    let periodicityTimeUnit: string = $state(periodicityTimeUnits[0].value);
    let periodicityDaysNumber: number | undefined = $state();

    // Extra fields
    let showExtraFields = $state(false);
    let recipeInstructionForPatient: string | undefined = $state(selectedMedication.recipeInstructionForPatient ?? undefined);
    let instructionsForReimbursement: string | undefined = $state(selectedMedication.instructionsForReimbursement ?? undefined);
    let prescriberVisibility: string = $state(prescriberVisibilityOptions[0].value);
    let pharmacyVisibility: string = $state(pharmacyVisibilityOptions[0].value);

    let inputsToValidate: string[] = $state([]);

    $effect(() => {
        inputsToValidate = [
            'dosage',
            'duration',
            'durationTimeUnit',
            'treatmentStartDate',
            'executableUntil',
            'prescriptionsNumber',
            (prescriptionsNumber && prescriptionsNumber > 1) ? 'periodicityTimeUnit' : null,
            (periodicityTimeUnit && periodicityTimeUnit === 'x nombre de jours') ? 'periodicityDaysNumber' : null
        ].filter((x): x is string => !!x)
    })

    const errorMessages = {
        isRequired: 'Ce champ est obligatoire.'
    }

    let errors: { [inputName: string]: any } = $state({});

    // Monitor and clean errors when the corresponding input becomes valid
    $effect(() => {
        Object.keys(errors).forEach((inputName) => {
            console.log(inputName)
            console.log(errors[inputName])

        });
    });

    const isFormValid = (): boolean => {
        return !Object.keys(errors).some((inputName) =>
            Object.keys(errors[inputName]).some(
                (errorName) => errors[inputName][errorName],
            ),
        );
    }

    const validateForm = (data: { [inputName: string]: any }): void => {
        const setError = (inputName: string, isValid: boolean): void => errors[inputName] = {
            ...errors[inputName],
            validationError: !isValid ? errorMessages.isRequired : null
        };
        const isRequiredFieldValid = (value: string | number) => value != null && value !== '';
        inputsToValidate.forEach((input) => setError(input, isRequiredFieldValid(data[input])))
    }

    const handleSubmit = (e: SubmitEvent): void => {
        e.preventDefault();

        const data: AddMedicationFormType = {
            dosage,
            duration,
            durationTimeUnit,
            treatmentStartDate,
            prescriptionsNumber,
            executableUntil,
            periodicityTimeUnit,
            periodicityDaysNumber,
            recipeInstructionForPatient,
            instructionsForReimbursement,
            prescriberVisibility,
            pharmacyVisibility,
        };

        validateForm(data);

        if (isFormValid()) {
            const getMedicinalProduct = () => {
                if (selectedMedication.medicinalProduct) {
                    return selectedMedication.medicinalProduct
                } else if (!selectedMedication.medicinalProduct && selectedMedication.cnk) {
                    return new Medicinalproduct({
                        samId: selectedMedication.dmppProductId,
                        intendedcds: [Code.from("CD-DRUG-CNK", selectedMedication.cnk)],
                        intendedname: selectedMedication.intendedName
                    })
                }
            }
            const getDurationInDays = (timeUnit: string, value: number) => {
                if (timeUnit === "jour") {
                    return value
                } else if (timeUnit === "semaine") {
                    return value * 7
                }
            }
            const medication = new Medication({
                medicinalProduct: getMedicinalProduct(),
                beginMoment: parseInt((data.treatmentStartDate as string).replace(/-/g, '')),
                endMoment: parseInt((data.executableUntil as string).replace(/-/g, '')),

                // new Code for unit property
                duration: new Duration({
                    unit: Code.from("CD-TIMEUNIT", "D"),
                    value: getDurationInDays(data.durationTimeUnit as string, data.duration as number)
                }),

                renewal: new MedicationRenewal({
                    decimal: prescriptionsNumber,
                    duration: new Duration({unit: Code.from("CD-TIMEUNIT", "D"), value: data.periodicityDaysNumber})
                }),

                instructionForPatient: data.dosage,
                recipeInstructionForPatient: data.recipeInstructionForPatient,
                instructionsForReimbursement: data.instructionsForReimbursement,
                // substitutionAllowed: data.substitutionAllowed
            })

            handleSave(medication)
            handleClose()
        } else {
            console.log('Invalid Form');
        }
    }
</script>

<div class=" addMedicationModal">
    <div class=" addMedicationModal__content">
        <form id="prescriptionForm" class='addMedicationForm' onsubmit={(e) => handleSubmit(e)}>
            <div class=' addMedicationForm__header'>
                <h3>Modifier la prescription</h3>
                <button class=' addMedicationForm__header__closeIcn' onclick={() =>handleClose()}>
                    <CloseIcn/>
                </button>
            </div>
            <div class=' addMedicationForm__body'>
                <div class=' addMedicationForm__body__content'>
                    <div class=' addMedicationForm__body__content__inputs'>
                        <Input label='Nom groupe DCI' value={medicationTitle} required
                               disabled
                               id='drugName'/>
                        <Input label='Posologie' id='dosage' bind:value={dosage} required
                               errorMessage={errors.dosage?.validationError  }/>
                        <div class=' addMedicationForm__body__content__inputs__group'>
                            <Input label='Durée (nombre d’unités)' bind:value={duration} required
                                   errorMessage={errors.duration?.validationError  }
                                   id='duration' type='number' min={1}/>
                            <Select label='Unité de temps' bind:value={durationTimeUnit} required
                                    id='durationTimeUnit' options={durationTimeUnits}/>
                        </div>
                        <div class=' addMedicationForm__body__content__inputs__group'>
                            <Input label='Date début du traitement' bind:value={treatmentStartDate} required
                                   errorMessage={errors.treatmentStartDate?.validationError  }
                                   id='treatmentStartDate' type='date'/>
                            <Input label='Exécutable jusqu`au' bind:value={executableUntil} required
                                   errorMessage={errors.executableUntil?.validationError  }
                                   id='executableUntil' type='date'/>
                        </div>
                        <div class=' addMedicationForm__body__content__inputs__group'>
                            <Input label='Nombre de prescriptions' bind:value={prescriptionsNumber} required
                                   errorMessage={errors.prescriptionsNumber?.validationError  }
                                   id='prescriptionsNumber' type='number' min={1} max={12}/>
                            {#if prescriptionsNumber && prescriptionsNumber > 1}
                                <Select label='Périodicité' bind:value={periodicityTimeUnit} required
                                        id='periodicityTimeUnit' options={periodicityTimeUnits}/>
                            {/if}
                            {#if periodicityTimeUnit === 'x nombre de jours'}
                                <Input label='Nombre de jours' bind:value={periodicityDaysNumber} required
                                       errorMessage={errors.periodicityDaysNumber?.validationError  }
                                       id='periodicityDaysNumber' type='number' min={1}/>
                            {/if}
                        </div>
                    </div>
                </div>
                <Switch id='showExtraFields' value='Afficher plus'
                        bind:checked={showExtraFields}/>
                {#if !showExtraFields}
                    <div class=" addMedicationForm__body__extraFieldsPreview">
                        {#if !!recipeInstructionForPatient}
                            <p>{recipeInstructionForPatient}</p>
                        {/if}
                        {#if !!instructionsForReimbursement}
                            <p>{instructionsForReimbursement}</p>
                        {/if}
                        {#if !!prescriberVisibility}
                            <p>{prescriberVisibility}</p>
                        {/if}
                        {#if !!pharmacyVisibility}
                            <p>{pharmacyVisibility}</p>
                        {/if}
                        <p></p>
                    </div>
                {:else}
                    <div class=' addMedicationForm__body__content'>
                        <div class=' addMedicationForm__body__content__inputs'>
					<Textarea label='Instructions pour le patient' id='recipeInstructionForPatient'
                              bind:value={recipeInstructionForPatient}/>
                            <Select label='Instructions remboursement' id='instructionsForReimbursement'
                                    bind:value={instructionsForReimbursement} options={reimbursementOptions}/>

                            <Select label='Visibilité prescripteur' bind:value={prescriberVisibility}
                                    id='prescriberVisibility' options={prescriberVisibilityOptions}/>
                            <Select label='Visibilité officine' bind:value={pharmacyVisibility}
                                    id='pharmacyVisibility' options={pharmacyVisibilityOptions}/>

                        </div>
                    </div>
                {/if}
            </div>
            <div class=' addMedicationForm__footer'>
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
