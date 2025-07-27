<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<Card.Root class="shadow-none">
	<Card.Header>
		<Card.Title>Ratings</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col">
		<span class="text-2xl font-medium">13k</span>
		<span class="mb-4 text-green-500">+15%</span>
		<Badge>Year of 2025</Badge>
	</Card.Content>
</Card.Root>
