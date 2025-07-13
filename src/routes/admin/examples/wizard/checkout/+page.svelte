<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Alert from '$lib/components/ui/alert';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Switch } from '$lib/components/ui/switch';
	import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
	import MapPinHouseIcon from '@lucide/svelte/icons/map-pin-house';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import ReceiptTextIcon from '@lucide/svelte/icons/receipt-text';
	import SquarePercentIcon from '@lucide/svelte/icons/square-percent';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<Card.Root>
	<Card.Content>
		<Tabs.Root value="cart">
			<Tabs.List class="h-auto w-full">
				<Tabs.Trigger value="cart" class="h-auto flex-col">
					<ShoppingCartIcon class="!h-10 !w-10" /> Cart
				</Tabs.Trigger>
				<Tabs.Trigger value="address" class="h-auto flex-col">
					<MapPinHouseIcon class="!h-10 !w-10" /> Address
				</Tabs.Trigger>
				<Tabs.Trigger value="payment" class="h-auto flex-col">
					<CreditCardIcon class="!h-10 !w-10" /> Payment
				</Tabs.Trigger>
				<Tabs.Trigger value="confirmation" class="h-auto flex-col">
					<ReceiptTextIcon class="!h-10 !w-10" /> Confirmation
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs-content value="cart">
				<div>
					<div>
						<Alert.Root class="bg-green-100 text-green-500">
							<SquarePercentIcon />
							<Alert.Title>Available Offers</Alert.Title>
							<Alert.Description>
								<ul class="list-inside text-sm">
									<li class="text-green-500">
										- 10% Instant Discount on World Bank of Earth Corp Debit and Credit cards
									</li>
									<li class="text-green-500">
										- 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
									</li>
								</ul>
							</Alert.Description>
						</Alert.Root>
					</div>
					<div></div>
				</div>
			</Tabs-content>
			<Tabs-content value="address"></Tabs-content>
			<Tabs-content value="payment"></Tabs-content>
			<Tabs-content value="confirmation"></Tabs-content>
		</Tabs.Root>
	</Card.Content>
</Card.Root>
