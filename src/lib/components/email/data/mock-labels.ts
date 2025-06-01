import type { EmailLabel } from '$lib/components/email/types';

export const mockLabels: EmailLabel[] = [
	{
		id: 'work',
		name: 'Work',
		color: 'blue'
	},
	{
		id: 'personal',
		name: 'Personal',
		color: 'green'
	},
	{
		id: 'family',
		name: 'Family',
		color: 'purple'
	},
	{
		id: 'social',
		name: 'Social',
		color: 'pink'
	},
	{
		id: 'important',
		name: 'Important',
		color: 'red'
	},
	{
		id: 'urgent',
		name: 'Urgent',
		color: 'orange'
	},
	{
		id: 'newsletters',
		name: 'Newsletters',
		color: 'yellow'
	},
	{
		id: 'promotions',
		name: 'Promotions',
		color: 'indigo'
	}
];
