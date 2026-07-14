import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/card';
import { TalkWorkshopCard } from '@/components/talk-workshop-card';
import { mentorshipFocus, talksAndWorkshops } from '@/lib/data/mentorship';

export default function Mentorship() {
	const upcoming = talksAndWorkshops.filter((item) => item.status === 'upcoming');
	const past = talksAndWorkshops.filter((item) => item.status === 'past');

	return (
		<PageContainer className="space-y-16">
			<PageHeader
				label="Mentorship"
				title="Teaching what lasts"
				description="I mentor on fundamentals — the kind that still apply when the framework changes."
			/>

			<div className="grid gap-16 lg:grid-cols-3">
				<div className="space-y-10 lg:col-span-2">
					<section className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">How I mentor</h2>
						<p className="leading-relaxed text-muted">
							I contribute to community programmes and mentor engineers who want
							stronger foundations — not another tutorial stack. I focus on how
							systems work, why designs fail, and how to make tradeoffs you can
							defend in a review.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">Focus areas</h2>
						<ul className="grid gap-3 sm:grid-cols-2">
							{mentorshipFocus.map((area) => (
								<li key={area} className="flex gap-3 text-sm text-muted">
									<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
									{area}
								</li>
							))}
						</ul>
					</section>

					<section className="space-y-6">
						<h2 className="text-lg font-semibold text-foreground">Talks & workshops</h2>

						{upcoming.length > 0 && (
							<div className="space-y-4">
								{upcoming.map((session) => (
									<TalkWorkshopCard key={session.id} session={session} />
								))}
							</div>
						)}

						{past.length > 0 && (
							<div className="space-y-4">
								{past.length > 0 && upcoming.length > 0 && (
									<p className="font-mono text-xs text-muted">Past sessions</p>
								)}
								{past.map((session) => (
									<TalkWorkshopCard key={session.id} session={session} />
								))}
							</div>
						)}

						{upcoming.length === 0 && past.length === 0 && (
							<Card>
								<p className="text-sm text-muted">Talks and slides coming soon.</p>
							</Card>
						)}
					</section>

					{/* Break into Tech Bootcamp — restore when ready
					<section className="space-y-6">
						<h2 className="text-lg font-semibold text-foreground">
							{bootcampInfo.title}
						</h2>
						<p className="text-sm leading-relaxed text-muted">
							{bootcampInfo.description}
						</p>
						<div className="space-y-2">
							<p className="font-mono text-xs text-muted">Session photos</p>
							<ImageCarousel
								items={bootcampInfo.photos.map((photo) => ({
									label: photo.label,
									src: photo.src,
									href: photo.href,
								}))}
								placeholder="Bootcamp photos coming soon"
							/>
						</div>
					</section>
					*/}
				</div>

				<div className="space-y-6">
					<Card className="sticky top-20">
						<h3 className="mb-3 text-base font-semibold text-foreground">
							Interested in mentorship?
						</h3>
						<p className="mb-5 text-sm text-muted">
							Reach out if you are working through system design, backend
							fundamentals, or early-career growth.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
						>
							Get in touch
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Card>
				</div>
			</div>
		</PageContainer>
	);
}
