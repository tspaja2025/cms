<script>
	import InvoiceForm from '$lib/pages/invoice/invoice-form.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Invoice add</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<InvoiceForm />
	</div>
</div>
