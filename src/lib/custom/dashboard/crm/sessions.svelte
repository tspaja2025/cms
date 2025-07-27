<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<Card.Root class="shadow-none">
	<Card.Header>
		<Card.Title>Sessions</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col">
		<span class="text-2xl font-medium">24k</span>
		<span class="mb-4 text-red-500">-20%</span>
		<Badge>Last Week</Badge>
	</Card.Content>
</Card.Root>
