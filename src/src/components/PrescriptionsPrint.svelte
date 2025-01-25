<script lang="ts">
    import type {Patient, PrescribedMedicationType, Prescriber} from "../types/index.svelte";
    import {dateDecode} from "@icure/be-fhc-api";
    import JsBarcode from "jsbarcode";

    let {
        prescribedMedications,
        rids,
        prescriber,
        patient,
    }: {
        prescribedMedications: PrescribedMedicationType[],
        rids: string[],
        prescriber: Prescriber,
        patient: Patient
    } = $props()

    const chunk = <K>(arr: K[], chunkSize = 1, cache: K[][] = []) => {
        const tmp = [...arr]
        if (chunkSize <= 0) return cache
        while (tmp.length) cache.push(tmp.splice(0, chunkSize))
        return cache
    }

    let chunks = chunk(prescribedMedications, 4)

    let rid1: HTMLDivElement | undefined = $state(undefined)
    let rid2: HTMLDivElement | undefined = $state(undefined)
    let rid3: HTMLDivElement | undefined = $state(undefined)
    let rid4: HTMLDivElement | undefined = $state(undefined)

    const ridElements = () => [rid1, rid2, rid3, rid4]

    const handleRid = (idx: number) => {
        if (ridElements()[idx]) {
            JsBarcode(ridElements()[idx], rids[idx], {
                format: "CODE128A",
                lineColor: "#000",
                width: 2,
                height: 40,
                displayValue: true,
            });
        }
    }

    $effect(() =>{
        for (let i = 0; i < 4; i++) {
            handleRid(i)
        }
    })
</script>


{#if prescribedMedications?.length}
    {#each chunks as chunk, index}
        <div class="prescription">
        <div class="header">
            <h1>PREUVE DE PRESCRIPTION ELECTRONIQUE</h1>
            <p>Veuillez présenter ce document à votre pharmacien pour scanner le code-barres et vous délivrer les
                médicaments prescrits.</p>
        </div>

        <div class="options">
            <p><strong>De quelles options disposez-vous pour vous rendre à la pharmacie si vous avez perdu ce document
                ?</strong></p>
            <ol>
                <li>Via Masanté.be - MyHealthViewer - App MesMédicaments ou toute autre App, vous pouvez montrer votre
                    prescription au pharmacien, qui lira le code-barres.
                </li>
                <li>Vous pouvez également aller chercher les produits prescrits avec votre eID (ou votre numéro de
                    registre national si votre eID a été lue par le pharmacien qui vous délivre les produits dans les 15
                    mois précédents).
                </li>
            </ol>
        </div>

        <div class="prescription-section">
            <p><strong>Prescripteur :</strong> {prescriber.lastName} {prescriber.firstName} {prescriber.nihii} &nbsp;&nbsp;&nbsp;
                <strong>Bénéficiaire :</strong> {patient.lastName} {patient.firstName} {patient.ssin}</p>
            <h3>Contenu de la prescription électronique</h3>

            <div class="prescription-item">
                <div>
                    <p><strong>Produit 1</strong></p>
                    <p>Date :
                        {(chunk[0]?.medication.beginMoment && dateDecode(chunk[0].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                    <p>Date de fin pour l'exécution
                        :{chunk[0]?.medication.endMoment ? chunk[0]?.medication.endMoment : '-'}</p>
                </div>
                <div>
                    <div class="right"><strong>RID 1</strong></div>
                    <div class="barcode right"><div bind:this={rid1}></div><div>{rids[index * 4]}</div></div>
                </div>
            </div>


        </div>
        {#if chunk[1]}
            <div class="prescription-item">
                <div>
                    <div><strong>RID 2</strong></div>
                    <div class="barcode"><div bind:this={rid2}></div><div>{rids[index * 4 + 1]}</div></div>
                </div>
                <div>
                    <p><strong>Produit 2</strong></p>
                    <p>Date
                        :{(chunk[1]?.medication.beginMoment && dateDecode(chunk[1].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                    <p>Date de fin pour l'exécution :{chunk[1]?.medication.endMoment ? chunk[1]?.medication.endMoment : '-'}</p>
                </div>
            </div>
        {/if}

        {#if chunk[2]}
            <div class="prescription-item">
                <div>
                    <p><strong>Produit 3</strong></p>
                    <p>Date
                        :{(chunk[2]?.medication.beginMoment && dateDecode(chunk[2].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                    <p>Date de fin pour l'exécution :{chunk[2]?.medication.endMoment ? chunk[2]?.medication.endMoment : '-'}</p>
                </div>
                <div>
                    <div class="right"><strong>RID 3</strong></div>
                    <div class="barcode right"><div bind:this={rid3}></div><div>{rids[index * 4 + 2]}</div></div>
                </div>
            </div>
        {/if}

        {#if chunk[3]}
            <div class="prescription-item">
                <div>
                    <div><strong>RID 4</strong></div>
                    <div class="barcode"><div bind:this={rid4}></div><div>{rids[index * 4 + 3]}</div></div>
                </div>
                <div>
                    <p><strong>Produit 4</strong></p>
                    <p>Date
                        :{(chunk[3]?.medication.beginMoment && dateDecode(chunk[3].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                    <p>Date de fin pour l'exécution :{chunk[3]?.medication.endMoment ? chunk[3]?.medication.endMoment : '-'}</p>
                </div>
            </div>
        {/if}
        </div>

    {/each}
{/if}

<style lang='scss'>
  @use '../../style/app';

  .prescription {
    border: 1px solid #000;
    padding: 20px;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  .header h1 {
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid #000;
  }
  .options {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .prescription-section {
    padding: 10px;
    margin-bottom: 20px;
  }
  .prescription-item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000;
    margin-bottom: 20px;
  }
  .prescription-item div {
    width: 48%;
  }
  .barcode {
    border: 1px solid #000;
    width: 12mm;
    height: 12mm;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
  }
  .right {
    margin-left: auto;
  }
</style>
