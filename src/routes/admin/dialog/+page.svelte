<script>
	import AddNewAddress from '$lib/pages/dialog/add-new-address.svelte';
	import AddNewCard from '$lib/pages/dialog/add-new-card.svelte';
	import AddPaymentMethod from '$lib/pages/dialog/add-payment-method.svelte';
	import CreateApp from '$lib/pages/dialog/create-app.svelte';
	import EditUserInfo from '$lib/pages/dialog/edit-user-info.svelte';
	import PaymentProviders from '$lib/pages/dialog/payment-providers.svelte';
	import Pricing from '$lib/pages/dialog/pricing.svelte';
	import ReferAndEarn from '$lib/pages/dialog/refer-and-earn.svelte';
	import ShareProject from '$lib/pages/dialog/share-project.svelte';
	import TwoFactorAuthentication from '$lib/pages/dialog/two-factor-authentication.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Dialog</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
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
</div>
