import {
	type CalendarDate,
	type CalendarDateTime,
	getLocalTimeZone,
	isToday as isTodayIntl,
	today
} from '@internationalized/date';
import { DateFormatter } from '@internationalized/date';

// Create formatters for reuse
const monthDayFormatter = new DateFormatter('en-US', { day: 'numeric' });
const headerDateFormatter = new DateFormatter('en-US', {
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});
const eventTimeFormatter = new DateFormatter('en-US', {
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});
const hourLabelFormatter = new DateFormatter('en-US', { hour: 'numeric', hour12: true });

// Format date to display in month view
export function formatMonthDay(date: CalendarDate): string {
	return monthDayFormatter.format(date.toDate(getLocalTimeZone()));
}

// Format date for header
export function formatHeaderDate(date: CalendarDate): string {
	return headerDateFormatter.format(date.toDate(getLocalTimeZone()));
}

// Format time for event display
export function formatEventTime(date: Date | CalendarDateTime): string {
	const jsDate = date instanceof Date ? date : date.toDate(getLocalTimeZone());
	return eventTimeFormatter.format(jsDate);
}

// Get time as a numeric value for positioning (e.g., 9.5 for 9:30)
export function getTimeValue(date: CalendarDate): number {
	const jsDate = date.toDate(getLocalTimeZone());
	return jsDate.getHours() + jsDate.getMinutes() / 60;
}

// Check if a date is on weekend
export function isWeekend(date: CalendarDate): boolean {
	const jsDate = date.toDate(getLocalTimeZone());
	const day = jsDate.getDay();
	return day === 0 || day === 6;
}

// Get class names for a calendar day
export function getDayClassNames(date: CalendarDate, currentMonth: CalendarDate): string {
	const baseClasses = 'h-full min-h-[80px] p-1 border border-gray-200';
	const jsDate = date.toDate(getLocalTimeZone());

	if (isTodayIntl(date, getLocalTimeZone())) {
		return `${baseClasses} bg-primary-50`;
	}

	if (date.month !== currentMonth.month) {
		return `${baseClasses} bg-gray-50 text-gray-400`;
	}

	if (isWeekend(date)) {
		return `${baseClasses} bg-gray-50`;
	}

	return baseClasses;
}

// Get hour labels for day view
export function getHourLabels(): string[] {
	return Array.from({ length: 24 }, (_, i) => {
		const date = today(getLocalTimeZone()).set({ hour: i, minute: 0, second: 0, millisecond: 0 });
		return hourLabelFormatter.format(date.toDate(getLocalTimeZone()));
	});
}
