<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index';
	import Account from '$lib/custom/pages/user-settings/account.svelte';
	import Security from '$lib/custom/pages/user-settings/security.svelte';
	import BillingPlans from '$lib/custom/pages/user-settings/billing-plans.svelte';
	import Notifications from '$lib/custom/pages/user-settings/notifications.svelte';
	import Connections from '$lib/custom/pages/user-settings/connections.svelte';
</script>

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
