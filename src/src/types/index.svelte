<script lang='ts' module>
  export type MedicationType = {
    ampId: string;
    cnk?: string;
    dmppProductId?: string;
    id?: string;
    title: string;
    activeIngredient: string;
    price: string;
    crmLink?: string;
    patientInformationLeafletLink?: string;
    blackTriangle?: boolean;
    speciallyRegulated?: number;
    genericPrescriptionRequired?: boolean;
    dosage?: string
    intendedName?: string
  };

  export type AddMedicationFormTYpe = {
    dosage: string
    duration: string
    durationTimeUnit: string
    executableUntil: number
    instructionsForPatient: string
    pharmacyVisibility: string
    prescriberVisibility: string
    prescriptionsNumber: number
    refundInstructions: string
    treatmentStartDate: number
  }
</script>
