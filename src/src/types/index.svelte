<script lang='ts' module>
  export type MedicationType = {
    ampId: string;
    id?: string;
    title: string;
    activeIngredient: string;
    price: string;
    crmLink: string;
    patientInformationLeafletLink: string;
    blackTriangle?: boolean;
    speciallyRegulated?: number;
    genericPrescriptionRequired?: boolean;
  };

  export type PrescriptionType = {
    ampId: string;
    id?: string;
    title: string;
    dosage: string;
    blackTriangle?: boolean;
    speciallyRegulated?: number;
    genericPrescriptionRequired?: boolean;
  };
</script>
