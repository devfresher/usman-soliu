import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
	return (
		<div
			className={cn(
				'rounded-lg border border-border bg-surface p-6',
				hover && 'transition-colors hover:border-foreground/15 hover:bg-surface-hover',
				className
			)}
		>
			{children}
		</div>
	);
}
