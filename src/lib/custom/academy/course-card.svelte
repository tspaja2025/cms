<script lang="ts">
	import type { Course } from '$lib/custom/academy/store/data';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Progress from '$lib/components/ui/progress';

	const {
		course,
		showProgress = false,
		showEnroll = false,
	}: { course: Course; showProgress?: boolean; showEnroll?: boolean } = $props();

	function navigateToCourse() {
		goto(`/admin/academy/courses/${course.id}`);
	}
</script>

<Card.Root onclick={navigateToCourse}
	onkeydown={(e) => e.key === 'Enter' && navigateToCourse()}
	tabindex={-1}>

	<Card.Header>
		<Card.Title>{course.title}</Card.Title>
		<Card.Description>
			{course.description}
			<div class="flex items-center justify-between text-sm text-gray-500">
				<span>By {course.instructor}</span>
				<span class="flex items-center">
					⭐ {course.rating} ({course.students.toLocaleString()})
				</span>
			</div>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<img src={course.image} alt={course.title} class="mb-4 h-48 w-full rounded-lg object-cover" />
<div class="mb-2 flex items-center justify-between">
			<span class="bg-primary-100 text-primary-800 rounded-full px-2 py-1 text-xs font-semibold">
				{course.category}
			</span>
			<span class="text-sm text-gray-500">{course.duration}</span>
		</div>
		{#if showProgress && course.enrolled}
		<div class="flex w-full flex-col gap-2">
			<div class="flex items-center justify-between text-sm font-medium">
				<span>Progress</span>
				<span>{course.progress}%</span>
			</div>
			<Progress.Root value={course.progress}></Progress.Root>
		</div>
	{/if}
	</Card.Content>
	<Card.Footer>
		{#if showEnroll}
			<Button> Enroll Now </Button>
		{:else if course.enrolled}
			<Button>
				{course.progress > 0 ? 'Continue' : 'Start Learning'}
			</Button>
		{/if}
		<Button variant="secondary"> View Details </Button>
	</Card.Footer>
</Card.Root>



<!-- <div
	class="card cursor-pointer transition-shadow duration-200 hover:shadow-md"
	onclick={() => navigateTo('course-details', course.id)}
	onkeydown={(e) => e.key === 'Enter' && navigateTo('course-details', course.id)}
	tabindex="-1"
	{...restProps}
>
	<div class="mb-4">
		<img src={course.image} alt={course.title} class="mb-4 h-48 w-full rounded-lg object-cover" />

		<div class="mb-2 flex items-center justify-between">
			<span class="bg-primary-100 text-primary-800 rounded-full px-2 py-1 text-xs font-semibold">
				{course.category}
			</span>
			<span class="text-sm text-gray-500">{course.duration}</span>
		</div>

		<h3 class="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">{course.title}</h3>
		<p class="mb-4 line-clamp-2 text-sm text-gray-600">{course.description}</p>

		<div class="mb-4 flex items-center justify-between text-sm text-gray-500">
			<span>By {course.instructor}</span>
			<span class="flex items-center">
				⭐ {course.rating} ({course.students.toLocaleString()})
			</span>
		</div>
	</div>

	{#if showProgress && course.enrolled}
		<div class="mb-4">
			<div class="mb-2 flex items-center justify-between">
				<span class="text-sm font-medium text-gray-700">Progress</span>
				<span class="text-sm text-gray-500">{course.progress}%</span>
			</div>
			<div class="progress-bar">
				<div class="progress-fill" style="width: {course.progress}%"></div>
			</div>
		</div>
	{/if}

	<div class="flex gap-2">
		{#if showEnroll}
			<button class="btn-primary flex-1"> Enroll Now </button>
		{:else if course.enrolled}
			<button class="btn-primary flex-1">
				{course.progress > 0 ? 'Continue' : 'Start Learning'}
			</button>
		{/if}
		<button class="btn-secondary"> View Details </button>
	</div>
</div> -->
