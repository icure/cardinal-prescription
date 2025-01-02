<script lang="ts">
  import PrescriptionRow from "./PrescriptionRow.svelte";
  import Button from "./common/Button.svelte";
  import type {PrescribedMedicationType} from "../types/index.svelte";

  let {
    handleModifyPrescription,
    handleDeletePrescription,
    handleSendPrescription,
    handlePrintPrescription,
    prescribedMedications
  }: {
    handleModifyPrescription: (medication: PrescribedMedicationType) => void,
    handleDeletePrescription: (medication: PrescribedMedicationType) => void,
    prescribedMedications: PrescribedMedicationType[]
    handleSendPrescription: () => void
    handlePrintPrescription: () => void
  } = $props()
</script>

{#if prescribedMedications}
    <div class='prescriptions'>
        <p class='prescriptions__title'>Médicaments à prescrire:</p>
        <div class='prescriptions__rows'>
            {#each prescribedMedications as medication}
                <PrescriptionRow medicationToPrescribe={medication} {handleModifyPrescription}
                                 {handleDeletePrescription}/>
            {/each}
        </div>
        <div class='prescriptions__footer'>
            <Button title='Print' handleClick={() => handlePrintPrescription()} view='outlined' type='reset'
                    form="prescriptionForm"/>
            <Button title='Send' view='primary' type='submit' handleClick={() => handleSendPrescription()}
                    form="prescriptionForm"/>
        </div>
    </div>
{/if}

<style lang='scss'>
  @use '../../style/app';

  .prescriptions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 700px;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid app.$gray-300;

    @include app.media-breakpoint-down(app.$md) {
      width: 100%;
    }

    &__rows {
      width: 100%;
      height: auto;
      max-height: 380px;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;

      padding: 6px;
      padding-right: 8px;
      gap: 5px;
    }

    &__footer {
      display: flex;
      padding: 12px;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 12px;
      align-self: stretch;
      border-top: 1px solid app.$gray-300;
      background: #FFF;
    }
  }

</style>
