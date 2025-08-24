<script lang="ts">
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
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Badge } from '$lib/components/ui/badge';
	import { PlusIcon } from '@lucide/svelte';
	import { userListData } from '$lib/store';
	import RolesCard from '$lib/pages/roles-permissions/roles-card.svelte';

	// Pagination state
	let currentPage = $state(1);
	let rowsPerPage = $state('10'); // Changed to string to match Select value

	// Filter state
	let selectedRole = $state('');
	let selectedPlan = $state('');
	let selectedStatus = $state('');
	let searchQuery = $state('');

	// Selection state
	let selectedUsers = $state(new Set());
	let selectAll = $state(false);

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

	let totalPages = $derived(Math.ceil(filteredData.length / parseInt(rowsPerPage)));
	let paginatedData = $derived(
		filteredData.slice(
			(currentPage - 1) * parseInt(rowsPerPage),
			currentPage * parseInt(rowsPerPage)
		)
	);

	// Reset to first page when filters change
	$effect(() => {
		if (selectedRole || selectedPlan || selectedStatus || searchQuery) {
			currentPage = 1;
		}
	});

	// Update selectAll state based on current selection
	$effect(() => {
		if (paginatedData.length > 0) {
			selectAll = paginatedData.every((user) => selectedUsers.has(user.id));
		} else {
			selectAll = false;
		}
	});

	// Functions
	function toggleSelectAll() {
		if (selectAll) {
			paginatedData.forEach((user) => selectedUsers.add(user.id));
		} else {
			paginatedData.forEach((user) => selectedUsers.delete(user.id));
		}
	}

	function exportData() {
		// In a real app, this would create a downloadable file
		const dataToExport =
			selectedUsers.size > 0
				? userListData.filter((user) => selectedUsers.has(user.id))
				: filteredData;

		console.log('Exporting data:', dataToExport);
		// Actual export implementation would go here
	}

	function deleteSelectedUsers() {
		// In a real app, this would make an API call
		if (selectedUsers.size > 0) {
			console.log('Deleting users with IDs:', Array.from(selectedUsers));
			// Update userListData by filtering out selected users
		} else {
			console.log('No users selected for deletion');
		}
	}

	// Generate avatar initials
	function getInitials(name: string) {
		return name
			.split(' ')
			.map((part) => part[0])
			.join('')
			.toUpperCase();
	}

	// Status badge variants
	function getStatusVariant(status: string) {
		switch (status.toLowerCase()) {
			case 'active':
				return 'default';
			case 'pending':
				return 'secondary';
			case 'inactive':
				return 'destructive';
			default:
				return 'outline';
		}
	}
</script>

<RolesCard />

