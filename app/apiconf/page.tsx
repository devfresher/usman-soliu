import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/card';

export const dynamic = 'force-static';

function withRef(url: string): string {
	return `${url}${url.includes('?') ? '&' : '?'}ref=apiconf`;
}

const links = [
	{
		step: '01',
		symbol: '{}',
		title: 'The workshop repos',
		description:
			'monolith/ and microservices/ — both docker compose up and ready. Break them the way we did on stage.',
		hint: 'git clone → docker compose up → break things',
		href: withRef('https://github.com/devfresher/api-conf-workshop'),
	},
	{
		step: '02',
		symbol: '<>',
		title: 'The full written walkthrough',
		description:
			'From Monolith to Microservices: Building APIs That Survive Production — the 29-min deep dive behind the talk.',
		hint: '29 min read · no fluff',
		href: withRef('https://code-along.hashnode.dev/from-monolith-to-microservices'),
	},
	{
		step: '03',
		symbol: '[]',
		title: 'Say hi on LinkedIn',
		description:
			'Questions about the talk, the repos, or your own monolith? Mention APIConf so I know where you found me.',
		hint: 'drop APIConf in the message',
		href: withRef('https://linkedin.com/in/devfresher'),
	},
] as const;

const linkCardClassName =
	'group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function ApiconfPage() {
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
				<section aria-labelledby="apiconf-heading" className="space-y-4">
					<div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
						<div className="flex items-center gap-2 border-b border-border bg-logo-tile px-3 py-2">
							<span className="h-2 w-2 rounded-full bg-[#ff5f56]" aria-hidden />
							<span className="h-2 w-2 rounded-full bg-[#ffbd2e]" aria-hidden />
							<span className="h-2 w-2 rounded-full bg-[#27c93f]" aria-hidden />
							<p className="ml-2 font-mono text-[11px] text-logo-tile-foreground/80">
								<span className="text-accent">$</span> apiconf --lagos
								<span className="apiconf-cursor ml-0.5 text-accent">_</span>
							</p>
						</div>

						<header className="space-y-3 px-4 py-4">
							<div className="flex flex-wrap items-center gap-2">
								<span className="rounded-full border border-accent/30 bg-accent-muted px-2.5 py-0.5 font-mono text-[10px] text-accent">
									APIConf Lagos 2026
								</span>
								<span className="font-mono text-[10px] text-muted">Aug 24 · workshop</span>
							</div>

							<p className="font-mono text-xs text-muted">
								{'// status: applause_received — welcome aboard'}
							</p>

							<h1
								id="apiconf-heading"
								className="text-balance text-[1.65rem] font-semibold leading-tight tracking-tight text-foreground"
							>
								From Monolith to Microservices
							</h1>

							<p className="text-sm leading-snug text-muted">
								Three links. Zero signup forms. Everything from the room — grab what you
								need before venue Wi‑Fi gives up.
							</p>

							<div className="flex flex-wrap items-center justify-between gap-3">
								<p className="font-mono text-[10px] text-muted-foreground">
									3 links · 1 deck · 0 newsletters
								</p>
								<a
									href="/apiconf/slides.pdf"
									className="group/thumb inline-flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
								>
									<div className="relative h-7 w-12 overflow-hidden rounded-sm border border-border">
										<Image
											src="/mentorship/api-conference-lagos-2026/slide-01.png"
											alt=""
											fill
											className="object-cover object-top"
											sizes="48px"
											aria-hidden
										/>
									</div>
									<span className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground">
										Peek the deck
										<ArrowUpRight
											className="h-3 w-3 transition-transform group-hover/thumb:translate-x-0.5 group-hover/thumb:-translate-y-0.5"
											aria-hidden
										/>
									</span>
								</a>
							</div>
						</header>
					</div>

					<nav aria-label="Workshop resources" className="flex flex-col gap-2.5">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
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
						<a
							href="/apiconf/slides.pdf"
							className="text-muted transition-colors hover:text-foreground"
						>
							Download the slides (PDF) →
						</a>
					</p>
					<p>
						<Link href="/writing" className="text-muted transition-colors hover:text-foreground">
							More writing →
						</Link>
					</p>
					<p>
						<a
							href="mailto:soliuomogbolahan01@gmail.com"
							className="text-muted transition-colors hover:text-foreground"
						>
							soliuomogbolahan01@gmail.com →
						</a>
					</p>
					<p className="pt-1 text-[10px] text-muted-foreground">
						{'// also works: devfresher.me/lagos'}
					</p>
				</footer>
			</div>
		</div>
	);
}
