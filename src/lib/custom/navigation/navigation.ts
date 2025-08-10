import { base } from '$app/paths';
import AppWindowIcon from '@lucide/svelte/icons/app-window';
import BookTextIcon from '@lucide/svelte/icons/book-text';
import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
import FilesIcon from '@lucide/svelte/icons/files';
import KeyRoundIcon from '@lucide/svelte/icons/key-round';
import LockIcon from '@lucide/svelte/icons/lock';
import MessageSquareTextIcon from '@lucide/svelte/icons/message-square-text';
import PuzzleIcon from '@lucide/svelte/icons/puzzle';
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
				{ title: 'CRM', url: `${base}/admin/dashboards/crm`, isActive: false },
				{ title: 'Analytics', url: `${base}/admin/dashboards/analytics`, isActive: false },
				{ title: 'Academy', url: `${base}/admin/academy`, isActive: false },
				{ title: 'Logistics', url: `${base}/admin/logistics`, isActive: false },
				{ title: 'Email', url: `${base}/admin/email`, isActive: false },
				{ title: 'Chat', url: `${base}/admin/chat`, isActive: false },
				{ title: 'Calendar', url: `${base}/admin/calendar`, isActive: false },
				{ title: 'Kanban', url: `${base}/admin/kanban`, isActive: false }
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
				{ title: 'Dashboard', url: `${base}/admin/ecommerce/dashboard`, isActive: false },
				{
					title: 'Products',
					url: `${base}/admin/ecommerce/products/list`,
					isActive: false
				},
				{
					title: 'Orders',
					url: `${base}/admin/ecommerce/orders/list`,
					isActive: false
				},
				{
					title: 'Customers',
					url: `${base}/admin/ecommerce/customers/list`,
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
				{ title: 'Add', url: `${base}/admin/invoice/add`, isActive: false },
				{ title: 'Edit', url: `${base}/admin/invoice/edit`, isActive: false },
				{ title: 'List', url: `${base}/admin/invoice/list`, isActive: false },
				{ title: 'Preview', url: `${base}/admin/invoice/edit`, isActive: false }
			]
		},
		{
			title: 'User',
			url: '##',
			icon: UserIcon,
			isActive: false,
			items: [
				{ title: 'List', url: `${base}/admin/user/list`, isActive: false },
				{ title: 'View', url: `${base}/admin/user/view`, isActive: false }
			]
		},
		{
			title: 'Roles and Permissions',
			url: '##',
			icon: LockIcon,
			isActive: false,
			items: [
				{ title: 'Roles', url: `${base}/admin/roles-permissions/roles`, isActive: false },
				{
					title: 'Permissions',
					url: `${base}/admin/roles-permissions/permissions`,
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
				{ title: 'User Profile', url: `${base}/admin/pages/user-profile`, isActive: false },
				{ title: 'Account Settings', url: `${base}/admin/pages/account-settings`, isActive: false },
				{ title: 'FAQ', url: `${base}/admin/pages/faq`, isActive: false },
				{ title: 'Pricing', url: `${base}/admin/pages/pricing`, isActive: false }
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
					url: `${base}/admin/auth-pages/login`,
					isActive: false
				},
				{
					title: 'Register',
					url: `${base}/admin/auth-pages/register`,
					isActive: false
				},
				{
					title: 'Verify Email',
					url: `${base}/admin/auth-pages/verify-email`,
					isActive: false
				},
				{
					title: 'Forgot Password',
					url: `${base}/admin/auth-pages/forgot-password`,
					isActive: false
				},
				{
					title: 'Reset Password',
					url: `${base}/admin/auth-pages/reset-password`,
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
				{ title: 'Checkout', url: `${base}/admin/examples/wizard/checkout`, isActive: false },
				{
					title: 'Property Listing',
					url: `${base}/admin/examples/wizard/property-listing`,
					isActive: false
				},
				{ title: 'Create Deal', url: `${base}/admin/examples/wizard/create-deal`, isActive: false }
			]
		},
		{
			title: 'Dialog Examples',
			url: `${base}/admin/examples/dialog`,
			icon: MessageSquareTextIcon,
			isActive: false
		},
		{ title: 'Forms Layouts', url: `${base}/admin/forms`, icon: BookTextIcon, isActive: false },
		{ title: 'Tables', url: `${base}/admin/tables`, icon: TableIcon, isActive: false }
	],
	other: [
		{
			title: 'Charts',
			url: '##',
			icon: ChartPieIcon,
			isActive: false,
			items: [
				{ title: 'Apexchart', url: `${base}/admin/charts/apex`, isActive: false },
				{ title: 'Layerchart', url: `${base}/admin/charts/layer`, isActive: false },
				{ title: 'Chart.js', url: `${base}/admin/charts/chartjs`, isActive: false },
				{ title: 'Echarts', url: `${base}/admin/charts/echart`, isActive: false }
			]
		},
		{
			title: 'Components',
			url: 'https://www.shadcn-svelte.com/',
			icon: PuzzleIcon,
			isActive: false
		}
	]
};
