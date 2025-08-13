<script>
	import * as Tabs from '$lib/components/ui/tabs/index';
	import Permissions from '$lib/pages/roles-permissions/permissions.svelte';
	import Roles from '$lib/pages/roles-permissions/roles.svelte';
</script>

<svelte:head>
	<title>CMS | Admin | Roles and Permissions</title>
	<meta name="description" content="CMS" />
</svelte:head>

<div class="mx-auto grid gap-4 md:max-w-full lg:max-w-7xl">
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
		<Tabs.Root value="permissions">
			<Tabs.List>
				<Tabs.Trigger value="permissions">Permissions</Tabs.Trigger>
				<Tabs.Trigger value="roles">Roles</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="permissions">
				<Permissions />
			</Tabs.Content>
			<Tabs.Content value="roles">
				<Roles />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
