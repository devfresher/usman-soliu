import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface ButtonProps {
	href?: string;
	children: ReactNode;
	variant?: 'primary' | 'secondary';
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	target?: string;
}

export default function Button({
	href,
	children,
	variant = 'primary',
	className,
	onClick,
	type = 'button',
	disabled = false,
	target,
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-6 sm:text-base touch-manipulation';

	const variants = {
		primary:
			'bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground shadow-sm',
		secondary:
			'border border-gray-300/80 bg-transparent text-foreground hover:border-gray-400 hover:bg-gray-50/50 focus:ring-gray-300',
	};

	if (href) {
		return (
			<Link
				href={href}
				target={target}
				rel={target === '_blank' ? 'noopener noreferrer' : undefined}
				className={cn(baseStyles, variants[variant], className)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={cn(
				baseStyles,
				variants[variant],
				disabled && 'opacity-50 cursor-not-allowed',
				className
			)}
		>
			{children}
		</button>
	);
}
