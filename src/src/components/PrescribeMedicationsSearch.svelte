<script lang='ts'>
	import { SearchIcn } from '../icons/index.svelte';
	import type { MedicationType } from '../types/index.svelte';
	import MedicationRow from './MedicationRow.svelte';
	import AddMedicationModal from './AddMedicationModal.svelte';
	import {initialiseSdk} from "../../lib/cardinal";
	import {onMount} from "svelte";

	let sdk: any;

	onMount(async () => {
		sdk = await initialiseSdk()
	});

	let searchQuery: string | undefined = $state();
	let active: boolean = $derived(!!searchQuery);
	let showModal = $state(false);


	const medications: MedicationType[] = [
		{
			id: '0',
			title: 'Nuralgan 500/200 compr. pellic. 90x',
			activeIngredient: 'paracétamol + ibuprofène oral 500 mg + 200 mg',
			price: '€8.45'
		},
		{
			id: '0',
			title: 'Nuralgan 1000',
			activeIngredient: 'paracétamol + ibuprofène oral 500 mg + 200 mg',
			price: '€12.5'
		},
		{
			id: '0',
			title: 'Nuralgan 100',
			activeIngredient: 'paracétamol + ibuprofène oral 500 mg + 200 mg',
			price: '€3.2'
		}
	];


</script>

<div class='prescribeMedications'>

	<div class:active class='prescribeMedications__search'>
		<label for='searchMedications'>Prescribe medications:</label>
		<div class='prescribeMedications__search__input'>
			<input id='searchMedications' type='text' placeholder='Find the drug' bind:value={searchQuery} />
			<SearchIcn />
		</div>
	</div>
	{#if !!searchQuery}
		<div class='prescribeMedications__dropdown'>
			{#each medications as medication}
				<MedicationRow {medication} onModifyPrescription={() => (showModal = true)} />
			{/each}
		</div>
	{/if}
</div>

<AddMedicationModal bind:showModal />


<style lang='scss'>
  @import '../../style/app';

  .prescribeMedications {
    display: flex;
    flex-direction: column;
    width: 600px;

    &__search {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;

      label {
        color: $gray-900;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
      }

      &__input {
        width: 100%;
        display: flex;
        height: 40px;
        padding: 5px 12px;
        align-items: center;
        gap: 4px;
        align-self: stretch;

        border-radius: 6px;
        border: 1px solid $gray-300;
        background: #FFF;

        &:hover {
          border-color: $burgundy-900;
        }

        input {
          border: none;
          width: 100%;
          color: $gray-900;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;

          &::placeholder {
            color: $gray-600;
            opacity: 0.7;
            font-size: 14px;
          }
        }
      }

      &.active {
        .prescribeMedications__search__input {
          border-color: $burgundy-900;
          border-radius: 6px 6px 0 0;
        }
      }
    }

    &__dropdown {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;

      border-radius: 0 0 6px 6px;
      border: 1px solid $burgundy-900;
      border-top: none;
      background: #FFF;
    }

    .prescribeMedications__dropdown :global(.medicationRow:last-child) {
      border-bottom: none;
      border-radius: 0 0 6px 6px;
    }
  }

</style>
