import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	title: 'Mentorship',
	description: 'Mentorship on backend fundamentals, system design, and engineering growth.',
	openGraph: {
		title: `Mentorship | ${siteConfig.name}`,
		url: `${siteConfig.url}/mentorship`,
	},
	alternates: { canonical: `${siteConfig.url}/mentorship` },
};

export default function MentorshipLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
