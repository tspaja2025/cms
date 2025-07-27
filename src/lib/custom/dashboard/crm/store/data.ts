export const salesOverviewOptions = {
	chart: {
		type: 'donut',
		height: 280,
		width: 280
	},
	series: [12, 25, 13, 50],
	legend: {
		show: true
	},
	dataLabels: {
		enabled: false
	},
	labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales'],
	colors: ['#ad46ff', '#c27aff', '#dab2ff', '#62748e'],
	plotOptions: {
		pie: {
			donut: {
				labels: {
					show: true,
					total: {
						showAlways: true,
						show: true
					}
				}
			}
		}
	}
};

export const totalSalesOptions = {
	chart: {
		type: 'line',
		toolbar: {
			show: false
		}
	},
	series: [
		{
			name: 'Sales',
			data: [0, 25, 1, 50]
		}
	],
	grid: {
		show: false
	},
	stroke: {
		width: 5,
		curve: 'smooth'
	},
	yaxis: {
		labels: {
			show: false
		}
	},
	xaxis: {
		type: 'datetime',
		categories: ['1/11/2025', '2/11/2025', '3/11/2025', '4/11/2025'],
		tickAmount: 5,
		labels: {
			formatter: function (
				value: string | number,
				timestamp: number | string | Date,
				opts: { dateFormatter: (date: Date, format: string) => string }
			) {
				return opts.dateFormatter(new Date(timestamp), 'dd MMM');
			}
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			gradientToColors: ['#FDD835'],
			shadeIntensity: 1,
			type: 'horizontal',
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100, 100, 100]
		}
	}
};

export const revenueReportOptions = {
	chart: {
		type: 'bar',
		toolbar: {
			show: false
		}
	},
	series: [
		{
			name: 'Sales',
			data: [1.45, 5.42, 5.9, -0.42, -12.6]
		}
	],
	grid: {
		show: false
	},
	stroke: {
		width: 5,
		curve: 'smooth'
	},
	yaxis: {
		labels: {
			show: false
		}
	},
	xaxis: {
		type: 'datetime',
		categories: ['2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01'],
		labels: {
			rotate: -90
		}
	},
	plotOptions: {
		bar: {
			colors: {
				ranges: [
					{
						from: -100,
						to: -46,
						color: '#F15B46'
					},
					{
						from: -45,
						to: 0,
						color: '#FEB019'
					}
				]
			},
			columnWidth: '80%'
		}
	},
	dataLabels: {
		enabled: false
	}
};

export const weeklySalesOptions = {
	chart: {
		type: 'bar',
		toolbar: {
			show: false
		}
	},
	series: [
		{
			name: 'Sales',
			data: [2, 3, 4, 10, 4, 3, 3]
		}
	],
	yaxis: {
		labels: {
			show: false
		}
	},
	xaxis: {
		categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	},
	plotOptions: {
		bar: {
			borderRadius: 8
		}
	},
	dataLabels: {
		enabled: false
	}
};
