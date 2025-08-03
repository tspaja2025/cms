<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import Overview from '$lib/custom/user/overview.svelte';
	import Security from '$lib/custom/user/security.svelte';
	import BillingPlans from '$lib/custom/user/billing-plans.svelte';
	import Notifications from '$lib/custom/user/notifications.svelte';
	import Connections from '$lib/custom/user/connections.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex gap-4">
	<div class="w-2/5 space-y-4">
		<Card.Root>User Info</Card.Root>
		<Card.Root class="border-2 border-purple-500 shadow-none">
			<Card.Header class="flex items-center justify-between">
				<Badge class="bg-purple-500">Standard</Badge>
				<div class="flex">
					<div class="font-medium text-purple-500">$</div>
					<div class="text-5xl font-medium text-purple-500">99</div>
					<div class="flex items-end">/month</div>
				</div>
			</Card.Header>
			<Card.Content class="space-y-4">
				<ul class="list-inside list-disc">
					<li>10 Users</li>
					<li>Up to 10 GB storage</li>
					<li>Basic Support</li>
				</ul>
				<div class="space-y-2">
					<Label for="days">Days 26 of 30</Label>
					<Progress id="days" class="[&>div]:bg-purple-500" value={70} />
					<p class="-mt-2 text-xs text-neutral-500">4 days remaining</p>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full bg-purple-500">Upgrade Plan</Button>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="w-3/5">
		<Tabs.Root value="overview">
			<Tabs.List class="w-full">
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="security">Security</Tabs.Trigger>
				<Tabs.Trigger value="billing-plans">Billing & Plans</Tabs.Trigger>
				<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
				<Tabs.Trigger value="connections">Connections</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content class="space-y-4" value="overview">
				<Overview />
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="security">
				<Security />
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="billing-plans">
				<BillingPlans />
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="notifications">
				<Notifications />
			</Tabs.Content>
			<Tabs.Content class="space-y-4" value="connections">
				<Connections />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
