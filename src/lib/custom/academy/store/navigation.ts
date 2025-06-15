import { writable } from 'svelte/store';

export type Page = 'dashboard' | 'courses' | 'course-details';

export const currentPage = writable<Page>('dashboard');
export const selectedCourseId = writable<number | null>(null);

export function navigateTo(page: Page, courseId?: number) {
	currentPage.set(page);
	if (courseId !== undefined) {
		selectedCourseId.set(courseId);
	}
}
