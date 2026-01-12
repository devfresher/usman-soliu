import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://devfresher.me'),
	title: {
		default: 'Usman Soliu | Tech Lead & Product Engineer',
		template: '%s | Usman Soliu',
	},
	description:
		'Tech Lead & Product Engineer building scalable, impact-driven systems. Specialized in Node.js, TypeScript, NestJS, Golang, AWS, and system design. Open to opportunities, mentorship, and meaningful collaborations.',
	keywords: [
		'backend engineer',
		'tech lead',
		'product engineer',
		'Node.js',
		'TypeScript',
		'NestJS',
		'Golang',
		'Express.js',
		'PHP',
		'AWS',
		'Docker',
		'system design',
		'PostgreSQL',
		'MySQL',
		'MongoDB',
		'Redis',
		'backend development',
		'API development',
		'software engineering',
		'mentorship',
		'devfresher',
		'Usman Soliu',
	],
	authors: [{ name: 'Usman Soliu', url: 'https://devfresher.me' }],
	creator: 'Usman Soliu',
	publisher: 'Usman Soliu',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://devfresher.me',
		siteName: 'Usman Soliu - Tech Lead & Product Engineer',
		title: 'Usman Soliu | Tech Lead & Product Engineer',
		description:
			'Tech Lead & Product Engineer building scalable, impact-driven systems. Specialized in Node.js, TypeScript, NestJS, Golang, AWS, and system design.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Usman Soliu - Tech Lead & Product Engineer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Usman Soliu | Tech Lead & Product Engineer',
		description:
			'Tech Lead & Product Engineer building scalable, impact-driven systems. Specialized in Node.js, TypeScript, NestJS, Golang, AWS, and system design.',
		images: ['/og-image.png'],
		creator: '@devfresher',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: 'any' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	manifest: '/site.webmanifest',
	alternates: {
		canonical: 'https://devfresher.me',
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<head>
				<link rel="canonical" href="https://devfresher.me" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Usman Soliu',
							alternateName: 'devfresher',
							jobTitle: 'Tech Lead & Product Engineer',
							description:
								'Tech Lead & Product Engineer building scalable, impact-driven systems. Specialized in Node.js, TypeScript, NestJS, Golang, AWS, and system design.',
							url: 'https://devfresher.me',
							sameAs: [
								'https://linkedin.com/in/devfresher',
								'https://github.com/devfresher',
							],
							email: 'hello@devfresher.me',
							knowsAbout: [
								'Backend Development',
								'Node.js',
								'TypeScript',
								'NestJS',
								'Golang',
								'Express.js',
								'PHP',
								'AWS',
								'Docker',
								'System Design',
								'PostgreSQL',
								'MySQL',
								'MongoDB',
								'Redis',
								'API Development',
								'Software Engineering',
							],
							worksFor: {
								'@type': 'Organization',
								name: 'HCMatrix Limited',
								url: 'https://hcmatrix.com',
								logo: 'https://hcmatrix.com/wp-content/uploads/2024/12/HC_Matrix_HR_Solution-Logo_design-removebg-preview-1.png',
								description:
									'HCMatrix is a modern HR and payroll management platform designed for African businesses. Streamline performance reviews, leave management, payroll, and more with ease.',
								address: {
									'@type': 'PostalAddress',
									streetAddress:
										'17 Charles Ifeanyi St, Eti-Osa, Lagos 106104, Lagos',
									city: 'Lekki',
									state: 'Lagos',
									postalCode: '106104',
									country: 'Nigeria',
								},
								email: 'info@hcmatrix.com',
								phone: '+1 716-317-9506',
							},
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Usman Soliu - Tech Lead & Product Engineer',
							url: 'https://devfresher.me',
							author: {
								'@type': 'Person',
								name: 'Usman Soliu',
							},
							potentialAction: {
								'@type': 'SearchAction',
								target: 'https://devfresher.me?search={search_term_string}',
								'query-input': 'required name=search_term_string',
							},
						}),
					}}
				/>
			</head>
			<body className="antialiased">
				<Navigation />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
