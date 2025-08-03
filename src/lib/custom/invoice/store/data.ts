import { writable, derived } from 'svelte/store';
import type { Invoice, InvoiceStatus, LineItem } from '$lib/custom/invoice/types';
import { v4 as uuidv4 } from 'uuid';

// Initialize with sample data
export const initialInvoices: Invoice[] = [
	{
		id: '1',
		number: 'INV-001',
		date: '2025-02-01',
		dueDate: '2025-03-01',
		status: 'sent',
		client: {
			name: 'Acme Corp',
			email: 'billing@acmecorp.com',
			address: '123 Main St, San Francisco, CA 94103'
		},
		items: [
			{
				id: '1',
				description: 'Website Design',
				quantity: 1,
				rate: 1200,
				amount: 1200
			},
			{
				id: '2',
				description: 'Development',
				quantity: 20,
				rate: 150,
				amount: 3000
			}
		],
		notes: 'Payment due within 30 days',
		subtotal: 4200,
		tax: 420,
		total: 4620,
		createdAt: '2025-02-01T10:00:00Z',
		updatedAt: '2025-02-01T10:00:00Z'
	},
	{
		id: '2',
		number: 'INV-002',
		date: '2025-02-15',
		dueDate: '2025-03-15',
		status: 'paid',
		client: {
			name: 'Globex Corporation',
			email: 'accounts@globex.com',
			address: '456 Market St, New York, NY 10001'
		},
		items: [
			{
				id: '1',
				description: 'Consulting Services',
				quantity: 10,
				rate: 200,
				amount: 2000
			}
		],
		notes: 'Thank you for your business',
		subtotal: 2000,
		tax: 200,
		total: 2200,
		createdAt: '2025-02-15T14:30:00Z',
		updatedAt: '2025-02-20T09:15:00Z'
	},
	{
		id: '3',
		number: 'INV-003',
		date: '2025-03-01',
		dueDate: '2025-04-01',
		status: 'draft',
		client: {
			name: 'Sirius Cybernetics Corp',
			email: 'payments@sirius.com',
			address: '789 Robot Ave, Seattle, WA 98101'
		},
		items: [
			{
				id: '1',
				description: 'AI Integration',
				quantity: 1,
				rate: 3500,
				amount: 3500
			},
			{
				id: '2',
				description: 'Support Package',
				quantity: 1,
				rate: 500,
				amount: 500
			}
		],
		notes: 'Draft invoice - do not send yet',
		subtotal: 4000,
		tax: 400,
		total: 4400,
		createdAt: '2025-03-01T16:45:00Z',
		updatedAt: '2025-03-01T16:45:00Z'
	},
	{
		id: '4',
		number: 'INV-004',
		date: '2025-01-10',
		dueDate: '2025-02-10',
		status: 'overdue',
		client: {
			name: 'Wayne Enterprises',
			email: 'finance@wayne.com',
			address: '1007 Mountain Drive, Gotham City, NJ 07001'
		},
		items: [
			{
				id: '1',
				description: 'Security Consultation',
				quantity: 1,
				rate: 5000,
				amount: 5000
			}
		],
		notes: 'Payment is overdue',
		subtotal: 5000,
		tax: 500,
		total: 5500,
		createdAt: '2025-01-10T11:20:00Z',
		updatedAt: '2025-01-10T11:20:00Z'
	}
];

// Load data from localStorage or use initial data
const loadInvoices = (): Invoice[] => {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('invoices');
		return saved ? JSON.parse(saved) : initialInvoices;
	}
	return initialInvoices;
};

