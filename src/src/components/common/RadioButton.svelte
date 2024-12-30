<script lang='ts'>
  let {label, id, value = $bindable(), name}: {
    label: string,
    id: string,
    name: string,
    value: string
  } = $props();

  const values = [
    {label: 'ten', value: 10},
    {label: 'twenty', value: 20},
    {label: 'thirty', value: 30}
  ];

  let selected = $state(values[0]);

  console.log(selected);
</script>

{#each values as value}
    <label>
        <input
                type="radio"
                bind:group={selected}
                name="amount"
                value={value}
        > {value.label}
    </label>
{/each}

<div class='radioBtnWrapper'>
    <label for={id}>
        <input type="radio" {id} {name} bind:value={value}/>
    </label>
    <p>{label}</p>
</div>


<style lang='scss'>
  @use '../../../style/app';

  .radioBtnWrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;

    input[type="radio"] {
      display: none;
    }

    /* Style for the label that will represent the radio button */
    label {
      display: inline-block;
      margin-bottom: 5px;
      margin-right: 10px;
      padding: 5px 20px;
      border: 2px solid #ddd;
      border-radius: 15px;
      cursor: pointer;
    }

    /* Style when the radio button is checked */
    input[type="radio"]:checked + .radio-label {
      border-color: #009688;
      background-color: #009688;
      color: white;
    }

    //label {
    //  display: flex;
    //  align-items: flex-start;
    //  gap: 8px;
    //  color: app.$gray-800;
    //  font-size: 14px;
    //  font-style: normal;
    //  font-weight: 600;
    //  line-height: 22px; /* 157.143% */
    //
    //  span {
    //    display: none;
    //  }
    //}
    //
    //input {
    //  display: flex;
    //  height: 32px;
    //  padding: 5px 12px;
    //  align-items: center;
    //  gap: 4px;
    //  align-self: stretch;
    //  cursor: pointer !important;
    //
    //  border-radius: 6px;
    //  border: 1px solid app.$gray-400;
    //  background: #FFF;
    //  box-shadow: 0 1px 1px 0 rgba(218, 218, 222, 0.25);
    //
    //  color: app.$gray-600;
    //  font-family: 'Inter Variable', sans-serif;
    //  font-size: 14px;
    //  font-style: normal;
    //  font-weight: 400;
    //  line-height: 22px; /* 169.231% */
    //
    //  &:hover {
    //    border-color: app.$burgundy-900;
    //  }
    //}
  }
</style>
