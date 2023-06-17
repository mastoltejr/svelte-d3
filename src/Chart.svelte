<script lang="ts">
  import { onMount, setContext } from 'svelte';
    let chartHeight: number;
    let chartWidth: number;
    onMount(async () => {
        chartWidth = document.getElementById('chart').offsetWidth;
        chartHeight = document.getElementById('chart').offsetHeight;
        setContext('chartDimensions', {chartWidth, chartHeight})
    });
</script>

  <svg width="100%" height="100%" id="chart"> 
    {chartWidth} {chartHeight}
  </svg>
