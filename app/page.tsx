'use client';

import { useState } from 'react';
import Button from '@/components/button';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';
import ResumeViewer from '@/components/resume-viewer';

export default function Home() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);
	return (
		<div className="relative flex min-h-[calc(100vh-4rem)] flex-col">
			<DecorativeBackground />

			<div className="relative mx-auto flex w-full flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
				<div className="mx-auto w-full max-w-4xl">
					{/* Hero Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="flex flex-col justify-center space-y-5 sm:space-y-6 text-center"
					>
						<div className="space-y-4 sm:space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="flex items-center justify-center gap-2 sm:gap-3"
							>
								<div className="h-px w-8 bg-foreground/20 sm:w-12" />
								<span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
									Tech Lead & Product Engineer
								</span>
								<div className="h-px w-8 bg-foreground/20 sm:w-12" />
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.3 }}
								className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
							>
								Usman
								<br />
								<span className="text-muted">Soliu</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.4 }}
								className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl"
							>
								I design and scale backend systems that help businesses grow
								reliably. I take ownership of complex problems, make thoughtful
								architectural decisions, and deliver solutions that create
								measurable business impact.
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
							className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
						>
							<Button href="/projects" variant="primary" className="group">
								View Case Studies
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button onClick={() => setIsResumeOpen(true)} variant="secondary">
								<Download className="mr-2 h-4 w-4" />
								My Resume
							</Button>
						</motion.div>
					</motion.div>
				</div>

				{/* Problems I Help Solve Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.6 }}
					className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
				>
					<div className="space-y-8 sm:space-y-12">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="h-px w-12 bg-foreground/20" />
								<span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
									Problems I Help Solve
								</span>
							</div>
							<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
								How I Create Impact
							</h2>
							<p className="max-w-2xl text-base text-muted sm:text-lg">
								I work with teams to solve engineering and business challenges that
								matter.
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
							{[
								{
									title: 'Scaling Backend Systems',
									description:
										'Designing systems that grow without constant firefighting or performance degradation.',
								},
								{
									title: 'Reducing System Complexity',
									description:
										'Simplifying architecture in growing products to improve maintainability and velocity.',
								},
								{
									title: 'Reliable Transaction Systems',
									description:
										'Building secure, fault-tolerant systems for payments, payouts, and financial operations.',
								},
								{
									title: 'API Design for Speed',
									description:
										'Creating APIs that enable fast product iteration without breaking changes.',
								},
								{
									title: 'Legacy System Modernization',
									description:
										'Improving maintainability and performance of existing systems without disruption.',
								},
								{
									title: 'Engineering Team Growth',
									description:
										'Building engineering practices and culture that enable teams to deliver consistently.',
								},
							].map((problem, index) => (
								<motion.div
									key={problem.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
									className="rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg sm:p-8"
								>
									<h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
										{problem.title}
									</h3>
									<p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
										{problem.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Resume Viewer Modal */}
			<ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
		</div>
	);
}
