export const navigation = [
	{
		parent: 'Dashboards',
		children: [
			{ name: 'CRM', href: '/admin/dashboards/crm' },
			{ name: 'Analytics', href: '/admin/dashboards/analytics' }
		]
	},
	{
		parent: 'Front Pages',
		children: [
			{ name: 'Landing', href: '/' },
			{ name: 'Pricing', href: '/' },
			{ name: 'Payment', href: '/' },
			{ name: 'Checkout', href: '/' },
			{ name: 'Help Center', href: '/' }
		]
	},
	{
		header: 'Apps and Pages'
	},
	{
		parent: 'eCommerce',
		children: [
			{ name: 'Dashboard', href: '/admin/ecommerce/dashboard' },
			{
				parent: 'Products',
				children: [
					{ name: 'List', href: '/admin/ecommerce/products/list' },
					{ name: 'Add', href: '/admin/ecommerce/products/add' },
					{ name: 'Category', href: '/admin/ecommerce/products/category' }
				]
			},
			{
				parent: 'Orders',
				children: [
					{ name: 'List', href: '/admin/ecommerce/orders/list' },
					{ name: 'Details', href: '/admin/ecommerce/orders/details' }
				]
			},
			{
				parent: 'Customers',
				children: [
					{ name: 'List', href: '/admin/ecommerce/customers/list' },
					{ name: 'Details', href: '/admin/ecommerce/customers/details' }
				]
			},
			{ name: 'Manage Reviews', href: '/admin/ecommerce/manage-reviews' },
			{ name: 'Referrals', href: '/admin/ecommerce/referrals' },
			{ name: 'Settings', href: '/admin/ecommerce/settings' }
		]
	},
	{
		parent: 'Academy',
		children: [
			{ name: 'Dashboard', href: '/admin/academy/dashboard' },
			{ name: 'My Courses', href: '/admin/academy/my-courses' },
			{ name: 'Course Details', href: '/admin/academy/course-details' }
		]
	},
	{ name: 'Logistics', href: '/admin/logistics' },
	{ name: 'Email', href: '/admin/email' },
	{ name: 'Chat', href: '/admin/chat' },
	{ name: 'Calendar', href: '/admin/calendar' },
	{ name: 'Kanban', href: '/admin/kanban' },
	{
		parent: 'Invoice',
		children: [
			{ name: 'Add', href: '/admin/invoice/add' },
			{ name: 'Edit', href: '/admin/invoice/edit' },
			{ name: 'List', href: '/admin/invoice/list' },
			{ name: 'Preview', href: '/admin/invoice/preview' }
		]
	},
	{
		parent: 'User',
		children: [
			{ name: 'List', href: '/admin/user/list' },
			{ name: 'View', href: '/admin/user/view' }
		]
	},
	{
		parent: 'Roles and Permissions',
		children: [
			{ name: 'Roles', href: '/admin/roles-permissions/roles' },
			{ name: 'Permissions', href: '/admin/roles-permissions/permissions' }
		]
	},
	{
		parent: 'Pages',
		children: [
			{ name: 'User Profile', href: '/admin/pages/user-profile' },
			{ name: 'Account Settings', href: '/admin/pages/account-settings' },
			{ name: 'FAQ', href: '/admin/pages/faq' },
			{ name: 'Pricing', href: '/admin/pages/pricing' },
			{
				parent: 'Miscellaneous',
				children: [
					{ name: 'Coming Soon', href: '/admin/pages/miscellaneous/coming-soon/' },
					{ name: 'Under Maintenance', href: '/admin/pages/miscellaneous/under-maintenance' },
					{ name: 'Page Not Found - 404', href: '/admin/pages/miscellaneous/page-not-found' },
					{ name: 'Not Authorized - 401', href: '/admin/pages/miscellaneous/not-authorized' }
				]
			}
		]
	},
	{
		parent: 'Authentication',
		children: [
			{
				name: 'Login',
				href: "/admin/auth-pages/login"
			},
			{
				name: 'Register',
				href: "/admin/auth-pages/register",
			},
			{
				name: 'Verify Email',
				href: "/admin/auth-pages/verify-email",
			},
			{
				name: 'Forgot Password',
				href: "/admin/auth-pages/forgot-password",
			},
			{
				name: 'Reset Password',
				href: "/admin/auth-pages/reset-password",
			},
			{
				name: 'Two Steps',
				href: "/admin/auth-pages/two-steps",
			}
		]
	},
	{
		parent: 'Wizard Examples',
		children: [
			{ name: 'Checkout', href: '/admin/examples/wizard/checkout' },
			{ name: 'Property Listing', href: '/admin/examples/wizard/property-listing' },
			{ name: 'Create Deal', href: '/admin/examples/wizard/create-deal' }
		]
	},
	{ name: 'Dialog Examples', href: '/admin/examples/dialog' },
	{
		parent: 'Widget Examples',
		children: [
			{ name: 'Basic', href: '/' },
			{ name: 'Advanced', href: '/' },
			{ name: 'Statistics', href: '/' },
			{ name: 'Charts', href: '/' },
			{ name: 'Gamification', href: '/' },
			{ name: 'Actions', href: '/' }
		]
	},
	{ header: 'Forms and Tables' },
	{ name: 'Forms Layouts', href: '/admin/forms' },
	{ name: 'Tables', href: '/admin/tables' },
	{ header: 'Charts and Misc' },
	{
		parent: 'Charts',
		children: [{ name: 'Apexchart', href: '/admin/charts/apex' }]
	},
	{ name: 'Components', href: 'https://www.shadcn-svelte.com/' },
	{
		parent: 'Others',
		children: [
			{ name: 'Item with Badge', href: '/admin' },
			{ name: 'External Link', href: '/admin' }
		]
	},
	{
		parent: 'Menu Levels',
		children: [
			{ name: 'Menu Level 2', href: '/admin' },
			{
				parent: 'Menu Level 2',
				children: [
					{ name: 'Menu Level 3', href: '/admin' },
					{ name: 'Menu Level 3', href: '/admin' }
				]
			},
			{ name: 'Disabled Menu', href: '/admin' }
		]
	}
];
