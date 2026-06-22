export type CaseStudySector =
	| 'fintech'
	| 'hr'
	| 'food'
	| 'mobility'
	| 'edtech'
	| 'productivity';

export interface CaseStudy {
	slug: string;
	name: string;
	tagline: string;
	domain: string;
	role: string;
	status: 'Live' | 'In Progress';
	url?: string;
	appUrl?: string;
	/** Single logo, or fallback when light/dark not set */
	logo?: string;
	/** Light site theme — wordmark/icon for light backgrounds */
	logoLight?: string;
	/** Dark site theme — wordmark/icon for dark backgrounds */
	logoDark?: string;
	featured: boolean;
	/** Primary industry bucket for project list filters */
	sector: CaseStudySector;
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
		appUrl: 'https://app.zaakiyah.com',
		logo: '/projects/zaakiyah.png',
		featured: true,
		sector: 'fintech',
		tags: ['Payments', 'Microservices', 'AI'],
		problem:
			'Muslims need a trusted way to track wealth, calculate Zakaat against live nisaab thresholds, give transparently, and vet beneficiaries — not spreadsheets and guesswork.',
		context:
			'Multi-repo platform: NestJS API, React web app, admin panel, and marketing site. Donations, Zakaat applications, community features, and an AI advisor share one PostgreSQL core with strict audit and RBAC.',
		approach: [
			'Modularised the API into wealth, nisaab, currency, Zakaat, donation, payment, community, and admin domains with Prisma on PostgreSQL.',
			'Used Redis caching and BullMQ for notifications, scheduled nisaab/currency jobs, and async side effects via EventEmitter.',
			'Integrated Paystack for donations, Cloudinary for media, OpenAI for the advisor, and Firebase for push — with global JWT auth, throttling, and audit interceptors.',
			'Shipped separate React (Vite) surfaces for donors, admins at ca.zaakiyah.com, and the public marketing site.',
		],
		architecture: [
			'NestJS REST API on Render',
			'Prisma + PostgreSQL + Redis + BullMQ',
			'React SPA + admin panel + marketing site',
			'Event-driven notifications and scheduled jobs',
			'RBAC admin with audit logging',
			'Paystack + OpenAI + Firebase + Cloudinary',
		],
		stack: [
			'Node.js',
			'TypeScript',
			'NestJS',
			'Prisma',
			'PostgreSQL',
			'Redis',
			'BullMQ',
			'React',
			'Vite',
			'Paystack',
			'OpenAI',
			'Firebase',
			'Cloudinary',
			'Render',
		],
		outcome:
			'Live platform for Islamic financial tracking, Zakaat calculation, transparent donations, beneficiary vetting, and community — with admin tooling and audit trails across production surfaces.',
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
		role: 'Technical Team Lead',
		status: 'Live',
		url: 'https://hcmatrix.com',
		appUrl: 'https://app.hcmatrix.com',
		logo: '/projects/hcmatrix.png',
		featured: true,
		sector: 'hr',
		tags: ['HR', 'Payroll', 'Self-service', 'Microservices'],
		problem:
			'Growing companies need time tracking, leave management, payroll, recruitment, and performance in one place — not disconnected tools that drift out of sync.',
		context:
			'HCMatrix 3.0 launched in 2024 as Snapnet’s cloud HCM for African businesses — payroll, biometric time & attendance, employee self-service, recruitment, and performance. Adoption has grown to 10+ active company tenants and approximately 4k licensed employees (3.5k+) using self-service daily for leave, loans, reimbursement, requisitions, and related workflows. I took technical team lead in 2025 as write volume during payroll runs, attendance ingestion, and multi-tenant RBAC scaled.',
		approach: [
			'Split the platform into domain services — utility, payroll, time & attendance, recruitment, performance — each owning its data and deploy cycle.',
			'Used gRPC with a shared proto submodule for synchronous cross-service calls (company, employee, workflow data).',
			'Offloaded heavy payroll and notification work to RabbitMQ; used BullMQ workers for biometric attendance and break processing.',
			'Added Socket.IO on utility and recruitment for real-time updates during hiring workflows and live application chat.',
		],
		architecture: [
			'12-service microservice mesh (Express + NestJS)',
			'Shared gRPC proto contracts',
			'RabbitMQ cross-service messaging',
			'BullMQ workers for attendance jobs',
			'Socket.IO for live recruitment flows',
			'Redis caching across services',
		],
		stack: [
			'Node.js',
			'TypeScript',
			'Express.js',
			'NestJS',
			'MySQL',
			'Sequelize',
			'TypeORM',
			'Redis',
			'RabbitMQ',
			'BullMQ',
			'gRPC',
			'Socket.IO',
			'Firebase',
			'Azure Blob',
		],
		outcome:
			'Production HR platform in daily use across 10+ companies — approximately 4k licensed employees (3.5k+) on self-service for leave, loans, reimbursement, and requisitions, with biometric time & attendance and 1k+ employees paid through payroll each month. Twelve microservices span payroll, attendance, recruitment, performance, and notifications, deployable independently as tenant load grows.',
		metrics: [
			{ label: 'Active company tenants', value: '10+' },
			{ label: 'Licensed employees', value: '~4k (3.5k+)' },
			{ label: 'Employees paid monthly', value: '1,000+' },
			{ label: 'Daily self-service scope', value: 'Leave · loans · reimbursement · requisitions · T&A' },
			{ label: 'Production microservices', value: '12' },
			{ label: 'Platform launch · leadership', value: '2024 launch · tech lead from 2025' },
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
		logoDark: '/projects/haqqpay-dark.png',
		logoLight: '/projects/haqqpay-light.png',
		featured: true,
		sector: 'fintech',
		tags: ['Payments', 'P2P', 'Compliance'],
		problem:
			'Users need a reliable way to exchange currency and complete peer deals — with clear rates, verified identities, secure wallets, and protection against failed or duplicate transactions.',
		context:
			'Financial platform where correctness matters more than speed. Every deal, payout, and webhook retry must stay traceable, idempotent, and safe from race conditions on concurrent wallet operations.',
		approach: [
			'Centralised transaction management with explicit states and BullMQ processors for async settlement, locked deals, and payouts.',
			'Cached exchange rates in Redis with TTL so rate lookups stay fast without stale pricing in production.',
			'Integrated SumSub for KYC and multiple payment rails (Trust Payments, Yapily, Paystack, and others) behind webhook handlers.',
			'Added Sentry, throttling, MFA, and scheduled reconciliation jobs so production issues surface before users do.',
		],
		architecture: [
			'Modular NestJS monolith',
			'Transaction state machine + BullMQ queues',
			'Redis-backed rate cache',
			'Webhook idempotency layer',
			'KYC verification pipeline',
			'Bull Board for queue observability',
		],
		stack: [
			'Node.js',
			'TypeScript',
			'NestJS',
			'TypeORM',
			'PostgreSQL',
			'Redis',
			'BullMQ',
			'Sentry',
			'Docker',
			'DigitalOcean',
		],
		outcome:
			'Live exchange platform processing peer deals, Haqqpay-managed deals, payouts, and rate-driven conversions — deployed via Docker on DigitalOcean with background job processing for financial workflows.',
		metrics: [
			{ label: 'Daily transaction volume' },
			{ label: 'Failed transaction rate' },
			{ label: 'Webhook processing time' },
		],
	},
	{
		slug: 'jekaeat',
		name: 'Jekaeat',
		tagline: 'Food delivery — orders, riders, vendors, and payouts in one API',
		domain: 'Food · Logistics',
		role: 'Backend Engineer',
		status: 'Live',
		url: 'https://www.jekaeat.io',
		appUrl: 'https://api.jekaeat.io',
		logo: '/projects/jekaeat.png',
		featured: true,
		sector: 'food',
		tags: ['Food delivery', 'Payments', 'Logistics'],
		problem:
			'Food delivery platforms need reliable order lifecycle management — vendor menus, rider dispatch, wallet top-ups, and vendor payouts — without dropped orders or duplicate charges during peak hours.',
		context:
			'Jekaeat is a Nigerian food and agri-commerce platform (founded 2020) connecting restaurants, vendors, and riders — starting in Minna and expanding meal-kit and fresh produce logistics to Lagos and Ibadan. The Express API powered customer, vendor, and rider apps through production scale, including 3,000+ food orders delivered in Minna on a two-bike fleet before a 2024 operational pivot toward hybrid B2B/B2C and decentralized logistics.',
		approach: [
			'Modelled orders, vendors, riders, products, wallets, and payouts in MongoDB with Mongoose — keeping domain documents cohesive for fast reads on active orders.',
			'Used BullMQ workers for payout processing and async side effects; Redis-backed rate limiting and caching for hot paths.',
			'Integrated Paystack for wallet funding and webhooks with idempotent handlers; Firebase Admin for push on order state changes.',
			'Added route optimization, referral earnings, ratings, scheduled orders, and Bull Board for queue visibility in production.',
		],
		architecture: [
			'Express REST API + separate worker process',
			'MongoDB + Mongoose document models',
			'Redis cache + rate-limit store',
			'BullMQ payout and notification jobs',
			'Paystack wallet + webhook pipeline',
			'Firebase push notifications',
		],
		stack: [
			'Node.js',
			'TypeScript',
			'Express.js',
			'MongoDB',
			'Mongoose',
			'Redis',
			'BullMQ',
			'Paystack',
			'Firebase',
			'Sentry',
			'Winston',
		],
		outcome:
			'Backend supported 3,000+ completed food orders in Minna — vendor catalogues, rider dispatch, Paystack wallets, vendor payouts, route optimization, and Firebase push — with the platform still live and scaling across Nigerian cities as a hybrid B2C delivery and B2B vendor API product.',
		metrics: [
			{ label: 'Food orders delivered', value: '3,000+ (Minna)' },
			{ label: 'Operating since', value: '2020' },
			{ label: 'Markets served', value: 'Minna · Lagos · Ibadan' },
			{ label: 'Early delivery fleet', value: '2 bikes (Minna ops)' },
			{ label: 'Platform model', value: 'B2C delivery + B2B vendor API' },
			{ label: 'Product scope', value: 'Food · meal kits · farm produce' },
		],
	},
	{
		slug: 'togo-mobility',
		name: 'Togo Mobility',
		tagline: 'Mobility and transport operations platform',
		domain: 'Mobility · Logistics',
		role: 'Backend Engineer',
		status: 'In Progress',
		url: 'https://togomobility.com',
		logoLight: '/projects/togo-mobility.png',
		logoDark: '/projects/togo-mobility-light.png',
		featured: false,
		sector: 'mobility',
		tags: ['Mobility', 'APIs', 'NestJS'],
		problem:
			'Mobility operators need backend systems that handle bookings, fleet coordination, and trip status — without going down during peak hours.',
		context:
			'Building the API layer for a mobility product where scheduling, fleet data, and rider requests intersect. The NestJS service foundation is in place; domain modules for trips, fleet, and bookings are the next layer.',
		approach: [
			'Started from a NestJS 11 API scaffold with a clean module boundary plan for trips, fleet, and users.',
			'Designed for domain-driven routes so mobile clients get stable contracts as features roll out.',
			'Planning read/write separation for location-heavy queries vs booking writes as the service grows.',
		],
		architecture: [
			'NestJS API foundation',
			'Domain-module layout (trips, fleet, users)',
			'Mobile-first REST contracts',
		],
		stack: ['Node.js', 'TypeScript', 'NestJS'],
		outcome:
			'Backend API foundation in active development for live mobility operations — domain services and data layer rolling out incrementally.',
		metrics: [{ label: 'Active trips' }, { label: 'API uptime' }],
	},
	{
		slug: 'talentcona',
		name: 'Talentcona',
		tagline: 'Student funding, programs, and career support',
		domain: 'EdTech · Fintech',
		role: 'Backend Engineer',
		status: 'In Progress',
		url: 'https://talentcona.netlify.app',
		logo: '/projects/talentcona.png',
		featured: false,
		sector: 'edtech',
		tags: ['EdTech', 'Payments', 'Mentorship'],
		problem:
			'Students need a trusted way to fund education — enroll in programs, access loans and campaigns, get matched with mentors, and track progress to certification without juggling disconnected tools.',
		context:
			'Multi-sided platform with separate student, mentor, and admin apps — currently in dev and testing on Netlify, not yet in public production. Wallet balances, Paystack payments, loan lifecycles, and mentorship matching need audit trails, queue-backed async work, and strict enrollment policy enforcement before go-live.',
		approach: [
			'Built modular NestJS domains — programs, wallet, payment, funding, loan, mentorship, certification — with Prisma on PostgreSQL.',
			'Used BullMQ for payments, mentor matching, payouts, notifications, and async certificate PDF generation.',
			'Enforced student policy centrally — max concurrent enrollments, aid caps, and wallet-only enrollment paths.',
			'Separated platforms via X-Client-App auth so students, mentors, and admins cannot cross into the wrong UI.',
		],
		architecture: [
			'Modular NestJS monolith',
			'Prisma + PostgreSQL',
			'BullMQ job processors',
			'Event-driven audit logging',
			'Paystack checkout + transfer disbursement',
			'Cloudinary + Puppeteer certificates',
		],
		stack: [
			'Node.js',
			'TypeScript',
			'NestJS',
			'Prisma',
			'PostgreSQL',
			'Redis',
			'BullMQ',
			'Paystack',
			'Cloudinary',
		],
		outcome:
			'Backend in active development — program enrollment, wallet top-ups, loans, campaigns, mentorship matching, LMS progress, and certificate issuance wired through queue-backed payment and payout flows, with the client apps exercised on the Netlify dev/testing environment ahead of production launch.',
		metrics: [
			{ label: 'Environment', value: 'Dev & testing (Netlify)' },
			{ label: 'Platform surfaces', value: 'Student · mentor · admin apps' },
			{ label: 'Production launch', value: 'Pending' },
		],
	},
	{
		slug: 'subi',
		name: 'SubI',
		tagline: 'Track subscription renewals — inbox sync, reminders, and cancel links',
		domain: 'Productivity · SaaS',
		role: 'Founder & Builder',
		status: 'In Progress',
		logoDark: '/projects/subi-dark.png',
		logoLight: '/projects/subi-light.png',
		featured: false,
		sector: 'productivity',
		tags: ['SaaS', 'Supabase', 'Next.js'],
		problem:
			'People lose money on forgotten renewals because subscriptions live scattered across email threads, bank statements, and memory — with no single place to see what bills next.',
		context:
			'Solo-built Next.js app in pre-launch. Users connect Gmail for renewal hints, confirm or edit suggestions manually, and get timezone-aware email reminders before charges — with cancel URLs stored beside each subscription.',
		approach: [
			'Used Supabase for auth, Postgres storage, and edge functions — keeping the app serverless-friendly with Row Level Security on user data.',
			'Built Gmail OAuth sync that surfaces inbox messages that look like renewals; nothing posts without explicit user confirmation.',
			'Added manual subscription entry, deduplication, billing webhooks via Paystack, and Resend-powered reminder dispatch.',
			'Gated the product behind a waitlist (`SUBI_PRE_LAUNCH`) while core dashboard, settings, and billing flows are finished.',
		],
		architecture: [
			'Next.js 14 App Router',
			'Supabase Auth + Postgres + Edge Functions',
			'Gmail OAuth sync pipeline',
			'Paystack billing webhooks',
			'Resend reminder dispatch',
		],
		stack: [
			'Next.js',
			'TypeScript',
			'React',
			'Supabase',
			'PostgreSQL',
			'Gmail API',
			'Paystack',
			'Resend',
			'Tailwind CSS',
		],
		outcome:
			'Pre-launch subscription tracker with inbox-assisted discovery, manual edits, renewal reminders, and cancel-link storage — built as a personal product with production-grade auth and billing foundations.',
		metrics: [{ label: 'Waitlist signups' }, { label: 'Renewals tracked' }],
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
	return caseStudies.filter((study) => study.featured);
}
