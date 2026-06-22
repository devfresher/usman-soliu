'use client';

import { CaseStudyCard } from '@/components/case-study-card';
import { Card } from '@/components/card';
import { PostCard } from '@/components/post-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { RevealItem, RevealStagger } from '@/components/motion/reveal';
import type { CaseStudy } from '@/lib/data/case-studies';
import type { HashnodePost } from '@/lib/hashnode';
import type { Testimonial } from '@/lib/data/testimonials';
import type { LucideIcon } from 'lucide-react';
import { Search, Layers, ShieldCheck } from 'lucide-react';

const principleIcons: Record<string, LucideIcon> = {
	'Understand first': Search,
	'Design for change': Layers,
	'Own the outcome': ShieldCheck,
};

interface FeaturedStudiesGridProps {
	studies: CaseStudy[];
}

export function FeaturedStudiesGrid({ studies }: FeaturedStudiesGridProps) {
	return (
		<RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{studies.map((study, index) => (
				<RevealItem key={study.slug} index={index}>
					<CaseStudyCard study={study} variant="compact" />
				</RevealItem>
			))}
		</RevealStagger>
	);
}

interface PrinciplesGridProps {
	principles: ReadonlyArray<{ title: string; description: string }>;
}

export function PrinciplesGrid({ principles }: PrinciplesGridProps) {
	return (
		<RevealStagger className="grid gap-4 sm:grid-cols-3">
			{principles.map((principle, index) => {
				const Icon = principleIcons[principle.title];
				return (
					<RevealItem key={principle.title} index={index}>
						<Card className="h-full">
							{Icon && (
								<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-hover text-accent">
									<Icon className="h-4 w-4" strokeWidth={1.75} />
								</div>
							)}
							<h3 className="mb-2 text-base font-semibold text-foreground">
								{principle.title}
							</h3>
							<p className="text-sm leading-relaxed text-muted">{principle.description}</p>
						</Card>
					</RevealItem>
				);
			})}
		</RevealStagger>
	);
}

interface RecentPostsGridProps {
	posts: HashnodePost[];
}

export function RecentPostsGrid({ posts }: RecentPostsGridProps) {
	return (
		<RevealStagger className="grid gap-4 sm:grid-cols-2">
			{posts.map((post, index) => (
				<RevealItem key={post.slug} index={index}>
					<PostCard post={post} />
				</RevealItem>
			))}
		</RevealStagger>
	);
}

interface PrinciplesListProps {
	principles: ReadonlyArray<{ title: string; description: string }>;
}

export function PrinciplesList({ principles }: PrinciplesListProps) {
	return (
		<RevealStagger className="grid gap-4">
			{principles.map((principle, index) => (
				<RevealItem key={principle.title} index={index}>
					<Card className="h-full">
						<h3 className="mb-2 font-medium text-foreground">{principle.title}</h3>
						<p className="text-sm leading-relaxed text-muted">{principle.description}</p>
					</Card>
				</RevealItem>
			))}
		</RevealStagger>
	);
}

interface TestimonialGridProps {
	testimonials: Testimonial[];
	className?: string;
}

export function TestimonialGrid({ testimonials, className }: TestimonialGridProps) {
	return (
		<RevealStagger className={className ?? 'grid gap-4 sm:grid-cols-2'}>
			{testimonials.map((testimonial, index) => (
				<RevealItem key={testimonial.id} index={index}>
					<TestimonialCard testimonial={testimonial} />
				</RevealItem>
			))}
		</RevealStagger>
	);
}
