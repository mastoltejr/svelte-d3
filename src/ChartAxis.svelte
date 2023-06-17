<script lang="ts">
  import { getContext } from 'svelte';
  import { scaleLinear, select, selectAll, axisBottom, axisLeft } from 'd3';
  export let side: 'top' | 'right' | 'bottom' | 'left' = 'bottom';

  let g;
  let axis;
  let transform;
  
  const chart = getContext('chart')
  const domain = side === 'left' | side === 'right' ? chart.xExtent : chart.yExtent;
  const scale = scaleLinear().domain(domain).range([0,chart.chartWidth]);
  const margin = 0;

  $: {
		select(g).selectAll('*').remove();

		let axis;
		switch(side) {
			case 'bottom':
				axis = axisBottom(scale).tickSizeOuter(0);
				transform = `translate(0, ${chart.chartHeight - margin})`;
				break;
			case 'left':
				axis = axisLeft(scale).tickSizeOuter(0);
				transform = `translate(${margin}, 0)`;
		}

		select(g).call(axis);
	}

</script>

<g class='axis' bind:this={g} {transform} />