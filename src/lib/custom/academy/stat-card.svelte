<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { TrendingUp, TrendingDown } from '@lucide/svelte';

	let {
		title,
		value,
		change = 0,
		icon,
		color = 'primary'
	}: {
		title: string;
		value: string | number;
		change: number;
		icon: any;
		color: string;
	} = $props();

	const isPositive = change >= 0;

	const colorClasses = {
		primary: 'bg-primary-50 text-primary-600',
		secondary: 'bg-secondary-50 text-secondary-600',
		accent: 'bg-accent-50 text-accent-600',
		warning: 'bg-yellow-50 text-yellow-600'
	};

	const Icon = $derived(icon);
	const Component = $derived(isPositive ? TrendingUp : TrendingDown);
</script>

<Card.Root>
	<Card.Content>
		<div class="mb-4 flex items-center justify-between">
			<div class="rounded-lg p-3 {colorClasses[color]}">
				<Icon class="h-6 w-6" />
			</div>
			{#if change !== 0}
				<div class="flex items-center text-sm {isPositive ? 'text-green-600' : 'text-red-600'}">
					<Component class="mr-1 h-4 w-4" />
					{Math.abs(change)}%
				</div>
			{/if}
		</div>

		<h3 class="mb-1 text-2xl font-bold">{value}</h3>
		<p class="text-sm">{title}</p>
	</Card.Content>
</Card.Root>
