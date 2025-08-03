export const chartData = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: 'Sample Data',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}
	]
};

export const bubbleData = {
	datasets: [
		{
			label: 'John',
			data: [
				{
					x: 3,
					y: 7,
					r: 10
				}
			],
			backgroundColor: '#ff6384',
			hoverBackgroundColor: '#ff6384'
		},
		{
			label: 'Peter',
			data: [
				{
					x: 3.2,
					y: 7,
					r: 10
				}
			],
			backgroundColor: '#44e4ee',
			hoverBackgroundColor: '#44e4ee'
		},
		{
			label: 'Donald',
			data: [
				{
					x: 3.4,
					y: 7,
					r: 10
				}
			],
			backgroundColor: '#62088A',
			hoverBackgroundColor: '#62088A'
		}
	]
};

export const polarAreaData = {
	datasets: [
		{
			data: [300, 50, 100, 40, 120],
			backgroundColor: [
				'rgba(247, 70, 74, 0.5)',
				'rgba(70, 191, 189, 0.5)',
				'rgba(253, 180, 92, 0.5)',
				'rgba(148, 159, 177, 0.5)',
				'rgba(77, 83, 96, 0.5)'
			],
			label: 'My dataset' // for legend
		}
	],
	labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']
};

export const scatterData = {
	labels: ['Scatter'],
	datasets: [
		{
			borderColor: 'rgba(99,0,125, .2)',
			backgroundColor: 'rgba(99,0,125, .5)',
			label: 'V(node2)',
			data: [
				{
					x: 1,
					y: -1.711e-2
				},
				{
					x: 1.26,
					y: -2.708e-2
				},
				{
					x: 1.58,
					y: -4.285e-2
				},
				{
					x: 2.0,
					y: -6.772e-2
				},
				{
					x: 2.51,
					y: -1.068e-1
				},
				{
					x: 3.16,
					y: -1.681e-1
				},
				{
					x: 3.98,
					y: -2.635e-1
				},
				{
					x: 5.01,
					y: -4.106e-1
				},
				{
					x: 6.31,
					y: -6.339e-1
				},
				{
					x: 7.94,
					y: -9.659e-1
				},
				{
					x: 10.0,
					y: -1.445
				},
				{
					x: 12.6,
					y: -2.11
				},
				{
					x: 15.8,
					y: -2.992
				},
				{
					x: 20.0,
					y: -4.102
				},
				{
					x: 25.1,
					y: -5.429
				},
				{
					x: 31.6,
					y: -6.944
				},
				{
					x: 39.8,
					y: -8.607
				},
				{
					x: 50.1,
					y: -1.038e1
				},
				{
					x: 63.1,
					y: -1.223e1
				},
				{
					x: 79.4,
					y: -1.413e1
				},
				{
					x: 100.0,
					y: -1.607e1
				},
				{
					x: 126,
					y: -1.803e1
				},
				{
					x: 158,
					y: -2e1
				},
				{
					x: 200,
					y: -2.199e1
				},
				{
					x: 251,
					y: -2.398e1
				},
				{
					x: 316,
					y: -2.597e1
				},
				{
					x: 398,
					y: -2.797e1
				},
				{
					x: 501,
					y: -2.996e1
				},
				{
					x: 631,
					y: -3.196e1
				},
				{
					x: 794,
					y: -3.396e1
				},
				{
					x: 1000,
					y: -3.596e1
				}
			]
		}
	]
};

export const chartOptions = {
	scales: {
		y: {
			beginAtZero: true
		}
	}
};
