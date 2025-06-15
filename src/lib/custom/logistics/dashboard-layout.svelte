<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import { BarChart3, Settings, Bell, User } from '@lucide/svelte';
	import DashboardStats from '$lib/custom/logistics/dashboard-stats.svelte';
	import ShipmentTracker from '$lib/custom/logistics/shipment-tracker.svelte';
	import FleetManagement from '$lib/custom/logistics/fleet-management.svelte';
	import InventoryOverview from '$lib/custom/logistics/inventory-overview.svelte';
	import RecentActivity from '$lib/custom/logistics/recent-activity.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="min-h-screen bg-gray-50">
	<header class="border-b border-gray-200 bg-white px-4 py-3">
		<div class="mx-auto flex max-w-7xl items-center justify-between">
			<div class="flex items-center gap-2">
				<BarChart3 class="h-8 w-8 text-blue-600" />
				<h1 class="text-2xl font-bold text-gray-900">Logistics Dashboard</h1>
			</div>
			<div class="flex items-center gap-2">
				<Button>
					<Bell class="h-4 w-4" />
				</Button>
				<Button>
					<Settings class="h-4 w-4" />
				</Button>
				<Button>
					<User class="h-4 w-4" />
				</Button>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-6">
		<div class="space-y-6">
			<DashboardStats />

			<Tabs.Root value="shipments" class="space-y-4">
				<Tabs.List class="grid w-full grid-cols-3">
					<Tabs.Trigger value="shipments">Shipments</Tabs.Trigger>
					<Tabs.Trigger value="fleet">Fleet</Tabs.Trigger>
					<Tabs.Trigger value="inventory">Inventory</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="shipments" class="space-y-4">
					<ShipmentTracker />
				</Tabs.Content>

				<Tabs.Content value="fleet" class="space-y-4">
					<FleetManagement />
				</Tabs.Content>

				<Tabs.Content value="inventory" class="space-y-4">
					<InventoryOverview />
				</Tabs.Content>
			</Tabs.Root>

			<RecentActivity />
		</div>
	</main>
</div>
