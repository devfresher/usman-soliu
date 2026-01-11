import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mentorship',
	description:
		'Mentorship programs and bootcamps by Usman Soliu. Learn computing fundamentals, programming principles, system design, and break into tech with hands-on guidance and practical sessions.',
	openGraph: {
		title: 'Mentorship | Usman Soliu',
		description:
			'Mentorship programs and bootcamps. Learn computing fundamentals, programming principles, and system design.',
		url: 'https://devfresher.me/mentorship',
	},
	twitter: {
		title: 'Mentorship | Usman Soliu',
		description:
			'Mentorship programs and bootcamps. Learn computing fundamentals, programming principles, and system design.',
	},
	alternates: {
		canonical: 'https://devfresher.me/mentorship',
	},
};

export default function MentorshipLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
