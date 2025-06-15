<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Truck, Package, Clock, TrendingUp } from '@lucide/svelte';

	// type Trend = 'up' | 'down';

	// interface StatCardProps {
	// 	title: string;
	// 	value: string;
	// 	change: string;
	// 	icon: any; // Svelte components are typed differently
	// 	trend: Trend;
	// }

	const stats = [
		{
			title: 'Active Shipments',
			value: '1,234',
			change: '+12%',
			icon: Package,
			trend: 'up' as const
		},
		{
			title: 'Fleet Vehicles',
			value: '89',
			change: '+2%',
			icon: Truck,
			trend: 'up' as const
		},
		{
			title: 'Avg Delivery Time',
			value: '2.4 days',
			change: '-8%',
			icon: Clock,
			trend: 'down' as const // Changed to "down" since it's a negative change
		},
		{
			title: 'Revenue',
			value: '$45,231',
			change: '+18%',
			icon: TrendingUp,
			trend: 'up' as const
		}
	];
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	{#each stats as stat, statIndex (statIndex)}
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">{stat.title}</Card.Title>
				<svelte:component this={stat.icon} class="text-muted-foreground h-4 w-4" />
			</Card.Header>
			<div class="text-2xl font-bold">{stat.value}</div>
			<p class={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
				{stat.change} from last month
			</p>
		</Card.Root>
	{/each}
</div>
