<script lang="ts">
    import Button from "./common/Button.svelte";
    import printJS from "print-js";
    import PrescriptionsPrint from "./PrescriptionsPrint.svelte";
    import type {Patient, PrescribedMedicationType, Prescriber} from "../types/index.svelte";

    let {
        closeModal,
        prescribedMedications,
        prescriber,
        patient,
    }: {
        closeModal: () => void,
        prescribedMedications: PrescribedMedicationType[],
        prescriber: Prescriber,
        patient: Patient
    } = $props()

    const print = () => {
        var div = document.getElementById("print-container");
        if (div) {
            var newdiv = div.cloneNode(true) as HTMLDivElement;

            newdiv.style.cssText = window.getComputedStyle(div).cssText;
            newdiv.id = "new" + div.id;

            const hideFrame = document.createElement("iframe");

            function setPrint() {
                const closePrint = () => {
                    document.body.removeChild(hideFrame);
                };
                if (hideFrame.contentWindow && hideFrame.contentDocument) {
                    const stylesheets = document.querySelectorAll("link[rel='stylesheet'], style");
                    stylesheets.forEach((stylesheet) => {
                        hideFrame.contentDocument!.head.appendChild(stylesheet.cloneNode(true));
                    });

                    hideFrame.contentDocument.body.appendChild(newdiv);

                    hideFrame.contentWindow.onbeforeunload = closePrint;
                    hideFrame.contentWindow.onafterprint = closePrint;
                    hideFrame.contentWindow.print();
                }
            }

            hideFrame.onload = setPrint;
            hideFrame.style.display = "none"; // hide iframe

            document.body.appendChild(hideFrame);
        }
    }
</script>

<div class="modal-backdrop" onclick={closeModal}>
    <div class="modal-content" onclick={(e) => e.stopPropagation()}>
        <button class="close-button" onclick={closeModal}>&times;</button>
        <h2>Imprimer la prescription</h2>
        <div id="print-container">
            <PrescriptionsPrint {prescribedMedications} {prescriber} {patient}></PrescriptionsPrint>
        </div>
        <div class="buttons">
            <Button title="Imprimer" view="primary" handleClick={print}></Button>
        </div>
    </div>
</div>


<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .modal-content {
        background: white;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        height: 90%;
        width: 860px;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    #print-container {
        margin-top: 16px;
        overflow-y: auto;

        height: calc( 100% - 128px);
    }

    .buttons {
        width: 100%;
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
    }
</style>
