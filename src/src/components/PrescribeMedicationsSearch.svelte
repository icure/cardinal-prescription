<script lang='ts'>
    import {SearchIcn} from '../icons/index.svelte';
    import type {MedicationType} from '../types/index.svelte';
    import MedicationRow from './MedicationRow.svelte';
    import {initialiseSdk, searchMedications} from "../../lib/cardinal";
    import {onDestroy, onMount} from "svelte";
    import {
        Amp,
        AmpStatus,
        DmppCodeType,
        type Nmp,
        type PaginatedListIterator,
        type VmpGroup
    } from "@icure/cardinal-be-sam";
    import InfiniteScroll from "./InfiniteScroll.svelte";
    import {capitalize, mergeSortedPartialArraysN} from "../helpers/index.svelte";

    let sdk: any;

    let focusedMedicationIndex = $state(-1);
    let resultRefs: (HTMLLIElement | null)[] = $state([]); // Array to store references to list items
    let disableHover = $state(false);

    onMount(async () => {
        sdk = await initialiseSdk()
        focusedMedicationIndex = 0;
    });

    onDestroy(() => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("mousemove", handleMouseMove);
    });

    let searchQuery: string | undefined = $state();
    let dropdownDisplayed: boolean = $derived(!!searchQuery);
    let pages: MedicationType[] = $state([]);
    let pagesPointers: number[] = $state([]);

    let medications: PaginatedListIterator<Amp> | undefined = $state()
    let molecules: PaginatedListIterator<VmpGroup> | undefined = $state()
    let products: PaginatedListIterator<Nmp> | undefined = $state()

    let medicationsPage: MedicationType[] = $state([]);
    let moleculesPage: MedicationType[] = $state([]);
    let productsPage: MedicationType[] = $state([]);

    let {deliveryEnvironment, handleAddPrescription, disableInputEventsTracking, short = false}: {
        deliveryEnvironment: string,
        handleAddPrescription: (medication: MedicationType) => void
        disableInputEventsTracking: boolean
        short: boolean
    } = $props()

    async function loadMedicationsPage(medications: PaginatedListIterator<Amp>, min: number, acc: MedicationType[] = []): Promise<MedicationType[]> {
        const now = Date.now()
        const twoYearsAgo = now - 2 * 365 * 24 * 3600 * 1000;
        const loadedPage = !(await medications.hasNext()) ? [] : await medications.next(min);

        // console.log('loadedPage')
        // console.log(loadedPage)

        const page: MedicationType[] = loadedPage.flatMap((amp: Amp) => amp.to && amp.to < now ? [] : amp.ampps.filter((ampp) => {
            return ampp.from && ampp.from < now && (!ampp.to || ampp.to > now) && ampp.status == AmpStatus.Authorized && ampp.commercializations?.some((c) => !!c.from && (!c.to || c.to > twoYearsAgo)) && ampp.dmpps?.some((dmpp) => dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now) && dmpp.deliveryEnvironment?.toString() == deliveryEnvironment);
        }).map((ampp) => {

            let dmpp = ampp.dmpps?.find((dmpp) => dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now) && dmpp.deliveryEnvironment?.toString() == deliveryEnvironment && dmpp.codeType == DmppCodeType.Cnk);
            return {
                ampId: amp.id,
                vmpGroupId: amp.vmp?.vmpGroup?.id,
                id: ampp.ctiExtended,
                cnk: dmpp?.code,
                dmppProductId: dmpp?.productId,
                title: ampp.prescriptionName?.fr ?? ampp.abbreviatedName?.fr ?? amp.prescriptionName?.fr ?? amp.name?.fr ?? amp.abbreviatedName?.fr ?? '',
                vmpTitle: amp.vmp?.name?.fr ?? '',
                activeIngredient: amp.vmp?.vmpGroup?.name?.fr ?? '',
                price: ampp?.exFactoryPrice ? `€${ampp.exFactoryPrice}` : '',
                crmLink: ampp.crmLink?.fr,
                patientInformationLeafletLink: ampp.leafletLink?.fr,
                blackTriangle: amp.blackTriangle,
                speciallyRegulated: ampp.speciallyRegulated,
                genericPrescriptionRequired: ampp.genericPrescriptionRequired,
                intendedName: ampp.prescriptionName?.fr,
                rmaProfessionalLink: ampp.rmaProfessionalLink?.fr,
                spcLink: ampp.spcLink?.fr,
                dhpcLink: ampp.dhpcLink?.fr,
                rmakeyMessages: ampp.rmaKeyMessages,
                vmp: amp.vmp,
                supplyProblems: ampp.supplyProblems,
                commercializations: ampp?.commercializations,
                deliveryModusCode: ampp.deliveryModusCode,
                deliveryModus: ampp.deliveryModus?.fr,
                deliveryModusSpecificationCode: ampp.deliveryModusSpecificationCode,
                deliveryModusSpecification: ampp.deliveryModusSpecification?.fr,
                reimbursements: dmpp?.reimbursements?.find((dmpp) => dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now))
            } as MedicationType
        }))
        return loadedPage.length < min || page.length + acc.length >= min ? [...acc, ...page] : await loadMedicationsPage(medications, min, [...acc, ...page])
    }

    async function loadMoleculesPage(molecules: PaginatedListIterator<VmpGroup>, min: number, acc: MedicationType[] = []): Promise<MedicationType[]> {
        const now = Date.now()
        const loadedPage = !(await molecules.hasNext()) ? [] : await molecules.next(min);
        console.log('molecules')
        console.log(loadedPage)

        const page: MedicationType[] = loadedPage.filter((vmp: VmpGroup) => !(vmp.to && vmp.to < now)).map((vmp) => {
            return {
                vmpGroupId: vmp.id,
                id: vmp.code,
                title: capitalize(vmp.name?.fr) ?? '',
                standardDosage: vmp.standardDosage
            } as MedicationType
        })
        return page.length < min || page.length + acc.length >= min ? [...acc, ...page] : await loadMoleculesPage(molecules, min, [...acc, ...page])
    }

    async function loadNonMedicinalPage(products: PaginatedListIterator<Nmp>, min: number, acc: MedicationType[] = []): Promise<MedicationType[]> {
        const now = Date.now()
        const loadedPage = !(await products.hasNext()) ? [] : await products.next(min);
        const page: MedicationType[] = loadedPage.filter((nmp: Nmp) => !(nmp.to && nmp.to < now)).map((nmp) => {
            return {
                nmpId: nmp.id,
                id: nmp.code,
                title: capitalize(nmp.name?.fr) ?? '',
            } as MedicationType
        })
        return loadedPage.length < min || page.length + acc.length >= min ? [...acc, ...page] : await loadNonMedicinalPage(products, min, [...acc, ...page])
    }

    const loadUntil = async (toName: string | undefined, loadPage: () => Promise<MedicationType[]>) => {
        let page = await loadPage()
        const lcToName = toName?.toLowerCase();
        while (page.length && (!lcToName || page[page.length - 1].title.toLowerCase() < lcToName)) {
            let newPage = await loadPage()
            if (!newPage.length) {
                break
            }
            page = [...page, ...newPage]
        }
        return page
    }

    const loadMore = async () => {
        const [result, pointers] = await mergeSortedPartialArraysN(10, [[...medicationsPage], [...moleculesPage], [...productsPage]], [
            async (_, toName) => {
                // console.log("Loading medications until", toName)
                const loaded = await loadUntil(toName, () => medications ? loadMedicationsPage(medications, 10) : Promise.resolve([]));
                medicationsPage = [...medicationsPage, ...loaded]
                return loaded
            },
            async (_, toName) => {
                // console.log("Loading molecules until", toName)
                const loaded = await loadUntil(toName, () => molecules ? loadMoleculesPage(molecules, 10) : Promise.resolve([]));
                moleculesPage = [...moleculesPage, ...loaded]
                return loaded
            },
            async (_, toName) => {
                // console.log("Loading non-medications until", toName)
                const loaded = await loadUntil(toName, () => products ? loadNonMedicinalPage(products, 10) : Promise.resolve([]));
                productsPage = [...productsPage, ...loaded]
                return loaded
            }
        ])

        medicationsPage = medicationsPage.slice(pointers[0])
        moleculesPage = moleculesPage.slice(pointers[1])
        productsPage = productsPage.slice(pointers[2])

        return result
    }

    $effect(() => {
        let q = searchQuery;
        if (q && q.length >= 3) {
            const cachedQuery = q
            pages = []
            setTimeout(() => {
                if (cachedQuery === searchQuery) {
                    searchMedications(sdk, 'fr', cachedQuery).then(async ([meds, mols, prods]) => {
                        medications = meds;
                        molecules = mols;
                        products = prods;

                        if (cachedQuery !== searchQuery) {
                            return
                        }

                        [medicationsPage, moleculesPage, productsPage] = await Promise.all([
                            medications ? loadMedicationsPage(medications, 10) : [],
                            molecules ? loadMoleculesPage(molecules, 10) : [],
                            products ? loadNonMedicinalPage(products, 10) : []
                        ])

                        if (cachedQuery !== searchQuery) {
                            return
                        }

                        loadMore().then((result) => {
                            pages = result
                        })
                    });
                }
            }, 100)

        }
    });


    const totalPagesLength = $derived(pages.length)

    function handleKeyDown(event: KeyboardEvent): void {

        if (disableInputEventsTracking) return;

        const defaultActions = () => {
            event.preventDefault(); // Prevent default scrolling behavior
            disableHover = true; // Disable hover effects
        }

        if (event.key === 'ArrowDown') {
            defaultActions()
            focusedMedicationIndex = (focusedMedicationIndex + 1) % totalPagesLength;
            scrollToFocusedItem();
        } else if (event.key === 'ArrowUp') {
            defaultActions()
            focusedMedicationIndex = (focusedMedicationIndex - 1 + totalPagesLength) % totalPagesLength;
            scrollToFocusedItem();
        } else if (event.key === 'Enter' && focusedMedicationIndex >= 0) {
            event.preventDefault()
            disableHover = false;
            handleAddPrescription(pages[focusedMedicationIndex])
        }
    }

    function scrollToFocusedItem(): void {
        if (focusedMedicationIndex >= 0 && resultRefs[focusedMedicationIndex]) {
            resultRefs[focusedMedicationIndex]?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
    }

    function handleMouseMove() {
        if (!disableInputEventsTracking) disableHover = false; // Re-enable hover on mouse movement
    }
</script>

<div
        class='prescribeMedications'
        role="listbox"
        tabindex="0"
        onkeydown={handleKeyDown}
        aria-activedescendant={focusedMedicationIndex >= 0 ? `result-${focusedMedicationIndex}` : undefined}
>

    <div class:dropdownDisplayed class='prescribeMedications__search'>
        <p class='prescribeMedications__search__label'>Trouver un médicament:</p>
        <label for='searchMedications' class='prescribeMedications__search__inputWrap'>
            <input id='searchMedications' type='text' placeholder='Trouver un médicament' autocomplete="off"
                   autocapitalize="off" bind:value={searchQuery}/>
            <SearchIcn/>
        </label>
    </div>
    {#if (pages.length !== 0 && dropdownDisplayed)}
        <ul class='prescribeMedications__dropdown' onmousemove={handleMouseMove}>
            {#each pages as medication, index}
                <li bind:this={resultRefs[index]} class:disableHover
                    class={focusedMedicationIndex === index ? 'focused' : ''}>
                    <MedicationRow {medication} {handleAddPrescription} id={`result-${index}`}
                                   focused={focusedMedicationIndex === index}
                                   disableHover={disableHover} {short}
                    />
                </li>
            {/each}
            <InfiniteScroll
                    threshold={50}
                    loadMore={() => loadMore().then((results) => pages = [...pages, ...results])}/>
        </ul>
    {/if}
</div>

<style lang='scss'>
  @use '../../style/app';

  .prescribeMedications {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 700px;

    @include app.media-breakpoint-down(app.$md) {
      width: 100%;
      min-width: 100%;
    }

    &__search {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;

      &__label {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        color: app.$gray-800;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 157.143% */
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
      height: 400px;
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

      li {
        width: 100%;
      }
    }
  }

</style>
