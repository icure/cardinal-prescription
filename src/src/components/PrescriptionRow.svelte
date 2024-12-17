<script lang='ts'>
  import type {PrescriptionType} from '../types/index.svelte';
  import {BlackTriangleIcn, PillsBottleIcn, PrescriptionIcn} from '../icons/index.svelte';
  import {onMount} from "svelte";
  import Tooltip from "./common/Tooltip.svelte";

  let {prescription}: {
    prescription: PrescriptionType,
  } = $props();

  let child: HTMLElement;
  let distanceToParentTop: number = $state(0);

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

<div class='prescriptionRow' bind:this={child}>
    <div class='header'>
        <div class='header__prescription'>
            <div class='header__prescription__content'>
                <div class='header__prescription__content__title'>
                    <h3>{prescription.title}</h3>
                    <div class='header__prescription__content__title__infographics'>
                        {#if prescription.blackTriangle}
                            <div class='header__prescription__content__title__infographics__item'>
                                <Tooltip content='Black triangle'
                                         iconSnippet={blackTriangleIcn}
                                         orientation={distanceToParentTop > 55 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                        {#if !!prescription.speciallyRegulated}
                            <div class='header__prescription__content__title__infographics__item'>
                                <Tooltip content={getSpecialRegulation(prescription.speciallyRegulated)}
                                         iconSnippet={specialRegulationsIcn}
                                         orientation={distanceToParentTop > 55 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                        {#if prescription.genericPrescriptionRequired}
                            <div class='header__prescription__content__title__infographics__item'>
                                <Tooltip content='Generic prescription required' iconSnippet={prescriptionRequiredIcn}
                                         orientation={distanceToParentTop > 55 ? 'tr' : 'br'}/>
                            </div>
                        {/if}
                    </div>
                </div>
                <p>{prescription.dosage}</p>
            </div>
        </div>
    </div>
</div>

<style lang='scss'>
  @use '../../style/app';

  .tooltipBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prescriptionRow {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background: #FFF;
    border: 1px solid app.$blue-200;

    &:hover {
      border-radius: 6px;
      border: 1px solid app.$blue-800;
      background: #FFF;
      box-shadow: 0 0 0 2px rgba(app.$blue-900, 0.3);
    }

    .header {
      display: flex;
      padding: 8px 12px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      background: #FFF;
      border-radius: 6px;

      &__prescription {
        display: flex;
        align-items: center;
        gap: 12px;

        &__content {
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
              line-height: 22px;
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

          p {
            color: app.$gray-900;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }

        }
      }
    }
  }

</style>
