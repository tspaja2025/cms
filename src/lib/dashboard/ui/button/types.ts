import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, 'on:abort'> &
	Omit<HTMLAnchorAttributes, 'on:abort'>;

interface ButtonProps extends HTMLAttributesWithoutAbort {
	children: Snippet;
	href?: string;
	type?: 'button' | 'submit' | 'reset' | null | undefined;
	tag?: 'button';
	icon?: boolean;
	disabled?: boolean;
	onclick?: () => void;
}

export type { ButtonProps };
