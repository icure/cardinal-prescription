<script>
	import { CloseIcn } from '../icons/index.svelte';
	import Button from './common/Button.svelte';
	import Input from './common/Input.svelte';
	import Switch from './common/Switch.svelte';
	import Select from './common/Select.svelte';
	import Textarea from './common/Textarea.svelte';

	let { showModal = $bindable() } = $props();

	let dialog = $state(); // HTMLDialogElement
	const defaultDrug = 'Ibuprofène oral 200 mg [CAVE séc., solide/liq.]';

	const dosageTimeUnits = [
		{
			id: '0',
			text: 'par jour'
		},
		{
			id: '1',
			text: 'par semaine'
		},
		{
			id: '2',
			text: 'par mois'
		},
		{
			id: '3',
			text: 'une fois'
		}
	];
	const durationTimeUnits = [
		{
			id: '0',
			text: 'jour'
		},
		{
			id: '1',
			text: 'semaine'
		}
	];
	const periodicityTimeUnits = [
		{
			id: '0',
			text: 'aucune'
		},
		{
			id: '1',
			text: 'semaine'
		},
		{
			id: '2',
			text: '2 semaines'
		},
		{
			id: '3',
			text: '3 semaines'
		},
		{
			id: '4',
			text: 'x nombre de jours'
		}
	];
	const prescriberVisibilityOptions = [
		{
			id: '0',
			text: 'Visible pour tous les prescripteurs'
		},
		{
			id: '1',
			text: 'Visible uniquement pour moi-même'
		},
		{
			id: '2',
			text: 'Visible uniquement pour le titulaire du DMG'
		}
	];
	let showDosageExpanded = $state();
	let dosagePerTimeUnit = $state(1);
	let dosageFrequency = $state(1);
	let dosageTimeUnit = $state(dosageTimeUnits[0]);
	let dosage = $state();
	let duration = $state(1);
	let durationTimeUnit = $state(durationTimeUnits[0]);
	let instructionsForPatient = $state();
	let refundInstructions = $state();
	let executableUntil = $state();
	let prescriptionsNumber = $state();
	let periodicityTimeUnit = $state(periodicityTimeUnits[0]);
	let periodicityDaysNumber = $state();
	let treatmentStartDate = $state();
	let prescriberVisibility = $state(prescriberVisibilityOptions[0]);
	let pharmacyVisibility = $state(true);

	$effect(() => {
		if (showModal) dialog.showModal();

		dosage = dosagePerTimeUnit + ' x ' + dosageFrequency + ' ' + dosageTimeUnit.text;
	});
</script>

<dialog bind:this={dialog}
				onclose={() => (showModal = false)}
				onclick={(e) => { if (e.target === dialog) dialog.close(); }}>
	<div class='addMedicationModal'>
		<div class='addMedicationModal__header'>
			<h3>Modifier la prescription</h3>
			<button class='addMedicationModal__header__closeIcn' onclick={() => dialog.close()}>
				<CloseIcn />
			</button>
		</div>
		<div class='addMedicationModal__body'>
			<div class='addMedicationModal__body__content withBorderBottom'>
				<Input label='Nom groupe DCI' defaultValue={defaultDrug} required
							 disabled
							 id='drugName' />
				<Input label='Posologie' required
							 id='dosage' defaultValue={dosage} />
				<Switch id='dosageExpanded' value='Posologie structurée'
								bind:checked={showDosageExpanded} />
				{#if showDosageExpanded}
					<div class='addMedicationModal__body__content__fieldsGroup'>
						<Input label='Dose' bind:defaultValue={dosagePerTimeUnit} required
									 id='dosePerTimeUnit' type='number' min={1} />
						<Input label='Fréquence' bind:defaultValue={dosageFrequency} required
									 id='frequency' type='number' min={1} />
						<Select label='Unité de temps' bind:defaultValue={dosageTimeUnit} required
										id='dosageTimeUnit' options={dosageTimeUnits} />
					</div>
				{/if}
				<div class='addMedicationModal__body__content__fieldsGroup'>
					<Input label='Durée (nombre d’unités)' bind:defaultValue={duration} required
								 id='duration' type='number' min={1} />
					<Select label='Unité de temps' bind:defaultValue={durationTimeUnit} required
									id='durationTimeUnit' options={durationTimeUnits} />
				</div>
				<Textarea label='Instructions pour le patient' id='instructionsForPatient'
									bind:defaultValue={instructionsForPatient} />
				<Textarea label='Instructions remboursement' id='refundInstructions'
									bind:defaultValue={refundInstructions} />
			</div>

			<div class='addMedicationModal__body__content'>
				<Input label='Exécutable jusqu`au' bind:defaultValue={executableUntil} required
							 id='executableUntil' type='date' />
				<div class='addMedicationModal__body__content__fieldsGroup'>
					<Input label='Nombre de prescriptions' bind:defaultValue={prescriptionsNumber} required
								 id='prescriptionsNumber' type='number' min={1} max={12} />
					{#if prescriptionsNumber > 1}
						<Select label='Périodicité' bind:defaultValue={periodicityTimeUnit} required
										id='periodicity' options={periodicityTimeUnits} />
					{/if}
					{#if periodicityTimeUnit.text === 'x nombre de jours'}
						<Input label='Nombre de jours' bind:defaultValue={periodicityDaysNumber} required
									 id='daysNumber' type='number' min={1} />
					{/if}
				</div>
				<Input label='Date début du traitement' bind:defaultValue={treatmentStartDate} required
							 id='treatmentStartDate' type='date' />

				<Select label='Visibilité prescripteur' bind:defaultValue={prescriberVisibility} required
								id='prescriberVisibility' options={prescriberVisibilityOptions} />

				<Switch id='pharmacyVisibility' value='Le médicament est visible par tous les pharmaciens'
								label='Visibilitée officine'
								bind:checked={pharmacyVisibility} />
			</div>
		</div>
		<div class='addMedicationModal__footer'>
			<Button title='Cancel' onclick={() => { dialog.close() } } type='outlined' />
			<Button title='Save' onclick={() => console.log('Save') } type='primary' />
		</div>
	</div>
</dialog>

<style lang='scss'>
  @use '../../style/app';

  dialog {
    width: 900px;
    height: 100%;
    max-height: 100%;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    background-color: white;
    margin: 0 0 0 auto;

    &::backdrop {
      background: rgba(154, 153, 178, 0.3);
    }

    &[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    &[open]::backdrop {
      animation: fade 0.2s ease-out;
    }
  }

  .addMedicationModal {
    display: flex;
    height: 100%;
    width: 100%;
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 0;
      background-color: app.$gray-50;

      &__content {
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;

        &.withBorderBottom {
          border-bottom: 1px dashed app.$gray-400;
        }

        &__fieldsGroup {
          width: 100%;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          align-self: stretch;
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
