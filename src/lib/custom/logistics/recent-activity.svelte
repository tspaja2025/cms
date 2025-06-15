<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Package, Truck, AlertTriangle } from '@lucide/svelte';

	type ActivityType = 'shipment' | 'fleet' | 'inventory' | 'alert';
	type ActivityStatus = 'success' | 'warning' | 'error' | 'info';

	interface Activity {
		id: string;
		type: ActivityType;
		title: string;
		description: string;
		timestamp: string;
		status: ActivityStatus;
	}

	const activities: Activity[] = $state([
		{
			id: 'ACT001',
			type: 'shipment',
			title: 'Shipment SH001 Delivered',
			description: 'Package delivered to New York, NY',
			timestamp: '2 minutes ago',
			status: 'success'
		},
		{
			id: 'ACT002',
			type: 'fleet',
			title: 'Vehicle TRK003 Maintenance',
			description: 'Scheduled maintenance completed',
			timestamp: '15 minutes ago',
			status: 'info'
		},
		{
			id: 'ACT003',
			type: 'inventory',
			title: 'Low Stock Alert',
			description: 'Automotive Parts below threshold',
			timestamp: '1 hour ago',
			status: 'warning'
		},
		{
			id: 'ACT004',
			type: 'alert',
			title: 'Shipment Delayed',
			description: 'SH004 delayed due to weather conditions',
			timestamp: '2 hours ago',
			status: 'error'
		}
	]);

	function getActivityIcon(type: ActivityType) {
		switch (type) {
			case 'shipment':
				return Package;
			case 'fleet':
				return Truck;
			case 'inventory':
				return Package;
			case 'alert':
				return AlertTriangle;
			default:
				return Clock;
		}
	}

	function getStatusColor(status: ActivityStatus) {
		switch (status) {
			case 'success':
				return 'bg-green-100 text-green-800';
			case 'warning':
				return 'bg-yellow-100 text-yellow-800';
			case 'error':
				return 'bg-red-100 text-red-800';
			case 'info':
				return 'bg-blue-100 text-blue-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="flex items-center gap-2">
			<Clock class="h-5 w-5" />
			Recent Activity
		</Card.Title>
	</Card.Header>
	<div class="space-y-4">
		{#each activities as activity (activity.id)}
			<div class="flex items-start gap-3 rounded-lg border p-3">
				<div class="mt-1">
					<!-- <svelte:element this={getActivityIcon(activity.type)} class="h-4 w-4"></svelte:element> -->
				</div>
				<div class="flex-1 space-y-1">
					<div class="flex items-center gap-2">
						<span class="text-sm font-medium">{activity.title}</span>
						<Badge class={getStatusColor(activity.status)}>
							{activity.status}
						</Badge>
					</div>
					<p class="text-muted-foreground text-sm">{activity.description}</p>
					<p class="text-muted-foreground text-xs">{activity.timestamp}</p>
				</div>
			</div>
		{/each}
	</div>
</Card.Root>
