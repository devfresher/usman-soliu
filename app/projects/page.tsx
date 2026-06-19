import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { CaseStudyCard } from '@/components/case-study-card';
import { caseStudies } from '@/lib/data/case-studies';

export default function Projects() {
	return (
		<PageContainer className="space-y-12">
			<PageHeader
				label="Case studies"
				title="Real systems, real constraints"
				description="Problems I have worked on — what broke, what we built, and what I would do differently."
			/>

			<div className="grid gap-4">
				{caseStudies.map((study) => (
					<CaseStudyCard key={study.slug} study={study} />
				))}
			</div>
		</PageContainer>
	);
}
