<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Table from '$lib/components/ui/table/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { invoiceList, projectList } from '$lib/custom/user/store/data';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import FilesIcon from '@lucide/svelte/icons/files';
</script>

<Card.Root>
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Project List</Card.Title>
		<Input class="w-64" name="search" placeholder="Search Project" />
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Project</Table.Head>
					<Table.Head>Total Task</Table.Head>
					<Table.Head>Progress</Table.Head>
					<Table.Head>Hours</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each projectList as project (project.name)}
					<Table.Row>
						<Table.Cell class="flex items-center gap-2">
							<Avatar.Root>
								<Avatar.Image src={project.src} alt={project.name} />
								<Avatar.Fallback>{project.name}</Avatar.Fallback>
							</Avatar.Root>
							<span class="font-medium">{project.name}</span>
						</Table.Cell>
						<Table.Cell>{project.total}/240</Table.Cell>
						<Table.Cell>{project.progress}%<Progress value={project.progress} /></Table.Cell>
						<Table.Cell>{project.hours}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header>
		<Card.Title>User Activity Timeline</Card.Title>
	</Card.Header>
</Card.Root>
<Card.Root>
	<Card.Header>
		<Card.Title>Invoice List</Card.Title>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>#</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Total</Table.Head>
					<Table.Head>Issued Date</Table.Head>
					<Table.Head>Action</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoiceList as item, index (index)}
					<Table.Row>
						<Table.Cell># {item.id}</Table.Cell>
						<Table.Cell>
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
										<item.status class="h-5 w-5" />
									</Tooltip.Trigger>
									<Tooltip.Content>
										{#each item.tooltip as child, index (index)}
											<p>Status: {child.statusName}</p>
											<p>Balance: ${child.balance}</p>
											<p>Due Date: {child.dueDate}</p>
										{/each}
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						</Table.Cell>
						<Table.Cell>${item.total}</Table.Cell>
						<Table.Cell>{item.issuedDate}</Table.Cell>
						<Table.Cell>
							<Button variant="ghost"><TrashIcon class="h-5 w-5" /></Button>
							<Button variant="ghost"><EyeIcon class="h-5 w-5" /></Button>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
									<EllipsisVerticalIcon class="h-5 w-5" />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item><DownloadIcon class="h-5 w-5" />Download</DropdownMenu.Item>
									<DropdownMenu.Item><SquarePenIcon class="h-5 w-5" />Edit</DropdownMenu.Item>
									<DropdownMenu.Item><FilesIcon class="h-5 w-5" />Duplicate</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
