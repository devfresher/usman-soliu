'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { secondaryNavItems } from '@/lib/data/site';
import { OpenToWorkBadge } from '@/components/open-to-work-badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { isNavActive } from '@/components/nav-menu-panel';

export function NavMoreDropdown() {
	const [open, setOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const moreActive = secondaryNavItems.some((item) => isNavActive(pathname, item.href));

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!open) return;

		function onPointerDown(event: MouseEvent) {
			if (!panelRef.current?.contains(event.target as Node)) {
				setOpen(false);
			}
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') setOpen(false);
		}

		document.addEventListener('mousedown', onPointerDown);
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('mousedown', onPointerDown);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [open]);

	return (
		<div ref={panelRef} className="relative">
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				aria-expanded={open}
				aria-haspopup="menu"
				className={cn(
					'group inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm transition-colors',
					open || moreActive
						? 'border-accent/35 bg-accent-muted text-foreground'
						: 'border-border bg-surface text-muted hover:border-foreground/15 hover:bg-surface-hover hover:text-foreground'
				)}
			>
				<span className="font-mono text-[10px] text-accent">...</span>
				<span>More</span>
				<ChevronDown
					className={cn(
						'h-3.5 w-3.5 transition-transform',
						open && 'rotate-180'
					)}
					aria-hidden
				/>
			</button>

			{open && (
				<div
					role="menu"
					className="absolute right-0 top-[calc(100%+0.375rem)] z-50 w-56 overflow-hidden rounded-lg border border-border bg-background shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]"
				>
					<div className="border-b border-border px-3 py-2">
						<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
							// menu
						</span>
					</div>

					<div className="p-1.5">
						{secondaryNavItems.map((item) => {
							const active = isNavActive(pathname, item.href);
							return (
								<Link
									key={item.href}
									href={item.href}
									role="menuitem"
									onClick={() => setOpen(false)}
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
						})}
					</div>

					<div className="space-y-2 border-t border-border p-2">
						<OpenToWorkBadge variant="compact" className="w-full justify-center" />
						<div className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5">
							<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
								Theme
							</span>
							<ThemeToggle variant="compact" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
