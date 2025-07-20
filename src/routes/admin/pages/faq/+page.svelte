<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import { Input } from '$lib/components/ui/input/index';
</script>

<div class="mb-4 flex h-32 flex-col items-center justify-center space-y-4">
	<div class="flex flex-col items-center justify-center">
		<h2 class="text-2xl">How can we help?</h2>
		<p class="text-sm">or choose a category to quickly find the help you need</p>
	</div>
	<Input class="w-72" type="search" placeholder="Ask a question..." />
</div>

<Tabs.Root value="payment">
	<Tabs.List>
		<Tabs.Trigger value="payment">Payment</Tabs.Trigger>
		<Tabs.Trigger value="deliver">Deliver</Tabs.Trigger>
		<Tabs.Trigger value="cancellation_return">Cancellation & Return</Tabs.Trigger>
		<Tabs.Trigger value="my_orders">My Orders</Tabs.Trigger>
		<Tabs.Trigger value="product_services">Product & Services</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="payment">
		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>When is payment taken for my order?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>How do I pay for my order?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger
					>What should I do if I'm having trouble placing an order?</Accordion.Trigger
				>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-4">
				<Accordion.Trigger
					>Which license do I need for an end product that is only accessible to paying users?</Accordion.Trigger
				>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-5">
				<Accordion.Trigger>Does my subscription automatically renew?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Tabs.Content>
	<Tabs.Content value="deliver">
		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>How would you ship my order?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>What is the delivery cost of my order?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>What to do if my product arrives damaged?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Tabs.Content>
	<Tabs.Content value="cancellation_return">
		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Can I cancel my Order?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Can I return my product?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Where can I view status of return?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Tabs.Content>
	<Tabs.Content value="my_orders">
		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Has my order been successful?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>My Promotion Code is not working, what can I do?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>How do I track my Orders?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Tabs.Content>
	<Tabs.Content value="product_services">
		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Will I be notified once my order has shipped?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Where can I find warranty information?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>How can I purchase additional warranty coverage?</Accordion.Trigger>
				<Accordion.Content></Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</Tabs.Content>
</Tabs.Root>
