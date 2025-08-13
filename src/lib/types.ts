export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue';

export interface Client {
	name?: string;
	email?: string;
	address?: string;
}

export interface LineItem {
	id: string;
	description: string;
	quantity: number;
	rate: number;
	amount: number;
}

export interface Invoice {
	id: string;
	number: string;
	date: string;
	dueDate: string;
	status: InvoiceStatus;
	client: Client;
	items: LineItem[];
	notes: string;
	subtotal: number;
	tax: number;
	total: number;
	createdAt: string;
	updatedAt: string;
}

export interface InvoiceFilter {
	status: InvoiceStatus | 'all';
	search: string;
	sortBy: 'date' | 'dueDate' | 'number' | 'client' | 'total';
	sortDirection: 'asc' | 'desc';
}
