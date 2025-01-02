<script lang='ts' module>
  import {type Duration, Medication} from "@icure/be-fhc-api";

  export type AddMedicationFormType = {
    dosage?: string | undefined;
    duration?: number | undefined | Duration;
    durationTimeUnit?: string;

    treatmentStartDate?: string | undefined;
    executableUntil?: string | undefined;

    prescriptionsNumber?: number | undefined;
    periodicityTimeUnit?: string;
    periodicityDaysNumber?: number | undefined;
    substitutionAllowed?: boolean;

    recipeInstructionForPatient?: string;
    instructionsForReimbursement?: string;
    prescriberVisibility?: string;
    pharmacyVisibility?: string;
  }

  export type MedicationType = Medication & AddMedicationFormType & {
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
    intendedName?: string;
  };

  export type PrescribedMedicationType = {
    medication: Medication,
    ampId: string,
  }

</script>