// Create the writable store
const createInvoiceStore = () => {
	const invoices = writable<Invoice[]>(loadInvoices());
	const { subscribe, set, update } = invoices;

	// Save to localStorage whenever the store changes
	if (typeof window !== 'undefined') {
		subscribe((value) => {
			localStorage.setItem('invoices', JSON.stringify(value));
		});
	}

	// Helper to calculate invoice totals
	const calculateTotals = (items: LineItem[]) => {
		const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
		const tax = Math.round(subtotal * 0.1); // 10% tax
		const total = subtotal + tax;
		return { subtotal, tax, total };
	};

	return {
		subscribe,

		// Add a new invoice
		add: (invoice: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>) => {
			const now = new Date().toISOString();
			const newInvoice: Invoice = {
				...invoice,
				id: uuidv4(),
				createdAt: now,
				updatedAt: now
			};

			update((invoices) => [...invoices, newInvoice]);
			return newInvoice.id;
		},

		// Update an existing invoice
		update: (id: string, changes: Partial<Invoice>) => {
			update((invoices) =>
				invoices.map((invoice) =>
					invoice.id === id
						? { ...invoice, ...changes, updatedAt: new Date().toISOString() }
						: invoice
				)
			);
		},

		// Delete an invoice
		delete: (id: string) => {
			update((invoices) => invoices.filter((invoice) => invoice.id !== id));
		},

		// Get a single invoice by ID
		getById: (id: string) => {
			let found: Invoice | undefined;
			subscribe((invoices) => {
				found = invoices.find((invoice) => invoice.id === id);
			})();
			return found;
		},

		// Update the status of an invoice
		updateStatus: (id: string, status: InvoiceStatus) => {
			update((invoices) =>
				invoices.map((invoice) =>
					invoice.id === id ? { ...invoice, status, updatedAt: new Date().toISOString() } : invoice
				)
			);
		},

		// Recalculate totals for an invoice
		recalculateTotals: (id: string) => {
			update((invoices) =>
				invoices.map((invoice) => {
					if (invoice.id === id) {
						const { subtotal, tax, total } = calculateTotals(invoice.items);
						return {
							...invoice,
							subtotal,
							tax,
							total,
							updatedAt: new Date().toISOString()
						};
					}
					return invoice;
				})
			);
		},

		// Generate a new invoice number
		generateInvoiceNumber: () => {
			let highestNumber = 0;
			subscribe((invoices) => {
				invoices.forEach((invoice) => {
					const num = parseInt(invoice.number.replace('INV-', ''), 10);
					if (!isNaN(num) && num > highestNumber) {
						highestNumber = num;
					}
				});
			})();

			return `INV-${String(highestNumber + 1).padStart(3, '0')}`;
		},

		// Reset store to initial data (for testing)
		reset: () => set(initialInvoices)
	};
};

// Create and export the store
export const invoiceStore = createInvoiceStore();

// Derived stores for filtering and statistics
export const invoicesByStatus = derived(invoiceStore, ($invoices) => {
	return {
		all: $invoices,
		draft: $invoices.filter((inv) => inv.status === 'draft'),
		sent: $invoices.filter((inv) => inv.status === 'sent'),
		paid: $invoices.filter((inv) => inv.status === 'paid'),
		overdue: $invoices.filter((inv) => inv.status === 'overdue')
	};
});

export const invoiceStats = derived(invoiceStore, ($invoices) => {
	const totalPaid = $invoices
		.filter((inv) => inv.status === 'paid')
		.reduce((sum, inv) => sum + inv.total, 0);

	const totalOutstanding = $invoices
		.filter((inv) => inv.status === 'sent' || inv.status === 'overdue')
		.reduce((sum, inv) => sum + inv.total, 0);

	const totalOverdue = $invoices
		.filter((inv) => inv.status === 'overdue')
		.reduce((sum, inv) => sum + inv.total, 0);

	return {
		count: $invoices.length,
		countByStatus: {
			draft: $invoices.filter((inv) => inv.status === 'draft').length,
			sent: $invoices.filter((inv) => inv.status === 'sent').length,
			paid: $invoices.filter((inv) => inv.status === 'paid').length,
			overdue: $invoices.filter((inv) => inv.status === 'overdue').length
		},
		totalPaid,
		totalOutstanding,
		totalOverdue
	};
});
