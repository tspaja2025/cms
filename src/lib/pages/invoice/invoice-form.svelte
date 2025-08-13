<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Table from '$lib/components/ui/table/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { invoiceStore } from '$lib/store';
	import type { Invoice, LineItem } from '$lib/types';
	import { formatCurrency } from '$lib/utils';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import { onMount } from 'svelte';

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
		if (formData.items!.length === 0) {
			formData.items!.push(createEmptyItem());
		}
		calculateTotals();
	}

	function updateLineItem(index: number, field: keyof LineItem, value: string | number) {
		const items = [...formData.items!];
		const item = { ...items[index], [field]: value };

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
		tax = Math.round(subtotal * 0.1);
		total = subtotal + tax;

		formData.subtotal = subtotal;
		formData.tax = tax;
		formData.total = total;
	}

	function handleSubmit() {
		if (!validateForm()) return;

		if (isEditing && invoice.id) {
			invoiceStore.update(invoice.id, formData);
			goto(resolve(`/admin/invoice/edit/${invoice.id}`));
		} else {
			const newInvoiceId = invoiceStore.add({
				number: invoiceStore.generateInvoiceNumber(),
				date: new Date().toISOString().slice(0, 10),
				dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
				status: 'draft',
				...formData
			} as Invoice);

			goto(resolve(`/admin/invoice/edit/${newInvoiceId}`));
		}
	}

	function validateForm(): boolean {
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
			goto(resolve(`/admin/invoice/edit/${invoice.id}`));
		} else {
			goto(resolve('/admin/invoice/list'));
		}
	}

	onMount(() => {
		calculateTotals();

		if (!isEditing) {
			formData.date = new Date().toISOString().slice(0, 10);
			formData.dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
		}
	});
</script>

<Card.Root class="bg-gradient-to-t from-primary/5 to-card shadow-xs dark:bg-card">
	<Card.Header>
		<Card.Title>{isEditing ? 'Edit Invoice' : 'Create New Invoice'}</Card.Title>
	</Card.Header>

	<Card.Content>
		<form onsubmit={handleSubmit} class="space-y-6">
			<!-- Client Information -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Client Information</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="space-y-2">
						<Label for="clientName">Client Name*</Label>
						<Input id="clientName" bind:value={formData.client!.name} required />
					</div>

					<div class="space-y-2">
						<Label for="clientEmail">Client Email</Label>
						<Input id="clientEmail" type="email" bind:value={formData.client!.email} />
					</div>

					<div class="space-y-2 md:col-span-2">
						<Label for="clientAddress">Client Address</Label>
						<Textarea
							id="clientAddress"
							class="min-h-[80px]"
							bind:value={formData.client!.address}
						/>
					</div>
				</div>
			</div>

			<!-- Invoice Details -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Invoice Details</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					{#if isEditing}
						<div class="space-y-2">
							<Label for="invoiceNumber">Invoice Number</Label>
							<Input id="invoiceNumber" bind:value={formData.number} disabled={isEditing} />
						</div>
					{/if}

					<div class="space-y-2">
						<Label for="invoiceDate">Issue Date</Label>
						<Input id="invoiceDate" type="date" bind:value={formData.date} />
					</div>

					<div class="space-y-2">
						<Label for="dueDate">Due Date</Label>
						<Input id="dueDate" type="date" bind:value={formData.dueDate} />
					</div>
				</div>
			</div>

			<!-- Line Items -->
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-medium">Line Items</h3>
					<Button type="button" variant="outline" size="sm" onclick={addItem}>Add Item</Button>
				</div>

				<div class="rounded-md border">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head class="w-5/12">Description</Table.Head>
								<Table.Head class="w-2/12 text-right">Quantity</Table.Head>
								<Table.Head class="w-2/12 text-right">Rate</Table.Head>
								<Table.Head class="w-2/12 text-right">Amount</Table.Head>
								<Table.Head class="w-1/12"></Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each formData.items || [] as item, index (item.id)}
								<Table.Row>
									<Table.Cell>
										<Input
											id="item-description"
											type="text"
											placeholder="Item description"
											bind:value={item.description}
											oninput={() => updateLineItem(index, 'description', item.description)}
										/>
									</Table.Cell>
									<Table.Cell>
										<Input
											id="quantity"
											type="number"
											min="1"
											class="text-right"
											bind:value={item.quantity}
											oninput={() => updateLineItem(index, 'quantity', item.quantity)}
										/>
									</Table.Cell>
									<Table.Cell>
										<Input
											id="rate"
											type="number"
											min="0"
											step="0.01"
											class="text-right"
											bind:value={item.rate}
											oninput={() => updateLineItem(index, 'rate', item.rate)}
										/>
									</Table.Cell>
									<Table.Cell class="text-right font-medium">
										{formatCurrency(item.amount)}
									</Table.Cell>
									<Table.Cell class="text-center">
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onclick={() => removeItem(index)}
											disabled={formData.items!.length === 1}
										>
											<TrashIcon class="h-4 w-4 text-destructive" />
										</Button>
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			</div>

			<!-- Totals -->
			<div class="flex justify-end">
				<div class="w-full space-y-2 md:w-1/3">
					<div class="flex justify-between">
						<span class="text-muted-foreground">Subtotal:</span>
						<span class="font-medium">{formatCurrency(subtotal)}</span>
					</div>
					<div class="flex justify-between border-b pb-2">
						<span class="text-muted-foreground">Tax (10%):</span>
						<span class="font-medium">{formatCurrency(tax)}</span>
					</div>
					<div class="flex justify-between pt-2 text-lg font-semibold">
						<span>Total:</span>
						<span>{formatCurrency(total)}</span>
					</div>
				</div>
			</div>

			<!-- Notes -->
			<div class="space-y-2">
				<Label for="notes">Notes</Label>
				<Textarea
					id="notes"
					class="min-h-[100px]"
					placeholder="Additional notes for the client"
					bind:value={formData.notes}
				/>
			</div>

			<!-- Actions -->
			<div class="flex justify-end gap-4">
				<Button type="button" variant="outline" onclick={() => goto(resolve('/admin/invoice/list'))}
					>Cancel</Button
				>
				<Button type="submit">
					{isEditing ? 'Update Invoice' : 'Create Invoice'}
				</Button>
			</div>
		</form>
	</Card.Content>
</Card.Root>
