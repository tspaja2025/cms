import type { Snippet } from 'svelte';

interface CardProps {
	children: Snippet;
	title?: string;
	subtitle?: string;
	actions?: Snippet;
}

export type { CardProps };
