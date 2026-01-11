'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/button';
import { Download, ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';
import ResumeViewer from '@/components/resume-viewer';
import Image from 'next/image';

const techStack = [
	{ image: '/logos/nodejs.png', name: 'Node.js', color: 'from-green-500' },
	{ image: '/logos/javascript.png', name: 'JavaScript', color: 'from-yellow-500' },
	{ image: '/logos/typescript.png', name: 'TypeScript', color: 'from-blue-500' },
	{ image: '/logos/openai.png', name: 'OpenAI', color: 'from-green-600' },
	{ image: '/logos/langchain.png', name: 'LangChain', color: 'from-red-600' },
	{ image: '/logos/nestjs.png', name: 'NestJS', color: 'from-red-500' },
	{ image: '/logos/expressjs.png', name: 'Express.js', color: 'from-gray-600' },
	{ image: '/logos/golang.png', name: 'Golang', color: 'from-cyan-500' },
	{ image: '/logos/aws.png', name: 'AWS', color: 'from-amber-500' },
	{ image: '/logos/docker.png', name: 'Docker', color: 'from-blue-600' },
	{ image: '/logos/postgresql.png', name: 'PostgreSQL', color: 'from-indigo-500' },
	{ image: '/logos/mysql.png', name: 'MySQL', color: 'from-blue-700' },
	{ image: '/logos/reactjs.png', name: 'React.js', color: 'from-cyan-500' },
	{ image: '/logos/nextjs.png', name: 'Next.js', color: 'from-gray-900' },
	{ image: '/logos/mongodb.png', name: 'MongoDB', color: 'from-emerald-500' },
	{ image: '/logos/redis.png', name: 'Redis', color: 'from-orange-500' },
	{ image: '/logos/rabbitmq.png', name: 'RabbitMQ', color: 'from-orange-600' },
	{ image: '/logos/php.png', name: 'PHP', color: 'from-indigo-600' },
];

function TechStackCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % techStack.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex h-full w-full items-center justify-center">
			{/* Active logo */}
			{techStack.map((tech, index) => {
				const isActive = index === currentIndex;

				if (!isActive) return null;

				return (
					<motion.div
						key={tech.name}
						initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
						animate={{ scale: 1, opacity: 1, rotate: 0 }}
						exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className="absolute flex flex-col items-center gap-4"
					>
						<div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-gray-200/30 bg-background/80 backdrop-blur-sm shadow-lg sm:h-32 sm:w-32 md:h-40 md:w-40 p-4">
							<Image
								src={tech.image}
								alt={tech.name}
								width={80}
								height={80}
								className="h-full w-full object-contain"
								priority={index === 0}
							/>
							{/* Glow effect */}
							<div
								className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color}/10 to-transparent blur-xl`}
							/>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 }}
							className="text-center"
						>
							<p className="font-mono text-sm font-semibold text-foreground sm:text-base">
								{tech.name}
							</p>
							<p className="font-mono text-xs text-muted">
								{currentIndex + 1}/{techStack.length}
							</p>
						</motion.div>
					</motion.div>
				);
			})}

			{/* Terminal prompt indicator */}
			<div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5 backdrop-blur-sm border border-gray-200/50">
				<Code2 className="h-3 w-3 text-accent" />
				<span className="font-mono text-xs text-foreground">tech-stack.ts</span>
			</div>
		</div>
	);
}

export default function Home() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);
	return (
		<div className="relative min-h-[calc(100vh-200px)]">
			<DecorativeBackground />

			<div className="relative mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
				<div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Left Column - Hero Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="flex flex-col justify-center space-y-5 sm:space-y-6"
					>
						<div className="space-y-4 sm:space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="flex items-center gap-2 sm:gap-3"
							>
								<div className="h-px w-8 bg-foreground/20 sm:w-12" />
								<span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
									Tech Lead & Product Engineer
								</span>
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
								className="max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl"
							>
								Building scalable, impact-driven systems with Node.js and
								TypeScript. Focusing on architecture, scalability, and engineering
								practices that deliver real value.
							</motion.p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
							className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
						>
							<Button href="/projects" variant="primary" className="group">
								View My Work
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button onClick={() => setIsResumeOpen(true)} variant="secondary">
								<Download className="mr-2 h-4 w-4" />
								My Resume
							</Button>
						</motion.div>
					</motion.div>

					{/* Right Column - Animated Tech Stack Icons */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="relative mt-8 flex items-center justify-center lg:mt-0"
					>
						{/* Tech Stack Cycling Display */}
						<div className="relative h-64 w-full overflow-hidden rounded-2xl border border-gray-200/30 bg-gradient-to-br from-gray-50 to-background shadow-lg sm:h-80 md:h-96">
							{/* Grid background */}
							<div className="absolute inset-0 opacity-5">
								<div
									className="h-full w-full"
									style={{
										backgroundImage:
											'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
										backgroundSize: '20px 20px',
									}}
								/>
							</div>

							{/* Cycling Tech Icons */}
							<TechStackCarousel />
						</div>
					</motion.div>
				</div>
			</div>

			{/* Resume Viewer Modal */}
			<ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
		</div>
	);
}
