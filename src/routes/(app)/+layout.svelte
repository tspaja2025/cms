<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner/index';

	const { children } = $props();
</script>

<svelte:head>
	<title>CMS | Login</title>
	<meta name="description" content="CMS" />
</svelte:head>

<Toaster />
{@render children?.()}
