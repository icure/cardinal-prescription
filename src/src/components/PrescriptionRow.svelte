<script lang='ts'>
  import {DeleteIcn, EditIcn} from '../icons/index.svelte';
  import type {PrescribedMedicationType} from "../types/index.svelte";

  let {medicationToPrescribe, handleModifyPrescription, handleDeletePrescription}: {
    medicationToPrescribe: PrescribedMedicationType,
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

<div class='prescriptionRow'>
    <div class='header'>
        <div class='header__prescription'>
            <div class='header__prescription__content'>
                <div class='header__prescription__content__title'>
                    <h3>{medicationToPrescribe.medication.medicinalProduct?.intendedname}</h3>
                </div>
                <p>{medicationToPrescribe.medication.instructionForPatient}</p>
            </div>
        </div>
    </div>
    <div class="actions">
        <button class="actions__btn" onclick={() => handleModifyPrescription(medicationToPrescribe)}
                onmouseenter={() => editIcnColor = colors.blue}
                onmouseleave={() => editIcnColor = colors.gray}>
            <EditIcn pathFill={editIcnColor}/>
        </button>
        <button class="actions__btn" onclick={() => handleDeletePrescription(medicationToPrescribe)}
                onmouseenter={() => deleteIcnColor = colors.red}
                onmouseleave={() => deleteIcnColor = colors.gray}>
            <DeleteIcn pathFill={deleteIcnColor}/>
        </button>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    gap: 12px;
    border-radius: 6px;
    background: #FFF;
    border: 1px solid app.$blue-200;

    &:hover {
      border-radius: 6px;
      border: 1px solid app.$blue-800;
      background: #FFF;
      box-shadow: 0 0 0 2px rgba(app.$blue-900, 0.3);
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
      background: #FFF;

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
          border: 1px solid app.$blue-400;
          background: rgba(app.$blue-400, 0.3);
          border-radius: 6px;
        }
      }

    }
  }

</style>
