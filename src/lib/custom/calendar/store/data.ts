import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';

export const weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const categories = [
	{ value: 'work', label: 'Work', color: 'bg-blue-500' },
	{ value: 'personal', label: 'Personal', color: 'bg-green-500' },
	{ value: 'family', label: 'Family', color: 'bg-purple-500' },
	{ value: 'other', label: 'Other', color: 'bg-neutral-500' }
];

export const currentDate = today(getLocalTimeZone());

export const headerDateFormatter = new DateFormatter('en-US', {
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});

export function formatHeaderDate(date: CalendarDate): string {
	return headerDateFormatter.format(date.toDate(getLocalTimeZone()));
}

// Calendar grid
// Helper functions
export function getDaysInMonth(year: number, month: number): number {
	return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
	return new Date(year, month, 1).getDay();
}

// Get current month info
export const currentYear = currentDate.year;
export const currentMonth = currentDate.month - 1; // JavaScript months are 0-indexed
export const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
export const firstDayOfCurrentMonth = getFirstDayOfMonth(currentYear, currentMonth);

// Get previous month info
export const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
export const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
export const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

// Calculate days to show from previous month
export const daysFromPrevMonth = firstDayOfCurrentMonth;
export const prevMonthStartDay = daysInPrevMonth - daysFromPrevMonth + 1;

// Calculate days to show from next month
export const totalCells = Math.ceil((daysFromPrevMonth + daysInCurrentMonth) / 7) * 7;
export const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInCurrentMonth);
