import { writable, derived } from 'svelte/store';
import {
	type CalendarDate,
	DateFormatter,
	getLocalTimeZone,
	isToday as isTodayIntl,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	today
} from '@internationalized/date';

type CalendarView = 'month' | 'week' | 'day';

// Create stores - using CalendarDate as the base type
export const currentDate = writable<CalendarDate>(today(getLocalTimeZone()));
export const calendarView = writable<CalendarView>('month');

// Formatter for month/year display
const monthYearFormatter = new DateFormatter('en-US', { month: 'long', year: 'numeric' });

// Derived store for the days in the current month view
export const monthDays = derived(currentDate, ($currentDate) => {
	const monthStart = startOfMonth($currentDate);
	const monthEnd = endOfMonth($currentDate);
	// Add locale and firstDayOfWeek parameters (0 = Sunday)
	const startDate = startOfWeek(monthStart, 'en-US', 0);
	const endDate = endOfWeek(monthEnd, 'en-US', 0);

	const days: CalendarDate[] = [];
	let current = startDate;

	while (current.compare(endDate) <= 0) {
		days.push(current);
		current = current.add({ days: 1 });
	}

	return days.map((day) => ({
		date: day,
		dayNumber: day.day,
		isCurrentMonth: day.month === $currentDate.month,
		isToday: isTodayIntl(day, getLocalTimeZone()),
		dayOfWeek: day.dayOfWeek
	}));
});

// Derived store for the month and year display
export const currentMonthYear = derived(currentDate, ($currentDate) => {
	return monthYearFormatter.format($currentDate.toDate(getLocalTimeZone()));
});

// Navigation functions
export function goToPreviousMonth() {
	currentDate.update((date) => date.subtract({ months: 1 }));
}

export function goToNextMonth() {
	currentDate.update((date) => date.add({ months: 1 }));
}

export function goToToday() {
	currentDate.set(today(getLocalTimeZone()));
}
