import type { ChartConfig } from '$lib/components/ui/chart';
import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';
import type { Invoice, InvoiceStatus, LineItem } from '$lib/types';
import { derived, writable } from 'svelte/store';
import CheckIcon from '@lucide/svelte/icons/check';
import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';
import SendHorizontalIcon from '@lucide/svelte/icons/send-horizontal';
import MailIcon from '@lucide/svelte/icons/mail';
import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
import UserIcon from '@lucide/svelte/icons/user';
import UsersIcon from '@lucide/svelte/icons/users';
import FolderEditIcon from '@lucide/svelte/icons/folder-edit';
import ShareIcon from '@lucide/svelte/icons/share';
import BriefcaseBusinessIcon from '@lucide/svelte/icons/briefcase-business';
import ImageIcon from '@lucide/svelte/icons/image';
import LanguagesIcon from '@lucide/svelte/icons/languages';
import PaletteIcon from '@lucide/svelte/icons/palette';

// CRM
// Total Sales
export const totalSalesData = [
	{ date: new Date('2024-01-01'), sales: 186 },
	{ date: new Date('2024-02-01'), sales: 305 },
	{ date: new Date('2024-03-01'), sales: 237 },
	{ date: new Date('2024-04-01'), sales: 73 },
	{ date: new Date('2024-05-01'), sales: 209 },
	{ date: new Date('2024-06-01'), sales: 214 }
];

export const totalSalesConfig = {
	sales: { label: 'Sales', color: 'var(--chart-1)' }
} satisfies ChartConfig;

// Revenue Report
export const revenueReportData = [
	{ month: 'January', revenue: 186 },
	{ month: 'February', revenue: 205 },
	{ month: 'March', revenue: -207 },
	{ month: 'April', revenue: 173 },
	{ month: 'May', revenue: -209 },
	{ month: 'June', revenue: 214 }
];

export const revenueReportConfig = {
	revenue: { label: 'Revenue' }
} satisfies ChartConfig;

// Sales Overview
export const salesOverviewData = [
	{ goods: 'apparel', sales: 275, color: 'var(--color-apparel)' },
	{ goods: 'electronics', sales: 200, color: 'var(--color-electronics)' },
	{ goods: 'fmcg', sales: 287, color: 'var(--color-fmcg)' },
	{ goods: 'other', sales: 190, color: 'var(--color-other)' }
];

export const salesOverviewConfig = {
	sales: { label: 'Sales' },
	apparel: { label: 'Apparel', color: 'var(--chart-1)' },
	electronics: { label: 'Electronics', color: 'var(--chart-2)' },
	fmcg: { label: 'FMCG', color: 'var(--chart-3)' },
	other: { label: 'Other', color: 'var(--chart-4)' }
} satisfies ChartConfig;

export const totalSales = salesOverviewData.reduce((acc, curr) => acc + curr.sales, 0);

// Weekly Sales
export const weeklySalesData = [
	{ day: 'S', sales: 186 },
	{ day: 'M', sales: 305 },
	{ day: 'T', sales: 237 },
	{ day: 'W', sales: 73 },
	{ day: 'T', sales: 209 },
	{ day: 'F', sales: 214 },
	{ day: 'S', sales: 186 }
];

export const weeklySalesConfig = {
	sales: { label: 'Sales', color: 'var(--chart-1)' }
} satisfies ChartConfig;

// Meeting Schedule
export const meetingSchelude = [
	{
		title: 'First Schelude',
		date: '7/21/2025',
		badgeText: 'Business',
		badgeColor: 'bg-purple-300 text-purple-700'
	},
	{
		title: 'Second Schelude',
		date: '7/22/2025',
		badgeText: 'Meditation',
		badgeColor: 'bg-yellow-300 text-yellow-700'
	},
	{
		title: 'Third Schelude',
		date: '7/23/2025',
		badgeText: 'Meetup',
		badgeColor: 'bg-blue-300 text-blue-700'
	},
	{
		title: 'Fourth Schelude',
		date: '7/24/2025',
		badgeText: 'Dinner',
		badgeColor: 'bg-red-300 text-red-700'
	}
];

// ANALYTICS

// Revenue Overview
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

// Orders by Month
export const ordersByMonthData = [
	{ month: 'January', desktop: 186 },
	{ month: 'February', desktop: 305 },
	{ month: 'March', desktop: 237 },
	{ month: 'April', desktop: 73 },
	{ month: 'May', desktop: 209 },
	{ month: 'June', desktop: 214 }
];

export const ordersByMonthConfig = {
	desktop: { label: 'Desktop', color: 'var(--chart-1)' }
} satisfies ChartConfig;

// Traffic Sources
export const trafficSourcesData = [
	{ source: 'organic', traffic: 275, color: 'var(--color-organic)' },
	{ source: 'direct', traffic: 200, color: 'var(--color-direct)' },
	{ source: 'social', traffic: 287, color: 'var(--color-social)' },
	{ source: 'email', traffic: 173, color: 'var(--color-email)' },
	{ source: 'other', traffic: 190, color: 'var(--color-other)' }
];

export const trafficSourcesConfig = {
	traffic: { label: 'Traffic' },
	organic: { label: 'Organic', color: 'var(--chart-1)' },
	direct: { label: 'Direct', color: 'var(--chart-2)' },
	social: { label: 'Social Media', color: 'var(--chart-3)' },
	email: { label: 'email', color: 'var(--chart-4)' },
	other: { label: 'Other', color: 'var(--chart-5)' }
} satisfies ChartConfig;

