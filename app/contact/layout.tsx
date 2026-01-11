import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Get in touch with Usman Soliu. Open to opportunities, mentorship, and meaningful collaborations. Connect via email, LinkedIn, or GitHub.',
	openGraph: {
		title: 'Contact | Usman Soliu',
		description:
			'Get in touch with Usman Soliu. Open to opportunities, mentorship, and meaningful collaborations.',
		url: 'https://devfresher.me/contact',
	},
	twitter: {
		title: 'Contact | Usman Soliu',
		description:
			'Get in touch with Usman Soliu. Open to opportunities, mentorship, and meaningful collaborations.',
	},
	alternates: {
		canonical: 'https://devfresher.me/contact',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
