<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Table from '$lib/components/ui/table/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex flex-col items-center">
		<CreditCardIcon />
		<Card.Title>Share Project</Card.Title>
		<Card.Description class="text-center"
			>Elegant Share Project options modal popup example, easy to use in any page.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex justify-center">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({})}>Show</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Share Project</Dialog.Title>
				<Dialog.Description>Share project with the team members</Dialog.Description>

				<div class="flex space-x-4">
					<div class="flex-1 space-y-2">
						<Label for="add_members">Add Members</Label>
						<Input type="text" id="add_members" />
					</div>
				</div>

				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Members</Table.Head>
							<Table.Head class="text-end">Permission</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>John Doe</Table.Cell>
							<Table.Cell class="text-end">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger class={buttonVariants({})}>Can Edit</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Item>Owner</DropdownMenu.Item>
										<DropdownMenu.Item>Can Edit</DropdownMenu.Item>
										<DropdownMenu.Item>Can Comment</DropdownMenu.Item>
										<DropdownMenu.Item>Can View</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Jane Doe</Table.Cell>
							<Table.Cell class="text-end">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger class={buttonVariants({})}>Owner</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Item>Owner</DropdownMenu.Item>
										<DropdownMenu.Item>Can Edit</DropdownMenu.Item>
										<DropdownMenu.Item>Can Comment</DropdownMenu.Item>
										<DropdownMenu.Item>Can View</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
				<Dialog.Footer>
					<Button type="submit">Submit</Button>
					<Button type="submit">Cancel</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</Card.Content>
</Card.Root>
