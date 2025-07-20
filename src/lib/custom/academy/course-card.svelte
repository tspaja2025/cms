<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Users, Clock, BookOpen } from '@lucide/svelte';
	import type { Course } from '$lib/custom/academy/store/data';

	let { course }: { course: Course } = $props();

	const statusColors = {
		active: 'bg-green-100 text-green-800',
		completed: 'bg-blue-100 text-blue-800',
		upcoming: 'bg-yellow-100 text-yellow-800'
	};
</script>

<Card.Root class="flex-1">
	<Card.Header class="flex items-start justify-between">
		<div>
			<Card.Title>{course.title}</Card.Title>
			<Card.Description>by {course.instructor}</Card.Description>
		</div>
		<Badge class={statusColors[course.status]}>
			{course.status}
		</Badge>
	</Card.Header>

	<Card.Content>
		<div class="flex items-center justify-between text-sm text-gray-500">
			<div class="flex items-center">
				<Users class="mr-1 h-4 w-4" />
				{course.students} students
			</div>
			<div class="flex items-center">
				<Clock class="mr-1 h-4 w-4" />
				{course.duration}
			</div>
			<div class="flex items-center">
				<BookOpen class="mr-1 h-4 w-4" />
				{course.category}
			</div>
		</div>

		<div>
			<div class="mb-2 flex items-center justify-between">
				<span class="text-sm font-medium text-gray-700">Progress</span>
				<span class="text-sm text-gray-500">{course.progress}%</span>
			</div>
			<div class="h-2 w-full rounded-full bg-gray-200">
				<div
					class="bg-accent-500 h-2 rounded-full transition-all duration-300"
					style="width: {course.progress}%"
				></div>
			</div>
		</div>
	</Card.Content>

	<Card.Footer class="flex space-x-2">
		<Button>View Details</Button>
		<Button variant="secondary">Edit Course</Button>
	</Card.Footer>
</Card.Root>
