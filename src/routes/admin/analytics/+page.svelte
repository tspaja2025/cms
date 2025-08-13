<script>
	import ActiveUsers from '$lib/apps/analytics/active-users.svelte';
	import ConversionRate from '$lib/apps/analytics/conversion-rate.svelte';
	import OrdersByMonth from '$lib/apps/analytics/orders-by-month.svelte';
	import RecentActivity from '$lib/apps/analytics/recent-activity.svelte';
	import RevenueOverview from '$lib/apps/analytics/revenue-overview.svelte';
	import TotalOrders from '$lib/apps/analytics/total-orders.svelte';
	import TotalRevenue from '$lib/apps/analytics/total-revenue.svelte';
	import TrafficSources from '$lib/apps/analytics/traffic-sources.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Analytics</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<TotalRevenue />
		<ActiveUsers />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<TotalOrders />
		<ConversionRate />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<RevenueOverview />
		<OrdersByMonth />
	</div>

	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<TrafficSources />
		<RecentActivity />
	</div>
</div>
