export interface ExperienceEntry {
	id: string;
	/** Display date, e.g. Jan 2018 */
	date: string;
	title: string;
	organization?: string;
	kind?: 'role' | 'milestone';
	current?: boolean;
}

/** Career milestones, newest first for the About timeline. */
export const experienceTimeline: ExperienceEntry[] = [
	{
		id: 'hcmatrix-tech-lead-2026',
		date: 'Jan 2026',
		title: 'Technical Team Lead',
		organization: 'HCMatrix',
		kind: 'role',
		current: true,
	},
	{
		id: 'snapnet-tech-lead-2025',
		date: 'Jun 2025',
		title: 'Technical Team Lead',
		organization: 'Snapnet Limited',
		kind: 'role',
	},
	{
		id: 'zaakiyah-tech-lead-2025',
		date: 'Mar 2025',
		title: 'Tech Lead & Backend Architect',
		organization: 'Zaakiyah',
		kind: 'role',
	},
	{
		id: 'snapnet-backend-2023',
		date: 'Jul 2023',
		title: 'Backend Engineer',
		organization: 'Snapnet Limited',
		kind: 'role',
	},
	{
		id: 'jekaeat-backend-2023',
		date: 'Mar 2023',
		title: 'Backend Engineer',
		organization: 'Jekaeat',
		kind: 'role',
	},
	{
		id: '234web-fullstack-2021',
		date: 'Mar 2021',
		title: 'Fullstack Developer',
		organization: '234 Web Resources',
		kind: 'role',
	},
	{
		id: 'school-2019',
		date: 'Jan 2019',
		title: 'Back to school',
		kind: 'milestone',
	},
	{
		id: 'edawah-intern-2018',
		date: 'Jan 2018',
		title: 'Student Intern',
		organization: 'Edawah Technologies',
		kind: 'role',
	},
];
