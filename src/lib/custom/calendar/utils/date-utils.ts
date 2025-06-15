import { format, isSameMonth, isToday, getHours, getMinutes } from 'date-fns';

// Format date to display in month view
export function formatMonthDay(date: Date): string {
	return format(date, 'd');
}

// Format date for header
export function formatHeaderDate(date: Date): string {
	return format(date, 'EEEE, MMMM d, yyyy');
}

// Format time for event display
export function formatEventTime(date: Date): string {
	return format(date, 'h:mm a');
}

// Get time as a numeric value for positioning (e.g., 9.5 for 9:30)
export function getTimeValue(date: Date): number {
	return getHours(date) + getMinutes(date) / 60;
}

// Check if a date is on weekend
export function isWeekend(date: Date): boolean {
	const day = date.getDay();
	return day === 0 || day === 6;
}

// Get class names for a calendar day
export function getDayClassNames(date: Date, currentMonth: Date): string {
	const baseClasses = 'h-full min-h-[80px] p-1 border border-gray-200';

	if (isToday(date)) {
		return `${baseClasses} bg-primary-50`;
	}

	if (!isSameMonth(date, currentMonth)) {
		return `${baseClasses} bg-gray-50 text-gray-400`;
	}

	if (isWeekend(date)) {
		return `${baseClasses} bg-gray-50`;
	}

	return baseClasses;
}

// Get hour labels for day view
export function getHourLabels(): string[] {
	return Array.from({ length: 24 }, (_, i) => format(new Date().setHours(i, 0, 0, 0), 'h a'));
}
