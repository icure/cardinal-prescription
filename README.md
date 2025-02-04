# Cardinal Prescription

Cardinal prescription module written in Svelte.

Lets you search in the Belgian SAM (Source Authentique de Médicaments) 2 (v5/v6).
and generate prescription with structured and unstructured posology.

This module interacts with Recip-e to send the prescription.

You'll need to pass the SAM and Recip-e certification to use this module in production.

## Modules

- Save, retrieve while encrypting/decrypting E-health certificate : `CertificateUpload`
- Search in SAM (AMPPs, VMP groups, NMPs, ...) : `PrescribedMedicationsSearch`
- Generate prescription with structured and unstructured posology : `MedicationPrescriptionModal`
- Display generated prescriptions. Generate, send and print prescriptions to Recip-e : `Prescriptions`
