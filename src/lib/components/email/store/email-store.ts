import { writable, derived } from 'svelte/store';
import type { Email, EmailFolder, EmailLabel } from '$lib/components/email/types';
import { mockEmails } from '$lib/components/email/data/mock-emails';
import { mockLabels } from '$lib/components/email/data/mock-labels';

// Store for all emails
export const emails = writable<Email[]>(mockEmails);

// Store for labels
export const labels = writable<EmailLabel[]>(mockLabels);

// Store for current folder
export const currentFolder = writable<EmailFolder>('inbox');

// Store for selected email
export const selectedEmailId = writable<string | null>(null);

// Store for search query
export const searchQuery = writable<string>('');

// Store for compose modal state
export const isComposeOpen = writable<boolean>(false);

// Derived store for emails in current folder
export const folderEmails = derived(
	[emails, currentFolder, searchQuery],
	([$emails, $currentFolder, $searchQuery]) => {
		let filtered = $emails;

		// Filter by folder
		if ($currentFolder === 'starred') {
			filtered = filtered.filter((email) => email.isStarred);
		} else {
			filtered = filtered.filter((email) => email.folder === $currentFolder);
		}

		// Filter by search query
		if ($searchQuery) {
			const query = $searchQuery.toLowerCase();
			filtered = filtered.filter(
				(email) =>
					email.subject.toLowerCase().includes(query) ||
					email.from.name.toLowerCase().includes(query) ||
					email.from.email.toLowerCase().includes(query) ||
					email.body.toLowerCase().includes(query)
			);
		}

		// Sort by timestamp (newest first)
		return filtered.sort(
			(a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
		);
	}
);

// Derived store for selected email
export const selectedEmail = derived([emails, selectedEmailId], ([$emails, $selectedEmailId]) => {
	if (!$selectedEmailId) return null;
	return $emails.find((email) => email.id === $selectedEmailId) || null;
});

// Functions to modify stores
export const markAsRead = (id: string) => {
	emails.update((items) =>
		items.map((email) => (email.id === id ? { ...email, isRead: true } : email))
	);
};

export const toggleStar = (id: string) => {
	emails.update((items) =>
		items.map((email) => (email.id === id ? { ...email, isStarred: !email.isStarred } : email))
	);
};

export const moveToFolder = (id: string, folder: EmailFolder) => {
	emails.update((items) => items.map((email) => (email.id === id ? { ...email, folder } : email)));
};

export const addEmail = (email: Omit<Email, 'id' | 'timestamp'>) => {
	const newEmail: Email = {
		...email,
		id: `email-${Date.now()}`,
		timestamp: new Date().toISOString()
	};

	emails.update((items) => [newEmail, ...items]);
	return newEmail.id;
};

export const deleteEmail = (id: string) => {
	emails.update((items) => items.filter((email) => email.id !== id));
	selectedEmailId.set(null);
};
