<script lang="ts">
    import PrescriptionRow from "./PrescriptionRow.svelte";
    import Button from "./common/Button.svelte";
    import type {PrescribedMedicationType} from "../types/index.svelte";

    let {
        handleModifyPrescription,
        handleDeletePrescription,
        handleSendPrescriptions,
        handlePrintPrescriptions,
        prescribedMedications
    }: {
        handleModifyPrescription: (medication: PrescribedMedicationType) => void,
        handleDeletePrescription: (medication: PrescribedMedicationType) => void,
        prescribedMedications: PrescribedMedicationType[]
        handleSendPrescriptions: () => Promise<void>
        handlePrintPrescriptions: () => Promise<void>
    } = $props()

    let printing = $state(false);
    let sending = $state(false);

    const spinPrint = (action: () => Promise<void>) => {
        printing = true;
        action().finally(() => {
            printing = false;
        });
    }

    const spinSend = (action: () => Promise<void>) => {
        sending = true;
        action().finally(() => {
            sending = false;
        });
    }
</script>

{#if prescribedMedications}
    <div class='prescriptions'>
        <p class='prescriptions__title'>Médicaments à prescrire:</p>
        <div class='prescriptions__rows'>
            {#each prescribedMedications as medication}
                <PrescriptionRow prescribedMedication={medication} {handleModifyPrescription}
                                 {handleDeletePrescription}/>
            {/each}
        </div>
        <div class='prescriptions__footer'>
            <Button disabled={sending} title='Print' handleClick={() => spinPrint(handlePrintPrescriptions)} view={printing?'busy':'outlined'} type='submit'
                    form="prescriptionForm"/>
            <Button disabled={printing} title='Send' view={sending?'busy':'primary'} type='submit'
                    handleClick={() => spinSend(handleSendPrescriptions)}
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

  .print {
    font-family: Arial, sans-serif;
    margin: 20px;

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header h1 {
      margin: 0;
      font-size: 18px;
      border-bottom: 1px solid #000;
    }

    .options {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .prescription-section {
      padding: 10px;
      margin-bottom: 20px;
    }

    .prescription-item {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #000;
      margin-bottom: 20px;
    }

    .prescription-item div {
      width: 48%;
    }

    .barcode {
      border: 1px solid #000;
      width: 12mm;
      height: 12mm;
      margin: 5px 0;
    }

    .right {
      margin-left: auto;
    }
  }

</style>
