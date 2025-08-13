<script>
	import * as Tabs from '$lib/components/ui/tabs/index';
	import Account from '$lib/pages/pages/account-settings/account.svelte';
	import BillingPlans from '$lib/pages/pages/account-settings/billing-plans.svelte';
	import Connections from '$lib/pages/pages/account-settings/connections.svelte';
	import Notifications from '$lib/pages/pages/account-settings/notifications.svelte';
	import Security from '$lib/pages/pages/account-settings/security.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Account settings</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Tabs.Root value="account">
			<Tabs.List class="w-full">
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="security">Security</Tabs.Trigger>
				<Tabs.Trigger value="billing-plans">Billing & Plans</Tabs.Trigger>
				<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
				<Tabs.Trigger value="connections">Connections</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="account" class="space-y-4">
				<Account />
			</Tabs.Content>
			<Tabs.Content value="security" class="space-y-4">
				<Security />
			</Tabs.Content>
			<Tabs.Content value="billing-plans" class="space-y-4">
				<BillingPlans />
			</Tabs.Content>
			<Tabs.Content value="notifications" class="space-y-4">
				<Notifications />
			</Tabs.Content>
			<Tabs.Content value="connections" class="space-y-4">
				<Connections />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
