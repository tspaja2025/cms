import type { InvoiceStatus } from './types';

// Format currency
export const formatCurrency = (amount: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
};

// Format date
export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}).format(date);
};

// Calculate days until due or overdue
export const calculateDueDays = (dueDate: string): number => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const due = new Date(dueDate);
	due.setHours(0, 0, 0, 0);

	const diffTime = due.getTime() - today.getTime();
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Get status label
export const getStatusLabel = (status: InvoiceStatus): string => {
	const statusMap: Record<InvoiceStatus, string> = {
		draft: 'Draft',
		sent: 'Sent',
		paid: 'Paid',
		overdue: 'Overdue'
	};
	return statusMap[status] || status;
};

// Generate a color class based on status
export const getStatusColorClass = (status: InvoiceStatus): string => {
	const colorMap: Record<InvoiceStatus, string> = {
		draft: 'badge-draft',
		sent: 'badge-sent',
		paid: 'badge-paid',
		overdue: 'badge-overdue'
	};
	return colorMap[status] || '';
};

// Calculate if an invoice is overdue
export const isInvoiceOverdue = (invoice: { dueDate: string; status: InvoiceStatus }): boolean => {
	if (invoice.status === 'paid') return false;

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const dueDate = new Date(invoice.dueDate);
	dueDate.setHours(0, 0, 0, 0);

	return today > dueDate;
};

// Generate a PDF link for an invoice (placeholder function)
export const generatePdfLink = (invoiceId: string): string => {
	return `#/invoices/${invoiceId}/pdf`;
};

// Sort invoices
export const sortInvoices = <T extends { [key: string]: any }>(
	items: T[],
	field: keyof T,
	direction: 'asc' | 'desc'
): T[] => {
	return [...items].sort((a, b) => {
		let valueA = a[field];
		let valueB = b[field];

		// Handle nested fields like 'client.name'
		if (field.toString().includes('.')) {
			const parts = field.toString().split('.');
			valueA = parts.reduce((obj, key) => obj?.[key], a);
			valueB = parts.reduce((obj, key) => obj?.[key], b);
		}

		// Handle string comparisons
		if (typeof valueA === 'string' && typeof valueB === 'string') {
			return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
		}

		// Handle date comparisons
		if (field === 'date' || field === 'dueDate' || field === 'createdAt' || field === 'updatedAt') {
			const dateA = new Date(valueA).getTime();
			const dateB = new Date(valueB).getTime();
			return direction === 'asc' ? dateA - dateB : dateB - dateA;
		}

		// Handle number comparisons
		return direction === 'asc' ? valueA - valueB : valueB - valueA;
	});
};

// Filter invoices
export const filterInvoices = <T extends { status: InvoiceStatus; [key: string]: any }>(
	invoices: T[],
	status: InvoiceStatus | 'all',
	searchTerm: string
): T[] => {
	return invoices.filter((invoice) => {
		// Filter by status
		if (status !== 'all' && invoice.status !== status) {
			return false;
		}

		// Filter by search term
		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			return (
				invoice.number.toLowerCase().includes(term) ||
				invoice.client.name.toLowerCase().includes(term) ||
				invoice.client.email.toLowerCase().includes(term)
			);
		}

		return true;
	});
};
