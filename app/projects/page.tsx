'use client';

import { Code, Database, Shield, Zap, Layers, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DecorativeBackground } from '@/components/decorative-bg';

interface Project {
	name: string;
	description: string;
	problem: string;
	techStack: string[];
	architecture: string[];
	role: string;
	status: 'Live' | 'In Progress';
	icon: React.ReactNode;
	color: string;
	url?: string;
}

const projects: Project[] = [
	{
		name: 'Zaakiyah',
		description: 'AI-driven Zakaat & Sadaqah platform for transparent, efficient charitable giving.',
		problem: 'Traditional charitable giving lacks transparency, efficiency, and intelligent distribution.',
		techStack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'AI/ML'],
		architecture: [
			'Microservices architecture',
			'Event-driven processing',
			'Caching layer optimization',
			'Secure payment integration',
			'AI-powered matching',
		],
		role: 'Tech Lead & Backend Architect',
		status: 'Live',
		icon: <Zap className="h-6 w-6" />,
		color: 'bg-blue-500/10 text-blue-600',
		url: '#',
	},
	{
		name: 'HCMatrix',
		description: 'Comprehensive HR management platform with Time & Attendance and Recruitment modules.',
		problem: 'Organizations need integrated HR solutions for time tracking and recruitment workflows.',
		techStack: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis'],
		architecture: [
			'Modular service architecture',
			'Queue-based job processing',
			'Real-time synchronization',
			'Role-based access control',
			'Audit logging',
		],
		role: 'Backend Engineer & System Designer',
		status: 'Live',
		icon: <Layers className="h-6 w-6" />,
		color: 'bg-purple-500/10 text-purple-600',
		url: '#',
	},
	{
		name: 'Haqqpay',
		description: 'Currency exchange and peer-to-peer deals platform with secure transaction handling.',
		problem: 'Users need a reliable, secure platform for currency exchange and peer transactions.',
		techStack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Payment APIs'],
		architecture: [
			'Transaction processing pipeline',
			'Rate caching system',
			'Secure wallet management',
			'Fraud detection',
			'Webhook handling',
		],
		role: 'Backend Engineer',
		status: 'Live',
		icon: <Globe className="h-6 w-6" />,
		color: 'bg-green-500/10 text-green-600',
		url: '#',
	},
];

export default function Projects() {
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
								Case Studies
							</span>
						</div>
						<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Case Studies
						</h1>
						<p className="text-base text-muted sm:text-lg">
							Real problems, thoughtful solutions, measurable impact.
						</p>
					</div>
				</motion.div>

				<div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
					{projects.map((project, index) => (
						<Link
							key={project.name}
							href={project.url || '#'}
							className="group block"
						>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -6 }}
								className="relative h-full overflow-hidden rounded-xl border border-gray-200/50 bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-xl sm:p-8"
							>
								{/* Terminal-style header */}
								<div className="mb-6 flex items-start justify-between gap-4">
									<div className="flex items-center gap-3">
										<div
											className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${project.color} transition-transform group-hover:scale-110`}
										>
											{project.icon}
										</div>
										<div>
											<div className="flex items-center gap-2 mb-1">
												<span className="font-mono text-[10px] text-green-600/70">$</span>
												<span className="font-mono text-xs text-foreground/60">cd</span>
												<span className="font-mono text-xs text-blue-600/70">{project.name.toLowerCase()}</span>
											</div>
											<h2 className="text-xl font-semibold text-foreground">
												{project.name}
											</h2>
										</div>
									</div>
									<span className="rounded-full bg-foreground/5 px-3 py-1 text-[10px] font-semibold text-foreground shrink-0">
										{project.status}
									</span>
								</div>

								{/* Problem Statement - Most Prominent */}
								<div className="mb-4 rounded-lg border-l-2 border-accent/50 bg-accent/5 p-4">
									<p className="text-xs font-semibold text-foreground/90 mb-2 uppercase tracking-wider">The Problem</p>
									<p className="text-sm leading-relaxed text-foreground/80">
										{project.problem}
									</p>
								</div>

								{/* Solution/Description */}
								<div className="mb-4">
									<p className="text-xs font-semibold text-foreground/90 mb-2 uppercase tracking-wider">The Solution</p>
									<p className="text-sm leading-relaxed text-foreground/70">
										{project.description}
									</p>
								</div>

								{/* Architecture Decisions - Supporting Details */}
								<div className="mb-6">
									<p className="text-xs font-medium text-foreground/80 mb-2">Key Architecture Decisions</p>
									<div className="flex flex-wrap gap-1.5">
										{project.architecture.slice(0, 3).map((arch) => (
											<span
												key={arch}
												className="rounded-md bg-foreground/5 px-2 py-1 text-[10px] font-medium text-foreground/70"
											>
												{arch}
											</span>
										))}
										{project.architecture.length > 3 && (
											<span className="rounded-md bg-foreground/5 px-2 py-1 text-[10px] font-medium text-foreground/70">
												+{project.architecture.length - 3} more
											</span>
										)}
									</div>
								</div>

								{/* Role & Link */}
								<div className="flex items-center justify-between border-t border-gray-200/50 pt-4">
									<p className="text-xs text-muted">
										<span className="font-semibold text-foreground/80">{project.role}</span>
									</p>
									<div className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
										<span>View</span>
										<ExternalLink className="h-3 w-3" />
									</div>
								</div>

								{/* Hover effect - terminal cursor */}
								<div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
									<motion.div
										animate={{ opacity: [1, 0.3, 1] }}
										transition={{ duration: 1.5, repeat: Infinity }}
										className="h-3 w-0.5 bg-green-500"
									/>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
				</div>
			</div>
		</div>
	);
}
