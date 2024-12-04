<script lang="ts">
	import { CloseIcn } from '../icons/index.svelte';
	import Button from './common/Button.svelte';
	import Input from './common/Input.svelte';
	import Switch from './common/Switch.svelte';
	import Select from './common/Select.svelte';
	import Textarea from './common/Textarea.svelte';
	import type {MedicationType} from "../types/index.svelte";

	let { showModal = $bindable(), selectedMedication }:{showModal: boolean, selectedMedication: MedicationType} = $props();

	let dialog: HTMLDialogElement | undefined = $state();
	const medicationTitle = selectedMedication.title;

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
	const pharmacyVisibilityOptions = [
		{
			id: '0',
			text: 'Le médicament est visible par tous les pharmaciens'
		},
		{
			id: '1',
			text: 'Le médicament n`est pas visible par tous les pharmaciens'
		},
	];

	// Get today's date
	const today = new Date();

	// Calculate the date one year from today
	const nextYear = new Date(today);
	nextYear.setFullYear(today.getFullYear() + 1);

	// Format the dates as YYYY-MM-DD
	const formattedToday = today.toISOString().split('T')[0];
	const formattedNextYear = nextYear.toISOString().split('T')[0];

	let dosage: string | undefined = $state();
	let duration: number | undefined = $state(1);
	let durationTimeUnit: {id: string, text: string} = $state(durationTimeUnits[0]);
	let instructionsForPatient : string | undefined = $state();
	let refundInstructions: string | undefined = $state();

	let treatmentStartDate: string | undefined = $state(formattedToday);
	let executableUntil: string | undefined = $state(formattedNextYear);

	let prescriptionsNumber: number | undefined = $state(0);
	let periodicityTimeUnit: {id: string, text: string} = $state(periodicityTimeUnits[0]);
	let periodicityDaysNumber: number | undefined = $state();
	let prescriberVisibility: {id: string, text: string} = $state(prescriberVisibilityOptions[0]);
	let pharmacyVisibility: {id: string, text: string} = $state(pharmacyVisibilityOptions[0]);

	let showExtraFields = $state(false);

	$effect(() => {
		if (showModal) dialog?.showModal();
	});
</script>



<dialog
		bind:this={dialog}
		onclose={() => (showModal = false)}
		onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class='addMedicationModal'>
		<div class='addMedicationModal__header'>
			<h3>Modifier la prescription</h3>
			<button class='addMedicationModal__header__closeIcn' onclick={() => dialog?.close()}>
				<CloseIcn />
			</button>
		</div>
		<div class='addMedicationModal__body'>
			<div class='addMedicationModal__body__content'>
				<div class='addMedicationModal__body__content__inputs'>
					<Input label='Nom groupe DCI' defaultValue={medicationTitle} required
						   disabled
						   id='drugName' />
					<Input label='Posologie' required
								 id='dosage' defaultValue={dosage} />
					<div class='addMedicationModal__body__content__inputs__group'>
						<Input label='Durée (nombre d’unités)' bind:defaultValue={duration} required
									 id='duration' type='number' min={1} />
						<Select label='Unité de temps' bind:defaultValue={durationTimeUnit} required
										id='durationTimeUnit' options={durationTimeUnits} />
					</div>
					<div class='addMedicationModal__body__content__inputs__group'>
						<Input label='Date début du traitement' bind:defaultValue={treatmentStartDate}
							   id='treatmentStartDate' type='date' />
						<Input label='Exécutable jusqu`au' bind:defaultValue={executableUntil} required
							   id='executableUntil' type='date' />
					</div>

				</div>
			</div>
			<Switch id='showExtraFields' value='Afficher plus'
					bind:checked={showExtraFields} />
			{#if !showExtraFields}
				<div class="addMedicationModal__body__extraFieldsPreview">
					{#if !!instructionsForPatient}
						<p>{instructionsForPatient}</p>
					{/if}
					{#if !!refundInstructions}
						<p>{refundInstructions}</p>
					{/if}
					{#if !!prescriptionsNumber}
						<p>{prescriptionsNumber}</p>
						<p>{periodicityTimeUnit.text ?? ''}</p>
						<p>{periodicityDaysNumber ?? ''}</p>
					{/if}
					{#if !!prescriberVisibility}
						<p>{prescriberVisibility.text}</p>
					{/if}
					{#if !!pharmacyVisibility}
						<p>{pharmacyVisibility.text}</p>
					{/if}
					<p></p>
				</div>
			{:else}
				<div class='addMedicationModal__body__content'>
					<div class='addMedicationModal__body__content__inputs'>
					<Textarea label='Instructions pour le patient' id='instructionsForPatient'
							  bind:defaultValue={instructionsForPatient} />
					<Textarea label='Instructions remboursement' id='refundInstructions'
							  bind:defaultValue={refundInstructions} />
					<div class='addMedicationModal__body__content__inputs__group'>
						<Input label='Nombre de prescriptions' bind:defaultValue={prescriptionsNumber}
									 id='prescriptionsNumber' type='number' min={1} max={12} />
						{#if prescriptionsNumber && prescriptionsNumber > 1}
							<Select label='Périodicité' bind:defaultValue={periodicityTimeUnit}
											id='periodicity' options={periodicityTimeUnits} />
						{/if}
						{#if periodicityTimeUnit.text === 'x nombre de jours'}
							<Input label='Nombre de jours' bind:defaultValue={periodicityDaysNumber}
										 id='daysNumber' type='number' min={1} />
						{/if}
					</div>
					<Select label='Visibilité prescripteur' bind:defaultValue={prescriberVisibility}
									id='prescriberVisibility' options={prescriberVisibilityOptions} />
					<Select label='Visibilité officine' bind:defaultValue={pharmacyVisibility}
							id='pharmacyVisibility' options={pharmacyVisibilityOptions} />

					</div>
				</div>
			{/if}
		</div>
		<div class='addMedicationModal__footer'>
			<Button title='Cancel' handleClick={() => { dialog?.close() } } type='outlined' />
			<Button title='Save' handleClick={() => console.log('Save') } type='primary' />
		</div>
	</div>
</dialog>

<style lang='scss'>
  @use '../../style/app';

  dialog {
  	width: 100%;
    max-width: 900px;
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
	padding: 24px 32px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	flex: 1 0 0;
	gap: 12px;
	background-color: app.$gray-50;

	&__divider {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			align-self: stretch;
			overflow: hidden;

			&__btnHolder{
				position: relative;
				&::before, &::after {
					content: '';
					display: block;
					height: 1px;
					width: 320px;
					border-bottom: 1px dashed app.$gray-400;
					position: absolute;
					top: 50%;
				}

				&::before{
					left: -330px;
				}

				&::after{
					right: -330px;
				}
			}
		}
	&__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
	  border-radius: 12px;
	  border: 1px solid app.$gray-300;
	  background: #FFF;

		  &__inputs{
			  display: flex;
			  padding: 24px;
			  flex-direction: column;
			  align-items: flex-start;
			  gap: 12px;
			  align-self: stretch;

			  &__group {
				  width: 100%;
				  display: flex;
				  align-items: flex-end;
				  gap: 4px;
				  align-self: stretch;
			  }
		  }
      }
	&__extraFieldsPreview{
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
