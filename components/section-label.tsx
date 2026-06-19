import { cn } from '@/lib/utils';

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<span
			className={cn(
				'font-mono text-xs font-medium tracking-wide text-muted',
				className
			)}
		>
			{children}
		</span>
	);
}
