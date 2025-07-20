<script lang="ts">
	import { chart } from '$lib/custom/apexchart/apexchart';

	// Sample data
	const months = [
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
	];
	const currentYear = new Date().getFullYear();

	// Initialize with default values
	let chartOptions = {
		chart: {
			id: 'sales-chart',
			type: 'line',
			height: '100%',
			toolbar: {
				show: true,
				tools: {
					download: true,
					selection: false,
					zoom: false,
					zoomin: false,
					zoomout: false,
					pan: false,
					reset: false
				}
			},
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 800
			}
		},
		stroke: {
			curve: 'smooth',
			width: 2
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.3,
				stops: [0, 90, 100]
			}
		},
		markers: {
			size: 4,
			hover: {
				size: 6
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: (value: number) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(value);
				}
			}
		},
		legend: {
			position: 'top',
			markers: {
				width: 8,
				height: 8,
				radius: 8
			},
			itemMargin: {
				horizontal: 8,
				vertical: 4
			}
		},
		xaxis: {
			categories: months,
			tooltip: {
				enabled: false
			}
		},
		yaxis: {
			labels: {
				formatter: (value: number) => {
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						maximumFractionDigits: 0
					}).format(value);
				}
			}
		},
		theme: {
			mode: 'light' // Default to light
		},
		grid: {
			borderColor: '#E5E7EB' // Default light mode color
		}
	};

	let chartSeries = [
		{
			name: `Sales ${currentYear}`,
			data: [18500, 21500, 19250, 27520, 32800, 36200, 34100, 39500, 45600, 42300, 43900, 48000],
			color: '#3B82F6'
		},
		{
			name: `Sales ${currentYear - 1}`,
			data: [15200, 17500, 16800, 19000, 22500, 24800, 27300, 29100, 32000, 35600, 38200, 41000],
			color: '#64748B'
		}
	];

	// Time period filter
	let selectedPeriod = 'year';

	let periods = [
		{ value: 'week', label: 'Last Week' },
		{ value: 'month', label: 'Last Month' },
		{ value: 'quarter', label: 'Last Quarter' },
		{ value: 'year', label: 'This Year' }
	];

	function changePeriod(period: string) {
		selectedPeriod = period;

		if (period === 'week') {
			chartOptions = {
				...chartOptions,
				xaxis: {
					...chartOptions.xaxis,
					categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}
			};
			chartSeries = [
				{
					name: 'This Week',
					data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000) + 5000),
					color: '#3B82F6'
				},
				{
					name: 'Last Week',
					data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 8000) + 4000),
					color: '#64748B'
				}
			];
		} else if (period === 'month') {
			const days = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
			chartOptions = {
				...chartOptions,
				xaxis: {
					...chartOptions.xaxis,
					categories: days
				}
			};
			chartSeries = [
				{
					name: 'This Month',
					data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000) + 1000),
					color: '#3B82F6'
				},
				{
					name: 'Last Month',
					data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2500) + 800),
					color: '#64748B'
				}
			];
		} else if (period === 'quarter') {
			chartOptions = {
				...chartOptions,
				xaxis: {
					...chartOptions.xaxis,
					categories: ['Jan', 'Feb', 'Mar']
				}
			};
			chartSeries = [
				{
					name: 'This Quarter',
					data: [42000, 38000, 45000],
					color: '#3B82F6'
				},
				{
					name: 'Last Quarter',
					data: [37000, 34000, 40000],
					color: '#64748B'
				}
			];
		} else {
			// Year view (default)
			chartOptions = {
				...chartOptions,
				xaxis: {
					...chartOptions.xaxis,
					categories: months
				}
			};
			chartSeries = [
				{
					name: `Sales ${currentYear}`,
					data: [
						18500, 21500, 19250, 27520, 32800, 36200, 34100, 39500, 45600, 42300, 43900, 48000
					],
					color: '#3B82F6'
				},
				{
					name: `Sales ${currentYear - 1}`,
					data: [
						15200, 17500, 16800, 19000, 22500, 24800, 27300, 29100, 32000, 35600, 38200, 41000
					],
					color: '#64748B'
				}
			];
		}
	}
</script>

<div class="h-full w-full">
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h2>
		<div class="flex space-x-2">
			{#each periods as period, index (index)}
				<button
					class="rounded-md px-3 py-1 text-sm transition-colors
                           {selectedPeriod === period.value
						? 'bg-blue-500 text-white'
						: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
					onclick={() => changePeriod(period.value)}
				>
					{period.label}
				</button>
			{/each}
		</div>
	</div>
	<div class="h-[400px]">
		{#if chartOptions && chartSeries}
			<div use:chart={{ ...chartOptions, series: chartSeries }}></div>
		{/if}
	</div>
</div>
