<script lang="ts">
	import Button from '$lib/dashboard/ui/button.svelte';
	import Dropdown from '$lib/dashboard/ui/dropdown.svelte';
	import { MenuIcon, SearchIcon, LanguagesIcon, SunIcon, BellIcon, UserIcon } from '@lucide/svelte';

	let { children } = $props();
</script>

<div class="flex">
	<div class="h-screen w-72">
		<div class="flex h-16 w-full items-center justify-center">
			<h1 class="text-2xl font-bold">CMS</h1>
		</div>
		<div class="flex h-[calc(100vh-64px)] flex-col overflow-auto p-4">
			<Dropdown title="Dashboards">
				<Button href="/admin/dashboards/crm">CRM</Button>
				<Button href="/admin/dashboards/analytics">Analytics</Button>
				<Button href="/">eCommerce</Button>
				<Button href="/">Academy</Button>
				<Button href="/">Logistics</Button>
			</Dropdown>
			<Dropdown title="Front Pages">
				<Button href="/">Landing</Button>
				<Button href="/">Pricing</Button>
				<Button href="/">Payment</Button>
				<Button href="/">Checkout</Button>
				<Button href="/">Help Center</Button>
			</Dropdown>
			<h1 class="text-2xl font-bold">Apps & Pages</h1>
			<Dropdown title="Ecommerce">
				<Button href="/">Dashboard</Button>
				<Button href="/">Product</Button>
				<Button href="/">Order</Button>
				<Button href="/">Customer</Button>
				<Button href="/">Manage Review</Button>
				<Button href="/">Referrals</Button>
				<Button href="/">Settings</Button>
			</Dropdown>
			<Dropdown title="Academy">
				<Button href="/">Dashboard</Button>
				<Button href="/">Courses</Button>
				<Button href="/">Course Details</Button>
			</Dropdown>
			<Dropdown title="Logistics">
				<Button href="/">Dashboard</Button>
				<Button href="/">Fleet</Button>
			</Dropdown>
			<Button class="justify-start" href="/">Email</Button>
			<Button class="justify-start" href="/">Chat</Button>
			<Button class="justify-start" href="/">Calendar</Button>
			<Button class="justify-start" href="/">Kanban</Button>
			<Dropdown title="Invoice">
				<Button href="/">List</Button>
				<Button href="/">Preview</Button>
				<Button href="/">Edit</Button>
				<Button href="/">Add</Button>
			</Dropdown>
			<Dropdown title="User">
				<Button href="/">List</Button>
				<Button href="/">View</Button>
			</Dropdown>
			<Dropdown title="Roles & Permissions">
				<Button href="/">Roles</Button>
				<Button href="/">Permissions</Button>
			</Dropdown>
			<Dropdown title="Pages">
				<Button href="/">User Profile</Button>
				<Button href="/">Account Settings</Button>
				<Button href="/">Pricing</Button>
				<Button href="/">FAQ</Button>
				<Button href="/">Miscellaneous</Button>
			</Dropdown>
			<Dropdown title="Auth Pages">
				<Button href="/">Login</Button>
				<Button href="/">Register</Button>
				<Button href="/">Verify Email</Button>
				<Button href="/">Forgot Password</Button>
				<Button href="/">Reset Password</Button>
				<Button href="/">Two Step Verification</Button>
			</Dropdown>
			<Dropdown title="Wizard Examples">
				<Button href="/">Checkout</Button>
				<Button href="/">Property Listing</Button>
				<Button href="/">Create Deal</Button>
			</Dropdown>
			<Button class="justify-start" href="/">Dialog Examples</Button>
			<Dropdown title="Widget Examples">
				<Button href="/">Basic</Button>
				<Button href="/">Advanced</Button>
				<Button href="/">Statistics</Button>
				<Button href="/">Charts</Button>
				<Button href="/">Gamification</Button>
				<Button href="/">Actions</Button>
			</Dropdown>
			<h1 class="text-2xl font-bold">UI Elements</h1>
			<Button class="justify-start" href="/">Typography</Button>
			<Button class="justify-start" href="/">Icons</Button>
			<Dropdown title="Cards">
				<Button href="/">Basic</Button>
				<Button href="/">Advance</Button>
				<Button href="/">Widgets</Button>
				<Button href="/">Statistics</Button>
				<Button href="/">Gamification</Button>
				<Button href="/">Actions</Button>
			</Dropdown>
			<Dropdown title="Components">
				<Button href="/">Alert</Button>
				<Button href="/">Avatar</Button>
				<Button href="/">Badge</Button>
				<Button href="/">Button</Button>
				<Button href="/">Chip</Button>
				<Button href="/">Dialog</Button>
				<Button href="/">Expansion Panel</Button>
				<Button href="/">List</Button>
				<Button href="/">Menu</Button>
				<Button href="/">Pagination</Button>
				<Button href="/">Progress Circular</Button>
				<Button href="/">Progress Linear</Button>
				<Button href="/">Snackbar</Button>
				<Button href="/">Tabs</Button>
				<Button href="/">Timeline</Button>
				<Button href="/">Tooltip</Button>
			</Dropdown>
			<Dropdown title="Extensions">
				<Button href="/">Tour</Button>
				<Button href="/">Swiper</Button>
			</Dropdown>
			<h1 class="text-2xl font-bold">Forms & Tables</h1>
			<Dropdown title="Form Elements">
				<Button href="/">Autocomplete</Button>
				<Button href="/">Checkbox</Button>
				<Button href="/">Combobox</Button>
				<Button href="/">Date Time Picker</Button>
				<Button href="/">Editors</Button>
				<Button href="/">File Input</Button>
				<Button href="/">Radio</Button>
				<Button href="/">Custom Input</Button>
				<Button href="/">Range Slider</Button>
				<Button href="/">Rating</Button>
				<Button href="/">Select</Button>
				<Button href="/">Slider</Button>
				<Button href="/">Switch</Button>
				<Button href="/">Textarea</Button>
				<Button href="/">Textfield</Button>
			</Dropdown>
			<Button class="justify-start" href="/">Form Layouts</Button>
			<Dropdown title="Form Wizard">
				<Button href="/">Numbered</Button>
				<Button href="/">Icons</Button>
			</Dropdown>
			<Button class="justify-start" href="/">Form Validation</Button>
			<Dropdown title="Tables">
				<Button href="/">Simple Table</Button>
				<Button href="/">Data Table</Button>
			</Dropdown>
			<h1 class="text-2xl font-bold">Charts</h1>
			<Dropdown title="Charts">
				<Button href="/">Apex Chart</Button>
				<Button href="/">Chartjs</Button>
			</Dropdown>
			<h1 class="text-2xl font-bold">Other</h1>
			<Button class="justify-start" href="/">Access Control</Button>
			<Dropdown title="Nav Levels">
				<Button href="/">Level 2.1</Button>
				<Dropdown title="Level 2.2">
					<Button href="/">Level 3.1</Button>
					<Button href="/">Level 3.2</Button>
				</Dropdown>
			</Dropdown>
			<Button class="justify-start" disabled>Disabled Menu</Button>
			<Button class="justify-start" href="/">Raise Support</Button>
			<Button class="justify-start" href="/">Documentation</Button>
		</div>
	</div>
	<div class="flex-1">
		<nav class="flex h-16 w-full items-center px-4">
			<Button>
				<MenuIcon />
			</Button>
			<button>
				<SearchIcon />
			</button>
			<div class="flex-1"></div>
			<Button>
				<LanguagesIcon />
			</Button>
			<Button>
				<SunIcon />
			</Button>
			<Button>
				<BellIcon />
			</Button>
			<Button>
				<UserIcon />
			</Button>
		</nav>
		<div class="h-[calc(100vh-64px)] bg-neutral-100 p-4">
			{@render children()}
		</div>
	</div>
</div>
