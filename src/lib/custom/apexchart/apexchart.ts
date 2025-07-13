import { browser } from '$app/environment';
import type { ApexOptions } from 'apexcharts';

let ApexCharts: any;

if (browser) {
	ApexCharts = (await import('apexcharts')).default;
}

export const chart = (node: HTMLElement, options: any) => {
	if (!browser) return;

	let myChart = new ApexCharts(node, options);
	myChart.render();

	return {
		update(options: any) {
			myChart.update(options);
		},
		destroy() {
			myChart.destroy();
		}
	};
};
