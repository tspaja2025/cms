<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import Timeline from '$lib/custom/timeline/timeline.svelte';
	import TimelineItem from '$lib/custom/timeline/timeline-item.svelte';
	import TimelineTime from '$lib/custom/timeline/timeline-time.svelte';
	import TimelineTitle from '$lib/custom/timeline/timeline-title.svelte';
	import TimelineContent from '$lib/custom/timeline/timeline-content.svelte';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>Recent Activity</Card.Title>
	</Card.Header>
	<Card.Content>
		<Timeline>
			<TimelineItem color="bg-green-500">
				<TimelineTime>2 minutes ago</TimelineTime>
				<TimelineTitle>New order placed</TimelineTitle>
				<TimelineContent>Invoices have been paid to the company</TimelineContent>
			</TimelineItem>
			<TimelineItem color="bg-purple-500">
				<TimelineTime>5 minutes ago</TimelineTime>
				<TimelineTitle>User registered</TimelineTitle>
				<TimelineContent>Project meeting with john @10:15am</TimelineContent>
			</TimelineItem>
			<TimelineItem color="bg-blue-500">
				<TimelineTime>10 minutes ago</TimelineTime>
				<TimelineTitle>Payment received</TimelineTitle>
				<TimelineContent>6 team members in a project</TimelineContent>
			</TimelineItem>
		</Timeline>
	</Card.Content>
</Card.Root>
