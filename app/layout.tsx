import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: `${siteConfig.name} | ${siteConfig.title}`,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'backend engineer',
		'senior backend engineer',
		'staff backend engineer',
		'product engineer',
		'founding engineer',
		'technical lead',
		'engineering manager',
		'Node.js',
		'TypeScript',
		'NestJS',
		'Golang',
		'system design',
		'PostgreSQL',
		'Redis',
		'Usman Soliu',
		'devfresher',
	],
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		siteName: `${siteConfig.name} — ${siteConfig.title}`,
		title: `${siteConfig.name} | ${siteConfig.title}`,
		description: siteConfig.description,
	},
	twitter: {
		card: 'summary_large_image',
		title: `${siteConfig.name} | ${siteConfig.title}`,
		description: siteConfig.description,
		creator: '@devfresher',
	},
	robots: { index: true, follow: true },
	alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable}`}
			suppressHydrationWarning
		>
			<body className={`${GeistSans.className} min-h-screen bg-background text-foreground antialiased`}>
				<ThemeProvider>
					<Navigation />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
