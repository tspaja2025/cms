import { writable } from 'svelte/store';

export interface Student {
	id: number;
	name: string;
	email: string;
	course: string;
	progress: number;
	status: 'active' | 'inactive' | 'graduated';
	avatar: string;
	enrollDate: string;
}

export interface Course {
	id: number;
	title: string;
	instructor: string;
	students: number;
	progress: number;
	duration: string;
	category: string;
	status: 'active' | 'completed' | 'upcoming';
}

export interface Activity {
	id: number;
	type: 'enrollment' | 'completion' | 'assignment' | 'announcement';
	title: string;
	description: string;
	timestamp: string;
	user: string;
}

export interface Stats {
	totalStudents: number;
	activeCourses: number;
	completionRate: number;
	revenue: number;
}

// Mock data
const mockStudents: Student[] = [
	{
		id: 1,
		name: 'Sarah Johnson',
		email: 'sarah.johnson@email.com',
		course: 'Web Development Bootcamp',
		progress: 85,
		status: 'active',
		avatar:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
		enrollDate: '2024-01-15'
	},
	{
		id: 2,
		name: 'Michael Chen',
		email: 'michael.chen@email.com',
		course: 'Data Science Fundamentals',
		progress: 62,
		status: 'active',
		avatar:
			'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
		enrollDate: '2024-02-03'
	},
	{
		id: 3,
		name: 'Emma Williams',
		email: 'emma.williams@email.com',
		course: 'UX Design Masterclass',
		progress: 100,
		status: 'graduated',
		avatar:
			'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
		enrollDate: '2023-11-20'
	},
	{
		id: 4,
		name: 'David Rodriguez',
		email: 'david.rodriguez@email.com',
		course: 'Mobile App Development',
		progress: 43,
		status: 'active',
		avatar:
			'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
		enrollDate: '2024-03-10'
	}
];

const mockCourses: Course[] = [
	{
		id: 1,
		title: 'Web Development Bootcamp',
		instructor: 'John Smith',
		students: 156,
		progress: 78,
		duration: '16 weeks',
		category: 'Technology',
		status: 'active'
	},
	{
		id: 2,
		title: 'Data Science Fundamentals',
		instructor: 'Dr. Lisa Park',
		students: 89,
		progress: 65,
		duration: '12 weeks',
		category: 'Data Science',
		status: 'active'
	},
	{
		id: 3,
		title: 'UX Design Masterclass',
		instructor: 'Maria Garcia',
		students: 134,
		progress: 92,
		duration: '10 weeks',
		category: 'Design',
		status: 'completed'
	},
	{
		id: 4,
		title: 'Mobile App Development',
		instructor: 'Alex Johnson',
		students: 67,
		progress: 34,
		duration: '14 weeks',
		category: 'Technology',
		status: 'active'
	}
];

const mockActivities: Activity[] = [
	{
		id: 1,
		type: 'enrollment',
		title: 'New Student Enrollment',
		description: 'Jessica Martinez enrolled in Web Development Bootcamp',
		timestamp: '2024-01-20T10:30:00Z',
		user: 'Jessica Martinez'
	},
	{
		id: 2,
		type: 'completion',
		title: 'Course Completed',
		description: 'Emma Williams completed UX Design Masterclass',
		timestamp: '2024-01-20T09:15:00Z',
		user: 'Emma Williams'
	},
	{
		id: 3,
		type: 'assignment',
		title: 'Assignment Submitted',
		description: 'Final project submitted for Data Science Fundamentals',
		timestamp: '2024-01-19T16:45:00Z',
		user: 'Michael Chen'
	},
	{
		id: 4,
		type: 'announcement',
		title: 'New Course Available',
		description: 'Advanced Machine Learning course now available for enrollment',
		timestamp: '2024-01-19T14:20:00Z',
		user: 'Admin'
	}
];

const mockStats: Stats = {
	totalStudents: 1247,
	activeCourses: 23,
	completionRate: 87,
	revenue: 156780
};

export const students = writable<Student[]>(mockStudents);
export const courses = writable<Course[]>(mockCourses);
export const activities = writable<Activity[]>(mockActivities);
export const stats = writable<Stats>(mockStats);
