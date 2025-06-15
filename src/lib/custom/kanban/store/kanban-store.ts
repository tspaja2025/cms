import { writable, derived } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import type { KanbanColumn, KanbanCard, Tag } from '$lib/custom/kanban/types/types';

// Initialize with default data or load from localStorage
const getInitialData = (): KanbanColumn[] => {
	if (typeof window !== 'undefined') {
		const savedData = localStorage.getItem('kanbanBoard');
		if (savedData) {
			return JSON.parse(savedData);
		}
	}

	// Default initial data
	return [
		{
			id: uuidv4(),
			title: 'To Do',
			cards: [
				{
					id: uuidv4(),
					title: 'Research design inspiration',
					description: 'Look for UI patterns and design inspiration for our new project.',
					tags: [{ id: uuidv4(), name: 'Design', color: 'primary' }],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString()
				},
				{
					id: uuidv4(),
					title: 'Create wireframes',
					description: 'Develop initial wireframes for the dashboard layout.',
					tags: [
						{ id: uuidv4(), name: 'Design', color: 'primary' },
						{ id: uuidv4(), name: 'High Priority', color: 'error' }
					],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString()
				}
			]
		},
		{
			id: uuidv4(),
			title: 'In Progress',
			cards: [
				{
					id: uuidv4(),
					title: 'Implement user authentication',
					description: 'Add login, signup, and password reset functionality.',
					tags: [{ id: uuidv4(), name: 'Development', color: 'secondary' }],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString()
				}
			]
		},
		{
			id: uuidv4(),
			title: 'Done',
			cards: [
				{
					id: uuidv4(),
					title: 'Project kickoff meeting',
					description: 'Initial team meeting to align on project goals and timeline.',
					tags: [{ id: uuidv4(), name: 'Meeting', color: 'success' }],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString()
				}
			]
		}
	];
};

// Create the store
const createKanbanStore = () => {
	const { subscribe, set, update } = writable<KanbanColumn[]>(getInitialData());

	// Save to localStorage when store updates
	subscribe((value) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('kanbanBoard', JSON.stringify(value));
		}
	});

	return {
		subscribe,

		// Add a new column
		addColumn: (title: string) => {
			update((columns) => [
				...columns,
				{
					id: uuidv4(),
					title,
					cards: []
				}
			]);
		},

		// Update column title
		updateColumnTitle: (columnId: string, title: string) => {
			update((columns) =>
				columns.map((column) => (column.id === columnId ? { ...column, title } : column))
			);
		},

		// Delete a column
		deleteColumn: (columnId: string) => {
			update((columns) => columns.filter((column) => column.id !== columnId));
		},

		// Add a card to a column
		addCard: (columnId: string, card: Omit<KanbanCard, 'id' | 'createdAt' | 'updatedAt'>) => {
			const now = new Date().toISOString();
			const newCard: KanbanCard = {
				id: uuidv4(),
				...card,
				createdAt: now,
				updatedAt: now
			};

			update((columns) =>
				columns.map((column) =>
					column.id === columnId ? { ...column, cards: [...column.cards, newCard] } : column
				)
			);

			return newCard.id;
		},

		// Update a card
		updateCard: (columnId: string, card: KanbanCard) => {
			update((columns) =>
				columns.map((column) =>
					column.id === columnId
						? {
								...column,
								cards: column.cards.map((c) =>
									c.id === card.id ? { ...card, updatedAt: new Date().toISOString() } : c
								)
							}
						: column
				)
			);
		},

		// Delete a card
		deleteCard: (columnId: string, cardId: string) => {
			update((columns) =>
				columns.map((column) =>
					column.id === columnId
						? { ...column, cards: column.cards.filter((card) => card.id !== cardId) }
						: column
				)
			);
		},

		// Move a card between columns
		moveCard: (sourceColumnId: string, targetColumnId: string, cardId: string) => {
			update((columns) => {
				let movedCard: KanbanCard | null = null;

				// First, remove the card from the source column
				const sourceColumnUpdated = columns.map((column) => {
					if (column.id === sourceColumnId) {
						const cardIndex = column.cards.findIndex((card) => card.id === cardId);
						if (cardIndex !== -1) {
							movedCard = column.cards[cardIndex];
							return {
								...column,
								cards: column.cards.filter((card) => card.id !== cardId)
							};
						}
					}
					return column;
				});

				// Then, add the card to the target column
				if (movedCard) {
					return sourceColumnUpdated.map((column) =>
						column.id === targetColumnId
							? {
									...column,
									cards: [...column.cards, { ...movedCard!, updatedAt: new Date().toISOString() }]
								}
							: column
					);
				}

				return columns; // If something went wrong, return original state
			});
		},

		// Reorder cards within a column
		reorderCards: (columnId: string, fromIndex: number, toIndex: number) => {
			update((columns) => {
				return columns.map((column) => {
					if (column.id === columnId) {
						const newCards = [...column.cards];
						const [movedCard] = newCards.splice(fromIndex, 1);
						newCards.splice(toIndex, 0, { ...movedCard, updatedAt: new Date().toISOString() });
						return { ...column, cards: newCards };
					}
					return column;
				});
			});
		},

		// Reset the store to initial data
		reset: () => {
			set(getInitialData());
		}
	};
};

export const kanbanStore = createKanbanStore();

// Derived store for getting a card by ID
export const getCardById = (cardId: string) => {
	return derived(kanbanStore, ($kanbanStore) => {
		for (const column of $kanbanStore) {
			const card = column.cards.find((c) => c.id === cardId);
			if (card) {
				return { card, columnId: column.id };
			}
		}
		return null;
	});
};
