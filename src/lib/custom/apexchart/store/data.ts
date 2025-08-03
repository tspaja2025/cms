import { CalendarDate } from '@internationalized/date';
import type { ApexOptions } from 'apexcharts';

export const distributedOptions: ApexOptions = {
	chart: {
		type: 'treemap'
	},
	series: [
		{
			data: [
				{
					x: 'New Delhi',
					y: 218
				},
				{
					x: 'Kolkata',
					y: 149
				},
				{
					x: 'Mumbai',
					y: 184
				},
				{
					x: 'Ahmedabad',
					y: 55
				},
				{
					x: 'Bangaluru',
					y: 84
				},
				{
					x: 'Pune',
					y: 31
				},
				{
					x: 'Chennai',
					y: 70
				},
				{
					x: 'Jaipur',
					y: 30
				},
				{
					x: 'Surat',
					y: 44
				},
				{
					x: 'Hyderabad',
					y: 68
				},
				{
					x: 'Lucknow',
					y: 28
				},
				{
					x: 'Indore',
					y: 19
				},
				{
					x: 'Kanpur',
					y: 29
				}
			]
		}
	],
	legend: {
		show: false
	},
	colors: [
		'#3B93A5',
		'#F7B844',
		'#ADD8C7',
		'#EC3C65',
		'#CDD7B6',
		'#C1F666',
		'#D43F97',
		'#1E5D8C',
		'#421243',
		'#7F94B0',
		'#EF6537',
		'#C0ADDB'
	],
	plotOptions: {
		treemap: {
			distributed: true,
			enableShades: false
		}
	}
};

function generateDayWiseTimeSeries(
	startDate: CalendarDate,
	count: number,
	range: { min: number; max: number }
) {
	const data = [];
	let currentDate = startDate;

	for (let i = 0; i < count; i++) {
		const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
		const x = currentDate.toDate('UTC');
		data.push([x, y]);
		currentDate = currentDate.add({ days: 1 });
	}
	return data;
}

export const scatterOptions: ApexOptions = {
	chart: {
		height: 350,
		type: 'scatter',
		zoom: {
			type: 'xy'
		}
	},
	series: [
		{
			name: 'DIAMOND',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 2, 11), 10, {
				min: 5,
				max: 60
			})
		},
		{
			name: 'TRIANGLE',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 2, 11), 10, {
				min: 54,
				max: 90
			})
		},
		{
			name: 'CROSS',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 2, 20), 8, {
				min: 10,
				max: 50
			})
		},
		{
			name: 'PLUS',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 2, 28), 16, {
				min: 30,
				max: 99
			})
		},

		{
			name: 'SQUARE',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 3, 20), 10, {
				min: 0,
				max: 59
			})
		},
		{
			name: 'LINE',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 3, 29), 10, {
				min: 0,
				max: 90
			})
		},
		{
			name: 'CIRCLE',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 4, 10), 10, {
				min: 5,
				max: 35
			})
		},

		{
			name: 'STAR',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 4, 20), 10, {
				min: 15,
				max: 60
			})
		},
		{
			name: 'SPARKLE',
			data: generateDayWiseTimeSeries(new CalendarDate(2017, 4, 29), 10, {
				min: 45,
				max: 99
			})
		}
	],
	colors: [
		'#FF5733',
		'#33FF57',
		'#3357FF',
		'#FF33A1',
		'#33FFF6',
		'#1E90FF',
		'#FFFF33',
		'#A133FF',
		'#FF9933',
		'#FF3388'
	],
	dataLabels: {
		enabled: false
	},
	grid: {
		xaxis: {
			lines: {
				show: true
			}
		},
		yaxis: {
			lines: {
				show: true
			}
		}
	},
	xaxis: {
		type: 'datetime'
	},
	yaxis: {},
	legend: {
		markers: {
			strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1]
		}
	},
	markers: {
		shape: ['diamond', 'triangle', 'cross', 'plus', 'square', 'line', 'circle', 'star', 'sparkle'],
		size: 10,
		fillOpacity: 0.8,
		strokeColors: '#333',
		strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1]
	}
};

