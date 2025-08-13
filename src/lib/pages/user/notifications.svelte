<script>
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import * as Table from '$lib/components/ui/table/index';
	import { notification } from '$lib/store';
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Notifications</Card.Title>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Type</Table.Head>
					<Table.Head>App</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Browser</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each notification as item, index (index)}
					<Table.Row>
						<Table.Cell>{item.type}</Table.Cell>
						<Table.Cell><Checkbox bind:checked={item.app} /></Table.Cell>
						<Table.Cell><Checkbox bind:checked={item.email} /></Table.Cell>
						<Table.Cell><Checkbox bind:checked={item.browser} /></Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
