import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/card';
import { siteConfig } from '@/lib/data/site';

export const dynamic = 'force-static';

const title = 'Say hi · APIConf Lagos 2026 | Usman Soliu';
const description =
	'Connect after the APIConf Lagos 2026 workshop. LinkedIn, email, and more from Usman Soliu (devfresher).';
const canonical = `${siteConfig.url}/apiconf/connect`;

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

function withRef(url: string): string {
	return `${url}${url.includes('?') ? '&' : '?'}ref=apiconf`;
}

const links = [
	{
		step: '01',
		symbol: '[]',
		title: 'Say hi on LinkedIn',
		description:
			'Questions about the talk, the repos, or your own monolith? Mention APIConf so I know where you found me.',
		hint: 'drop APIConf in the message',
		href: withRef('https://linkedin.com/in/devfresher'),
		external: true,
	},
	{
		step: '02',
		symbol: '@',
		title: 'Email me',
		description: 'Prefer email? Happy to continue the conversation there.',
		hint: 'soliuomogbolahan01@gmail.com',
		href: 'mailto:soliuomogbolahan01@gmail.com',
		external: false,
	},
	{
		step: '03',
		symbol: '{}',
		title: 'GitHub',
		description: 'Follow along for the workshop repos and other backend experiments.',
		hint: 'github.com/devfresher',
		href: withRef('https://github.com/devfresher'),
		external: true,
	},
	{
		step: '04',
		symbol: '<>',
		title: 'More writing',
		description: 'Backend engineering notes on Code Along, including the full workshop walkthrough.',
		hint: 'code-along.hashnode.dev',
		href: withRef('https://code-along.hashnode.dev'),
		external: true,
	},
] as const;

const linkCardClassName =
	'group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function ApiconfConnectPage() {
	return (
		<div className="relative overflow-hidden">
			<style
				dangerouslySetInnerHTML={{
					__html: `
						@media (prefers-reduced-motion: no-preference) {
							@keyframes apiconf-cursor-blink {
								0%, 49% { opacity: 1; }
								50%, 100% { opacity: 0; }
							}
							.apiconf-cursor { animation: apiconf-cursor-blink 1.1s step-end infinite; }
						}
					`,
				}}
			/>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
				aria-hidden
				style={{
					backgroundImage: `
						linear-gradient(var(--border) 1px, transparent 1px),
						linear-gradient(90deg, var(--border) 1px, transparent 1px)
					`,
					backgroundSize: '48px 48px',
					maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 10%, transparent 70%)',
				}}
			/>
			<div
				className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/8 blur-3xl dark:bg-accent/12"
				aria-hidden
			/>

			<div className="relative mx-auto w-full max-w-lg px-4 py-5 sm:px-6 sm:py-6">
				<section aria-labelledby="apiconf-connect-heading" className="space-y-4">
					<div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
						<div className="flex items-center gap-2 border-b border-border bg-logo-tile px-3 py-2">
							<span className="h-2 w-2 rounded-full bg-[#ff5f56]" aria-hidden />
							<span className="h-2 w-2 rounded-full bg-[#ffbd2e]" aria-hidden />
							<span className="h-2 w-2 rounded-full bg-[#27c93f]" aria-hidden />
							<p className="ml-2 font-mono text-[11px] text-logo-tile-foreground/80">
								<span className="text-accent">$</span> apiconf --connect
								<span className="apiconf-cursor ml-0.5 text-accent">_</span>
							</p>
						</div>

						<header className="space-y-3 px-4 py-4">
							<div className="flex flex-wrap items-center gap-2">
								<span className="rounded-full border border-accent/30 bg-accent-muted px-2.5 py-0.5 font-mono text-[10px] text-accent">
									APIConf Lagos 2026
								</span>
								<span className="font-mono text-[10px] text-muted">say hi</span>
							</div>

							<p className="font-mono text-xs text-muted">
								{'// after the workshop · stay in touch'}
							</p>

							<h1
								id="apiconf-connect-heading"
								className="text-balance text-[1.65rem] font-semibold leading-tight tracking-tight text-foreground"
							>
								Let’s connect
							</h1>

							<p className="text-sm leading-snug text-muted">
								One place for LinkedIn, email, and where else to find me. Mention APIConf so I
								know you were in the room.
							</p>
						</header>
					</div>

					<nav aria-label="Connect" className="flex flex-col gap-2.5">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								{...(link.external
									? { target: '_blank', rel: 'noopener noreferrer' }
									: {})}
								className={linkCardClassName}
							>
								<Card
									hover
									className="overflow-hidden border-t-2 border-t-accent/35 p-4 pt-3.5"
								>
									<div className="flex items-start justify-between gap-3">
										<div className="min-w-0 space-y-1.5">
											<div className="flex items-center gap-2">
												<span className="font-mono text-[10px] text-muted-foreground">
													{link.step}
												</span>
												<span className="font-mono text-xs text-accent">{link.symbol}</span>
											</div>
											<h2 className="text-[0.95rem] font-semibold text-foreground transition-colors group-hover:text-accent">
												{link.title}
											</h2>
											<p className="text-sm leading-snug text-muted">{link.description}</p>
											<p className="font-mono text-[10px] text-muted-foreground">
												{link.hint}
											</p>
										</div>
										<ArrowUpRight
											className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
											aria-hidden
										/>
									</div>
								</Card>
							</a>
						))}
					</nav>
				</section>

				<footer className="mt-5 space-y-1 border-t border-border pt-4 font-mono text-xs text-muted">
					<p>
						<Link href="/apiconf" className="text-muted transition-colors hover:text-foreground">
							← Workshop links
						</Link>
					</p>
					<p className="pt-1 text-[10px] text-muted-foreground">
						{'// also works: devfresher.me/hi'}
					</p>
				</footer>
			</div>
		</div>
	);
}
