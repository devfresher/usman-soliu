'use client';

import { useCallback, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { CaseStudyCard } from '@/components/case-study-card';
import type { CaseStudy } from '@/lib/data/case-studies';
import {
	countForSectorFilter,
	countForStatusFilter,
	defaultCaseStudyFilters,
	filterCaseStudies,
	filtersFromSearchParams,
	filtersToSearchParams,
	isDefaultFilters,
	sectorFilterOptions,
	statusFilterOptions,
	type CaseStudyFilters,
	type CaseStudySector,
	type CaseStudyStatusFilter,
} from '@/lib/case-study-filters';
import { cn } from '@/lib/utils';

interface CaseStudiesExplorerProps {
	studies: CaseStudy[];
}

interface FilterPillProps {
	label: string;
	count?: number;
	active?: boolean;
	onClick: () => void;
	icon?: React.ReactNode;
	className?: string;
}

function FilterPill({
	label,
	count,
	active = false,
	onClick,
	icon,
	className,
}: FilterPillProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={active}
			className={cn(
				'inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-[11px] transition-colors',
				active
					? 'border-accent/35 bg-accent-muted text-accent'
					: 'border-border bg-background text-muted hover:border-foreground/15 hover:bg-surface-hover hover:text-foreground',
				className
			)}
		>
			{icon}
			<span>{label}</span>
			{count !== undefined && (
				<span
					className={cn(
						'tabular-nums',
						active ? 'text-accent/75' : 'text-muted-foreground'
					)}
				>
					{count}
				</span>
			)}
		</button>
	);
}

function useSyncedFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const filters = useMemo(
		() => filtersFromSearchParams(searchParams),
		[searchParams]
	);

	const setFilters = useCallback(
		(next: CaseStudyFilters | ((prev: CaseStudyFilters) => CaseStudyFilters)) => {
			const resolved =
				typeof next === 'function' ? next(filtersFromSearchParams(searchParams)) : next;
			const query = filtersToSearchParams(resolved);
			router.replace(`${pathname}${query}`, { scroll: false });
		},
		[pathname, router, searchParams]
	);

	return { filters, setFilters };
}

export function CaseStudiesExplorer({ studies }: CaseStudiesExplorerProps) {
	const { filters, setFilters } = useSyncedFilters();
	const reduceMotion = useReducedMotion();
	const [sectorExpanded, setSectorExpanded] = useState(false);

	const filtered = useMemo(
		() => filterCaseStudies(studies, filters),
		[studies, filters]
	);

	const hasActiveFilters = !isDefaultFilters(filters);

	const setStatus = (status: CaseStudyStatusFilter) => {
		setFilters((prev) => ({ ...prev, status }));
	};

	const toggleFeatured = () => {
		setFilters((prev) => ({ ...prev, featuredOnly: !prev.featuredOnly }));
	};

	const setSector = (sector: CaseStudySector | 'all') => {
		setFilters((prev) => ({ ...prev, sector }));
	};

	const clearFilters = () => {
		setFilters(defaultCaseStudyFilters);
		setSectorExpanded(false);
	};

	const motionProps = reduceMotion
		? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
		: {
				initial: { opacity: 0, y: 6 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: -4 },
				transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
			};

	const visibleSectors = sectorExpanded
		? sectorFilterOptions
		: sectorFilterOptions.slice(0, 4);

	return (
		<div className="space-y-8">
			<div className="rounded-lg border border-border bg-surface">
				<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
					<span className="font-mono text-xs text-muted">// filter</span>
					<span className="font-mono text-xs tabular-nums text-muted">
						{filtered.length} of {studies.length}
					</span>
				</div>

				<div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
					<div className="space-y-2">
						<p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
							Status
						</p>
						<div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
							{statusFilterOptions.map((option) => (
								<FilterPill
									key={option.id}
									label={option.label}
									count={countForStatusFilter(studies, option.id, filters)}
									active={filters.status === option.id}
									onClick={() => setStatus(option.id)}
								/>
							))}
							<FilterPill
								label="Featured"
								count={countForStatusFilter(studies, filters.status, {
									...filters,
									featuredOnly: true,
								})}
								active={filters.featuredOnly}
								onClick={toggleFeatured}
								icon={
									<Sparkles
										className={cn(
											'h-3 w-3',
											filters.featuredOnly ? 'text-accent' : 'text-muted-foreground'
										)}
										aria-hidden
									/>
								}
							/>
						</div>
					</div>

					<div className="h-px bg-border" />

					<div className="space-y-2">
						<p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
							Industry
						</p>
						<div className="flex flex-wrap gap-2">
							<FilterPill
								label="All industries"
								count={countForSectorFilter(studies, 'all', filters)}
								active={filters.sector === 'all'}
								onClick={() => setSector('all')}
							/>
							{visibleSectors.map((option) => (
								<FilterPill
									key={option.id}
									label={option.label}
									count={countForSectorFilter(studies, option.id, filters)}
									active={filters.sector === option.id}
									onClick={() => setSector(option.id)}
								/>
							))}
							{sectorFilterOptions.length > 4 && (
								<button
									type="button"
									onClick={() => setSectorExpanded((open) => !open)}
									className="inline-flex items-center rounded-md border border-dashed border-border px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-foreground/15 hover:text-foreground"
								>
									{sectorExpanded ? 'Show less' : `+${sectorFilterOptions.length - 4} more`}
								</button>
							)}
						</div>
					</div>

					{hasActiveFilters && (
						<div className="flex justify-end border-t border-border pt-3">
							<button
								type="button"
								onClick={clearFilters}
								className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-foreground"
							>
								<X className="h-3 w-3" aria-hidden />
								Clear filters
							</button>
						</div>
					)}
				</div>
			</div>

			<LayoutGroup>
				{filtered.length > 0 ? (
					<motion.div layout className="grid gap-4">
						<AnimatePresence mode="popLayout">
							{filtered.map((study) => (
								<motion.div key={study.slug} layout {...motionProps}>
									<CaseStudyCard study={study} />
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				) : (
					<div className="rounded-lg border border-dashed border-border bg-surface px-6 py-12 text-center">
						<p className="text-sm text-muted">No case studies match these filters.</p>
						<button
							type="button"
							onClick={clearFilters}
							className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-foreground"
						>
							Clear filters
							<X className="h-3 w-3" aria-hidden />
						</button>
					</div>
				)}
			</LayoutGroup>
		</div>
	);
}
