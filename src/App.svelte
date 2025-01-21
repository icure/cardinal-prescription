<script lang="ts">
  import '@fontsource-variable/inter';
  import PrescribeMedicationsSearch from "./src/components/PrescribeMedicationsSearch.svelte";
  import MedicationPrescriptionModal from "./src/components/MedicationPrescriptionModal.svelte";
  import Prescriptions from "./src/components/Prescriptions.svelte";
  import {onMount} from "svelte";
  import {getSamVersion, initialiseSdk} from "./lib/cardinal";
  import {MedicationType} from "@icure/be-fhc-api";
  import type {PrescribedMedicationType} from "./src/types/index.svelte";

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


  let showMedicationPrescriptionModal = $state(false);
  let medicationToPrescribe: MedicationType | undefined = $state()

  const handleAddPrescription = (medication: MedicationType) => {
    showMedicationPrescriptionModal = true
    medicationToPrescribe = medication;
  }

  let prescribedMedicationToModify: PrescribedMedicationType | undefined = $state()

  const handleModifyPrescription = (prescribedMedication: PrescribedMedicationType) => {
    showMedicationPrescriptionModal = true
    prescribedMedicationToModify = prescribedMedication;
  }

  const handleDeletePrescription = (prescribedMedication: PrescribedMedicationType) => {
    prescribedMedications = prescribedMedications.filter(
      (item) => item.ampId !== prescribedMedication.ampId
    );
  }

  const patient = {
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'male',
    ssin: "00000000000",
    dateOfBirth: 19700101
  }
  const hcp = {
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'male',
    ssin: "00000000000",
    nihii: "00000000000"
  }
  const vendor = {
    vendorEmail: "support@test.be",
    vendorName: "vendorName",
    vendorPhone: "+3200000000",
  }
  const usedPackage = {
    packageName: "test[test/1.0]-freehealth-connector",
    packageVersion: "1.0]-freehealth-connector",
  }

  let prescribedMedications: PrescribedMedicationType[] = $state([])

  const prescriptionData = $derived(
    {
      expirationDate: 20250113,
      vision: "",
      visionOthers: "open",
      feedback: true,
      lang: "fr",
      medications: [...prescribedMedications],
      patient: {
        firstName: patient.firstName,
        lastName: patient.lastName,
        gender: patient.gender,
        ssin: patient.ssin,
        dateOfBirth: patient.dateOfBirth
      },
      samVersion: samVersion,
      packageName: usedPackage.packageName,
      packageVersion: usedPackage.packageVersion,
      vendorEmail: vendor.vendorEmail,
      vendorName: vendor.vendorName,
      vendorPhone: vendor.vendorPhone,
      hcp: {
        firstName: hcp.firstName,
        lastName: hcp.lastName,
        nihii: hcp.nihii,
        ssin: hcp.ssin
      },
    }
  )

  const handleSendPrescription = () => {
    console.log(prescriptionData)
  }
  const handlePrintPrescription = () => {
    console.log(prescriptionData)
  }
</script>

<main>
    <PrescribeMedicationsSearch deliveryEnvironment="P" {handleAddPrescription}
                                isMedicationPrescriptionModalOpen={showMedicationPrescriptionModal}/>

    {#if !!medicationToPrescribe && showMedicationPrescriptionModal}
        <MedicationPrescriptionModal
                modalTitle="Créer la prescription"
                {medicationToPrescribe}
                handleSave={({medication, ampId}) =>{
                    prescribedMedications.push({medication, ampId})
                    medicationToPrescribe = undefined
                }
                    }
                handleClose={()=> {
                    showMedicationPrescriptionModal = false
                    medicationToPrescribe = undefined
                }}
        />
    {/if}

    {#if !!prescribedMedicationToModify && showMedicationPrescriptionModal}
        <MedicationPrescriptionModal
                modalTitle="Modifier la prescription"
                medicationToPrescribe={{...prescribedMedicationToModify.medication, ampId: prescribedMedicationToModify.ampId}}
                handleSave={({medication, ampId}) =>{
                   prescribedMedications = prescribedMedications.map((item) => item.ampId === ampId ? {medication, ampId} : item);
                   prescribedMedicationToModify = undefined
                }}
                handleClose={()=> {
                    showMedicationPrescriptionModal = false
                    prescribedMedicationToModify = undefined
                }}
        />
    {/if}
    {#if prescribedMedications.length !== 0}
        <Prescriptions {handleDeletePrescription} {handleModifyPrescription}
                       {prescribedMedications} {handleSendPrescription} {handlePrintPrescription}/>
    {/if}
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
