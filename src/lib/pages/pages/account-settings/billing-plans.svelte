<script>
	import { Badge } from '$lib/components/ui/badge';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as Select from '$lib/components/ui/select';
	import { Switch } from '$lib/components/ui/switch';
	import * as Table from '$lib/components/ui/table';
	import Field from '$lib/custom/input-field/field.svelte';
	import { initialInvoices } from '$lib/store';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ArrowDownToLineIcon from '@lucide/svelte/icons/arrow-down-to-line';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import CopyIcon from '@lucide/svelte/icons/copy';

	let paymentMethod = $state('cards');
</script>

<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Current Plan</Card.Title>
	</Card.Header>
	<Card.Content></Card.Content>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Payment Method</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-4">
		<RadioGroup.Root class="flex" bind:value={paymentMethod}>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="cards" id="r1" />
				<Label for="r1">Credit/Debit/ATM Card</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="cod_cheque" id="r2" />
				<Label for="r2">COD/Cheque</Label>
			</div>
		</RadioGroup.Root>

		{#if paymentMethod === 'cards'}
			<div class="space-y-4">
				<Field label="Card Number" id="card_number" />
				<div class="flex space-x-4">
					<Field label="Name" id="name" autocomplete="name" />
					<Field label="Expiration Date" id="expiration_date" />
				</div>
				<Field label="CVV Code" id="cvv_code" />
				<div class="flex space-x-2">
					<Switch id="save" />
					<Label for="save">Save Card for future billing?</Label>
				</div>
			</div>
		{:else}
			<div class="space-y-4">
				<p>
					Cash on delivery is a mode of payment where you make the payment after the goods/services
					are received. You can pay cash or make the payment via debit/credit card directly to the
					delivery person.
				</p>
				<Button>Save Changes</Button>
				<Button variant="secondary">Reset</Button>
			</div>
		{/if}
	</Card.Content>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Billing Address</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col space-y-4">
		<div class="flex space-x-4">
			<div class="flex-1 space-y-4">
				<Field label="Company Name" id="company_name" />
				<Field label="TAX ID" id="tax_id" />
				<Field label="Mobile Number" id="mobile_number" />
			</div>
			<div class="flex-1 space-y-4">
				<Field label="Billing Email" id="billing_email" />
				<Field label="Billing VAT Number" id="vat_number" />
				<div class="space-y-2">
					<Label>Country</Label>
					<Select.Root type="single">
						<Select.Trigger class="w-full">Country</Select.Trigger>
						<Select.Content>
							<Select.Item value="australia">Australia</Select.Item>
							<Select.Item value="canada">Canada</Select.Item>
							<Select.Item value="france">France</Select.Item>
							<Select.Item value="germany">Germany</Select.Item>
							<Select.Item value="united_kingdom">United Kingdom</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</div>
		<Field label="Billing Address" id="billing_address" />
		<div class="flex space-x-4">
			<div class="flex-1 space-y-4">
				<Field label="State" id="stateTwo" />
			</div>
			<div class="flex-1 space-y-4">
				<Field label="Zip Code" id="zip_codeTwo" />
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="gap-2">
		<Button>Save Changes</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
<Card.Root
	class="bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
>
	<Card.Header>
		<Card.Title>Invoices</Card.Title>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head><Checkbox /></Table.Head>
					<Table.Head>#</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Client</Table.Head>
					<Table.Head>Total</Table.Head>
					<Table.Head>Issued Date</Table.Head>
					<Table.Head>Balance</Table.Head>
					<Table.Head>Action</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each initialInvoices as item, index (index)}
					<Table.Row>
						<Table.Cell><Checkbox /></Table.Cell>
						<Table.Cell>{item.number}</Table.Cell>
						<Table.Cell><Badge>{item.status}</Badge></Table.Cell>
						<Table.Cell>{item.client.name}</Table.Cell>
						<Table.Cell>{item.subtotal}</Table.Cell>
						<Table.Cell>{item.date}</Table.Cell>
						<Table.Cell>{item.total}</Table.Cell>
						<Table.Cell>
							<Button variant="ghost"><TrashIcon /></Button>
							<Button variant="ghost"><EyeIcon /></Button>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost' })}>
									<EllipsisVerticalIcon />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Item><ArrowDownToLineIcon />Download</DropdownMenu.Item>
									<DropdownMenu.Item><PencilIcon />Edit</DropdownMenu.Item>
									<DropdownMenu.Item><CopyIcon />Duplicate</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
