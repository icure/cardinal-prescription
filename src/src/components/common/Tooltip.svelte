<script lang='ts'>
	import type { Snippet } from 'svelte';

	let { content, iconSnippet, orientation='tr' }: { content: string, iconSnippet: Snippet, orientation?: 'tr'|'br'|'tl'|'bl' } = $props();
	let active = $state(false);

</script>

<div class:active class={`tooltip ${orientation}`} onmouseenter={() => active = true} onmouseleave={() => active = false}
		 role='tooltip'>
	<div class='icon'>
		{@render iconSnippet()}
	</div>
	<div class='content'>
		<div class='content__text'>
			<p>{content}</p>
		</div>
	</div>

</div>

<style lang='scss'>
	@use '../../../style/app';

  .tooltip {
    display: flex;
    position: relative;
    width: min-content;

	  @mixin tooltipArrow {
		  content: '';
		  width: 0;
		  height: 0;
		  border-left: 7px solid transparent;
		  border-right: 7px solid transparent;
	  }

    &.tr:hover,
	&.tl:hover {
      &::before {
        @include tooltipArrow;
	  border-top: 7px solid app.$burgundy-900;

        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

	  &.br:hover,
	  &.bl:hover{
		  &::before {
			  @include tooltipArrow;
			  border-bottom: 7px solid app.$burgundy-900;

			  position: absolute;
			  bottom: -10px;
			  left: 50%;
			  transform: translate(-50%, 0);
		  }
	  }


    .icon {
      height: 22px;
      display: flex;
      align-items: center;
		z-index: 10;
    }

    .content {
      display: none;
      position: absolute;
      flex-direction: column;
		z-index: 15;

      &__text {
        background-color: app.$burgundy-900;

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

	  &.tr .content{
		  bottom: 30px;
		  left: -12px;
	  }

	  &.tl .content{
		  bottom: 30px;
		  right: -12px;
	  }

	  &.br .content{
		  top: 32px;
		  left: -12px;

	  }
	  &.bl .content{
		  top: 32px;
		  right: -12px;

	  }

    &.active {
      .content {
        display: flex;
      }
    }
  }
</style>
