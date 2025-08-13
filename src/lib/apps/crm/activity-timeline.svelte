<script>
	import * as Card from '$lib/components/ui/card/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import RefreshCcwIcon from '@lucide/svelte/icons/refresh-ccw';
	import ShareIcon from '@lucide/svelte/icons/share';
	import Timeline from '$lib/custom/timeline/timeline.svelte';
	import TimelineTime from '$lib/custom/timeline/timeline-time.svelte';
	import TimelineTitle from '$lib/custom/timeline/timeline-title.svelte';
	import TimelineContent from '$lib/custom/timeline/timeline-content.svelte';
	import TimelineItem from '$lib/custom/timeline/timeline-item.svelte';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Activity Timeline</Card.Title>
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
	<Card.Content>
		<Timeline>
			<TimelineItem color="bg-green-500">
				<TimelineTime>August 2025</TimelineTime>
				<TimelineTitle>12 Invoices have been paid</TimelineTitle>
				<TimelineContent>Invoices have been paid to the company</TimelineContent>
			</TimelineItem>
			<TimelineItem color="bg-purple-500">
				<TimelineTime>August 2025</TimelineTime>
				<TimelineTitle>Client Meeting</TimelineTitle>
				<TimelineContent>Project meeting with john @10:15am</TimelineContent>
			</TimelineItem>
			<TimelineItem color="bg-blue-500">
				<TimelineTime>August 2025</TimelineTime>
				<TimelineTitle>Create a new project for client</TimelineTitle>
				<TimelineContent>6 team members in a project</TimelineContent>
			</TimelineItem>
		</Timeline>
	</Card.Content>
</Card.Root>
