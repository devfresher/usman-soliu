import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/card';
import {
	relationshipLabels,
	type Testimonial,
} from '@/lib/data/testimonials';

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	const attribution = `${testimonial.name} · ${testimonial.title} at ${testimonial.company}`;

	return (
		<Card className="flex h-full flex-col">
			<blockquote className="mb-6 flex-1 border-l-2 border-accent/40 pl-4">
				<p className="text-sm leading-relaxed text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
			</blockquote>

			<div className="space-y-3">
				<div className="flex flex-wrap items-center gap-2">
					<span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
						{relationshipLabels[testimonial.relationship]}
					</span>
					{testimonial.context && (
						<span className="font-mono text-[11px] text-muted capitalize">
							{testimonial.context}
						</span>
					)}
				</div>

				{testimonial.linkedIn ? (
					<a
						href={testimonial.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
					>
						<cite className="not-italic">{attribution}</cite>
						<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
					</a>
				) : (
					<cite className="block text-sm not-italic text-muted">{attribution}</cite>
				)}
			</div>
		</Card>
	);
}
