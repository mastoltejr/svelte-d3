<script lang="ts">
    import { setContext } from "svelte";
    export let height: string = '';
    export let width: string = '';
    let containerHeight: number;
    let containerWidth: number;
    let chartHeight: number;
    let chartWidth: number;

    $: {
        setContext('chartDimensions', {
            chartWidth, chartHeight
        });
    }
</script>

<div id="container" style={`width: ${width}; height: ${height}`} bind:clientHeight={containerHeight} bind:clientWidth={containerWidth}>
    <div id="title">
        <slot name="title" />
    </div>
    <div id="subtitle">
        <slot name="subtitle" />
    </div>
    <div id="axisTitleTop">
        <slot name="axisTitleTop" />
    </div>
    <main>
        <div id="axisTitleLeft">
            <slot name="axisTitleLeft" />
        </div>
        <div id="chart" bind:clientWidth={chartWidth} bind:clientHeight={chartHeight}>
            <svg width={chartWidth} height={chartHeight}>
            <slot name="chart" />
            </svg>
        </div>
        <div id="axisTitleRight">
            <slot name="axisTitleRight" />
        </div>
    </main>
    <div id="axisTitleBottom">
        <slot name="axisTitleBottom" />
    </div>
    <div id="description">
        <slot name="description" />
    </div>
</div>

<style>
    #container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid grey;
    }

    main {
        display: flex;
        flex-grow: 1
    }

    #chart {
        background-color: grey;
        flex-grow: 1;
    }
</style>