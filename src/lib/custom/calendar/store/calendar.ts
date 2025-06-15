import { writable, derived } from 'svelte/store';
import {
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	eachDayOfInterval,
	format,
	addMonths,
	subMonths,
	getDay,
	isSameMonth,
	isToday
} from 'date-fns';
import type { CalendarView } from '$lib/custom/components/calendar/types';

// Create stores
export const currentDate = writable(new Date());
export const calendarView = writable<CalendarView>('month');

// Derived store for the days in the current month view
export const monthDays = derived(currentDate, ($currentDate) => {
	const monthStart = startOfMonth($currentDate);
	const monthEnd = endOfMonth($currentDate);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const days = eachDayOfInterval({ start: startDate, end: endDate });

	return days.map((day) => ({
		date: day,
		dayNumber: day.getDate(),
		isCurrentMonth: isSameMonth(day, $currentDate),
		isToday: isToday(day),
		dayOfWeek: getDay(day)
	}));
});

// Derived store for the month and year display
export const currentMonthYear = derived(currentDate, ($currentDate) => {
	return format($currentDate, 'MMMM yyyy');
});

// Navigation functions
export function goToPreviousMonth() {
	currentDate.update((date) => subMonths(date, 1));
}

export function goToNextMonth() {
	currentDate.update((date) => addMonths(date, 1));
}

export function goToToday() {
	currentDate.set(new Date());
}
