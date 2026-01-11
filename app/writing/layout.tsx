import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Writing',
	description:
		'Technical insights and articles by Usman Soliu on backend development, Node.js internals, system design, caching strategies, queue management, and software engineering best practices.',
	openGraph: {
		title: 'Writing | Usman Soliu',
		description:
			'Technical insights and articles on backend development, Node.js internals, system design, and software engineering.',
		url: 'https://devfresher.me/writing',
	},
	twitter: {
		title: 'Writing | Usman Soliu',
		description:
			'Technical insights and articles on backend development, Node.js internals, system design, and software engineering.',
	},
	alternates: {
		canonical: 'https://devfresher.me/writing',
	},
};

export default function WritingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