export const totalTrafficSources = trafficSourcesData.reduce((acc, curr) => acc + curr.traffic, 0);

// Email

interface Email {
	title: string;
	description: string;
	action: string;
	text: string;
	badges: {
		badge: string;
		variant: 'secondary' | 'outline' | 'destructive' | 'default' | undefined;
	}[];
	active: boolean;
}

export const emails: Email[] = [
	{
		title: 'William Smith',
		description: 'Meeting Tomorrow',
		action: '2 years ago',
		text: "Hi, let's have a meeting ...",
		badges: [
			{ badge: 'meeting', variant: 'secondary' },
			{ badge: 'work', variant: 'outline' },
			{ badge: 'important', variant: 'destructive' }
		],
		active: true
	},
	{
		title: 'Alice Smith',
		description: 'Re: Project Update',
		action: '2 years ago',
		text: 'Thank you for the proje ...',
		badges: [
			{ badge: 'work', variant: 'outline' },
			{ badge: 'important', variant: 'destructive' }
		],
		active: false
	},
	{
		title: 'Bob Johnson',
		description: 'Weekend Plans',
		action: '2 years ago',
		text: 'Any plans for the wee ...',
		badges: [{ badge: 'personal', variant: 'outline' }],
		active: false
	},
	{
		title: 'Emily Davis',
		description: 'Re: Question about Budget',
		action: '2 years ago',
		text: 'I have a question about ...',
		badges: [
			{ badge: 'work', variant: 'outline' },
			{ badge: 'budget', variant: 'secondary' }
		],
		active: false
	}
];

// Calendar
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

// Ecommerce
export const eCommercesalesOverviewData = [
	{ date: new Date('2024-01-01'), apparel: 186, electronics: 209, fmcg: 120, other: 186 },
	{ date: new Date('2024-02-01'), apparel: 305, electronics: 214, fmcg: 190, other: 305 },
	{ date: new Date('2024-03-01'), apparel: 237, electronics: 80, fmcg: 130, other: 237 },
	{ date: new Date('2024-04-01'), apparel: 73, electronics: 200, fmcg: 140, other: 73 }
];

export const eCommercesalesOverviewConfig = {
	apparel: { label: 'Apparel', color: 'var(--chart-1)' },
	electronics: { label: 'Electronics', color: 'var(--chart-2)' },
	fmcg: { label: 'FMCG', color: 'var(--chart-3)' },
	other: { label: 'Other', color: 'var(--chart-4)' }
} satisfies ChartConfig;

// Recent Orders
export const recentOrders = [
	{
		id: 'ORD-4872',
		customer: 'Sarah Wilson',
		date: '2023-08-15T10:30:00',
		total: 129.99,
		status: 'Delivered',
		items: 3,
		email: 'sarah.w@example.com'
	},
	{
		id: 'ORD-4871',
		customer: 'Michael Brown',
		date: '2023-08-15T09:45:00',
		total: 79.85,
		status: 'Processing',
		items: 2,
		email: 'michael.b@example.com'
	},
	{
		id: 'ORD-4870',
		customer: 'Emma Johnson',
		date: '2023-08-15T08:20:00',
		total: 245.0,
		status: 'Pending',
		items: 4,
		email: 'emma.j@example.com'
	},
	{
		id: 'ORD-4869',
		customer: 'David Lee',
		date: '2023-08-14T16:50:00',
		total: 189.99,
		status: 'Delivered',
		items: 1,
		email: 'david.l@example.com'
	},
	{
		id: 'ORD-4868',
		customer: 'Jennifer Smith',
		date: '2023-08-14T14:25:00',
		total: 62.5,
		status: 'Cancelled',
		items: 2,
		email: 'jennifer.s@example.com'
	},
	{
		id: 'ORD-4867',
		customer: 'Robert Johnson',
		date: '2023-08-13T11:15:00',
		total: 149.99,
		status: 'Delivered',
		items: 1,
		email: 'robert.j@example.com'
	},
	{
		id: 'ORD-4866',
		customer: 'Lisa Anderson',
		date: '2023-08-13T10:05:00',
		total: 95.5,
		status: 'Processing',
		items: 3,
		email: 'lisa.a@example.com'
	},
	{
		id: 'ORD-4865',
		customer: 'Thomas Wilson',
		date: '2023-08-12T15:30:00',
		total: 210.25,
		status: 'Delivered',
		items: 2,
		email: 'thomas.w@example.com'
	},
	{
		id: 'ORD-4864',
		customer: 'Jessica Miller',
		date: '2023-08-12T09:45:00',
		total: 75.99,
		status: 'Delivered',
		items: 1,
		email: 'jessica.m@example.com'
	},
	{
		id: 'ORD-4863',
		customer: 'Daniel Brown',
		date: '2023-08-11T14:20:00',
		total: 324.75,
		status: 'Cancelled',
		items: 4,
		email: 'daniel.b@example.com'
	}
];

