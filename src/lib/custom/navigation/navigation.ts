import { base } from '$app/paths';

export const navigation = [
	{
		parent: 'Dashboards',
		children: [
			{ name: 'CRM', href: `${base}/admin/dashboards/crm` },
			{ name: 'Analytics', href: `${base}/admin/dashboards/analytics` }
		]
	},
	{
		header: 'Apps and Pages'
	},
	{
		parent: 'eCommerce',
		children: [
			{ name: 'Dashboard', href: `${base}/admin/ecommerce/dashboard` },
			{
				parent: 'Products',
				children: [{ name: 'List', href: `${base}/admin/ecommerce/products/list` }]
			},
			{
				parent: 'Orders',
				children: [{ name: 'List', href: `${base}/admin/ecommerce/orders/list` }]
			},
			{
				parent: 'Customers',
				children: [{ name: 'List', href: `${base}/admin/ecommerce/customers/list` }]
			}
		]
	},
	{ name: 'Academy', href: `${base}/admin/academy` },
	{ name: 'Logistics', href: `${base}/admin/logistics` },
	{ name: 'Email', href: `${base}/admin/email` },
	{ name: 'Chat', href: `${base}/admin/chat` },
	{ name: 'Calendar', href: `${base}/admin/calendar` },
	{ name: 'Kanban', href: `${base}/admin/kanban` },
	{
		parent: 'Invoice',
		children: [
			{ name: 'Add', href: `${base}/admin/invoice/add` },
			{ name: 'Edit', href: `${base}/admin/invoice/edit` },
			{ name: 'List', href: `${base}/admin/invoice/list` },
			{ name: 'Preview', href: `${base}/admin/invoice/edit` }
		]
	},
	{
		parent: 'User',
		children: [
			{ name: 'List', href: `${base}/admin/user/list` },
			{ name: 'View', href: `${base}/admin/user/view` }
		]
	},
	{
		parent: 'Roles and Permissions',
		children: [
			{ name: 'Roles', href: `${base}/admin/roles-permissions/roles` },
			{ name: 'Permissions', href: `${base}/admin/roles-permissions/permissions` }
		]
	},
	{
		parent: 'Pages',
		children: [
			{ name: 'User Profile', href: `${base}/admin/pages/user-profile` },
			{ name: 'Account Settings', href: `${base}/admin/pages/account-settings` },
			{ name: 'FAQ', href: `${base}/admin/pages/faq` },
			{ name: 'Pricing', href: `${base}/admin/pages/pricing` }
		]
	},
	{
		parent: 'Authentication',
		children: [
			{
				name: 'Login',
				href: `${base}/admin/auth-pages/login`
			},
			{
				name: 'Register',
				href: `${base}/admin/auth-pages/register`
			},
			{
				name: 'Verify Email',
				href: `${base}/admin/auth-pages/verify-email`
			},
			{
				name: 'Forgot Password',
				href: `${base}/admin/auth-pages/forgot-password`
			},
			{
				name: 'Reset Password',
				href: `${base}/admin/auth-pages/reset-password`
			}
		]
	},
	{
		parent: 'Wizard Examples',
		children: [
			{ name: 'Checkout', href: `${base}/admin/examples/wizard/checkout` },
			{ name: 'Property Listing', href: `${base}/admin/examples/wizard/property-listing` },
			{ name: 'Create Deal', href: `${base}/admin/examples/wizard/create-deal` }
		]
	},
	{ name: 'Dialog Examples', href: `${base}/admin/examples/dialog` },
	{ header: 'Forms and Tables' },
	{ name: 'Forms Layouts', href: `${base}/admin/forms` },
	{ name: 'Tables', href: `${base}/admin/tables` },
	{ header: 'Charts and Misc' },
	{
		parent: 'Charts',
		children: [
			{ name: 'Apexchart', href: `${base}/admin/charts/apex` },
			{ name: 'Layerchart', href: `${base}/admin/charts/layer` }
		]
	},
	{ name: 'Components', href: 'https://www.shadcn-svelte.com/' }
];
