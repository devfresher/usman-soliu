import { siteConfig, socialLinks } from '@/lib/data/site';

const sameAs = socialLinks
	.filter((link) => link.href.startsWith('http'))
	.map((link) => link.href);

export function getPersonJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: siteConfig.name,
		url: siteConfig.url,
		email: siteConfig.email,
		jobTitle: siteConfig.title,
		description: siteConfig.description,
		sameAs,
		knowsAbout: [
			'Backend Engineering',
			'System Design',
			'Node.js',
			'TypeScript',
			'NestJS',
			'Express.js',
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'BullMQ',
			'API Design',
		],
	};
}

export function getWebsiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: `${siteConfig.name} — ${siteConfig.title}`,
		url: siteConfig.url,
		description: siteConfig.description,
		author: {
			'@type': 'Person',
			name: siteConfig.name,
			url: siteConfig.url,
		},
	};
}
