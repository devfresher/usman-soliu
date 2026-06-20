import type { CaseStudy, CaseStudySector } from '@/lib/data/case-studies';

export type { CaseStudySector };

export type CaseStudyStatusFilter = 'all' | 'live' | 'in-progress';

export interface CaseStudyFilters {
	status: CaseStudyStatusFilter;
	featuredOnly: boolean;
	sector: CaseStudySector | 'all';
}

export const defaultCaseStudyFilters: CaseStudyFilters = {
	status: 'all',
	featuredOnly: false,
	sector: 'all',
};

export const statusFilterOptions = [
	{ id: 'all' as const, label: 'All' },
	{ id: 'live' as const, label: 'Live' },
	{ id: 'in-progress' as const, label: 'In progress' },
];

export const sectorFilterOptions: { id: CaseStudySector; label: string }[] = [
	{ id: 'fintech', label: 'Fintech' },
	{ id: 'hr', label: 'HR & SaaS' },
	{ id: 'food', label: 'Food & logistics' },
	{ id: 'mobility', label: 'Mobility' },
	{ id: 'edtech', label: 'EdTech' },
	{ id: 'productivity', label: 'Productivity' },
];

export function isDefaultFilters(filters: CaseStudyFilters): boolean {
	return (
		filters.status === 'all' &&
		!filters.featuredOnly &&
		filters.sector === 'all'
	);
}

export function filterCaseStudies(
	studies: CaseStudy[],
	filters: CaseStudyFilters
): CaseStudy[] {
	return studies.filter((study) => {
		if (filters.status === 'live' && study.status !== 'Live') return false;
		if (filters.status === 'in-progress' && study.status !== 'In Progress') {
			return false;
		}
		if (filters.featuredOnly && !study.featured) return false;
		if (filters.sector !== 'all' && study.sector !== filters.sector) return false;
		return true;
	});
}

export function countForStatusFilter(
	studies: CaseStudy[],
	status: CaseStudyStatusFilter,
	filters: CaseStudyFilters
): number {
	return filterCaseStudies(studies, {
		...filters,
		status,
	}).length;
}

export function countForSectorFilter(
	studies: CaseStudy[],
	sector: CaseStudySector | 'all',
	filters: CaseStudyFilters
): number {
	return filterCaseStudies(studies, {
		...filters,
		sector,
	}).length;
}

export function filtersFromSearchParams(
	params: URLSearchParams
): CaseStudyFilters {
	const status = params.get('status');
	const sector = params.get('sector');
	const featured = params.get('featured');

	return {
		status:
			status === 'live' || status === 'in-progress' ? status : 'all',
		featuredOnly: featured === '1',
		sector:
			sector &&
			sectorFilterOptions.some((option) => option.id === sector)
				? (sector as CaseStudySector)
				: 'all',
	};
}

export function filtersToSearchParams(filters: CaseStudyFilters): string {
	const params = new URLSearchParams();
	if (filters.status !== 'all') params.set('status', filters.status);
	if (filters.featuredOnly) params.set('featured', '1');
	if (filters.sector !== 'all') params.set('sector', filters.sector);
	const query = params.toString();
	return query ? `?${query}` : '';
}
