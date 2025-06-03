<script lang="ts">
	import { onMount } from 'svelte';
	// import { push } from 'svelte-spa-router';
	import { invoiceStats } from '$lib/components/invoice/store/store';
	import { formatCurrency } from '$lib/components/invoice/utils';

	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 10;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={`sticky top-0 z-10 transition-all duration-200 ${isScrolled ? 'bg-white shadow-sm' : 'bg-secondary-50'}`}
>
	<div class="flex items-center justify-between p-4">
		<div class="flex items-center">
			<h1 class="text-secondary-900 text-2xl font-semibold">Invoices</h1>
		</div>

		<div class="hidden space-x-4 md:flex">
			<div class="flex items-center rounded-lg bg-white px-4 py-2 shadow-sm">
				<div class="text-sm">
					<span class="text-secondary-500 block">Outstanding</span>
					<span class="font-semibold">{formatCurrency($invoiceStats.totalOutstanding)}</span>
				</div>
			</div>

			<div class="flex items-center rounded-lg bg-white px-4 py-2 shadow-sm">
				<div class="text-sm">
					<span class="text-secondary-500 block">Overdue</span>
					<span class="text-error-600 font-semibold"
						>{formatCurrency($invoiceStats.totalOverdue)}</span
					>
				</div>
			</div>

			<button
				class="btn btn-primary flex items-center space-x-2"
				onclick={() => push('/invoices/new')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>New Invoice</span>
			</button>
		</div>

		<button class="btn btn-primary md:hidden" onclick={() => push('/invoices/new')}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</header>
