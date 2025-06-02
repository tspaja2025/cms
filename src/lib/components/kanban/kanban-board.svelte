<script lang="ts">
	import { kanbanStore } from '$lib/components/kanban/store/kanban-store';
	import KanbanColumn from '$lib/components/kanban/kanban-column.svelte';
	import CardDetailModal from '$lib/components/kanban/card-detail-modal.svelte';
	import ColumnTitleModal from '$lib/components/kanban/column-title-modal.svelte';
	import ConfirmModal from '$lib/components/kanban/column-title-modal.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import type { KanbanCard } from '$lib/components/kanban/types/types';

	let isDragging = false;
	let activeCardId: string | null = null;
	let activeColumnId: string | null = null;
	let editingColumnId: string | null = null;
	let editingColumnTitle: string = '';
	let deleteColumnId: string | null = null;

	function handleDndConsider(e: CustomEvent) {
		const { columnId, items } = e.detail;
		isDragging = true;

		kanbanStore.update((columns) =>
			columns.map((column) => (column.id === columnId ? { ...column, cards: items } : column))
		);
	}

	function handleDndFinalize(e: CustomEvent) {
		const { columnId, items } = e.detail;
		isDragging = false;

		kanbanStore.update((columns) =>
			columns.map((column) => (column.id === columnId ? { ...column, cards: items } : column))
		);
	}

	function handleAddColumn() {
		editingColumnId = 'new';
		editingColumnTitle = '';
	}

	function handleSaveColumnTitle() {
		if (editingColumnTitle.trim()) {
			if (editingColumnId === 'new') {
				kanbanStore.addColumn(editingColumnTitle);
			} else if (editingColumnId) {
				kanbanStore.updateColumnTitle(editingColumnId, editingColumnTitle);
			}
		}
		editingColumnId = null;
	}

	function handleEditColumnTitle(e: CustomEvent) {
		const { columnId, title } = e.detail;
		editingColumnId = columnId;
		editingColumnTitle = title;
	}

	function handleDeleteColumnClick(e: CustomEvent) {
		deleteColumnId = e.detail.columnId;
	}

	function handleConfirmDeleteColumn() {
		if (deleteColumnId) {
			kanbanStore.deleteColumn(deleteColumnId);
			deleteColumnId = null;
		}
	}

	function handleAddCard(e: CustomEvent) {
		const { columnId } = e.detail;
		activeColumnId = columnId;
		activeCardId = null;
	}

	function handleOpenCard(e: CustomEvent) {
		const { columnId, cardId } = e.detail;
		activeColumnId = columnId;
		activeCardId = cardId;
	}

	function handleSaveCard(e: CustomEvent) {
		const { card } = e.detail;

		if (activeColumnId) {
			if (activeCardId) {
				// Update existing card
				kanbanStore.updateCard(activeColumnId, card as KanbanCard);
			} else {
				// Add new card
				kanbanStore.addCard(activeColumnId, {
					title: card.title,
					description: card.description,
					tags: card.tags
				});
			}

			closeCardDetail();
		}
	}

	function handleDeleteCard() {
		if (activeColumnId && activeCardId) {
			kanbanStore.deleteCard(activeColumnId, activeCardId);
			closeCardDetail();
		}
	}

	function handleMoveCard(e: CustomEvent) {
		const { targetColumnId } = e.detail;

		if (activeColumnId && activeCardId && targetColumnId !== activeColumnId) {
			kanbanStore.moveCard(activeColumnId, targetColumnId, activeCardId);
			activeColumnId = targetColumnId;
		}
	}

	function closeCardDetail() {
		activeCardId = null;
		activeColumnId = null;
	}
</script>

<div class="flex h-full flex-col">
	<header class="shadow-apple-sm z-10 bg-white p-4">
		<div class="container mx-auto flex items-center justify-between">
			<h1 class="text-primary-500 text-2xl font-bold">Kanban Board</h1>
			<button class="btn btn-primary" on:click={handleAddColumn}>+ Add Column</button>
		</div>
	</header>

	<main class="flex-1 overflow-x-auto px-4 py-6">
		<div class="flex min-h-[500px] gap-6 pb-8">
			{#each $kanbanStore as column (column.id)}
				<KanbanColumn
					{column}
					{isDragging}
					on:consider={handleDndConsider}
					on:finalize={handleDndFinalize}
					on:addCard={handleAddCard}
					on:openCard={handleOpenCard}
					on:editColumnTitle={handleEditColumnTitle}
					on:deleteColumn={handleDeleteColumnClick}
				/>
			{/each}

			<div class="flex w-64 flex-shrink-0 items-start">
				<button
					class="rounded-apple w-full bg-neutral-200 px-4 py-3 text-neutral-700 transition-colors
                 hover:bg-neutral-300"
					on:click={handleAddColumn}
				>
					+ Add Column
				</button>
			</div>
		</div>
	</main>
</div>

{#if activeColumnId !== null}
	<CardDetailModal
		cardId={activeCardId}
		columnId={activeColumnId}
		columns={$kanbanStore}
		on:close={closeCardDetail}
		on:save={handleSaveCard}
		on:delete={handleDeleteCard}
		on:move={handleMoveCard}
	/>
{/if}

{#if editingColumnId !== null}
	<ColumnTitleModal
		title={editingColumnTitle}
		isNew={editingColumnId === 'new'}
		on:close={() => (editingColumnId = null)}
		on:save={handleSaveColumnTitle}
	/>
{/if}

{#if deleteColumnId !== null}
	<ConfirmModal
		title="Delete Column"
		message="Are you sure you want to delete this column and all its cards? This action cannot be undone."
		confirmText="Delete"
		cancelText="Cancel"
		isDangerous={true}
		on:confirm={handleConfirmDeleteColumn}
		on:cancel={() => (deleteColumnId = null)}
	/>
{/if}
