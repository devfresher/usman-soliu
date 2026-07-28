export interface SessionMedia {
	label: string;
	/** Preview image, e.g. /mentorship/{id}/slide-01.png */
	src?: string;
	/** Optional link for this specific item (full-res image, external slide, etc.) */
	href?: string;
}

export interface SessionDeck {
	/** PDF or external slides URL, e.g. /apiconf/slides.pdf */
	href: string;
	/** Button label. Defaults to "Download PDF" */
	label?: string;
}

export interface TalkOrWorkshop {
	id: string;
	title: string;
	event: string;
	/** Session day as YYYY-MM-DD. Status is derived from this. */
	date: string;
	description: string;
	type: 'talk' | 'workshop';
	/**
	 * Slide preview images (title slide first). Add as many as you want.
	 * The card renders them as a carousel.
	 * Put files under public/mentorship/{id}/.
	 */
	slides?: SessionMedia[];
	/**
	 * Full deck download (PDF or hosted slides). Shown as a dedicated action
	 * under the slide previews. Independent of how many preview images you add.
	 */
	deck?: SessionDeck;
	/** Event photos. Same carousel pattern as slides. */
	photos?: SessionMedia[];
}

export type SessionStatus = 'upcoming' | 'past';

/** Parse YYYY-MM-DD as a local calendar day (avoids UTC off-by-one). */
function parseSessionDay(date: string): Date {
	const [year, month, day] = date.split('-').map(Number);
	return new Date(year, month - 1, day);
}

/** Upcoming on/before the session day; past from the next calendar day. */
export function getSessionStatus(
	session: Pick<TalkOrWorkshop, 'date'>,
	now: Date = new Date(),
): SessionStatus {
	const sessionDay = parseSessionDay(session.date);
	const today = new Date(now);
	today.setHours(0, 0, 0, 0);
	return sessionDay >= today ? 'upcoming' : 'past';
}

export function formatSessionDate(date: string): string {
	return parseSessionDay(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function getUpcomingSessions(
	sessions: TalkOrWorkshop[] = talksAndWorkshops,
): TalkOrWorkshop[] {
	return sessions
		.filter((session) => getSessionStatus(session) === 'upcoming')
		.sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastSessions(
	sessions: TalkOrWorkshop[] = talksAndWorkshops,
): TalkOrWorkshop[] {
	return sessions
		.filter((session) => getSessionStatus(session) === 'past')
		.sort((a, b) => b.date.localeCompare(a.date));
}

export const mentorshipFocus = [
	'Computing fundamentals: how things work under the hood',
	'System design and architectural tradeoffs',
	'Database design, queries, and data modelling',
	'Caching, queues, and performance under load',
	'Security patterns for backend systems',
	'Code quality, testing, and maintainability',
] as const;

/**
 * Add one object per talk or workshop.
 *
 * Use `date` as YYYY-MM-DD. Upcoming vs past is computed automatically.
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
 *   date: '2026-07-24',
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
		date: '2026-07-24',
		type: 'workshop',
		description:
			'Building APIs That Survive Production. Hands-on session on splitting a monolith, drawing service boundaries, and shipping patterns that hold up under real load.',
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
		photos: [
			{
				label: 'Speaking',
				src: '/mentorship/api-conference-lagos-2026/photo-01.png',
			},
			{
				label: 'On stage',
				src: '/mentorship/api-conference-lagos-2026/photo-02.png',
			},
			{
				label: 'Mid-session',
				src: '/mentorship/api-conference-lagos-2026/photo-03.png',
			},
			{
				label: 'The room',
				src: '/mentorship/api-conference-lagos-2026/photo-04.png',
			},
			{
				label: 'Group photo',
				src: '/mentorship/api-conference-lagos-2026/photo-05.png',
			},
		],
	},
];

export const bootcampInfo = {
	title: 'Break into Tech Bootcamp',
	description:
		'I contribute to the Break into Tech bootcamp. We help people transition into engineering with practical projects and solid fundamentals, without chasing trends.',
	photos: [] as SessionMedia[],
};
