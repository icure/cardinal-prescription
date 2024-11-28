<script lang='ts'>
	import { SearchIcn } from '../icons/index.svelte';
	import type { MedicationType } from '../types/index.svelte';
	import MedicationRow from './MedicationRow.svelte';
	import AddMedicationModal from './AddMedicationModal.svelte';
	import {initialiseSdk, searchMedications} from "../../lib/cardinal";
	import {onMount} from "svelte";
	import {Amp, type PaginatedListIterator} from "@icure/cardinal-be-sam";

	let sdk: any;

	onMount(async () => {
		sdk = await initialiseSdk()
	});

	let searchQuery: string | undefined = $state();
	let dropdownDisplayed: boolean = $state(false);
	let showModal = $state(false);
	let displayedMedications: PaginatedListIterator<Amp> | undefined
	let pages: MedicationType[][] = $state([]);

	$effect(() => {
		let q = searchQuery;
		if (q && q.length >= 3) {
			searchMedications(sdk, 'fr', q).then(async (medications) => {
				displayedMedications = medications;
				if (medications) {
					pages = [(await medications.next(10)).flatMap((amp: Amp) => amp.ampps.map((ampp) => ({
						id: amp.id,
						title: amp.abbreviatedName?.fr ?? amp.name?.fr ?? '',
						activeIngredient: amp.vmp?.vmpGroup?.name?.fr ?? '',
						price: ampp?.exFactoryPrice ? `€${ampp.exFactoryPrice}` : ''
					})))]
				}
			});
		}
	});


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

	<div class:dropdownDisplayed class='prescribeMedications__search'>
		<label for='searchMedications'>Prescribe medications:</label>
		<div class='prescribeMedications__search__input'>
			<input id='searchMedications' type='text' placeholder='Find the drug' bind:value={searchQuery} />
			<SearchIcn />
		</div>
	</div>
	{#if !!searchQuery}
		<div class='prescribeMedications__dropdown'>
			{#each pages as medicationPage}
			{#each medicationPage as medication}
				<MedicationRow {medication} onModifyPrescription={() => (showModal = true)} />
			{/each}
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

      &.dropdownDisplayed {
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
