import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Search, Layers, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '@/components/button';
import { PageContainer } from '@/components/page-container';
import { SectionLabel } from '@/components/section-label';
import { CaseStudyCard } from '@/components/case-study-card';
import { PostCard } from '@/components/post-card';
import { Card } from '@/components/card';
import { TechAccent } from '@/components/tech-accent';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { getHashnodePosts } from '@/lib/hashnode';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';
import { principles, siteConfig } from '@/lib/data/site';
import HomeActions from '@/components/home-actions';
import { TestimonialsSection } from '@/components/testimonials-section';

const principleIcons: Record<string, LucideIcon> = {
	'Understand first': Search,
	'Design for change': Layers,
	'Own the outcome': ShieldCheck,
};

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
						<div className="space-y-8 text-center lg:text-left">
							<SectionLabel>{siteConfig.title}</SectionLabel>
							<h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
								Usman Soliu
							</h1>
							<p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
								I build backend systems for products that need to scale without falling
								apart — APIs, data pipelines, and the infrastructure behind payments,
								HR, and mobility platforms.
							</p>
							<HomeActions />
						</div>

						{/* Tech illustration — hidden on small screens */}
						<div className="relative mx-auto hidden h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:block xl:h-56 xl:w-56">
							<Image
								src="/avatar-illustration.png"
								alt=""
								fill
								className="object-cover"
								sizes="224px"
								aria-hidden
							/>
						</div>
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
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featuredStudies.map((study) => (
						<CaseStudyCard key={study.slug} study={study} variant="compact" />
					))}
				</div>
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
				<div className="grid gap-4 sm:grid-cols-3">
					{principles.map((principle) => {
						const Icon = principleIcons[principle.title];
						return (
							<Card key={principle.title}>
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
						);
					})}
				</div>
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
						description="Feedback from people I have worked with."
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
					<div className="grid gap-4 sm:grid-cols-2">
						{posts.map((post) => (
							<PostCard key={post.slug} post={post} />
						))}
					</div>
				</PageContainer>
			)}

			<PageContainer className="border-t border-border py-16">
				<Card className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
					<div className="space-y-2">
						<p className="font-mono text-xs text-muted">Open to conversation</p>
						<p className="text-base text-foreground">
							Senior backend roles, technical leadership, and engineering management.
						</p>
					</div>
					<Button href="/contact">
						Get in touch
						<ArrowUpRight className="ml-2 h-4 w-4" />
					</Button>
				</Card>
			</PageContainer>
		</>
	);
}
