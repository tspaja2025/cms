import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, '/admin/dashboards/crm');
}
