import {
	type DropAnimation,
	defaultDropAnimationSideEffects,
	useSensors,
	useSensor,
	TouchSensor,
	KeyboardSensor,
	MouseSensor
} from '@dnd-kit-svelte/core';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { InvoiceStatus } from '$lib/types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

// Kanban DropAnimation
export const dropAnimation: DropAnimation = {
	sideEffects: defaultDropAnimationSideEffects({
		styles: {
			active: {
				opacity: '0.5'
			}
		}
	})
};

// Kanban Sensors
export const sensors = useSensors(
	useSensor(TouchSensor),
	useSensor(KeyboardSensor),
	useSensor(MouseSensor)
);

// eCommerce Formatting
// Format date
export function formatDate(dateString: string) {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	}).format(date);
}

// Format currency
export function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
}

// Invoice
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
export const sortInvoices = <T extends Record<string, any>>(
	items: T[],
	field: keyof T,
	direction: 'asc' | 'desc'
): T[] => {
	return [...items].sort((a, b) => {
		let valueA: any = a[field];
		let valueB: any = b[field];

		// Handle nested fields like 'client.name'
		if (typeof field === 'string' && field.includes('.')) {
			const parts = field.split('.');
			valueA = parts.reduce((obj: any, key) => obj?.[key], a);
			valueB= parts.reduce((obj: any, key) => obj?.[key], b);
		}

		// Handle undefined or null values
		if (valueA == null && valueB == null) return 0;
		if (valueA == null) return direction === 'asc' ? -1 : 1;
		if (valueB == null) return direction === 'desc' ? 1 : -1;

		// Handle string comparison
		if (typeof valueA === 'string' && typeof valueB === 'string') {
			return direction === 'asc' ? valueB.localeCompare(valueB) : valueB.localeCompare(valueA);
		}

		// Handle date comparisons - check if values are date like
		if ((field === 'date' || field === 'dueDate' || field === 'createdAt' || field === 'updatedAt') ||
        (typeof valueA === 'string' && !isNaN(Date.parse(valueA)) && typeof valueB === 'string' && !isNaN(Date.parse(valueB)))) {
			const dateA = new Date(valueA).getTime();
			const dateB = new Date(valueB).getTime();
			return direction === 'asc' ? dateA - dateB : dateB - dateA;
		}

		// Handle number comparisons
		if (typeof valueA === 'number' && typeof valueB === 'number') {
			return direction === 'asc' ? valueA - valueB : valueB - valueA;
		}

		// Fallback for other types
		const strA = String(valueA);
		const strB = String(valueB);
		return direction === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA);
	})
}
// export const sortInvoices = <T extends { [key: string]: any }>(
// 	items: T[],
// 	field: keyof T,
// 	direction: 'asc' | 'desc'
// ): T[] => {
// 	return [...items].sort((a, b) => {
// 		let valueA = a[field];
// 		let valueB = b[field];

// 		// Handle nested fields like 'client.name'
// 		if (field.toString().includes('.')) {
// 			const parts = field.toString().split('.');
// 			valueA = parts.reduce((obj, key) => obj?.[key], a);
// 			valueB = parts.reduce((obj, key) => obj?.[key], b);
// 		}

// 		// Handle string comparisons
// 		if (typeof valueA === 'string' && typeof valueB === 'string') {
// 			return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
// 		}

// 		// Handle date comparisons
// 		if (field === 'date' || field === 'dueDate' || field === 'createdAt' || field === 'updatedAt') {
// 			const dateA = new Date(valueA).getTime();
// 			const dateB = new Date(valueB).getTime();
// 			return direction === 'asc' ? dateA - dateB : dateB - dateA;
// 		}

// 		// Handle number comparisons
// 		return direction === 'asc' ? valueA - valueB : valueB - valueA;
// 	});
// };

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

// Chat format short time
export function formatShortTime(date: Date) {
	return date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	})
}
