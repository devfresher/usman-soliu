// TODO: drop slides.pdf into /public/apiconf/ then uncomment the slides link in the secondary row

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/card';
import { siteConfig } from '@/lib/data/site';

export const dynamic = 'force-static';

function withRef(url: string): string {
	return `${url}${url.includes('?') ? '&' : '?'}ref=apiconf`;
}

const links = [
	{
		symbol: '{}',
		title: 'The workshop repos',
		description:
			'monolith/ and microservices/ — both docker compose up and ready. Break them the way we did on stage.',
		href: withRef('https://github.com/devfresher/api-conf-workshop'),
	},
	{
		symbol: '<>',
		title: 'The full written walkthrough',
		description:
			'From Monolith to Microservices: Building APIs That Survive Production — the 29-min deep dive behind the talk.',
		href: withRef('https://code-along.hashnode.dev/from-monolith-to-microservices'),
	},
	{
		symbol: '[]',
		title: 'Say hi on LinkedIn',
		description:
			'Questions about the talk, the repos, or your own monolith? Mention APIConf so I know where you found me.',
		href: withRef('https://linkedin.com/in/devfresher'),
	},
] as const;

const linkCardClassName =
	'group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function ApiconfPage() {
	return (
		<div className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
			<section aria-labelledby="apiconf-heading" className="space-y-5">
				<header className="space-y-2">
					<p className="border-l-2 border-accent pl-3 font-mono text-xs text-muted">
						// you scanned the QR — welcome
					</p>
					<h1
						id="apiconf-heading"
						className="text-balance text-2xl font-semibold tracking-tight text-foreground"
					>
						From Monolith to Microservices
					</h1>
					<p className="text-sm text-muted">
						Everything from the APIConf Lagos 2026 workshop, in three links.
					</p>
				</header>

				<nav aria-label="Workshop resources" className="flex flex-col gap-3">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className={linkCardClassName}
						>
							<Card hover className="p-4">
								<div className="flex items-start justify-between gap-3">
									<div className="min-w-0 space-y-1">
										<h2 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
											<span className="mr-1.5 font-mono text-xs text-accent">
												{link.symbol}
											</span>
											{link.title}
										</h2>
										<p className="text-sm leading-snug text-muted">{link.description}</p>
									</div>
									<ArrowUpRight
										className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
										aria-hidden
									/>
								</div>
							</Card>
						</a>
					))}
				</nav>
			</section>

			<footer className="mt-6 space-y-1 font-mono text-xs text-muted">
				{/* TODO: drop slides.pdf into /public/apiconf/ then uncomment:
				<p>
					<a
						href="/apiconf/slides.pdf"
						className="text-muted transition-colors hover:text-foreground"
					>
						Download the slides (PDF) →
					</a>
				</p>
				*/}
				<p>
					<Link href="/writing" className="text-muted transition-colors hover:text-foreground">
						More writing →
					</Link>
				</p>
				<p>
					<a
						href={`mailto:${siteConfig.email}`}
						className="text-muted transition-colors hover:text-foreground"
					>
						{siteConfig.email} →
					</a>
				</p>
			</footer>
		</div>
	);
}