// Top selling products
export const topSellingProducts = [
	{
		id: 1,
		name: 'Wireless Headphones',
		image:
			'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 149.99,
		sold: 1254,
		revenue: 188097.46,
		status: 'In Stock'
	},
	{
		id: 2,
		name: 'Smart Watch',
		image:
			'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 299.99,
		sold: 879,
		revenue: 263691.21,
		status: 'In Stock'
	},
	{
		id: 3,
		name: 'Bluetooth Speaker',
		image:
			'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 89.99,
		sold: 1056,
		revenue: 95029.44,
		status: 'Low Stock'
	},
	{
		id: 4,
		name: 'Laptop Backpack',
		image:
			'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 79.99,
		sold: 932,
		revenue: 74550.68,
		status: 'In Stock'
	},
	{
		id: 5,
		name: 'Mechanical Keyboard',
		image:
			'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 129.99,
		sold: 645,
		revenue: 83843.55,
		status: 'Out of Stock'
	},
	{
		id: 6,
		name: 'Ergonomic Office Chair',
		image:
			'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 249.99,
		inventory: 12,
		revenue: 188097.46,
		status: 'In Stock'
	},
	{
		id: 7,
		name: 'Smartphone Stand',
		image:
			'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 24.99,
		inventory: 87,
		revenue: 263691.21,
		status: 'In Stock'
	},
	{
		id: 8,
		name: 'Wireless Charger',
		image:
			'https://images.pexels.com/photos/4526482/pexels-photo-4526482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 39.99,
		inventory: 41,
		revenue: 95029.44,
		status: 'In Stock'
	}
];

export const orders = [
	{
		id: 'ORD-4872',
		customer: 'Sarah Wilson',
		date: '2023-08-15T10:30:00',
		total: 129.99,
		status: 'Delivered',
		items: 3,
		email: 'sarah.w@example.com'
	},
	{
		id: 'ORD-4871',
		customer: 'Michael Brown',
		date: '2023-08-15T09:45:00',
		total: 79.85,
		status: 'Processing',
		items: 2,
		email: 'michael.b@example.com'
	},
	{
		id: 'ORD-4870',
		customer: 'Emma Johnson',
		date: '2023-08-15T08:20:00',
		total: 245.0,
		status: 'Pending',
		items: 4,
		email: 'emma.j@example.com'
	},
	{
		id: 'ORD-4869',
		customer: 'David Lee',
		date: '2023-08-14T16:50:00',
		total: 189.99,
		status: 'Delivered',
		items: 1,
		email: 'david.l@example.com'
	},
	{
		id: 'ORD-4868',
		customer: 'Jennifer Smith',
		date: '2023-08-14T14:25:00',
		total: 62.5,
		status: 'Cancelled',
		items: 2,
		email: 'jennifer.s@example.com'
	},
	{
		id: 'ORD-4867',
		customer: 'Robert Johnson',
		date: '2023-08-13T11:15:00',
		total: 149.99,
		status: 'Delivered',
		items: 1,
		email: 'robert.j@example.com'
	},
	{
		id: 'ORD-4866',
		customer: 'Lisa Anderson',
		date: '2023-08-13T10:05:00',
		total: 95.5,
		status: 'Processing',
		items: 3,
		email: 'lisa.a@example.com'
	},
	{
		id: 'ORD-4865',
		customer: 'Thomas Wilson',
		date: '2023-08-12T15:30:00',
		total: 210.25,
		status: 'Delivered',
		items: 2,
		email: 'thomas.w@example.com'
	},
	{
		id: 'ORD-4864',
		customer: 'Jessica Miller',
		date: '2023-08-12T09:45:00',
		total: 75.99,
		status: 'Delivered',
		items: 1,
		email: 'jessica.m@example.com'
	},
	{
		id: 'ORD-4863',
		customer: 'Daniel Brown',
		date: '2023-08-11T14:20:00',
		total: 324.75,
		status: 'Cancelled',
		items: 4,
		email: 'daniel.b@example.com'
	}
];

export const products = [
	{
		id: 1,
		name: 'Wireless Headphones',
		image:
			'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 149.99,
		sold: 1254,
		revenue: 188097.46,
		status: 'In Stock'
	},
	{
		id: 2,
		name: 'Smart Watch',
		image:
			'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 299.99,
		sold: 879,
		revenue: 263691.21,
		status: 'In Stock'
	},
	{
		id: 3,
		name: 'Bluetooth Speaker',
		image:
			'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 89.99,
		sold: 1056,
		revenue: 95029.44,
		status: 'Low Stock'
	},
	{
		id: 4,
		name: 'Laptop Backpack',
		image:
			'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 79.99,
		sold: 932,
		revenue: 74550.68,
		status: 'In Stock'
	},
	{
		id: 5,
		name: 'Mechanical Keyboard',
		image:
			'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 129.99,
		sold: 645,
		revenue: 83843.55,
		status: 'Out of Stock'
	},
	{
		id: 6,
		name: 'Ergonomic Office Chair',
		image:
			'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 249.99,
		inventory: 12,
		status: 'In Stock'
	},
	{
		id: 7,
		name: 'Smartphone Stand',
		image:
			'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 24.99,
		inventory: 87,
		status: 'In Stock'
	},
	{
		id: 8,
		name: 'Wireless Charger',
		image:
			'https://images.pexels.com/photos/4526482/pexels-photo-4526482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
		price: 39.99,
		inventory: 41,
		status: 'In Stock'
	}
];

