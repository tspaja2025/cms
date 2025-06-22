<script lang="ts">
  import { getEnrolledCourses, courses } from "$lib/custom/academy/store/data";
  import CourseCard from "$lib/custom/academy/course-card.svelte";

  const enrolledCourses = getEnrolledCourses();
  const availableCourses = courses.filter((course) => !course.enrolled);

  let activeTab = "enrolled";
</script>

<svelte:head>
  <title>Admin Dashboard</title>
</svelte:head>

<div class="p-8">
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
    <p class="text-gray-600">Manage your learning journey</p>
  </div>

  <!-- Tabs -->
  <div class="border-b border-gray-200 mb-8">
    <nav class="-mb-px flex space-x-8">
      <button
        class="py-4 px-1 border-b-2 font-medium text-sm {activeTab ===
        'enrolled'
          ? 'border-primary-500 text-primary-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
        on:click={() => (activeTab = "enrolled")}
      >
        Enrolled ({enrolledCourses.length})
      </button>
      <button
        class="py-4 px-1 border-b-2 font-medium text-sm {activeTab ===
        'available'
          ? 'border-primary-500 text-primary-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
        on:click={() => (activeTab = "available")}
      >
        Available ({availableCourses.length})
      </button>
    </nav>
  </div>

  <!-- Enrolled Courses -->
  {#if activeTab === "enrolled"}
    {#if enrolledCourses.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each enrolledCourses as course}
          <CourseCard {course} showProgress={true} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <div
          class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-4xl">📚</span>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          No enrolled courses
        </h3>
        <p class="text-gray-600 mb-4">
          Start your learning journey by enrolling in a course
        </p>
        <button class="btn-primary" on:click={() => (activeTab = "available")}>
          Browse Courses
        </button>
      </div>
    {/if}
  {/if}

  <!-- Available Courses -->
  {#if activeTab === "available"}
    {#if availableCourses.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each availableCourses as course}
          <CourseCard {course} showEnroll={true} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <div
          class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-4xl">🎓</span>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          No available courses
        </h3>
        <p class="text-gray-600">All courses have been enrolled!</p>
      </div>
    {/if}
  {/if}
</div>
