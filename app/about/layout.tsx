import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	title: 'How I Work',
	description: siteConfig.description,
	openGraph: {
		title: `How I Work | ${siteConfig.name}`,
		description: siteConfig.description,
		url: `${siteConfig.url}/about`,
	},
	alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
