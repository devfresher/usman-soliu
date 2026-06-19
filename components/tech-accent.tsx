'use client';

import { Database, Server, Terminal, GitBranch } from 'lucide-react';

const icons = [
	{ Icon: Terminal, className: 'left-[8%] top-[18%]' },
	{ Icon: Server, className: 'right-[10%] top-[22%]' },
	{ Icon: Database, className: 'left-[14%] bottom-[24%]' },
	{ Icon: GitBranch, className: 'right-[12%] bottom-[20%]' },
];

export function TechAccent() {
	return (
		<div
			className="pointer-events-none absolute inset-0 overflow-hidden"
			aria-hidden="true"
		>
			{/* Subtle grid */}
			<div
				className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
				style={{
					backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
					backgroundSize: '64px 64px',
					maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)',
				}}
			/>

			{/* Faint accent glow */}
			<div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />

			{/* Mono icons — quiet backend cues */}
			{icons.map(({ Icon, className }) => (
				<div
					key={className}
					className={`absolute ${className} text-foreground/[0.04] dark:text-foreground/[0.06]`}
				>
					<Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.25} />
				</div>
			))}
		</div>
	);
}
