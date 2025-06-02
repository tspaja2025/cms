<script lang="ts">
	import type { KanbanCard as KanbanCardType, Tag } from '$lib/components/kanban/types/types';
	import { createEventDispatcher } from 'svelte';

	export let card: KanbanCardType;
	export let isDragging: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('openCard', { cardId: card.id });
	}

	function getTagColorClass(tagColor: Tag['color']): string {
		const colorMap = {
			primary: 'bg-primary-100 text-primary-800',
			secondary: 'bg-secondary-100 text-secondary-800',
			accent: 'bg-accent-100 text-accent-800',
			success: 'bg-success-100 text-success-800',
			warning: 'bg-warning-100 text-warning-800',
			error: 'bg-error-100 text-error-800'
		};

		return colorMap[tagColor] || 'bg-neutral-100 text-neutral-800';
	}

	const formattedDate = new Date(card.updatedAt).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric'
	});
</script>

<div
	class="kanban-card animate-bounce-in"
	class:opacity-70={isDragging}
	class:scale-105={isDragging}
	class:shadow-apple-md={isDragging}
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex="0"
>
	<h3 class="mb-2 text-base font-medium">{card.title}</h3>

	{#if card.description}
		<p class="mb-3 line-clamp-2 text-sm text-neutral-600">
			{card.description}
		</p>
	{/if}

	<div class="mb-2 flex flex-wrap gap-1">
		{#each card.tags as tag, tagIndex (tagIndex)}
			<span class="tag {getTagColorClass(tag.color)}">
				{tag.name}
			</span>
		{/each}
	</div>

	<div class="mt-2 text-xs text-neutral-500">
		Updated: {formattedDate}
	</div>
</div>
