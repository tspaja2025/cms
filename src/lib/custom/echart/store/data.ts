export const lineChartOptions = {
	title: {
		text: 'Basic Line Chart'
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			data: [150, 230, 224, 218, 135, 147, 260],
			type: 'line'
		}
	]
};

export const barChartOptions = {
	title: {
		text: 'Basic Bar Chart'
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: 'bar'
		}
	]
};

export const radarChartOptions = {
	title: {
		text: 'Basic Radar Chart'
	},
	legend: {
		data: ['Allocated Budget', 'Actual Spending']
	},
	radar: {
		// shape: 'circle',
		indicator: [
			{ name: 'Sales', max: 6500 },
			{ name: 'Administration', max: 16000 },
			{ name: 'Information Technology', max: 30000 },
			{ name: 'Customer Support', max: 38000 },
			{ name: 'Development', max: 52000 },
			{ name: 'Marketing', max: 25000 }
		]
	},
	series: [
		{
			name: 'Budget vs spending',
			type: 'radar',
			data: [
				{
					value: [4200, 3000, 20000, 35000, 50000, 18000],
					name: 'Allocated Budget'
				},
				{
					value: [5000, 14000, 28000, 26000, 42000, 21000],
					name: 'Actual Spending'
				}
			]
		}
	]
};
