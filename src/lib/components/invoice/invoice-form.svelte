<script lang="ts">
	import { onMount } from 'svelte';
	// import { push } from 'svelte-spa-router';
	import type { Invoice, LineItem } from '$lib/components/invoice/types';
	import { invoiceStore } from '$lib/components/invoice/store/store';
	import { formatCurrency } from '$lib/components/invoice/utils';

	interface Props {
		invoice?: Partial<Invoice>;
		isEditing?: boolean;
	}

	const {
		invoice = {
			status: 'draft',
			client: { name: '', email: '', address: '' },
			items: [],
			notes: ''
		},
		isEditing = false
	}: Props = $props();

	let formData = $state<Partial<Invoice>>({
		...invoice,
		client: { ...invoice.client },
		items: [...(invoice.items || [])]
	});

	// Make a deep copy of items to avoid reference issues
	if (!formData.items || formData.items.length === 0) {
		formData.items = [createEmptyItem()];
	}

	let subtotal = $state(0);
	let tax = $state(0);
	let total = $state(0);

	function createEmptyItem(): LineItem {
		return {
			id: crypto.randomUUID(),
			description: '',
			quantity: 1,
			rate: 0,
			amount: 0
		};
	}

	function addItem() {
		formData.items!.push(createEmptyItem());
	}

	function removeItem(index: number) {
		formData.items!.splice(index, 1);

		// Ensure we always have at least one item
		if (formData.items!.length === 0) {
			formData.items!.push(createEmptyItem());
		}

		calculateTotals();
	}

	function updateLineItem(index: number, field: keyof LineItem, value: any) {
		const items = [...formData.items!];
		const item = { ...items[index], [field]: value };

		// Recalculate amount if quantity or rate changes
		if (field === 'quantity' || field === 'rate') {
			item.amount = item.quantity * item.rate;
		}

		items[index] = item;
		formData.items = items;

		calculateTotals();
	}

	function calculateTotals() {
		if (!formData.items || formData.items.length === 0) return;

		subtotal = formData.items.reduce((sum, item) => sum + (item.amount || 0), 0);
		tax = Math.round(subtotal * 0.1); // 10% tax
		total = subtotal + tax;

		formData.subtotal = subtotal;
		formData.tax = tax;
		formData.total = total;
	}

	function handleSubmit() {
		if (!validateForm()) return;

		if (isEditing && invoice.id) {
			invoiceStore.update(invoice.id, formData);
			push(`/invoices/${invoice.id}`);
		} else {
			const newInvoiceId = invoiceStore.add({
				number: invoiceStore.generateInvoiceNumber(),
				date: new Date().toISOString().slice(0, 10),
				dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
				status: 'draft',
				...formData
			} as Invoice);

			push(`/invoices/${newInvoiceId}`);
		}
	}

	function validateForm(): boolean {
		// Basic validation
		if (!formData.client?.name) {
			alert('Client name is required');
			return false;
		}

		if (!formData.items || formData.items.length === 0) {
			alert('At least one item is required');
			return false;
		}

		const invalidItems = formData.items.filter((item) => !item.description || item.quantity <= 0);

		if (invalidItems.length > 0) {
			alert('All items must have a description and quantity greater than 0');
			return false;
		}

		return true;
	}

	function cancel() {
		if (isEditing && invoice.id) {
			push(`/invoices/${invoice.id}`);
		} else {
			push('/invoices');
		}
	}

	onMount(() => {
		calculateTotals();

		// Set default dates if not editing
		if (!isEditing) {
			formData.date = new Date().toISOString().slice(0, 10);
			formData.dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
		}
	});
</script>

