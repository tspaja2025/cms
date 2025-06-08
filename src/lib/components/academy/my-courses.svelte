<script lang="ts">
	import { getEnrolledCourses, courses } from '$lib/components/academy/store/data';
	import CourseCard from '$lib/components/academy/course-card.svelte';

	const enrolledCourses = getEnrolledCourses();
	const availableCourses = courses.filter((course) => !course.enrolled);

	let activeTab = 'enrolled';
</script>

<div class="p-8">
	<div class="mb-8">
		<h1 class="mb-2 text-3xl font-bold text-gray-900">My Courses</h1>
		<p class="text-gray-600">Manage your learning journey</p>
	</div>

	<!-- Tabs -->
	<div class="mb-8 border-b border-gray-200">
		<nav class="-mb-px flex space-x-8">
			<button
				class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'enrolled'
					? 'border-primary-500 text-primary-600'
					: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
				on:click={() => (activeTab = 'enrolled')}
			>
				Enrolled ({enrolledCourses.length})
			</button>
			<button
				class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'available'
					? 'border-primary-500 text-primary-600'
					: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
				on:click={() => (activeTab = 'available')}
			>
				Available ({availableCourses.length})
			</button>
		</nav>
	</div>

	<!-- Enrolled Courses -->
	{#if activeTab === 'enrolled'}
		{#if enrolledCourses.length > 0}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each enrolledCourses as course, coIndex (coIndex)}
					<CourseCard {course} showProgress={true} />
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center">
				<div
					class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100"
				>
					<span class="text-4xl">📚</span>
				</div>
				<h3 class="mb-2 text-lg font-medium text-gray-900">No enrolled courses</h3>
				<p class="mb-4 text-gray-600">Start your learning journey by enrolling in a course</p>
				<button class="btn-primary" on:click={() => (activeTab = 'available')}>
					Browse Courses
				</button>
			</div>
		{/if}
	{/if}

	<!-- Available Courses -->
	{#if activeTab === 'available'}
		{#if availableCourses.length > 0}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each availableCourses as course, couIndex (couIndex)}
					<CourseCard {course} showEnroll={true} />
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center">
				<div
					class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100"
				>
					<span class="text-4xl">🎓</span>
				</div>
				<h3 class="mb-2 text-lg font-medium text-gray-900">No available courses</h3>
				<p class="text-gray-600">All courses have been enrolled!</p>
			</div>
		{/if}
	{/if}
</div>
