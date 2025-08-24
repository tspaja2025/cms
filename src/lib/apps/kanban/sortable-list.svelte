<script lang="ts">
	import Droppable from '$lib/apps/kanban/droppable.svelte';
	import SortableItem from '$lib/apps/kanban/sortable-item.svelte';
	import {
		DndContext,
		DragOverlay,
		type DragEndEvent,
		type DragOverEvent,
		type DragStartEvent,
		type UniqueIdentifier
	} from '@dnd-kit-svelte/core';
	import { SortableContext, arrayMove } from '@dnd-kit-svelte/sortable';
	import { dropAnimation, sensors } from '$lib/utils';
	import { crossfade } from 'svelte/transition';

	interface Item {
		id: UniqueIdentifier;
		content: string;
		column: string;
		color: string;
	}

	const defaultItems: Item[] = [
		{ id: 'item-1', content: 'A 1', column: 'columnA', color: 'border-l-indigo-500' },
		{ id: 'item-2', content: 'A 2', column: 'columnA', color: 'border-l-indigo-500' },
		{ id: 'item-3', content: 'A 3', column: 'columnA', color: 'border-l-indigo-500' },
		{ id: 'item-4', content: 'B 1', column: 'columnB', color: 'border-l-yellow-500' },
		{ id: 'item-5', content: 'B 2', column: 'columnB', color: 'border-l-yellow-500' },
		{ id: 'item-6', content: 'B 3', column: 'columnB', color: 'border-l-yellow-500' },
		{ id: 'item-7', content: 'C 1', column: 'columnC', color: 'border-l-sky-500' },
		{ id: 'item-8', content: 'C 2', column: 'columnC', color: 'border-l-sky-500' },
		{ id: 'item-9', content: 'C 3', column: 'columnC', color: 'border-l-sky-500' },
		{ id: 'item-10', content: 'D 1', column: 'columnD', color: 'border-l-pink-500' },
		{ id: 'item-11', content: 'D 2', column: 'columnD', color: 'border-l-pink-500' },
		{ id: 'item-12', content: 'D 3', column: 'columnD', color: 'border-l-pink-500' }
	];

	let items = $state<Item[]>(defaultItems);
	let activeId = $state<string | null>(null);

	const activeItem = $derived(items.find((item) => item.id === activeId));
	const columnA = $derived(items.filter((item) => item.column === 'columnA'));
	const columnB = $derived(items.filter((item) => item.column === 'columnB'));
	const columnC = $derived(items.filter((item) => item.column === 'columnC'));
	const columnD = $derived(items.filter((item) => item.column === 'columnD'));

	function handleDragStart(event: DragStartEvent) {
		activeId = event.active.id as string;
	}

	function handleDragEnd({ active, over }: DragEndEvent) {
		if (!over) return;

		const activeItem = items.find((item) => item.id === active.id);
		if (!activeItem) return;

		// Handle moving between columns
		if (
			over.id === 'columnA' ||
			over.id === 'columnB' ||
			over.id === 'columnC' ||
			over.id === 'columnD'
		) {
			items = items.map((item) =>
				item.id === active.id ? { ...item, column: over.id as string } : item
			);
			return;
		}

		const overItem = items.find((item) => item.id === over?.id);
		if (!overItem || activeId === overItem.id) return;

		// Update the column if moving to an item in another column
		items = items.map((item) =>
			item.id === active.id ? { ...item, column: overItem.column } : item
		);

		// Reorder items within the same column
		const columnItems = items.filter((item) => item.column === overItem.column);
		const oldIndex = columnItems.findIndex((item) => item.id === active.id);
		const newIndex = columnItems.findIndex((item) => item.id === over.id);

		if (oldIndex !== -1 && newIndex !== -1) {
			const newOrder = arrayMove(columnItems, oldIndex, newIndex);
			items = items.map((item) =>
				item.column === overItem.column ? newOrder.find((i) => i.id === item.id) || item : item
			);
		}

		activeId = null;
	}

	function handleDragOver({ active, over }: DragOverEvent) {
		if (!over) return;

		const activeItem = items.find((item) => item.id === active.id);
		if (!activeItem) return;

		// Handle container drag-over
		if (
			over.id === 'columnA' ||
			over.id === 'columnB' ||
			over.id === 'columnC' ||
			over.id === 'columnD'
		) {
			items = items.map((item) =>
				item.id === active.id ? { ...item, column: over.id as string } : item
			);
			return;
		}

		// Handle item drag-over
		const overItem = items.find((item) => item.id === over.id);
		if (!overItem) return;

		// Update the active item's column to match the item it's being dragged over
		items = items.map((item) =>
			item.id === active.id ? { ...item, column: overItem.column } : item
		);
	}

	const [send, recieve] = crossfade({ duration: 100 });
</script>

<DndContext
	{sensors}
	onDragStart={handleDragStart}
	onDragEnd={handleDragEnd}
	onDragOver={handleDragOver}
>
	<div class="grid gap-4 md:grid-cols-4">
		{@render taskList('columnA', 'Column A', columnA)}
		{@render taskList('columnB', 'Column B', columnB)}
		{@render taskList('columnC', 'Column C', columnC)}
		{@render taskList('columnD', 'Column D', columnD)}
	</div>

	<DragOverlay {dropAnimation}>
		{#if activeItem && activeId}
			<SortableItem item={activeItem} />
		{/if}
	</DragOverlay>
</DndContext>

{#snippet taskList(id: string, title: string, items: Item[])}
	<SortableContext {items}>
		<Droppable class="h-fit rounded-md border p-4" {id}>
			<p class="fw-bold pb-3 text-lg">{title}</p>

			<div class="grid gap-2">
				{#each items as item (item.id)}
					<div class="" in:recieve={{ key: item.id }} out:send={{ key: item.id }}>
						<SortableItem {item} />
					</div>
				{/each}
			</div>
		</Droppable>
	</SortableContext>
{/snippet}
