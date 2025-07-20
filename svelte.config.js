import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/cms' : process.env.BASE_PATH || '/cms'
		},
		prerender: {
			entries: [
				'/admin/examples/widget/actions',
				'/admin/examples/widget/advanced',
				'/admin/examples/widget/basic',
				'/admin/examples/widget/charts',
				'/admin/examples/widget/gamification',
				'/admin/examples/widget/statistics',
				'/admin/examples/wizard/form',
				'/admin/front-pages/checkout',
				'/admin/front-pages/help-center',
				'/admin/front-pages/landing',
				'/admin/front-pages/payment',
				'/admin/front-pages/pricing'
			]
		}
	}
};

export default config;
