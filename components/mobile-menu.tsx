'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OpenToWorkBadge } from '@/components/open-to-work-badge';
import { navItems } from '@/lib/data/site';

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="md:hidden">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground"
				aria-label="Toggle menu"
			>
				{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
			</button>

			{isOpen && (
				<>
					<button
						type="button"
						className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
						aria-label="Close menu overlay"
					/>
					<div className="fixed right-0 top-14 z-50 w-72 border-b border-l border-border bg-background shadow-lg">
						<div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
							<Terminal className="h-3.5 w-3.5 text-accent" />
							<span className="font-mono text-xs text-muted">navigation.ts</span>
						</div>
						<div className="border-b border-border p-3">
							<OpenToWorkBadge className="w-full justify-center" />
						</div>
						<nav className="flex flex-col gap-0.5 p-2">
							{navItems.map((item) => {
								const isActive =
									item.href === '/'
										? pathname === '/'
										: pathname.startsWith(item.href);

								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={cn(
											'flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition-colors',
											isActive
												? 'bg-surface-hover font-medium text-foreground'
												: 'text-muted hover:bg-surface-hover hover:text-foreground'
										)}
									>
										<span className="font-mono text-[10px] text-accent">{item.symbol}</span>
										{item.label}
									</Link>
								);
							})}
						</nav>
					</div>
				</>
			)}
		</div>
	);
}
