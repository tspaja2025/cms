<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import * as Alert from '$lib/components/ui/alert';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Switch } from '$lib/components/ui/switch';
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

	let confirmDelete = $state(false);
	let paymentMethod = $state('cards');
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<Tabs.Root value="Account">
	<Tabs.List class="w-full">
		<Tabs.Trigger value="account">Account</Tabs.Trigger>
		<Tabs.Trigger value="security">Security</Tabs.Trigger>
		<Tabs.Trigger value="billing-plans">Billing & Plans</Tabs.Trigger>
		<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
		<Tabs.Trigger value="connections">Connections</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="account" class="space-y-4">
		<Card.Root>
			<Card.Content class="flex space-x-4">
				<div class="flex-1 space-y-4">
					<div class="space-y-2">
						<Label for="firstname">First Name</Label>
						<Input type="text" id="firstname" />
					</div>
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input type="email" id="email" />
					</div>
					<div class="space-y-2">
						<Label for="phone_number">Phone Number</Label>
						<Input type="tel" id="phone_number" />
					</div>
					<div class="space-y-2">
						<Label for="state">State</Label>
						<Input type="text" id="state" />
					</div>
					<Select.Root type="single">
						<Select.Trigger class="w-full">Country</Select.Trigger>
						<Select.Content>
							<Select.Item value="australia">Australia</Select.Item>
							<Select.Item value="finland">Finland</Select.Item>
							<Select.Item value="germany">Germany</Select.Item>
							<Select.Item value="uk">UK</Select.Item>
							<Select.Item value="usa">USA</Select.Item>
						</Select.Content>
					</Select.Root>
					<Select.Root type="single">
						<Select.Trigger class="w-full">TimeZone</Select.Trigger>
						<Select.Content>
							<Select.Item value="international"
								>(GMT-12:00) International Date Line West</Select.Item
							>
							<Select.Item value="midway">(GMT-11:00) Midway Island, Samoa</Select.Item>
							<Select.Item value="hawaii">(GMT-10:00) Hawaii</Select.Item>
							<Select.Item value="alaska">(GMT-09:00) Alaska</Select.Item>
							<Select.Item value="pacific">(GMT-0:800) Pacific Time (US & Canada)</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex-1 space-y-4">
					<div class="space-y-2">
						<Label for="lastname">Last Name</Label>
						<Input type="text" id="lastname" />
					</div>
					<div class="space-y-2">
						<Label for="organisation">Organization</Label>
						<Input type="text" id="organisation" />
					</div>
					<div class="space-y-2">
						<Label for="address">Address</Label>
						<Input type="text" id="address" />
					</div>
					<div class="space-y-2">
						<Label for="zipcode">Zip Code</Label>
						<Input type="text" id="zipcode" />
					</div>
					<Select.Root type="multiple">
						<Select.Trigger class="w-full">Language</Select.Trigger>
						<Select.Content>
							<Select.Item value="Arabic">Arabic</Select.Item>
							<Select.Item value="English">English</Select.Item>
							<Select.Item value="French">French</Select.Item>
							<Select.Item value="German">German</Select.Item>
							<Select.Item value="Portuguese">Portuguese</Select.Item>
						</Select.Content>
					</Select.Root>
					<Select.Root type="single">
						<Select.Trigger class="w-full">Currency</Select.Trigger>
						<Select.Content>
							<Select.Item value="EUR">EUR</Select.Item>
							<Select.Item value="USD">USD</Select.Item>
							<Select.Item value="Pound">Pound</Select.Item>
							<Select.Item value="Bitcoin">Bitcoin</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</Card.Content>
			<Card.Footer class="space-x-4">
				<Button>Save Changes</Button>
				<Button variant="secondary">Reset</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Delete Account</Card.Title>
			</Card.Header>
			<Card.Content class="flex space-x-2">
				<Checkbox id="confirm" bind:checked={confirmDelete} />
				<Label for="confirm">I confirm my account deletion</Label>
			</Card.Content>
			<Card.Footer>
				<Button
					variant="destructive"
					class={confirmDelete ? '' : 'cursor-not-allowed bg-red-100 hover:bg-red-100'}
					>Delete Account</Button
				>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="security" class="space-y-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Change Password</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="space-y-2">
					<Label for="current_password">Current Password</Label>
					<Input type="password" id="current_password" />
				</div>
				<div class="flex space-x-4">
					<div class="flex-1 space-y-2">
						<Label for="new_password">New Password</Label>
						<Input type="password" id="new_password" />
					</div>
					<div class="flex-1 space-y-2">
						<Label for="confirm_new_password">Confirm New Password</Label>
						<Input type="password" id="confirm_new_password" />
					</div>
				</div>
				<Alert.Root variant="destructive">
					<AlertCircleIcon />
					<Alert.Title>Password Requirements</Alert.Title>
					<Alert.Description>
						<ul class="list-inside list-disc text-sm">
							<li>Minimum 8 characters long - the more, the better</li>
							<li>At least one lowercase & one uppercase character</li>
							<li>At least one number, symbol, or whitespace character</li>
						</ul>
					</Alert.Description>
				</Alert.Root>
			</Card.Content>
			<Card.Footer>
				<Button>Save Changes</Button>
				<Button variant="secondary">Reset</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Two-step Verification</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>Two factor authentication is not enabled yet.</p>
				<p>
					Two-factor authentication adds an additional layer of security to your account by
					requiring more than just a password to log in. <a
						href="/admin/pages/account-settings"
						class="text-blue-500 hover:text-blue-600">Learn more.</a
					>
				</p>
			</Card.Content>
			<Card.Footer>
				<Button>Enable two-factor authentication</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Create an API key</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<Select.Root type="single">
					<Select.Trigger>Choose the API key type</Select.Trigger>
					<Select.Content>
						<Select.Item value="full_control">Full Control</Select.Item>
						<Select.Item value="modify">Modify</Select.Item>
						<Select.Item value="read_execute">Read & Execute</Select.Item>
						<Select.Item value="list_folder_contents">List Folder Contents</Select.Item>
						<Select.Item value="read_only">Read Only</Select.Item>
						<Select.Item value="read_write">Read & Write</Select.Item>
					</Select.Content>
				</Select.Root>
				<div class="space-y-2">
					<Label for="key_name">Name the API key</Label>
					<Input type="text" id="key_name" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button>Create Key</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>API Key List & Access</Card.Title>
				<Card.Description
					>An API key is a simple encrypted string that identifies an application without any
					principal. They are useful for accessing public data anonymously, and are used to
					associate API requests with your project for quota and billing.</Card.Description
				>
			</Card.Header>
			<Card.Content></Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Recent Devices</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Browser</Table.Head>
							<Table.Head>Device</Table.Head>
							<Table.Head>Location</Table.Head>
							<Table.Head>Recent Activities</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Chrome on Windows</Table.Cell>
							<Table.Cell>HP Spectre 360</Table.Cell>
							<Table.Cell>Finland</Table.Cell>
							<Table.Cell>07, July 20:20</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Chrome on MacOS</Table.Cell>
							<Table.Cell>Apple iMac</Table.Cell>
							<Table.Cell>Finland</Table.Cell>
							<Table.Cell>07, July 20:20</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Chrome on Android</Table.Cell>
							<Table.Cell>Oneplus 9 Pro</Table.Cell>
							<Table.Cell>Finland</Table.Cell>
							<Table.Cell>07, July 20:20</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="billing-plans" class="space-y-4">
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
							Cash on delivery is a mode of payment where you make the payment after the
							goods/services are received. You can pay cash or make the payment via debit/credit
							card directly to the delivery person.
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
	</Tabs.Content>
	<Tabs.Content value="notifications" class="space-y-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Recent Devices</Card.Title>
				<Card.Description
					>We need permission from your browser to show notifications. Request Permission</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Type</Table.Head>
							<Table.Head>Email</Table.Head>
							<Table.Head>Browser</Table.Head>
							<Table.Head>App</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>New for you</Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Account activity</Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>A new browser used to sign in</Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox /></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>A new device is linked</Table.Cell>
							<Table.Cell><Checkbox checked /></Table.Cell>
							<Table.Cell><Checkbox /></Table.Cell>
							<Table.Cell><Checkbox /></Table.Cell>
						</Table.Row>
					</Table.Body>
					<Select.Root type="single">
						<Select.Trigger>When should we send you notifications?</Select.Trigger>
						<Select.Content>
							<Select.Item value="online">Only when I'm online</Select.Item>
							<Select.Item value="anytime">Anytime</Select.Item>
						</Select.Content>
					</Select.Root>
				</Table.Root>
			</Card.Content>
			<Card.Footer>
				<Button>Save Changes</Button>
				<Button variant="secondary">Reset</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="connections" class="space-y-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Connected Accounts</Card.Title>
				<Card.Description
					>Display content from your connected accounts on your site</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Google</h3>
						<p class="text-xs">Calendar and Contacts</p>
					</div>
					<Switch checked />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Slack</h3>
						<p class="text-xs">Communications</p>
					</div>
					<Switch />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Github</h3>
						<p class="text-xs">Manage your Git repositories</p>
					</div>
					<Switch checked />
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Social Accounts</Card.Title>
				<Card.Description>Display content from social accounts on your site</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Facebook</h3>
						<p class="text-xs">-</p>
					</div>
					<Switch checked />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Twitter/X</h3>
						<p class="text-xs">-</p>
					</div>
					<Switch />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<h3 class="font-medium">Linkedin</h3>
						<p class="text-xs">-</p>
					</div>
					<Switch checked />
				</div>
			</Card.Content>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
