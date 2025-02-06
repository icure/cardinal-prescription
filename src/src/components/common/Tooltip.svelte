<script lang='ts'>
  import type {Snippet} from 'svelte';

  let {content, contentSnippet, iconSnippet, orientation = 'tr'}: {
    content?: string,
    contentSnippet?: Snippet,
    iconSnippet: Snippet,
    orientation?: 'tr' | 'br' | 'tl' | 'bl'
  } = $props();
  let active = $state(false);

</script>

<div class:active class={`tooltip ${orientation}`} onmouseenter={() => active = true}
     onmouseleave={() => active = false}
     role='tooltip'>
    <div class='icon'>
        {@render iconSnippet()}
    </div>
    <div class="chevron"></div>
    <div class='popup'>
        <div class='popup__iconWrap'>
            <div class='popup__icon'>
                {@render iconSnippet()}
            </div>
        </div>
        {#if !!content}
            <p>{content}</p>
        {/if}
        {#if !!contentSnippet}
            {@render contentSnippet()}
        {/if}
    </div>
</div>

<style lang='scss'>
  @use '../../../style/app';

  :global(.snippetLink) {
    color: app.$blue-900;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:hover {
      text-decoration: underline;
    }
  }

  .tooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: min-content;

    @mixin tooltipArrow {
      content: '';
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }

    &.tr,
    &.tl {
      .chevron {
        display: none;
        @include tooltipArrow;
        border-top: 7px solid app.$blue-900;
        //width: 100%;
        position: absolute;
        bottom: 23px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    &.br,
    &.bl {
      .chevron {
        display: none;
        @include tooltipArrow;
        border-bottom: 7px solid app.$blue-900;
        //width: 100%;
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    &.tr, &.br {
      .chevron {
        right: 50%;
      }
    }


    &.tr:hover,
    &.tl:hover,
    &.br:hover,
    &.bl:hover {
      .chevron {
        display: flex;
      }
    }


    .icon {
      height: 22px;
      display: flex;
      align-items: center;
      z-index: 10;
    }

    .popup {
      display: none;
      position: absolute;
      z-index: 15;
      min-height: 32px;
      width: auto;
      min-width: 300px;
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 6px;
      align-self: stretch;
      border-radius: 6px;
      border: 1px solid app.$blue-900;
      background: #FFF;

      &__iconWrap {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        border-bottom: 1px solid app.$blue-500;
        padding-bottom: 6px;
      }

      &__icon {
        display: flex;
        width: 22px;
        height: 22px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        //background: rgba(app.$orange-500, 0.26);
      }

      p {
        color: app.$gray-900;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    &.tr, &.tl {
      .popup {
        bottom: 28px;
      }
    }

    &.br, &.bl {
      .popup {
        top: 30px;
      }
    }

    &.tl, &.bl {
      .popup {
        left: -12px;
      }
    }

    &.tr, &.br {
      .popup {
        right: -12px;
      }
    }

    &.active {
      .popup {
        display: flex;
      }
    }
  }
</style>
