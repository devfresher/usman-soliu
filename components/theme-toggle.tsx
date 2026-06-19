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

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) {
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
