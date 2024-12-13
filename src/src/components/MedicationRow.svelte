<script lang='ts'>
  import type {MedicationType} from '../types/index.svelte';
  import Tooltip from './common/Tooltip.svelte';
  import {GlobeIcn, PillIcn, PlusIcn} from '../icons/index.svelte';
  import {onMount} from "svelte";

  let {medication, handleModifyPrescription}: {
    medication: MedicationType,
    handleModifyPrescription: (medication: MedicationType) => void
  } = $props();

  let child: HTMLElement;
  let distanceToParentTop: number = $state(0);

  onMount(() => {
    const parentTop = child.parentElement?.getBoundingClientRect();
    const childTop = child.getBoundingClientRect();
    distanceToParentTop = parentTop && childTop ? childTop.top - parentTop.top : 0;
  });
</script>


{#snippet globeIcon()}
    <div class='tooltipBtn'>
        <GlobeIcn/>
    </div>
{/snippet}
{#snippet pillIcon()}
    <div class='tooltipBtn'>
        <PillIcn/>
    </div>
{/snippet}
{#snippet plusIcon()}
    <div class='addPrescription'>
        <PlusIcn/>
    </div>
{/snippet}

<div class='medicationRow' bind:this={child}>
    <div class='medicationRow__leftBlock'>
        <button class='medicationRow__btnsRow' onclick={() => handleModifyPrescription(medication)}>
            <Tooltip content='Modify the prescription' iconSnippet={plusIcon}
                     orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
        </button>
        <div class='medicationRow__content'>
            <div class='medicationRow__content__title'>
                <p>{medication.title}</p>
                <div class='tooltips tooltips--desktop'>
                    <Tooltip content='CBiP: Centre belge d’information pharmacotherapeutique' iconSnippet={globeIcon}
                             orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                    <Tooltip content='Download a notice about the drug' iconSnippet={pillIcon}
                             orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                </div>
            </div>
            <div class='medicationRow__content__subtitle'>
                <p>{medication.activeIngredient}</p>
            </div>
            <div class='tooltips tooltips--mobile'>
                <Tooltip content='CBiP: Centre belge d’information pharmacotherapeutique' iconSnippet={globeIcon}
                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
                <Tooltip content='Download a notice about the drug' iconSnippet={pillIcon}
                         orientation={distanceToParentTop > 65 ? 'tr' : 'br'}/>
            </div>
        </div>
    </div>
    <div class='medicationRow__price'>
        <p class='medicationRow__price__value'>
            {medication.price}
        </p>
    </div>
</div>

<style lang='scss'>
  @use '../../style/app';

  .tooltipBtn {
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      border-color: app.$orange;
    }
  }

  .medicationRow {
    width: 100%;
    display: flex;
    padding: 12px 18px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid app.$gray-400;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: app.$gray-200;
    }

    &__leftBlock {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    &__btnsRow {
      display: flex;

      .addPrescription {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        border-radius: 3px;
        background: app.$burgundy-900;

        &:hover {
          background: app.$burgundy-800;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;

      &__title {
        display: flex;
        align-items: flex-start;
        gap: 8px;

        p {
          color: app.$gray-900;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          @include app.media-breakpoint-down(app.$sm) {
            font-size: 14px;
          }
        }
      }

      &__subtitle {
        p {
          color: app.$gray-900;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;

          @include app.media-breakpoint-down(app.$sm) {
            font-size: 12px;
          }
        }
      }

      .tooltips {
        align-items: flex-start;
        display: none;

        &--desktop {
          @include app.media-breakpoint-up(app.$sm) {
            display: flex;
          }
        }

        &--mobile {
          margin-top: 8px;
          gap: 4px;

          @include app.media-breakpoint-down(app.$sm) {
            display: flex;
          }
        }
      }
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 18px;

      @include app.media-breakpoint-down(app.$sm) {
        gap: 8px;
        flex-direction: column;
        align-items: flex-end;
      }

      &__info {
        display: flex;
        padding: 1px 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 2px;
        background: rgba(app.$gray-600, 0.6);

        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      &__value {
        color: app.$orange;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @include app.media-breakpoint-down(app.$sm) {
          font-size: 14px;
        }
      }
    }
  }
</style>
