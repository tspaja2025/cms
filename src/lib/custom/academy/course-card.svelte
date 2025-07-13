<script lang="ts">
	import type { Course } from '$lib/custom/academy/store/data';
	import { navigateTo } from '$lib/custom/academy/store/navigation';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';

	export let course: Course;
	export let showProgress = false;
	export let showEnroll = false;
</script>

<Card.Root class="transition-shadow duration-200 hover:shadow-md">
	<Card.Header>
		<Card.Title>{course.title}</Card.Title>
		<Card.Description>{course.description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<a
			href="/admin/academy/course-details/{course.id}"
			class="block focus:outline-none"
			on:click|preventDefault={() => navigateTo('course-details', course.id)}
		>
			<img src={course.image} alt={course.title} class="mb-4 h-48 w-full rounded-lg object-cover" />

			<div class="mb-2 flex items-center justify-between">
				<Badge>
					{course.category}
				</Badge>
				<span class="text-sm text-gray-500">{course.duration}</span>
			</div>

			<div class="mb-4 flex items-center justify-between text-sm text-gray-500">
				<span>By {course.instructor}</span>
				<span class="flex items-center">
					⭐ {course.rating} ({course.students.toLocaleString()})
				</span>
			</div>
		</a>
	</Card.Content>
	<Card.Footer>
		{#if showEnroll}
			<Button class="flex-1">Enroll Now</Button>
		{:else if course.enrolled}
			<Button class="flex-1">
				{course.progress > 0 ? 'Continue' : 'Start Learning'}
			</Button>
		{/if}
		<Button onclick={() => navigateTo('course-details', course.id)}>View Details</Button>
	</Card.Footer>
</Card.Root>
