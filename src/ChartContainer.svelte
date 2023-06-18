<script lang="ts">
  import ChartAxisTitle from "./ChartAxisTitle.svelte";
  export let height: string = "";
  export let width: string = "";
  export let title: string = undefined;
  export let subtitle: string = undefined;
  export let description: string = undefined;

  export let axisTitleTop: string = undefined;
  export let axisTitleBottom: string = undefined;
  export let axisTitleRight: string = undefined;
  export let axisTitleLeft: string = undefined;

  let containerHeight: number;
  let containerWidth: number;

  // onMount(async () => {
  //     await tick();
  //     const chartWidth = document.getElementById('chart').offsetWidth;
  //     const chartHeight = document.getElementById('chart').offsetHeight;
  //     setContext('chartDimensions', {chartWidth, chartHeight})
  // });
</script>

<div
  id="container"
  style={`width: ${width}; height: ${height}`}
  bind:clientHeight={containerHeight}
  bind:clientWidth={containerWidth}
>
    {#if !!$$slots.title || !!title}
    <div id="title">
        <slot name="title">{title}</slot>
    </div>
    {/if}

  {#if !!$$slots.subtitle || !!subtitle}
    <div id="subtitle">
        <slot name="subtitle">{subtitle}</slot>
    </div>
  {/if}
  
  {#if !!$$slots.axisTitleTop || !!axisTitleTop}
  <div id="axisTitleTop">
    <ChartAxisTitle side="top">
        <slot name="axisTitleTop">{#if !!axisTitleTop}{axisTitleTop}{/if}</slot>
      </ChartAxisTitle>
  </div>
  {/if}
  
  {#if !!$$slots.axisTitleBottom || !!axisTitleBottom}
  <div id="axisTitleBottom">
    <ChartAxisTitle side="bottom">
        <slot name="axisTitleBottom">{#if !!axisTitleBottom}{axisTitleBottom}{/if}</slot>
      </ChartAxisTitle>
  </div>
  {/if}

  {#if !!$$slots.description || !!description}
    <div id="description">
        <slot name="description"><p style:margin-bottom={0}>{description}</p></slot>
    </div>
  {/if}

  <main>
    {#if !!$$slots.axisTitleLeft || !!axisTitleLeft}
        <div id="axisTitleLeft">
            <ChartAxisTitle side="left">
                <slot name="axisTitleLeft">{#if !!axisTitleLeft}{axisTitleLeft}{/if}</slot>
            </ChartAxisTitle>
        </div>
    {/if}
    <div id="chart">
      <slot name="chart" />
    </div>
    {#if !!$$slots.axisTitleRight || !!axisTitleRight}
        <div id="axisTitleRight">
            <ChartAxisTitle side="right">
                <slot name="axisTitleRight">{#if !!axisTitleRight}{axisTitleRight}{/if}</slot>
            </ChartAxisTitle>
        </div>
    {/if}
  </main>
</div>

<style>
  #container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    box-sizing: border-box;
    padding: 6px 12px;
  }

  #title {
    order: 1;
    font-size: 2rem;
    text-align: left;
  }

  #subtitle {
    order: 2;
    font-size: 0.7rem;
    text-align: left;
  }

  #axisTitleTop {
    order: 3;
  }

  main {
    order: 4;
    display: flex;
    flex-grow: 1;
    position: relative;
  }

  #chart {
    position: relative;
    display: block;
    flex-grow: 1;
    box-sizing: border-box;
    border: 1px solid grey;
  }

    #axisTitleBottom {
    order: 5;
  }

  #description {
    order: 6;
    align-self: flex-end;
  }

  #description > p {
    font-size: 0.6rem;
    text-align: center;
  }  
</style>
