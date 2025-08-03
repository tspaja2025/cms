<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Table from '$lib/components/ui/table/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { notifications } from '$lib/custom/pages/user-settings/store/data';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Recent Devices</Card.Title>
		<Card.Description
			>We need permission from your browser to show notifications. Request Permission</Card.Description
		>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Type</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Browser</Table.Head>
					<Table.Head>App</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each notifications as item, index (index)}
					<Table.Row>
						<Table.Cell>{item.name}</Table.Cell>
						<Table.Cell><Checkbox checked={item.email} /></Table.Cell>
						<Table.Cell><Checkbox checked={item.browser} /></Table.Cell>
						<Table.Cell><Checkbox checked={item.app} /></Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<Select.Root type="single">
			<Select.Trigger>When should we send you notifications?</Select.Trigger>
			<Select.Content>
				<Select.Item value="online">Only when I'm online</Select.Item>
				<Select.Item value="anytime">Anytime</Select.Item>
			</Select.Content>
		</Select.Root>
	</Card.Content>
	<Card.Footer class="gap-2">
		<Button>Save Changes</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
