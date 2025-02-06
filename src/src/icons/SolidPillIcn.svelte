<script lang='ts'>
  let {pathFill = '#000000', size = 12}: { pathFill?: string, size?: number } = $props();
  const sizePx = $derived(`${size}px`);
</script>

<svg style:width={sizePx} style:height={sizePx} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_272_714)">
        <path d="M48.973 43.316L58.297 34L58.277 33.98C61.809 30.375 64 25.445 64 20C64 8.953 55.047 0 44 0C38.551 0 33.625 2.191 30.02 5.723L30 5.703L20.684 15.027L48.973 43.316Z"
              fill={pathFill}/>
        <path d="M15.027 20.684L5.879 29.84C2.25 33.461 0 38.465 0 44C0 55.047 8.953 64 20 64C25.535 64 30.539 61.75 34.16 58.121L43.316 48.973L15.027 20.684Z"
              fill={pathFill}/>
    </g>
    <defs>
        <clipPath id="clip0_272_714">
            <rect width="64" height="64" fill="white"/>
        </clipPath>
    </defs>
</svg>
