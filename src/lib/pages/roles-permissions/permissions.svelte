<script>
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Table from '$lib/components/ui/table/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { PencilIcon, TrashIcon } from '@lucide/svelte';
	import { permissionTable } from '$lib/store';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="flex justify-between">
		<Input class="w-72" id="search-permissions" type="search" placeholder="Search permissions" />
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Add Permission</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Add New Permission</Dialog.Title>
					<Dialog.Description>Permissions you may use and assign to your users.</Dialog.Description>
				</Dialog.Header>
				<div class="space-y-2">
					<Label for="permission_name">Permission Name</Label>
					<Input type="text" />
				</div>
				<div class="flex space-x-2">
					<Checkbox id="core_permission" />
					<Label for="core_permission">Set as core permission</Label>
				</div>
				<Dialog.Footer>
					<Button type="submit">Create Permission</Button>
					<Button variant="secondary" type="submit">Discard</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Name</Table.Head>
					<Table.Head>Assigned To</Table.Head>
					<Table.Head>Created Date</Table.Head>
					<Table.Head>Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each permissionTable as item, index (index)}
					<Table.Row>
						<Table.Cell>{item.name}</Table.Cell>
						<Table.Cell class="space-x-1">
							{#each item.assignedTo as assigned, index (index)}
								<Badge class={assigned.color}>{assigned.name}</Badge>
							{/each}
						</Table.Cell>
						<Table.Cell>{item.CreatedDate}</Table.Cell>
						<Table.Cell>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
									<EllipsisVerticalIcon />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item><PencilIcon /> Edit</DropdownMenu.Item>
									<DropdownMenu.Item><TrashIcon /> Delete</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
