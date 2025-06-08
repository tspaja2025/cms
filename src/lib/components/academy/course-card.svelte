<script lang="ts">
	import type { Course } from '$lib/components/academy/store/data';
	import { navigateTo } from '$lib/components/academy/store/navigation';

	const {
		course,
		showProgress = false,
		showEnroll = false,
		...restProps
	}: { course: Course; showProgress?: boolean; showEnroll?: boolean } = $props();
</script>

<div
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
</div>
