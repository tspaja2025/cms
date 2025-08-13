<script>
	import * as Accordion from '$lib/components/ui/accordion/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
</script>

<svelte:head>
	<title>CMS | Admin | Forms</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
		<Card.Root
			class="h-fit bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
		>
			<Card.Header>
				<Card.Title>Form with Tabs</Card.Title>
			</Card.Header>
			<Card.Content>
				<Tabs.Root value="personal_info">
					<Tabs.List>
						<Tabs.Trigger value="personal_info">Personal Info</Tabs.Trigger>
						<Tabs.Trigger value="account_details">Account Details</Tabs.Trigger>
						<Tabs.Trigger value="social_links">Social Links</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="personal_info" class="space-y-4">
						<div class="grid gap-2">
							<Label for="name">Name</Label>
							<Input type="text" id="name" />
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input type="email" id="email" />
							<p class="text-xs">You can use letters, numbers & periods</p>
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input type="password" id="password" />
							<p class="text-xs">
								Use 8 or more characters with a mix of letters, numbers & symbols
							</p>
						</div>
						<div class="grid gap-2">
							<Label for="confirm_password">Confirm Password</Label>
							<Input type="password" id="confirm_password" />
							<p class="text-xs">Make sure to type the same password as above</p>
						</div>
					</Tabs.Content>
					<Tabs.Content value="account_details" class="space-y-4">
						<div class="grid gap-2">
							<Label for="name">Name</Label>
							<Input type="text" id="name" />
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input type="email" id="email" />
							<p class="text-xs">You can use letters, numbers & periods</p>
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input type="password" id="password" />
							<p class="text-xs">
								Use 8 or more characters with a mix of letters, numbers & symbols
							</p>
						</div>
						<div class="grid gap-2">
							<Label for="confirm_password">Confirm Password</Label>
							<Input type="password" id="confirm_password" />
							<p class="text-xs">Make sure to type the same password as above</p>
						</div>
					</Tabs.Content>
					<Tabs.Content value="social_links" class="space-y-4">
						<div class="grid gap-2">
							<Label for="name">Name</Label>
							<Input type="text" id="name" />
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input type="email" id="email" />
							<p class="text-xs">You can use letters, numbers & periods</p>
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input type="password" id="password" />
							<p class="text-xs">
								Use 8 or more characters with a mix of letters, numbers & symbols
							</p>
						</div>
						<div class="grid gap-2">
							<Label for="confirm_password">Confirm Password</Label>
							<Input type="password" id="confirm_password" />
							<p class="text-xs">Make sure to type the same password as above</p>
						</div>
					</Tabs.Content>
				</Tabs.Root>
			</Card.Content>
			<Card.Footer class="flex gap-2">
				<Button>Submit</Button>
				<Button variant="secondary">Reset</Button>
			</Card.Footer>
		</Card.Root>

		<Card.Root
			class="h-fit bg-gradient-to-t from-primary/5 to-card
shadow-xs dark:bg-card"
		>
			<Card.Header>
				<Card.Title>Collapsible Sections</Card.Title>
			</Card.Header>
			<Card.Content>
				<Accordion.Root type="single" value="item-1">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Delivery Address</Accordion.Trigger>
						<Accordion.Content class="space-y-4">
							<div class="grid gap-2">
								<Label for="name">Name</Label>
								<Input type="text" id="name" />
							</div>
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input type="email" id="email" />
								<p class="text-xs">You can use letters, numbers & periods</p>
							</div>
							<div class="grid gap-2">
								<Label for="password">Password</Label>
								<Input type="password" id="password" />
								<p class="text-xs">
									Use 8 or more characters with a mix of letters, numbers & symbols
								</p>
							</div>
							<div class="grid gap-2">
								<Label for="confirm_password">Confirm Password</Label>
								<Input type="password" id="confirm_password" />
								<p class="text-xs">Make sure to type the same password as above</p>
							</div>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger>Delivery Options</Accordion.Trigger>
						<Accordion.Content class="space-y-4">
							<div class="grid gap-2">
								<Label for="name">Name</Label>
								<Input type="text" id="name" />
							</div>
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input type="email" id="email" />
								<p class="text-xs">You can use letters, numbers & periods</p>
							</div>
							<div class="grid gap-2">
								<Label for="password">Password</Label>
								<Input type="password" id="password" />
								<p class="text-xs">
									Use 8 or more characters with a mix of letters, numbers & symbols
								</p>
							</div>
							<div class="grid gap-2">
								<Label for="confirm_password">Confirm Password</Label>
								<Input type="password" id="confirm_password" />
								<p class="text-xs">Make sure to type the same password as above</p>
							</div>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger>Delivery Method</Accordion.Trigger>
						<Accordion.Content class="space-y-4">
							<div class="grid gap-2">
								<Label for="name">Name</Label>
								<Input type="text" id="name" />
							</div>
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input type="email" id="email" />
								<p class="text-xs">You can use letters, numbers & periods</p>
							</div>
							<div class="grid gap-2">
								<Label for="password">Password</Label>
								<Input type="password" id="password" />
								<p class="text-xs">
									Use 8 or more characters with a mix of letters, numbers & symbols
								</p>
							</div>
							<div class="grid gap-2">
								<Label for="confirm_password">Confirm Password</Label>
								<Input type="password" id="confirm_password" />
								<p class="text-xs">Make sure to type the same password as above</p>
							</div>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</Card.Content>
			<Card.Footer class="flex gap-2">
				<Button>Submit</Button>
				<Button variant="secondary">Reset</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
