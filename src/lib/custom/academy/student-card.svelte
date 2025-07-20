<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Progress } from '$lib/components/ui/progress/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Mail, Calendar } from '@lucide/svelte';
	import type { Student } from '$lib/custom/academy/store/data';

	let { student }: { student: Student } = $props();

	const statusColors = {
		active: 'bg-green-100 text-green-800',
		inactive: 'bg-gray-100 text-gray-800',
		graduated: 'bg-blue-100 text-blue-800'
	};
</script>

<Card.Root>
	<Card.Header class="flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<Avatar.Root>
				<Avatar.Image src={student.avatar} alt={student.name} />
				<Avatar.Fallback>{student.name}</Avatar.Fallback>
			</Avatar.Root>
			<Card.Title>{student.name}</Card.Title>
		</div>
		<Badge class={statusColors[student.status]}>{student.status}</Badge>
	</Card.Header>
	<Card.Content class="flex items-start space-x-4">
		<div class="flex-1">
			<div class="mb-2 flex items-center text-sm">
				<Mail class="mr-1 h-4 w-4" />
				{student.email}
			</div>

			<div class="mb-3 flex items-center text-sm">
				<Calendar class="mr-1 h-4 w-4" />
				Enrolled: {new Date(student.enrollDate).toLocaleDateString()}
			</div>

			<div class="mb-2">
				<p class="mb-1 text-sm font-medium">{student.course}</p>
				<Progress value={student.progress} />
				<p class="mt-1 text-xs">{student.progress}% Complete</p>
			</div>
		</div>
	</Card.Content>
</Card.Root>
