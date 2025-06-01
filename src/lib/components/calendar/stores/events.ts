import { writable, derived } from 'svelte/store';
import type { CalendarEvent, EventCategory } from '$lib/components/calendar/types';
import { isSameDay } from 'date-fns';

// Initial sample events
const initialEvents: CalendarEvent[] = [
	{
		id: '1',
		title: 'Team Meeting',
		description: 'Weekly team sync',
		start: new Date(new Date().setHours(10, 0, 0, 0)),
		end: new Date(new Date().setHours(11, 0, 0, 0)),
		allDay: false,
		category: 'work'
	},
	{
		id: '2',
		title: 'Lunch with Sarah',
		description: 'Discuss project collaboration',
		start: new Date(new Date().setHours(12, 30, 0, 0)),
		end: new Date(new Date().setHours(13, 30, 0, 0)),
		allDay: false,
		category: 'personal'
	},
	{
		id: '3',
		title: 'Doctor Appointment',
		description: 'Annual check-up',
		start: new Date(new Date().setDate(new Date().getDate() + 2)),
		end: new Date(new Date().setDate(new Date().getDate() + 2)),
		allDay: true,
		category: 'personal'
	}
];

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
export function getEventsForDay(date: Date, eventList: CalendarEvent[]) {
	return eventList.filter((event) => isSameDay(event.start, date));
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
