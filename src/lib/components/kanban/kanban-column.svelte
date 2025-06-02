<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import { createEventDispatcher } from 'svelte';
	import KanbanCard from '$lib/components/kanban/kanban-card.svelte';
	import type { KanbanColumn as KanbanColumnType } from '$lib/components/kanban/types/types';

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

<div class="kanban-column animate-slide-up">
	<div class="mb-4 flex items-center justify-between">
		<h2
			class="hover:text-primary-600 cursor-pointer text-lg font-semibold transition-colors"
			on:click={handleColumnTitleClick}
			on:keydown={(e) => e.key === 'Enter' && handleColumnTitleClick()}
			role="button"
			tabindex="0"
			{...$$restProps}
		>
			{column.title}
		</h2>
		<div class="flex gap-2">
			<button
				class="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 transition-colors hover:bg-neutral-300"
				on:click={handleAddCard}
				aria-label="Add card"
			>
				<span class="text-neutral-700">+</span>
			</button>
			<button
				class="hover:bg-error-500 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 transition-colors hover:text-white"
				on:click={handleDeleteColumn}
				aria-label="Delete column"
			>
				<span>×</span>
			</button>
		</div>
	</div>

	<div
		class="flex-1 overflow-y-auto"
		use:dndzone={{ items: column.cards, type: 'card', dropFromOthersDisabled: isDragging }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#if column.cards.length > 0}
			{#each column.cards as card (card.id)}
				<KanbanCard {card} {isDragging} on:openCard={handleOpenCard} />
			{/each}
		{:else}
			<div
				class="flex h-20 items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 text-sm text-neutral-500"
			>
				No cards yet
			</div>
		{/if}
	</div>

	<button
		class="hover:text-primary-600 mt-4 w-full rounded-lg py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-200"
		on:click={handleAddCard}
	>
		+ Add a card
	</button>
</div>
