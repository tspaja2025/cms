<script lang="ts">
	import { base } from '$app/paths';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import SearchIcon from '@lucide/svelte/icons/search';
	import LanguagesIcon from '@lucide/svelte/icons/languages';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BellIcon from '@lucide/svelte/icons/bell';
	import UserIcon from '@lucide/svelte/icons/user';
	import { toggleMode } from 'mode-watcher';
	import Notifications from '$lib/custom/navigation/notifications.svelte';
</script>

<nav
	class="flex h-16 w-full items-center gap-2 border-b border-(--sidebar-border) bg-(--sidebar) px-4"
>
	<Sidebar.Trigger class="!px-5 {buttonVariants({ variant: 'outline' })}" />
	<Button variant="outline">
		<SearchIcon />
	</Button>
	<div class="flex-1"></div>
	<Button variant="outline" aria-label="language">
		<LanguagesIcon />
	</Button>
	<Button variant="outline" onclick={toggleMode} aria-label="darkMode">
		<SunIcon class="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
		<MoonIcon class="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
		<span class="sr-only">Toggle theme</span>
	</Button>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger aria-label="notifications" class={buttonVariants({ variant: 'outline' })}>
			<BellIcon />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-92">
			<Notifications />
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger aria-label="user" class={buttonVariants({ variant: 'outline' })}>
			<UserIcon />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Item>Profile</DropdownMenu.Item>
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
			<a href={base + '/'}>
				<DropdownMenu.Item>Sign Out</DropdownMenu.Item>
			</a>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</nav>
