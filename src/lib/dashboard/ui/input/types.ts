import type { FullAutoFill, HTMLInputTypeAttribute } from 'svelte/elements';

interface TextFieldProps {
	label?: string;
	type?: HTMLInputTypeAttribute | null | undefined;
	name?: string;
	autocomplete?: FullAutoFill | null | undefined;
	placeholder?: string | null | undefined;
	required?: boolean | null | undefined;
}

export type { TextFieldProps };
