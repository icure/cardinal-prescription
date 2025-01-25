<script lang="ts">
    import {onMount} from 'svelte';
    import Button from "./common/Button.svelte";
    import Input from "./common/Input.svelte";
    import {openCertificatesDatabase, uploadAndEncrypt} from "../../lib/fhc";

    let { handleSave }: {
        handleSave: (id: string, passphrase: string) => void
    } = $props();

    let password: string = '';
    let certificateFile: File | null = null;

    let db: IDBDatabase | undefined;

    // Initialize IndexedDB
    onMount(() => {
        openCertificatesDatabase().then((database) => {
            db = database;
        });
    });

    async function handleFormSubmit(event: Event): Promise<void> {
        event.preventDefault();

        if (!db) {
            alert('Database not initialized');
            return;
        }

        if (!certificateFile || !password) {
            alert('Please upload a certificate and set a password.');
            return;
        }

        const certificateData = await readFileAsArrayBuffer(certificateFile);
        const id = await uploadAndEncrypt(db, certificateFile.name.split('=')[1].split(' ')[0], password, certificateData);
        handleSave(id, password);
    }

    function handleFileChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        certificateFile = target.files ? target.files[0] : null;
    }

    function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as ArrayBuffer);
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(file);
        });
    }
</script>

<style lang="scss">
  @use '../../style/app';

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 700px;
  }

  input {
    border-radius: 6px;
    border: 1px solid app.$gray-300;
    background: #FFF;
    height: 32px;
    width: 100%;
    color: app.$gray-900;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    &::placeholder {
      color: app.$gray-600;
      opacity: 0.7;
      font-size: 14px;
    }
  }
</style>

<form on:submit|preventDefault={handleFormSubmit}>
    <div>
        <Input label="Upload Certificate" type="file" id="certificate" accept=".p12,.acc-p12" onchange={handleFileChange} required/>
    </div>
    <div>
        <Input label="Certificate Password" type="password" id="password" bind:value={password} required/>
    </div>
    <Button title='Encrypt & Upload' type='submit' view="primary"></Button>
</form>
