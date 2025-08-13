<script>
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import MonitorIcon from '@lucide/svelte/icons/monitor';
	import UsersIcon from '@lucide/svelte/icons/users';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import RefreshCcwIcon from '@lucide/svelte/icons/refresh-ccw';
	import ShareIcon from '@lucide/svelte/icons/share';
</script>

<Card.Root class="col-span-2 bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>38.5% Growth this month</Card.Description>
		<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl"
			>Transactions</Card.Title
		>
		<Card.Action>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item><RefreshCcwIcon /> Refresh</DropdownMenu.Item>
					<DropdownMenu.Item><ShareIcon /> Share</DropdownMenu.Item>
					<DropdownMenu.Item><PencilIcon /> Edit</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Action>
	</Card.Header>
	<Card.Footer class="flex items-center gap-2 text-sm">
		<div class="flex h-10 w-10 items-center justify-center rounded-md bg-purple-500">
			<ChartPieIcon />
		</div>
		<div class="flex flex-col">
			Sales
			<span class="font-semibold">245k</span>
		</div>
		<div class="flex h-10 w-10 items-center justify-center rounded-md bg-green-500">
			<UsersIcon />
		</div>
		<div class="flex flex-col">
			Sales
			<span class="font-semibold">245k</span>
		</div>
		<div class="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500">
			<MonitorIcon />
		</div>
		<div class="flex flex-col">
			Sales
			<span class="font-semibold">245k</span>
		</div>
	</Card.Footer>
</Card.Root>