export const customers = [
	{
		id: 1,
		name: 'Sarah Wilson',
		email: 'sarah.w@example.com',
		location: 'New York, USA',
		orders: 12,
		spent: 1258.99,
		lastOrder: '2023-08-15T10:30:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 2,
		name: 'Michael Brown',
		email: 'michael.b@example.com',
		location: 'London, UK',
		orders: 8,
		spent: 879.85,
		lastOrder: '2023-08-15T09:45:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 3,
		name: 'Emma Johnson',
		email: 'emma.j@example.com',
		location: 'Sydney, Australia',
		orders: 5,
		spent: 495.5,
		lastOrder: '2023-08-15T08:20:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 4,
		name: 'David Lee',
		email: 'david.l@example.com',
		location: 'Toronto, Canada',
		orders: 15,
		spent: 1845.75,
		lastOrder: '2023-08-14T16:50:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 5,
		name: 'Jennifer Smith',
		email: 'jennifer.s@example.com',
		location: 'Chicago, USA',
		orders: 2,
		spent: 129.99,
		lastOrder: '2023-08-14T14:25:00',
		status: 'Inactive',
		avatar:
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 6,
		name: 'Robert Johnson',
		email: 'robert.j@example.com',
		location: 'Berlin, Germany',
		orders: 9,
		spent: 945.25,
		lastOrder: '2023-08-13T11:15:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 7,
		name: 'Lisa Anderson',
		email: 'lisa.a@example.com',
		location: 'Paris, France',
		orders: 4,
		spent: 385.5,
		lastOrder: '2023-08-13T10:05:00',
		status: 'Active',
		avatar:
			'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	},
	{
		id: 8,
		name: 'Thomas Wilson',
		email: 'thomas.w@example.com',
		location: 'Madrid, Spain',
		orders: 7,
		spent: 723.45,
		lastOrder: '2023-08-12T15:30:00',
		status: 'Inactive',
		avatar:
			'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
	}
];

// Invoice
// Initialize with sample data
export const initialInvoices: Invoice[] = [
	{
		id: '1',
		number: 'INV-001',
		date: '2025-02-01',
		dueDate: '2025-03-01',
		status: 'sent',
		client: {
			name: 'Acme Corp',
			email: 'billing@acmecorp.com',
			address: '123 Main St, San Francisco, CA 94103'
		},
		items: [
			{
				id: '1',
				description: 'Website Design',
				quantity: 1,
				rate: 1200,
				amount: 1200
			},
			{
				id: '2',
				description: 'Development',
				quantity: 20,
				rate: 150,
				amount: 3000
			}
		],
		notes: 'Payment due within 30 days',
		subtotal: 4200,
		tax: 420,
		total: 4620,
		createdAt: '2025-02-01T10:00:00Z',
		updatedAt: '2025-02-01T10:00:00Z'
	},
	{
		id: '2',
		number: 'INV-002',
		date: '2025-02-15',
		dueDate: '2025-03-15',
		status: 'paid',
		client: {
			name: 'Globex Corporation',
			email: 'accounts@globex.com',
			address: '456 Market St, New York, NY 10001'
		},
		items: [
			{
				id: '1',
				description: 'Consulting Services',
				quantity: 10,
				rate: 200,
				amount: 2000
			}
		],
		notes: 'Thank you for your business',
		subtotal: 2000,
		tax: 200,
		total: 2200,
		createdAt: '2025-02-15T14:30:00Z',
		updatedAt: '2025-02-20T09:15:00Z'
	},
	{
		id: '3',
		number: 'INV-003',
		date: '2025-03-01',
		dueDate: '2025-04-01',
		status: 'draft',
		client: {
			name: 'Sirius Cybernetics Corp',
			email: 'payments@sirius.com',
			address: '789 Robot Ave, Seattle, WA 98101'
		},
		items: [
			{
				id: '1',
				description: 'AI Integration',
				quantity: 1,
				rate: 3500,
				amount: 3500
			},
			{
				id: '2',
				description: 'Support Package',
				quantity: 1,
				rate: 500,
				amount: 500
			}
		],
		notes: 'Draft invoice - do not send yet',
		subtotal: 4000,
		tax: 400,
		total: 4400,
		createdAt: '2025-03-01T16:45:00Z',
		updatedAt: '2025-03-01T16:45:00Z'
	},
	{
		id: '4',
		number: 'INV-004',
		date: '2025-01-10',
		dueDate: '2025-02-10',
		status: 'overdue',
		client: {
			name: 'Wayne Enterprises',
			email: 'finance@wayne.com',
			address: '1007 Mountain Drive, Gotham City, NJ 07001'
		},
		items: [
			{
				id: '1',
				description: 'Security Consultation',
				quantity: 1,
				rate: 5000,
				amount: 5000
			}
		],
		notes: 'Payment is overdue',
		subtotal: 5000,
		tax: 500,
		total: 5500,
		createdAt: '2025-01-10T11:20:00Z',
		updatedAt: '2025-01-10T11:20:00Z'
	}
];

// Load data from localStorage or use initial data
const loadInvoices = (): Invoice[] => {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('invoices');
		return saved ? JSON.parse(saved) : initialInvoices;
	}
	return initialInvoices;
};

