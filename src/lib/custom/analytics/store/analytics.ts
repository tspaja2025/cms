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

export const revenueChartData = {
	series: [
		{
			name: 'Revenue',
			data: [4400, 5500, 5700, 6800, 7200, 7600, 8100, 8300, 8600, 8900, 9200, 9800]
		}
	],
	chart: {
		type: 'area',
		height: 350,
		toolbar: { show: false }
	},
	colors: ['#3B82F6'],
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.3,
			opacityTo: 0.1,
			stops: [0, 90, 100]
		}
	},
	dataLabels: { enabled: false },
	stroke: { curve: 'smooth', width: 3 },
	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		axisBorder: { show: false },
		axisTicks: { show: false }
	},
	yaxis: {
		labels: {
			formatter: (val: number) => `$${val}`
		}
	},
	tooltip: {
		y: {
			formatter: (val: number) => `$${val}`
		}
	},
	grid: {
		borderColor: '#f1f5f9',
		strokeDashArray: 3
	}
};

export const ordersChartData = {
	series: [
		{
			name: 'Orders',
			data: [120, 132, 145, 167, 189, 203, 187, 234, 267, 289, 312, 345]
		}
	],
	chart: {
		type: 'bar',
		height: 350,
		toolbar: { show: false }
	},
	colors: ['#10B981'],
	plotOptions: {
		bar: {
			borderRadius: 4,
			columnWidth: '60%'
		}
	},
	dataLabels: { enabled: false },
	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		axisBorder: { show: false },
		axisTicks: { show: false }
	},
	yaxis: {
		labels: {
			formatter: (val: number) => `${val}`
		}
	},
	grid: {
		borderColor: '#f1f5f9',
		strokeDashArray: 3
	}
};

export const trafficSourcesData = {
	series: [44, 28, 18, 10],
	chart: {
		type: 'donut',
		height: 350
	},
	colors: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'],
	labels: ['Organic Search', 'Direct', 'Social Media', 'Email'],
	dataLabels: {
		enabled: true,
		formatter: (val: number) => `${val.toFixed(1)}%`
	},
	legend: {
		position: 'bottom',
		horizontalAlign: 'center'
	},
	plotOptions: {
		pie: {
			donut: {
				size: '70%'
			}
		}
	}
};
