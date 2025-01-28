<script lang="ts" module>
    import {Medication} from "@icure/be-fhc-api";
    import type {PharmacistVisibility, PractitionerVisibility} from "../types/index.svelte";

    function findCommonSequence(str1: string, str2: string) {
        let commonSequence = "";

        // Determine the maximum possible overlap
        const maxOverlap = Math.min(str1.length, str2.length);

        for (let i = 1; i <= maxOverlap; i++) {
            // Get the suffix of str1 and prefix of str2
            const suffix = str1.slice(-i);
            const prefix = str2.slice(0, i);

            if (suffix === prefix) {
                commonSequence = suffix; // Update the common sequence
            }
        }

        return commonSequence;
    }


    const durationTimeUnits = [
        {
            value: '1',
            label: 'jour'
        },
        {
            value: '7',
            label: 'semaine'
        }];
    const periodicityTimeUnits = [
        {
            value: '0',
            label: 'aucune'
        },
        {
            value: '7',
            label: 'semaine'
        },
        {
            value: '14',
            label: '2 semaines',
        },
        {
            value: '21',
            label: '3 semaines',
        },
        {
            value: '1',
            label: 'x nombre de jours'
        }
    ];

    export type PrescriberVisibilityOption = {
        value: PractitionerVisibility;
        label: string;
    }
    const practitionerVisibilityOptions: PrescriberVisibilityOption[] = [
        {
            value: 'open',
            label: 'Visible pour tous les prescripteurs',
        },
        {
            value: 'locked',
            label: 'Visible uniquement pour moi-même',
        },
        {
            value: 'gmd_prescriber',
            label: 'Visible uniquement pour le titulaire du DMG',
        }];


    export type PharmacistVisibilityOption = {
        value: PharmacistVisibility;
        label: string;
    }
    const pharmacistVisibilityOptions: PharmacistVisibilityOption[] = [
        {
            value: 'NULL',
            label: 'Le médicament est visible par tous les pharmaciens',
        },
        {
            value: 'locked',
            label: 'Le médicament n`est pas visible par tous les pharmaciens',
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
        findCommonSequence,
        durationTimeUnits,
        periodicityTimeUnits,
        practitionerVisibilityOptions,
        pharmacistVisibilityOptions,
        reimbursementOptions,
    }
</script>
