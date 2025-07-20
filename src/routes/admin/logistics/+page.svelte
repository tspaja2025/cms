<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import TruckIcon from '@lucide/svelte/icons/truck';
	import PackageIcon from '@lucide/svelte/icons/package';
	import SearchIcon from '@lucide/svelte/icons/search';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import TrendingDownIcon from '@lucide/svelte/icons/trending-down';
	import FuelIcon from '@lucide/svelte/icons/fuel';
	import UserIcon from '@lucide/svelte/icons/user';
	import AlertTriangleIcon from '@lucide/svelte/icons/triangle-alert';

	// Utility functions
	const getStatusColor = (status: string) => {
		const statusColors = {
			delivered: 'bg-green-100 text-green-800',
			'in-transit': 'bg-blue-100 text-blue-800',
			pending: 'bg-yellow-100 text-yellow-800',
			delayed: 'bg-red-100 text-red-800',
			active: 'bg-green-100 text-green-800',
			idle: 'bg-yellow-100 text-yellow-800',
			maintenance: 'bg-red-100 text-red-800',
			'in-stock': 'bg-green-100 text-green-800',
			'low-stock': 'bg-yellow-100 text-yellow-800',
			'out-of-stock': 'bg-red-100 text-red-800',
			success: 'bg-green-100 text-green-800',
			warning: 'bg-yellow-100 text-yellow-800',
			error: 'bg-red-100 text-red-800',
			info: 'bg-blue-100 text-blue-800'
		};
		return statusColors[status] || 'bg-gray-100 text-gray-800';
	};

	const getActivityIcon = (type: string) => {
		const icons = {
			shipment: PackageIcon,
			fleet: TruckIcon,
			inventory: PackageIcon,
			alert: AlertTriangleIcon
		};
		return icons[type] || ClockIcon;
	};

	const formatStatusText = (status: string) => status.replace('-', ' ');

	const getStockPercentage = (current: number, max: number) => (current / max) * 100;

	// Stats tracker
	const stats = [
		{
			title: 'Active Shipments',
			value: '1,234',
			change: '+12%',
			icon: PackageIcon,
			trend: 'up'
		},
		{
			title: 'Fleet Vehicles',
			value: '89',
			change: '+2%',
			icon: TruckIcon,
			trend: 'up'
		},
		{
			title: 'Avg Delivery Time',
			value: '2.4 days',
			change: '-8%',
			icon: ClockIcon,
			trend: 'down'
		},
		{
			title: 'Revenue',
			value: '$45,231',
			change: '+18%',
			icon: TrendingUpIcon,
			trend: 'up'
		}
	];

	// Shipment tracker
	type Status = 'in-transit' | 'delivered' | 'pending' | 'delayed';
	interface Shipment {
		id: string;
		destination: string;
		status: Status;
		estimatedDelivery: string;
		currentLocation: string;
	}

	let searchTerm = $state('');
	const shipments = $state<Shipment[]>([
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

	const ship = $derived(
		shipments.filter(
			(shipment) =>
				shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
				shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	// Fleet Management
	type VehicleStatus = 'active' | 'maintenance' | 'idle';
	interface Vehicle {
		id: string;
		driver: string;
		status: VehicleStatus;
		location: string;
		fuelLevel: number;
		nextMaintenance: string;
	}

	const vehicles = $state<Vehicle[]>([
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

	// Inventory Overview
	type InventoryItem = {
		id: string;
		name: string;
		category: string;
		currentStock: number;
		maxCapacity: number;
		status: 'in-stock' | 'low-stock' | 'out-of-stock';
		trend: 'up' | 'down' | 'stable';
	};

	const inventory = $state<InventoryItem[]>([
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

	// Recent Activity
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

	const activities = $state<Activity[]>([
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
</script>

<div class="space-y-4">
	<!-- Stats Cards -->
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat, index (index)}
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between">
					<Card.Title class="text-sm font-medium">{stat.title}</Card.Title>
					{@const Icon = stat.icon}
					<Icon class="text-muted-foreground h-4 w-4" />
				</Card.Header>
				<Card.Content class="flex items-center justify-center">
					<div class="text-2xl font-bold">{stat.value}</div>
				</Card.Content>
				<Card.Footer class={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
					{stat.change} from last month
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>

	<!-- Tabs Navigation -->
	<Tabs.Root value="shipments" class="space-y-4">
		<Tabs.List class="grid w-full grid-cols-3">
			<Tabs.Trigger value="shipments">Shipments</Tabs.Trigger>
			<Tabs.Trigger value="fleet">Fleet</Tabs.Trigger>
			<Tabs.Trigger value="inventory">Inventory</Tabs.Trigger>
		</Tabs.List>

		<!-- Shipments Tab -->
		<Tabs.Content value="shipments">
			<Card.Root>
				<Card.Header>
					<Card.Title>Shipment Tracker</Card.Title>
					<div class="relative flex flex-1">
						<SearchIcon class="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
						<Input placeholder="Search shipments..." bind:value={searchTerm} class="pl-8" />
						<Button>Track New</Button>
					</div>
				</Card.Header>
				<Card.Content class="space-y-4">
					{#each ship as shipment (shipment.id)}
						<div class="flex items-center justify-between rounded-lg border p-4">
							<div class="space-y-1">
								<div class="flex items-center gap-2">
									<span class="font-medium">{shipment.id}</span>
									<Badge class={getStatusColor(shipment.status)}>
										{formatStatusText(shipment.status)}
									</Badge>
								</div>
								<div class="text-muted-foreground flex items-center gap-1 text-sm">
									<MapPinIcon class="h-3 w-3" />
									{shipment.destination}
								</div>
								<div class="text-muted-foreground flex items-center gap-1 text-sm">
									<ClockIcon class="h-3 w-3" />
									ETA: {shipment.estimatedDelivery}
								</div>
							</div>
							<div class="text-right">
								<div class="text-sm font-medium">Current Location</div>
								<div class="text-muted-foreground text-sm">
									{shipment.currentLocation}
								</div>
							</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</Tabs.Content>

		<!-- Fleet Tab -->
		<Tabs.Content value="fleet">
			<Card.Root>
				<Card.Header>
					<Card.Title class="flex items-center gap-2">
						<TruckIcon class="h-5 w-5" />
						Fleet Management
					</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					{#each vehicles as vehicle (vehicle.id)}
						<div class="space-y-3 rounded-lg border p-4">
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<span class="font-medium">{vehicle.id}</span>
									<Badge class={getStatusColor(vehicle.status)}>
										{formatStatusText(vehicle.status)}
									</Badge>
								</div>
								<div class="text-muted-foreground text-sm">
									Next Service: {vehicle.nextMaintenance}
								</div>
							</div>

							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<div class="flex items-center gap-1 text-sm">
										<UserIcon class="h-3 w-3" />
										<span class="font-medium">Driver:</span>
										{vehicle.driver}
									</div>
									<div class="flex items-center gap-1 text-sm">
										<MapPinIcon class="h-3 w-3" />
										<span class="font-medium">Location:</span>
										{vehicle.location}
									</div>
								</div>

								<div class="space-y-2">
									<div class="flex items-center gap-2">
										<FuelIcon class="h-3 w-3" />
										<span class="text-sm font-medium">Fuel Level: {vehicle.fuelLevel}%</span>
									</div>
									<Progress value={vehicle.fuelLevel} class="h-2" />
								</div>
							</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</Tabs.Content>

		<!-- Inventory Tab -->
		<Tabs.Content value="inventory">
			<Card.Root>
				<Card.Header>
					<Card.Title class="flex items-center gap-2">
						<PackageIcon class="h-5 w-5" />
						Inventory Overview
					</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					{#each inventory as item (item.id)}
						<div class="space-y-3 rounded-lg border p-4">
							<div class="flex items-center justify-between">
								<div class="space-y-1">
									<div class="flex items-center gap-2">
										<span class="font-medium">{item.name}</span>
										<Badge class={getStatusColor(item.status)}>
											{formatStatusText(item.status)}
										</Badge>
										{#if item.trend === 'up'}
											<TrendingUpIcon class="h-3 w-3 text-green-600" />
										{:else if item.trend === 'down'}
											<TrendingDownIcon class="h-3 w-3 text-red-600" />
										{/if}
									</div>
									<div class="text-muted-foreground text-sm">
										{item.category}
									</div>
								</div>
								{#if item.status === 'low-stock' || item.status === 'out-of-stock'}
									<AlertTriangleIcon class="h-5 w-5 text-yellow-500" />
								{/if}
							</div>

							<div class="space-y-2">
								<div class="flex justify-between text-sm">
									<span>Stock Level</span>
									<span>{item.currentStock} / {item.maxCapacity}</span>
								</div>
								<Progress
									value={getStockPercentage(item.currentStock, item.maxCapacity)}
									class="h-2"
								/>
							</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>

	<!-- Recent Activity -->
	<Card.Root>
		<Card.Header>
			<Card.Title class="flex items-center gap-2">
				<ClockIcon class="h-5 w-5" />
				Recent Activity
			</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-4">
			{#each activities as activity (activity.id)}
				<div class="flex items-start gap-3 rounded-lg border p-3">
					<div class="mt-1">
						{#if activity.type}
							{@const ActivityIcon = getActivityIcon(activity.type)}
							<ActivityIcon class="h-4 w-4" />
						{/if}
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
		</Card.Content>
	</Card.Root>
</div>
