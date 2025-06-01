<script lang="ts">
	import Button from '$lib/dashboard/ui/button.svelte';
	import Dropdown from '$lib/dashboard/ui/dropdown.svelte';
	import { MenuIcon, SearchIcon, LanguagesIcon, SunIcon, BellIcon, UserIcon } from '@lucide/svelte';
	import { navigation } from '$lib/utils/navigation';
	import Drawer from '$lib/dashboard/ui/drawer.svelte';

	let { children } = $props();
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
				<MenuIcon />
			</Button>
			<Button class="rounded-full !px-2">
				<SearchIcon />
			</Button>
			<div class="flex-1"></div>
			<Button class="rounded-full !px-2">
				<LanguagesIcon />
			</Button>
			<Button class="rounded-full !px-2">
				<SunIcon />
			</Button>
			<Button class="rounded-full !px-2">
				<BellIcon />
			</Button>
			<Button class="rounded-full !px-2">
				<UserIcon />
			</Button>
		</nav>
		<div class="h-[calc(100vh-64px)] bg-neutral-100 p-4">
			{@render children()}
		</div>
	</div>
</div>
<!-- Create Calendar app using Svelte 5 and tailwind.
1. Sidenav
  1.1 Add event button
  1.2 Mini calendar
  1.3 Event filters
2. header
 2.1 Previous and Next month buttons
 2.2 Current Day and Month
 2.3 Month/Week/Day view
3. body
  3.1 Calendar itself -->
