import Link from 'next/link';
import { cn } from '@/lib/utils';
import { openToWork } from '@/lib/data/site';

type OpenToWorkBadgeProps = {
	className?: string;
	variant?: 'default' | 'compact';
	href?: string;
};

function StatusDot({ size = 'sm' }: { size?: 'sm' | 'xs' }) {
	const dotSize = size === 'xs' ? 'h-1.5 w-1.5' : 'h-2 w-2';

	return (
		<span className={cn('relative flex shrink-0', dotSize)} aria-hidden>
			<span
				className={cn(
					'absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none',
					dotSize,
				)}
			/>
			<span
				className={cn(
					'relative inline-flex rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.45)]',
					dotSize,
				)}
			/>
		</span>
	);
}

export function OpenToWorkBadge({
	className,
	variant = 'default',
	href = '/contact',
}: OpenToWorkBadgeProps) {
	if (!openToWork.active) return null;

	const label = variant === 'compact' ? openToWork.shortLabel : openToWork.label;

	return (
		<Link
			href={href}
			className={cn(
				'group inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 font-mono text-xs text-foreground backdrop-blur-sm transition-colors hover:border-emerald-500/30 hover:bg-surface',
				variant === 'compact' ? 'px-2.5 py-1' : 'px-3 py-1.5',
				className,
			)}
			role="status"
			aria-label={label}
		>
			<StatusDot size={variant === 'compact' ? 'xs' : 'sm'} />
			<span className="text-[11px] tracking-wide sm:text-xs">{label}</span>
		</Link>
	);
}