<Card.Root class="mt-6 bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header class="space-y-4">
		<div class="flex flex-col gap-4 sm:flex-row">
			<Select.Root
				type="single"
				value={selectedRole}
				onValueChange={(value) => (selectedRole = value.detail)}
			>
				<Select.Trigger class="w-full sm:w-auto">Select Role</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Roles</Select.Item>
					<Select.Item value="admin">Admin</Select.Item>
					<Select.Item value="author">Author</Select.Item>
					<Select.Item value="editor">Editor</Select.Item>
					<Select.Item value="maintainer">Maintainer</Select.Item>
					<Select.Item value="subscriber">Subscriber</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root
				type="single"
				value={selectedPlan}
				onValueChange={(value) => (selectedPlan = value.detail)}
			>
				<Select.Trigger class="w-full sm:w-auto">Select Plan</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Plans</Select.Item>
					<Select.Item value="basic">Basic</Select.Item>
					<Select.Item value="company">Company</Select.Item>
					<Select.Item value="enterprise">Enterprise</Select.Item>
					<Select.Item value="team">Team</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root
				type="single"
				value={selectedStatus}
				onValueChange={(value) => (selectedStatus = value.detail)}
			>
				<Select.Trigger class="w-full sm:w-auto">Select Status</Select.Trigger>
				<Select.Content>
					<Select.Item value="">All Statuses</Select.Item>
					<Select.Item value="pending">Pending</Select.Item>
					<Select.Item value="active">Active</Select.Item>
					<Select.Item value="inactive">Inactive</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
			<div class="flex gap-2">
				<Button variant="outline" size="sm" onclick={exportData}>
					<DownloadIcon size={16} class="mr-2" />
					Export
				</Button>
				{#if selectedUsers.size > 0}
					<Button variant="destructive" size="sm" onclick={deleteSelectedUsers}>
						<TrashIcon size={16} class="mr-2" />
						Delete Selected ({selectedUsers.size})
					</Button>
				{/if}
			</div>

			<div class="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
				<div class="relative w-full sm:w-64">
					<SearchIcon class="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
					<Input
						id="search"
						type="search"
						placeholder="Search users..."
						autocomplete="off"
						bind:value={searchQuery}
						class="w-full pl-8"
					/>
				</div>
				<Button size="sm">
					<PlusIcon size={16} class="mr-2" />
					Add User
				</Button>
			</div>
		</div>
	</Card.Header>

	<Card.Content>
		<div class="rounded-md border">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-12">
							<Checkbox
								checked={selectAll}
								onchange={() => {
									selectAll = !selectAll;
									toggleSelectAll();
								}}
								aria-label="Select all users"
							/>
						</Table.Head>
						<Table.Head>User</Table.Head>
						<Table.Head>Email</Table.Head>
						<Table.Head>Role</Table.Head>
						<Table.Head>Plan</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head class="text-right">Actions</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#if paginatedData.length === 0}
						<Table.Row>
							<Table.Cell colspan={7} class="h-24 text-center">No users found.</Table.Cell>
						</Table.Row>
					{:else}
						{#each paginatedData as user (user.id)}
							<Table.Row class={selectedUsers.has(user.id) ? 'bg-muted/50' : ''}>
								<Table.Cell>
									<Checkbox
										checked={selectedUsers.has(user.id)}
										onchange={() => {
											if (selectedUsers.has(user.id)) {
												selectedUsers.delete(user.id);
											} else {
												selectedUsers.add(user.id);
											}
										}}
										aria-label={`Select ${user.username}`}
									/>
								</Table.Cell>
								<Table.Cell>
									<div class="flex items-center gap-3">
										<Avatar.Root class="h-9 w-9">
											<Avatar.Image
												src={`https://i.pravatar.cc/40?u=${user.id}`}
												alt={user.username}
											/>
											<Avatar.Fallback class="text-xs">{getInitials(user.username)}</Avatar.Fallback
											>
										</Avatar.Root>
										<div>
											<div class="font-medium">{user.username}</div>
											<div class="hidden text-sm text-muted-foreground md:inline">
												ID: {user.id}
											</div>
										</div>
									</div>
								</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
								<Table.Cell>
									<Badge variant="outline" class="capitalize">
										{user.role.toLowerCase()}
									</Badge>
								</Table.Cell>
								<Table.Cell class="capitalize">{user.plan.toLowerCase()}</Table.Cell>
								<Table.Cell>
									<Badge variant={getStatusVariant(user.status)} class="capitalize">
										{user.status.toLowerCase()}
									</Badge>
								</Table.Cell>
								<Table.Cell>
									<div class="flex justify-end gap-1">
										<Dialog.Root>
											<Dialog.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
												<Button variant="ghost" size="icon">
													<EyeIcon size={16} />
												</Button>
											</Dialog.Trigger>
											<Dialog.Content class="sm:max-w-[600px]">
												<Dialog.Header>
													<Dialog.Title>User Details</Dialog.Title>
													<Dialog.Description>
														View details for {user.username}
													</Dialog.Description>
												</Dialog.Header>
												<div class="grid gap-4 py-4">
													<!-- User detail view would go here -->
												</div>
											</Dialog.Content>
										</Dialog.Root>

										<Button variant="ghost" size="icon">
											<SquarePenIcon size={16} />
										</Button>

										<DropdownMenu.Root>
											<DropdownMenu.Trigger
												class={buttonVariants({ variant: 'ghost', size: 'icon' })}
											>
												<EllipsisVerticalIcon size={16} />
											</DropdownMenu.Trigger>
											<DropdownMenu.Content align="end">
												<DropdownMenu.Item>
													<DownloadIcon size={16} class="mr-2" />
													Download
												</DropdownMenu.Item>
												<DropdownMenu.Item>
													<SquarePenIcon size={16} class="mr-2" />
													Edit
												</DropdownMenu.Item>
												<DropdownMenu.Separator />
												<DropdownMenu.Item class="text-destructive">
													<TrashIcon size={16} class="mr-2" />
													Delete
												</DropdownMenu.Item>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</div>
								</Table.Cell>
							</Table.Row>
						{/each}
					{/if}
				</Table.Body>
			</Table.Root>
		</div>

		<div class="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
			<div class="text-sm text-muted-foreground">
				{selectedUsers.size > 0
					? `${selectedUsers.size} of ${filteredData.length} user(s) selected.`
					: `Total: ${filteredData.length} user(s)`}
			</div>

			<div class="flex flex-col items-center gap-4 sm:flex-row">
				<div class="flex items-center gap-2">
					<Label for="rows-per-page" class="text-sm whitespace-nowrap">Rows per page:</Label>
					<Select.Root
						type="single"
						value={rowsPerPage}
						onValueChange={(e) => {
							rowsPerPage = e.detail;
							currentPage = 1;
						}}
					>
						<Select.Trigger id="rows-per-page" class="w-20">
							{rowsPerPage}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="10">10</Select.Item>
							<Select.Item value="25">25</Select.Item>
							<Select.Item value="50">50</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>

				<div class="flex items-center gap-2 text-sm">
					<span>
						Page {currentPage} of {totalPages}
					</span>
					<div class="flex gap-1">
						<Button
							variant="outline"
							size="icon"
							onclick={() => (currentPage = Math.max(1, currentPage - 1))}
							disabled={currentPage === 1}
							class="h-8 w-8"
						>
							<ChevronLeftIcon size={16} />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
							disabled={currentPage === totalPages || totalPages === 0}
							class="h-8 w-8"
						>
							<ChevronRightIcon size={16} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</Card.Content>
</Card.Root>
