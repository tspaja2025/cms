<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';

    const { label, id, type = "text" } = $props();
</script>

<div class="space-y-2">
    <Label for={id}>{label}</Label>
    <Input {type} {id} />
</div>