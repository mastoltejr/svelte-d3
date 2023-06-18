<script lang="ts">
  import { getContext } from 'svelte';
  import type { ChartContext } from './chartTypes';
  export let side: 'top' | 'right' | 'bottom' | 'left' = 'bottom';

  let g;
  let domain: ChartContext['xExtent'] | ChartContext['yExtent'];
  let scale: ChartContext['xScale'] | ChartContext['yScale'];
  let orientation: 'horz' | 'vert';
  let ticks: number[] = [];
  const chart = getContext('chart') as ChartContext;
  
  $: {
	if(chart != undefined){
		if(side === 'left' || side === 'right'){
			domain = chart.yExtent;
			scale = chart.yScale;
			orientation = 'horz';
		} else {
			domain = chart.xExtent;
			scale = chart.xScale;
			orientation = 'vert';
		}

		const split = Math.floor((domain[1]-domain[0])/10);
		ticks = Array(10).fill(0).map((_, i) => domain[0]+i*split).concat(domain[1]);
	}
	console.log(ticks);
  }
</script>

<g class='axis' bind:this={g}>
	{#each ticks as tick}
		{#if orientation === 'vert'}
			<line stroke="lightgrey" stroke-width=1 x1={scale(tick)} y1={0} x2={scale(tick)} y2={chart.chartHeight}/>
		{:else }
			<line stroke="lightgrey" stroke-width=1 x1={0} y1={scale(tick)} x2={chart.chartWidth} y2={scale(tick)}/>
		{/if}
	{/each}
</g>