export interface CalendarEvent {
	id: string;
	title: string;
	description?: string;
	start: Date;
	end: Date;
	allDay: boolean;
	category: EventCategory;
}

export type EventCategory = 'work' | 'personal' | 'family' | 'other';

export type CalendarView = 'month' | 'week' | 'day';
