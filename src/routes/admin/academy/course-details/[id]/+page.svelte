<script lang="ts">
	import { selectedCourseId, navigateTo } from '$lib/custom/academy/store/navigation';
	import { getCourseById } from '$lib/custom/academy/store/data';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	$: course = $selectedCourseId ? getCourseById($selectedCourseId) : null;
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

{#if course}
	<div class="p-8">
		<!-- Back Button -->
		<Button class="mb-2" onclick={() => navigateTo('dashboard')}>
			<span class="mr-2">←</span>
			Back to My Courses
		</Button>

		<!-- Course Header -->
		<Card.Root class="mb-8">
			<Card.Content>
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
						<h1 class="mb-4 text-3xl font-bold text-gray-900">
							{course.title}
						</h1>
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
							<Button>Continue Learning</Button>
						{:else}
							<Button>Enroll Now</Button>
						{/if}
					</div>
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Course Content -->
		{#if course.enrolled && course.chapters.length > 0}
			<Card.Root>
				<Card.Header>
					<Card.Title>Course Content</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					{#each course.chapters as chapter, index}
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
											<h3 class="font-semibold text-gray-900">
												{chapter.title}
											</h3>
											<p class="text-sm text-gray-600">
												{chapter.duration} • {chapter.lessons.length} lessons
											</p>
										</div>
									</div>
									<div class="flex items-center">
										{#if chapter.completed}
											<Badge class="bg-green-600">Completed</Badge>
										{:else}
											<Badge class="bg-gray-500">Not Started</Badge>
										{/if}
									</div>
								</div>
							</div>

							<div class="p-4">
								<div class="space-y-3">
									{#each chapter.lessons as lesson}
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
												<p class="text-sm font-medium text-gray-900">
													{lesson.title}
												</p>
												<p class="text-xs text-gray-500">{lesson.duration}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		{/if}

		<!-- Tags -->
		{#if course.tags.length > 0}
			<Card.Root class="card mt-8">
				<Card.Header>
					<Card.Title>What you'll learn</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-wrap gap-2">
						{#each course.tags as tag}
							<Badge class="bg-primary-100 text-primary-800">
								{tag}
							</Badge>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/if}
	</div>
{/if}
