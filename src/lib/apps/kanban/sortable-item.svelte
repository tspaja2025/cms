<script lang="ts">
	import type { UniqueIdentifier } from '@dnd-kit-svelte/core';
	import { CSS, styleObjectToString } from '@dnd-kit-svelte/utilities';
	import { useSortable } from '@dnd-kit-svelte/sortable';

	interface Task {
		id: UniqueIdentifier;
		content: string;
	}

	let { task }: { task: Task } = $props();

	const { attributes, listeners, node, transform, transition, isDragging, isSorting } = useSortable(
		{
			id: task.id
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
	class="relative overflow-hidden rounded-md border select-none"
	bind:this={node.current}
	{style}
	{...listeners.current}
	{...attributes.current}
>
	<!-- Original element - becomes invisible during drag but maintains dimensions -->
	<div
		class={[
			'rd-18px bg-gradient-to-t from-primary/5 to-card p-4 shadow-xs dark:bg-card',
			{ invisible: isDragging.current }
		]}
	>
		{task.content}
	</div>
</div>
