<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Progress } from '$lib/components/ui/progress';
	import { MapPinIcon, MoreVerticalIcon } from '@lucide/svelte';
	let activeTab = 'Profile';

	const tabs = [
		{ id: 'profile', label: 'Profile', icon: '👤' },
		{ id: 'teams', label: 'Teams', icon: '👥' },
		{ id: 'projects', label: 'Projects', icon: '📁' },
		{ id: 'connections', label: 'Connections', icon: '🔗' }
	];

	// Mock data
	const user = {
		name: 'Sarah Mitchell',
		role: 'Senior Product Designer',
		company: 'TechFlow Inc.',
		location: 'San Francisco, CA',
		email: 'sarah.mitchell@techflow.com',
		phone: '+1 (555) 123-4567',
		bio: 'Passionate product designer with 8+ years of experience creating user-centered digital experiences. I love solving complex problems through thoughtful design and collaboration.',
		avatar:
			'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
	};

	const teams = [
		{
			name: 'Design System Team',
			role: 'Lead Designer',
			members: 8,
			color: 'bg-primary-100 text-primary-700'
		},
		{
			name: 'Mobile App Team',
			role: 'Senior Designer',
			members: 12,
			color: 'bg-secondary-100 text-secondary-700'
		},
		{
			name: 'User Research',
			role: 'Contributor',
			members: 6,
			color: 'bg-accent-100 text-accent-700'
		}
	];

	const projects = [
		{
			name: 'E-commerce Redesign',
			status: 'In Progress',
			progress: 75,
			team: 'Design System Team',
			dueDate: '2025-02-15',
			statusColor: 'bg-yellow-100 text-yellow-700'
		},
		{
			name: 'Mobile Banking App',
			status: 'Completed',
			progress: 100,
			team: 'Mobile App Team',
			dueDate: '2024-12-20',
			statusColor: 'bg-green-100 text-green-700'
		},
		{
			name: 'Design System v2.0',
			status: 'Planning',
			progress: 25,
			team: 'Design System Team',
			dueDate: '2025-04-30',
			statusColor: 'bg-blue-100 text-blue-700'
		}
	];

	const connections = [
		{
			name: 'LinkedIn',
			url: 'linkedin.com/in/sarahmitchell',
			icon: '💼',
			color: 'bg-blue-50 text-blue-600'
		},
		{
			name: 'Dribbble',
			url: 'dribbble.com/sarahmitchell',
			icon: '🎨',
			color: 'bg-pink-50 text-pink-600'
		},
		{
			name: 'Behance',
			url: 'behance.net/sarahmitchell',
			icon: '🖼️',
			color: 'bg-purple-50 text-purple-600'
		},
		{
			name: 'Personal Website',
			url: 'sarahmitchell.design',
			icon: '🌐',
			color: 'bg-green-50 text-green-600'
		}
	];
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<Card.Root class="relative mb-4">
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
				<DropdownMenu.Trigger>
					<Button variant="ghost" size="sm" class="h-8 w-8 p-0">
						<MoreVerticalIcon class="h-4 w-4" />
						<span class="sr-only">Menu</span>
					</Button>
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
				<span class="mr-2">{tab.icon}</span>
				{tab.label}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	<Tabs.Content value="Profile">
		<Card.Root>
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
								<span class="text-gray-900">{user.email}</span>
							</div>
							<div class="flex items-center gap-3">
								<span class="w-5 text-gray-400">📞</span>
								<span class="text-gray-900">{user.phone}</span>
							</div>
							<div class="flex items-center gap-3">
								<span class="w-5 text-gray-400">🏢</span>
								<span class="text-gray-900">{user.company}</span>
							</div>
						</div>
					</div>

					<!-- Bio -->
					<div class="space-y-6">
						<h3 class="mb-4 text-lg font-semibold text-gray-900">About</h3>
						<p class="leading-relaxed text-gray-600">{user.bio}</p>
					</div>
				</div>

				<!-- Skills & Expertise -->
				<div class="mt-8 border-t border-gray-200 pt-8">
					<h3 class="mb-4 text-lg font-semibold text-gray-900">Skills & Expertise</h3>
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
		<Card.Root>
			<Card.Header>
				<Card.Title>Team Memberships</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each teams as team, teamIndex (teamIndex)}
						<div class="team-card">
							<div class="mb-3 flex items-start justify-between">
								<h4 class="font-semibold text-gray-900">{team.name}</h4>
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
		<Card.Root>
			<Card.Header>
				<Card.Title>Projects</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				{#each projects as project, projectIndex (projectIndex)}
					<Card.Root class="w-full p-6">
						<Card.Header>
							<div class="mb-2 flex items-center gap-3">
								<Card.Title class="text-gray-900">{project.name}</Card.Title>
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
								<div class="text-muted-foreground flex justify-between text-xs">
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
		<Card.Root>
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
