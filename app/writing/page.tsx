'use client';

import { BookOpen, Code, Shield, Zap, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';

const upcomingTopics = [
	{
		icon: <Code className="h-5 w-5" />,
		title: 'The Buka Series',
		description: 'Deep dives into Node.js internals and how the engine works under the hood.',
		category: 'Backend Fundamentals',
	},
	{
		icon: <Zap className="h-5 w-5" />,
		title: 'Caching Strategies',
		description: 'How to design and implement caching layers for high-traffic systems.',
		category: 'Performance',
	},
	{
		icon: <TrendingUp className="h-5 w-5" />,
		title: 'Queue Management',
		description: 'Job processing patterns and queue architectures for scalable systems.',
		category: 'Architecture',
	},
	{
		icon: <Shield className="h-5 w-5" />,
		title: 'Security Best Practices',
		description: 'Essential security patterns and practices for backend systems.',
		category: 'Security',
	},
	{
		icon: <TrendingUp className="h-5 w-5" />,
		title: 'Scalability Patterns',
		description: 'Architectural decisions and patterns that enable systems to scale.',
		category: 'Architecture',
	},
	{
		icon: <Users className="h-5 w-5" />,
		title: 'Engineering Leadership',
		description: 'Thoughts on leading teams, mentorship, and building engineering culture.',
		category: 'Leadership',
	},
];

export default function Writing() {
	return (
		<div className="relative">
			<DecorativeBackground />
			
			<div className="relative mx-auto w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
				<div className="grid gap-16 lg:grid-cols-3 lg:gap-20">
					{/* Left Column - Header & Coming Soon */}
					<div className="lg:col-span-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="sticky top-24 space-y-10"
						>
							<div className="space-y-6">
								<div className="flex items-center gap-3">
									<div className="h-px w-12 bg-foreground/20" />
									<span className="text-sm font-medium uppercase tracking-wider text-muted">
										Writing
									</span>
								</div>
								<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
									Insights & Articles
								</h1>
								<p className="text-base text-muted sm:text-lg">
									Thoughts on backend engineering, system design, and building scalable systems.
								</p>
							</div>

							{/* Animated Dev Element - Prominent */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="relative h-56 w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-background shadow-lg"
							>
								<div className="absolute inset-0 flex items-center justify-center">
									<motion.div
										animate={{ 
											rotate: [0, 360],
											scale: [1, 1.1, 1]
										}}
										transition={{ 
											duration: 20, 
											repeat: Infinity, 
											ease: 'linear' 
										}}
										className="text-6xl text-foreground/20"
									>
										&lt;/&gt;
									</motion.div>
								</div>
								{/* Terminal label */}
								<div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-gray-200/50">
									<Code className="h-3 w-3 text-accent" />
									<span className="font-mono text-[10px] text-foreground">dev.tsx</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<div className="mb-8 flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
										<BookOpen className="h-6 w-6" />
									</div>
									<div>
										<h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
										<p className="text-sm text-muted">Articles in preparation</p>
									</div>
								</div>
								<p className="text-base leading-relaxed text-foreground/80 mt-4">
									I'm preparing articles on backend fundamentals, system design patterns, and
									engineering leadership.
								</p>
							</motion.div>
						</motion.div>
					</div>

					{/* Right Column - Topics Grid */}
					<div className="lg:col-span-2">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="grid gap-8 sm:grid-cols-2"
						>
							{upcomingTopics.map((topic, index) => (
								<motion.div
									key={topic.title}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									whileHover={{ y: -8, scale: 1.02 }}
									className="group rounded-xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-2xl"
								>
									<div className="mb-6 flex items-start justify-between gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
											{topic.icon}
										</div>
										<span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
											{topic.category}
										</span>
									</div>
									<h3 className="mb-4 text-lg font-semibold text-foreground">
										{topic.title}
									</h3>
									<p className="text-sm leading-relaxed text-foreground/70 mt-2">
										{topic.description}
									</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
