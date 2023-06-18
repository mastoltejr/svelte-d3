<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { extent, scaleLinear } from 'd3';
  export let data: Array<{x: number | Date, y: number, group?: string, color?: string}> = [];
    let chartHeight: number;
    let chartWidth: number;
    
        // chartWidth = 600;//document.getElementById('chart').offsetWidth;
        // chartHeight = 298;//document.getElementById('chart').offsetHeight;
  $: {
      const xExtent = extent(data, (d) => d.x);
    const xScale = scaleLinear().domain(xExtent).range([0,chartWidth]);
    const yExtent = extent(data, (d) => d.y);
    const yScale = scaleLinear().domain(yExtent).range([chartHeight,0]);
    setContext('chart', {chartWidth, chartHeight, xExtent, yExtent, xScale, yScale});
  }
    
</script>

<div bind:clientHeight={chartHeight} bind:clientWidth={chartWidth} style:height={"100%"} style:width={"100%"}>
  <svg width="100%" height="100%" id="chart"> 
    <slot />
 </svg>
</div>