// Create the writable store
const createInvoiceStore = () => {
	const invoices = writable<Invoice[]>(loadInvoices());
	const { subscribe, set, update } = invoices;

	// Save to localStorage whenever the store changes
	if (typeof window !== 'undefined') {
		subscribe((value) => {
			localStorage.setItem('invoices', JSON.stringify(value));
		});
	}

	// Helper to calculate invoice totals
	const calculateTotals = (items: LineItem[]) => {
		const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
		const tax = Math.round(subtotal * 0.1); // 10% tax
		const total = subtotal + tax;
		return { subtotal, tax, total };
	};

	return {
		subscribe,

		// Add a new invoice
		add: (invoice: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>) => {
			const now = new Date().toISOString();
			const newInvoice: Invoice = {
				...invoice,
				id: crypto.randomUUID(),
				createdAt: now,
				updatedAt: now
			};

			update((invoices) => [...invoices, newInvoice]);
			return newInvoice.id;
		},

		// Update an existing invoice
		update: (id: string, changes: Partial<Invoice>) => {
			update((invoices) =>
				invoices.map((invoice) =>
					invoice.id === id
						? { ...invoice, ...changes, updatedAt: new Date().toISOString() }
						: invoice
				)
			);
		},

		// Delete an invoice
		delete: (id: string) => {
			update((invoices) => invoices.filter((invoice) => invoice.id !== id));
		},

		// Get a single invoice by ID
		getById: (id: string) => {
			let found: Invoice | undefined;
			subscribe((invoices) => {
				found = invoices.find((invoice) => invoice.id === id);
			})();
			return found;
		},

		// Update the status of an invoice
		updateStatus: (id: string, status: InvoiceStatus) => {
			update((invoices) =>
				invoices.map((invoice) =>
					invoice.id === id ? { ...invoice, status, updatedAt: new Date().toISOString() } : invoice
				)
			);
		},

		// Recalculate totals for an invoice
		recalculateTotals: (id: string) => {
			update((invoices) =>
				invoices.map((invoice) => {
					if (invoice.id === id) {
						const { subtotal, tax, total } = calculateTotals(invoice.items);
						return {
							...invoice,
							subtotal,
							tax,
							total,
							updatedAt: new Date().toISOString()
						};
					}
					return invoice;
				})
			);
		},

		// Generate a new invoice number
		generateInvoiceNumber: () => {
			let highestNumber = 0;
			subscribe((invoices) => {
				invoices.forEach((invoice) => {
					const num = parseInt(invoice.number.replace('INV-', ''), 10);
					if (!isNaN(num) && num > highestNumber) {
						highestNumber = num;
					}
				});
			})();

			return `INV-${String(highestNumber + 1).padStart(3, '0')}`;
		},

		// Reset store to initial data (for testing)
		reset: () => set(initialInvoices)
	};
};

// Create and export the store
export const invoiceStore = createInvoiceStore();

// Derived stores for filtering and statistics
export const invoicesByStatus = derived(invoiceStore, ($invoices) => {
	return {
		all: $invoices,
		draft: $invoices.filter((inv) => inv.status === 'draft'),
		sent: $invoices.filter((inv) => inv.status === 'sent'),
		paid: $invoices.filter((inv) => inv.status === 'paid'),
		overdue: $invoices.filter((inv) => inv.status === 'overdue')
	};
});

export const invoiceStats = derived(invoiceStore, ($invoices) => {
	const totalPaid = $invoices
		.filter((inv) => inv.status === 'paid')
		.reduce((sum, inv) => sum + inv.total, 0);

	const totalOutstanding = $invoices
		.filter((inv) => inv.status === 'sent' || inv.status === 'overdue')
		.reduce((sum, inv) => sum + inv.total, 0);

	const totalOverdue = $invoices
		.filter((inv) => inv.status === 'overdue')
		.reduce((sum, inv) => sum + inv.total, 0);

	return {
		count: $invoices.length,
		countByStatus: {
			draft: $invoices.filter((inv) => inv.status === 'draft').length,
			sent: $invoices.filter((inv) => inv.status === 'sent').length,
			paid: $invoices.filter((inv) => inv.status === 'paid').length,
			overdue: $invoices.filter((inv) => inv.status === 'overdue').length
		},
		totalPaid,
		totalOutstanding,
		totalOverdue
	};
});

