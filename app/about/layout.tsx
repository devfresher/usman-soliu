import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description:
		'Learn about Usman Soliu, a Tech Lead & Product Engineer specializing in backend development, system design, and team leadership. Building scalable systems with Node.js, TypeScript, NestJS, Golang, and AWS.',
	openGraph: {
		title: 'About | Usman Soliu',
		description:
			'Learn about Usman Soliu, a Tech Lead & Product Engineer specializing in backend development, system design, and team leadership.',
		url: 'https://devfresher.me/about',
	},
	twitter: {
		title: 'About | Usman Soliu',
		description:
			'Learn about Usman Soliu, a Tech Lead & Product Engineer specializing in backend development, system design, and team leadership.',
	},
	alternates: {
		canonical: 'https://devfresher.me/about',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
