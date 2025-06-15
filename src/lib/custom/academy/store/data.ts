export interface Course {
	id: number;
	title: string;
	instructor: string;
	description: string;
	category: string;
	duration: string;
	progress: number;
	enrolled: boolean;
	rating: number;
	students: number;
	image: string;
	lessons: number;
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	tags: string[];
	chapters: Chapter[];
}

export interface Chapter {
	id: number;
	title: string;
	duration: string;
	completed: boolean;
	lessons: Lesson[];
}

export interface Lesson {
	id: number;
	title: string;
	duration: string;
	completed: boolean;
	type: 'video' | 'reading' | 'quiz';
}

export const courses: Course[] = [
	{
		id: 1,
		title: 'Complete Web Development Bootcamp',
		instructor: 'Sarah Johnson',
		description:
			'Learn full-stack web development from scratch with HTML, CSS, JavaScript, React, Node.js, and databases.',
		category: 'Web Development',
		duration: '42 hours',
		progress: 68,
		enrolled: true,
		rating: 4.8,
		students: 15420,
		image:
			'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
		lessons: 156,
		level: 'Beginner',
		tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
		chapters: [
			{
				id: 1,
				title: 'HTML Fundamentals',
				duration: '3 hours',
				completed: true,
				lessons: [
					{
						id: 1,
						title: 'Introduction to HTML',
						duration: '15 min',
						completed: true,
						type: 'video'
					},
					{ id: 2, title: 'HTML Structure', duration: '20 min', completed: true, type: 'video' },
					{ id: 3, title: 'Forms and Input', duration: '18 min', completed: true, type: 'video' }
				]
			},
			{
				id: 2,
				title: 'CSS Styling',
				duration: '4 hours',
				completed: true,
				lessons: [
					{ id: 4, title: 'CSS Basics', duration: '25 min', completed: true, type: 'video' },
					{ id: 5, title: 'Flexbox Layout', duration: '30 min', completed: true, type: 'video' },
					{ id: 6, title: 'CSS Grid', duration: '28 min', completed: false, type: 'video' }
				]
			},
			{
				id: 3,
				title: 'JavaScript Programming',
				duration: '8 hours',
				completed: false,
				lessons: [
					{
						id: 7,
						title: 'Variables and Data Types',
						duration: '22 min',
						completed: false,
						type: 'video'
					},
					{
						id: 8,
						title: 'Functions and Scope',
						duration: '35 min',
						completed: false,
						type: 'video'
					},
					{ id: 9, title: 'DOM Manipulation', duration: '40 min', completed: false, type: 'video' }
				]
			}
		]
	},
	{
		id: 2,
		title: 'Data Science with Python',
		instructor: 'Dr. Michael Chen',
		description:
			'Master data science concepts using Python, pandas, numpy, and machine learning libraries.',
		category: 'Data Science',
		duration: '35 hours',
		progress: 23,
		enrolled: true,
		rating: 4.9,
		students: 8950,
		image:
			'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
		lessons: 98,
		level: 'Intermediate',
		tags: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
		chapters: [
			{
				id: 1,
				title: 'Python Basics for Data Science',
				duration: '5 hours',
				completed: true,
				lessons: [
					{
						id: 1,
						title: 'Python Environment Setup',
						duration: '12 min',
						completed: true,
						type: 'video'
					},
					{
						id: 2,
						title: 'Data Types and Structures',
						duration: '25 min',
						completed: true,
						type: 'video'
					}
				]
			}
		]
	},
	{
		id: 3,
		title: 'UI/UX Design Masterclass',
		instructor: 'Emma Rodriguez',
		description:
			'Learn user interface and user experience design principles, prototyping, and design thinking.',
		category: 'Design',
		duration: '28 hours',
		progress: 45,
		enrolled: true,
		rating: 4.7,
		students: 12300,
		image:
			'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
		lessons: 72,
		level: 'Beginner',
		tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
		chapters: [
			{
				id: 1,
				title: 'Design Fundamentals',
				duration: '4 hours',
				completed: true,
				lessons: [
					{ id: 1, title: 'Design Principles', duration: '20 min', completed: true, type: 'video' },
					{ id: 2, title: 'Color Theory', duration: '18 min', completed: true, type: 'video' }
				]
			}
		]
	},
	{
		id: 4,
		title: 'Digital Marketing Strategy',
		instructor: 'Alex Thompson',
		description:
			'Comprehensive guide to digital marketing including SEO, social media, and content marketing.',
		category: 'Marketing',
		duration: '22 hours',
		progress: 0,
		enrolled: false,
		rating: 4.6,
		students: 9870,
		image:
			'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
		lessons: 64,
		level: 'Beginner',
		tags: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
		chapters: []
	}
];

export function getCourseById(id: number): Course | undefined {
	return courses.find((course) => course.id === id);
}

export function getEnrolledCourses(): Course[] {
	return courses.filter((course) => course.enrolled);
}

export function getDashboardStats() {
	const enrolled = getEnrolledCourses();
	const totalProgress = enrolled.reduce((sum, course) => sum + course.progress, 0);
	const avgProgress = enrolled.length > 0 ? Math.round(totalProgress / enrolled.length) : 0;
	const completedCourses = enrolled.filter((course) => course.progress === 100).length;
	const inProgressCourses = enrolled.filter(
		(course) => course.progress > 0 && course.progress < 100
	).length;

	return {
		totalCourses: enrolled.length,
		completedCourses,
		inProgressCourses,
		averageProgress: avgProgress
	};
}
