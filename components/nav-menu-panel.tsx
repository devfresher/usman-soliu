'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/data/site';
import { OpenToWorkBadge } from '@/components/open-to-work-badge';
import { ThemeToggle } from '@/components/theme-toggle';

function isNavActive(pathname: string, href: string) {
	return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

function NavMenuLink({
	item,
	onNavigate,
}: {
	item: NavItem;
	onNavigate?: () => void;
}) {
	const pathname = usePathname();
	const active = isNavActive(pathname, item.href);

	return (
		<Link
			href={item.href}
			onClick={onNavigate}
			className={cn(
				'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
				active
					? 'bg-surface-hover font-medium text-foreground'
					: 'text-muted hover:bg-surface-hover hover:text-foreground'
			)}
		>
			<span className="font-mono text-[10px] text-accent">{item.symbol}</span>
			{item.label}
		</Link>
	);
}

interface NavMenuPanelProps {
	items: NavItem[];
	onNavigate?: () => void;
	showStatus?: boolean;
	showTheme?: boolean;
	className?: string;
}

export function NavMenuPanel({
	items,
	onNavigate,
	showStatus = true,
	showTheme = true,
	className,
}: NavMenuPanelProps) {
	return (
		<div className={cn('flex flex-col gap-1 p-1.5', className)}>
			{items.map((item) => (
				<NavMenuLink key={item.href} item={item} onNavigate={onNavigate} />
			))}
			{(showStatus || showTheme) && (
				<div className="mt-1 space-y-2 border-t border-border pt-2">
					{showStatus && (
						<div className="px-1">
							<OpenToWorkBadge className="w-full justify-center" />
						</div>
					)}
					{showTheme && (
						<div className="flex items-center justify-between gap-3 rounded-md px-3 py-2">
							<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
								Theme
							</span>
							<ThemeToggle variant="compact" />
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export { isNavActive };
