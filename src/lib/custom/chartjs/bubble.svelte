<script lang="ts" generics="TData = DefaultDataPoint<'bubble'>, TLabel = unknown">
	import Chart from '$lib/custom/chartjs/chart.svelte';
	import { ArcElement, BubbleController, Chart as ChartJS, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	ChartJS.register(BubbleController, ArcElement);

	let {
		chart = $bindable(null),
		...restProps
	}: Omit<ChartProps<'bubble', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="bubble" {...restProps} />
