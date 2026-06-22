'use client';

import { useEffect, useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';
import { navItems } from '@/lib/data/site';
import { NavMenuPanel } from '@/components/nav-menu-panel';

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return (
		<div className="md:hidden">
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-2.5 text-foreground"
				aria-expanded={isOpen}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
			>
				{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
				<span className="font-mono text-xs text-muted">menu</span>
			</button>

			{isOpen && (
				<>
					<button
						type="button"
						className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
						aria-label="Close menu overlay"
					/>
					<div className="fixed right-0 top-14 z-50 w-[min(100vw-1rem,18rem)] overflow-hidden rounded-bl-lg border-b border-l border-border bg-background shadow-lg">
						<div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
							<Terminal className="h-3.5 w-3.5 text-accent" />
							<span className="font-mono text-xs text-muted">navigation.ts</span>
						</div>
						<NavMenuPanel
							items={navItems}
							onNavigate={() => setIsOpen(false)}
						/>
					</div>
				</>
			)}
		</div>
	);
}
