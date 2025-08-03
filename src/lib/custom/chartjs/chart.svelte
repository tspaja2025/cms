<script
	lang="ts"
	generics="TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown"
>
	import { onDestroy, onMount } from 'svelte';
	import { Chart as ChartJS, type ChartType, type DefaultDataPoint } from 'chart.js';
	import type { ChartProps } from '$lib/custom/chartjs/types';

	let {
		type,
		data,
		options,
		plugins,
		updateMode,
		chart = $bindable(null),
		...restProps
	}: ChartProps<TType, TData, TLabel> = $props();

	let canvasRef: HTMLCanvasElement;

	function freeze<T>(value: T) {
		return $state.snapshot(value) as T;
	}

	onMount(() => {
		chart = new ChartJS(
			canvasRef,
			freeze({
				type,
				data,
				options,
				plugins
			})
		);
	});

	$effect(() => {
		if (!chart) return;

		chart.data = data;
		if (chart.options && options) {
			Object.assign(chart.options, freeze(options));
		}
		chart.update(updateMode);
	});

	onDestroy(() => {
		if (chart) chart.destroy();
		chart = null;
	});
</script>

<canvas bind:this={canvasRef} {...restProps}></canvas>
