'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Database, Server, Terminal, GitBranch } from 'lucide-react';

const icons = [
	{ Icon: Terminal, className: 'left-[6%] top-[16%]', delay: 0 },
	{ Icon: Server, className: 'right-[7%] top-[20%]', delay: 0.4 },
	{ Icon: Database, className: 'left-[10%] bottom-[22%]', delay: 0.8 },
	{ Icon: GitBranch, className: 'right-[9%] bottom-[18%]', delay: 1.2 },
];

export function TechAccent() {
	const reduceMotion = useReducedMotion();

	return (
		<div
			className="pointer-events-none absolute inset-0 overflow-hidden"
			aria-hidden="true"
		>
			{/* Soft dual atmosphere */}
			<div className="absolute left-1/2 top-[28%] size-112 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/7 blur-3xl dark:bg-accent/12" />
			<div className="absolute left-[18%] top-[62%] size-56 -translate-y-1/2 rounded-full bg-foreground/3 blur-3xl dark:bg-foreground/5" />
			<div className="absolute right-[14%] top-[58%] size-48 -translate-y-1/2 rounded-full bg-accent/4 blur-3xl dark:bg-accent/8" />

			{/* Perspective grid */}
			<div
				className="absolute inset-0 opacity-40 dark:opacity-[0.18]"
				style={{
					backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
					backgroundSize: '72px 72px',
					maskImage:
						'radial-gradient(ellipse 75% 65% at 50% 42%, black 15%, transparent 72%)',
				}}
			/>

			{/* Horizon line */}
			<div className="absolute left-1/2 top-[42%] h-px w-[min(72%,42rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-border to-transparent" />

			{/* Mono icons: quiet backend cues */}
			{icons.map(({ Icon, className, delay }) => (
				<motion.div
					key={className}
					className={`absolute ${className} text-foreground/6 dark:text-foreground/8`}
					initial={reduceMotion ? false : { opacity: 0, y: 8 }}
					animate={
						reduceMotion
							? { opacity: 1, y: 0 }
							: {
									opacity: [0.55, 1, 0.55],
									y: [0, -6, 0],
								}
					}
					transition={
						reduceMotion
							? { duration: 0 }
							: {
									opacity: {
										duration: 5,
										repeat: Infinity,
										ease: 'easeInOut',
										delay,
									},
									y: {
										duration: 5,
										repeat: Infinity,
										ease: 'easeInOut',
										delay,
									},
								}
					}
				>
					<Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.25} />
				</motion.div>
			))}
		</div>
	);
}
