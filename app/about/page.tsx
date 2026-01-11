'use client';

import { Code2, Users, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';
import TechStack from '@/components/tech-stack';
import Image from 'next/image';

const highlights = [
	{
		icon: <Code2 className="h-5 w-5" />,
		title: 'Production Systems',
		description: 'Building scalable systems with Node.js and TypeScript',
	},
	{
		icon: <Users className="h-5 w-5" />,
		title: 'Team Leadership',
		description: 'Balancing engineering with mentoring and team growth',
	},
];

export default function About() {
	return (
		<div className="relative">
			<DecorativeBackground />

			<div className="relative mx-auto w-full px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
				<div className="mx-auto max-w-6xl space-y-12 sm:space-y-16 md:space-y-20">
					<div className="grid gap-12 sm:gap-16 lg:grid-cols-5 lg:gap-20">
						{/* Left Column - Main Content */}
						<div className="lg:col-span-3">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="space-y-12 sm:space-y-16"
							>
								<div className="space-y-4 sm:space-y-6">
									<div className="flex items-center gap-2 sm:gap-3">
										<div className="h-px w-8 bg-foreground/20 sm:w-12" />
										<span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
											About
										</span>
									</div>
									<h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
										Usman Soliu
									</h1>
									<p className="text-base text-muted sm:text-lg md:text-xl">
										Tech Lead & Product Engineer with a focus on building
										systems that matter.
									</p>
								</div>

								<div className="space-y-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
									<motion.p
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.2 }}
										className="mb-4"
									>
										I'm a Tech Lead and Product Engineer. I build production
										systems that scale, mostly with Node.js and TypeScript. I've
										architected and delivered systems that handle real
										complexity and traffic.
									</motion.p>
								</div>

								{/* Tech Lead Section */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className="space-y-4 rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm sm:space-y-6 sm:rounded-2xl sm:p-8 md:p-10"
								>
									<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground sm:h-12 sm:w-12 sm:rounded-xl">
											<Users className="h-5 w-5 sm:h-6 sm:w-6" />
										</div>
										<h2 className="text-lg font-semibold text-foreground sm:text-xl">
											As a Tech Lead
										</h2>
									</div>
									<p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
										I balance hands-on engineering with team leadership. I
										design system architectures, make technical decisions, and
										ensure we're building maintainable, scalable solutions. I
										mentor engineers and create environments where good
										engineering practices thrive.
									</p>
								</motion.div>

								{/* Technical Focus */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className="space-y-4 rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm sm:space-y-6 sm:rounded-2xl sm:p-8 md:p-10"
								>
									<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground sm:h-12 sm:w-12 sm:rounded-xl">
											<Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
										</div>
										<h2 className="text-lg font-semibold text-foreground sm:text-xl">
											Technical Focus
										</h2>
									</div>
									<p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
										My technical focus spans backend fundamentals: APIs,
										databases, caching, queues, security. I work with
										PostgreSQL, MongoDB, Redis, and various cloud services. I
										care about system design, performance, and engineering
										discipline that prevents technical debt.
									</p>
								</motion.div>

								{/* Product Thinking */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									className="space-y-4 rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm sm:space-y-6 sm:rounded-2xl sm:p-8 md:p-10"
								>
									<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground sm:h-12 sm:w-12 sm:rounded-xl">
											<Target className="h-5 w-5 sm:h-6 sm:w-6" />
										</div>
										<h2 className="text-lg font-semibold text-foreground sm:text-xl">
											Product Thinking
										</h2>
									</div>
									<p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
										Beyond code, I'm interested in product thinking and how
										engineering decisions impact users and business outcomes. I
										build systems that solve real problems, not just implement
										the latest trends.
									</p>
								</motion.div>

								{/* Mentorship & Values */}
								<div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.6 }}
										className="space-y-4 rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm sm:space-y-6 sm:rounded-2xl sm:p-8"
									>
										<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
											<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground sm:h-12 sm:w-12 sm:rounded-xl">
												<Users className="h-5 w-5 sm:h-6 sm:w-6" />
											</div>
											<h2 className="text-lg font-semibold text-foreground sm:text-xl">
												Mentorship
											</h2>
										</div>
										<p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
											I mentor backend engineers, particularly around Node.js
											fundamentals, and contribute to programs like the Break
											into Tech bootcamp. I focus on teaching solid
											foundations.
										</p>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.7 }}
										className="space-y-4 rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm sm:space-y-6 sm:rounded-2xl sm:p-8"
									>
										<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
											<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground sm:h-12 sm:w-12 sm:rounded-xl">
												<Heart className="h-5 w-5 sm:h-6 sm:w-6" />
											</div>
											<h2 className="text-lg font-semibold text-foreground sm:text-xl">
												Values
											</h2>
										</div>
										<p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
											My approach to engineering is influenced by faith-driven
											values that emphasize integrity, stewardship, and
											building things that matter.
										</p>
									</motion.div>
								</div>
							</motion.div>
						</div>

						{/* Right Column - Visual Elements & Highlights */}
						<div className="lg:col-span-2">
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="sticky top-20 space-y-6 sm:top-24 sm:space-y-8 md:space-y-10"
							>
								{/* Portrait Image */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className="group relative mb-6 hidden h-64 w-full overflow-hidden rounded-xl border border-gray-200/50 bg-background/50 shadow-lg backdrop-blur-sm sm:mb-8 sm:block sm:h-80 sm:rounded-2xl"
								>
									{/* Code editor split-screen effect */}
									<div className="absolute inset-0 z-10 flex">
										<div className="w-1/2 bg-gradient-to-br from-gray-50/50 to-transparent" />
										<div className="w-1/2 bg-gradient-to-br from-gray-900/10 to-transparent" />
									</div>

									{/* Portrait Image */}
									<div className="relative h-full w-full">
										<Image
											src="/portrait.png"
											alt="Usman Soliu"
											fill
											className="object-cover object-center"
											sizes="(max-width: 1024px) 0vw, 33vw"
										/>

										{/* Subtle overlay */}
										<div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/20" />
									</div>

									{/* Terminal-style label */}
									<div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-background/90 px-3 py-1.5 backdrop-blur-sm border border-gray-200/50">
										<Code2 className="h-3 w-3 text-accent" />
										<span className="font-mono text-xs text-foreground">
											about.tsx
										</span>
									</div>

									{/* Code syntax highlight effect on hover */}
									<motion.div
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										className="absolute inset-0 z-30 flex items-center justify-center bg-foreground/5 backdrop-blur-[2px]"
									>
										<motion.div
											animate={{
												scale: [1, 1.1, 1],
												opacity: [0.3, 0.5, 0.3],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
											className="font-mono text-2xl text-foreground/20"
										>
											{'{}'}
										</motion.div>
									</motion.div>
								</motion.div>

								{/* Highlights Grid */}
								<div className="space-y-4 sm:space-y-6 md:space-y-8">
									{highlights.map((highlight, index) => (
										<motion.div
											key={highlight.title}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
											whileHover={{ x: 8 }}
											className="group rounded-lg border border-gray-200/50 bg-background/50 p-5 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg sm:rounded-xl sm:p-6 md:p-7"
										>
											<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110 sm:mb-5 sm:h-12 sm:w-12">
												{highlight.icon}
											</div>
											<h3 className="mb-3 text-base font-semibold text-foreground sm:mb-4 sm:text-lg">
												{highlight.title}
											</h3>
											<p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
												{highlight.description}
											</p>
										</motion.div>
									))}
								</div>
							</motion.div>
						</div>
					</div>

					{/* Tech Stack Section */}
					<TechStack />
				</div>
			</div>
		</div>
	);
}
