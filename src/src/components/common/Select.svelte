<script lang='ts'>
  let {label, required, id, disabled, options, value = $bindable()}: {
    label: string,
    id: string,
    required?: boolean,
    disabled?: boolean
    options: { value: string | null, label: string } []
    value?: string
  } = $props();
</script>

<div class='selectInput'>
    <label class:required for={id}><span>*</span>{label}</label>
    <select {id} name={id} bind:value={value} {disabled}>
        {#each options as option}
            <option value={option.value}>
                {option.label}
            </option>
        {/each}
    </select>
</div>

<style lang='scss'>
  @use '../../../style/app';

  .selectInput {
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

    select {
      display: flex;
      height: 32px;
      padding: 5px 12px;
      align-items: center;
      gap: 4px;
      align-self: stretch;
      cursor: pointer;

      border-radius: 6px;
      border: 1px solid app.$gray-400;
      background: #FFF;
      box-shadow: 0 1px 1px 0 rgba(218, 218, 222, 0.25);

      color: app.$gray-600;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 169.231% */

      &::placeholder {
        color: app.$gray-600;
        opacity: 0.7;
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
    }


  }
</style>
