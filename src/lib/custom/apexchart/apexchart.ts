// apex.ts
// import { browser } from '$app/environment';

// let ApexCharts;

// if (browser) {
// 	ApexCharts = (await import('apexcharts')).default;
// }

// export const chart = (node, options) => {
// 	if (!browser) return;

// 	const myChart = new ApexCharts(node, options);
// 	myChart.render();

// 	return {
// 		update(options) {
// 			myChart.update(options);
// 		},
// 		destroy() {
// 			myChart.destroy();
// 		}
// 	};
// };

// Revised
// import { browser } from '$app/environment';
// import type { ApexOptions } from 'apexcharts';

// export const chart = async (node: HTMLElement, options: ApexOptions) => {
// 	if (!browser) return;

// 	const ApexCharts = (await import('apexcharts')).default;
// 	const myChart = new ApexCharts(node, options);
// 	await myChart.render();

// 	return {
// 		update(newOptions: ApexOptions) {
// 			myChart.updateOptions(newOptions);
// 		},
// 		destroy() {
// 			myChart.destroy();
// 		}
// 	};
// };

// Revision 2
import { browser } from '$app/environment';
import type { ApexOptions } from 'apexcharts';

export const chart = (node: HTMLElement, options: ApexOptions) => {
	if (!browser) return;

	let myChart: any;

	// Defer dynamic import until after the DOM is ready
	Promise.resolve().then(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		myChart = new ApexCharts(node, options);
		await myChart.render();
	});

	return {
		update(newOptions: ApexOptions) {
			if (myChart) {
				myChart.updateOptions(newOptions);
			}
		},
		destroy() {
			if (myChart) {
				myChart.destroy();
			}
		}
	};
};
