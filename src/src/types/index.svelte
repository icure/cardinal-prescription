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

</script>
