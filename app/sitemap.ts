import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/data/case-studies';
import { siteConfig } from '@/lib/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = siteConfig.url;

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/writing`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/mentorship`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	];

	const projectPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
		url: `${baseUrl}/projects/${study.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.85,
	}));

	return [...staticPages, ...projectPages];
}
