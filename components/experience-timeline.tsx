import { cn } from '@/lib/utils';
import type { ExperienceEntry } from '@/lib/data/experience';

interface ExperienceTimelineProps {
	entries: ExperienceEntry[];
	className?: string;
}

export function ExperienceTimeline({ entries, className }: ExperienceTimelineProps) {
	return (
		<ol className={cn('relative space-y-0', className)}>
			{entries.map((entry, index) => {
				const isLast = index === entries.length - 1;
				const isMilestone = entry.kind === 'milestone';

				return (
					<li key={entry.id} className="relative flex gap-4 pb-8 last:pb-0">
						{!isLast && (
							<span
								className="absolute left-[4.5rem] top-2 h-full w-px bg-border sm:left-[5.25rem]"
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
							<span
								className={cn(
									'mt-1.5 h-2 w-2 shrink-0 rounded-full border-2',
									entry.current
										? 'border-accent bg-accent'
										: isMilestone
											? 'border-border bg-surface'
											: 'border-accent/50 bg-background',
								)}
								aria-hidden
							/>

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
					</li>
				);
			})}
		</ol>
	);
}
