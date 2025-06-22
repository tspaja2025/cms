<script>
  import {
    getDashboardStats,
    getEnrolledCourses,
  } from "$lib/custom/academy/store/data";
  import CourseCard from "$lib/custom/academy/course-card.svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";

  const stats = getDashboardStats();
  const recentCourses = getEnrolledCourses().slice(0, 3);
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<div class="p-8">
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
    <p class="text-gray-600">Here's your learning progress overview</p>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <Card.Root>
      <Card.Content>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Courses</p>
            <p class="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
          </div>
          <div
            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-xl">📚</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Content>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Completed</p>
            <p class="text-2xl font-bold text-green-600">
              {stats.completedCourses}
            </p>
          </div>
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-xl">✅</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Content>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">In Progress</p>
            <p class="text-2xl font-bold text-amber-600">
              {stats.inProgressCourses}
            </p>
          </div>
          <div
            class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-xl">⏳</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>

    <Card.Root class="card">
      <Card.Content>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Avg Progress</p>
            <p class="text-2xl font-bold text-primary-600">
              {stats.averageProgress}%
            </p>
          </div>
          <div
            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-xl">📈</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </div>

  <!-- Recent Courses -->
  <div class="card">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-gray-900">Continue Learning</h2>
      <Button>View All Courses →</Button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {#each recentCourses as course}
        <CourseCard {course} />
      {/each}
    </div>
  </div>

  <!-- Recent Activity -->
  <div class="card mt-8">
    <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
    <div class="space-y-4">
      <div class="flex items-center p-4 bg-gray-50 rounded-lg">
        <div
          class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
        >
          <span class="text-green-600">✓</span>
        </div>
        <div class="flex-1">
          <p class="font-medium text-gray-900">
            Completed "HTML Fundamentals" chapter
          </p>
          <p class="text-sm text-gray-600">
            Complete Web Development Bootcamp • 2 hours ago
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-gray-50 rounded-lg">
        <div
          class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4"
        >
          <span class="text-blue-600">▶</span>
        </div>
        <div class="flex-1">
          <p class="font-medium text-gray-900">Started "CSS Styling" chapter</p>
          <p class="text-sm text-gray-600">
            Complete Web Development Bootcamp • 3 hours ago
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-gray-50 rounded-lg">
        <div
          class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4"
        >
          <span class="text-purple-600">📝</span>
        </div>
        <div class="flex-1">
          <p class="font-medium text-gray-900">Submitted assignment</p>
          <p class="text-sm text-gray-600">
            Data Science with Python • Yesterday
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
