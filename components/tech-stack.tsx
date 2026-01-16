'use client';

import {
	Code2,
	Database,
	Zap,
	Shield,
	Cloud,
	GitBranch,
	Layers,
	Box,
	Server,
	Network,
	FileCode,
	Brain,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface TechItem {
	name: string;
	icon: React.ReactNode;
	category: 'language' | 'framework' | 'database' | 'tool' | 'service';
	color: string;
}

const techStack: TechItem[] = [
	{
		name: 'Node.js',
		icon: <Code2 className="h-6 w-6" />,
		category: 'language',
		color: 'bg-green-500/10 text-green-600 border-green-500/20',
	},
	{
		name: 'TypeScript',
		icon: <FileCode className="h-6 w-6" />,
		category: 'language',
		color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
	},
	{
		name: 'NestJS',
		icon: <Layers className="h-6 w-6" />,
		category: 'framework',
		color: 'bg-red-500/10 text-red-600 border-red-500/20',
	},
	{
		name: 'Express.js',
		icon: <GitBranch className="h-6 w-6" />,
		category: 'framework',
		color: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
	},
	{
		name: 'PostgreSQL',
		icon: <Database className="h-6 w-6" />,
		category: 'database',
		color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
	},
	{
		name: 'MongoDB',
		icon: <Box className="h-6 w-6" />,
		category: 'database',
		color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
	},
	{
		name: 'Redis',
		icon: <Zap className="h-6 w-6" />,
		category: 'database',
		color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
	},
	{
		name: 'System Design',
		icon: <Network className="h-6 w-6" />,
		category: 'tool',
		color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
	},
	{
		name: 'Cloud Services',
		icon: <Cloud className="h-6 w-6" />,
		category: 'service',
		color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
	},
	{
		name: 'AI/ML',
		icon: <Brain className="h-6 w-6" />,
		category: 'service',
		color: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
	},
	{
		name: 'Security',
		icon: <Shield className="h-6 w-6" />,
		category: 'tool',
		color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
	},
	{
		name: 'DevOps',
		icon: <Server className="h-6 w-6" />,
		category: 'tool',
		color: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.8 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 12,
		},
	},
};

export default function TechStack() {
	return (
		<section className="relative py-12 sm:py-16 md:py-20">
			<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 text-center sm:mb-12"
				>
					<div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
						<div className="h-px w-8 bg-foreground/20 sm:w-12" />
						<span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
							Engineering Toolkit
						</span>
						<div className="h-px w-8 bg-foreground/20 sm:w-12" />
					</div>
					<h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl">
						Tools I Use to Deliver
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-muted sm:text-base md:text-lg">
						Technologies are tools. I choose the right tool for the problem at hand.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6"
				>
					{techStack.map((tech, index) => (
						<motion.div
							key={tech.name}
							variants={itemVariants}
							whileHover={{
								y: -4,
								scale: 1.02,
								transition: { type: 'spring', stiffness: 300, damping: 20 },
							}}
							className="group relative"
						>
							<div
								className={`relative flex flex-col items-center gap-2 rounded-xl border ${tech.color} bg-background/60 p-4 backdrop-blur-sm transition-all duration-200 group-hover:shadow-lg group-hover:border-opacity-60 sm:gap-3 sm:rounded-2xl sm:p-5 md:gap-4 md:p-6 touch-manipulation`}
							>
								{/* Static icon - no animations */}
								<div className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 md:h-14 md:w-14">
									<div className="relative z-10">{tech.icon}</div>
								</div>

								{/* Tech name */}
								<span className="text-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
									{tech.name}
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Decorative elements */}
				<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl" />
					<div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-400/5 blur-3xl" />
				</div>
			</div>
		</div>
		</section>
	);
}

