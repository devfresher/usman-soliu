import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/section-label';
import { TestimonialCard } from '@/components/testimonial-card';
import type { Testimonial } from '@/lib/data/testimonials';

interface TestimonialsSectionProps {
	testimonials: Testimonial[];
	title?: string;
	description?: string;
	showViewAll?: boolean;
	className?: string;
}

export function TestimonialsSection({
	testimonials,
	title = 'What people say',
	description = 'Feedback from colleagues, clients, and readers of my technical writing.',
	showViewAll = false,
	className,
}: TestimonialsSectionProps) {
	if (testimonials.length === 0) return null;

	return (
		<section className={className}>
			<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div className="space-y-3">
					<SectionLabel>Feedback</SectionLabel>
					<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
						{title}
					</h2>
					{description && (
						<p className="max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
					)}
				</div>
				{showViewAll && (
					<Link
						href="/about#feedback"
						className="inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
					>
						View all
						<ArrowRight className="h-4 w-4" />
					</Link>
				)}
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
		</section>
	);
}
