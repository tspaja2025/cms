<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import * as Select from '$lib/components/ui/select/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import {
		Users,
		BookOpen,
		TrendingUp,
		DollarSign,
		Plus,
		List,
		Grid,
		Download
	} from '@lucide/svelte';
	import HomeIcon from '@lucide/svelte/icons/house';
	import UsersIcon from '@lucide/svelte/icons/users';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import StatCard from '$lib/custom/academy/stat-card.svelte';
	import StudentCard from '$lib/custom/academy/student-card.svelte';
	import CourseCard from '$lib/custom/academy/course-card.svelte';
	import ActivityFeed from '$lib/custom/academy/activity-feed.svelte';
	import {
		stats,
		students,
		courses,
		type Student,
		type Course
	} from '$lib/custom/academy/store/data';

	let dashboardStats = $state({});
	let studentList: Student[] = $state([]);
	let courseList: Course[] = $state([]);
	let searchTerm = $state('');
	let filterStatus = $state('all');
	let viewMode = $state('grid');

	stats.subscribe((value) => {
		dashboardStats = value;
	});

	students.subscribe((value) => {
		studentList = value;
	});

	courses.subscribe((value) => {
		courseList = value;
	});

	let filteredCourses = $derived(
		courseList.filter((course) => {
			const matchesSearch =
				course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
				course.category.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesStatus = filterStatus === 'all' || course.status === filterStatus;

			return matchesSearch && matchesStatus;
		})
	);

	let filteredStudents = $derived(
		studentList.filter((student) => {
			const matchesSearch =
				student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
				student.course.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesStatus = filterStatus === 'all' || student.status === filterStatus;

			return matchesSearch && matchesStatus;
		})
	);
</script>

<Tabs.Root value="dashboard">
	<Tabs.List class="w-full">
		<Tabs.Trigger value="dashboard"><HomeIcon /> Dashboard</Tabs.Trigger>
		<Tabs.Trigger value="students"><UsersIcon /> Students</Tabs.Trigger>
		<Tabs.Trigger value="courses"><BookOpenIcon /> Courses</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="dashboard">
		<Card.Root class="flex-1">
			<!-- Header -->
			<Card.Header class="flex items-center justify-between">
				<div class="flex flex-col">
					<Card.Title>Dashboard</Card.Title>
					<Card.Description>Welcome back! Here's what's happening at your academy.</Card.Description
					>
				</div>
				<div class="flex space-x-3">
					<Button variant="secondary">
						<Plus />
						Add Student
					</Button>
					<Button variant="default">
						<Plus />
						New Course
					</Button>
				</div>
			</Card.Header>

			<Card.Content class="space-y-4">
				<!-- Stats Cards -->
				<div class="grid grid-cols-4 gap-4">
					<StatCard
						title="Total Students"
						value={dashboardStats.totalStudents?.toLocaleString() || '0'}
						change={12}
						icon={Users}
						color="primary"
					/>
					<StatCard
						title="Active Courses"
						value={dashboardStats.activeCourses || '0'}
						change={5}
						icon={BookOpen}
						color="secondary"
					/>
					<StatCard
						title="Completion Rate"
						value="{dashboardStats.completionRate || 0}%"
						change={8}
						icon={TrendingUp}
						color="accent"
					/>
					<StatCard
						title="Revenue"
						value="${dashboardStats.revenue?.toLocaleString() || '0'}"
						change={15}
						icon={DollarSign}
						color="warning"
					/>
				</div>

				<!-- Main Content Grid -->
				<Card.Root>
					<Card.Header class="flex items-center justify-between">
						<Card.Title>Recent Students</Card.Title>
						<Button>View All</Button>
					</Card.Header>
					<!-- Students Section -->
					<Card.Content class="space-y-4 lg:col-span-2">
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							{#each studentList as student, index (index)}
								<StudentCard {student} />
							{/each}
						</div>
						<!-- Activity Feed -->
						<ActivityFeed />
					</Card.Content>
				</Card.Root>

				<!-- Courses Section -->
				<Card.Root>
					<Card.Header class="flex items-center justify-between">
						<Card.Title>Course Overview</Card.Title>
						<Button>Manage Courses</Button>
					</Card.Header>
					<Card.Content class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{#each courseList as course, index (index)}
							<CourseCard {course} />
						{/each}
					</Card.Content>
				</Card.Root>
			</Card.Content>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="students">
		<Card.Root class="flex-1">
			<!-- Header -->
			<Card.Header class="flex items-center justify-between">
				<div>
					<Card.Title>Students</Card.Title>
					<Card.Description>Manage and monitor all enrolled students</Card.Description>
				</div>
				<div class="flex space-x-3">
					<Button variant="secondary">
						<Download />
						Export
					</Button>
					<Button variant="default">
						<Plus />
						Add Student
					</Button>
				</div>
			</Card.Header>

			<Card.Content class="space-y-4">
				<!-- Search and Filters -->
				<div class="flex items-center justify-between gap-4">
					<div class="relative flex-1">
						<Input type="text" placeholder="Search students..." bind:value={searchTerm} />
					</div>

					<div class="flex items-center space-x-3">
						<div class="flex items-center space-x-2">
							<Select.Root type="single" bind:value={filterStatus}>
								<Select.Trigger class="w-32">{filterStatus}</Select.Trigger>
								<Select.Content>
									<Select.Item value="all">All Status</Select.Item>
									<Select.Item value="active">Active</Select.Item>
									<Select.Item value="inactive">Inactive</Select.Item>
									<Select.Item value="graduated">Graduated</Select.Item>
								</Select.Content>
							</Select.Root>
						</div>
					</div>
				</div>

				<!-- Students Grid -->
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
					{#each filteredStudents as student, index (index)}
						<StudentCard {student} />
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="courses">
		<Card.Root class="flex-1">
			<!-- Header -->
			<Card.Header class="flex items-center justify-between">
				<div>
					<Card.Title>Courses</Card.Title>
					<Card.Description>Manage and monitor all academy courses</Card.Description>
				</div>
				<div class="flex space-x-3">
					<div class="flex items-center rounded-lg bg-gray-100">
						<Button
							class="rounded-md transition-colors {viewMode === 'grid'
								? 'bg-white shadow-sm'
								: 'hover:bg-gray-200'}"
							onclick={() => (viewMode = 'grid')}
						>
							<Grid />
						</Button>
						<Button
							class="rounded-md transition-colors {viewMode === 'list'
								? 'bg-white shadow-sm'
								: 'hover:bg-gray-200'}"
							onclick={() => (viewMode = 'list')}
						>
							<List />
						</Button>
					</div>
					<Button>
						<Plus />
						New Course
					</Button>
				</div>
			</Card.Header>

			<Card.Content class="space-y-4">
				<!-- Search and Filters -->
				<div class="flex flex-col gap-4 sm:flex-row">
					<div class="relative flex-1">
						<Input type="text" placeholder="Search courses..." bind:value={searchTerm} />
					</div>

					<div class="flex items-center space-x-3">
						<div class="flex items-center space-x-2">
							<Select.Root type="single" bind:value={filterStatus}>
								<Select.Trigger class="w-32">{filterStatus}</Select.Trigger>
								<Select.Content>
									<Select.Item value="all">All Status</Select.Item>
									<Select.Item value="active">Active</Select.Item>
									<Select.Item value="completed">Completed</Select.Item>
									<Select.Item value="upcoming">Upcoming</Select.Item>
								</Select.Content>
							</Select.Root>
						</div>
					</div>
				</div>

				<!-- Courses Grid/List -->
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
					{#each filteredCourses as course, index (index)}
						<CourseCard {course} />
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
