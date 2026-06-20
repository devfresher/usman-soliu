import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	title: 'Case Studies',
	description:
		'Backend engineering case studies — Zaakiyah, HCMatrix, Haqqpay, Jekaeat, Talentcona, Togo Mobility, and SubI.',
	openGraph: {
		title: `Case Studies | ${siteConfig.name}`,
		url: `${siteConfig.url}/projects`,
	},
	alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
