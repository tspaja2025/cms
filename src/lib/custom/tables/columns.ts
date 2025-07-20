import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import { renderComponent, renderSnippet } from '$lib/components/ui/data-table';
import DataTableActions from '$lib/custom/tables/data-table-actions.svelte';
import DataTableEmailButton from '$lib/custom/tables/data-table-email-button.svelte';
import { Checkbox } from '$lib/components/ui/checkbox/index';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'amount',
		header: () => {
			const amountHeaderSnippet = createRawSnippet(() => ({
				render: () => `<div class="text-right">Amount</div>`
			}));
			return renderSnippet(amountHeaderSnippet, '');
		},
		id: 'actions',
		cell: ({ row }) => {
			return renderComponent(DataTableActions, { id: row.original.id });
		}
		// cell: ({ row }) => {
		//   const formatter = new Intl.NumberFormat("en-US", {
		//     style: "currency",
		//     currency: "USD",
		//   });

		//   const amountCellSnippet = createRawSnippet<[string]>((getAmount) => {
		//     const amount = getAmount();
		//     return {
		//       render: () => `<div class="text-right font-medium">${amount}</div>`,
		//     };
		//   });

		//   return renderSnippet(
		//     amountCellSnippet,
		//     formatter.format(parseFloat(row.getValue("amount")))
		//   );
		// },
	},
	{
		accessorKey: 'email',
		header: ({ column }) =>
			renderComponent(DataTableEmailButton, {
				onclick: column.getToggleSortingHandler()
			})
	},
	{
		id: 'select',
		header: ({ table }) =>
			renderComponent(Checkbox, {
				checked: table.getIsAllPageRowsSelected(),
				indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
				onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
				'aria-label': 'Select all'
			}),
		cell: ({ row }) =>
			renderComponent(Checkbox, {
				checked: row.getIsSelected(),
				onCheckedChange: (value) => row.toggleSelected(!!value),
				'aria-label': 'Select row'
			}),
		enableSorting: false,
		enableHiding: false
	}
];
