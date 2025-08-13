<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card/index';
	import { TrendingDownIcon } from '@lucide/svelte';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>Total Orders</Card.Description>
		<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">1,429</Card.Title
		>
		<Card.Action>
			<Badge variant="outline">
				<TrendingDownIcon />
				-2.1%
			</Badge>
		</Card.Action>
	</Card.Header>
	<Card.Footer class="flex-col items-start gap-1.5 text-sm">
		<div class="line-clamp-1 flex gap-2 font-medium">
			Trending down this month <TrendingDownIcon class="size-4" />
		</div>
		<div class="text-muted-foreground">-2.1% vs last period</div>
	</Card.Footer>
</Card.Root>