// User
export const userListData = [
	{
		id: 1,
		username: 'John Doe',
		email: 'john.doe@example.com',
		role: 'Admin',
		plan: 'Enterprise',
		status: 'Active'
	},
	{
		id: 2,
		username: 'Jane Smith',
		email: 'jane.smith@example.com',
		role: 'Author',
		plan: 'Team',
		status: 'Active'
	},
	{
		id: 3,
		username: 'Robert Johnson',
		email: 'robert.johnson@example.com',
		role: 'Editor',
		plan: 'Company',
		status: 'Pending'
	},
	{
		id: 4,
		username: 'Emily Davis',
		email: 'emily.davis@example.com',
		role: 'Maintainer',
		plan: 'Basic',
		status: 'Inactive'
	},
	{
		id: 5,
		username: 'Michael Wilson',
		email: 'michael.wilson@example.com',
		role: 'Subscriber',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 6,
		username: 'Sarah Brown',
		email: 'sarah.brown@example.com',
		role: 'Author',
		plan: 'Team',
		status: 'Active'
	},
	{
		id: 7,
		username: 'David Taylor',
		email: 'david.taylor@example.com',
		role: 'Editor',
		plan: 'Company',
		status: 'Pending'
	},
	{
		id: 8,
		username: 'Jennifer Anderson',
		email: 'jennifer.anderson@example.com',
		role: 'Admin',
		plan: 'Enterprise',
		status: 'Active'
	},
	{
		id: 9,
		username: 'Thomas Martinez',
		email: 'thomas.martinez@example.com',
		role: 'Subscriber',
		plan: 'Basic',
		status: 'Inactive'
	},
	{
		id: 10,
		username: 'Lisa Robinson',
		email: 'lisa.robinson@example.com',
		role: 'Maintainer',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 11,
		username: 'Daniel Clark',
		email: 'daniel.clark@example.com',
		role: 'Author',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 12,
		username: 'Michelle Rodriguez',
		email: 'michelle.rodriguez@example.com',
		role: 'Editor',
		plan: 'Enterprise',
		status: 'Active'
	},
	{
		id: 13,
		username: 'Charles Lewis',
		email: 'charles.lewis@example.com',
		role: 'Subscriber',
		plan: 'Basic',
		status: 'Inactive'
	},
	{
		id: 14,
		username: 'Amanda Lee',
		email: 'amanda.lee@example.com',
		role: 'Admin',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 15,
		username: 'Matthew Walker',
		email: 'matthew.walker@example.com',
		role: 'Author',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 16,
		username: 'Laura Hall',
		email: 'laura.hall@example.com',
		role: 'Maintainer',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 17,
		username: 'Kevin Allen',
		email: 'kevin.allen@example.com',
		role: 'Editor',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 18,
		username: 'Jessica Young',
		email: 'jessica.young@example.com',
		role: 'Subscriber',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 19,
		username: 'Richard Hernandez',
		email: 'richard.hernandez@example.com',
		role: 'Admin',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 20,
		username: 'Kimberly King',
		email: 'kimberly.king@example.com',
		role: 'Author',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 21,
		username: 'Jeffrey Wright',
		email: 'jeffrey.wright@example.com',
		role: 'Editor',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 22,
		username: 'Angela Lopez',
		email: 'angela.lopez@example.com',
		role: 'Maintainer',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 23,
		username: 'Ryan Scott',
		email: 'ryan.scott@example.com',
		role: 'Subscriber',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 24,
		username: 'Stephanie Green',
		email: 'stephanie.green@example.com',
		role: 'Admin',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 25,
		username: 'Jason Adams',
		email: 'jason.adams@example.com',
		role: 'Author',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 26,
		username: 'Rebecca Baker',
		email: 'rebecca.baker@example.com',
		role: 'Editor',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 27,
		username: 'Nicholas Gonzalez',
		email: 'nicholas.gonzalez@example.com',
		role: 'Maintainer',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 28,
		username: 'Hannah Nelson',
		email: 'hannah.nelson@example.com',
		role: 'Subscriber',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 29,
		username: 'Timothy Carter',
		email: 'timothy.carter@example.com',
		role: 'Admin',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 30,
		username: 'Rachel Mitchell',
		email: 'rachel.mitchell@example.com',
		role: 'Author',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 31,
		username: 'Brandon Perez',
		email: 'brandon.perez@example.com',
		role: 'Editor',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 32,
		username: 'Megan Roberts',
		email: 'megan.roberts@example.com',
		role: 'Maintainer',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 33,
		username: 'Justin Turner',
		email: 'justin.turner@example.com',
		role: 'Subscriber',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 34,
		username: 'Samantha Phillips',
		email: 'samantha.phillips@example.com',
		role: 'Admin',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 35,
		username: 'Andrew Campbell',
		email: 'andrew.campbell@example.com',
		role: 'Author',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 36,
		username: 'Olivia Parker',
		email: 'olivia.parker@example.com',
		role: 'Editor',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 37,
		username: 'Patrick Evans',
		email: 'patrick.evans@example.com',
		role: 'Maintainer',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 38,
		username: 'Christina Edwards',
		email: 'christina.edwards@example.com',
		role: 'Subscriber',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 39,
		username: 'Gregory Collins',
		email: 'gregory.collins@example.com',
		role: 'Admin',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 40,
		username: 'Tiffany Stewart',
		email: 'tiffany.stewart@example.com',
		role: 'Author',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 41,
		username: 'Benjamin Sanchez',
		email: 'benjamin.sanchez@example.com',
		role: 'Editor',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 42,
		username: 'Victoria Morris',
		email: 'victoria.morris@example.com',
		role: 'Maintainer',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 43,
		username: 'Aaron Rogers',
		email: 'aaron.rogers@example.com',
		role: 'Subscriber',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 44,
		username: 'Melissa Reed',
		email: 'melissa.reed@example.com',
		role: 'Admin',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 45,
		username: 'Nathan Cook',
		email: 'nathan.cook@example.com',
		role: 'Author',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 46,
		username: 'Danielle Morgan',
		email: 'danielle.morgan@example.com',
		role: 'Editor',
		plan: 'Company',
		status: 'Active'
	},
	{
		id: 47,
		username: 'Alexander Bell',
		email: 'alexander.bell@example.com',
		role: 'Maintainer',
		plan: 'Team',
		status: 'Pending'
	},
	{
		id: 48,
		username: 'Amy Murphy',
		email: 'amy.murphy@example.com',
		role: 'Subscriber',
		plan: 'Basic',
		status: 'Active'
	},
	{
		id: 49,
		username: 'Samuel Rivera',
		email: 'samuel.rivera@example.com',
		role: 'Admin',
		plan: 'Enterprise',
		status: 'Inactive'
	},
	{
		id: 50,
		username: 'Heather Cooper',
		email: 'heather.cooper@example.com',
		role: 'Author',
		plan: 'Company',
		status: 'Active'
	}
];

export const projectList = [
	{
		name: 'Ecommerce App',
		src: '',
		total: 122,
		progress: 78,
		hours: '18:42'
	},
	{
		name: 'Logo Design',
		src: '',
		total: 122,
		progress: 18,
		hours: '20:42'
	},
	{
		name: 'Dashboard Design',
		src: '',
		total: 122,
		progress: 62,
		hours: '2:42'
	},
	{
		name: 'Mobile App',
		src: '',
		total: 122,
		progress: 8,
		hours: '89:42'
	},
	{
		name: 'Dojo',
		src: '',
		total: 122,
		progress: 49,
		hours: '230:42'
	},
	{
		name: 'blockchain Website',
		src: '',
		total: 122,
		progress: 92,
		hours: '300:42'
	},
	{
		name: 'Hoffman Website',
		src: '',
		total: 122,
		progress: 88,
		hours: '12:42'
	}
];

