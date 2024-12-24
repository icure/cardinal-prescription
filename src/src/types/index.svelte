<script lang='ts' module>
  import {Medication} from "@icure/be-fhc-api";

  export type MedicationType = Medication & {
    ampId?: string;
    cnk?: string;
    dmppProductId?: string;
    id?: string;
    title?: string;
    activeIngredient?: string;
    price?: string;
    crmLink?: string;
    patientInformationLeafletLink?: string;
    blackTriangle?: boolean;
    speciallyRegulated?: number;
    genericPrescriptionRequired?: boolean;
    dosage?: string;
    intendedName?: string;
  };

  export type AddMedicationFormType = {
    dosage: string | undefined;
    duration: number | undefined;
    durationTimeUnit: string;

    treatmentStartDate: string | undefined;
    executableUntil: string | undefined;

    prescriptionsNumber: number | undefined;
    periodicityTimeUnit: string;
    periodicityDaysNumber: number | undefined;

    recipeInstructionForPatient?: string;
    instructionsForReimbursement?: string;
    prescriberVisibility?: string;
    pharmacyVisibility?: string;
  }

</script>
