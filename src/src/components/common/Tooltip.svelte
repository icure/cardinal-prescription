<script lang='ts'>
	import type { Snippet } from 'svelte';

	let { content, iconSnippet }: { content: string, iconSnippet: Snippet } = $props();
	let active = $state(false);
</script>

<div class:active class={'tooltip'} onmouseenter={() => active = true} onmouseleave={() => active = false}
		 role='tooltip'>
	<div class='tooltip__icon'>
		{@render iconSnippet()}
	</div>
	<div class='tooltip__content'>
		<div class='tooltip__content__text'>
			<p>{content}</p>
		</div>
	</div>

</div>

<style lang='scss'>
  @import '../../../style/app';

  .tooltip {
    display: flex;
    position: relative;
    width: min-content;

    &:hover {
      &::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid $burgundy-900;

        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }


    &__icon {
      height: 22px;
      display: flex;
      align-items: center;
    }

    &__content {
      display: none;
      position: absolute;
      bottom: 30px;
      left: -12px;
      flex-direction: column;

      &__text {
        background-color: $burgundy-900;

        min-height: 32px;
        width: auto;
        min-width: 170px;
        max-width: 230px;
        padding: 6px 8px;
        border-radius: 6px;
        line-height: 10px;

        p {
          color: #FFF;
          font-size: 14px;
          font-weight: 300;
          line-height: 16px;
        }


      }
    }

    &.active {
      .tooltip__content {
        display: flex;
      }
    }
  }
</style>
