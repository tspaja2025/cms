import type { ChartConfig } from "$lib/components/ui/chart";

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

export const revenueReportData = [
	{ month: "January", sales: 186 },
	{ month: "February", sales: 205 },
	{ month: "March", sales: -207 },
	{ month: "April", sales: 173 },
	{ month: "May", sales: -209 },
	{ month: "June", sales: 214 },
];

export  const revenueReportConfig = {
sales: { label: "Sales" },
} satisfies ChartConfig;

export const salesOverviewData = [
	{ products: 'apparel', sales: 200, color: 'var(--color-apparel)' },
	{ products: 'electronics', sales: 287, color: 'var(--color-electronics)' },
	{ products: 'fmcg', sales: 173, color: 'var(--color-fmcg)' },
	{ products: 'other', sales: 190, color: 'var(--color-other)' }
];

export const salesOverviewConfig = {
	sales: { label: 'Sales' },
	apparel: { label: 'Apparel', color: 'var(--chart-1)' },
	electronics: { label: 'Electronics', color: 'var(--chart-2)' },
	fmcg: { label: 'FMCG', color: 'var(--chart-3)' },
	other: { label: 'Other', color: 'var(--chart-4)' }
} satisfies ChartConfig;

export const weeklySalesData = [
	{ day: 'S', sales: 186 },
	{ day: 'M', sales: 305 },
	{ day: 'T', sales: 237 },
	{ day: 'W', sales: 73 },
	{ day: 'T', sales: 209 },
	{ day: 'F', sales: 214 },
	{ day: 'S', sales: 214 }
];

export 	const weeklySalesConfig = {
	sales: { label: 'Sales', color: 'var(--chart-1)' }
} satisfies ChartConfig;
