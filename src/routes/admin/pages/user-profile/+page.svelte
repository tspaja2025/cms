<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import MoreVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import { tabs, user, teams, projects, connections } from '$lib/store';

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
				<Card.Root
					class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
				>
					<Card.Header>
						<Card.Title>Personal Information</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<!-- Personal Information -->
							<div class="space-y-6">
								<div class="space-y-4">
									<div class="flex items-center gap-3">
										<span class="w-5 text-gray-400">✉️</span>
										<span>{user.email}</span>
									</div>
									<div class="flex items-center gap-3">
										<span class="w-5 text-gray-400">📞</span>
										<span>{user.phone}</span>
									</div>
									<div class="flex items-center gap-3">
										<span class="w-5 text-gray-400">🏢</span>
										<span>{user.company}</span>
									</div>
								</div>
							</div>

							<!-- Bio -->
							<div class="space-y-6">
								<h3 class="mb-4 text-lg font-semibold">About</h3>
								<p class="leading-relaxed text-gray-600">{user.bio}</p>
							</div>
						</div>

						<!-- Skills & Expertise -->
						<div class="mt-8 border-t border-gray-200 pt-8">
							<h3 class="mb-4 text-lg font-semibold">Skills & Expertise</h3>
							<div class="flex flex-wrap gap-2">
								{#each ['UI/UX Design', 'Product Strategy', 'User Research', 'Prototyping', 'Design Systems', 'Figma', 'Sketch', 'Adobe Creative Suite'] as skill, skillIndex (skillIndex)}
									<Badge>{skill}</Badge>
								{/each}
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="Teams">
				<Card.Root
					class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
				>
					<Card.Header>
						<Card.Title>Team Memberships</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{#each teams as team, teamIndex (teamIndex)}
								<div class="team-card">
									<div class="mb-3 flex items-start justify-between">
										<h4 class="font-semibold">{team.name}</h4>
										<span class="px-2 py-1 {team.color} rounded-full text-xs font-medium">
											{team.role}
										</span>
									</div>
									<p class="flex items-center gap-2 text-sm text-gray-600">
										<span class="text-gray-400">👥</span>
										{team.members} members
									</p>
								</div>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="Projects">
				<Card.Root
					class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
				>
					<Card.Header>
						<Card.Title>Projects</Card.Title>
					</Card.Header>
					<Card.Content class="space-y-4">
						{#each projects as project, projectIndex (projectIndex)}
							<Card.Root class="w-full p-6">
								<Card.Header>
									<div class="mb-2 flex items-center gap-3">
										<Card.Title class="">{project.name}</Card.Title>
										<Badge class="rounded-full px-2 py-1 {project.statusColor} text-xs font-medium">
											{project.status}
										</Badge>
									</div>
									<Card.Description class="mb-3">{project.team}</Card.Description>
								</Card.Header>
								<Card.Content>
									<!-- Progress Bar -->
									<div class="space-y-1">
										<Progress value={project.progress} class="h-2" />
										<div class="flex justify-between text-xs text-muted-foreground">
											<span>{project.progress}% complete</span>
											<span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						{/each}
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="Connections">
				<Card.Root
					class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
				>
					<Card.Header>
						<Card.Title>Professional Connections</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{#each connections as connection, connectionIndex (connectionIndex)}
								<a
									href="https://{connection.url}"
									target="_blank"
									rel="noopener noreferrer"
									class="block p-4 {connection.color} rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
								>
									<div class="flex items-center gap-3">
										<span class="text-2xl">{connection.icon}</span>
										<div>
											<p class="font-medium">{connection.name}</p>
											<p class="text-sm opacity-80">{connection.url}</p>
										</div>
									</div>
								</a>
							{/each}
						</div>
					</Card.Content>
					<!-- Quick Contact -->
					<Card.Footer class="gap-2">
						<Button>Send Message</Button>
						<Button>Schedule Meeting</Button>
						<Button>Export Contact</Button>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
