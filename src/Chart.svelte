<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { extent } from 'd3';
  export let data: Array<{x: number | Date, y: number, group?: string, color?: string}> = [];
    let chartHeight: number;
    let chartWidth: number;
    onMount(async () => {
        chartWidth = document.getElementById('chart').offsetWidth;
        chartHeight = document.getElementById('chart').offsetHeight;
        const xExtent = extent(data, (d) => d.x);
        const yExtent = extent(data, (d) => d.y);
        setContext('chart', {chartWidth, chartHeight, xExtent, yExtent})
    });
</script>

<svg width="100%" height="100%" id="chart"> 
   <slot />
</svg>
