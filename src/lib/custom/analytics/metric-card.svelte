<script lang="ts">
	import DollarSign from '@lucide/svelte/icons/dollar-sign';
	import Users from '@lucide/svelte/icons/users';
	import ShoppingCart from '@lucide/svelte/icons/shopping-cart';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
	import * as Card from '$lib/components/ui/card';

	const { metric } = $props();

	const iconComponents = {
		DollarSign,
		Users,
		ShoppingCart,
		TrendingUp
	};
	const IconComponent = $derived(iconComponents[metric.icon as keyof typeof iconComponents]);
</script>

<Card.Root>
	<Card.Content>
		<div class="flex items-center">
			<div class="rounded-lg p-2">
				<IconComponent class="h-6 w-6 {metric.color}" />
			</div>
			<div class="ml-4">
				<p class="text-sm font-medium text-gray-600">{metric.title}</p>
				<p class="text-2xl font-bold">{metric.value}</p>
			</div>
		</div>
	</Card.Content>

	<Card.Footer>
		{#if metric.trend === 'up'}
			<ArrowUp class="text-secondary-500 mr-1 h-4 w-4" />
			<span class="text-secondary-600 font-medium">{metric.change}%</span>
		{:else}
			<ArrowDown class="mr-1 h-4 w-4 text-red-500" />
			<span class="font-medium text-red-600">{Math.abs(metric.change)}%</span>
		{/if}
		<span class="ml-1 text-gray-500">vs last period</span>
	</Card.Footer>
</Card.Root>
