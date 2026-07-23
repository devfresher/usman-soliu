import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data/site';

const title = 'APIConf Lagos 2026 — Workshop Links | Usman Soliu';
const description =
	'Workshop links from APIConf Lagos 2026: From Monolith to Microservices — Building APIs That Survive Production. Setup guide, repos, walkthrough, and slides.';
const canonical = `${siteConfig.url}/apiconf`;

export const metadata: Metadata = {
	title: { absolute: title },
	description,
	openGraph: {
		title,
		description,
		url: canonical,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
	},
	robots: { index: true, follow: true },
	alternates: { canonical },
};

export default function ApiconfLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
