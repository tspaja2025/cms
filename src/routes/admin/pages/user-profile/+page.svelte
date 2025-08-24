<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import MoreVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { tabs, user } from '$lib/store';
	import Connections from '$lib/pages/pages/user-profile/connections.svelte';
	import Projects from '$lib/pages/pages/user-profile/projects.svelte';
	import Teams from '$lib/pages/pages/user-profile/teams.svelte';
	import Profile from '$lib/pages/pages/user-profile/profile.svelte';

	let activeTab = 'Profile';
</script>

<svelte:head>
	<title>CMS | Admin | User profile</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Card.Root
			class="relative mb-4 bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
		>
			<Card.Header class="flex items-center">
				<Avatar.Root class="h-24 w-24 border-4 border-white object-cover shadow-lg">
					<Avatar.Image src={user.avatar} alt={user.name} />
				</Avatar.Root>
				<div>
					<Card.Title class="text-3xl">{user.name}</Card.Title>
					<Card.Description class="inline-flex items-center gap-2"
						>{user.role} - <MapPinIcon /> {user.location}</Card.Description
					>
				</div>
				<div class="absolute top-4 right-4">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'sm' })}>
							<MoreVerticalIcon class="h-4 w-4" />
							<span class="sr-only">Menu</span>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item onSelect={() => console.log('Edit profile')}>
								Edit Profile
							</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => console.log('Share')}>Share</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</Card.Header>
		</Card.Root>

		<!-- Tabs -->
		<Tabs.Root value={activeTab}>
			<Tabs.List>
				{#each tabs as tab, tabIndex (tabIndex)}
					<Tabs.Trigger value={tab.label}>
						<span class="mr-2"><tab.icon /></span>
						{tab.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
			<Tabs.Content value="Profile">
				<Profile />
			</Tabs.Content>
			<Tabs.Content value="Teams">
				<Teams />
			</Tabs.Content>
			<Tabs.Content value="Projects">
				<Projects />
			</Tabs.Content>
			<Tabs.Content value="Connections">
				<Connections />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
