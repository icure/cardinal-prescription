<script lang='ts'>
  import type {MedicationType} from '../types/index.svelte';
  import {
    BlackTriangleIcn,
    ChevronIcn,
    EndOfCommercialisationIcn,
    LeafIcn,
    MoleculeIcn,
    PillsBottleIcn,
    PrescriptionIcn,
    SolidPillIcn,
    StartOfCommercialisationIcn,
    SupplyIcn
  } from '../icons/index.svelte';
  import {onMount} from "svelte";
  import Tooltip from "./common/Tooltip.svelte";
  import {formatTimestamp} from "../utils/timestampHelpers";
  import {Commercialization, SupplyProblem} from "@icure/cardinal-be-sam";
  import {deliveryModusSpecificationCodes} from '../helpers/index.svelte'


  let {medication, handleAddPrescription, id, focused, disableHover}: {
    medication: MedicationType,
    handleAddPrescription: (medication: MedicationType) => void
    id: string
    focused?: boolean
    disableHover?: boolean
  } = $props();

  let child: HTMLElement;
  let distanceToParentTop: number = $state(0);
  let isExpanded: boolean = $state(false)
  let showChevron: boolean = !!medication.crmLink || !!medication.patientInformationLeafletLink || !!medication.rmaProfessionalLink || !!medication.spcLink || !!medication.dhpcLink;

  onMount(() => {
    const parentTop = child.parentElement?.getBoundingClientRect();
    const childTop = child.getBoundingClientRect();
    distanceToParentTop = parentTop && childTop ? childTop.top - parentTop.top : 0;
  });

  const getSpecialRegulation = (code: number) => {
    switch (code) {
      case 1:
        return 'No narcotic, specially regulated drug'
      case 2:
        return 'Narcotic, specially regulated drug'
      default:
        return 'No special regulation'
    }
  }

  const medicationComercialization: Commercialization | undefined = medication.commercializations?.[0]
  const medicationSupplyProblems: SupplyProblem | undefined = medication.supplyProblems?.[0]

  // console.log(medication.reimbursements)
  console.log(medication.reimbursements)

</script>


