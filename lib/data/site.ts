export const siteConfig = {
	name: 'Usman Soliu',
	title: 'Senior Product-focused Backend Engineer',
	description:
		'Backend engineer working on system design and APIs for products that have to stay up as usage grows. Fintech, HR, food delivery, charity, and EdTech.',
	url: 'https://devfresher.me',
	email: 'hello@devfresher.me',
	hashnodeHost: 'code-along.hashnode.dev',
	hashnodeUrl: 'https://code-along.hashnode.dev',
} as const;

/** Home hero subhead. Keep aligned with case study domains. */
export const homeHeroText =
	'I build backend systems for products that need to scale without falling apart. APIs, data pipelines, and the infrastructure behind fintech, HR, food delivery, charity, mobility, and EdTech.';

/** About sidebar “Currently” card. Current role(s) only. */
export const currentlyRoles = 'Technical Team Lead at HCMatrix';

/** About intro. First paragraph under the page header. */
export const aboutIntroText =
	'I have led and contributed to backend systems across fintech, HR, food delivery, EdTech, charity, and mobility, usually from early architecture through production. I care more about whether the system still holds six months later than whether it shipped on Friday.';

/** Toggle job-search visibility across the site. */
export const openToWork = {
	active: true,
	label: 'Open to opportunities',
	shortLabel: 'Open to work',
} as const;

export type NavItem = {
	href: string;
	label: string;
	symbol: string;
};

/** Primary destinations. Always visible in the nav bar. */
export const primaryNavItems: NavItem[] = [
	{ href: '/', label: 'Home', symbol: '~' },
	{ href: '/projects', label: 'Case Studies', symbol: '{}' },
	{ href: '/writing', label: 'Insights', symbol: '<>' },
	{ href: '/mentorship', label: 'Mentorship', symbol: '()' },
];

/** Secondary pages. Grouped in the More menu. */
export const secondaryNavItems: NavItem[] = [
	{ href: '/about', label: 'How I Work', symbol: '//' },
	{ href: '/contact', label: 'Contact', symbol: '[]' },
];

/** All routes. Used by mobile menu. */
export const navItems: NavItem[] = [...primaryNavItems, ...secondaryNavItems];

export const socialLinks = [
	{
		label: 'GitHub',
		href: 'https://github.com/devfresher',
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/devfresher',
	},
	{
		label: 'Email',
		href: 'mailto:hello@devfresher.me',
	},
] as const;

export const contactIntro =
	'Open to senior and staff backend roles, product engineering, technical leadership, engineering management, and founding engineer work. Also mentorship and speaking.';

export const openToRoles = [
	'Senior Backend Engineer',
	'Staff Backend Engineer',
	'Product Engineer (Backend)',
	'Technical Lead',
	'Engineering Manager',
	'Founding Engineer',
] as const;

/** Short open-to line for the home page CTA. Keep in sync with openToRoles. */
export const homeOpenToText =
	'Open to senior and staff backend engineering, product engineering, technical leadership, engineering management, and founding engineer roles.';

export const testimonialsIntro =
	'Notes from people I have worked with, and from readers of my technical writing.';

export const principles = [
	{
		title: 'Understand first',
		description:
			'I start with the business problem and the constraints, not the stack. Clear architecture usually follows once you know what actually has to work.',
	},
	{
		title: 'Design for change',
		description:
			'Requirements shift. I prefer systems that can evolve without a rewrite: clear boundaries, boring interfaces, and documented tradeoffs.',
	},
	{
		title: 'Own the outcome',
		description:
			'Shipping is the baseline. After that I care about monitoring, failure modes, and whether the system holds under real load.',
	},
] as const;
