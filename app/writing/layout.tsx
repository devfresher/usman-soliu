import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	title: 'Insights',
	description: 'Writing on backend engineering and system design from Code Along on Hashnode.',
	openGraph: {
		title: `Insights | ${siteConfig.name}`,
		url: `${siteConfig.url}/writing`,
	},
	alternates: { canonical: `${siteConfig.url}/writing` },
};

export default function WritingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
