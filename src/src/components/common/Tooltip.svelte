<script lang='ts'>
  import type {Snippet} from 'svelte';

  let {content, iconSnippet, orientation = 'tr'}: {
    content: string,
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
    <div class='popup'>
        <div class='popup__iconWrap'>
            <div class='popup__icon'>
                {@render iconSnippet()}
            </div>
        </div>
        <p>{content}</p>
    </div>
</div>

<style lang='scss'>
  @use '../../../style/app';

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
    &.bl:hover {
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

    .popup {
      display: none;
      position: absolute;
      z-index: 15;
      min-height: 32px;
      width: 230px;
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 6px;
      align-self: stretch;
      border-radius: 6px;
      border: 1px solid app.$burgundy-900;
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
        background: rgba(app.$orange-500, 0.26);
      }

      p {
        color: app.$gray-900;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    &.tr .popup {
      bottom: 30px;
      left: -12px;
    }

    &.tl .popup {
      bottom: 30px;
      right: -12px;
    }

    &.br .popup {
      top: 32px;
      left: -12px;

    }

    &.bl .popup {
      top: 32px;
      right: -12px;

    }

    &.active {
      .popup {
        display: flex;
      }
    }
  }
</style>
