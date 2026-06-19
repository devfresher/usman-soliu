import type { Metadata } from 'next';
import { contactIntro, siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	title: 'Contact',
	description: contactIntro,
	openGraph: {
		title: `Contact | ${siteConfig.name}`,
		url: `${siteConfig.url}/contact`,
	},
	alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
