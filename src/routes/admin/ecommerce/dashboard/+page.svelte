<script lang="ts">
	import Card from '$lib/custom/ecommerce/ui/card.svelte';
	import SalesChart from '$lib/custom/ecommerce/dashboard/sales-chart.svelte';
	import RecentOrders from '$lib/custom/ecommerce/dashboard/recent-orders.svelte';
	import TopProducts from '$lib/custom/ecommerce/dashboard/top-products.svelte';
	import Stats from '$lib/custom/ecommerce/ui/stats.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="space-y-6">
	<!-- Stats Cards -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<Card>
			<Stats
				value="$48,574.21"
				label="Total Revenue"
				icon="M20 12a8 8 0 01-8 8v-1a7 7 0 007-7h1zm-7 7a7 7 0 01-7-7h1a6 6 0 006 6v1zm-7-7a7 7 0 017-7v1a6 6 0 00-6 6h-1zm7-7a7 7 0 017 7h-1a6 6 0 00-6-6v-1z"
				trend={12.5}
				trendLabel="increase"
				trendPeriod="vs last month"
			/>
		</Card>

		<Card>
			<Stats
				value="856"
				label="New Orders"
				icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
				trend={8.3}
				trendLabel="increase"
				trendPeriod="vs last month"
			/>
		</Card>

		<Card>
			<Stats
				value="245"
				label="New Customers"
				icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
				trend={5.1}
				trendLabel="increase"
				trendPeriod="vs last month"
			/>
		</Card>

		<Card>
			<Stats
				value="24.8%"
				label="Conversion Rate"
				icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				trend={-2.4}
				trendLabel="decrease"
				trendPeriod="vs last month"
			/>
		</Card>
	</div>

	<!-- Sales Chart -->
	<Card>
		<SalesChart />
	</Card>

	<!-- Orders and Products -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<Card
			title="Recent Orders"
			hasAction={true}
			actionText="View All Orders"
			actionLink="/orders"
			noPadding={true}
		>
			<RecentOrders />
		</Card>

		<Card
			title="Top Selling Products"
			hasAction={true}
			actionText="View All Products"
			actionLink="/products"
			noPadding={true}
		>
			<TopProducts />
		</Card>
	</div>
</div>
