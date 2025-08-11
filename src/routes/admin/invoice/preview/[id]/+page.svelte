<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { invoiceStore } from '$lib/custom/invoice/store/data';
	import type { Invoice } from '$lib/custom/invoice/types';
	import { formatCurrency, formatDate } from '$lib/custom/invoice/utils';
	import { Button } from '$lib/components/ui/button/index';
	import { ArrowLeftIcon, PencilIcon, PrinterIcon, TrashIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge/index';
	import * as Select from '$lib/components/ui/select/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Table from '$lib/components/ui/table/index';

	const id = page.params.id;

	let invoice = $state<Invoice | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(() => {
		console.log('ID', id);
		console.log('Store contents:', $invoiceStore[1]);
		loadInvoice();
	});

	function loadInvoice() {
		loading = true;
		error = null;

		try {
			const found = invoiceStore.getById(id);

			if (found) {
				invoice = found;
			} else {
				error = 'Invoice not found';
			}
		} catch (err) {
			error = 'Error loading invoice';
			console.error(err);
		} finally {
			loading = false;
		}
	}

	function handleStatusChange(newStatus: Invoice['status']) {
		if (!invoice) return;

		invoiceStore.updateStatus(invoice.id, newStatus);
		loadInvoice(); // Reload to get updated data
	}

	function handleEdit() {
		goto(`${base}/admin/invoice/edit/${id}`);
	}

	function handleDelete() {
		if (!invoice) return;

		if (confirm('Are you sure you want to delete this invoice?')) {
			invoiceStore.delete(invoice.id);
			goto(`${base}/admin/invoice/list`);
		}
	}

	function handleBack() {
		goto(`${base}/admin/invoice/list`);
	}

	function printInvoice() {
		window.print();
	}
</script>

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="border-primary-600 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
	</div>
{:else if error}
	<div class="bg-error-50 border-error-200 text-error-700 rounded-lg border px-4 py-3">
		<p>{error}</p>
		<Button variant="destructive" onclick={handleBack}>Go back</Button>
	</div>
{:else if invoice}
	<div
		class="animate-fade-in mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="flex items-center space-x-3">
			<Button onclick={handleBack} aria-label="Go back">
				<ArrowLeftIcon />
			</Button>
			<h2 class="text-2xl font-semibold">{invoice.number}</h2>
			<Badge>{invoice.status}</Badge>
		</div>

		<div class="flex items-center space-x-3">
			<Select.Root type="single">
				<Select.Trigger>Status</Select.Trigger>
				<Select.Content>
					<Select.Item value="draft" onclick={() => handleStatusChange('draft')}>
						Mark as Draft
					</Select.Item>
					<Select.Item value="sent" onclick={() => handleStatusChange('sent')}>
						Mark as Sent
					</Select.Item>
					<Select.Item value="paid" onclick={() => handleStatusChange('paid')}>
						Mark as Paid
					</Select.Item>
					<Select.Item value="overdue" onclick={() => handleStatusChange('overdue')}>
						Mark as Overdue
					</Select.Item>
				</Select.Content>
			</Select.Root>

			<Button onclick={printInvoice}>
				<PrinterIcon />
				Print
			</Button>

			<Button onclick={handleEdit}>
				<PencilIcon />
				Edit
			</Button>

			<Button variant="destructive" onclick={handleDelete}>
				<TrashIcon />
				Delete
			</Button>
		</div>
	</div>

	<Card.Root>
		<!-- Invoice Header -->
		<Card.Header class="flex items-center justify-between">
			<div>
				<Card.Title class="mb-1 text-2xl font-bold">INVOICE</Card.Title>
				<Card.Description class="text-secondary-600">{invoice.number}</Card.Description>
			</div>
			<div>
				<div class="text-secondary-600 text-sm">Issue Date</div>
				<div class="font-medium">{formatDate(invoice.date)}</div>
				<div class="text-secondary-600 mt-2 text-sm">Due Date</div>
				<div class="font-medium">{formatDate(invoice.dueDate)}</div>
			</div>
		</Card.Header>

		<!-- Invoice Content -->
		<Card.Content>
			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<h3 class="text-secondary-500 mb-1 text-sm font-medium">From</h3>
					<p class="font-semibold">Your Company Name</p>
					<p class="text-secondary-600">123 Business Street</p>
					<p class="text-secondary-600">San Francisco, CA 94103</p>
					<p class="text-secondary-600">contact@yourcompany.com</p>
				</div>

				<div>
					<h3 class="text-secondary-500 mb-1 text-sm font-medium">Bill To</h3>
					<p class="font-semibold">{invoice.client.name}</p>
					{#if invoice.client.address}
						<p class="text-secondary-600 whitespace-pre-line">
							{invoice.client.address}
						</p>
					{/if}
					{#if invoice.client.email}
						<p class="text-secondary-600">{invoice.client.email}</p>
					{/if}
				</div>
			</div>

			<!-- Line Items -->
			<div class="mb-8 overflow-x-auto">
				<Table.Root class="w-full">
					<Table.Header>
						<Table.Row>
							<Table.Head>Description</Table.Head>
							<Table.Head class="text-right">Quantity</Table.Head>
							<Table.Head class="text-right">Rate</Table.Head>
							<Table.Head class="text-right">Amount</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each invoice.items as item, itemIndex (itemIndex)}
							<Table.Row>
								<Table.Cell>{item.description}</Table.Cell>
								<Table.Cell class="text-right">{item.quantity}</Table.Cell>
								<Table.Cell class="text-right">{formatCurrency(item.rate)}</Table.Cell>
								<Table.Cell class="text-right">{formatCurrency(item.amount)}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>

			<!-- Totals -->
			<div class="mb-8 flex justify-end">
				<div class="w-full max-w-xs">
					<div class="flex justify-between py-2">
						<span class="text-secondary-600">Subtotal</span>
						<span class="font-medium">{formatCurrency(invoice.subtotal)}</span>
					</div>
					<div class="border-secondary-200 flex justify-between border-b py-2">
						<span class="text-secondary-600">Tax (10%)</span>
						<span class="font-medium">{formatCurrency(invoice.tax)}</span>
					</div>
					<div class="flex justify-between py-3 text-lg font-bold">
						<span>Total</span>
						<span>{formatCurrency(invoice.total)}</span>
					</div>
				</div>
			</div>

			<!-- Notes -->
			{#if invoice.notes}
				<div class="border-secondary-200 border-t pt-6">
					<h3 class="text-secondary-700 mb-2 text-sm font-medium">Notes</h3>
					<p class="text-secondary-600 whitespace-pre-line">{invoice.notes}</p>
				</div>
			{/if}
		</Card.Content>
	</Card.Root>
{/if}
