import { ArrowRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/card';
import { FlipProfileCard } from '@/components/flip-profile-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { SectionLabel } from '@/components/section-label';
import TechStack from '@/components/tech-stack';
import Button from '@/components/button';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { principles, aboutIntroText, currentlyRoles, siteConfig } from '@/lib/data/site';
import { experienceTimeline } from '@/lib/data/experience';
import {
	getCommunityTestimonials,
	getTestimonialsByContext,
	getWorkplaceTestimonials,
	testimonials,
} from '@/lib/data/testimonials';

const workingWithMe = [
	'I ask a lot of questions upfront — context saves rework later.',
	'I prefer written decisions for anything architectural.',
	'I will push back if a deadline conflicts with correctness on financial or user data.',
	'I am direct in reviews, but I care about the person behind the code.',
];

export default function About() {
	const workplaceTestimonials = getWorkplaceTestimonials();
	const communityFeedback = getCommunityTestimonials();
	const currentFeedback = getTestimonialsByContext('current').filter(
		(t) => t.relationship !== 'community',
	);
	const pastFeedback = getTestimonialsByContext('past').filter(
		(t) => t.relationship !== 'community',
	);
	const uncategorized = workplaceTestimonials.filter((t) => !t.context);
	const hasFeedback = testimonials.length > 0;

	return (
		<PageContainer className="space-y-20">
			<div className="grid gap-16 lg:grid-cols-5">
				<div className="space-y-10 lg:col-span-3">
					<PageHeader
						label="How I work"
						title="Problem first, systems second"
						description="I am a senior product-focused backend engineer. I spend most of my time on the parts of products that need to stay reliable when traffic, data, or team size grows."
					/>

					<div className="space-y-4 text-base leading-relaxed text-muted">
						<p>{aboutIntroText}</p>
						<p>
							When I lead, I stay hands-on. I would rather review a schema change
							than delegate it blindly. When I build, I think about the product
							constraint behind the ticket — who is blocked if this API is slow or
							wrong?
						</p>
					</div>

					<div className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">Experience</h2>
						<ExperienceTimeline entries={experienceTimeline} />
					</div>

					<div className="space-y-6">
						<h2 className="text-lg font-semibold text-foreground">How I approach work</h2>
						<div className="grid gap-4">
							{principles.map((principle) => (
								<Card key={principle.title}>
									<h3 className="mb-2 font-medium text-foreground">{principle.title}</h3>
									<p className="text-sm leading-relaxed text-muted">
										{principle.description}
									</p>
								</Card>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<h2 className="text-lg font-semibold text-foreground">Working with me</h2>
						<ul className="space-y-3">
							{workingWithMe.map((item) => (
								<li key={item} className="flex gap-3 text-sm text-muted">
									<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
									{item}
								</li>
							))}
						</ul>
					</div>

					<Button href="/contact" variant="secondary">
						Let&apos;s talk
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>

				<div className="lg:col-span-2">
					<div className="sticky top-20 space-y-6">
						<FlipProfileCard className="hidden sm:block" />
						<Card>
							<p className="mb-1 font-mono text-xs text-muted">Currently</p>
							<p className="text-sm text-foreground">
								{currentlyRoles}. Writing on{' '}
								<a
									href={siteConfig.hashnodeUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									Code Along
								</a>
								. Mentoring through community programmes.
							</p>
						</Card>
					</div>
				</div>
			</div>

			<section id="feedback" className="space-y-10 border-t border-border pt-16">
					<div className="space-y-3">
						<SectionLabel>Feedback</SectionLabel>
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							What people say
						</h2>
						<p className="max-w-2xl text-sm leading-relaxed text-muted">
							Reviews from colleagues and clients I have worked with, plus feedback
							from readers on my system design and backend writing.
						</p>
					</div>

					{hasFeedback ? (
						<>
							{currentFeedback.length > 0 && (
								<div className="space-y-4">
									<h3 className="font-mono text-xs text-muted">Current teams</h3>
									<div className="grid gap-4 sm:grid-cols-2">
										{currentFeedback.map((testimonial) => (
											<TestimonialCard key={testimonial.id} testimonial={testimonial} />
										))}
									</div>
								</div>
							)}

							{pastFeedback.length > 0 && (
								<div className="space-y-4">
									<h3 className="font-mono text-xs text-muted">Previous teams</h3>
									<div className="grid gap-4 sm:grid-cols-2">
										{pastFeedback.map((testimonial) => (
											<TestimonialCard key={testimonial.id} testimonial={testimonial} />
										))}
									</div>
								</div>
							)}

							{uncategorized.length > 0 && (
								<div className="grid gap-4 sm:grid-cols-2">
									{uncategorized.map((testimonial) => (
										<TestimonialCard key={testimonial.id} testimonial={testimonial} />
									))}
								</div>
							)}

							{communityFeedback.length > 0 && (
								<div className="space-y-4">
									<h3 className="font-mono text-xs text-muted">From readers</h3>
									<div className="grid gap-4 sm:grid-cols-2">
										{communityFeedback.map((testimonial) => (
											<TestimonialCard key={testimonial.id} testimonial={testimonial} />
										))}
									</div>
								</div>
							)}
						</>
					) : (
						<Card>
							<p className="text-sm text-muted">
								Recommendations from colleagues and clients will appear here.
							</p>
						</Card>
					)}
				</section>

			<TechStack />
		</PageContainer>
	);
}