export const invoiceList = [
	{
		id: 50,
		status: CheckIcon,
		total: 3428,
		issuedDate: '13 June 2025',
		tooltip: [{ statusName: 'Paid', balance: 750, dueDate: '1 July 2025' }]
	},
	{
		id: 49,
		status: ArrowDownIcon,
		total: 5219,
		issuedDate: '17 June 2025',
		tooltip: [{ statusName: 'Downloaded', balance: 0, dueDate: '15 July 2025' }]
	},
	{
		id: 48,
		status: SendHorizontalIcon,
		total: 3719,
		issuedDate: '19 June 2025',
		tooltip: [{ statusName: 'Sent', balance: 0, dueDate: '11 July 2025' }]
	},
	{
		id: 47,
		status: MailIcon,
		total: 4056,
		issuedDate: '08 June 2025',
		tooltip: [{ statusName: 'Draft', balance: 815, dueDate: '30 July 2025' }]
	},
	{
		id: 46,
		status: ChartPieIcon,
		total: 3789,
		issuedDate: '27 June 2025',
		tooltip: [{ statusName: 'Partial Payment', balance: 666, dueDate: '18 July 2025' }]
	},
	{
		id: 45,
		status: CircleAlertIcon,
		total: 5293,
		issuedDate: '30 June 2025',
		tooltip: [{ statusName: 'Past Due', balance: 0, dueDate: '1 July 2025' }]
	}
];

export const recentDevices = [
	{
		browser: 'Chrome on Windows',
		device: 'Dell XPS',
		location: 'United States',
		recentActivity: '10, Jan 2020 20:07'
	},
	{
		browser: 'Chrome on Android',
		device: 'Google Pixel',
		location: 'United States',
		recentActivity: '10, Jan 2020 20:07'
	},
	{
		browser: 'Chrome on MacOS',
		device: 'Apple iMac',
		location: 'United States',
		recentActivity: '10, Jan 2020 20:07'
	},
	{
		browser: 'Chrome on iPhone',
		device: 'Apple iPhone',
		location: 'United States',
		recentActivity: '10, Jan 2020 20:07'
	}
];

export const notification = [
	{ type: 'New for you', app: false, email: true, browser: false },
	{ type: 'Account Activity	', app: true, email: false, browser: true },
	{ type: 'A new browser sign in	', app: true, email: true, browser: true },
	{ type: 'A new device linked', app: false, email: false, browser: true }
];

export const connectedAccounts = [
	{ title: 'Google', description: 'Calendar and Contacts', checked: true },
	{ title: 'Slack', description: 'Communications', checked: false },
	{ title: 'Github', description: 'Manage your git repositories', checked: true },
	{ title: 'Asana', description: 'Task Communication', checked: false }
];

export const socialAccounts = [
	{ title: 'Facebook', connected: 'Not Connected' },
	{ title: 'Twitter/X', connected: 'Not Connected' },
	{ title: 'Linkedin', connected: 'Not Connected' },
	{ title: 'Dribbble', connected: 'Not Connected' },
	{ title: 'Behence', connected: 'Not Connected' }
];

