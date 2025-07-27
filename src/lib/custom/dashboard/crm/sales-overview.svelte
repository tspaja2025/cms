<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { chart } from '$lib/custom/apexchart/apexchart';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { salesOverviewOptions } from '$lib/custom/dashboard/crm/store/data';
</script>

<Card.Root class="shadow-none">
	<Card.Header class="flex items-center justify-between">
		<Card.Title>Sales Overview</Card.Title>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Refresh</DropdownMenu.Item>
				<DropdownMenu.Item>Share</DropdownMenu.Item>
				<DropdownMenu.Item>Update</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content>
		<div use:chart={salesOverviewOptions}></div>
	</Card.Content>
</Card.Root>
