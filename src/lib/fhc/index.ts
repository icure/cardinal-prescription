import type {MedicationType} from "../../src/types/index.svelte";

interface Prescriber {
    lastName: string;
    firstName: string;
    riziv: string;
}

// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
const chunk = <K>(arr: K[], chunkSize = 1, cache: K[][] = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
}

export const print = (prescriber: Prescriber, m: MedicationType[]) => {
    chunk(m,4).map((m) => `
       
<div class="header">
    <h1>PREUVE DE PRESCRIPTION ELECTRONIQUE</h1>
    <p>Veuillez présenter ce document à votre pharmacien pour scanner le code-barres et vous délivrer les médicaments prescrits.</p>
</div>

<div class="options">
    <p><strong>De quelles options disposez-vous pour vous rendre à la pharmacie si vous avez perdu ce document ?</strong></p>
    <ol>
        <li>Via Masanté.be - MyHealthViewer - App MesMédicaments ou toute autre App, vous pouvez montrer votre prescription au pharmacien, qui lira le code-barres.</li>
        <li>Vous pouvez également aller chercher les produits prescrits avec votre eID (ou votre numéro de registre national si votre eID a été lue par le pharmacien qui vous délivre les produits dans les 15 mois précédents).</li>
    </ol>
</div>

<div class="prescription-section">
    <p><strong>Prescripteur :</strong> ${prescriber.lastName} ${prescriber.firstName} ${prescriber.riziv} &nbsp;&nbsp;&nbsp; <strong>Bénéficiaire :</strong> ${patient.lastName} ${patient.firstName} ${patient.ssin}</p>
    <h3>Contenu de la prescription électronique</h3>

    <div class="prescription-item">
        <div>
            <p><strong>Produit 1</strong></p>
            <p>Date : ${m[0]?.date}</p>
            <p>Date de fin pour l'exécution :${m[0]?.endDate}</p>
        </div>
        <div>
            <p><div class="right"><strong>RID 1</strong></div></p>
            <div class="barcode right">${m[0]?.rid}</div>
        </div>
    </div>

    <div class="prescription-item">
        <div>
            <p><strong>RID 2</strong></p>
            <div class="barcode">${m[1]?.rid}</div>
        </div>
        <div>
            <p><strong>Produit 2</strong></p>
            <p>Date :${m[1]?.date}</p>
            <p>Date de fin pour l'exécution :${m[1]?.endDate}</p>
        </div>
    </div>

    <div class="prescription-item">
        <div>
            <p><strong>Produit 3</strong></p>
            <p>Date :${m[2]?.date}</p>
            <p>Date de fin pour l'exécution :${m[2]?.endDate}</p>
        </div>
        <div>
            <p><div class="right"><strong>RID 3</strong></div></p>
            <div class="barcode right">${m[2]?.rid}</div>
        </div>
    </div>

    <div class="prescription-item">
        <div>
            <p><strong>RID 4</strong></p>
            <div class="barcode">${m[3]?.rid}</div>
        </div>
        <div>
            <p><strong>Produit 4</strong></p>
            <p>Date :${m[3]?.date}</p>
            <p>Date de fin pour l'exécution :${m[3]?.endDate}</p>
        </div>
    </div>
</div>

</body>
</html>

    `)
}
