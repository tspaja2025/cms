<script lang="ts">
	import { base } from '$app/paths';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import SearchIcon from '@lucide/svelte/icons/search';
	import LanguagesIcon from '@lucide/svelte/icons/languages';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BellIcon from '@lucide/svelte/icons/bell';
	import UserIcon from '@lucide/svelte/icons/user';
	import MailCheckIcon from '@lucide/svelte/icons/mail-check';
	import { toggleMode } from 'mode-watcher';
	import AppSidebar from '$lib/custom/navigation/app-sidebar.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>Admin Dashboard</title>
	<meta name="description" content="Admin Page" />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex-1">
		<nav
			class="flex h-16 w-full items-center gap-2 border-b border-(--sidebar-border) bg-(--sidebar) px-4"
		>
			<Sidebar.Trigger class="!px-5 {buttonVariants({ variant: 'outline' })}" />
			<Dialog.Root>
				<Dialog.Trigger aria-label="search" class={buttonVariants({ variant: 'outline' })}>
					<SearchIcon class="h-5 w-5" />
				</Dialog.Trigger>
				<Dialog.Content class="sm:max-w-[512px]">
					<Dialog.Header class="flex flex-row items-center">
						<Dialog.Title>Search</Dialog.Title>
						<Input class="w-96" type="search" />
					</Dialog.Header>
					<div class="grid grid-cols-2 gap-4 py-4">
						<div>
							<h5 class="font-medium">Popular Searches</h5>
							<ul>
								<li><a href={base + '/admin'}>Analytics</a></li>
								<li><a href={base + '/admin'}>CRM</a></li>
								<li><a href={base + '/admin'}>eCommerce</a></li>
								<li><a href={base + '/admin'}>User List</a></li>
							</ul>
						</div>
						<div>
							<h5 class="font-medium">Apps</h5>
							<ul>
								<li><a href={base + '/admin'}>Calendar</a></li>
								<li><a href={base + '/admin'}>Invoice List</a></li>
								<li><a href={base + '/admin'}>Roles & Permissions</a></li>
							</ul>
						</div>
						<div>
							<h5 class="font-medium">Pages</h5>
							<ul>
								<li><a href={base + '/admin'}>User Profile</a></li>
								<li><a href={base + '/admin'}>Account Settings</a></li>
								<li><a href={base + '/admin'}>Pricing</a></li>
								<li><a href={base + '/admin'}>FAQ</a></li>
							</ul>
						</div>
						<div>
							<h5 class="font-medium">Forms & Charts</h5>
							<ul>
								<li><a href={base + '/admin'}>Forms</a></li>
								<li><a href={base + '/admin'}>Apex Charts</a></li>
								<li><a href={base + '/admin'}>Pricing</a></li>
								<li><a href={base + '/admin'}>FAQ</a></li>
							</ul>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Root>
			<div class="flex-1"></div>
			<Button variant="outline" aria-label="language">
				<LanguagesIcon class="h-5 w-5" />
			</Button>
			<Button variant="outline" onclick={toggleMode} aria-label="darkMode">
				<SunIcon class="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<MoonIcon
					class="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					aria-label="notifications"
					class={buttonVariants({ variant: 'outline' })}
				>
					<BellIcon class="h-5 w-5" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-92">
					<div class="flex items-center justify-between border-b px-4 py-2">
						<h5 class="font-medium">Notifications</h5>
						<div class="flex items-center gap-2">
							<Badge>2 New</Badge>
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
										<MailCheckIcon class="h-5 w-5" />
									</Tooltip.Trigger>
									<Tooltip.Content>Mark all as read</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						</div>
					</div>
					<div class="flex gap-4 border-b p-4">
						<Avatar.Root>
							<Avatar.Image src="" alt="" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h5 class="font-medium">Congratulations</h5>
							<p class="text-xs">Won something</p>
							<p class="text-xs text-neutral-500">1h ago</p>
						</div>
					</div>
					<div class="flex gap-4 border-b p-4">
						<Avatar.Root>
							<Avatar.Image src="" alt="" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h5 class="font-medium">Congratulations</h5>
							<p class="text-xs">Won something</p>
							<p class="text-xs text-neutral-500">1h ago</p>
						</div>
					</div>
					<div class="flex gap-4 border-b p-4">
						<Avatar.Root>
							<Avatar.Image src="" alt="" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h5 class="font-medium">Congratulations</h5>
							<p class="text-xs">Won something</p>
							<p class="text-xs text-neutral-500">1h ago</p>
						</div>
					</div>
					<div class="flex gap-4 border-b p-4">
						<Avatar.Root>
							<Avatar.Image src="" alt="" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h5 class="font-medium">Congratulations</h5>
							<p class="text-xs">Won something</p>
							<p class="text-xs text-neutral-500">1h ago</p>
						</div>
					</div>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger aria-label="user" class={buttonVariants({ variant: 'outline' })}>
					<UserIcon class="h-5 w-5" />
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
		<div class="h-[calc(100vh-64px)] p-4">
			{@render children()}
		</div>
	</div>
</Sidebar.Provider>
