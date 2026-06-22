import Link from 'next/link';
import Image from 'next/image';
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
				<PageContainer className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-20 sm:py-28">
					<div className="mx-auto grid max-w-4xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
						<RevealOnMount className="space-y-8 text-center lg:text-left">
							<div className="flex flex-col items-center gap-3 lg:items-start">
								<SectionLabel>{siteConfig.title}</SectionLabel>
								<OpenToWorkBadge />
							</div>
							<h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
								Usman Soliu
							</h1>
							<p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
								{homeHeroText}
							</p>
							<HomeActions />
						</RevealOnMount>

						<RevealOnMount delay={0.12} className="relative mx-auto hidden lg:block">
							<div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm xl:h-56 xl:w-56">
								<Image
									src="/avatar-illustration.png"
									alt=""
									fill
									className="object-cover"
									sizes="224px"
									aria-hidden
								/>
							</div>
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
