<script lang="ts">
	import { selectedCourseId, navigateTo } from '$lib/custom/academy/store/navigation';
	import { getCourseById } from '$lib/custom/academy/store/data';

	$: course = $selectedCourseId ? getCourseById($selectedCourseId) : null;

	if (!course) {
		navigateTo('courses');
	}
</script>

{#if course}
	<div class="p-8">
		<!-- Back Button -->
		<button
			class="text-primary-600 hover:text-primary-700 mb-6 flex items-center"
			on:click={() => navigateTo('courses')}
		>
			<span class="mr-2">←</span>
			Back to My Courses
		</button>

		<!-- Course Header -->
		<div class="card mb-8">
			<div class="flex flex-col gap-8 lg:flex-row">
				<div class="lg:w-1/3">
					<img
						src={course.image}
						alt={course.title}
						class="h-48 w-full rounded-lg object-cover lg:h-64"
					/>
				</div>
				<div class="lg:w-2/3">
					<div class="mb-2 flex items-center gap-2">
						<span
							class="bg-primary-100 text-primary-800 rounded-full px-2 py-1 text-xs font-semibold"
						>
							{course.category}
						</span>
						<span class="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-800">
							{course.level}
						</span>
					</div>
					<h1 class="mb-4 text-3xl font-bold text-gray-900">{course.title}</h1>
					<p class="mb-6 text-gray-600">{course.description}</p>

					<div class="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
						<div>
							<p class="text-sm text-gray-500">Instructor</p>
							<p class="font-semibold">{course.instructor}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Duration</p>
							<p class="font-semibold">{course.duration}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Lessons</p>
							<p class="font-semibold">{course.lessons}</p>
						</div>
						<div>
							<p class="text-sm text-gray-500">Rating</p>
							<p class="flex items-center font-semibold">
								⭐ {course.rating} ({course.students.toLocaleString()})
							</p>
						</div>
					</div>

					{#if course.enrolled}
						<div class="mb-4">
							<div class="mb-2 flex items-center justify-between">
								<span class="text-sm font-medium text-gray-700">Progress</span>
								<span class="text-sm text-gray-500">{course.progress}%</span>
							</div>
							<div class="progress-bar">
								<div class="progress-fill" style="width: {course.progress}%"></div>
							</div>
						</div>
						<button class="btn-primary">Continue Learning</button>
					{:else}
						<button class="btn-primary">Enroll Now</button>
					{/if}
				</div>
			</div>
		</div>

		<!-- Course Content -->
		{#if course.enrolled && course.chapters.length > 0}
			<div class="card">
				<h2 class="mb-6 text-xl font-semibold text-gray-900">Course Content</h2>
				<div class="space-y-4">
					{#each course.chapters as chapter, index (index)}
						<div class="rounded-lg border border-gray-200">
							<div class="border-b border-gray-200 bg-gray-50 p-4">
								<div class="flex items-center justify-between">
									<div class="flex items-center">
										<div
											class="mr-3 flex h-8 w-8 items-center justify-center rounded-full {chapter.completed
												? 'bg-green-100 text-green-600'
												: 'bg-gray-100 text-gray-600'}"
										>
											{chapter.completed ? '✓' : index + 1}
										</div>
										<div>
											<h3 class="font-semibold text-gray-900">{chapter.title}</h3>
											<p class="text-sm text-gray-600">
												{chapter.duration} • {chapter.lessons.length} lessons
											</p>
										</div>
									</div>
									<div class="flex items-center">
										{#if chapter.completed}
											<span class="text-sm font-medium text-green-600">Completed</span>
										{:else}
											<span class="text-sm font-medium text-gray-500">Not Started</span>
										{/if}
									</div>
								</div>
							</div>

							<div class="p-4">
								<div class="space-y-3">
									{#each chapter.lessons as lesson, lessonIndex (lessonIndex)}
										<div class="flex items-center">
											<div
												class="mr-3 flex h-6 w-6 items-center justify-center rounded-full text-xs {lesson.completed
													? 'bg-green-100 text-green-600'
													: 'bg-gray-100 text-gray-600'}"
											>
												{#if lesson.type === 'video'}
													{lesson.completed ? '✓' : '▶'}
												{:else if lesson.type === 'reading'}
													{lesson.completed ? '✓' : '📄'}
												{:else}
													{lesson.completed ? '✓' : '❓'}
												{/if}
											</div>
											<div class="flex-1">
												<p class="text-sm font-medium text-gray-900">{lesson.title}</p>
												<p class="text-xs text-gray-500">{lesson.duration}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Tags -->
		{#if course.tags.length > 0}
			<div class="card mt-8">
				<h3 class="mb-4 text-lg font-semibold text-gray-900">What you'll learn</h3>
				<div class="flex flex-wrap gap-2">
					{#each course.tags as tag, tagIndex (tagIndex)}
						<span
							class="bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-medium"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}
