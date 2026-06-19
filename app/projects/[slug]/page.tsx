import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { SectionLabel } from '@/components/section-label';
import { Card } from '@/components/card';
import Button from '@/components/button';
import { ProjectLogo } from '@/components/project-logo';
import { caseStudies, getCaseStudy } from '@/lib/data/case-studies';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const study = getCaseStudy(slug);
	if (!study) return {};

	return {
		title: study.name,
		description: study.tagline,
		openGraph: {
			title: `${study.name} | Usman Soliu`,
			description: study.tagline,
			url: `https://devfresher.me/projects/${study.slug}`,
		},
		alternates: {
			canonical: `https://devfresher.me/projects/${study.slug}`,
		},
	};
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const study = getCaseStudy(slug);

	if (!study) notFound();

	return (
		<PageContainer className="space-y-12">
			<div>
				<Link
					href="/projects"
					className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
				>
					<ArrowLeft className="h-4 w-4" />
					All case studies
				</Link>

				<div className="space-y-4">
					<div className="flex flex-wrap items-center gap-4">
						<ProjectLogo
							name={study.name}
							logo={study.logo}
							logoLight={study.logoLight}
							logoDark={study.logoDark}
							logoInlineWordmark={study.logoInlineWordmark}
							logoFullLockup={study.logoFullLockup}
							size="lg"
						/>
						<SectionLabel>{study.domain}</SectionLabel>
					</div>
					{!study.logoInlineWordmark && !study.logoFullLockup && (
						<h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
							{study.name}
						</h1>
					)}
					<p className="max-w-2xl text-lg text-muted">{study.tagline}</p>
					<div className="flex flex-wrap items-center gap-3 pt-2">
						<span className="font-mono text-xs text-muted">{study.role}</span>
						<span className="text-muted">·</span>
						<span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
							{study.status}
						</span>
						{study.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-md bg-accent-muted px-2 py-0.5 font-mono text-[11px] text-accent"
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex flex-wrap gap-3 pt-2">
						<Button href={study.url} target="_blank" variant="secondary">
							Visit site
							<ArrowUpRight className="ml-2 h-4 w-4" />
						</Button>
						{study.appUrl && (
							<Button href={study.appUrl} target="_blank" variant="ghost">
								App
								<ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						)}
					</div>
				</div>
			</div>

			<div className="grid gap-8 lg:grid-cols-3">
				<div className="space-y-8 lg:col-span-2">
					<section className="space-y-3">
						<h2 className="text-lg font-semibold text-foreground">Problem</h2>
						<p className="leading-relaxed text-muted">{study.problem}</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-lg font-semibold text-foreground">Context</h2>
						<p className="leading-relaxed text-muted">{study.context}</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">Approach</h2>
						<ul className="space-y-3">
							{study.approach.map((item) => (
								<li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
									<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">Architecture</h2>
						<div className="rounded-lg border border-border bg-surface p-5 font-mono text-sm">
							{study.architecture.map((item, i) => (
								<div key={item} className="flex gap-3 text-muted">
									<span className="select-none text-accent/60">
										{String(i + 1).padStart(2, '0')}
									</span>
									<span>{item}</span>
								</div>
							))}
						</div>
					</section>

					<section className="space-y-3">
						<h2 className="text-lg font-semibold text-foreground">Outcome</h2>
						<p className="leading-relaxed text-muted">{study.outcome}</p>
					</section>
				</div>

				<div className="space-y-6">
					{study.metrics && study.metrics.length > 0 && (
						<Card>
							<h3 className="mb-4 font-mono text-xs text-muted">Metrics</h3>
							<div className="space-y-4">
								{study.metrics.map((metric) => (
									<div key={metric.label}>
										<p className="text-sm text-foreground">{metric.label}</p>
										<p className="font-mono text-xs text-muted">
											{metric.value ?? 'Coming soon'}
										</p>
									</div>
								))}
							</div>
						</Card>
					)}

					<Card>
						<h3 className="mb-4 font-mono text-xs text-muted">Stack</h3>
						<div className="flex flex-wrap gap-2">
							{study.stack.map((tech) => (
								<span
									key={tech}
									className="rounded-md border border-border px-2 py-1 text-xs text-foreground"
								>
									{tech}
								</span>
							))}
						</div>
					</Card>
				</div>
			</div>
		</PageContainer>
	);
}
