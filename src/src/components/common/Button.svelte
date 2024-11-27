<script lang='ts'>
	let { title, handleClick, type }: { title: string, onClick: () => void, type: 'primary' | 'outlined' } = $props();
</script>

<button class={type} onclick={() => handleClick()}>
	{title}
</button>

<style lang='scss'>
  @import '../../../style/app';

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
    border: 1px solid $burgundy-900;
    cursor: pointer;

    &.primary {
      background: $burgundy-900;
      color: #FFFFFF;

      &:hover {
        background: $burgundy-800;
        border-color: $burgundy-800;
      }
    }

    &.outlined {
      border-radius: 6px;
      border-color: $gray-400;
      background: $gray-100;
      color: $burgundy-900;

      &:hover {
        background: $gray-200;
      }
    }
  }
</style>
