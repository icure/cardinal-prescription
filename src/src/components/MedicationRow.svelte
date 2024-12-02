<script lang='ts'>
	import type { MedicationType } from '../types/index.svelte';
	import Tooltip from './common/Tooltip.svelte';
	import { GlobeIcn, PillIcn, PlusIcn } from '../icons/index.svelte';

	let { medication, onModifyPrescription }: { medication: MedicationType, onModifyPrescription: () => void } = $props();

</script>


{#snippet globeIcon()}
	<div class='tooltipBtn'>
		<GlobeIcn />
	</div>
{/snippet}
{#snippet pillIcon()}
	<div class='tooltipBtn'>
		<PillIcn />
	</div>
{/snippet}
{#snippet plusIcon()}
	<div class='addPrescription'>
		<PlusIcn />
	</div>
{/snippet}

<div class='medicationRow'>
	<div class='medicationRow__leftBlock'>
		<div class='medicationRow__btnsRow' role='button' onclick={onModifyPrescription}>
			<Tooltip content='Modify the prescription' iconSnippet={plusIcon} />
		</div>
		<div class='medicationRow__content'>
			<div class='medicationRow__content__title'>
				<p>{medication.title}</p>
				<div class='tooltips'>
					<Tooltip content='CBiP: Centre belge d’information pharmacotherapeutique' iconSnippet={globeIcon} />
					<Tooltip content='Download a notice about the drug' iconSnippet={pillIcon} />
				</div>
			</div>
			<div class='medicationRow__content__subtitle'>
				<p>{medication.activeIngredient}</p>
			</div>
		</div>
	</div>
	<div class='medicationRow__price'>
		<p class='medicationRow__price__info'>
			R/
		</p>
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
        //justify-content: flex-start;
        gap: 8px;

        p {
          color: app.$gray-900;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .tooltips {
          display: flex;
          align-items: flex-start;
        }
      }

      &__subtitle {
        p {
          color: app.$gray-900;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 18px;

      &__info {
        display: flex;
        padding: 1px 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        background: app.$gray-600;

        color: #FFF;
        font-size: 12px;
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
      }
    }
  }
</style>
