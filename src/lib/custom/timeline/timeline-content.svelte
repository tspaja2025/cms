<script lang="ts">
	const { children } = $props();
</script>

<p class="mb-4 text-base font-normal">{@render children?.()}</p>
