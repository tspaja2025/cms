<script lang="ts">
	import AddNewAddress from '$lib/custom/dialog/add-new-address.svelte';
	import AddNewCard from '$lib/custom/dialog/add-new-card.svelte';
	import AddPaymentMethod from '$lib/custom/dialog/add-payment-method.svelte';
	import CreateApp from '$lib/custom/dialog/create-app.svelte';
	import EditUserInfo from '$lib/custom/dialog/edit-user-info.svelte';
	import PaymentProviders from '$lib/custom/dialog/payment-providers.svelte';
	import Pricing from '$lib/custom/dialog/pricing.svelte';
	import ReferAndEarn from '$lib/custom/dialog/refer-and-earn.svelte';
	import ShareProject from '$lib/custom/dialog/share-project.svelte';
	import TwoFactorAuthentication from '$lib/custom/dialog/two-factor-authentication.svelte';
</script>


<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="grid grid-cols-3 gap-4">
	<AddNewCard/>
	<EditUserInfo/>
	<TwoFactorAuthentication/>

	<AddNewAddress/>
	<ShareProject/>
	<ReferAndEarn/>

	<AddPaymentMethod/>
	<PaymentProviders/>
	<Pricing/>

	<CreateApp/>
</div>