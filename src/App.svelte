<script lang="ts">
  import '@fontsource-variable/inter';
  import PrescribeMedicationsSearch from "./src/components/PrescribeMedicationsSearch.svelte";
  import type {MedicationType} from "./src/types/index.svelte";
  import AddMedicationModal from "./src/components/AddMedicationModal.svelte";

  let showAddMedicationModal = $state(false);
  let selectedMedication: MedicationType | undefined = $state()
  const handleModifyPrescription = (medication: MedicationType) => {
    showAddMedicationModal = true
    selectedMedication = medication;
  }
</script>

<main>
    <PrescribeMedicationsSearch {handleModifyPrescription}/>
    {#if !!selectedMedication && showAddMedicationModal}
        <AddMedicationModal {selectedMedication} handleClose={()=> showAddMedicationModal = false}/>
    {/if}
</main>

<style>
  :global(html) {
    font-family: 'Inter Variable', sans-serif;
  }
</style>