// Roles and Permissions
// Permissions
export const permissionTable = [
	{
		name: 'Management',
		assignedTo: [{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' }],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Manage Billing & Roles',
		assignedTo: [{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' }],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Add & Remove Users',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Manager', color: 'bg-yellow-300 text-yellow-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Project Planning',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Users', color: 'bg-green-300 text-green-700' },
			{ name: 'Support', color: 'bg-blue-300 text-blue-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Manage Email Sequences',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Users', color: 'bg-green-300 text-green-700' },
			{ name: 'Support', color: 'bg-blue-300 text-blue-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Client Communications',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Manager', color: 'bg-yellow-300 text-yellow-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Only View',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Restricted-User', color: 'bg-red-300 text-red-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: 'Financial Management',
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Manager', color: 'bg-yellow-300 text-yellow-700' }
		],
		CreatedDate: '14 July 2021'
	},
	{
		name: "Manage Others' Tasks",
		assignedTo: [
			{ name: 'Administrator', color: 'bg-purple-300 text-purple-700' },
			{ name: 'Support', color: 'bg-blue-300 text-blue-700' }
		],
		CreatedDate: '14 July 2021'
	}
];

export const cardData = [
	{ title: 'Administrator', description: 'Total 4 users' },
	{ title: 'Editor', description: 'Total 7 users' },
	{ title: 'Users', description: 'Total 5 users' },
	{ title: 'Support', description: 'Total 6 users' },
	{ title: 'Restricted User', description: 'Total 10 users' },
	{ title: 'Add Role', description: '' }
];

export const tableData = [
	{ name: 'User Management', read: true, write: true, create: true },
	{ name: 'Content Management', read: false, write: false, create: false },
	{ name: 'Disputes Management', read: true, write: true, create: true },
	{ name: 'Database Management', read: false, write: false, create: false },
	{ name: 'Financial Management', read: false, write: false, create: false },
	{ name: 'Reporting Management', read: false, write: false, create: false },
	{ name: 'API Control', read: false, write: false, create: false },
	{ name: 'Repository Management', read: false, write: false, create: false },
	{ name: 'Payroll', read: false, write: false, create: false }
];

// Pages
export const countryTimeZone: {
	trigger: string;
	children: {
		name: string;
		value: string;
	}[];
}[] = [
	{
		trigger: 'Country',
		children: [
			{ name: 'Australia', value: 'australia' },
			{ name: 'Finland', value: 'finland' },
			{ name: 'Germany', value: 'germany' },
			{ name: 'UK', value: 'uk' },
			{ name: 'USA', value: 'usa' }
		]
	},
	{
		trigger: 'TimeZone',
		children: [
			{ name: '(GMT-12:00) International Date Line West', value: 'international' },
			{ name: '(GMT-11:00) Midway Island, Samoa', value: 'midway' },
			{ name: '(GMT-10:00) Hawaii', value: 'hawaii' },
			{ name: '(GMT-09:00) Alaska', value: 'alaska' },
			{ name: '(GMT-0:800) Pacific Time (US & Canada)', value: 'pacific' }
		]
	}
];

export const languageCurrency: {
	trigger: string;
	type: 'single' | 'multiple';
	children: {
		name: string;
		value: string;
	}[];
}[] = [
	{
		trigger: 'Language',
		type: 'multiple',
		children: [
			{ name: 'Arabic', value: 'arabic' },
			{ name: 'English', value: 'english' },
			{ name: 'French', value: 'french' },
			{ name: 'German', value: 'german' },
			{ name: 'Portuguese', value: 'portuguese' }
		]
	},
	{
		trigger: 'Currency',
		type: 'single',
		children: [
			{ name: 'EUR', value: 'eur' },
			{ name: 'USD', value: 'usd' },
			{ name: 'Pound', value: 'pound' },
			{ name: 'Bitcoin', value: 'bitcoin' }
		]
	}
];

export const recentDevicesData = [
	{
		id: 1,
		items: [
			{ name: 'Chrome on Windows' },
			{ name: 'HP Spectre 360' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	},
	{
		id: 2,
		items: [
			{ name: 'Chrome on MacOS' },
			{ name: 'Apple iMac' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	},
	{
		id: 3,
		items: [
			{ name: 'Chrome on Android' },
			{ name: 'Oneplus 9 Pro' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	}
];

export const notifications = [
	{ name: 'New for you', email: true, browser: true, app: true },
	{ name: 'Account activity', email: true, browser: true, app: true },
	{ name: 'A new browser used to sign in', email: true, browser: true, app: false },
	{ name: 'A new device is linked', email: true, browser: false, app: false }
];

export const cardInfo = [
	{
		title: 'Connected Accounts',
		description: 'Display content from your connected accounts on your site',
		content: [
			{ title: 'Google', description: 'Calendar and Contacts', checked: true },
			{ title: 'Slack', description: 'Communications', checked: false },
			{ title: 'Github', description: 'Manage your Git repositories', checked: true }
		]
	},
	{
		title: 'Social Accounts',
		description: 'Display content from social accounts on your site',
		content: [
			{ title: 'Facebook', description: '-', checked: true },
			{ title: 'Twitter/X', description: '-', checked: false },
			{ title: 'Linkedin', description: '-', checked: true }
		]
	}
];

// User profile
export const tabs = [
	{ id: 'profile', label: 'Profile', icon: UserIcon },
	{ id: 'teams', label: 'Teams', icon: UsersIcon },
	{ id: 'projects', label: 'Projects', icon: FolderEditIcon },
	{ id: 'connections', label: 'Connections', icon: ShareIcon }
];

// Mock data
export const user = {
	name: 'John Doe',
	role: 'Senior Product Designer',
	company: 'JohnDoe Inc.',
	location: 'San Francisco, CA',
	email: 'john.doe@techflow.com',
	phone: '+1 (555) 123-4567',
	bio: 'Passionate product designer with 8+ years of experience creating user-centered digital experiences. I love solving complex problems through thoughtful design and collaboration.',
	avatar:
		'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
};

export const teams = [
	{
		name: 'Design System Team',
		role: 'Lead Designer',
		members: 8,
		color: 'bg-primary-100 text-primary-700'
	},
	{
		name: 'Mobile App Team',
		role: 'Senior Designer',
		members: 12,
		color: 'bg-secondary-100 text-secondary-700'
	},
	{
		name: 'User Research',
		role: 'Contributor',
		members: 6,
		color: 'bg-accent-100 text-accent-700'
	}
];

export const projects = [
	{
		name: 'E-commerce Redesign',
		status: 'In Progress',
		progress: 75,
		team: 'Design System Team',
		dueDate: '2025-02-15',
		statusColor: 'bg-yellow-100 text-yellow-700'
	},
	{
		name: 'Mobile Banking App',
		status: 'Completed',
		progress: 100,
		team: 'Mobile App Team',
		dueDate: '2024-12-20',
		statusColor: 'bg-green-100 text-green-700'
	},
	{
		name: 'Design System v2.0',
		status: 'Planning',
		progress: 25,
		team: 'Design System Team',
		dueDate: '2025-04-30',
		statusColor: 'bg-blue-100 text-blue-700'
	}
];

export const connections = [
	{
		name: 'LinkedIn',
		url: 'linkedin.com/in/johndoe',
		icon: BriefcaseBusinessIcon,
		color: 'bg-blue-50 text-blue-600'
	},
	{
		name: 'Dribbble',
		url: 'dribbble.com/johndoe',
		icon: PaletteIcon,
		color: 'bg-pink-50 text-pink-600'
	},
	{
		name: 'Behance',
		url: 'behance.net/johndoe',
		icon: ImageIcon,
		color: 'bg-purple-50 text-purple-600'
	},
	{
		name: 'Personal Website',
		url: 'johndoe.design',
		icon: LanguagesIcon,
		color: 'bg-green-50 text-green-600'
	}
];
