<script lang="ts">
	import { cn } from "$lib/utils";
	import Loading from "./loading.svelte";

	let { ref = $bindable(null), children, typing = false, class: className, ...rest } = $props();
</script>

<div
	bind:this={ref}
	class={cn("bg-secondary group-data-[variant='sent']/chat-bubble:bg-primary group-data-[variant='sent']/chat-bubble:text-primary-foreground order-2 rounded-lg p-4 text-sm group-data-[variant='received']/chat-bubble:rounded-bl-none group-data-[variant='sent']/chat-bubble:order-1 group-data-[variant='sent']/chat-bubble:rounded-br-none", className)}
	{...rest}
>
{#if typing}
    <div class="flex size-full place-items-center justify-center">
        <Loading/>
    </div>
    {:else}

	{@render children?.()}
{/if}
</div>
