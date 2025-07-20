<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { dndzone } from 'svelte-dnd-action';
	import KanbanCard from '$lib/custom/kanban/kanban-card.svelte';
	import type { KanbanColumn as KanbanColumnType } from '$lib/custom/kanban/types';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';

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

<Card.Root class="flex h-full flex-1 flex-col gap-0 p-0 shadow-none">
	<Card.Header class="flex items-center justify-between px-4 py-2">
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
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
				<EllipsisVerticalIcon />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item onclick={handleAddCard}><PlusIcon /> Add Card</DropdownMenu.Item>
				<DropdownMenu.Item onclick={handleDeleteColumn}
					><TrashIcon /> Delete Column</DropdownMenu.Item
				>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>

	<Card.Content class="flex-1 overflow-y-auto px-4">
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
			<PlusIcon /> Add a card
		</Button>
	</Card.Footer>
</Card.Root>
