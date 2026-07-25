import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Button from '@/components/button';
import { PageContainer } from '@/components/page-container';
import { SectionLabel } from '@/components/section-label';
import { Card } from '@/components/card';
import {
	FeaturedStudiesGrid,
	PrinciplesGrid,
	RecentPostsGrid,
} from '@/components/home-animated-sections';
import { Reveal, RevealOnMount } from '@/components/motion/reveal';
import { TechAccent } from '@/components/tech-accent';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { getHashnodePosts } from '@/lib/hashnode';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';
import { homeOpenToText, homeHeroText, principles, siteConfig, testimonialsIntro } from '@/lib/data/site';
import { OpenToWorkBadge } from '@/components/open-to-work-badge';
import HomeActions from '@/components/home-actions';
import { TestimonialsSection } from '@/components/testimonials-section';

export default async function Home() {
	const [featuredStudies, posts] = await Promise.all([
		getFeaturedCaseStudies(),
		getHashnodePosts(2),
	]);
	const featuredTestimonials = getFeaturedTestimonials(3);

	return (
		<>
			<div className="relative">
				<TechAccent />
				<PageContainer className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-24 sm:py-32">
					<div className="mx-auto flex max-w-3xl flex-col items-center text-center">
						<RevealOnMount className="flex flex-col items-center gap-3">
							<SectionLabel>{siteConfig.title}</SectionLabel>
							<OpenToWorkBadge />
						</RevealOnMount>

						<RevealOnMount delay={0.08} className="mt-8 space-y-5 sm:mt-10">
							<h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
								Usman Soliu
							</h1>
							<div
								className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-accent/70 to-transparent"
								aria-hidden
							/>
						</RevealOnMount>

						<RevealOnMount delay={0.16} className="mt-6 sm:mt-8">
							<p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg md:text-xl">
								{homeHeroText}
							</p>
						</RevealOnMount>

						<RevealOnMount delay={0.24} className="mt-10 sm:mt-12">
							<HomeActions />
						</RevealOnMount>
					</div>
				</PageContainer>
			</div>

			<PageContainer className="space-y-10 border-t border-border py-16">
				<div className="flex items-end justify-between gap-4">
					<div className="space-y-3">
						<SectionLabel>Selected work</SectionLabel>
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							Case studies
						</h2>
					</div>
					<Link
						href="/projects"
						className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:flex"
					>
						View all
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
				<FeaturedStudiesGrid studies={featuredStudies} />
				<Link
					href="/projects"
					className="flex items-center justify-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:hidden"
				>
					View all case studies
					<ArrowRight className="h-4 w-4" />
				</Link>
			</PageContainer>

			<PageContainer className="space-y-10 border-t border-border py-16">
				<div className="space-y-3">
					<SectionLabel>How I work</SectionLabel>
					<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
						Three principles
					</h2>
				</div>
				<PrinciplesGrid principles={principles} />
				<div>
					<Button href="/about" variant="secondary">
						How I work
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</PageContainer>

			{featuredTestimonials.length > 0 && (
				<PageContainer className="border-t border-border py-16">
					<TestimonialsSection
						testimonials={featuredTestimonials}
						title="What people say"
						description={testimonialsIntro}
						showViewAll
					/>
				</PageContainer>
			)}

			{posts.length > 0 && (
				<PageContainer className="space-y-10 border-t border-border py-16">
					<div className="flex items-end justify-between gap-4">
						<div className="space-y-3">
							<SectionLabel>Insights</SectionLabel>
							<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
								Recent writing
							</h2>
						</div>
						<Link
							href="/writing"
							className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:flex"
						>
							View all
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
					<RecentPostsGrid posts={posts} />
				</PageContainer>
			)}

			<PageContainer className="border-t border-border py-16">
				<Reveal>
					<Card className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
					<div className="space-y-2">
						<div className="flex flex-wrap items-center gap-3">
							<p className="font-mono text-xs text-muted">Open to conversation</p>
							<OpenToWorkBadge variant="compact" />
						</div>
						<p className="text-base text-foreground">{homeOpenToText}</p>
					</div>
					<Button href="/contact">
						Get in touch
						<ArrowUpRight className="ml-2 h-4 w-4" />
					</Button>
					</Card>
				</Reveal>
			</PageContainer>
		</>
	);
}
