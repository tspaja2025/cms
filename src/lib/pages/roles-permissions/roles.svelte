<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Select from '$lib/components/ui/select/index';
	import * as Table from '$lib/components/ui/table/index';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import UploadIcon from '@lucide/svelte/icons/upload';
	import { cardData, tableData, userListData } from '$lib/store';

	// Pagination state
	let currentPage = $state(1);
	let rowsPerPage = $state(10);

	// Filter state
	let selectedRole = $state('');
	let selectedPlan = $state('');
	let selectedStatus = $state('');
	let searchQuery = $state('');

	// Computed properties
	let filteredData = $derived(
		userListData.filter((user) => {
			return (
				(selectedRole === '' || user.role.toLowerCase() === selectedRole) &&
				(selectedPlan === '' || user.plan.toLowerCase() === selectedPlan) &&
				(selectedStatus === '' || user.status.toLowerCase() === selectedStatus) &&
				(searchQuery === '' ||
					user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
					user.email.toLowerCase().includes(searchQuery.toLowerCase()))
			);
		})
	);

	let totalPages = $derived(Math.ceil(filteredData.length / rowsPerPage));
	let paginatedData = $derived(
		filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
	);

	// Reset to first page when filters change
	$effect(() => {
		if (selectedRole || selectedPlan || selectedStatus || searchQuery) {
			currentPage = 1;
		}
	});
</script>

<div class="grid grid-cols-3 gap-4">
	{#each cardData as card, index (index)}
		<Card.Root class="h-fit bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
			<Card.Header>
				<Card.Title>{card.title}</Card.Title>
				<Card.Description>{card.description}</Card.Description>
			</Card.Header>
			<Card.Content class="grid grid-cols-6  gap-2">
				{#each { length: 6 } as _, index (index)}
					<Avatar.Root>
						<Avatar.Image alt="" src="" />
						<Avatar.Fallback>avatar</Avatar.Fallback>
					</Avatar.Root>
				{/each}
			</Card.Content>
			<Card.Footer>
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Edit Role</Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Edit Role</Dialog.Title>
							<Dialog.Description>Set Role permission</Dialog.Description>
						</Dialog.Header>
						<div class="space-y-2">
							<Label for="administrator">{card.title}</Label>
							<Input type="text" />
						</div>
						<h4 class="text-2xl font-medium">Role Permissions</h4>
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Administrator Access</Table.Head>
									<Table.Head class="text-end">Permissions</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each tableData as item, index (index)}
									<Table.Row>
										<Table.Cell>{item.name}</Table.Cell>
										<Table.Cell>
											<div class="flex items-center justify-end gap-2">
												<div class="flex items-center gap-2">
													<Checkbox checked={item.read} />
													Read
												</div>
												<div class="flex items-center gap-2">
													<Checkbox checked={item.write} />
													Write
												</div>
												<div class="flex items-center gap-2">
													<Checkbox checked={item.create} />
													Create
												</div>
											</div>
										</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Dialog.Content>
				</Dialog.Root>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>

<Card.Root class="mt-4 bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="space-y-4">
		<div class="flex gap-4">
			<Select.Root type="single" bind:value={selectedRole}>
				<Select.Trigger class="w-full">Select Role</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Roles</Select.Item>
					<Select.Item value="admin">Admin</Select.Item>
					<Select.Item value="author">Author</Select.Item>
					<Select.Item value="editor">Editor</Select.Item>
					<Select.Item value="maintainer">Maintainer</Select.Item>
					<Select.Item value="subscriber">Subscriber</Select.Item>
				</Select.Content>
			</Select.Root>
			<Select.Root type="single" bind:value={selectedPlan}>
				<Select.Trigger class="w-full">Select Plan</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Plans</Select.Item>
					<Select.Item value="basic">Basic</Select.Item>
					<Select.Item value="company">Company</Select.Item>
					<Select.Item value="enterprise">Enterprise</Select.Item>
					<Select.Item value="team">Team</Select.Item>
				</Select.Content>
			</Select.Root>
			<Select.Root type="single" bind:value={selectedStatus}>
				<Select.Trigger class="w-full">Select Status</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Statuses</Select.Item>
					<Select.Item value="pending">Pending</Select.Item>
					<Select.Item value="active">Active</Select.Item>
					<Select.Item value="inactive">Inactive</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="flex items-center justify-between">
			<Button>
				<UploadIcon />
				Export
			</Button>
			<div class="flex gap-4">
				<Input
					id="search"
					type="search"
					placeholder="Search User"
					autocomplete="username"
					bind:value={searchQuery}
				/>
				<Button>Add New User</Button>
			</div>
		</div>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head><Checkbox name="all-users" /></Table.Head>
					<Table.Head class="w-[100px]">User</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Role</Table.Head>
					<Table.Head>Plan</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Action</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each paginatedData as user (user.id)}
					<Table.Row>
						<Table.Cell><Checkbox name={user.id} /></Table.Cell>
						<Table.Cell>
							<div class="flex items-center gap-2">
								<Avatar.Root>
									<Avatar.Image src="https://placehold.co/32x32/png" alt="avatar" />
									<Avatar.Fallback>{user.username}</Avatar.Fallback>
								</Avatar.Root>
								<span class="font-medium">{user.username}</span>
							</div>
						</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.role}</Table.Cell>
						<Table.Cell>{user.plan}</Table.Cell>
						<Table.Cell>{user.status}</Table.Cell>
						<Table.Cell class="w-32 text-right">
							<Button variant="ghost"><TrashIcon /></Button>
							<Button variant="ghost"><EyeIcon /></Button>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
									<EllipsisVerticalIcon />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item>
										<DownloadIcon /> Download
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<SquarePenIcon /> Edit
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<div class="mt-4 flex items-center justify-end gap-4">
			<div class="flex items-center gap-4">
				Rows per page:
				<Select.Root type="single" bind:value={rowsPerPage} onchange={() => (currentPage = 1)}>
					<Select.Trigger>{rowsPerPage}</Select.Trigger>
					<Select.Content>
						<Select.Item value="10">10</Select.Item>
						<Select.Item value="25">25</Select.Item>
						<Select.Item value="50">50</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
			<div>
				{(currentPage - 1) * rowsPerPage + 1}-{Math.min(
					currentPage * rowsPerPage,
					filteredData.length
				)} of {filteredData.length}
			</div>
			<div>
				<Button
					variant="ghost"
					onclick={() => (currentPage = Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
				>
					<ChevronLeftIcon />
				</Button>
				<Button
					variant="ghost"
					onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
				>
					<ChevronRightIcon />
				</Button>
			</div>
		</div>
	</Card.Content>
</Card.Root>
