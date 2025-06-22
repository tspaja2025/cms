<script lang="ts">
  import {
    selectedCourseId,
    navigateTo,
  } from "$lib/custom/academy/store/navigation";
  import { getCourseById } from "$lib/custom/academy/store/data";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  $: course = $selectedCourseId ? getCourseById($selectedCourseId) : null;
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

{#if course}
  <div class="p-8">
    <!-- Back Button -->
    <Button class="mb-2" onclick={() => navigateTo("dashboard")}>
      <span class="mr-2">←</span>
      Back to My Courses
    </Button>

    <!-- Course Header -->
    <Card.Root class="mb-8">
      <Card.Content>
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-1/3">
            <img
              src={course.image}
              alt={course.title}
              class="w-full h-48 lg:h-64 object-cover rounded-lg"
            />
          </div>
          <div class="lg:w-2/3">
            <div class="flex items-center gap-2 mb-2">
              <span
                class="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full"
              >
                {course.category}
              </span>
              <span
                class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full"
              >
                {course.level}
              </span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p class="text-gray-600 mb-6">{course.description}</p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                <p class="font-semibold flex items-center">
                  ⭐ {course.rating} ({course.students.toLocaleString()})
                </p>
              </div>
            </div>

            {#if course.enrolled}
              <div class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Progress</span
                  >
                  <span class="text-sm text-gray-500">{course.progress}%</span>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    style="width: {course.progress}%"
                  ></div>
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
            <div class="border border-gray-200 rounded-lg">
              <div class="p-4 bg-gray-50 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center mr-3 {chapter.completed
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'}"
                    >
                      {chapter.completed ? "✓" : index + 1}
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
                        class="w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs {lesson.completed
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'}"
                      >
                        {#if lesson.type === "video"}
                          {lesson.completed ? "✓" : "▶"}
                        {:else if lesson.type === "reading"}
                          {lesson.completed ? "✓" : "📄"}
                        {:else}
                          {lesson.completed ? "✓" : "❓"}
                        {/if}
                      </div>
                      <div class="flex-1">
                        <p class="font-medium text-gray-900 text-sm">
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
