<script lang="ts">
	import type { UniqueIdentifier } from '@dnd-kit-svelte/core';
	import { CSS, styleObjectToString } from '@dnd-kit-svelte/utilities';
	import { useSortable } from '@dnd-kit-svelte/sortable';
	import * as Card from '$lib/components/ui/card';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';

	interface Item {
		id: UniqueIdentifier;
		content: string;
		color: string;
	}

	let { item }: { item: Item } = $props();

	const { attributes, listeners, node, transform, transition, isDragging, isSorting } = useSortable(
		{
			id: item.id
		}
	);

	const style = $derived(
		styleObjectToString({
			transform: CSS.Transform.toString(transform.current),
			transition: isSorting.current ? transition.current : undefined,
			zIndex: isDragging.current ? 1 : undefined
		})
	);
</script>

<div
	class="relative select-none"
	bind:this={node.current}
	{style}
	{...listeners.current}
	{...attributes.current}
>
	<Card.Root class={['rounded-sm border-l-4 p-4', item.color, { invisible: isDragging.current }]}>
		<Card.Content class="flex items-center justify-between px-0">
			{item.content}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<EllipsisVerticalIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<!-- <DropdownMenu.Item><PencilIcon />Edit</DropdownMenu.Item> -->
					<Sheet.Root>
						<Sheet.Trigger class="w-full justify-start {buttonVariants({ variant: 'ghost' })}">
							<PencilIcon />Edit
						</Sheet.Trigger>
						<Sheet.Content>
							<Sheet.Header>
								<Sheet.Title>Edit</Sheet.Title>
							</Sheet.Header>
						</Sheet.Content>
					</Sheet.Root>
					<DropdownMenu.Item><TrashIcon /> Delete</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Card.Content>
	</Card.Root>
</div>
