<script lang='ts'>
    import SpinnerBtn from "../../icons/SpinnerBtn.svelte";

    let {title, handleClick, view, type = 'button', form, disabled = false}: {
        title: string,
        handleClick?: () => void,
        view: 'primary' | 'busy' | 'outlined',
        type?: 'button' | 'reset' | 'submit',
        form?: string
        disabled?: boolean
    } = $props();
</script>

<button class={view} onclick={() => (!!handleClick && view !== 'busy') && handleClick()} {type} {form} {disabled}>
    {#if view === 'busy'}
        <SpinnerBtn/>
    {:else}
        {title}
    {/if}
</button>

<style lang='scss'>
  @use '../../../style/app';

  button {
    display: flex;
    height: 32px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid app.$burgundy-900;
    cursor: pointer;
    min-width: 64px;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &.primary {
      background: app.$burgundy-900;
      color: #FFFFFF;

      &:not([disabled]):hover {
        background: app.$burgundy-800;
        border-color: app.$burgundy-800;
      }
    }

    &.outlined {
      border-radius: 6px;
      border-color: app.$gray-400;
      background: app.$gray-100;
      color: app.$burgundy-900;

      &:not([disabled]):hover {
        background: app.$gray-200;
      }
    }

    &.busy {
      border-radius: 6px;
      border-color: app.$gray-400;
      background: app.$gray-100;
      color: app.$burgundy-900;
    }
  }
</style>
