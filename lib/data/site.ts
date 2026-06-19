export const siteConfig = {
	name: 'Usman Soliu',
	title: 'Senior Product-focused Backend Engineer',
	description:
		'Backend engineer focused on system design, APIs, and the parts of products that need to stay up when usage grows.',
	url: 'https://devfresher.me',
	email: 'hello@devfresher.me',
	hashnodeHost: 'code-along.hashnode.dev',
	hashnodeUrl: 'https://code-along.hashnode.dev',
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
