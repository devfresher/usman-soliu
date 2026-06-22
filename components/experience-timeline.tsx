'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ExperienceEntry } from '@/lib/data/experience';

interface ExperienceTimelineProps {
	entries: ExperienceEntry[];
	className?: string;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const inViewOptions = {
	once: true,
	amount: 0.35,
	margin: '0px 0px -8% 0px' as const,
};

function TimelineEntry({
	entry,
	index,
	isLast,
}: {
	entry: ExperienceEntry;
	index: number;
	isLast: boolean;
}) {
	const ref = useRef<HTMLLIElement>(null);
	const inView = useInView(ref, inViewOptions);
	const reduceMotion = useReducedMotion();
	const isMilestone = entry.kind === 'milestone';

	return (
		<motion.li
			ref={ref}
			className="relative flex gap-4 pb-8 last:pb-0"
			initial={reduceMotion ? false : { opacity: 0, x: -12 }}
			animate={reduceMotion || inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
			transition={{
				duration: 0.4,
				ease,
				delay: reduceMotion ? 0 : index * 0.07,
			}}
		>
			{!isLast && (
				<span
					className="absolute left-[4.5rem] top-2 h-full w-px origin-top bg-border sm:left-[5.25rem] motion-safe:animate-timeline-line"
					style={{ animationDelay: `${index * 80}ms` }}
					aria-hidden
				/>
			)}

			<time
				dateTime={entry.date}
				className="w-[4.5rem] shrink-0 pt-0.5 font-mono text-[11px] leading-snug text-muted sm:w-[5.25rem] sm:text-xs"
			>
				{entry.date}
			</time>

			<div className="relative flex min-w-0 flex-1 gap-3">
				{entry.current ? (
					<span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden>
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--accent)_45%,transparent)]" />
					</span>
				) : (
					<span
						className={cn(
							'mt-1.5 h-2 w-2 shrink-0 rounded-full border-2',
							isMilestone
								? 'border-border bg-surface'
								: 'border-accent/50 bg-background',
						)}
						aria-hidden
					/>
				)}

				<div className="min-w-0 space-y-0.5">
					<p className="text-sm font-medium text-foreground">
						{entry.title}
						{entry.current && (
							<span className="ml-2 font-mono text-[10px] font-normal text-accent">
								Current
							</span>
						)}
					</p>
					{entry.organization && (
						<p className="text-sm text-muted">{entry.organization}</p>
					)}
				</div>
			</div>
		</motion.li>
	);
}

export function ExperienceTimeline({ entries, className }: ExperienceTimelineProps) {
	return (
		<ol className={cn('relative space-y-0', className)}>
			{entries.map((entry, index) => (
				<TimelineEntry
					key={entry.id}
					entry={entry}
					index={index}
					isLast={index === entries.length - 1}
				/>
			))}
		</ol>
	);
}
