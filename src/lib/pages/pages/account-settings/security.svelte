<script>
	import { resolve } from '$app/paths';
	import * as Alert from '$lib/components/ui/alert/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Select from '$lib/components/ui/select/index';
	import * as Table from '$lib/components/ui/table/index';
	import Field from '$lib/custom/input-field/field.svelte';
	import { recentDevicesData } from '$lib/store';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Change Password</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<Field label="Current Password" id="current_password" />
		<div class="flex space-x-4">
			<Field class="flex-1" label="New Password" id="new_password" />
			<Field class="flex-1" label="Confirm New Password" id="confirm_new_password" />
		</div>
		<Alert.Root variant="destructive">
			<AlertCircleIcon />
			<Alert.Title>Password Requirements</Alert.Title>
			<Alert.Description>
				<ul class="list-inside list-disc text-sm">
					<li>Minimum 8 characters long - the more, the better</li>
					<li>At least one lowercase & one uppercase character</li>
					<li>At least one number, symbol, or whitespace character</li>
				</ul>
			</Alert.Description>
		</Alert.Root>
	</Card.Content>
	<Card.Footer class="gap-2">
		<Button>Save Changes</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Two-step Verification</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<p>Two factor authentication is not enabled yet.</p>
		<p>
			Two-factor authentication adds an additional layer of security to your account by requiring
			more than just a password to log in. <a
				href={resolve('/admin')}
				class="text-blue-500 hover:text-blue-600">Learn more.</a
			>
		</p>
	</Card.Content>
	<Card.Footer>
		<Button>Enable two-factor authentication</Button>
	</Card.Footer>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Create an API key</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<Select.Root type="single">
			<Select.Trigger>Choose the API key type</Select.Trigger>
			<Select.Content>
				<Select.Item value="full_control">Full Control</Select.Item>
				<Select.Item value="modify">Modify</Select.Item>
				<Select.Item value="read_execute">Read & Execute</Select.Item>
				<Select.Item value="list_folder_contents">List Folder Contents</Select.Item>
				<Select.Item value="read_only">Read Only</Select.Item>
				<Select.Item value="read_write">Read & Write</Select.Item>
			</Select.Content>
		</Select.Root>
		<Field label="Name the API key" id="key_name" />
	</Card.Content>
	<Card.Footer>
		<Button>Create Key</Button>
	</Card.Footer>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>API Key List & Access</Card.Title>
		<Card.Description
			>An API key is a simple encrypted string that identifies an application without any principal.
			They are useful for accessing public data anonymously, and are used to associate API requests
			with your project for quota and billing.</Card.Description
		>
	</Card.Header>
	<Card.Content></Card.Content>
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
				{#each recentDevicesData as item, index (index)}
					<Table.Row>
						{#each item.items as it, index (index)}
							<Table.Cell>{it.name}</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
