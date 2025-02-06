<script lang="ts">
  import '@fontsource-variable/inter';
  import PrescribeMedicationsSearch from "./src/components/PrescribeMedicationsSearch.svelte";
  import MedicationPrescriptionModal from "./src/components/MedicationPrescriptionModal.svelte";
  import Prescriptions from "./src/components/Prescriptions.svelte";
  import {onMount} from "svelte";
  import {getSamVersion, initialiseSdk} from "./lib/cardinal";
  import type {MedicationType, PrescribedMedicationType} from "./src/types/index.svelte";
  import CertificateUpload from "./src/components/CertificateUpload.svelte";
  import {
    loadAndDecryptCertificate,
    loadCertificateInformation,
    openCertificatesDatabase,
    sendRecipe,
  } from "./lib/fhc";
  import Button from "./src/components/common/Button.svelte";
  import Input from "./src/components/common/Input.svelte";
  import {Prescription} from "@icure/be-fhc-api/model/Prescription";
  import PrescriptionPrintModal from "./src/components/PrescriptionPrintModal.svelte";

  let sdk: any;
  let samVersion: string | undefined = $state()
  let certificateUploaded: boolean = $state(false)
  let certificateValid: boolean | undefined = $state(undefined)
  let uiReady: boolean = $state(false)
  let passphrase: string = $state('')

  const patient = {
    firstName: 'Antoine',
    lastName: 'Duchâteau',
    gender: 'male',
    ssin: "74010414733",
    dateOfBirth: 19740104
  }

  const hcp = {
    firstName: 'Fabien',
    lastName: 'Zimer',
    gender: 'male',
    ssin: "84100212104",
    nihii: "10104133000",
    addresses: [
      {
        street: 'Rue de la Loi',
        number: '16',
        postalCode: '1000',
        city: 'Bruxelles',
        country: 'Belgique'
      }
    ]
  }

  onMount(async () => {
    sdk = await initialiseSdk()
    const db = await openCertificatesDatabase()
    try {
      await loadCertificateInformation(db, hcp.ssin)
      certificateUploaded = true
    } catch (e) {
      certificateUploaded = false
    }
    uiReady = true
  });

  $effect(() => {
    setTimeout(() => {
      getSamVersion(sdk).then(async (res) => {
        if (res?.version) samVersion = res.version
      })
    }, 100)
  });

  $effect(() => {
    if (certificateUploaded && passphrase) {
      loadAndDecryptCertificate(passphrase, hcp.ssin).then(() => {
        certificateValid = true
      }).catch(() => {
        certificateValid = false
      })
    }
  });

  let showMedicationPrescriptionModal = $state(false);
  let medicationToPrescribe: MedicationType | undefined = $state()
  let showPrintModal: boolean = $state(false)

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
      (item) => item.uuid !== prescribedMedication.uuid
    );
  }

  let prescribedMedications: PrescribedMedicationType[] = $state([])
  let cache: Record<string, string> = $state({})

    const handleSendPrescriptions = async () => {
        await Promise.all(prescribedMedications.filter((m) => !m.rid).map(async (med) => {
            const res = await sendRecipe(
        samVersion!,
        hcp,
        patient,
        med,
        {
          get: (key: string) => Promise.resolve(cache[key]),
          put: (key: string, value: string) => Promise.resolve(cache[key] = value)
        },
        passphrase
            )

        prescribedMedications = prescribedMedications.map((item) => item.uuid === med.uuid ? {
          ...item,
          rid: res[0]?.rid
        } : item)
        }))
  }

    const handlePrintPrescriptions = async () => {
        await handleSendPrescriptions()
    showPrintModal = true
  }

  const closePrintModal = () => {
    showPrintModal = false
  }
</script>

<main>
    {#if !uiReady}
        <p>Loading...</p>
    {:else}
        <div class="certificate">
            {#if certificateUploaded}
                <div>
                    <div class="line">
                        <Input id="passphrase" type="password" label="Password" bind:value={passphrase}/>
                        <Button title="Submit" view="outlined"
                                handleClick={() => certificateUploaded = false}/>
                    </div>
                    <div>
                        {#if certificateValid === false}
                            <p class="error">Passphrase is invalid</p>
                        {:else if certificateValid === true}
                            <p class="success">Passphrase is valid</p>
                        {/if}
                    </div>
                </div>
            {:else}
                <CertificateUpload handleSave={(id, password) =>{
                certificateUploaded = true;
                passphrase = password;
            }}/>
            {/if}
        </div>
        <div class="divider"></div>

        <p>Sam version: {samVersion}</p>
        <div class="divider"></div>
        <PrescribeMedicationsSearch deliveryEnvironment="P" short={true} {handleAddPrescription}
                                    disableInputEventsTracking={showMedicationPrescriptionModal}/>

        {#if !!medicationToPrescribe && showMedicationPrescriptionModal}
            <div class="divider"></div>
            <MedicationPrescriptionModal
                    modalTitle="Créer la prescription"
                    {medicationToPrescribe}
                    handleSave={(newMedications) => {
                        prescribedMedications = [...prescribedMedications, ...newMedications]
                        medicationToPrescribe = undefined
                    }}
                    handleClose={()=> {
                        showMedicationPrescriptionModal = false
                        medicationToPrescribe = undefined
                    }}
            />
        {/if}

        {#if !!prescribedMedicationToModify && showMedicationPrescriptionModal}
            <div class="divider"></div>
            <MedicationPrescriptionModal
                    modalTitle="Modifier la prescription"
                    prescribedMedication={prescribedMedicationToModify}
                    handleSave={([prescribedMedication]) => {
                        prescribedMedications = prescribedMedications.map((item) => item.uuid === prescribedMedication.uuid ? prescribedMedication : item);
                        prescribedMedicationToModify = undefined
                    }}
                    handleClose={()=> {
                        showMedicationPrescriptionModal = false
                        prescribedMedicationToModify = undefined
                    }}
            />
        {/if}

        {#if prescribedMedications.length !== 0}
            <div class="divider"></div>
            <Prescriptions {handleDeletePrescription} {handleModifyPrescription}
                           {prescribedMedications} {handleSendPrescriptions} {handlePrintPrescriptions}/>
        {/if}
        {#if showPrintModal}
            <PrescriptionPrintModal {prescribedMedications} prescriber={hcp} {patient} closeModal={closePrintModal}/>
        {/if}
    {/if}

</main>

<style lang='scss'>
  @use './style/app';

  :global(html) {
    font-family: 'Inter Variable', sans-serif;
  }

  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: app.$gray-100;
  }

  .divider {
    border-bottom: 1px dashed app.$blue-500;
  }

  .certificate {
    width: 50%;
    min-width: 700px;

    @include app.media-breakpoint-down(app.$md) {
      width: 100%;
      min-width: 100%;
    }


    .line {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2px;
    }

  }

  .error {
    font-size: 10px;
    color: red;
  }

  .success {
    font-size: 10px;
    color: green;
  }
</style>
