<script lang='ts'>
  let {label, value = $bindable(), name, options, required, errorMessage}: {
    label: string,
    name: string,
    value: boolean,
    required?: boolean,
    errorMessage?: string,
    options: {
      label: string,
      value: boolean,
      id: string,
    }[]
  } = $props();

</script>

<div class='radioBtnsGroup'>
    <p class:required class="radioBtnsGroup__label"><span>*</span>{label}</p>
    <div class='radioBtnsGroup__buttons'>
        {#each options as option}
            <label for={option.id} class="radioButton">
                <input
                        id={option.id}
                        {name}
                        type="radio"
                        bind:group={value}
                        value={option.value}
                >
                <span class="radioButton__toggle">
                     <span class="radioButton__toggle__inside"></span>
                </span>
                <span class="radioButton__label">{option.label}</span>
            </label>
        {/each}
    </div>
    {#if !!errorMessage}
        <p class='radioBtnsGroup__error'>{errorMessage}</p>
    {/if}
</div>

<style lang='scss'>
  @use '../../../style/app';

  .radioBtnsGroup {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;

    &__label {
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

    &__buttons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 18px;

      .radioButton {
        display: flex;
        align-items: center;
        gap: 8px;

        &__toggle {
          width: 15px;
          height: 15px;
          padding: 2px;
          border-radius: 50%;
          border: 1px solid app.$burgundy-900;
          background: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            box-shadow: 0px 0px 0px 2px rgba(app.$burgundy-900, 0.25);
          }

          &__inside {
            display: none;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: app.$burgundy-900;
          }
        }

        input {
          display: none;

          &:checked {
            & + .radioButton__toggle {
              .radioButton__toggle__inside {
                display: flex;
              }
            }
          }
        }

        &__label {
          color: app.$gray-600;
          font-family: 'Inter Variable', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 169.231% */
        }
      }
    }

    &__error {
      color: red;
      font-size: 13px;
    }
  }
</style>
