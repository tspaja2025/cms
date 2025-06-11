<script lang="ts">
	import Button from '$lib/dashboard/ui/button/button.svelte';
	import Dropdown from '$lib/dashboard/ui/dropdown/dropdown.svelte';
	import { MenuIcon, SearchIcon, LanguagesIcon, SunIcon, BellIcon, UserIcon } from '@lucide/svelte';
	import { navigation } from '$lib/utils/navigation';
	import Drawer from '$lib/dashboard/ui/drawer/drawer.svelte';

	const { children } = $props();
	let open = $state(true);
</script>

<div class="flex">
	<Drawer bind:open>
		<div class="flex h-16 w-full items-center justify-center">
			<h1 class="text-2xl font-bold">CMS</h1>
		</div>
		<div class="flex h-[calc(100vh-64px)] flex-col overflow-auto p-4">
			{#each navigation as item (item)}
				{#if item.header}
					<h4 class="my-4 text-sm text-neutral-500">{item.name}</h4>
				{:else if item.parent}
					<Dropdown title={item.parent}>
						{#each item.children as child (child.name)}
							<Button href={child.href}>{child.name}</Button>
						{/each}
					</Dropdown>
				{:else}
					<Button class="justify-start" href={item.href}>{item.name}</Button>
				{/if}
			{/each}
		</div>
	</Drawer>
	<div class="flex-1">
		<nav class="flex h-16 w-full items-center px-4">
			<Button class="rounded-full !px-2" onclick={() => (open = !open)}>
				<MenuIcon class="h-5 w-5" />
			</Button>
			<Button class="rounded-full !px-2">
				<SearchIcon class="h-5 w-5" />
			</Button>
			<div class="flex-1"></div>
			<Button class="rounded-full !px-2">
				<LanguagesIcon class="h-5 w-5" />
			</Button>
			<Button class="rounded-full !px-2">
				<SunIcon class="h-5 w-5" />
			</Button>
			<Button class="rounded-full !px-2">
				<BellIcon class="h-5 w-5" />
			</Button>
			<Button class="rounded-full !px-2">
				<UserIcon class="h-5 w-5" />
			</Button>
		</nav>
		<div class="h-[calc(100vh-64px)] bg-neutral-100 p-4">
			{@render children()}
		</div>
	</div>
</div>
