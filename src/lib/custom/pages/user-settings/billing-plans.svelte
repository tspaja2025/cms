<script lang="ts">
	import * as Table from '$lib/components/ui/table/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Select from '$lib/components/ui/select/index';
	import * as RadioGroup from '$lib/components/ui/radio-group/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Checkbox } from '$lib/components/ui/checkbox/index';
	import { Switch } from '$lib/components/ui/switch/index';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import CheckIcon from '@lucide/svelte/icons/check';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EllipsisVerticalIcon from '@lucide/svelte/icons/ellipsis-vertical';
	import ArrowDownToLineIcon from '@lucide/svelte/icons/arrow-down-to-line';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';
	import SendIcon from '@lucide/svelte/icons/send';
	import MailIcon from '@lucide/svelte/icons/mail';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';

	let paymentMethod = $state('cards');
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Current Plan</Card.Title>
	</Card.Header>
	<Card.Content></Card.Content>
</Card.Root>
<Card.Root>
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
				<div class="space-y-2">
					<Label for="card_number">Card Number</Label>
					<Input type="text" id="card_number" />
				</div>
				<div class="flex space-x-4">
					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input type="text" id="name" />
					</div>
					<div class="space-y-2">
						<Label for="expiration_date">Expiration Date</Label>
						<Input type="text" id="expiration_date" />
					</div>
				</div>
				<div class="space-y-2">
					<Label for="cvv_code">CVV Code</Label>
					<Input type="text" id="cvv_code" />
				</div>
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
<Card.Root>
	<Card.Header>
		<Card.Title>Billing Address</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col space-y-4">
		<div class="flex space-x-4">
			<div class="flex-1 space-y-4">
				<div class="space-y-2">
					<Label for="company_name">Company Name</Label>
					<Input type="text" id="company_name" />
				</div>
				<div class="space-y-2">
					<Label for="tax_id">TAX ID</Label>
					<Input type="text" id="tax_id" />
				</div>
				<div class="space-y-2">
					<Label for="mobile_number">Mobile Number</Label>
					<Input type="text" id="mobile_number" />
				</div>
			</div>
			<div class="flex-1 space-y-4">
				<div class="space-y-2">
					<Label for="billing_email">Billing Email</Label>
					<Input type="text" id="billing_email" />
				</div>
				<div class="space-y-2">
					<Label for="vat_number">VAT Number</Label>
					<Input type="text" id="vat_number" />
				</div>
				<div class="space-y-2">
					<Label for="country">Country</Label>
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
		<div class="space-y-2">
			<Label for="billing_address">Billing Address</Label>
			<Input type="text" id="billing_address" />
		</div>
		<div class="flex space-x-4">
			<div class="flex-1 space-y-4">
				<div class="space-y-2">
					<Label for="stateTwo">State</Label>
					<Input type="text" id="stateTwo" />
				</div>
			</div>
			<div class="flex-1 space-y-4">
				<div class="space-y-2">
					<Label for="zip_code">Zip Code</Label>
					<Input type="text" id="zip_code" />
				</div>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button>Save Changes</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
<Card.Root>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 1</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-green-200 text-green-500"
						>
							<CheckIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 2</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-blue-200 text-blue-500"
						>
							<ArrowDownIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 3</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-gray-500"
						>
							<SendIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 4</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-purple-200 text-purple-500"
						>
							<MailIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 5</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-200 text-yellow-500"
						>
							<ChartPieIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
				<Table.Row>
					<Table.Cell><Checkbox /></Table.Cell>
					<Table.Cell># 6</Table.Cell>
					<Table.Cell>
						<div
							class="flex h-7 w-7 items-center justify-center rounded-full bg-red-200 text-red-500"
						>
							<AlertCircleIcon class="h-5 w-5" />
						</div>
					</Table.Cell>
					<Table.Cell>John Doe</Table.Cell>
					<Table.Cell>$3000</Table.Cell>
					<Table.Cell>13 July 2025</Table.Cell>
					<Table.Cell>$325</Table.Cell>
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
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
