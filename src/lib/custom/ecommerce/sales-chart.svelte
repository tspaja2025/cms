<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index';
	import { scaleUtc } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
	import { LineChart } from 'layerchart';

const chartData = [
	{ date: new Date("2024-01-01"), sales24: 186, sales25: 80 },
	{ date: new Date("2024-02-01"), sales24: 305, sales25: 200 },
	{ date: new Date("2024-03-01"), sales24: 237, sales25: 120 },
	{ date: new Date("2024-04-01"), sales24: 73,  sales25: 190 },
	{ date: new Date("2024-05-01"), sales24: 209, sales25: 130 },
	{ date: new Date("2024-06-01"), sales24: 214, sales25: 140 },
];

const chartConfig = {
	sales24: { label: "Sales 2024", color: "var(--chart-1)" },
	sales25: { label: "Sales 2025", color: "var(--chart-2)" },
} satisfies Chart.ChartConfig;
</script>

<div class="h-full w-full">
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h2>
	</div>
	<div class="h-[400px]">
		<Chart.Container config={chartConfig}>
      <LineChart
        data={chartData}
        x="date"
        xScale={scaleUtc()}
        axis="x"
        series={[
          {
            key: "sales24",
            label: "Sales 2024",
            color: chartConfig.sales24.color,
          },
          {
            key: "sales25",
            label: "Sales 2025",
            color: chartConfig.sales25.color,
          },
        ]}
        props={{
          spline: { curve: curveNatural, motion: "tween", strokeWidth: 2 },
          xAxis: {
            format: (v: Date) => v.toLocaleDateString("en-US", { month: "short" }),
          },
          highlight: { points: { r: 4 } },
        }}
		legend
      >
        {#snippet tooltip()}
          <Chart.Tooltip hideLabel />
        {/snippet}
      </LineChart>
    </Chart.Container>
	</div>
</div>
