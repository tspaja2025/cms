<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Search, MapPin, Clock } from '@lucide/svelte';

	type Status = 'in-transit' | 'delivered' | 'pending' | 'delayed';

	interface Shipment {
		id: string;
		destination: string;
		status: Status;
		estimatedDelivery: string;
		currentLocation: string;
	}

	let searchTerm = $state('');

	const shipments: Shipment[] = $state([
		{
			id: 'SH001',
			destination: 'New York, NY',
			status: 'in-transit',
			estimatedDelivery: 'Dec 12, 2024',
			currentLocation: 'Philadelphia, PA'
		},
		{
			id: 'SH002',
			destination: 'Los Angeles, CA',
			status: 'delivered',
			estimatedDelivery: 'Dec 10, 2024',
			currentLocation: 'Los Angeles, CA'
		},
		{
			id: 'SH003',
			destination: 'Chicago, IL',
			status: 'pending',
			estimatedDelivery: 'Dec 15, 2024',
			currentLocation: 'Warehouse A'
		},
		{
			id: 'SH004',
			destination: 'Miami, FL',
			status: 'delayed',
			estimatedDelivery: 'Dec 14, 2024',
			currentLocation: 'Atlanta, GA'
		}
	]);

	const getStatusColor = (status: Status) => {
		switch (status) {
			case 'delivered':
				return 'bg-green-100 text-green-800';
			case 'in-transit':
				return 'bg-blue-100 text-blue-800';
			case 'pending':
				return 'bg-yellow-100 text-yellow-800';
			case 'delayed':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	const ship = $derived(
		shipments.filter(
			(shipment) =>
				shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
				shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
		)
	);
</script>

<Card.Root title="Shipment Tracker">
	<Card.Header>
		<Card.Title>Shipment Tracker</Card.Title>
		<div class="relative flex-1">
			<Search class="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
			<Input placeholder="Search shipments..." bind:value={searchTerm} class="pl-8" />
			<Button>Track New</Button>
		</div>
	</Card.Header>
	<div class="space-y-4">
		{#each ship as shipment (shipment.id)}
			<div class="flex items-center justify-between rounded-lg border p-4">
				<div class="space-y-1">
					<div class="flex items-center gap-2">
						<span class="font-medium">{shipment.id}</span>
						<Badge class={getStatusColor(shipment.status)}>
							{shipment.status.replace('-', ' ')}
						</Badge>
					</div>
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<MapPin class="h-3 w-3" />
						{shipment.destination}
					</div>
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<Clock class="h-3 w-3" />
						ETA: {shipment.estimatedDelivery}
					</div>
				</div>
				<div class="text-right">
					<div class="text-sm font-medium">Current Location</div>
					<div class="text-muted-foreground text-sm">{shipment.currentLocation}</div>
				</div>
			</div>
		{/each}
	</div>
</Card.Root>
