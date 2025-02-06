<script lang='ts'>
  import {DeleteIcn, EditIcn} from '../icons/index.svelte';
  import type {PrescribedMedicationType} from "../types/index.svelte";

  let {prescribedMedication, handleModifyPrescription, handleDeletePrescription}: {
    prescribedMedication: PrescribedMedicationType,
    handleModifyPrescription: (medication: PrescribedMedicationType) => void
    handleDeletePrescription: (medication: PrescribedMedicationType) => void
  } = $props();

  const colors = {
    red: 'red',
    blue: '#3D87C5',
    gray: '#383A3C'
  }

  let editIcnColor = $state(colors.gray)
  let deleteIcnColor = $state(colors.gray)

</script>

<div class='prescriptionRow {prescribedMedication.rid?"prescribed":""}'>
    <div class='header'>
        <div class='header__prescription'>
            <div class='header__prescription__content'>
                <div class='header__prescription__content__title'>
                    <h3>{prescribedMedication.medication.medicinalProduct?.intendedname ?? prescribedMedication.medication.substanceProduct?.intendedname ?? prescribedMedication.medication.compoundPrescription}</h3>
                </div>
                <p>{prescribedMedication.medication.instructionForPatient}</p>
            </div>
        </div>
    </div>
    {#if !prescribedMedication.rid}
        <div class="actions">
            <button class="actions__btn" onclick={() => handleModifyPrescription(prescribedMedication)}
                    onmouseenter={() => editIcnColor = colors.blue}
                    onmouseleave={() => editIcnColor = colors.gray}>
                <EditIcn pathFill={editIcnColor}/>
            </button>
            <button class="actions__btn" onclick={() => handleDeletePrescription(prescribedMedication)}
                    onmouseenter={() => deleteIcnColor = colors.red}
                    onmouseleave={() => deleteIcnColor = colors.gray}>
                <DeleteIcn pathFill={deleteIcnColor}/>
            </button>
        </div>
    {:else}
        <div class='rid'>{prescribedMedication.rid}</div>
    {/if}
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    gap: 12px;
    border-radius: 6px;
    background: app.$blue-200;
    border: 1px solid app.$blue-100;

    &:hover {
      border-radius: 6px;
      border: 1px solid app.$blue-800;
      background: #FFF;
      box-shadow: 0 0 0 2px rgba(app.$blue-900, 0.3);
    }

    &.prescribed {
      background: app.$green-200;
      border-color: green;

      &:hover {
        border-color: green;
        border-radius: inherit;
        background: app.$green-200;
        box-shadow: inherit;
      }
    }

    @include app.media-breakpoint-down(app.$sm) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 8px;
    }

    .header {
      width: 83%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;

      @include app.media-breakpoint-down(app.$sm) {
        width: 100%;
      }

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
            align-items: flex-start;
            gap: 8px;

            h3 {
              color: app.$gray-900;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
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

    .rid {
      font-size: 10px;
      color: green;
    }

    .actions {
      width: 36px;
      display: flex;
      gap: 8px;

      @include app.media-breakpoint-down(app.$sm) {
        width: 100%;
        gap: 4px;
      }

      &__btn {
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        @include app.media-breakpoint-down(app.$sm) {
          width: 32px;
          height: 32px;
          border: 1px solid app.$blue-300;
          background: rgba(app.$blue-300, 0.3);
          border-radius: 6px;
        }
      }

    }
  }

</style>
