<script lang='ts'>
  let {pathFill = '#000000', size = 12}: { pathFill?: string, size?: number } = $props();
  const sizePx = $derived(`${size}px`);
</script>

<svg style:width={sizePx} style:height={sizePx} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.37602 8.49475C5.49353 8.4276 5.59093 8.33021 5.65808 8.21269L8.9 2.53934C9.1077 2.17586 8.98142 1.71282 8.61793 1.50511C8.5034 1.43966 8.37377 1.40524 8.24185 1.40524H1.75802C1.33938 1.40524 1 1.74461 1 2.16326C1 2.29517 1.03443 2.4248 1.09987 2.53934L4.34179 8.21269C4.54949 8.57617 5.01253 8.70246 5.37602 8.49475Z"
          fill={pathFill}/>
</svg>
