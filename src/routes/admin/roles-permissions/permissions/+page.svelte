<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<Card.Root>
	<Card.Header class="flex justify-between">
		<Input class="w-72" type="search" placeholder="Search permissions" />
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
				<Table.Row>
					<Table.Cell>Management</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>manage Billing & Roles</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Add & Remove Users</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-yellow-200 text-yellow-500">Manager</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Project Planning</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-green-200 text-green-500">Users</Badge>
						<Badge class="bg-blue-200 text-blue-500">Support</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Manage Email Sequances</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-green-200 text-green-500">Users</Badge>
						<Badge class="bg-blue-200 text-blue-500">Support</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Client Communications</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-yellow-200 text-yellow-500">Manager</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Only View</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-red-200 text-red-500">Restricted-User</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Financial Management</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-yellow-200 text-yellow-500">Manager</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Manage Others' Tasks</Table.Cell>
					<Table.Cell>
						<Badge class="bg-purple-200 text-purple-500">Administrator</Badge>
						<Badge class="bg-blue-200 text-blue-500">Support</Badge>
					</Table.Cell>
					<Table.Cell>14 July 2021</Table.Cell>
					<Table.Cell>
						<Button variant="ghost"><SquarePenIcon /></Button>
						<Button variant="ghost"><EllipsisVerticalIcon /></Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
