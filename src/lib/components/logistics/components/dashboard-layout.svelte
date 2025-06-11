<script>
	import Tabs from '$lib/dashboard/ui/tabs.svelte';
	import TabsContent from '$lib/dashboard/ui/tabs-content.svelte';
	import TabsList from '$lib/dashboard/ui/tabs-list.svelte';
	import TabsTrigger from '$lib/dashboard/ui/tabs-trigger.svelte';
	import { BarChart3, Settings, Bell, User } from '@lucide/svelte';
	import DashboardStats from '$lib/components/logistics/components/dashboard-stats.svelte';
	import ShipmentTracker from '$lib/components/logistics/components/shipment-tracker.svelte';
	import FleetManagement from '$lib/components/logistics/components/fleet-management.svelte';
	import InventoryOverview from '$lib/components/logistics/components/inventory-overview.svelte';
	import RecentActivity from '$lib/components/logistics/components/recent-activity.svelte';
	import Button from '$lib/dashboard/ui/button.svelte';
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

			<!-- <Tabs defaultValue="shipments" class="space-y-4">
				<TabsList class="grid w-full grid-cols-3">
					<TabsTrigger value="shipments">Shipments</TabsTrigger>
					<TabsTrigger value="fleet">Fleet</TabsTrigger>
					<TabsTrigger value="inventory">Inventory</TabsTrigger>
				</TabsList>

				<TabsContent value="shipments" class="space-y-4">
					<ShipmentTracker />
				</TabsContent>

				<TabsContent value="fleet" class="space-y-4">
					<FleetManagement />
				</TabsContent>

				<TabsContent value="inventory" class="space-y-4">
					<InventoryOverview />
				</TabsContent>
			</Tabs> -->

			<RecentActivity />
		</div>
	</main>
</div>
