<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import UsersIcon from '@lucide/svelte/icons/users';
	import LaptopIcon from '@lucide/svelte/icons/laptop';
	import { buttonVariants } from '$lib/components/ui/button/index';
</script>

<Card.Root class="col-span-2 shadow-none">
	<Card.Header class="flex items-center justify-between">
		<div>
			<Card.Title>Transactions</Card.Title>
			<Card.Description>38.5% Growth this month</Card.Description>
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger aria-label="transaction settings" class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Refresh</DropdownMenu.Item>
				<DropdownMenu.Item>Share</DropdownMenu.Item>
				<DropdownMenu.Item>Update</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content class="flex gap-4">
		<div class="flex items-center gap-2">
			<div class="rounded-md bg-purple-500 p-2 shadow">
				<ChartPieIcon class="text-white" />
			</div>
			<div class="flex flex-col">
				Sales
				<span class="font-medium">245K</span>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-md bg-purple-500 p-2 shadow">
				<UsersIcon class="text-white" />
			</div>
			<div class="flex flex-col">
				Sales
				<span class="font-medium">245K</span>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="rounded-md bg-purple-500 p-2 shadow">
				<LaptopIcon class="text-white" />
			</div>
			<div class="flex flex-col">
				Sales
				<span class="font-medium">245K</span>
			</div>
		</div>
	</Card.Content>
</Card.Root>