export const radialBarOptions: ApexOptions = {
	series: [44, 55, 67, 83],
	chart: {
		height: 350,
		type: 'radialBar'
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px'
				},
				value: {
					fontSize: '16px'
				},
				total: {
					show: true,
					label: 'Total',
					formatter: function (w: string) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return Number(249).toString();
					}
				}
			}
		}
	},
	labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
};

export const rangeAreaOptions: ApexOptions = {
	series: [
		{
			type: 'rangeArea',
			name: 'Team B Range',

			data: [
				{
					x: 'Jan',
					y: [1100, 1900]
				},
				{
					x: 'Feb',
					y: [1200, 1800]
				},
				{
					x: 'Mar',
					y: [900, 2900]
				},
				{
					x: 'Apr',
					y: [1400, 2700]
				},
				{
					x: 'May',
					y: [2600, 3900]
				},
				{
					x: 'Jun',
					y: [500, 1700]
				},
				{
					x: 'Jul',
					y: [1900, 2300]
				},
				{
					x: 'Aug',
					y: [1000, 1500]
				}
			]
		},

		{
			type: 'rangeArea',
			name: 'Team A Range',
			data: [
				{
					x: 'Jan',
					y: [3100, 3400]
				},
				{
					x: 'Feb',
					y: [4200, 5200]
				},
				{
					x: 'Mar',
					y: [3900, 4900]
				},
				{
					x: 'Apr',
					y: [3400, 3900]
				},
				{
					x: 'May',
					y: [5100, 5900]
				},
				{
					x: 'Jun',
					y: [5400, 6700]
				},
				{
					x: 'Jul',
					y: [4300, 4600]
				},
				{
					x: 'Aug',
					y: [2100, 2900]
				}
			]
		},

		{
			type: 'line',
			name: 'Team B Median',
			data: [
				{
					x: 'Jan',
					y: 1500
				},
				{
					x: 'Feb',
					y: 1700
				},
				{
					x: 'Mar',
					y: 1900
				},
				{
					x: 'Apr',
					y: 2200
				},
				{
					x: 'May',
					y: 3000
				},
				{
					x: 'Jun',
					y: 1000
				},
				{
					x: 'Jul',
					y: 2100
				},
				{
					x: 'Aug',
					y: 1200
				},
				{
					x: 'Sep',
					y: 1800
				},
				{
					x: 'Oct',
					y: 2000
				}
			]
		},
		{
			type: 'line',
			name: 'Team A Median',
			data: [
				{
					x: 'Jan',
					y: 3300
				},
				{
					x: 'Feb',
					y: 4900
				},
				{
					x: 'Mar',
					y: 4300
				},
				{
					x: 'Apr',
					y: 3700
				},
				{
					x: 'May',
					y: 5500
				},
				{
					x: 'Jun',
					y: 5900
				},
				{
					x: 'Jul',
					y: 4500
				},
				{
					x: 'Aug',
					y: 2400
				},
				{
					x: 'Sep',
					y: 2100
				},
				{
					x: 'Oct',
					y: 1500
				}
			]
		}
	],
	chart: {
		height: 350,
		type: 'rangeArea',
		animations: {
			speed: 500
		}
	},
	colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
	dataLabels: {
		enabled: false
	},
	fill: {
		opacity: [0.24, 0.24, 1, 1]
	},
	forecastDataPoints: {
		count: 2
	},
	stroke: {
		curve: 'straight',
		width: [0, 0, 2, 2]
	},
	legend: {
		show: true,
		customLegendItems: ['Team B', 'Team A'],
		inverseOrder: true
	},
	markers: {
		hover: {
			sizeOffset: 5
		}
	}
};
