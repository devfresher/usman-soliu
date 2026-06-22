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
				hover &&
					'transition-[transform,colors,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:bg-surface-hover hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]',
				className
			)}
		>
			{children}
		</div>
	);
}
