<script lang='ts'>
	let { label, required, id, defaultValue = $bindable(), disabled, type = 'text', min, max }: {
		label: string,
		id: string,
		required?: boolean,
		defaultValue?: string
		disabled?: boolean
		type?: 'text' | 'number' | 'date'
		min?: number
		max?: number
	} = $props();
</script>

<div class='inputWrapper'>
	<label class:required for={id}><span>*</span>{label}</label>
	<input class:disabled {id} name={id} placeholder={label} {required} {type} bind:value={defaultValue}
				 {disabled} {min} {max} />
</div>

<style lang='scss'>
  @use '../../../style/app';

  .inputWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
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


      &::placeholder {
        color: app.$gray-600;
        font-family: 'Inter Variable', sans-serif;
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
