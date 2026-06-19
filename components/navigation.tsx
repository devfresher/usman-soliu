'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data/site';
import { ThemeToggle } from '@/components/theme-toggle';
import MobileMenu from '@/components/mobile-menu';

function NavLink({
	href,
	label,
	symbol,
	isActive,
}: {
	href: string;
	label: string;
	symbol: string;
	isActive: boolean;
}) {
	return (
		<Link
			href={href}
			className={cn(
				'group flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors sm:px-3',
				isActive
					? 'bg-surface-hover font-medium text-foreground'
					: 'text-muted hover:bg-surface-hover/60 hover:text-foreground'
			)}
		>
			<span
				className={cn(
					'font-mono text-[10px] transition-colors',
					isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-accent/80'
				)}
			>
				{symbol}
			</span>
			<span>{label}</span>
		</Link>
	);
}

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="group flex items-center gap-2 transition-colors hover:text-accent"
				>
					<div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
						<Terminal className="h-3.5 w-3.5" strokeWidth={2} />
					</div>
					<div className="flex items-baseline gap-1 font-mono text-sm">
						<span className="text-muted-foreground">$</span>
						<span className="font-medium text-foreground group-hover:text-accent">
							devfresher
						</span>
						<span className="hidden text-accent sm:inline">_</span>
					</div>
				</Link>

				<div className="hidden items-center gap-0.5 md:flex">
					{navItems.map((item) => {
						const isActive =
							item.href === '/'
								? pathname === '/'
								: pathname.startsWith(item.href);

						return (
							<NavLink
								key={item.href}
								href={item.href}
								label={item.label}
								symbol={item.symbol}
								isActive={isActive}
							/>
						);
					})}
					<ThemeToggle className="ml-1.5" />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<MobileMenu />
				</div>
			</div>
		</nav>
	);
}
