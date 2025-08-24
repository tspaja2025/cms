<script>
	import * as Card from '$lib/components/ui/card/index';
	import { teams } from '$lib/store';
	import UsersIcon from '@lucide/svelte/icons/users';
</script>

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
						<span class="text-gray-400"><UsersIcon /></span>
						{team.members} members
					</p>
				</div>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
