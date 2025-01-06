<script lang="ts" module>
  import {Medication} from "@icure/be-fhc-api";

  const durationTimeUnits = [
    {
      value: 'jour',
      label: 'jour'
    },
    {
      value: 'semaine',
      label: 'semaine'
    }];
  const periodicityTimeUnits = [
    {
      value: 'aucune',
      label: 'aucune'
    },
    {
      value: 'semaine',
      label: 'semaine'
    },
    {
      value: '2 semaines',
      label: '2 semaines',
    },
    {
      value: '3 semaines',
      label: '3 semaines',
    },
    {
      value: 'x nombre de jours',
      label: 'x nombre de jours'
    }
  ];
  const prescriberVisibilityOptions = [
    {
      value: 'Visible pour tous les prescripteurs',
      label: 'Visible pour tous les prescripteurs'
    },
    {
      value: 'Visible uniquement pour moi-même',
      label: 'Visible uniquement pour moi-même',
    },
    {
      value: 'Visible uniquement pour le titulaire du DMG',
      label: 'Visible uniquement pour le titulaire du DMG',
    }];
  const pharmacyVisibilityOptions = [
    {
      value: 'Le médicament est visible par tous les pharmaciens',
      label: 'Le médicament est visible par tous les pharmaciens',
    },
    {
      value: 'Le médicament n`est pas visible par tous les pharmaciens',
      label: 'Le médicament n`est pas visible par tous les pharmaciens'
    }
  ];
  const reimbursementOptions = [
    {
      value: null,
      label: 'Aucun'
    },
    {
      value: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
      label: "Tiers Payant",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.FIRSTDOSE,
      label: "Première Dose",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.SECONDDOSE,
      label: "Deuxième Dose",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.THIRDDOSE,
      label: "Troisième Dose",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
      label: "Maladie Rénale Chronique",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.DIABETESTREATMENT,
      label: "Traitement du Diabète",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.DIABETESCONVENTION,
      label: "Convention Diabète",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.NOTREIMBURSABLE,
      label: "Non Remboursable",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.EXPLAINMEDICATION,
      label: "Explication du Médicament",
    },
    {
      value: Medication.InstructionsForReimbursementEnum.DIABETESSTARTPATH,
      label: "Parcours Initial Diabète",
    },
  ];

  export {
    durationTimeUnits,
    periodicityTimeUnits,
    prescriberVisibilityOptions,
    pharmacyVisibilityOptions,
    reimbursementOptions
  }
</script>
