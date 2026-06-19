export interface CaseStudy {
	slug: string;
	name: string;
	tagline: string;
	domain: string;
	role: string;
	status: 'Live' | 'In Progress';
	url: string;
	appUrl?: string;
	/** Single logo, or fallback when light/dark not set */
	logo?: string;
	/** Light site theme — e.g. white wordmark on dark tile */
	logoLight?: string;
	/** Dark site theme — e.g. coloured wordmark on dark tile */
	logoDark?: string;
	/** Icon + name together on one dark tile (Zaakiyah) */
	logoInlineWordmark?: boolean;
	/** Full logo image includes wordmark — hide duplicate title (Talentcona) */
	logoFullLockup?: boolean;
	featured: boolean;
	tags: string[];
	problem: string;
	context: string;
	approach: string[];
	architecture: string[];
	stack: string[];
	outcome: string;
	metrics?: { label: string; value?: string }[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'zaakiyah',
		name: 'Zaakiyah',
		tagline: 'Transparent Zakaat and Sadaqah distribution at scale',
		domain: 'Fintech · Charity',
		role: 'Tech Lead & Backend Architect',
		status: 'Live',
		url: 'https://zaakiyah.com',
		logo: '/projects/zaakiyah.png',
		logoInlineWordmark: true,
		featured: true,
		tags: ['Payments', 'Microservices', 'AI'],
		problem:
			'Charitable giving platforms often lack transparency — donors cannot trace where funds go, and distribution is slow and manual.',
		context:
			'Building from early stage with a small team. Needed to handle donations, verification, and intelligent beneficiary matching while keeping trust at the centre.',
		approach: [
			'Split the platform into bounded services — donations, verification, distribution — so each could scale and deploy independently.',
			'Used event-driven processing for donation lifecycle so downstream systems react without tight coupling.',
			'Added a caching layer around rate lookups and beneficiary queries to keep response times predictable during peak giving periods.',
			'Integrated payment providers with idempotent webhook handling to avoid duplicate charges on retries.',
		],
		architecture: [
			'Microservices with NestJS',
			'Event-driven donation pipeline',
			'Redis caching layer',
			'Secure payment webhooks',
			'AI-powered beneficiary matching',
		],
		stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'AI/ML'],
		outcome:
			'A live platform where donors can give with confidence and administrators can distribute funds with full audit trails. Metrics coming soon.',
		metrics: [
			{ label: 'Transaction volume' },
			{ label: 'Distribution latency' },
			{ label: 'Platform uptime' },
		],
	},
	{
		slug: 'hcmatrix',
		name: 'HCMatrix',
		tagline: 'HR and payroll platform for African businesses',
		domain: 'HR Tech · SaaS',
		role: 'Backend Engineer & System Designer',
		status: 'Live',
		url: 'https://hcmatrix.com',
		appUrl: 'https://app.hcmatrix.com',
		logo: '/projects/hcmatrix.png',
		featured: true,
		tags: ['HR', 'Payroll', 'Multi-tenant'],
		problem:
			'Growing companies need time tracking, leave management, payroll, and recruitment in one place — not five disconnected tools.',
		context:
			'Working on a modular HR platform used by businesses across Africa. High write volume during payroll runs, complex role-based access, and strict audit requirements.',
		approach: [
			'Designed modular services per domain — attendance, leave, payroll — with shared auth and audit logging.',
			'Used queue-based job processing for payroll calculations so heavy runs do not block the API.',
			'Built real-time sync between modules so leave balances and attendance stay consistent.',
			'Implemented RBAC with audit trails for every sensitive action.',
		],
		architecture: [
			'Modular service architecture',
			'Queue-based payroll processing',
			'Real-time data sync',
			'Role-based access control',
			'Audit logging',
		],
		stack: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis'],
		outcome:
			'Production HR platform handling daily attendance, payroll cycles, and recruitment workflows for multiple client organisations. Metrics coming soon.',
		metrics: [
			{ label: 'Active organisations' },
			{ label: 'Payroll runs processed' },
			{ label: 'API response time (p95)' },
		],
	},
	{
		slug: 'haqqpay',
		name: 'Haqqpay',
		tagline: 'Currency exchange and peer-to-peer deals',
		domain: 'Fintech · Payments',
		role: 'Backend Engineer',
		status: 'Live',
		url: 'https://haqqpay.com',
		logoDark: '/projects/haqqpay.png',
		logoLight: '/projects/haqqpay-light.png',
		featured: true,
		tags: ['Payments', 'Transactions', 'Security'],
		problem:
			'Users need a reliable way to exchange currency and complete peer deals — with clear rates, secure wallets, and protection against failed or duplicate transactions.',
		context:
			'Financial platform where correctness matters more than speed. Every transaction needs to be traceable, reversible where appropriate, and safe from double-spend.',
		approach: [
			'Built a transaction pipeline with explicit states — pending, processing, completed, failed — so nothing falls through the cracks.',
			'Cached exchange rates with TTL and fallback sources to balance freshness and performance.',
			'Designed wallet operations with locking to prevent race conditions on concurrent transfers.',
			'Added fraud detection hooks and structured webhook handling for payment provider events.',
		],
		architecture: [
			'Transaction state machine',
			'Rate caching with TTL',
			'Wallet locking',
			'Fraud detection layer',
			'Webhook idempotency',
		],
		stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Payment APIs'],
		outcome:
			'Live exchange platform processing peer deals and currency conversions with secure transaction handling. Metrics coming soon.',
		metrics: [
			{ label: 'Daily transaction volume' },
			{ label: 'Failed transaction rate' },
			{ label: 'Webhook processing time' },
		],
	},
	{
		slug: 'togo-mobility',
		name: 'Togo Mobility',
		tagline: 'Mobility and transport operations platform',
		domain: 'Mobility · Logistics',
		role: 'Backend Engineer',
		status: 'Live',
		url: 'https://togo-mobility.com',
		logoDark: '/projects/togo-mobility.png',
		logoLight: '/projects/togo-mobility-light.png',
		featured: false,
		tags: ['Mobility', 'APIs', 'Real-time'],
		problem:
			'Mobility operators need backend systems that handle bookings, fleet coordination, and real-time status — without going down during peak hours.',
		context:
			'Building API layers and backend services for a mobility product where location data, scheduling, and user requests intersect.',
		approach: [
			'Structured APIs around core domains — trips, fleet, users — with clear contracts for mobile clients.',
			'Designed for concurrent booking requests with proper conflict handling.',
			'Separated read-heavy location queries from write-heavy booking operations.',
		],
		architecture: [
			'Domain-driven API design',
			'Booking conflict resolution',
			'Read/write separation',
			'Real-time status updates',
		],
		stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
		outcome:
			'Backend services powering live mobility operations. Detailed metrics coming soon.',
		metrics: [{ label: 'Active trips' }, { label: 'API uptime' }],
	},
	{
		slug: 'talentcona',
		name: 'Talentcona',
		tagline: 'Talent and recruitment platform',
		domain: 'HR Tech · Recruitment',
		role: 'Backend Engineer',
		status: 'Live',
		url: 'https://talentcona.com',
		logoDark: '/projects/talentcona.png',
		logoFullLockup: true,
		featured: false,
		tags: ['Recruitment', 'SaaS', 'APIs'],
		problem:
			'Recruitment platforms need reliable job posting, applicant tracking, and matching — with search that stays fast as the candidate pool grows.',
		context:
			'Building backend services for a talent platform connecting employers and candidates, with emphasis on searchable profiles and application workflows.',
		approach: [
			'Modelled hiring workflows as state machines so application status is always explicit.',
			'Indexed candidate and job data for fast filtered search.',
			'Built notification triggers on key workflow transitions.',
		],
		architecture: [
			'Application workflow engine',
			'Search indexing',
			'Event-driven notifications',
			'Employer/candidate separation',
		],
		stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
		outcome:
			'Live recruitment platform with structured hiring workflows. Metrics coming soon.',
		metrics: [{ label: 'Active job listings' }, { label: 'Applications processed' }],
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
	return caseStudies.filter((study) => study.featured);
}
