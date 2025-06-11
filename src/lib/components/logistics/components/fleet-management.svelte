<script lang="ts">
	import Card from '$lib/dashboard/ui/card.svelte';
	import Badge from '$lib/dashboard/ui/badge.svelte';
	import Progress from '$lib/dashboard/ui/progress.svelte';
	import { Truck, Fuel, MapPin, User } from '@lucide/svelte';

	type VehicleStatus = 'active' | 'maintenance' | 'idle';

	interface Vehicle {
		id: string;
		driver: string;
		status: VehicleStatus;
		location: string;
		fuelLevel: number;
		nextMaintenance: string;
	}

	// Using $state rune for reactive state
	const vehicles: Vehicle[] = $state([
		{
			id: 'TRK001',
			driver: 'John Smith',
			status: 'active',
			location: 'Route 95, Mile 45',
			fuelLevel: 75,
			nextMaintenance: 'Dec 20, 2024'
		},
		{
			id: 'TRK002',
			driver: 'Sarah Johnson',
			status: 'idle',
			location: 'Depot A',
			fuelLevel: 90,
			nextMaintenance: 'Jan 5, 2025'
		},
		{
			id: 'TRK003',
			driver: 'Mike Wilson',
			status: 'maintenance',
			location: 'Service Center',
			fuelLevel: 0,
			nextMaintenance: 'In Progress'
		},
		{
			id: 'TRK004',
			driver: 'Lisa Brown',
			status: 'active',
			location: 'Highway 10, Mile 120',
			fuelLevel: 45,
			nextMaintenance: 'Dec 25, 2024'
		}
	]);

	// Function is automatically reactive in Svelte
	function getStatusColor(status: VehicleStatus) {
		switch (status) {
			case 'active':
				return 'bg-green-100 text-green-800';
			case 'idle':
				return 'bg-yellow-100 text-yellow-800';
			case 'maintenance':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	// Uncomment if you want to use fuel level colors
	// function getFuelColor(level: number) {
	//   if (level > 50) return "bg-green-500";
	//   if (level > 25) return "bg-yellow-500";
	//   return "bg-red-500";
	// }
</script>

<Card title="Fleet Management">
	<!-- <CardHeader>
		<CardTitle class="flex items-center gap-2">
			<Truck class="h-5 w-5" />
			Fleet Management
		</CardTitle>
	</CardHeader> -->
	<div class="space-y-4">
		{#each vehicles as vehicle (vehicle.id)}
			<div class="space-y-3 rounded-lg border p-4">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="font-medium">{vehicle.id}</span>
						<Badge class={getStatusColor(vehicle.status)}>
							{vehicle.status}
						</Badge>
					</div>
					<div class="text-muted-foreground text-sm">
						Next Service: {vehicle.nextMaintenance}
					</div>
				</div>

				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="space-y-2">
						<div class="flex items-center gap-1 text-sm">
							<User class="h-3 w-3" />
							<span class="font-medium">Driver:</span>
							{vehicle.driver}
						</div>
						<div class="flex items-center gap-1 text-sm">
							<MapPin class="h-3 w-3" />
							<span class="font-medium">Location:</span>
							{vehicle.location}
						</div>
					</div>

					<div class="space-y-2">
						<div class="flex items-center gap-2">
							<Fuel class="h-3 w-3" />
							<span class="text-sm font-medium">Fuel Level: {vehicle.fuelLevel}%</span>
						</div>
						<Progress value={vehicle.fuelLevel} class="h-2" />
						<!-- You can add color based on fuel level here if needed class={`h-2 ${getFuelColor(vehicle.fuelLevel)}`} -->
					</div>
				</div>
			</div>
		{/each}
	</div>
</Card>
