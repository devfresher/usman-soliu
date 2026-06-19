export interface SessionMedia {
	label: string;
	/** Image preview — e.g. /mentorship/api-conference-lagos-2026/slide-01.png */
	src?: string;
	/** External link — e.g. Google Slides, PDF, or full-resolution image */
	href?: string;
}

export interface TalkOrWorkshop {
	id: string;
	title: string;
	event: string;
	date: string;
	status: 'upcoming' | 'past';
	description: string;
	type: 'talk' | 'workshop';
	slides?: SessionMedia[];
	photos?: SessionMedia[];
}

export const mentorshipFocus = [
	'Computing fundamentals — how things work under the hood',
	'System design and architectural tradeoffs',
	'Database design, queries, and data modelling',
	'Caching, queues, and performance under load',
	'Security patterns for backend systems',
	'Code quality, testing, and maintainability',
] as const;

/**
 * Add one object per talk or workshop. Each can include slide previews, slide
 * links, and event photos. Put images under public/mentorship/{id}/.
 *
 * @example
 * {
 *   id: 'devfest-lagos-2025',
 *   title: 'Designing APIs for Scale',
 *   event: 'DevFest Lagos 2025',
 *   date: 'Nov 2025',
 *   status: 'past',
 *   type: 'talk',
 *   description: '...',
 *   slides: [
 *     { label: 'Title slide', src: '/mentorship/devfest-lagos-2025/slide-01.png' },
 *     { label: 'Full deck', href: 'https://slides.com/...' },
 *   ],
 *   photos: [
 *     { label: 'On stage', src: '/mentorship/devfest-lagos-2025/on-stage.jpg' },
 *     { label: 'Audience Q&A', src: '/mentorship/devfest-lagos-2025/qa.jpg' },
 *   ],
 * }
 */
export const talksAndWorkshops: TalkOrWorkshop[] = [
	{
		id: 'api-conference-lagos-2026',
		title: 'Backend Engineering Workshop',
		event: 'API Conference Lagos 2026',
		date: '2026',
		status: 'upcoming',
		type: 'workshop',
		description:
			'Hands-on session on backend fundamentals — API design, system boundaries, and patterns that hold up in production.',
		slides: [{ label: 'Workshop slides — coming soon' }],
		photos: [],
	},
];

export const bootcampInfo = {
	title: 'Break into Tech Bootcamp',
	description:
		'I contribute to the Break into Tech bootcamp — helping people transition into engineering with practical projects and solid fundamentals, not trend-chasing.',
	photos: [] as SessionMedia[],
};
