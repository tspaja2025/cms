export const countryTimeZone: {
	trigger: string;
	children: {
		name: string;
		value: string;
	}[];
}[] = [
	{
		trigger: 'Country',
		children: [
			{ name: 'Australia', value: 'australia' },
			{ name: 'Finland', value: 'finland' },
			{ name: 'Germany', value: 'germany' },
			{ name: 'UK', value: 'uk' },
			{ name: 'USA', value: 'usa' }
		]
	},
	{
		trigger: 'TimeZone',
		children: [
			{ name: '(GMT-12:00) International Date Line West', value: 'international' },
			{ name: '(GMT-11:00) Midway Island, Samoa', value: 'midway' },
			{ name: '(GMT-10:00) Hawaii', value: 'hawaii' },
			{ name: '(GMT-09:00) Alaska', value: 'alaska' },
			{ name: '(GMT-0:800) Pacific Time (US & Canada)', value: 'pacific' }
		]
	}
];

export const languageCurrency: {
	trigger: string;
	type: 'single' | 'multiple';
	children: {
		name: string;
		value: string;
	}[];
}[] = [
	{
		trigger: 'Language',
		type: 'multiple',
		children: [
			{ name: 'Arabic', value: 'arabic' },
			{ name: 'English', value: 'english' },
			{ name: 'French', value: 'french' },
			{ name: 'German', value: 'german' },
			{ name: 'Portuguese', value: 'portuguese' }
		]
	},
	{
		trigger: 'Currency',
		type: 'single',
		children: [
			{ name: 'EUR', value: 'eur' },
			{ name: 'USD', value: 'usd' },
			{ name: 'Pound', value: 'pound' },
			{ name: 'Bitcoin', value: 'bitcoin' }
		]
	}
];

export const recentDevicesData = [
	{
		id: 1,
		items: [
			{ name: 'Chrome on Windows' },
			{ name: 'HP Spectre 360' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	},
	{
		id: 2,
		items: [
			{ name: 'Chrome on MacOS' },
			{ name: 'Apple iMac' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	},
	{
		id: 3,
		items: [
			{ name: 'Chrome on Android' },
			{ name: 'Oneplus 9 Pro' },
			{ name: 'Finland' },
			{ name: '07, July 20:20' }
		]
	}
];

export const notifications = [
	{ name: 'New for you', email: true, browser: true, app: true },
	{ name: 'Account activity', email: true, browser: true, app: true },
	{ name: 'A new browser used to sign in', email: true, browser: true, app: false },
	{ name: 'A new device is linked', email: true, browser: false, app: false }
];

export const cardInfo = [
	{
		title: 'Connected Accounts',
		description: 'Display content from your connected accounts on your site',
		content: [
			{ title: 'Google', description: 'Calendar and Contacts', checked: true },
			{ title: 'Slack', description: 'Communications', checked: false },
			{ title: 'Github', description: 'Manage your Git repositories', checked: true }
		]
	},
	{
		title: 'Social Accounts',
		description: 'Display content from social accounts on your site',
		content: [
			{ title: 'Facebook', description: '-', checked: true },
			{ title: 'Twitter/X', description: '-', checked: false },
			{ title: 'Linkedin', description: '-', checked: true }
		]
	}
];
