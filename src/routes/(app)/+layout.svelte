<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner/index';

	const { children } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<Toaster />
	{@render children()}
</div>
