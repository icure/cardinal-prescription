<script lang='ts'>
  import {SearchIcn} from '../icons/index.svelte';
  import type {MedicationType} from '../types/index.svelte';
  import MedicationRow from './MedicationRow.svelte';
  import {initialiseSdk, searchMedications} from "../../lib/cardinal";
  import {onMount} from "svelte";
  import {Amp, AmpStatus, DmppCodeType, type PaginatedListIterator} from "@icure/cardinal-be-sam";
  import InfiniteScroll from "./InfiniteScroll.svelte";

  let sdk: any;

  onMount(async () => {
    sdk = await initialiseSdk()
  });

  let searchQuery: string | undefined = $state();
  let dropdownDisplayed: boolean = $derived(!!searchQuery);
  let displayedMedications: PaginatedListIterator<Amp> | undefined
  let pages: MedicationType[][] = $state([]);
  let newPages: MedicationType[][] = $state([]);
  let {deliveryEnvironment, handleAddPrescription}: {
    deliveryEnvironment: string,
    handleAddPrescription: (medication: MedicationType) => void
  } = $props()

  async function loadPage(medications: PaginatedListIterator<Amp>, min: number, acc: MedicationType[] = []): Promise<MedicationType[]> {
    const now = Date.now()
    const twoYearsAgo = now - 2 * 365 * 24 * 3600 * 1000;
    const page: MedicationType[] = (!(await medications.hasNext()) ? [] : await medications.next(min)).flatMap((amp: Amp) => amp.to && amp.to < now ? [] : amp.ampps.filter((ampp) => {
      return ampp.from && ampp.from < now && (!ampp.to || ampp.to > now) && ampp.status == AmpStatus.Authorized && ampp.commercializations?.some((c) => !!c.from && (!c.to || c.to > twoYearsAgo)) && ampp.dmpps?.some((dmpp) => dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now) && dmpp.deliveryEnvironment?.toString() == deliveryEnvironment);
    }).map((ampp) => {
      let dmpp = ampp.dmpps?.find((dmpp) => dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now) && dmpp.deliveryEnvironment?.toString() == deliveryEnvironment && dmpp.codeType == DmppCodeType.Cnk);
      return {
        ampId: amp.id,
        id: ampp.ctiExtended,
        cnk: dmpp?.code,
        dmppProductId: dmpp?.productId,
        title: ampp.prescriptionName?.fr ?? ampp.abbreviatedName?.fr ?? amp.prescriptionName?.fr ?? amp.name?.fr ?? amp.abbreviatedName?.fr ?? '',
        activeIngredient: amp.vmp?.vmpGroup?.name?.fr ?? '',
        price: ampp?.exFactoryPrice ? `€${ampp.exFactoryPrice}` : '',
        crmLink: ampp.crmLink?.fr,
        patientInformationLeafletLink: ampp.leafletLink?.fr,
        blackTriangle: amp.blackTriangle,
        speciallyRegulated: ampp.speciallyRegulated,
        genericPrescriptionRequired: ampp.genericPrescriptionRequired,
        intendedName: ampp.prescriptionName?.fr
      }
    }))
    return page.length == 0 || page.length + acc.length >= min ? [...acc, ...page] : await loadPage(medications, min, [...acc, ...page])
  }

  $effect(() => {
    let q = searchQuery;
    if (q && q.length >= 3) {
      const cachedQuery = q
      pages = []
      setTimeout(() => {
        if (cachedQuery === searchQuery) {
          searchMedications(sdk, 'fr', cachedQuery).then(async (medications) => {
            displayedMedications = medications;
            if (medications) {
              const firstPage = await loadPage(medications, 10);
              pages = [firstPage]
            }
          });
        }
      }, 100)

    }
  });

  const loadMore = async () => {
    if (displayedMedications) {
      newPages = [await loadPage(displayedMedications, 10)]
      pages = [...pages, ...newPages]
    }
  }


</script>

<div class='prescribeMedications'>

    <div class:dropdownDisplayed class='prescribeMedications__search'>
        <p class='prescribeMedications__search'>Trouver un médicament:</p>
        <label for='searchMedications' class='prescribeMedications__search__inputWrap'>
            <input id='searchMedications' type='text' placeholder='Trouver un médicament' bind:value={searchQuery}/>
            <SearchIcn/>
        </label>
    </div>
    {#if (pages.length !== 0 && dropdownDisplayed)}
        <div class='prescribeMedications__dropdown'>
            {#each pages as medicationPage}
                {#each medicationPage as medication}
                    <MedicationRow {medication} {handleAddPrescription}/>
                {/each}
            {/each}
            <InfiniteScroll
                    threshold={50}
                    loadMore={() => loadMore()}/>
        </div>
    {/if}
</div>

<style lang='scss'>
  @use '../../style/app';

  .prescribeMedications {
    display: flex;
    flex-direction: column;
    width: 700px;

    @include app.media-breakpoint-down(app.$md) {
      width: 100%;
    }

    &__search {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;

      &__label {
        color: app.$gray-900;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
      }

      &__inputWrap {
        width: 100%;
        display: flex;
        height: 40px;
        padding: 5px 12px;
        align-items: center;
        gap: 4px;
        align-self: stretch;

        border-radius: 6px;
        border: 1px solid app.$gray-300;
        background: #FFF;

        &:hover {
          border-color: app.$burgundy-900;
        }

        input {
          border: none;
          width: 100%;
          color: app.$gray-900;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;

          &::placeholder {
            color: app.$gray-600;
            opacity: 0.7;
            font-size: 14px;
          }
        }
      }

      &.dropdownDisplayed {
        .prescribeMedications__search__inputWrap {
          border-color: app.$burgundy-900;
          border-radius: 6px 6px 0 0;
        }
      }
    }

    &__dropdown {
      width: 100%;
      height: 380px;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;

      padding: 6px;
      padding-right: 8px;
      gap: 5px;

      border-radius: 0px 0px 6px 6px;
      border: 1px solid app.$burgundy-900;
      border-top: none;
      background: app.$blue-400;
    }

    .prescribeMedications__dropdown :global(.medicationRow:last-child) {
      border-bottom: none;
      border-radius: 0 0 6px 6px;
    }
  }

</style>
