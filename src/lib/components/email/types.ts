export interface Email {
	id: string;
	from: {
		name: string;
		email: string;
	};
	to: {
		name: string;
		email: string;
	}[];
	subject: string;
	body: string;
	preview: string;
	timestamp: string;
	isRead: boolean;
	isStarred: boolean;
	labels: string[];
	folder: EmailFolder;
	attachments?: Attachment[];
}

export interface Attachment {
	name: string;
	size: number;
	type: string;
	url: string;
}

export type EmailFolder = 'inbox' | 'sent' | 'draft' | 'starred' | 'spam' | 'trash';

export interface EmailLabel {
	id: string;
	name: string;
	color: string;
}
