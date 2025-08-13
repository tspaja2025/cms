<script lang="ts">
	const { children } = $props();
</script>

<h3 class="text-lg font-semibold">{@render children?.()}</h3>
