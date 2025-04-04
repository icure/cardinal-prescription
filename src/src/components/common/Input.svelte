<script lang='ts'>
    import {onMount} from "svelte";

    let {
        accept,
        label,
        required,
        id,
        value = $bindable(),
        disabled,
        autofocus,
        onchange,
        type = 'text',
        min,
        max,
        errorMessage
    }: {
        label: string
        id: string
        required?: boolean
        autofocus?: boolean
        value?: string | number | Date
        disabled?: boolean
        type?: 'text' | 'number' | 'date' | 'password' | 'file'
        min?: number
        max?: number
        accept?: string
        errorMessage?: string
        onchange?: (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => void
    } = $props();

    let elm: HTMLInputElement;

    if (!!autofocus) {
        onMount(() => {
            elm.focus();
        });
    }

</script>

<div class='inputWrapper'>
    <label class:required for={id}><span>*</span>{label}</label>
    <input class:disabled class:errorMessage {id} name={id} placeholder={label} {type} bind:this={elm}
           bind:value={value}
           {disabled} {min} {max} {onchange} {accept}/>
    {#if !!errorMessage}
        <p class='inputWrapper__error'>{errorMessage}</p>
    {/if}
</div>


<style lang='scss'>
  @use '../../../style/app';

  .inputWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;

    label {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      color: app.$gray-800;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 157.143% */

      span {
        display: none;
      }

      &.required {
        span {
          display: flex;
          color: red;
        }
      }
    }

    input {
      display: flex;
      height: 32px;
      padding: 5px 12px;
      align-items: center;
      gap: 4px;
      align-self: stretch;
      cursor: pointer !important;

      border-radius: 6px;
      border: 1px solid app.$gray-400;
      background: #FFF;
      box-shadow: 0 1px 1px 0 rgba(218, 218, 222, 0.25);

      color: app.$gray-600;
      font-family: 'Inter Variable', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 169.231% */

      &::file-selector-button {
        border-radius: 0;
        height: 100%;
        cursor: pointer;
        background-color: white;
        border:none;
        border-right: 1px solid rgba(0, 0, 0, 0.16);
        box-shadow: none;
        margin-left: 0;
        margin-right: 16px;
        padding: e0 12px 0 0;
        transition: background-color 200ms;
      }

      &::placeholder {
        color: app.$gray-600;
        font-family: 'Inter Variable', sans-serif;
        opacity: 0.5;
        font-size: 14px;
      }

      &:hover {
        border-color: app.$burgundy-900;
      }

      &.disabled {
        cursor: not-allowed;
        background-color: rgba(app.$gray-500, 0.7);
        border-color: app.$gray-400;
        opacity: 0.7;

        &:hover {
          border-color: app.$gray-400;
        }
      }

      &.errorMessage {
        border-color: red;
      }
    }

    &__error {
      color: red;
      font-size: 13px;
    }
  }
</style>
