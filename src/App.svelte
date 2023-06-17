<script lang="ts">
  import ChartContainer from "./ChartContainer.svelte";
  import ChartTitle from "./ChartTitle.svelte";
  import ChartSubtitle from "./ChartSubtitle.svelte";
  import ChartDescription from "./ChartDescription.svelte";
  import ChartAxisTitle from "./ChartAxisTitle.svelte";
  import Chart from "./Chart.svelte";
</script>


<div style="width: 600px; height: 400px">
    <ChartContainer>
      <ChartTitle slot="title">
        Awesome Title
      </ChartTitle>
      <ChartSubtitle slot="subtitle">
        Awesome Title
      </ChartSubtitle>
      <ChartAxisTitle side="left" slot="axisTitleLeft">
        <span style:font-size="1rem">Title</span>
      </ChartAxisTitle>
      <ChartAxisTitle side="top" slot="axisTitleTop">
        top
      </ChartAxisTitle>
      <ChartAxisTitle side="bottom" slot="axisTitleBottom">
        bottom
      </ChartAxisTitle>
      <ChartAxisTitle side="right" slot="axisTitleRight">
        <span style:font-size="1rem">This is a very Looooong title</span>
      </ChartAxisTitle>
      <Chart slot="chart" />
      <ChartDescription slot="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laudantium assumenda sequi fugiat possimus, vero doloremque ratione voluptatem. Suscipit quisquam, optio accusamus reiciendis accusantium voluptatum soluta, quidem quaerat voluptates hic quia sit tempora itaque. Dolorum distinctio, quidem repellendus beatae quam dolores odit, aperiam, asperiores laudantium laboriosam facilis deleniti dicta! Expedita.
      </ChartDescription>
    </ChartContainer>
</div>