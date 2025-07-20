<script lang="ts">
	import { cn } from '$lib/utils';
	import type { KanbanCardType, Tag } from '$lib/custom/kanban/types';
	import { createEventDispatcher } from 'svelte';
	import * as Card from '$lib/components/ui/card/index';
	import { Badge } from '$lib/components/ui/badge/index';

	export let card: KanbanCardType;
	export let isDragging: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('openCard', { cardId: card.id });
	}

	function getTagColorClass(tagColor: Tag['color']): string {
		const colorMap = {
			primary: 'bg-primary/10 text-primary',
			secondary: 'bg-secondary/10 text-secondary',
			accent: 'bg-accent/10 text-accent',
			success: 'bg-success/10 text-success',
			warning: 'bg-warning/10 text-warning',
			error: 'bg-destructive/10 text-destructive'
		};

		return colorMap[tagColor] || 'bg-muted text-muted-foreground';
	}

	const formattedDate = new Date(card.updatedAt).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric'
	});
</script>

<Card.Root
	class={cn(
		'focus-within:ring-ring gap-2 transition-all focus-within:ring-2 hover:shadow-md',
		isDragging && 'scale-105 opacity-70 shadow-lg'
	)}
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex={0}
>
	<Card.Header>
		<Card.Title>{card.title}</Card.Title>
		{#if card.description}
			<Card.Description>
				{card.description}
			</Card.Description>
		{/if}
	</Card.Header>
	<Card.Content class="space-y-2">
		{#if card.tags.length > 0}
			<div class="flex flex-wrap gap-1">
				{#each card.tags as tag, index (index)}
					<Badge class={getTagColorClass(tag.color)}>
						{tag.name}
					</Badge>
				{/each}
			</div>
		{/if}
	</Card.Content>
	<Card.Footer>
		Updated: {formattedDate}
	</Card.Footer>
</Card.Root>
