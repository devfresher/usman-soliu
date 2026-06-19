import { SectionLabel } from '@/components/section-label';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
	label: string;
	title: string;
	description?: string;
	className?: string;
	align?: 'left' | 'center';
}

export function PageHeader({
	label,
	title,
	description,
	className,
	align = 'left',
}: PageHeaderProps) {
	return (
		<div
			className={cn(
				'space-y-4',
				align === 'center' && 'text-center',
				className
			)}
		>
			<SectionLabel>{label}</SectionLabel>
			<h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
				{title}
			</h1>
			{description && (
				<p
					className={cn(
						'max-w-2xl text-base text-muted sm:text-lg',
						align === 'center' && 'mx-auto'
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
