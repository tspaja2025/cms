<script lang="ts">
	import AddNewAddress from '$lib/custom/wizard/dialog/add-new-address.svelte';
	import AddNewCard from '$lib/custom/wizard/dialog/add-new-card.svelte';
	import AddPaymentMethod from '$lib/custom/wizard/dialog/add-payment-method.svelte';
	import CreateApp from '$lib/custom/wizard/dialog/create-app.svelte';
	import EditUserInfo from '$lib/custom/wizard/dialog/edit-user-info.svelte';
	import PaymentProviders from '$lib/custom/wizard/dialog/payment-providers.svelte';
	import Pricing from '$lib/custom/wizard/dialog/pricing.svelte';
	import ReferAndEarn from '$lib/custom/wizard/dialog/refer-and-earn.svelte';
	import ShareProject from '$lib/custom/wizard/dialog/share-project.svelte';
	import TwoFactorAuthentication from '$lib/custom/wizard/dialog/two-factor-authentication.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="grid grid-cols-3 gap-4">
	<AddNewCard />
	<EditUserInfo />
	<TwoFactorAuthentication />

	<AddNewAddress />
	<ShareProject />
	<ReferAndEarn />

	<AddPaymentMethod />
	<PaymentProviders />
	<Pricing />

	<CreateApp />
</div>
