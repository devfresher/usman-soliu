'use client';

import { useState } from 'react';
import {
	Users,
	BookOpen,
	Lightbulb,
	Target,
	ArrowRight,
	Image as ImageIcon,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';

const mentorshipAreas = [
	{
		icon: <BookOpen className="h-5 w-5" />,
		title: 'Computing Fundamentals',
		description: 'Understanding core computing principles, data structures, and algorithms.',
	},
	{
		icon: <Target className="h-5 w-5" />,
		title: 'Programming Principles',
		description:
			'Design patterns, architectural thinking, and software engineering fundamentals.',
	},
	{
		icon: <Lightbulb className="h-5 w-5" />,
		title: 'Best Practices',
		description: 'Code quality, testing, security, and maintainable engineering practices.',
	},
];

const focusAreas = [
	'Fundamentals of computing and programming',
	'System design principles and architectural patterns',
	'Database design, query optimization, and data modeling',
	'Caching strategies and performance optimization',
	'Security best practices and secure coding',
	'Code quality, testing, and maintainability',
];

export default function Mentorship() {
	const [bootcampSlide, setBootcampSlide] = useState(0);
	const [talksSlide, setTalksSlide] = useState(0);

	const bootcampImages = [1, 2];
	const talksImages = [1, 2, 3];

	return (
		<div className="relative">
			<DecorativeBackground />

			<div className="relative mx-auto w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-16 flex items-end justify-between gap-6"
					>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="h-px w-12 bg-foreground/20" />
								<span className="text-sm font-medium uppercase tracking-wider text-muted">
									Mentorship
								</span>
							</div>
							<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
								Community & Growth
							</h1>
							<p className="text-base text-muted sm:text-lg">
								Helping engineers grow through fundamentals-focused mentorship and
								community engagement.
							</p>
						</div>
					</motion.div>

					<div className="grid gap-16 lg:grid-cols-3">
						{/* Left Column - Main Content */}
						<div className="lg:col-span-2 space-y-16">
							{/* Philosophy Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<div className="mb-6 flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
										<Users className="h-6 w-6" />
									</div>
									<h2 className="text-xl font-semibold text-foreground">
										My Approach
									</h2>
								</div>
								<p className="text-base leading-relaxed text-foreground/80">
									I believe in giving back to the engineering community through
									mentorship and knowledge sharing. My approach focuses on
									building solid foundations rather than chasing the latest
									trends. Understanding how things work under the hood, making
									informed architectural decisions, and building systems that are
									maintainable and scalable.
								</p>
							</motion.div>

							{/* Focus Points */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<h3 className="mb-6 text-lg font-semibold text-foreground">
									What I Focus On
								</h3>
								<div className="grid gap-6 sm:grid-cols-2">
									{focusAreas.map((area, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.4,
												delay: 0.3 + index * 0.05,
											}}
											className="flex items-start gap-4"
										>
											<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
											<p className="text-sm leading-relaxed text-foreground/80">
												{area}
											</p>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Bootcamp Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<h3 className="mb-6 text-lg font-semibold text-foreground">
									Break into Tech Bootcamp
								</h3>
								<p className="mb-6 text-base leading-relaxed text-foreground/80">
									I've contributed to the Break into Tech bootcamp, helping
									aspiring engineers transition into tech careers. The focus is on
									practical skills, real-world projects, and understanding
									fundamental concepts that will serve them throughout their
									careers.
								</p>

								<div className="relative">
									<div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200/50 bg-gray-50">
										<AnimatePresence mode="wait">
											<motion.div
												key={bootcampSlide}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.4 }}
												className="absolute inset-0 flex items-center justify-center"
											>
												<div className="flex flex-col items-center gap-2 text-muted">
													<ImageIcon className="h-8 w-8" />
													<span className="text-xs">
														Bootcamp Session {bootcampSlide + 1}
													</span>
												</div>
											</motion.div>
										</AnimatePresence>
										{/* Navigation */}
										{bootcampImages.length > 1 && (
											<>
												<button
													onClick={() =>
														setBootcampSlide(
															(prev) =>
																(prev - 1 + bootcampImages.length) %
																bootcampImages.length
														)
													}
													className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm border border-gray-200/50 hover:bg-background transition-colors"
													aria-label="Previous"
												>
													<ChevronLeft className="h-4 w-4" />
												</button>
												<button
													onClick={() =>
														setBootcampSlide(
															(prev) =>
																(prev + 1) % bootcampImages.length
														)
													}
													className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm border border-gray-200/50 hover:bg-background transition-colors"
													aria-label="Next"
												>
													<ChevronRight className="h-4 w-4" />
												</button>
												{/* Dots indicator */}
												<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
													{bootcampImages.map((_, idx) => (
														<button
															key={idx}
															onClick={() => setBootcampSlide(idx)}
															className={`h-1.5 rounded-full transition-all ${
																bootcampSlide === idx
																	? 'w-6 bg-foreground'
																	: 'w-1.5 bg-foreground/30'
															}`}
															aria-label={`Go to slide ${idx + 1}`}
														/>
													))}
												</div>
											</>
										)}
									</div>
								</div>
							</motion.div>

							{/* Talks Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<h3 className="mb-6 text-lg font-semibold text-foreground">
									Talks & Sessions
								</h3>
								<p className="mb-6 text-base leading-relaxed text-foreground/80">
									Sharing knowledge through talks, workshops, and technical
									sessions on backend engineering, system design, and Node.js
									fundamentals.
								</p>

								<div className="relative">
									<div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200/50 bg-gray-50">
										<AnimatePresence mode="wait">
											<motion.div
												key={talksSlide}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.4 }}
												className="absolute inset-0 flex items-center justify-center"
											>
												<div className="flex flex-col items-center gap-2 text-muted">
													<ImageIcon className="h-8 w-8" />
													<span className="text-xs">
														Talk Session {talksSlide + 1}
													</span>
												</div>
											</motion.div>
										</AnimatePresence>
										{/* Navigation */}
										{talksImages.length > 1 && (
											<>
												<button
													onClick={() =>
														setTalksSlide(
															(prev) =>
																(prev - 1 + talksImages.length) %
																talksImages.length
														)
													}
													className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm border border-gray-200/50 hover:bg-background transition-colors"
													aria-label="Previous"
												>
													<ChevronLeft className="h-4 w-4" />
												</button>
												<button
													onClick={() =>
														setTalksSlide(
															(prev) =>
																(prev + 1) % talksImages.length
														)
													}
													className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 backdrop-blur-sm border border-gray-200/50 hover:bg-background transition-colors"
													aria-label="Next"
												>
													<ChevronRight className="h-4 w-4" />
												</button>
												{/* Dots indicator */}
												<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
													{talksImages.map((_, idx) => (
														<button
															key={idx}
															onClick={() => setTalksSlide(idx)}
															className={`h-1.5 rounded-full transition-all ${
																talksSlide === idx
																	? 'w-6 bg-foreground'
																	: 'w-1.5 bg-foreground/30'
															}`}
															aria-label={`Go to slide ${idx + 1}`}
														/>
													))}
												</div>
											</>
										)}
									</div>
								</div>
							</motion.div>
						</div>

						{/* Right Column - Focus Areas & CTA */}
						<div className="lg:col-span-1">
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="sticky top-24 space-y-8"
							>
								{/* Animated Icon Card - Prominent */}
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className="relative h-48 w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-background shadow-lg"
								>
									<div className="absolute inset-0 flex items-center justify-center">
										<motion.div
											animate={{
												y: [0, -10, 0],
												scale: [1, 1.1, 1],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
											className="text-5xl text-foreground/20"
										>
											👥
										</motion.div>
									</div>
									{/* Terminal label */}
									<div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-gray-200/50">
										<Users className="h-3 w-3 text-accent" />
										<span className="font-mono text-[10px] text-foreground">
											community.tsx
										</span>
									</div>
								</motion.div>

								{/* Focus Areas Grid */}
								{mentorshipAreas.map((area, index) => (
									<motion.div
										key={area.title}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
										whileHover={{ x: 8 }}
										className="m-4 rounded-xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg"
									>
										<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
											{area.icon}
										</div>
										<h3 className="mb-4 text-lg font-semibold text-foreground">
											{area.title}
										</h3>
										<p className="text-sm leading-relaxed text-foreground/70">
											{area.description}
										</p>
									</motion.div>
								))}

								{/* CTA */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 }}
									className="rounded-2xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm"
								>
									<p className="mb-5 text-sm text-foreground/80">
										Interested in mentorship or have questions?
									</p>
									<Link
										href="/contact"
										className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
									>
										Get in touch
										<ArrowRight className="h-4 w-4" />
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
