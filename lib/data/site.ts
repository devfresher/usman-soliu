export const siteConfig = {
	name: 'Usman Soliu',
	title: 'Senior Product-focused Backend Engineer',
	description:
		'Backend engineer focused on system design, APIs, and the parts of products that need to stay up when usage grows — across fintech, HR, food delivery, charity, and EdTech.',
	url: 'https://devfresher.me',
	email: 'hello@devfresher.me',
	hashnodeHost: 'code-along.hashnode.dev',
	hashnodeUrl: 'https://code-along.hashnode.dev',
} as const;

/** Home hero subhead — keep aligned with case study domains. */
export const homeHeroText =
	'I build backend systems for products that need to scale without falling apart — APIs, data pipelines, and the infrastructure behind fintech, HR, food delivery, charity, and EdTech platforms.';

/** About sidebar “Currently” card — current role(s) only. */
export const currentlyRoles = 'Technical Team Lead at HCMatrix';

/** About intro — first paragraph under the page header. */
export const aboutIntroText =
	'I have led and contributed to backend systems across fintech, HR, food delivery, EdTech, charity, and mobility — usually from early architecture through production. I care about whether the system holds up six months after launch, not just whether it ships on Friday.';

/** Toggle job-search visibility across the site. */
export const openToWork = {
	active: true,
	label: 'Open to opportunities',
	shortLabel: 'Open to work',
} as const;

export const navItems = [
	{ href: '/', label: 'Home', symbol: '~' },
	{ href: '/about', label: 'How I Work', symbol: '//' },
	{ href: '/projects', label: 'Case Studies', symbol: '{}' },
	{ href: '/writing', label: 'Insights', symbol: '<>' },
	{ href: '/mentorship', label: 'Mentorship', symbol: '()' },
	{ href: '/contact', label: 'Contact', symbol: '[]' },
] as const;

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
	'Open to senior and staff backend engineering, product engineering, technical leadership, engineering management, and founding engineer roles — plus mentorship and speaking.';

export const openToRoles = [
	'Senior Backend Engineer',
	'Staff Backend Engineer',
	'Product Engineer (Backend)',
	'Technical Lead',
	'Engineering Manager',
	'Founding Engineer',
] as const;

/** Short open-to line for the home page CTA — kept in sync with openToRoles. */
export const homeOpenToText =
	'Open to senior and staff backend engineering, product engineering, technical leadership, engineering management, and founding engineer roles.';

export const testimonialsIntro =
	'Feedback from colleagues I have worked with and readers of my technical writing.';

export const principles = [
	{
		title: 'Understand first',
		description:
			'I start with the business problem and constraints — not the stack. Good architecture follows clarity on what actually needs to work.',
	},
	{
		title: 'Design for change',
		description:
			'Requirements shift. I prefer systems that can evolve without a rewrite — clear boundaries, boring interfaces, documented tradeoffs.',
	},
	{
		title: 'Own the outcome',
		description:
			'Shipping is the baseline. I care about what happens after — monitoring, failure modes, and whether the system holds under real load.',
	},
] as const;