import type { ScaleLinear } from "d3";

export interface ChartContext {
    chartWidth: number;
    chartHeight: number;
    xExtent: [number,number];
    yExtent: [number,number];
    xScale: ScaleLinear<number, number, never>;
    yScale: ScaleLinear<number, number, never>;
}