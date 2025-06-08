<script lang="ts">
	import { chart } from 'svelte-apexcharts';
	import type { ChartData } from '$lib/components/analytics/store/analytics';

	interface Props {
		title: string;
		subtitle?: string;
		chartData: ChartData;
		chartType: 'area' | 'bar' | 'donut';
	}

	const { title, subtitle, chartData, chartType }: Props = $props();
</script>

<div class="card">
	<div class="mb-6">
		<h3 class="text-lg font-semibold text-gray-900">{title}</h3>
		{#if subtitle}
			<p class="mt-1 text-sm text-gray-600">{subtitle}</p>
		{/if}
	</div>

	<div class="chart-container">
		<!-- <Chart options={chartData.options} series={chartData.series} type={chartType} height={350} /> -->
		<div
			use:chart={{
				options: chartData.options,
				series: chartData.series,
				type: chartType,
				height: 350
			}}
		></div>
	</div>
</div>

<style>
	:global(.chart-container .apexcharts-canvas) {
		font-family: 'Inter', system-ui, sans-serif !important;
	}

	:global(.chart-container .apexcharts-legend-text) {
		color: #374151 !important;
	}

	:global(.chart-container .apexcharts-tooltip) {
		background: white !important;
		border: 1px solid #e5e7eb !important;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
	}
</style>
