<script lang='ts'>
	let { id, value, label, checked = $bindable() }: {
		id: string,
		value: string,
		checked: boolean,
		label?: string
	} = $props();
</script>

<div class='switch'>
	{#if !!label}
		<p class='switch__label'>{label}</p>
	{/if}
	<div class:checked class='toggleWrapper'>
		<label for={id} class='toggle'>
			<input {id} name={id} type='checkbox' bind:checked={checked} />
			<span class='slider'></span>
		</label>
		<p>{value}</p>
	</div>
</div>

<style lang='scss'>
	@use '../../../style/app';

  .switch {
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
    }

    .toggleWrapper {
      display: flex;
      padding: 4px 0;
      align-items: center;
      gap: 12px;
      align-self: stretch;

      p {
        color: app.$gray-600;
        opacity: 0.7;
        font-size: 14px;
        line-height: 22px; /* 157.143% */
      }

      &.checked {
        p {
          color: app.$gray-800;
          opacity: 1;
        }
      }

      .toggle {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 22px;

        input {
          opacity: 0;
          width: 0;
          height: 0;

          &:checked + .slider {
            background-color: app.$burgundy-900;

            &:before {
              -webkit-transform: translateX(22px);
              -ms-transform: translateX(22px);
              transform: translateX(22px);
            }
          }

          &:focus + .slider {
            box-shadow: 0 0 1px app.$burgundy-900;
          }
        }

        /* The slider */
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: app.$gray-550;
          -webkit-transition: .4s;
          transition: .4s;
          border-radius: 34px;

          &:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
          }
        }
      }
    }
  }


</style>
