<script lang='ts'>
	let { title, handleClick, view, type='button', form }: { title: string, handleClick?: () => void, view: 'primary' | 'outlined', type?: 'button' | 'reset' | 'submit', form?:string } = $props();
</script>

<button class={view} onclick={() => !!handleClick && handleClick()} {type} {form}>
	{title}
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

    &.primary {
      background: app.$burgundy-900;
      color: #FFFFFF;

      &:hover {
        background: app.$burgundy-800;
        border-color: app.$burgundy-800;
      }
    }

    &.outlined {
      border-radius: 6px;
      border-color: app.$gray-400;
      background: app.$gray-100;
      color: app.$burgundy-900;

      &:hover {
        background: app.$gray-200;
      }
    }
  }
</style>
