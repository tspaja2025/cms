<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Table from '$lib/components/ui/table/index';
	import { cardData, tableData } from '$lib/store';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each cardData as card, index (index)}
		<Card.Root
			class="h-fit bg-gradient-to-t from-primary/5 to-card shadow-xs transition-all hover:shadow-md dark:bg-card"
		>
			<Card.Header class="pb-3">
				<Card.Title class="text-lg">{card.title}</Card.Title>
				<Card.Description>{card.description}</Card.Description>
			</Card.Header>
			<Card.Content class="grid grid-cols-6 gap-2 pb-4">
				{#each { length: 6 } as _, i (i)}
					<Avatar.Root class="h-10 w-10 border-2 border-background">
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback class="text-xs">{card.title.slice(0, 2).toUpperCase()}</Avatar.Fallback
						>
					</Avatar.Root>
				{/each}
			</Card.Content>
			<Card.Footer>
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
						<SquarePenIcon size={16} class="mr-2" />
						Edit Role
					</Dialog.Trigger>
					<Dialog.Content class="max-h-[80vh] max-w-4xl overflow-y-auto">
						<Dialog.Header>
							<Dialog.Title>Edit {card.title} Permissions</Dialog.Title>
							<Dialog.Description>
								Set permissions for the {card.title} role. Changes will apply to all users with this
								role.
							</Dialog.Description>
						</Dialog.Header>

						<div class="space-y-4 py-4">
							<div class="space-y-2">
								<Label for="role-name">Role Name</Label>
								<Input id="role-name" type="text" value={card.title} />
							</div>

							<div class="rounded-lg border">
								<h4 class="border-b p-4 text-lg font-medium">Role Permissions</h4>
								<Table.Root>
									<Table.Header>
										<Table.Row>
											<Table.Head class="w-1/3">Module</Table.Head>
											<Table.Head class="text-center">Read</Table.Head>
											<Table.Head class="text-center">Write</Table.Head>
											<Table.Head class="text-center">Create</Table.Head>
										</Table.Row>
									</Table.Header>
									<Table.Body>
										{#each tableData as item, i (i)}
											<Table.Row>
												<Table.Cell class="font-medium">{item.name}</Table.Cell>
												<Table.Cell class="text-center">
													<Checkbox checked={item.read} />
												</Table.Cell>
												<Table.Cell class="text-center">
													<Checkbox checked={item.write} />
												</Table.Cell>
												<Table.Cell class="text-center">
													<Checkbox checked={item.create} />
												</Table.Cell>
											</Table.Row>
										{/each}
									</Table.Body>
								</Table.Root>
							</div>
						</div>

						<Dialog.Footer class="gap-2 sm:gap-0">
							<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
							<Button>Save Changes</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
