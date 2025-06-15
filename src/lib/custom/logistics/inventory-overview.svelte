<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { Package, AlertTriangle, TrendingDown, TrendingUp } from '@lucide/svelte';

	type InventoryItem = {
		id: string;
		name: string;
		category: string;
		currentStock: number;
		maxCapacity: number;
		status: 'in-stock' | 'low-stock' | 'out-of-stock';
		trend: 'up' | 'down' | 'stable';
	};

	const inventory: InventoryItem[] = $state([
		{
			id: 'INV001',
			name: 'Electronics Components',
			category: 'Electronics',
			currentStock: 850,
			maxCapacity: 1000,
			status: 'in-stock',
			trend: 'up'
		},
		{
			id: 'INV002',
			name: 'Automotive Parts',
			category: 'Automotive',
			currentStock: 120,
			maxCapacity: 500,
			status: 'low-stock',
			trend: 'down'
		},
		{
			id: 'INV003',
			name: 'Medical Supplies',
			category: 'Healthcare',
			currentStock: 0,
			maxCapacity: 300,
			status: 'out-of-stock',
			trend: 'down'
		},
		{
			id: 'INV004',
			name: 'Food Products',
			category: 'Food & Beverage',
			currentStock: 750,
			maxCapacity: 800,
			status: 'in-stock',
			trend: 'stable'
		}
	]);

	function getStatusColor(status: string) {
		switch (status) {
			case 'in-stock':
				return 'bg-green-100 text-green-800';
			case 'low-stock':
				return 'bg-yellow-100 text-yellow-800';
			case 'out-of-stock':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	function getTrendIcon(trend: string) {
		switch (trend) {
			case 'up':
				return '<TrendingUp class="h-3 w-3 text-green-600" />';
			case 'down':
				return '<TrendingDown class="h-3 w-3 text-red-600" />';
			default:
				return '<div class="h-3 w-3" />';
		}
	}

	function getStockPercentage(current: number, max: number) {
		return (current / max) * 100;
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="flex items-center gap-2">
			<Package class="h-5 w-5" />
			Inventory Overview
		</Card.Title>
	</Card.Header>
	<div class="space-y-4">
		{#each inventory as item, itemIndex (itemIndex)}
			<div class="space-y-3 rounded-lg border p-4">
				<div class="flex items-center justify-between">
					<div class="space-y-1">
						<div class="flex items-center gap-2">
							<span class="font-medium">{item.name}</span>
							<Badge class={getStatusColor(item.status)}>
								{item.status.replace('-', ' ')}
							</Badge>
							{getTrendIcon(item.trend)}
						</div>
						<div class="text-muted-foreground text-sm">{item.category}</div>
					</div>
					{#if item.status === 'low-stock' || item.status === 'out-of-stock'}
						<AlertTriangle class="h-5 w-5 text-yellow-500" />
					{/if}
				</div>

				<div class="space-y-2">
					<div class="flex justify-between text-sm">
						<span>Stock Level</span>
						<span>{item.currentStock} / {item.maxCapacity}</span>
					</div>
					<Progress value={getStockPercentage(item.currentStock, item.maxCapacity)} class="h-2" />
				</div>
			</div>
		{/each}
	</div>
</Card.Root>
