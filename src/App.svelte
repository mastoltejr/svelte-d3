<script lang="ts">
  import ChartContainer from "./ChartContainer.svelte";
  import ChartAxisTitle from "./ChartAxisTitle.svelte";
  import Chart from "./Chart.svelte";
  import ChartAxis from "./ChartAxis.svelte";

  const data: Array<{x: number, y: number}> = Array(100).fill(0).map((_, i) => ({x: i, y: i*4 + 32}));
  const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laudantium assumenda sequi fugiat possimus, vero doloremque ratione voluptatem. Suscipit quisquam, optio accusamus reiciendis accusantium voluptatum soluta, quidem quaerat voluptates hic quia sit tempora itaque. Dolorum distinctio, quidem repellendus beatae quam dolores odit, aperiam, asperiores laudantium laboriosam facilis deleniti dicta! Expedita.";
</script>


<div style="width: 600px; height: 400px">
    <ChartContainer title="Awesome Title" {description} axisTitleBottom="x" axisTitleLeft="y">
      <Chart slot="chart" data={data}>
        <ChartAxis side="bottom" />
      </Chart>
      
    </ChartContainer>
</div>