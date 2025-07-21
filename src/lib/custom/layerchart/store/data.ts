import * as Chart from '$lib/components/ui/chart/index';

export const areaChartData = [
    { date: new Date("2024-01-01"), desktop: 186 },
    { date: new Date("2024-02-01"), desktop: 305 },
    { date: new Date("2024-03-01"), desktop: 237 },
    { date: new Date("2024-04-01"), desktop: 73 },
    { date: new Date("2024-05-01"), desktop: 209 },
    { date: new Date("2024-06-01"), desktop: 214 },
];

export const barChartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

export const pieChartData = [
    { browser: "chrome", visitors: 275, color: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, color: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, color: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, color: "var(--color-edge)" },
    { browser: "other", visitors: 190, color: "var(--color-other)" },
];

export const pieChartConfig = {
    visitors: { label: "Visitors" },
    chrome: { label: "Chrome", color: "var(--chart-1)" },
    safari: { label: "Safari", color: "var(--chart-2)" },
    firefox: { label: "Firefox", color: "var(--chart-3)" },
    edge: { label: "Edge", color: "var(--chart-4)" },
    other: { label: "Other", color: "var(--chart-5)" },
} satisfies Chart.ChartConfig;

export const chartConfig = {
    desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies Chart.ChartConfig;