<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card/index';
	import { TrendingUpIcon } from '@lucide/svelte';
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Description>Active Users</Card.Description>
		<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl"
			>12,847</Card.Title
		>
		<Card.Action>
			<Badge variant="outline">
				<TrendingUpIcon />
				+4.6%
			</Badge>
		</Card.Action>
	</Card.Header>
	<Card.Footer class="flex-col items-start gap-1.5 text-sm">
		<div class="line-clamp-1 flex gap-2 font-medium">
			Trending up this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground">+4.6% vs last period</div>
	</Card.Footer>
</Card.Root>
