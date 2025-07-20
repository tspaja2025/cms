<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import * as Accordion from '$lib/components/ui/accordion/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Basic</Card.Title>
	</Card.Header>
	<Card.Content>
		<div>
			<Label for="name">Name</Label>
			<Input type="text" id="name" />
		</div>
		<div>
			<Label for="email">Email</Label>
			<Input type="email" id="email" />
			<p class="text-xs">You can use letters, numbers & periods</p>
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input type="password" id="password" />
			<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
		</div>
		<div>
			<Label for="confirm_password">Confirm Password</Label>
			<Input type="password" id="confirm_password" />
			<p class="text-xs">Make sure to type the same password as above</p>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button>Get Started!</Button>
	</Card.Footer>
</Card.Root>

<Card.Root class="mt-4">
	<Card.Header>
		<Card.Title>Multi Column with Form Separator</Card.Title>
	</Card.Header>
	<Card.Content>
		<p class="mb-4 text-xs">1. Account Details</p>
		<div>
			<Label for="name">Name</Label>
			<Input type="text" id="name" />
		</div>
		<div>
			<Label for="email">Email</Label>
			<Input type="email" id="email" />
			<p class="text-xs">You can use letters, numbers & periods</p>
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input type="password" id="password" />
			<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
		</div>
		<div>
			<Label for="confirm_password">Confirm Password</Label>
			<Input type="password" id="confirm_password" />
			<p class="text-xs">Make sure to type the same password as above</p>
		</div>
		<p class="my-2 text-xs">2. Personal Info</p>
		<div>
			<Label for="name">Name</Label>
			<Input type="text" id="name" />
		</div>
		<div>
			<Label for="email">Email</Label>
			<Input type="email" id="email" />
			<p class="text-xs">You can use letters, numbers & periods</p>
		</div>
		<div>
			<Label for="password">Password</Label>
			<Input type="password" id="password" />
			<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
		</div>
		<div>
			<Label for="confirm_password">Confirm Password</Label>
			<Input type="password" id="confirm_password" />
			<p class="text-xs">Make sure to type the same password as above</p>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button>Submit</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>

<Card.Root class="mt-4">
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
			<Tabs.Content value="personal_info">
				<div>
					<Label for="name">Name</Label>
					<Input type="text" id="name" />
				</div>
				<div>
					<Label for="email">Email</Label>
					<Input type="email" id="email" />
					<p class="text-xs">You can use letters, numbers & periods</p>
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input type="password" id="password" />
					<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
				</div>
				<div>
					<Label for="confirm_password">Confirm Password</Label>
					<Input type="password" id="confirm_password" />
					<p class="text-xs">Make sure to type the same password as above</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="account_details">
				<div>
					<Label for="name">Name</Label>
					<Input type="text" id="name" />
				</div>
				<div>
					<Label for="email">Email</Label>
					<Input type="email" id="email" />
					<p class="text-xs">You can use letters, numbers & periods</p>
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input type="password" id="password" />
					<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
				</div>
				<div>
					<Label for="confirm_password">Confirm Password</Label>
					<Input type="password" id="confirm_password" />
					<p class="text-xs">Make sure to type the same password as above</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="social_links">
				<div>
					<Label for="name">Name</Label>
					<Input type="text" id="name" />
				</div>
				<div>
					<Label for="email">Email</Label>
					<Input type="email" id="email" />
					<p class="text-xs">You can use letters, numbers & periods</p>
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input type="password" id="password" />
					<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
				</div>
				<div>
					<Label for="confirm_password">Confirm Password</Label>
					<Input type="password" id="confirm_password" />
					<p class="text-xs">Make sure to type the same password as above</p>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</Card.Content>
	<Card.Footer>
		<Button>Submit</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>

<Card.Root class="mt-4">
	<Card.Header>
		<Card.Title>Collapsible Sections</Card.Title>
	</Card.Header>
	<Card.Content>
		<Accordion.Root type="single" value="item-1">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Delivery Address</Accordion.Trigger>
				<Accordion.Content>
					<div>
						<Label for="name">Name</Label>
						<Input type="text" id="name" />
					</div>
					<div>
						<Label for="email">Email</Label>
						<Input type="email" id="email" />
						<p class="text-xs">You can use letters, numbers & periods</p>
					</div>
					<div>
						<Label for="password">Password</Label>
						<Input type="password" id="password" />
						<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
					</div>
					<div>
						<Label for="confirm_password">Confirm Password</Label>
						<Input type="password" id="confirm_password" />
						<p class="text-xs">Make sure to type the same password as above</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Delivery Options</Accordion.Trigger>
				<Accordion.Content>
					<div>
						<Label for="name">Name</Label>
						<Input type="text" id="name" />
					</div>
					<div>
						<Label for="email">Email</Label>
						<Input type="email" id="email" />
						<p class="text-xs">You can use letters, numbers & periods</p>
					</div>
					<div>
						<Label for="password">Password</Label>
						<Input type="password" id="password" />
						<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
					</div>
					<div>
						<Label for="confirm_password">Confirm Password</Label>
						<Input type="password" id="confirm_password" />
						<p class="text-xs">Make sure to type the same password as above</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Delivery Method</Accordion.Trigger>
				<Accordion.Content>
					<div>
						<Label for="name">Name</Label>
						<Input type="text" id="name" />
					</div>
					<div>
						<Label for="email">Email</Label>
						<Input type="email" id="email" />
						<p class="text-xs">You can use letters, numbers & periods</p>
					</div>
					<div>
						<Label for="password">Password</Label>
						<Input type="password" id="password" />
						<p class="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</p>
					</div>
					<div>
						<Label for="confirm_password">Confirm Password</Label>
						<Input type="password" id="confirm_password" />
						<p class="text-xs">Make sure to type the same password as above</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Card.Content>
	<Card.Footer>
		<Button>Submit</Button>
		<Button variant="secondary">Reset</Button>
	</Card.Footer>
</Card.Root>
