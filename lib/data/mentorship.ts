export interface SessionMedia {
	label: string;
	/** Preview image — e.g. /mentorship/{id}/slide-01.png */
	src?: string;
	/** Optional link for this specific item (full-res image, external slide, etc.) */
	href?: string;
}

export interface SessionDeck {
	/** PDF or external slides URL — e.g. /apiconf/slides.pdf */
	href: string;
	/** Button label — defaults to "Download PDF" */
	label?: string;
}

export interface TalkOrWorkshop {
	id: string;
	title: string;
	event: string;
	date: string;
	status: 'upcoming' | 'past';
	description: string;
	type: 'talk' | 'workshop';
	/**
	 * Slide preview images (title slide first). Add as many as you want —
	 * the card renders them as a carousel.
	 * Put files under public/mentorship/{id}/.
	 */
	slides?: SessionMedia[];
	/**
	 * Full deck download (PDF or hosted slides). Shown as a dedicated action
	 * under the slide previews. Independent of how many preview images you add.
	 */
	deck?: SessionDeck;
	/** Event photos — same carousel pattern as slides. */
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
 * Add one object per talk or workshop.
 *
 * Media layout (recommended):
 *   public/mentorship/{id}/slide-01.png   ← title slide thumbnail
 *   public/mentorship/{id}/slide-02.png   ← more previews (optional)
 *   public/mentorship/{id}/photo-01.jpg   ← event photos (optional)
 *   public/.../deck.pdf                   ← full PDF (or any public path)
 *
 * @example
 * {
 *   id: 'api-conference-lagos-2026',
 *   title: 'From Monolith to Microservices',
 *   event: 'API Conference Lagos 2026',
 *   date: 'Jul 2026',
 *   status: 'upcoming',
 *   type: 'workshop',
 *   description: '...',
 *   slides: [
 *     { label: 'Title slide', src: '/mentorship/api-conference-lagos-2026/slide-01.png' },
 *     { label: 'Architecture', src: '/mentorship/api-conference-lagos-2026/slide-02.png' },
 *   ],
 *   deck: {
 *     href: '/apiconf/slides.pdf',
 *     label: 'Download full deck (PDF)',
 *   },
 *   photos: [
 *     { label: 'On stage', src: '/mentorship/api-conference-lagos-2026/photo-01.jpg' },
 *   ],
 * }
 */
export const talksAndWorkshops: TalkOrWorkshop[] = [
	{
		id: 'api-conference-lagos-2026',
		title: 'From Monolith to Microservices',
		event: 'API Conference Lagos 2026',
		date: 'Aug 24, 2026',
		status: 'upcoming',
		type: 'workshop',
		description:
			'Building APIs That Survive Production — hands-on session on splitting a monolith, drawing service boundaries, and shipping patterns that hold up under real load.',
		slides: [
			{
				label: 'Title slide',
				src: '/mentorship/api-conference-lagos-2026/slide-01.png',
			},
		],
		deck: {
			href: '/apiconf/slides.pdf',
			label: 'Download full deck (PDF)',
		},
		photos: [],
	},
];

export const bootcampInfo = {
	title: 'Break into Tech Bootcamp',
	description:
		'I contribute to the Break into Tech bootcamp — helping people transition into engineering with practical projects and solid fundamentals, not trend-chasing.',
	photos: [] as SessionMedia[],
};
