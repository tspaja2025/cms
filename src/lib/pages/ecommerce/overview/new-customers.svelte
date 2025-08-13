<script>
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card/index';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>New Customers</Card.Description>
		<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">245</Card.Title>
		<Card.Action>
			<Badge variant="outline">
				<TrendingUpIcon />
				+5.1%
			</Badge>
		</Card.Action>
	</Card.Header>
	<Card.Footer class="flex-col items-start gap-1.5 text-sm">
		<div class="line-clamp-1 flex gap-2 font-medium">
			Trending up this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground">+5.1% vs last month</div>
	</Card.Footer>
</Card.Root>
