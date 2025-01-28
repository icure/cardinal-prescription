<script lang="ts">
    import type {Patient, PrescribedMedicationType, Prescriber} from "../types/index.svelte";
    import JsBarcode from "jsbarcode";
    import {dateDecode} from "../../lib/fhc";

    let {
        prescribedMedications,
        prescriber,
        patient,
    }: {
        prescribedMedications: PrescribedMedicationType[],
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

    const ridElements: SVGElement[] = []

    const handleRid = (rid?: string, elm?: SVGElement) => {
        elm && rid && JsBarcode(elm, rid, {
            format: "CODE128A",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: true,
        });
    }

    $effect(() => {
        prescribedMedications.forEach((med, idx) => {
            handleRid(med.rid, ridElements[idx])
        })
    })
</script>


{#if prescribedMedications?.length}
    {#each chunks as chunk, chunkIndex}
        <div class="prescription">
            <div class="header">
                <h1>PREUVE DE PRESCRIPTION ELECTRONIQUE</h1>
                <p>Veuillez présenter ce document à votre pharmacien pour scanner le code-barres et vous délivrer les
                    médicaments prescrits.</p>
            </div>

            <div class="options">
                <p><strong>De quelles options disposez-vous pour vous rendre à la pharmacie si vous avez perdu ce
                    document
                    ?</strong></p>
                <ol>
                    <li>Via Masanté.be - MyHealthViewer - App MesMédicaments ou toute autre App, vous pouvez montrer
                        votre
                        prescription au pharmacien, qui lira le code-barres.
                    </li>
                    <li>Vous pouvez également aller chercher les produits prescrits avec votre eID (ou votre numéro de
                        registre national si votre eID a été lue par le pharmacien qui vous délivre les produits dans
                        les 15
                        mois précédents).
                    </li>
                </ol>
            </div>

            <div class="prescription-section">
                <p><strong>Prescripteur :</strong> {prescriber.lastName} {prescriber.firstName} {prescriber.nihii}
                    &nbsp;&nbsp;&nbsp;
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
                        <div class="barcode right">
                            <svg bind:this={ridElements[chunkIndex*4]}></svg>
                        </div>
                    </div>
                </div>


            </div>
            {#if chunk[1]}
                <div class="prescription-item">
                    <div>
                        <div><strong>RID 2</strong></div>
                        <div class="barcode">
                            <svg bind:this={ridElements[chunkIndex*4+1]}></svg>
                        </div>
                    </div>
                    <div>
                        <p><strong>Produit 2</strong></p>
                        <p>Date
                            :{(chunk[1]?.medication.beginMoment && dateDecode(chunk[1].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                        <p>Date de fin pour l'exécution
                            :{chunk[1]?.medication.endMoment ? chunk[1]?.medication.endMoment : '-'}</p>
                    </div>
                </div>
            {/if}

            {#if chunk[2]}
                <div class="prescription-item">
                    <div>
                        <p><strong>Produit 3</strong></p>
                        <p>Date
                            :{(chunk[2]?.medication.beginMoment && dateDecode(chunk[2].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                        <p>Date de fin pour l'exécution
                            :{chunk[2]?.medication.endMoment ? chunk[2]?.medication.endMoment : '-'}</p>
                    </div>
                    <div>
                        <div class="right"><strong>RID 3</strong></div>
                        <div class="barcode right">
                            <svg bind:this={ridElements[chunkIndex*4+2]}></svg>
                        </div>
                    </div>
                </div>
            {/if}

            {#if chunk[3]}
                <div class="prescription-item">
                    <div>
                        <div><strong>RID 4</strong></div>
                        <div class="barcode">
                            <svg bind:this={ridElements[chunkIndex*4+3]}></svg>
                        </div>
                    </div>
                    <div>
                        <p><strong>Produit 4</strong></p>
                        <p>Date
                            :{(chunk[3]?.medication.beginMoment && dateDecode(chunk[3].medication.beginMoment)?.toLocaleDateString()) ?? '-'}</p>
                        <p>Date de fin pour l'exécution
                            :{chunk[3]?.medication.endMoment ? chunk[3]?.medication.endMoment : '-'}</p>
                    </div>
                </div>
            {/if}
        </div>
    {/each}
{/if}

<style lang='scss'>
  @use '../../style/app';

  @media print {
    .prescription {
      page-break-after: always;
    }
  }

  .prescription {
    border: 1px solid #000;
    padding: 20px;
    font-size: 12px;
  }

  .header {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;

    p {
      padding-top: 12px;
    }
  }

  .header h1 {
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid #000;
  }

  .options {
    padding-top: 12px;
    padding-bottom: 12px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    li {
      margin-top: 8px;
      font-size: 10px;
    }
  }

  .prescription-section {
    padding-top: 12px;
    padding-bottom: 12px;

    h3 {
      font-size: 14px;
      padding-top: 12px;
    }

  }

  .prescription-item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000;
    padding-top: 20px;
  }

  .prescription-item div {
    width: 48%;
  }

  .barcode {
    border: none;
    width: 12mm;
    height: 40px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;

    svg {
      height: 40px;
    }
  }

  .right {
    margin-left: auto;
  }
</style>
