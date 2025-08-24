<script>
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
	import { user } from '$lib/store';
	import Building2Icon from '@lucide/svelte/icons/building-2';
	import MailIcon from '@lucide/svelte/icons/mail';
	import PhoneIcon from '@lucide/svelte/icons/phone';
</script>

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
						<span class="w-5 text-gray-400"><MailIcon /></span>
						<span>{user.email}</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="w-5 text-gray-400"><PhoneIcon /></span>
						<span>{user.phone}</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="w-5 text-gray-400"><Building2Icon /></span>
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
