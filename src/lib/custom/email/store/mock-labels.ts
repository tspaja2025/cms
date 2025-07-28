import type { EmailLabel } from '$lib/custom/email/types';

export const mockLabels: EmailLabel[] = [
	{
		id: 'work',
		name: 'Work',
		color: 'bg-blue-500'
	},
	{
		id: 'personal',
		name: 'Personal',
		color: 'bg-green-500'
	},
	{
		id: 'family',
		name: 'Family',
		color: 'bg-purple-500'
	},
	{
		id: 'social',
		name: 'Social',
		color: 'bg-pink-500'
	},
	{
		id: 'important',
		name: 'Important',
		color: 'bg-red-500'
	},
	{
		id: 'urgent',
		name: 'Urgent',
		color: 'bg-orange-500'
	},
	{
		id: 'newsletters',
		name: 'Newsletters',
		color: 'bg-yellow-500'
	},
	{
		id: 'promotions',
		name: 'Promotions',
		color: 'bg-indigo-500'
	}
];
