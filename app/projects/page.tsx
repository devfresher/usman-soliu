import { Suspense } from 'react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { CaseStudiesExplorer } from '@/components/case-studies-explorer';
import { caseStudies } from '@/lib/data/case-studies';

function ExplorerFallback() {
	return (
		<div className="space-y-8">
			<div className="h-[9.5rem] animate-pulse rounded-lg border border-border bg-surface" />
			<div className="grid gap-4">
				{caseStudies.map((study) => (
					<div
						key={study.slug}
						className="h-48 animate-pulse rounded-lg border border-border bg-surface"
					/>
				))}
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<PageContainer className="space-y-12">
			<PageHeader
				label="Case studies"
				title="Real systems, real constraints"
				description="Problems I have worked on — what broke, what we built, and what I would do differently."
			/>

			<Suspense fallback={<ExplorerFallback />}>
				<CaseStudiesExplorer studies={caseStudies} />
			</Suspense>
		</PageContainer>
	);
}
