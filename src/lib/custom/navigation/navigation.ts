import { resolve } from '$app/paths';
import AppWindowIcon from '@lucide/svelte/icons/app-window';
import BookTextIcon from '@lucide/svelte/icons/book-text';
import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
import FilesIcon from '@lucide/svelte/icons/files';
import KeyRoundIcon from '@lucide/svelte/icons/key-round';
import LockIcon from '@lucide/svelte/icons/lock';
import MessageSquareTextIcon from '@lucide/svelte/icons/message-square-text';
import ReceiptTextIcon from '@lucide/svelte/icons/receipt-text';
import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
import TableIcon from '@lucide/svelte/icons/table';
import UserIcon from '@lucide/svelte/icons/user';
import WandIcon from '@lucide/svelte/icons/wand';

export const navigation = {
	apps: [
		{
			title: 'Apps',
			url: '##',
			icon: AppWindowIcon,
			isActive: true,
			items: [
				{ title: 'CRM', url: resolve('/admin/dashboards/crm'), isActive: false },
				{ title: 'Analytics', url: resolve('/admin/dashboards/analytics'), isActive: false },
				{ title: 'Academy', url: resolve('/admin/academy'), isActive: false },
				{ title: 'Logistics', url: resolve('/admin/logistics'), isActive: false },
				{ title: 'Email', url: resolve('/admin/email'), isActive: false },
				{ title: 'Chat', url: resolve('/admin/chat'), isActive: false },
				{ title: 'Calendar', url: resolve('/admin/calendar'), isActive: false },
				{ title: 'Kanban', url: resolve('/admin/kanban'), isActive: false }
			]
		}
	],
	pages: [
		{
			title: 'eCommerce',
			url: '##',
			icon: ShoppingCartIcon,
			isActive: false,
			items: [
				{ title: 'Dashboard', url: resolve('/admin/ecommerce/dashboard'), isActive: false },
				{
					title: 'Products',
					url: resolve('/admin/ecommerce/products/list'),
					isActive: false
				},
				{
					title: 'Orders',
					url: resolve('/admin/ecommerce/orders/list'),
					isActive: false
				},
				{
					title: 'Customers',
					url: resolve('/admin/ecommerce/customers/list'),
					isActive: false
				}
			]
		},
		{
			title: 'Invoice',
			url: '##',
			icon: ReceiptTextIcon,
			isActive: false,
			items: [
				{ title: 'Add', url: resolve('/admin/invoice/add'), isActive: false },
				{ title: 'List', url: resolve('/admin/invoice/list'), isActive: false }
			]
		},
		{
			title: 'User',
			url: '##',
			icon: UserIcon,
			isActive: false,
			items: [
				{ title: 'List', url: resolve('/admin/user/list'), isActive: false },
				{ title: 'View', url: resolve('/admin/user/view'), isActive: false }
			]
		},
		{
			title: 'Roles and Permissions',
			url: '##',
			icon: LockIcon,
			isActive: false,
			items: [
				{ title: 'Roles', url: resolve('/admin/roles-permissions/roles'), isActive: false },
				{
					title: 'Permissions',
					url: resolve('/admin/roles-permissions/permissions'),
					isActive: false
				}
			]
		},
		{
			title: 'Pages',
			url: '##',
			icon: FilesIcon,
			isActive: false,
			items: [
				{ title: 'User Profile', url: resolve('/admin/pages/user-profile'), isActive: false },
				{
					title: 'Account Settings',
					url: resolve('/admin/pages/account-settings'),
					isActive: false
				},
				{ title: 'FAQ', url: resolve('/admin/pages/faq'), isActive: false },
				{ title: 'Pricing', url: resolve('/admin/pages/pricing'), isActive: false }
			]
		},
		{
			title: 'Authentication',
			url: '##',
			icon: KeyRoundIcon,
			isActive: false,
			items: [
				{
					title: 'Login',
					url: resolve('/admin/auth-pages/login'),
					isActive: false
				},
				{
					title: 'Register',
					url: resolve('/admin/auth-pages/register'),
					isActive: false
				},
				{
					title: 'Verify Email',
					url: resolve('/admin/auth-pages/verify-email'),
					isActive: false
				},
				{
					title: 'Forgot Password',
					url: resolve('/admin/auth-pages/forgot-password'),
					isActive: false
				},
				{
					title: 'Reset Password',
					url: resolve('/admin/auth-pages/reset-password'),
					isActive: false
				}
			]
		},
		{
			title: 'Wizard Examples',
			url: '##',
			icon: WandIcon,
			isActive: false,
			items: [
				{ title: 'Checkout', url: resolve('/admin/examples/wizard/checkout'), isActive: false },
				{
					title: 'Property Listing',
					url: resolve('/admin/examples/wizard/property-listing'),
					isActive: false
				},
				{
					title: 'Create Deal',
					url: resolve('/admin/examples/wizard/create-deal'),
					isActive: false
				}
			]
		},
		{
			title: 'Dialog Examples',
			url: resolve('/admin/examples/dialog'),
			icon: MessageSquareTextIcon,
			isActive: false
		},
		{ title: 'Forms Layouts', url: resolve('/admin/forms'), icon: BookTextIcon, isActive: false },
		{ title: 'Tables', url: resolve('/admin/tables'), icon: TableIcon, isActive: false }
	],
	other: [
		{
			title: 'Layerchart',
			url: resolve('/admin/charts'),
			icon: ChartPieIcon,
			isActive: false
		}
	]
};
