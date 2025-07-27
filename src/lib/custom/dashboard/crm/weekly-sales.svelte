<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { chart } from '$lib/custom/apexchart/apexchart';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { weeklySalesOptions } from '$lib/custom/dashboard/crm/store/data';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<div>
			<Card.Title>Weekly Sales</Card.Title>
			<Card.Description>Total 100k Sales</Card.Description>
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Last 28 Days</DropdownMenu.Item>
				<DropdownMenu.Item>Last Month</DropdownMenu.Item>
				<DropdownMenu.Item>Last year</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content>
		<div use:chart={weeklySalesOptions}></div>
	</Card.Content>
</Card.Root>
