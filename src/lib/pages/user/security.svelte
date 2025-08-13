<script>
	import { resolve } from '$app/paths';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Table from '$lib/components/ui/table';
	import { recentDevices } from '$lib/store';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Change Password</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<Alert.Root variant="destructive">
			<CircleAlertIcon class="h-5 w-5" />
			<Alert.Title>Ensure that these requirements are met</Alert.Title>
			<Alert.Description>
				<ul class="list-inside list-disc text-sm">
					<li>Minimum 8 characters long</li>
					<li>uppercase</li>
					<li>symbol</li>
				</ul>
			</Alert.Description>
		</Alert.Root>
		<div class="flex gap-4">
			<Input id="password" type="password" placeholder="Password" />
			<Input id="confirm_password" type="password" placeholder="Confirm Password" />
		</div>
		<Button>Change Password</Button>
	</Card.Content>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Two-step verification</Card.Title>
		<Card.Description>Keep your account secure with authentication step.</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-4">
		<div class="space-y-2">
			<Label for="sms">SMS</Label>
			<Input id="sms" type="text" placeholder="123 456 7890" />
		</div>
		<p>
			two-factor authentication adds an additional layer of security to your account by requiring
			more than just a password to log in. <a
				class="text-blue-500 hover:text-blue-600"
				href={resolve('/admin')}>Learn more.</a
			>
		</p>
	</Card.Content>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Recent Devices</Card.Title>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Browser</Table.Head>
					<Table.Head>Device</Table.Head>
					<Table.Head>Location</Table.Head>
					<Table.Head>Recent Activities</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each recentDevices as item, index (index)}
					<Table.Row>
						<Table.Cell>{item.browser}</Table.Cell>
						<Table.Cell>{item.device}</Table.Cell>
						<Table.Cell>{item.location}</Table.Cell>
						<Table.Cell>{item.recentActivity}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
