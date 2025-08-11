import type { ChartConfig } from "$lib/components/ui/chart";

export const metricsData = [
	{
		title: 'Total Revenue',
		value: '$54,239',
		change: 8.2,
		trend: 'up',
		icon: 'DollarSign',
		color: 'text-secondary-600'
	},
	{
		title: 'Active Users',
		value: '12,847',
		change: 4.6,
		trend: 'up',
		icon: 'Users',
		color: 'text-primary-600'
	},
	{
		title: 'Total Orders',
		value: '1,429',
		change: -2.1,
		trend: 'down',
		icon: 'ShoppingCart',
		color: 'text-accent-600'
	},
	{
		title: 'Conversion Rate',
		value: '3.42%',
		change: 1.8,
		trend: 'up',
		icon: 'TrendingUp',
		color: 'text-orange-600'
	}
];

export const revenueOverviewData = [
	{ date: new Date('2024-01-01'), revenue: 186 },
	{ date: new Date('2024-02-01'), revenue: 305 },
	{ date: new Date('2024-03-01'), revenue: 237 },
	{ date: new Date('2024-04-01'), revenue: 73 },
	{ date: new Date('2024-05-01'), revenue: 209 },
	{ date: new Date('2024-06-01'), revenue: 214 }
];

export const revenueOverviewConfig = {
	revenue: { label: 'Revenue', color: 'var(--chart-1)' }
} satisfies ChartConfig;

export const ordersByMonthData = [
	{ month: 'January', orders: 186 },
	{ month: 'February', orders: 305 },
	{ month: 'March', orders: 237 },
	{ month: 'April', orders: 73 },
	{ month: 'May', orders: 209 },
	{ month: 'June', orders: 214 }
];

export const ordersByMonthConfig = {
	orders: { label: 'Orders', color: 'var(--chart-1)' }
} satisfies ChartConfig;

export const trafficSourcesData = [
	{ source: 'organic', sources: 275, color: 'var(--color-organic)' },
	{ source: 'direct', sources: 200, color: 'var(--color-direct)' },
	{ source: 'social', sources: 287, color: 'var(--color-social)' },
	{ source: 'email', sources: 173, color: 'var(--color-email)' },
	{ source: 'other', sources: 190, color: 'var(--color-other)' }
];

export const trafficSourcesConfig = {
	sources: { label: 'Source' },
	organic: { label: 'Organic', color: 'var(--chart-1)' },
	direct: { label: 'Direct', color: 'var(--chart-2)' },
	social: { label: 'Social', color: 'var(--chart-3)' },
	email: { label: 'Email', color: 'var(--chart-4)' },
	other: { label: 'Other', color: 'var(--chart-5)' }
} satisfies ChartConfig;
