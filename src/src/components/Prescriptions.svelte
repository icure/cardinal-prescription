<script lang="ts">
  import type {MedicationType} from "../types/index.svelte";
  import PrescriptionRow from "./PrescriptionRow.svelte";
  import Button from "./common/Button.svelte";

  let {handleModifyPrescription}: { handleModifyPrescription: (medication: MedicationType) => void } = $props()

  const fakeMedicationsToPrescribe: MedicationType[] = [{
    ampId: '0',
    title: 'Anafranil 25 mg compr. enr. 120',
    dosage: 'As needed for pain/fever (maximum 3 days without consulting a doctor)',
    blackTriangle: true,
    speciallyRegulated: 1,
    genericPrescriptionRequired: true,
    activeIngredient: 'string',
    price: 'string',
    crmLink: 'string',
    patientInformationLeafletLink: 'string',
  },
    {
      ampId: '1',
      title: 'Byfavo 20 mg sol. inj. (pdr.) i.v. flac. 10 x 20 mg',
      dosage: 'Sedation is observed starting at single bolus doses of 0.05 to 0.075 mg/kg in healthy young adults, with an onset of 1 to 2 min following dosing.',
      blackTriangle: true,
      speciallyRegulated: 2,
      genericPrescriptionRequired: true,
      activeIngredient: 'string',
      price: 'string',
      crmLink: 'string',
      patientInformationLeafletLink: 'string',
    },
    {
      ampId: '2',
      title: 'Paracetamol EG Forte 1 g compr. pellic. 120',
      dosage: '1 pill per 1 day, 5 days',
      blackTriangle: false,
      genericPrescriptionRequired: false,
      activeIngredient: 'string',
      price: 'string',
      crmLink: 'string',
      patientInformationLeafletLink: 'string',
    },
    {
      ampId: '3',
      title: 'AmoclaneEG 250 mg - 62.5 mg susp. buv. (pdr.) 12.5 g (100 ml)',
      dosage: '2 pill per 1 day, 15 days',
      blackTriangle: false,
      speciallyRegulated: 0,
      genericPrescriptionRequired: true,
      activeIngredient: 'string',
      price: 'string',
      crmLink: 'string',
      patientInformationLeafletLink: 'string',
    },
  ];
</script>

{#if fakeMedicationsToPrescribe}
    <div class='prescriptions'>
        <p class='prescriptions__title'>Prescriptions:</p>
        <div class='prescriptions__rows'>
            {#each fakeMedicationsToPrescribe as medication}
                <PrescriptionRow {medication} {handleModifyPrescription}/>
            {/each}
        </div>
        <div class='prescriptions__footer'>
            <Button title='Print' handleClick={() => console.log('Print') } view='outlined' type='reset'
                    form="prescriptionForm"/>
            <Button title='Send' view='primary' type='submit' handleClick={() => console.log('Send') }
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
