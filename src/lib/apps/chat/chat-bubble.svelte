<script lang="ts">
	let { ref = $bindable(null), children, variant, ...rest } = $props();
</script>

<div
	bind:this={ref}
	data-variant={variant}
	class="group/chat-bubble flex max-w-[80%] flex-row place-items-end gap-2 data-[variant='sent']:place-self-end"
	{...rest}
>
	{@render children?.()}
</div>
