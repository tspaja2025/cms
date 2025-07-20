<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
	import { UserPlus, CheckCircle, FileText, Megaphone } from '@lucide/svelte';
	import { activities } from '$lib/custom/academy/store/data';

	let activityList = [];
	activities.subscribe((value) => {
		activityList = value;
	});

	const getIcon = (type: string) => {
		switch (type) {
			case 'enrollment':
				return UserPlus;
			case 'completion':
				return CheckCircle;
			case 'assignment':
				return FileText;
			case 'announcement':
				return Megaphone;
			default:
				return FileText;
		}
	};

	const getIconColor = (type: string) => {
		switch (type) {
			case 'enrollment':
				return 'text-blue-600 bg-blue-50';
			case 'completion':
				return 'text-green-600 bg-green-50';
			case 'assignment':
				return 'text-orange-600 bg-orange-50';
			case 'announcement':
				return 'text-purple-600 bg-purple-50';
			default:
				return 'text-gray-600 bg-gray-50';
		}
	};

	const formatTime = (timestamp: string) => {
		const date = new Date(timestamp);
		const now = new Date();
		const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

		if (diffInHours < 1) return 'Just now';
		if (diffInHours < 24) return `${diffInHours}h ago`;
		return date.toLocaleDateString();
	};
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Recent Activity</Card.Title>
	</Card.Header>

	<Card.Content class="space-y-4">
		{#each activityList as activity, index (index)}
			<div class="animate-fade-in flex items-start space-x-3">
				<div class="rounded-full p-2 {getIconColor(activity.type)}">
					<svelte:component this={getIcon(activity.type)} class="h-4 w-4" />
				</div>
				<div class="flex-1">
					<h4 class="text-sm font-medium text-gray-900">{activity.title}</h4>
					<p class="mt-1 text-sm text-gray-500">{activity.description}</p>
					<p class="mt-1 text-xs text-gray-400">{formatTime(activity.timestamp)}</p>
				</div>
			</div>
		{/each}
	</Card.Content>

	<Card.Footer>
		<Button variant="secondary">View All Activity</Button>
	</Card.Footer>
</Card.Root>
