<script lang='ts'>
  import type {MedicationType} from '../types/index.svelte';
  import {BlackTriangleIcn, ChevronIcn, PillsBottleIcn, PlusIcn, PrescriptionIcn} from '../icons/index.svelte';
  import {onMount} from "svelte";
  import Tooltip from "./common/Tooltip.svelte";

  let {medication, handleAddPrescription}: {
    medication: MedicationType,
    handleAddPrescription: (medication: MedicationType) => void
  } = $props();

  let child: HTMLElement;
  let distanceToParentTop: number = $state(0);
  let isExpanded: boolean = $state(false)

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
</script>


{#snippet blackTriangleIcn()}
    <BlackTriangleIcn/>
{/snippet}
{#snippet specialRegulationsIcn()}
    <PillsBottleIcn/>
{/snippet}
{#snippet prescriptionRequiredIcn()}
    <PrescriptionIcn/>
{/snippet}
{#snippet plusIcn()}
    <PlusIcn/>
{/snippet}

<div class='medicationRow' class:isExpanded bind:this={child}>
    <div class='header'>
        <div class='header__medication'>
            <button class='header__medication__appPrescription' onclick={() => handleAddPrescription(medication)}>
                <Tooltip content='Modify the prescription' iconSnippet={plusIcn}
                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
            </button>
            <div class='header__medication__content'>
                <div class='header__medication__content__title'>
                    <h3>{medication.title}</h3>
                    <div class='header__medication__content__title__infographics'>
                        {#if medication.blackTriangle}
                            <div class='header__medication__content__title__infographics__item'>
                                <Tooltip content='Black triangle'
                                         iconSnippet={blackTriangleIcn}
                                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                        {#if !!medication.speciallyRegulated}
                            <div class='header__medication__content__title__infographics__item'>
                                <Tooltip content={getSpecialRegulation(medication.speciallyRegulated)}
                                         iconSnippet={specialRegulationsIcn}
                                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                        {#if medication.genericPrescriptionRequired}
                            <div class='header__medication__content__title__infographics__item'>
                                <Tooltip content='Generic prescription required' iconSnippet={prescriptionRequiredIcn}
                                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                    </div>
                </div>
                <p class='header__medication__content__activeIngredient'>{medication.activeIngredient}</p>
                <p class='header__medication__content__price'>{medication.price}</p>
            </div>
        </div>
        <button class='header__arrow' class:isExpanded onclick={() => isExpanded = !isExpanded}>
            <ChevronIcn/>
        </button>
    </div>
    {#if isExpanded}
        <div class='content'>
            {#if !!medication.crmLink}
                <a href={medication.crmLink} target="_blank">CRM Link</a>
            {/if}
            {#if !!medication.patientInformationLeafletLink}
                <a href={medication.patientInformationLeafletLink} target="_blank">Patient information leaflet</a>
            {/if}
        </div>
    {/if}
</div>

<style lang='scss'>
  @use '../../style/app';

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
    border: 1px solid app.$blue-200;

    &:hover, &.isExpanded {
      border-radius: 6px;
      border: 1px solid app.$blue-800;
      background: #FFF;
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
        width: 89%;
        display: flex;
        align-items: center;
        gap: 12px;

        @include app.media-breakpoint-down(app.$sm) {
          gap: 8px;
        }

        &__appPrescription {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(app.$burgundy-900, 0.35);
          background-color: #FFFFFF;

          &:hover {
            border: 1px solid rgba(app.$burgundy-900, 1);
          }
        }

        &__content {
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          &__title {
            display: flex;
            align-items: center;
            gap: 8px;

            h3 {
              color: app.$gray-900;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
            }

            &__infographics {
              display: flex;
              align-items: center;
              gap: 2px;

              &__item {
                display: flex;
                width: 22px;
                height: 22px;
                justify-content: center;
                align-items: center;

                border-radius: 16px;
                border: 1px solid app.$orange-900;
                background: rgba(app.$orange-500, 0.26);
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

          &__price {
            color: app.$orange-900;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-top: 4px;
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
      display: flex;
      padding: 12px;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
      background-color: app.$blue-300;
      border-radius: 0 0 6px 6px;

      border-top: 1px solid app.$blue-500;

      a {
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
</style>
