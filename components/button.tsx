import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface ButtonProps {
	href?: string;
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'ghost';
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
		'inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		primary: 'bg-foreground text-background hover:bg-foreground/90',
		secondary:
			'border border-border bg-surface text-foreground hover:bg-surface-hover',
		ghost: 'text-muted hover:bg-surface-hover hover:text-foreground',
	};

	const styles = cn(baseStyles, variants[variant], className);

	if (href) {
		return (
			<Link
				href={href}
				target={target}
				rel={target === '_blank' ? 'noopener noreferrer' : undefined}
				className={styles}
			>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} onClick={onClick} disabled={disabled} className={styles}>
			{children}
		</button>
	);
}
