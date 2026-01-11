import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Explore projects by Usman Soliu including Zaakiyah (AI-driven Zakaat platform), DevFresher (mentorship platform), and other scalable backend systems built with Node.js, TypeScript, NestJS, and modern cloud technologies.',
	openGraph: {
		title: 'Projects | Usman Soliu',
		description:
			'Explore projects by Usman Soliu including Zaakiyah, DevFresher, and other scalable backend systems.',
		url: 'https://devfresher.me/projects',
	},
	twitter: {
		title: 'Projects | Usman Soliu',
		description:
			'Explore projects by Usman Soliu including Zaakiyah, DevFresher, and other scalable backend systems.',
	},
	alternates: {
		canonical: 'https://devfresher.me/projects',
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
