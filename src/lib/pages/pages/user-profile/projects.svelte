<script>
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import { projects } from '$lib/store';
</script>

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
