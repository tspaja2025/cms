export interface KanbanCardType {
	id: string;
	title: string;
	description: string;
	tags: Tag[];
	createdAt: string;
	updatedAt: string;
}

export interface KanbanColumn {
	id: string;
	title: string;
	cards: KanbanCardType[];
}

export interface Tag {
	id: string;
	name: string;
	color: TagColor;
}

export type TagColor =
	| 'primary' // blue
	| 'secondary' // purple
	| 'accent' // pink
	| 'success' // green
	| 'warning' // orange
	| 'error'; // red
