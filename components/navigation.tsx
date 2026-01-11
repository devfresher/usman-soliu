'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from './mobile-menu';

const navItems = [
	{ href: '/', label: 'Home', symbol: '~' },
	{ href: '/about', label: 'About', symbol: '//' },
	{ href: '/projects', label: 'Projects', symbol: '{}' },
	{ href: '/writing', label: 'Writing', symbol: '<>' },
	{ href: '/mentorship', label: 'Mentorship', symbol: '()' },
	{ href: '/contact', label: 'Contact', symbol: '[]' },
];

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-background/95 backdrop-blur-md">
			<div className="mx-auto w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="group flex items-center gap-2.5 text-lg font-semibold text-foreground transition-all hover:text-accent sm:text-xl touch-manipulation"
						>
							<motion.div
								whileHover={{ rotate: [0, -10, 10, -10, 0] }}
								transition={{ duration: 0.5 }}
								className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-foreground to-foreground/80 text-background shadow-sm transition-all group-hover:shadow-md sm:h-8 sm:w-8"
							>
								<Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
								<div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
							</motion.div>
							<div className="flex items-center gap-2">
								<span className="font-mono text-sm text-muted sm:text-base">$</span>
								<span className="font-mono text-sm sm:text-base">devfresher</span>
								<motion.span
									animate={{ opacity: [1, 0.3, 1] }}
									transition={{ duration: 1.5, repeat: Infinity }}
									className="font-mono text-sm text-accent sm:text-base"
								>
									_
								</motion.span>
							</div>
						</Link>
						<div className="hidden items-center gap-1 sm:gap-2 md:flex lg:gap-3">
							{navItems.map((item, index) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											'group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all touch-manipulation',
											isActive
												? 'text-foreground font-semibold bg-gray-100/80 border border-gray-300/50 shadow-sm'
												: 'text-muted hover:bg-gray-100/50 hover:text-foreground'
										)}
									>
										{/* Code editor tab style for active item */}
										{isActive && (
											<>
												{/* Subtle terminal prompt indicator */}
												<motion.div
													initial={{ opacity: 0, x: -4 }}
													animate={{ opacity: 1, x: 0 }}
													className="flex items-center gap-1"
												>
													<span className="font-mono text-[10px] text-green-600/70">$</span>
													<span className="font-mono text-xs text-accent/80">
														{item.symbol}
													</span>
												</motion.div>
												<span>{item.label}</span>
												{/* Active indicator - subtle bottom accent */}
												<motion.div
													layoutId="activeNavIndicator"
													className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/60 via-blue-500/60 to-green-500/60 rounded-b-lg"
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
										{/* Hover glow effect for non-active */}
										{!isActive && (
											<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10 blur-sm" />
										)}
									</Link>
								);
							})}
						</div>
						<MobileMenu />
					</div>
				</div>
			</div>
		</nav>
	);
}
