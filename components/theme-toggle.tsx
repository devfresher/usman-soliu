'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

function useMounted() {
	return useSyncExternalStore(
		() => () => {},
		() => true,
		() => false
	);
}

export function ThemeToggle({
	className,
	variant = 'icon',
}: {
	className?: string;
	variant?: 'icon' | 'compact';
}) {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) {
		if (variant === 'compact') {
			return (
				<div className={cn('flex gap-1', className)}>
					{(['system', 'light', 'dark'] as const).map((mode) => (
						<div
							key={mode}
							className="h-7 w-7 rounded-md border border-border bg-surface"
						/>
					))}
				</div>
			);
		}

		return (
			<button
				type="button"
				className={cn(
					'inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted',
					className
				)}
				aria-label="Toggle theme"
			/>
		);
	}

	if (variant === 'compact') {
		const modes = [
			{ id: 'system' as const, label: 'System', Icon: Monitor },
			{ id: 'light' as const, label: 'Light', Icon: Sun },
			{ id: 'dark' as const, label: 'Dark', Icon: Moon },
		];

		return (
			<div className={cn('inline-flex items-center gap-0.5 rounded-md border border-border bg-surface p-0.5', className)}>
				{modes.map(({ id, label, Icon }) => (
					<button
						key={id}
						type="button"
						onClick={() => setTheme(id)}
						className={cn(
							'inline-flex h-7 w-7 items-center justify-center rounded-[4px] transition-colors',
							theme === id
								? 'bg-surface-hover text-foreground'
								: 'text-muted hover:text-foreground'
						)}
						aria-label={`${label} theme`}
						title={`${label} theme`}
					>
						<Icon className="h-3.5 w-3.5" />
					</button>
				))}
			</div>
		);
	}

	const cycleTheme = () => {
		if (theme === 'system') setTheme('light');
		else if (theme === 'light') setTheme('dark');
		else setTheme('system');
	};

	const Icon =
		theme === 'system' ? Monitor : resolvedTheme === 'dark' ? Sun : Moon;

	const label =
		theme === 'system'
			? 'System theme (click for light)'
			: theme === 'light'
				? 'Light mode (click for dark)'
				: 'Dark mode (click for system)';

	return (
		<button
			type="button"
			onClick={cycleTheme}
			className={cn(
				'inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground',
				className
			)}
			aria-label={label}
			title={label}
		>
			<Icon className="h-4 w-4" />
		</button>
	);
}
