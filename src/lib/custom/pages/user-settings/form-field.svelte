<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { cn } from '$lib/utils';

	const {
		label,
		id,
		type = 'text',
		class: className
	}: {
		label?: string;
		id?: string;
		type?: string;
		class?: string;
	} = $props();
</script>

<div class={cn('space-y-2', className)}>
	<Label for={id}>{label}</Label>
	<Input {type} {id} />
</div>
