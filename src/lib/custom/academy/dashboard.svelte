<script lang="ts">
	import { getDashboardStats, getEnrolledCourses } from '$lib/custom/academy/store/data';
	import { navigateTo } from '$lib/custom/academy/store/navigation';
	import CourseCard from '$lib/custom/academy/course-card.svelte';

	const stats = getDashboardStats();
	const recentCourses = getEnrolledCourses().slice(0, 3);
</script>

<div class="p-8">
	<div class="mb-8">
		<h1 class="mb-2 text-3xl font-bold text-gray-900">Welcome back!</h1>
		<p class="text-gray-600">Here's your learning progress overview</p>
	</div>

	<!-- Stats Grid -->
	<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<div class="card">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-600">Total Courses</p>
					<p class="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
				</div>
				<div class="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-lg">
					<span class="text-xl">📚</span>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-600">Completed</p>
					<p class="text-2xl font-bold text-green-600">{stats.completedCourses}</p>
				</div>
				<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<span class="text-xl">✅</span>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-600">In Progress</p>
					<p class="text-2xl font-bold text-amber-600">{stats.inProgressCourses}</p>
				</div>
				<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
					<span class="text-xl">⏳</span>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-600">Avg Progress</p>
					<p class="text-primary-600 text-2xl font-bold">{stats.averageProgress}%</p>
				</div>
				<div class="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-lg">
					<span class="text-xl">📈</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Recent Courses -->
	<div class="card">
		<div class="mb-6 flex items-center justify-between">
			<h2 class="text-xl font-semibold text-gray-900">Continue Learning</h2>
			<button
				class="text-primary-600 hover:text-primary-700 font-medium"
				on:click={() => navigateTo('courses')}
			>
				View All Courses →
			</button>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each recentCourses as course, courseIndex (courseIndex)}
				<CourseCard {course} />
			{/each}
		</div>
	</div>

	<!-- Recent Activity -->
	<div class="card mt-8">
		<h2 class="mb-6 text-xl font-semibold text-gray-900">Recent Activity</h2>
		<div class="space-y-4">
			<div class="flex items-center rounded-lg bg-gray-50 p-4">
				<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
					<span class="text-green-600">✓</span>
				</div>
				<div class="flex-1">
					<p class="font-medium text-gray-900">Completed "HTML Fundamentals" chapter</p>
					<p class="text-sm text-gray-600">Complete Web Development Bootcamp • 2 hours ago</p>
				</div>
			</div>

			<div class="flex items-center rounded-lg bg-gray-50 p-4">
				<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
					<span class="text-blue-600">▶</span>
				</div>
				<div class="flex-1">
					<p class="font-medium text-gray-900">Started "CSS Styling" chapter</p>
					<p class="text-sm text-gray-600">Complete Web Development Bootcamp • 3 hours ago</p>
				</div>
			</div>

			<div class="flex items-center rounded-lg bg-gray-50 p-4">
				<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
					<span class="text-purple-600">📝</span>
				</div>
				<div class="flex-1">
					<p class="font-medium text-gray-900">Submitted assignment</p>
					<p class="text-sm text-gray-600">Data Science with Python • Yesterday</p>
				</div>
			</div>
		</div>
	</div>
</div>
