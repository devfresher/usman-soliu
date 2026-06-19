import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

export function PageContainer({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={cn('mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8', className)}>
			{children}
		</div>
	);
}
