<script>
	import ConversionRate from '$lib/apps/analytics/conversion-rate.svelte';
	import TotalRevenue from '$lib/apps/analytics/total-revenue.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import CustomerList from '$lib/pages/ecommerce/customers/customer-list.svelte';
	import OrdersList from '$lib/pages/ecommerce/orders/orders-list.svelte';
	import NewCustomers from '$lib/pages/ecommerce/overview/new-customers.svelte';
	import NewOrders from '$lib/pages/ecommerce/overview/new-orders.svelte';
	import RecentOrders from '$lib/pages/ecommerce/overview/recent-orders.svelte';
	import SalesOverview from '$lib/pages/ecommerce/overview/sales-overview.svelte';
	import TopSellingProducts from '$lib/pages/ecommerce/overview/top-selling-products.svelte';
	import ProductsList from '$lib/pages/ecommerce/products/products-list.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | eCommerce</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Tabs.Root value="overview">
			<Tabs.List class="w-full">
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="products">Products</Tabs.Trigger>
				<Tabs.Trigger value="orders">Orders</Tabs.Trigger>
				<Tabs.Trigger value="customers">Customers</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="grid gap-4">
				<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
					<TotalRevenue />
					<NewOrders />
					<NewCustomers />
					<ConversionRate />
				</div>
				<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
					<SalesOverview />
				</div>
				<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
					<RecentOrders />
					<TopSellingProducts />
				</div>
			</Tabs.Content>
			<Tabs.Content value="products">
				<ProductsList />
			</Tabs.Content>
			<Tabs.Content value="orders">
				<OrdersList />
			</Tabs.Content>
			<Tabs.Content value="customers">
				<CustomerList />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
