import type { Email } from '$lib/components/email/types';

export const mockEmails: Email[] = [
	{
		id: 'email-1',
		from: {
			name: 'John Doe',
			email: 'john.doe@example.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'Project Update - Q3 Results',
		body: `<p>Hi there,</p>
<p>I wanted to share the Q3 results with you. We've exceeded our targets by 15% and the team has done an amazing job!</p>
<p>Here are some highlights:</p>
<ul>
  <li>Revenue: $1.2M (up 15% from Q2)</li>
  <li>New customers: 250 (up 10%)</li>
  <li>Customer retention: 95% (up 2%)</li>
</ul>
<p>Let's discuss these results in our next meeting.</p>
<p>Best regards,<br>John</p>`,
		preview:
			"I wanted to share the Q3 results with you. We've exceeded our targets by 15% and the team has done an amazing job!",
		timestamp: '2025-05-15T09:24:00Z',
		isRead: false,
		isStarred: true,
		labels: ['work', 'important'],
		folder: 'inbox'
	},
	{
		id: 'email-2',
		from: {
			name: 'Alice Smith',
			email: 'alice.smith@example.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'Invitation: Team Building Event',
		body: `<p>Hello!</p>
<p>I'm excited to invite you to our annual team building event. This year, we're going to have an outdoor adventure at Mountain Creek Resort.</p>
<p>Details:</p>
<ul>
  <li>Date: June 15, 2025</li>
  <li>Time: 9:00 AM - 5:00 PM</li>
  <li>Location: Mountain Creek Resort</li>
  <li>What to bring: Comfortable clothes, sunscreen, water bottle</li>
</ul>
<p>Please RSVP by May 30th.</p>
<p>Looking forward to seeing you there!</p>
<p>Cheers,<br>Alice</p>`,
		preview:
			"I'm excited to invite you to our annual team building event. This year, we're going to have an outdoor adventure at Mountain Creek Resort.",
		timestamp: '2025-05-14T15:30:00Z',
		isRead: true,
		isStarred: false,
		labels: ['social'],
		folder: 'inbox'
	},
	{
		id: 'email-3',
		from: {
			name: 'Bob Johnson',
			email: 'bob.johnson@example.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'Contract Review Request',
		body: `<p>Hi,</p>
<p>Could you please review the attached contract for our new vendor? We need to get this signed by the end of the week.</p>
<p>The key points to look for are:</p>
<ul>
  <li>Payment terms (section 4.2)</li>
  <li>Delivery schedule (section 6.1)</li>
  <li>Warranty period (section 9.3)</li>
</ul>
<p>Let me know if you have any questions or concerns.</p>
<p>Thanks,<br>Bob</p>`,
		preview:
			'Could you please review the attached contract for our new vendor? We need to get this signed by the end of the week.',
		timestamp: '2025-05-13T11:15:00Z',
		isRead: false,
		isStarred: false,
		labels: ['work', 'urgent'],
		folder: 'inbox',
		attachments: [
			{
				name: 'Vendor_Contract_2025.pdf',
				size: 2500000,
				type: 'application/pdf',
				url: '#'
			}
		]
	},
	{
		id: 'email-4',
		from: {
			name: 'Sarah Williams',
			email: 'sarah.williams@example.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'Weekend Hike Plan',
		body: `<p>Hey!</p>
<p>Are you up for a hike this weekend? The weather forecast looks great, and I was thinking we could try the Eagle Ridge Trail.</p>
<p>It's about a 5-mile moderate hike with beautiful views at the summit. We could start around 9 AM and be back by early afternoon.</p>
<p>Let me know if you're interested, and I'll share more details.</p>
<p>Sarah</p>`,
		preview:
			'Are you up for a hike this weekend? The weather forecast looks great, and I was thinking we could try the Eagle Ridge Trail.',
		timestamp: '2025-05-12T18:45:00Z',
		isRead: true,
		isStarred: true,
		labels: ['personal', 'social'],
		folder: 'inbox'
	},
	{
		id: 'email-5',
		from: {
			name: 'Tech Newsletter',
			email: 'newsletter@techupdate.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'This Week in Tech: AI Breakthroughs',
		body: `<p>This Week in Tech</p>
<h2>AI Breakthroughs You Need to Know About</h2>
<p>The AI landscape continues to evolve at a breakneck pace. Here are the top stories from this week:</p>
<ul>
  <li><strong>OpenAI Announces GPT-5:</strong> The next generation model shows remarkable improvements in reasoning and creative tasks.</li>
  <li><strong>Google's DeepMind Solves Protein Folding Problem:</strong> A major breakthrough in medical research.</li>
  <li><strong>EU Passes Comprehensive AI Regulation:</strong> New rules will affect how AI systems can be deployed in Europe.</li>
</ul>
<p>Read more on our website!</p>`,
		preview:
			'The AI landscape continues to evolve at a breakneck pace. Here are the top stories from this week:',
		timestamp: '2025-05-11T08:00:00Z',
		isRead: false,
		isStarred: false,
		labels: ['newsletters'],
		folder: 'inbox'
	},
	{
		id: 'email-6',
		from: {
			name: 'Me',
			email: 'me@example.com'
		},
		to: [
			{
				name: 'Jane Smith',
				email: 'jane.smith@example.com'
			}
		],
		subject: 'Meeting Follow-up',
		body: `<p>Hi Jane,</p>
<p>Thank you for the productive meeting yesterday. As discussed, I'm attaching the presentation with the updated sales figures.</p>
<p>Action items:</p>
<ul>
  <li>You'll prepare the market analysis by next Friday</li>
  <li>I'll schedule a follow-up meeting with the product team</li>
  <li>We'll reconvene in two weeks to finalize the strategy</li>
</ul>
<p>Please let me know if I missed anything.</p>
<p>Best regards,</p>`,
		preview:
			"Thank you for the productive meeting yesterday. As discussed, I'm attaching the presentation with the updated sales figures.",
		timestamp: '2025-05-10T14:30:00Z',
		isRead: true,
		isStarred: false,
		labels: ['work'],
		folder: 'sent',
		attachments: [
			{
				name: 'Sales_Presentation_Q2.pptx',
				size: 4500000,
				type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
				url: '#'
			}
		]
	},
	{
		id: 'email-7',
		from: {
			name: 'Me',
			email: 'me@example.com'
		},
		to: [
			{
				name: 'Mom',
				email: 'mom@example.com'
			}
		],
		subject: 'Birthday Plans',
		body: `<p>Hi Mom,</p>
<p>I was thinking about Dad's surprise birthday party next month. I have a few ideas:</p>
<ul>
  <li>We could rent the back room at his favorite restaurant</li>
  <li>Invite about 20 close friends and family</li>
  <li>Maybe have a slideshow of family photos</li>
</ul>
<p>What do you think? I'm happy to help with the planning and coordination.</p>
<p>Love you!</p>`,
		preview: "I was thinking about Dad's surprise birthday party next month. I have a few ideas:",
		timestamp: '2025-05-09T19:15:00Z',
		isRead: true,
		isStarred: true,
		labels: ['personal', 'family'],
		folder: 'sent'
	},
	{
		id: 'email-8',
		from: {
			name: 'Travel Deals',
			email: 'offers@traveldeals.com'
		},
		to: [
			{
				name: 'Me',
				email: 'me@example.com'
			}
		],
		subject: 'FLASH SALE: 50% Off Flights to Europe!',
		body: `<h1>FLASH SALE!</h1>
<h2>50% Off Flights to Europe</h2>
<p>Book by midnight tomorrow to take advantage of this incredible offer:</p>
<ul>
  <li>London from $399</li>
  <li>Paris from $429</li>
  <li>Rome from $459</li>
  <li>Barcelona from $439</li>
</ul>
<p>Travel dates: September 1 - November 30, 2025</p>
<p>Don't miss out on this limited-time offer!</p>
<p><a href="#">Book Now</a></p>`,
		preview: 'Book by midnight tomorrow to take advantage of this incredible offer',
		timestamp: '2025-05-08T10:00:00Z',
		isRead: true,
		isStarred: false,
		labels: ['promotions'],
		folder: 'spam'
	}
];