<div class="border-secondary-200 animate-fade-in rounded-xl border bg-white p-6 shadow-sm">
	<h2 class="mb-6 text-xl font-semibold">{isEditing ? 'Edit Invoice' : 'Create New Invoice'}</h2>

	<form onsubmit={handleSubmit}>
		<!-- Client Information -->
		<div class="mb-6">
			<h3 class="mb-4 text-lg font-medium">Client Information</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<label for="clientName" class="text-secondary-700 mb-1 block text-sm font-medium">
						Client Name*
					</label>
					<input
						id="clientName"
						type="text"
						class="input"
						bind:value={formData.client!.name}
						required
					/>
				</div>

				<div>
					<label for="clientEmail" class="text-secondary-700 mb-1 block text-sm font-medium">
						Client Email
					</label>
					<input id="clientEmail" type="email" class="input" bind:value={formData.client!.email} />
				</div>

				<div class="md:col-span-2">
					<label for="clientAddress" class="text-secondary-700 mb-1 block text-sm font-medium">
						Client Address
					</label>
					<textarea
						id="clientAddress"
						class="input min-h-[80px]"
						bind:value={formData.client!.address}
					></textarea>
				</div>
			</div>
		</div>

		<!-- Invoice Details -->
		<div class="mb-6">
			<h3 class="mb-4 text-lg font-medium">Invoice Details</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#if isEditing}
					<div>
						<label for="invoiceNumber" class="text-secondary-700 mb-1 block text-sm font-medium">
							Invoice Number
						</label>
						<input
							id="invoiceNumber"
							type="text"
							class="input"
							bind:value={formData.number}
							disabled={isEditing}
						/>
					</div>
				{/if}

				<div>
					<label for="invoiceDate" class="text-secondary-700 mb-1 block text-sm font-medium">
						Issue Date
					</label>
					<input id="invoiceDate" type="date" class="input" bind:value={formData.date} />
				</div>

				<div>
					<label for="dueDate" class="text-secondary-700 mb-1 block text-sm font-medium">
						Due Date
					</label>
					<input id="dueDate" type="date" class="input" bind:value={formData.dueDate} />
				</div>
			</div>
		</div>

		<!-- Line Items -->
		<div class="mb-6">
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-medium">Line Items</h3>
				<button type="button" class="btn btn-secondary text-sm" onclick={addItem}>
					Add Item
				</button>
			</div>

			<div class="overflow-x-auto">
				<table class="mb-4 w-full">
					<thead>
						<tr class="border-secondary-200 border-b">
							<th class="text-secondary-700 w-5/12 px-2 py-2 text-left text-sm font-medium"
								>Description</th
							>
							<th class="text-secondary-700 w-2/12 px-2 py-2 text-right text-sm font-medium"
								>Quantity</th
							>
							<th class="text-secondary-700 w-2/12 px-2 py-2 text-right text-sm font-medium"
								>Rate</th
							>
							<th class="text-secondary-700 w-2/12 px-2 py-2 text-right text-sm font-medium"
								>Amount</th
							>
							<th class="w-1/12 px-2 py-2"></th>
						</tr>
					</thead>
					<tbody>
						{#each formData.items || [] as item, index (item.id)}
							<tr class="border-secondary-100 border-b">
								<td class="px-2 py-3">
									<input
										type="text"
										class="input"
										placeholder="Item description"
										bind:value={item.description}
										oninput={() => updateLineItem(index, 'description', item.description)}
									/>
								</td>
								<td class="px-2 py-3">
									<input
										type="number"
										min="1"
										class="input text-right"
										bind:value={item.quantity}
										oninput={() => updateLineItem(index, 'quantity', item.quantity)}
									/>
								</td>
								<td class="px-2 py-3">
									<input
										type="number"
										min="0"
										step="0.01"
										class="input text-right"
										bind:value={item.rate}
										oninput={() => updateLineItem(index, 'rate', item.rate)}
									/>
								</td>
								<td class="px-2 py-3 text-right font-medium">
									{formatCurrency(item.amount)}
								</td>
								<td class="px-2 py-3 text-center">
									<button
										aria-labelledby="remove"
										type="button"
										class="text-error-600 hover:text-error-800"
										onclick={() => removeItem(index)}
										disabled={formData.items!.length === 1}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<!-- Totals -->
		<div class="mb-6 flex justify-end">
			<div class="w-full md:w-1/3">
				<div class="flex justify-between py-2">
					<span class="text-secondary-700">Subtotal:</span>
					<span class="font-medium">{formatCurrency(subtotal)}</span>
				</div>
				<div class="border-secondary-200 flex justify-between border-b py-2">
					<span class="text-secondary-700">Tax (10%):</span>
					<span class="font-medium">{formatCurrency(tax)}</span>
				</div>
				<div class="flex justify-between py-2 text-lg font-semibold">
					<span>Total:</span>
					<span>{formatCurrency(total)}</span>
				</div>
			</div>
		</div>

		<!-- Notes -->
		<div class="mb-6">
			<label for="notes" class="text-secondary-700 mb-1 block text-sm font-medium"> Notes </label>
			<textarea
				id="notes"
				class="input min-h-[100px]"
				placeholder="Additional notes for the client"
				bind:value={formData.notes}
			></textarea>
		</div>

		<!-- Actions -->
		<div class="flex justify-end space-x-4">
			<button type="button" class="btn btn-secondary" onclick={cancel}> Cancel </button>
			<button type="submit" class="btn btn-primary">
				{isEditing ? 'Update Invoice' : 'Create Invoice'}
			</button>
		</div>
	</form>
</div>
