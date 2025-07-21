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
		parent: 'Front Pages',
		children: [
			{ name: 'Landing', href: `${base}/admin` },
			{ name: 'Pricing', href: `${base}/admin` },
			{ name: 'Payment', href: `${base}/admin` },
			{ name: 'Checkout', href: `${base}/admin` },
			{ name: 'Help Center', href: `${base}/admin` }
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
				children: [
					{ name: 'List', href: `${base}/admin/ecommerce/products/list` },
					{ name: 'Add', href: `${base}/admin/ecommerce/products/add` },
					{ name: 'Category', href: `${base}/admin/ecommerce/products/category` }
				]
			},
			{
				parent: 'Orders',
				children: [
					{ name: 'List', href: `${base}/admin/ecommerce/orders/list` },
					{ name: 'Details', href: `${base}/admin/ecommerce/orders/details` }
				]
			},
			{
				parent: 'Customers',
				children: [
					{ name: 'List', href: `${base}/admin/ecommerce/customers/list` },
					{ name: 'Details', href: `${base}/admin/ecommerce/customers/details` }
				]
			},
			{ name: 'Manage Reviews', href: `${base}/admin/ecommerce/manage-reviews` },
			{ name: 'Referrals', href: `${base}/admin/ecommerce/referrals` },
			{ name: 'Settings', href: `${base}/admin/ecommerce/settings` }
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
			{ name: 'Pricing', href: `${base}/admin/pages/pricing` },
			{
				parent: 'Miscellaneous',
				children: [
					{ name: 'Coming Soon', href: `${base}/admin/pages/miscellaneous/coming-soon/` },
					{
						name: 'Under Maintenance',
						href: `${base}/admin/pages/miscellaneous/under-maintenance`
					},
					{
						name: 'Page Not Found - 404',
						href: `${base}/admin/pages/miscellaneous/page-not-found`
					},
					{ name: 'Not Authorized - 401', href: `${base}/admin/pages/miscellaneous/not-authorized` }
				]
			}
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
			},
			{
				name: 'Two Steps',
				href: `${base}/admin/auth-pages/two-steps`
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
	{
		parent: 'Widget Examples',
		children: [
			{ name: 'Basic', href: `${base}/admin` },
			{ name: 'Advanced', href: `${base}/admin` },
			{ name: 'Statistics', href: `${base}/admin` },
			{ name: 'Charts', href: `${base}/admin` },
			{ name: 'Gamification', href: `${base}/admin` },
			{ name: 'Actions', href: `${base}/admin` }
		]
	},
	{ header: 'Forms and Tables' },
	{ name: 'Forms Layouts', href: `${base}/admin/forms` },
	{ name: 'Tables', href: `${base}/admin/tables` },
	{ header: 'Charts and Misc' },
	{
		parent: 'Charts',
		children: [{ name: 'Apexchart', href: `${base}/admin/charts/apex` }, { name: 'Layerchart', href: `${base}/admin/charts/layer` }]
	},
	{ name: 'Components', href: 'https://www.shadcn-svelte.com/' },
];
