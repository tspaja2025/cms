import { writable, derived } from 'svelte/store';
import {
	CalendarDate,
	CalendarDateTime,
	isSameDay,
	toCalendarDateTime,
	ZonedDateTime
} from '@internationalized/date';

interface CalendarEvent {
	id: string;
	title: string;
	description?: string;
	start: CalendarDateTime;
	end: CalendarDateTime;
	allDay: boolean;
	category: EventCategory;
}

type EventCategory = 'work' | 'personal' | 'family' | 'other';

// Helper function to create a CalendarDateTime from a Date
function dateToCalendarDateTime(date: Date): CalendarDateTime {
	return new CalendarDateTime(
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds()
	);
}

// Helper function to create an all-day CalendarDateTime from a Date
function dateToAllDayCalendarDate(date: Date): CalendarDate {
	return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

// Initial sample events
const initialEvents: CalendarEvent[] = [
	{
		id: '1',
		title: 'Team Meeting',
		description: 'Weekly team sync',
		start: dateToCalendarDateTime(new Date(new Date().setHours(10, 0, 0, 0))),
		end: dateToCalendarDateTime(new Date(new Date().setHours(11, 0, 0, 0))),
		allDay: false,
		category: 'work'
	},
	{
		id: '2',
		title: 'Lunch with Sarah',
		description: 'Discuss project collaboration',
		start: dateToCalendarDateTime(new Date(new Date().setHours(12, 30, 0, 0))),
		end: dateToCalendarDateTime(new Date(new Date().setHours(13, 30, 0, 0))),
		allDay: false,
		category: 'personal'
	},
	{
		id: '3',
		title: 'Doctor Appointment',
		description: 'Annual check-up',
		start: dateToAllDayCalendarDate(new Date(new Date().setDate(new Date().getDate() + 2))),
		end: dateToAllDayCalendarDate(new Date(new Date().setDate(new Date().getDate() + 2))),
		allDay: true,
		category: 'personal'
	}
].map((event) => ({
	...event,
	// Convert CalendarDate to CalendarDateTime for all-day events
	start: event.allDay ? toCalendarDateTime(event.start as CalendarDate) : event.start,
	end: event.allDay ? toCalendarDateTime(event.end as CalendarDate) : event.end
}));

// Create event store
export const events = writable<CalendarEvent[]>(initialEvents);

// Create filter store
export const categoryFilters = writable<EventCategory[]>([]);

// Derived store for filtered events
export const filteredEvents = derived([events, categoryFilters], ([$events, $categoryFilters]) => {
	if ($categoryFilters.length === 0) {
		return $events;
	}
	return $events.filter((event) => $categoryFilters.includes(event.category));
});

// Function to get events for a specific day
export function getEventsForDay(date: CalendarDate, eventList: CalendarEvent[]) {
	return eventList.filter((event) => {
		// Convert CalendarDate to CalendarDateTime for comparison if needed
		const eventDate =
			event.start instanceof CalendarDateTime || event.start instanceof ZonedDateTime
				? event.start
				: new CalendarDateTime(date.year, date.month, date.day);

		return isSameDay(eventDate, date);
	});
}

// Function to add a new event
export function addEvent(event: Omit<CalendarEvent, 'id'>) {
	const newEvent: CalendarEvent = {
		...event,
		id: Math.random().toString(36).substring(2, 9)
	};

	events.update((items) => [...items, newEvent]);
	return newEvent;
}

// Function to delete an event
export function deleteEvent(id: string) {
	events.update((items) => items.filter((item) => item.id !== id));
}

// Function to update an event
export function updateEvent(updatedEvent: CalendarEvent) {
	events.update((items) =>
		items.map((item) => (item.id === updatedEvent.id ? updatedEvent : item))
	);
}

// Toggle category filter
export function toggleCategoryFilter(category: EventCategory) {
	categoryFilters.update((filters) => {
		if (filters.includes(category)) {
			return filters.filter((c) => c !== category);
		} else {
			return [...filters, category];
		}
	});
}
