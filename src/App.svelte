<script lang="ts">
  import '@fontsource-variable/inter';
  import PrescribeMedicationsSearch from "./src/components/PrescribeMedicationsSearch.svelte";
  import type {MedicationType} from "./src/types/index.svelte";
  import AddMedicationModal from "./src/components/AddMedicationModal.svelte";
  import Prescriptions from "./src/components/Prescriptions.svelte";
  import {onMount} from "svelte";
  import {getSamVersion, initialiseSdk} from "./lib/cardinal";
  import type {Medication} from "@icure/be-fhc-api";


  let sdk: any;
  let samVersion: string | undefined = $state()

  onMount(async () => {
    sdk = await initialiseSdk()
  });

  $effect(() => {
    setTimeout(() => {
      getSamVersion(sdk).then(async (res) => {
        if (res?.version) samVersion = res.version
      })
    }, 100)
  });


  let showAddMedicationModal = $state(false);
  let selectedMedication: MedicationType | undefined = $state()
  const handleModifyPrescription = (medication: MedicationType) => {
    showAddMedicationModal = true
    selectedMedication = medication;
  }

  const defaultPrescriptionData = $derived(
    {
      "expirationDate": 20250113,
      "feedback": true,
      "patient": {
        "firstName": "John",
        "lastName": "Dupont",
        "gender": "male",
        "ssin": "77090948948",
        "dateOfBirth": 19770909
      },
      samVersion: samVersion,
      "packageName": "phyMedispring[Medispring/1.0]-freehealth-connector",
      "packageVersion": "1.0]-freehealth-connector",
      "vendorEmail": "support@medispring.be",
      "vendorName": "phyMedispring[Medispring",
      "vendorPhone": "+3278077050",
      "vision": "",
      "visionOthers": "open",
      "hcp": {
        "firstName": "Maxime",
        "lastName": "Mennechet",
        "nihii": "18785633004",
        "ssin": "92092412781"
      },
      "lang": "fr"
    }
  )

  let prescribedMedications: Medication[] = $state([])

  const sendPrescription = () => {
    const prescription = {...defaultPrescriptionData, medications: [...prescribedMedications]}
    console.log(prescription)
  }
</script>

<main>
    <PrescribeMedicationsSearch deliveryEnvironment="P" {handleModifyPrescription}/>
    {#if !!selectedMedication && showAddMedicationModal}
        <AddMedicationModal {selectedMedication}
                            handleSave={(medication: Medication) => {prescribedMedications.push(medication)}}
                            handleClose={()=> showAddMedicationModal = false}/>
    {/if}
    <Prescriptions {handleModifyPrescription} {sendPrescription} {prescribedMedications}/>
</main>

<style>
  :global(html) {
    font-family: 'Inter Variable', sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
