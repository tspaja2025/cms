<script lang="ts">
	import { labels } from '$lib/custom/email/store/email';

	export let labelId: string;

	$: label = $labels.find((l) => l.id === labelId) || { name: labelId, color: 'gray' };

	const colorClasses = {
		blue: 'bg-primary-100 text-primary-800',
		green: 'bg-success-100 text-success-800',
		red: 'bg-error-100 text-error-800',
		purple: 'bg-secondary-100 text-secondary-800',
		yellow: 'bg-warning-100 text-warning-800',
		orange: 'bg-accent-100 text-accent-800',
		pink: 'bg-pink-100 text-pink-800',
		indigo: 'bg-indigo-100 text-indigo-800',
		gray: 'bg-gray-100 text-gray-800'
	};
</script>

<span class="badge {colorClasses[label.color]}">
	{label.name}
</span>