{#snippet blackTriangleIcn()}
    <BlackTriangleIcn/>
{/snippet}
{#snippet orangeTriangleIcn()}
    <BlackTriangleIcn pathFill="#FF5E00"/>
{/snippet}
{#snippet specialRegulationsIcn()}
    <PillsBottleIcn/>
{/snippet}
{#snippet prescriptionRequiredIcn()}
    <PrescriptionIcn/>
{/snippet}
{#snippet solidPillIcn() }
    <SolidPillIcn pathFill="#3D87C5" size={14}/>
{/snippet}
{#snippet leafIcn() }
    <LeafIcn pathFill="#197437" size={14}/>
{/snippet}
{#snippet moleculeIcn() }
    <MoleculeIcn pathFill="#EFAC2F" size={14}/>
{/snippet}
{#snippet orangeTriangleContent()}
    {#if !!medication?.rmakeyMessages}
        <p>{medication?.rmakeyMessages}</p>
    {/if}
    <a class="snippetLink" href={medication.rmaProfessionalLink}>Risk Minimisation Activities (RMA)</a>
{/snippet}
{#snippet supplyIcn()}
    <SupplyIcn size={18}/>
{/snippet}
{#snippet supplyProblemsContent()}
    {#if medicationSupplyProblems }
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--orange">Temporary supply Problem:</p>
            <div class="supplyProblemsTooltip__content">
                {#if medicationSupplyProblems.from}
                    <div>
                        <span>Limited availability since:</span>
                        <p>{formatTimestamp(medicationSupplyProblems.from)}</p>
                    </div>
                {/if}
                {#if medicationSupplyProblems.expectedEndOn}
                    <div>
                        <span>Presumed end date:</span>
                        <p>{formatTimestamp(medicationSupplyProblems.expectedEndOn)}</p>
                    </div>
                {/if}
                {#if medicationSupplyProblems.reason?.fr}
                    <div>
                        <span>Reason:</span>
                        <p>{medicationSupplyProblems.reason?.fr}</p>
                    </div>
                {/if}
                {#if medicationSupplyProblems.impact?.fr}
                    <div>
                        <span>Impact:</span>
                        <p>{medicationSupplyProblems.impact?.fr}</p>
                    </div>
                {/if}
                {#if medicationSupplyProblems.impact?.fr === 'Importation possible par le pharmacien'}
                    <div>
                        <span>Déclaration du prescripteur:</span>
                        <a target="_blank"
                           href='https://www.afmps.be/sites/default/files/content/INSP/NARC/declaration-medecin.pdf'>Télécharger
                            le document en .pdf</a>
                    </div>
                {/if}
                {#if medicationSupplyProblems.additionalInformation?.fr}
                    <div>
                        <span>Additional Information:</span>
                        {#each medicationSupplyProblems.additionalInformation.fr.split("\n") as line}
                            <p>{line}</p>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
{/snippet}
{#snippet endOfCommercialisation()}
    <EndOfCommercialisationIcn/>
{/snippet}
{#snippet endOfCommercialisationContent()}
    {#if medicationComercialization }
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--red">End of Commercialisation:</p>
            <div class="supplyProblemsTooltip__content">
                {#if medicationComercialization.from}
                    <div>
                        <span>Limited availability since:</span>
                        <p>{formatTimestamp(medicationComercialization.from)}</p>
                    </div>
                {/if}
                {#if medicationComercialization.to}
                    <div>
                        <span>Unavailable from:</span>
                        <p>{formatTimestamp(medicationComercialization.to)}</p>
                    </div>
                {/if}
                {#if medicationComercialization.endOfComercialization?.fr}
                    <div>
                        <span>End of Comercialization:</span>
                        <p>{medicationComercialization.endOfComercialization.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.reason?.fr}
                    <div>
                        <span>Reason:</span>
                        <p>{medicationComercialization.reason?.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.impact?.fr}
                    <div>
                        <span>Impact:</span>
                        <p>{medicationComercialization.impact?.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.additionalInformation?.fr}
                    <div>
                        <span>Additional Information:</span>
                        {#each medicationComercialization.additionalInformation.fr.split("\n") as line}
                            <p>{line}</p>
                        {/each}
                    </div>
                {/if}

            </div>
        </div>
    {/if}
{/snippet}
{#snippet startOfCommercialisation()}
    <StartOfCommercialisationIcn/>
{/snippet}

{#snippet startOfCommercialisationContent()}
    {#if medicationComercialization }
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--green">Start of Commercialisation:</p>
            <div class="supplyProblemsTooltip__content">
                {#if medicationComercialization.from}
                    <div>
                        <span>Availability from:</span>
                        <p>{formatTimestamp(medicationComercialization.from)}</p>
                    </div>
                {/if}

                {#if medicationComercialization.endOfComercialization?.fr}
                    <div>
                        <span>End of Comercialization:</span>
                        <p>{medicationComercialization.endOfComercialization.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.reason?.fr}
                    <div>
                        <span>Reason:</span>
                        <p>{medicationComercialization.reason?.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.impact?.fr}
                    <div>
                        <span>Impact:</span>
                        <p>{medicationComercialization.impact?.fr}</p>
                    </div>
                {/if}
                {#if medicationComercialization.additionalInformation?.fr}
                    <div>
                        <span>Additional Information:</span>
                        {#each medicationComercialization.additionalInformation.fr.split("\n") as line}
                            <p>{line}</p>
                        {/each}
                    </div>
                {/if}

            </div>
        </div>
    {/if}
{/snippet}

{#snippet deliveryConditionsIcn()}
    {#if medication.deliveryModusCode}
        <div class="textToIcon textToIcon--orange">
            <p>{medication.deliveryModusCode}</p>
        </div>
    {/if}
{/snippet}
{#snippet deliveryConditionsContent()}
    {#if medication.deliveryModusCode }
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--orange">Conditions de livraison:</p>
            <div class="supplyProblemsTooltip__content">

                {#if medication.deliveryModusCode}
                    <div>
                        <span>Delivery Modus Code:</span>
                        <p>{medication.deliveryModusCode}</p>
                    </div>
                {/if}
                {#if medication.deliveryModus}
                    <div>
                        <span>Delivery Modus:</span>
                        <p>{medication.deliveryModus}</p>
                    </div>
                {/if}
                {#if medication.deliveryModusSpecification}
                    <div>
                        <span>Delivery Modus Specification:</span>
                        <p>{medication.deliveryModusSpecification}</p>
                    </div>
                {/if}

            </div>
        </div>
    {:else}
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--green">Conditions de livraison:</p>
            <div class="supplyProblemsTooltip__content">
                <div>
                    <p>Free of prescription</p>
                </div>
            </div>
        </div>
    {/if}
{/snippet}

{#snippet prescriptionConditionsIcn()}
    {#if medication.deliveryModusSpecificationCode && medication.deliveryModusSpecificationCode in deliveryModusSpecificationCodes }
        <div class="textToIcon textToIcon--red">
            <p>{medication.deliveryModusSpecificationCode}</p>
        </div>
    {/if}
{/snippet}
{#snippet prescriptionConditionsContent()}
    {#if medication.deliveryModusSpecificationCode && medication.deliveryModusSpecificationCode in deliveryModusSpecificationCodes }
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--red">Conditions de prescription:</p>
            <div class="supplyProblemsTooltip__content">

                {#if medication.deliveryModusSpecificationCode}
                    <div>
                        <span>Delivery Modus Code:</span>
                        <p>{medication.deliveryModusSpecificationCode}</p>
                    </div>
                {/if}
                {#if medication.deliveryModusSpecification}
                    <div>
                        <span>Delivery Modus Specification:</span>
                        <p>{deliveryModusSpecificationCodes[medication.deliveryModusSpecificationCode].fr}</p>
                    </div>
                {/if}

            </div>
        </div>
    {:else}
        <div class="supplyProblemsTooltip">
            <p class="supplyProblemsTooltip__title supplyProblemsTooltip__title--green">Conditions de prescription</p>
            <div class="supplyProblemsTooltip__content">
                <div>
                    <p>Not applicable</p>
                </div>
            </div>
        </div>
    {/if}
{/snippet}


<div class:focused class:isExpanded class:disableHover class='medicationRow' bind:this={child} {id}>
    <div class='header'>
        <div class='header__medication' onclick={() => handleAddPrescription(medication)} role='button' tabindex="0"
             onkeydown={(event) => event.key === 'Enter' &&  handleAddPrescription(medication)}>
            <div class='header__medication__content'>
                <div class='header__medication__content__heading'>
                    <div class='header__medication__content__heading__title'>

                        {#if medication.ampId}
                            <Tooltip content='Medication'
                                     iconSnippet={solidPillIcn}
                                     orientation={distanceToParentTop > 65 ? 'tl' : 'bl'}/>
                        {:else if medication.nmpId}
                            <Tooltip content='Homologation'
                                     iconSnippet={leafIcn}
                                     orientation={distanceToParentTop > 65 ? 'tl' : 'bl'}/>
                        {:else if medication.vmpGroupId}
                            <Tooltip content='Molecule'
                                     iconSnippet={moleculeIcn}
                                     orientation={distanceToParentTop > 65 ? 'tl' : 'bl'}/>
                        {/if}

                        <h3>{medication.title}</h3>
                        <div class='header__medication__content__heading__infographics'>
                            <div class='medicationInfographics'>
                                {#if medication.blackTriangle}
                                    <div class='medicationInfographics__item'>
                                        <Tooltip content='Black triangle'
                                                 iconSnippet={blackTriangleIcn}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                                {#if medication.rmaProfessionalLink}
                                    <div class='medicationInfographics__item'>
                                        <Tooltip
                                                contentSnippet={orangeTriangleContent}
                                                iconSnippet={orangeTriangleIcn}
                                                orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                                {#if !!medication.speciallyRegulated}
                                    <div class='medicationInfographics__item'>
                                        <Tooltip content={getSpecialRegulation(medication.speciallyRegulated)}
                                                 iconSnippet={specialRegulationsIcn}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                                {#if medication.genericPrescriptionRequired}
                                    <div class='medicationInfographics__item'>
                                        <Tooltip content='Generic prescription required'
                                                 iconSnippet={prescriptionRequiredIcn}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                            </div>
                            <div class='medicationAvailabilityInfographics'>
                                {#if medication.supplyProblems}
                                    <div class='medicationAvailabilityInfographics__item medicationAvailabilityInfographics__item--orange'>
                                        <Tooltip contentSnippet={supplyProblemsContent}
                                                 iconSnippet={supplyIcn}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                                {#if medicationComercialization?.endOfComercialization}
                                    <div class='medicationAvailabilityInfographics__item medicationAvailabilityInfographics__item--red'>
                                        <Tooltip contentSnippet={endOfCommercialisationContent}
                                                 iconSnippet={endOfCommercialisation}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                                {#if medicationComercialization && !medicationComercialization?.endOfComercialization}
                                    <div class='medicationAvailabilityInfographics__item medicationAvailabilityInfographics__item--green'>
                                        <Tooltip contentSnippet={startOfCommercialisationContent}
                                                 iconSnippet={startOfCommercialisation}
                                                 orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                    </div>
                                {/if}
                            </div>
                            <div class="deliveryPrescriptionConditions">
                                {#if medication.deliveryModusCode}
                                    <Tooltip contentSnippet={deliveryConditionsContent}
                                             iconSnippet={deliveryConditionsIcn}
                                             orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                {/if}
                                {#if medication.deliveryModusCode}
                                    <Tooltip contentSnippet={prescriptionConditionsContent}
                                             iconSnippet={prescriptionConditionsIcn}
                                             orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                                {/if}
                            </div>
                        </div>

                    </div>
                    <p class='header__medication__content__heading__activeIngredient'>{medication.activeIngredient}</p>
                </div>
                <div class='header__medication__content__description'>
                    <div class='header__medication__content__description__item price'>
                        <span>Prix:</span>
                        <p>{medication.price}</p>
                    </div>
                    <div class='header__medication__content__description__item reimbursement'>
                        <span>Remboursement:</span>
                        <p>Non</p>
                    </div>
                </div>
                <div class='header__medication__content__description'>
                    <div class='header__medication__content__description__item delivery'>
                        <span>Conditions de livraison:</span>
                        {#if medication.deliveryModusCode }
                            {#if !!medication.deliveryModusSpecification}
                                <p>{medication.deliveryModus} / {medication.deliveryModusSpecification}</p>
                            {:else}
                                <p>{medication.deliveryModus}</p>
                            {/if}
                        {:else}
                            <div class="textToIcon textToIcon--green">
                                <p>Free of prescription</p>
                            </div>
                        {/if}
                    </div>
                </div>
                <div class='header__medication__content__description'>
                    <div class='header__medication__content__description__item prescription'>
                        <span>Conditions de prescription:</span>
                        {#if medication.deliveryModusSpecificationCode && medication.deliveryModusSpecificationCode in deliveryModusSpecificationCodes}
                            <p>{deliveryModusSpecificationCodes[medication.deliveryModusSpecificationCode].fr}</p>
                        {:else}
                            <div class="textToIcon textToIcon--green">
                                <p>Not applicable</p>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        {#if showChevron}
            <button class='header__arrow' class:isExpanded onclick={() => isExpanded = !isExpanded}>
                <ChevronIcn/>
            </button>
        {/if}
    </div>

    {#if isExpanded}
        <div class='content'>
            <div class='content__vmp'>
                {#if !!medication.vmp.name?.fr}
                    <div class='content__vmp__item'>
                        <span>VMP:</span>
                        <p>{medication.vmp.name?.fr}</p>
                    </div>
                {/if}
                {#if !!medication.vmp.vmpGroup?.name?.fr}
                    <div class='content__vmp__item'>
                        <span>VMP-group:</span>
                        <p>{medication.vmp.vmpGroup.name.fr}</p>
                    </div>
                {/if}
            </div>
            <div class="content__divider"></div>
            <div class='content__links'>
                {#if !!medication.crmLink}
                    <a href={medication.crmLink} target="_blank">Commented Medicines Directory (CBIP)</a>
                {/if}
                {#if !!medication.patientInformationLeafletLink}
                    <a href={medication.patientInformationLeafletLink} target="_blank">Patient information leaflet</a>
                {/if}
                {#if !!medication.rmaProfessionalLink}
                    <a href={medication.rmaProfessionalLink} target="_blank">Risk Minimisation Activities (RMA)</a>
                {/if}
                {#if !!medication.spcLink}
                    <a href={medication.spcLink} target="_blank">Summary of Product Characteristics (SPC)</a>
                {/if}
                {#if !!medication.dhpcLink}
                    <a href={medication.dhpcLink} target="_blank">Direct Healthcare Professional Communication
                        (DHPC)</a>
                {/if}
            </div>
            {#if medication.supplyProblems}
                <div class="content__divider"></div>
                {@render supplyProblemsContent()}
            {/if}
            {#if medicationComercialization?.endOfComercialization}
                <div class="content__divider"></div>
                {@render endOfCommercialisationContent()}
            {/if}
            {#if medicationComercialization && !medicationComercialization.endOfComercialization}
                <div class="content__divider"></div>
                {@render startOfCommercialisationContent()}
            {/if}


            <div class="content__divider"></div>
            {@render deliveryConditionsContent()}


            <div class="content__divider"></div>
            {@render prescriptionConditionsContent()}


        </div>
    {/if}
</div>

<style lang='scss'>
  @use '../../style/app';

  .test {
    width: 100%;
    background-color: lightblue;
  }

  .tooltipBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .medicationRow {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background: #FFF;
    border: 1px solid app.$blue-100;
    cursor: pointer;

    &.disableHover:hover {
      border-color: app.$blue-100;
      box-shadow: none;
      cursor: not-allowed;
    }

    &:hover, &.isExpanded, &.focused, &.disableHover.focused:hover {
      border-color: app.$blue-900;
      box-shadow: 0 0 0 2px rgba(app.$blue-900, 0.3);
    }

    &.isExpanded {
      .header {
        border-radius: 6px 6px 0 0;
      }
    }

    .header {
      width: 100%;
      display: flex;
      padding: 8px 12px;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
      align-self: stretch;
      background: #FFF;
      border-radius: 6px;

      @include app.media-breakpoint-down(app.$sm) {
        gap: 4px;
      }

      &__medication {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;

        @include app.media-breakpoint-down(app.$sm) {
          gap: 8px;
        }

        &__content {
          //width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;

          &__heading {
            display: flex;
            flex-direction: column;
            gap: 4px;

            &__title {
              display: flex;
              align-items: flex-start;
              gap: 8px;

              h3 {
                color: app.$gray-900;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
              }
            }

            &__infographics {
              display: flex;
              align-items: center;
              gap: 12px;

              .deliveryPrescriptionConditions,
              .medicationInfographics,
              .medicationAvailabilityInfographics {
                display: flex;
                align-items: center;
                gap: 2px;
              }

              .medicationInfographics {
                &__item {
                  display: flex;
                  width: 22px;
                  height: 22px;
                  justify-content: center;
                  align-items: center;

                  border-radius: 5px;
                  border: 1px solid #ADD5FF;
                }
              }

              .medicationAvailabilityInfographics {
                &__item {
                  display: flex;
                  width: 22px;
                  height: 22px;
                  justify-content: center;
                  align-items: center;

                  border-radius: 5px;

                  &--red {
                    background-color: #FFCDCD;
                  }

                  &--orange {
                    background-color: #FFDA83;
                  }

                  &--green {
                    background-color: #C7F4AB;
                  }
                }
              }
            }

            &__activeIngredient {
              color: app.$gray-900;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
            }
          }

          &__description {
            width: 100%;
            display: flex;
            gap: 32px;
            row-gap: 8px;
            flex-wrap: wrap;

            &__item {
              display: flex;
              align-items: center;
              gap: 6px;

              span {
                font-size: 12px;
                font-weight: 400;
                color: app.$blue-950;
              }

              p {
                font-size: 14px;
                font-weight: 400;
                color: black;
              }

              &.price {
                p {
                  color: app.$orange-900;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                }
              }

              &.delivery,
              &.prescription {
                width: 100%;
                flex-wrap: wrap;
                align-items: center;
                gap: 4px;
              }

            }
          }
        }
      }

      &__arrow {
        width: 18px;
        background: none;
        cursor: pointer;

        &.isExpanded {
          transform: rotate(90deg);
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 18px 12px;
      gap: 18px;

      background-color: app.$blue-200;
      border-radius: 0 0 6px 6px;

      border-top: 1px dashed app.$blue-900;

      &__vmp {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;

        &__item {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;

          span {
            font-size: 12px;
            font-weight: 400;
            color: app.$blue-950;
          }

          p {
            font-size: 14px;
            font-weight: 400;
            color: black;
          }
        }
      }

      &__divider {
        width: 100%;
        display: flex;
        border-bottom: 1px dashed rgba(app.$blue-900, 0.25);
      }

      &__links {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 8px;

        a {
          width: 49%;
          color: app.$blue-900;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .supplyProblemsTooltip {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__title {
      width: 100%;
      font-size: 14px;
      font-weight: 500;

      &--orange {
        background-color: #FFDA83;
      }

      &--red {
        background-color: #FFCDCD;
      }

      &--green {
        background-color: #C7F4AB;
      }
    }

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;

        span {
          font-size: 12px;
          font-weight: 400;
          color: app.$blue-950;
        }

        p {
          font-size: 14px;
          font-weight: 400;
          color: black;
        }

        a {
          font-size: 14px;
          font-weight: 400;
          color: app.$blue-900;

          &:hover {
            text-decoration: underline;
          }
        }

      }
    }
  }

  .textToIcon {
    height: 22px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    border-radius: 5px;

    &--orange {
      background-color: #E5A613;
    }

    &--red {
      background-color: #EE5D59;
    }

    &--green {
      background-color: #33B96B;
    }

    p {
      font-size: 11px;
      font-weight: 600;
      color: white !important;
    }
  }
</style>
