<script>
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
	import TrendingDownIcon from '@lucide/svelte/icons/trending-down';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>Sessions</Card.Description>
		<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">24k</Card.Title>
		<Card.Action>
			<Badge variant="outline">
				<TrendingDownIcon />
				-20%
			</Badge>
		</Card.Action>
	</Card.Header>
	<Card.Footer class="flex-col items-start gap-1.5 text-sm">
		<div class="line-clamp-1 flex gap-2 font-medium">
			Trending up this month <TrendingDownIcon class="size-4" />
		</div>
	</Card.Footer>
</Card.Root>
