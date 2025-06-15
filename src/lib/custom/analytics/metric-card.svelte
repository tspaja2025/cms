<script lang="ts">
	import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUp, ArrowDown } from '@lucide/svelte';
	import type { MetricData } from '$lib/custom/analytics/store/analytics';

	interface Props {
		metric: MetricData;
	}

	const { metric }: Props = $props();

	const iconComponents = {
		DollarSign,
		Users,
		ShoppingCart,
		TrendingUp
	};
	const IconComponent = $derived(iconComponents[metric.icon as keyof typeof iconComponents]);
</script>

<div class="metric-card">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<div class="rounded-lg bg-gray-50 p-2">
				<IconComponent class="h-6 w-6 {metric.color}" />
			</div>
			<div class="ml-4">
				<p class="text-sm font-medium text-gray-600">{metric.title}</p>
				<p class="text-2xl font-bold text-gray-900">{metric.value}</p>
			</div>
		</div>
	</div>

	<div class="mt-4 flex items-center text-sm">
		{#if metric.trend === 'up'}
			<ArrowUp class="text-secondary-500 mr-1 h-4 w-4" />
			<span class="text-secondary-600 font-medium">{metric.change}%</span>
		{:else}
			<ArrowDown class="mr-1 h-4 w-4 text-red-500" />
			<span class="font-medium text-red-600">{Math.abs(metric.change)}%</span>
		{/if}
		<span class="ml-1 text-gray-500">vs last period</span>
	</div>
</div>
