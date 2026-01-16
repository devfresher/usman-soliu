'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
	{ href: '/', label: 'Home', symbol: '~' },
	{ href: '/about', label: 'How I Work', symbol: '//' },
	{ href: '/projects', label: 'Case Studies', symbol: '{}' },
	{ href: '/writing', label: 'Insights', symbol: '<>' },
	{ href: '/mentorship', label: 'Mentorship', symbol: '()' },
	{ href: '/contact', label: 'Contact', symbol: '[]' },
];

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="md:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200/50 bg-background/50 text-foreground transition-all hover:border-gray-300 hover:bg-gray-100/50 touch-manipulation"
				aria-label="Toggle menu"
			>
				<motion.div
					animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
					transition={{ duration: 0.2 }}
				>
					{isOpen ? <X size={20} /> : <Menu size={20} />}
				</motion.div>
				<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10 blur-sm" />
			</button>

			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 200 }}
							className="fixed right-0 top-0 z-[60] h-screen w-72 shadow-2xl border-l border-gray-200/60"
							style={{ backgroundColor: '#fafafa' }}
						>
							<div className="relative flex h-screen flex-col bg-[#fafafa]">
								{/* Terminal-style header */}
								<div className="flex items-center justify-between border-b border-gray-200/60 bg-[#f5f5f5] p-4">
									<div className="flex items-center gap-2">
										<Terminal className="h-4 w-4 text-accent" />
										<span className="font-mono text-sm font-semibold text-foreground">
											menu.tsx
										</span>
									</div>
									<button
										onClick={() => setIsOpen(false)}
										className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-gray-100 touch-manipulation"
										aria-label="Close menu"
									>
										<X size={18} />
									</button>
								</div>
								<nav className="flex flex-1 flex-col gap-1 p-4 overflow-y-auto bg-[#fafafa]">
									{navItems.map((item, index) => {
										const isActive = pathname === item.href;
										return (
											<Link
												key={item.href}
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={cn(
													'group relative flex items-center gap-2.5 rounded-lg px-4 py-3 text-base font-medium transition-all touch-manipulation',
													isActive
														? 'text-foreground font-semibold bg-gray-100/80 border border-gray-300/50 shadow-sm'
														: 'text-muted hover:bg-gray-100/50 hover:text-foreground hover:border hover:border-gray-200/30'
												)}
											>
												{/* Code editor tab style for active item */}
												{isActive && (
													<>
														{/* Subtle terminal prompt indicator */}
														<motion.div
															initial={{ opacity: 0, x: -4 }}
															animate={{ opacity: 1, x: 0 }}
															className="flex items-center gap-1.5"
														>
															<span className="font-mono text-[11px] text-green-600/70">$</span>
															<span className="font-mono text-xs text-accent/80">
																{item.symbol}
															</span>
														</motion.div>
														<span>{item.label}</span>
														{/* Active indicator - subtle left accent */}
														<motion.div
															layoutId="activeMobileNavIndicator"
															className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500/60 via-blue-500/60 to-green-500/60 rounded-l"
															initial={false}
															transition={{ type: 'spring', stiffness: 380, damping: 30 }}
														/>
														{/* Subtle code editor line numbers effect */}
														<div className="absolute left-1 top-1 bottom-1 w-0.5 bg-gradient-to-b from-green-500/20 via-transparent to-transparent rounded" />
													</>
												)}
												{/* Non-active state */}
												{!isActive && (
													<>
														<span className="font-mono text-xs text-muted/60 group-hover:text-accent/80">
															{item.symbol}
														</span>
														<span>{item.label}</span>
													</>
												)}
											</Link>
										);
									})}
								</nav>
								{/* Terminal footer */}
								<div className="border-t border-gray-200/60 bg-[#f5f5f5] p-3">
									<div className="flex items-center gap-2 font-mono text-xs text-muted">
										<span className="text-accent">$</span>
										<span>navigation ready</span>
									</div>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}


