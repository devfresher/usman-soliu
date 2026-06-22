import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/card';
import { ProjectLogo } from '@/components/project-logo';
import type { CaseStudy } from '@/lib/data/case-studies';

interface CaseStudyCardProps {
	study: CaseStudy;
	variant?: 'list' | 'compact';
}

function LogoProps(study: CaseStudy) {
	return {
		name: study.name,
		logo: study.logo,
		logoLight: study.logoLight,
		logoDark: study.logoDark,
		appearance: 'plain' as const,
	};
}

export function CaseStudyCard({ study, variant = 'list' }: CaseStudyCardProps) {
	if (variant === 'compact') {
		return (
			<Link href={`/projects/${study.slug}`} className="group block">
				<Card hover className="h-full">
					<div className="flex flex-col gap-4">
						<div className="flex items-start justify-between gap-3">
							<ProjectLogo {...LogoProps(study)} size="sm" />
							<ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
						</div>
						<div className="space-y-2">
							<p className="font-mono text-xs text-muted">{study.domain}</p>
							<h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
								{study.name}
							</h3>
							<p className="text-sm text-muted line-clamp-2">{study.tagline}</p>
						</div>
					</div>
				</Card>
			</Link>
		);
	}

	return (
		<Link href={`/projects/${study.slug}`} className="group block">
			<Card hover className="h-full">
				<div className="flex flex-col gap-4">
					<div className="flex items-start justify-between gap-4">
						<ProjectLogo {...LogoProps(study)} size="md" />
						<span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
							{study.status}
						</span>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-xs text-muted">{study.domain}</p>
						<h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
							{study.name}
						</h3>
					</div>

					<p className="text-sm leading-relaxed text-muted">{study.tagline}</p>

					<div className="flex flex-wrap gap-2">
						{study.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-md bg-accent-muted px-2 py-0.5 font-mono text-[11px] text-accent"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex items-center justify-between border-t border-border pt-4">
						<p className="text-xs text-muted">{study.role}</p>
						<span className="flex items-center gap-1 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
							Read case study
							<ArrowUpRight className="h-3 w-3" />
						</span>
					</div>
				</div>
			</Card>
		</Link>
	);
}
