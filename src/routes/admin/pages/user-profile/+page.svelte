<script lang="ts">
	let activeTab = 'profile';

	const tabs = [
		{ id: 'profile', label: 'Profile', icon: '👤' },
		{ id: 'teams', label: 'Teams', icon: '👥' },
		{ id: 'projects', label: 'Projects', icon: '📁' },
		{ id: 'connections', label: 'Connections', icon: '🔗' }
	];

	function setActiveTab(tabId: string) {
		activeTab = tabId;
	}

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

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="profile-card animate-fade-in mb-8">
			<div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
				<div class="flex-shrink-0">
					<img
						src={user.avatar}
						alt={user.name}
						class="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
					/>
				</div>
				<div class="flex-1">
					<h1 class="mb-2 text-3xl font-bold text-gray-900">{user.name}</h1>
					<p class="mb-1 text-xl text-gray-600">{user.role}</p>
					<p class="flex items-center gap-2 text-gray-500">
						<span class="text-gray-400">📍</span>
						{user.location}
					</p>
				</div>
				<div class="flex gap-3">
					<button
						class="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200"
					>
						Edit Profile
					</button>
					<button
						class="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
					>
						Share
					</button>
				</div>
			</div>
		</div>

		<!-- Tabs -->
		<div class="animate-slide-up rounded-xl border border-gray-200 bg-white shadow-sm">
			<div class="border-b border-gray-200">
				<nav class="flex space-x-8 px-6" aria-label="Tabs">
					{#each tabs as tab, tabIndex (tabIndex)}
						<button
							class="tab-button {activeTab === tab.id ? 'active' : ''}"
							on:click={() => setActiveTab(tab.id)}
						>
							<span class="mr-2">{tab.icon}</span>
							{tab.label}
						</button>
					{/each}
				</nav>
			</div>

			<div class="p-6">
				{#if activeTab === 'profile'}
					<div class="animate-fade-in">
						<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<!-- Personal Information -->
							<div class="space-y-6">
								<h3 class="mb-4 text-lg font-semibold text-gray-900">Personal Information</h3>
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
									<span
										class="bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{:else if activeTab === 'teams'}
					<div class="animate-fade-in">
						<h3 class="mb-6 text-lg font-semibold text-gray-900">Team Memberships</h3>
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
					</div>
				{:else if activeTab === 'projects'}
					<div class="animate-fade-in">
						<h3 class="mb-6 text-lg font-semibold text-gray-900">Projects</h3>
						<div class="space-y-4">
							{#each projects as project, projectIndex (projectIndex)}
								<div class="project-card">
									<div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
										<div class="flex-1">
											<div class="mb-2 flex items-center gap-3">
												<h4 class="font-semibold text-gray-900">{project.name}</h4>
												<span
													class="px-2 py-1 {project.statusColor} rounded-full text-xs font-medium"
												>
													{project.status}
												</span>
											</div>
											<p class="mb-3 text-sm text-gray-600">{project.team}</p>

											<!-- Progress Bar -->
											<div class="mb-2 h-2 w-full rounded-full bg-gray-200">
												<div
													class="bg-secondary-500 h-2 rounded-full transition-all duration-300"
													style="width: {project.progress}%"
												></div>
											</div>
											<div class="flex justify-between text-xs text-gray-500">
												<span>{project.progress}% complete</span>
												<span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{:else if activeTab === 'connections'}
					<div class="animate-fade-in">
						<h3 class="mb-6 text-lg font-semibold text-gray-900">Professional Connections</h3>
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

						<!-- Quick Contact -->
						<div class="mt-8 border-t border-gray-200 pt-8">
							<h4 class="text-md mb-4 font-semibold text-gray-900">Quick Contact</h4>
							<div class="flex flex-wrap gap-3">
								<button
									class="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200"
								>
									Send Message
								</button>
								<button
									class="bg-secondary-600 hover:bg-secondary-700 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200"
								>
									Schedule Meeting
								</button>
								<button
									class="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
								>
									Export Contact
								</button>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
