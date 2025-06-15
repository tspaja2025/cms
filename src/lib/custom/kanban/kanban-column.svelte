<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { dndzone } from 'svelte-dnd-action';
	import KanbanCard from '$lib/custom/kanban/kanban-card.svelte';
	import type { KanbanColumn as KanbanColumnType } from '$lib/custom/kanban/types/types';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	export let column: KanbanColumnType;
	export let isDragging: boolean = false;

	const dispatch = createEventDispatcher();

	function handleConsider(e: CustomEvent) {
		dispatch('consider', {
			columnId: column.id,
			items: e.detail.items
		});
	}

	function handleFinalize(e: CustomEvent) {
		dispatch('finalize', {
			columnId: column.id,
			items: e.detail.items
		});
	}

	function handleAddCard() {
		dispatch('addCard', { columnId: column.id });
	}

	function handleOpenCard(e: CustomEvent) {
		dispatch('openCard', {
			columnId: column.id,
			cardId: e.detail.cardId
		});
	}

	function handleColumnTitleClick() {
		dispatch('editColumnTitle', { columnId: column.id, title: column.title });
	}

	function handleDeleteColumn() {
		dispatch('deleteColumn', { columnId: column.id });
	}
</script>

<Card.Root class="kanban-column animate-slide-up flex h-full flex-col">
	<Card.Header class="pb-2">
		<div class="flex items-center justify-between">
			<Button
				variant="ghost"
				class="hover:text-primary h-auto p-0 text-lg font-semibold hover:bg-transparent"
				onclick={handleColumnTitleClick}
				onkeydown={(e) => e.key === 'Enter' && handleColumnTitleClick()}
				role="button"
				tabindex={0}
				{...$$restProps}
			>
				{column.title}
			</Button>
			<div class="flex gap-2">
				<Button
					variant="ghost"
					size="icon"
					class="h-7 w-7"
					onclick={handleAddCard}
					aria-label="Add card"
				>
					<span class="text-lg">+</span>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					class="hover:bg-destructive hover:text-destructive-foreground h-7 w-7"
					onclick={handleDeleteColumn}
					aria-label="Delete column"
				>
					<span class="text-lg">×</span>
				</Button>
			</div>
		</div>
	</Card.Header>

	<Card.Content class="flex-1 overflow-y-auto p-4">
		<div
			use:dndzone={{ items: column.cards, type: 'card', dropFromOthersDisabled: isDragging }}
			on:consider={handleConsider}
			on:finalize={handleFinalize}
			class="space-y-2"
		>
			{#if column.cards.length > 0}
				{#each column.cards as card (card.id)}
					<KanbanCard {card} {isDragging} on:openCard={handleOpenCard} />
				{/each}
			{:else}
				<div
					class="border-muted-foreground/30 text-muted-foreground flex h-20 items-center justify-center rounded-lg border-2 border-dashed text-sm"
				>
					No cards yet
				</div>
			{/if}
		</div>
	</Card.Content>

	<Card.Footer class="p-2">
		<Button
			variant="ghost"
			class="hover:bg-muted/50 hover:text-primary w-full"
			onclick={handleAddCard}
		>
			+ Add a card
		</Button>
	</Card.Footer>
</Card.Root>
