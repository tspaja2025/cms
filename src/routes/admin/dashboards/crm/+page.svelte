<script>
	import * as Card from '$lib/components/ui/card';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { EllipsisVerticalIcon } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card.Root>
			<Card.Header>Ratings</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-3">
		<Card.Root>
			<Card.Header>Sessions</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-6">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Transactions
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-3">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Total Sales
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-3">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Revenue Report
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-6">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Sales Overview
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
</div>
<div class="mb-4 grid grid-cols-12 gap-4">
	<div class="col-span-6">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Activity Timeline
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-4">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Weekly Sales
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-2">
		<Card.Root>
			<Card.Header>Sales Overview</Card.Header>
		</Card.Root>
	</div>
</div>
<div class="grid grid-cols-12 gap-4">
	<div class="col-span-4">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Upgrade Plan
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-4">
		<Card.Root>
			<Card.Header class="flex justify-between">
				Meeting Schedule
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<EllipsisVerticalIcon class="h-5 w-5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="flex flex-col">
						<DropdownMenu.Item>Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Item 3</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Card.Header>
		</Card.Root>
	</div>
	<div class="col-span-4">
		<Card.Root>
			<Card.Header>Overview</Card.Header>
		</Card.Root>
	</div>
</div>
