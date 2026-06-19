import { siteConfig } from '@/lib/data/site';

export interface WritingPost {
	title: string;
	slug: string;
	brief: string;
	publishedAt: string;
	readTimeInMinutes: number;
	coverImage?: string;
	url: string;
}

function postUrl(slug: string) {
	return `${siteConfig.hashnodeUrl}/${slug}`;
}

/**
 * Curated posts from code-along.hashnode.dev.
 * Edit this list when you publish — the site uses it when the Hashnode API is unavailable.
 */
export const writingPosts: WritingPost[] = [
	{
		title: 'Building APIs That Survive Production',
		slug: 'building-apis-that-survive-production',
		brief:
			'Patterns for timeouts, retries, rate limits, and the failure modes that show up after launch — not in tutorials.',
		publishedAt: '2026-06-13',
		readTimeInMinutes: 29,
		url: postUrl('building-apis-that-survive-production'),
	},
	{
		title: 'You Can Build Fast With AI. But Would You Survive Production?',
		slug: 'you-can-build-fast-with-ai-but-would-you-survive-production',
		brief:
			'Speed from AI tools is not the same as engineering maturity. What changes when real users, uptime, and money are on the line.',
		publishedAt: '2026-01-27',
		readTimeInMinutes: 4,
		url: postUrl('you-can-build-fast-with-ai-but-would-you-survive-production'),
	},
	{
		title: 'Solutions to Dirty Read Concurrency Problem',
		slug: 'solutions-to-dirty-read-concurrency-problem',
		brief:
			'What dirty reads look like in production, why they erode trust, and how isolation levels and locking fix them.',
		publishedAt: '2025-09-27',
		readTimeInMinutes: 4,
		url: postUrl('solutions-to-dirty-read-concurrency-problem'),
	},
	{
		title: 'The Smart Strategy Pattern',
		slug: 'the-smart-strategy-pattern',
		brief:
			'Part 2 of building a notification system in NestJS — routing channels with a strategy pattern instead of growing if/else chains.',
		publishedAt: '2025-09-25',
		readTimeInMinutes: 8,
		url: postUrl('the-smart-strategy-pattern'),
	},
	{
		title: 'The Event-Driven Core',
		slug: 'the-event-driven-core',
		brief:
			'Part 1 of an event-driven notification system in NestJS — emitting events, queuing with BullMQ, and keeping the HTTP path fast.',
		publishedAt: '2025-09-25',
		readTimeInMinutes: 5,
		url: postUrl('the-event-driven-core'),
	},
	{
		title: 'HTTPS beyond the “S”',
		slug: 'https-beyond-the-s',
		brief: 'What HTTPS actually guarantees — and what it does not — when you are designing backend security.',
		publishedAt: '2025-04-11',
		readTimeInMinutes: 2,
		url: postUrl('https-beyond-the-s'),
	},
	{
		title: 'HTTP beyond the acronym',
		slug: 'http-beyond-the-acronym',
		brief: 'A practical walkthrough of request/response mechanics every backend engineer should be able to explain.',
		publishedAt: '2025-04-11',
		readTimeInMinutes: 2,
		url: postUrl('http-beyond-the-acronym'),
	},
	{
		title: 'A friendly guide to relational, non-relational, and in-memory databases',
		slug: 'a-friendly-guide-to-relational-non-relational-and-in-memory-databases',
		brief:
			'When to reach for Postgres, document stores, or Redis — and how to pick without cargo-culting the stack.',
		publishedAt: '2025-04-03',
		readTimeInMinutes: 7,
		url: postUrl('a-friendly-guide-to-relational-non-relational-and-in-memory-databases'),
	},
	{
		title: 'A Comprehensive Guide to Efficient Job Queuing and Background Processing for Scalable Applications',
		slug: 'a-comprehensive-guide-to-efficient-job-queuing-and-background-processing-for-scalable-applications',
		brief:
			'Queues, workers, retries, and backpressure — the pieces you need before background jobs become a bottleneck.',
		publishedAt: '2024-10-13',
		readTimeInMinutes: 8,
		url: postUrl(
			'a-comprehensive-guide-to-efficient-job-queuing-and-background-processing-for-scalable-applications'
		),
	},
	{
		title: 'Build APIs That Handle Repetitive Requests Without Compromise',
		slug: 'build-apis-that-handle-repetitive-requests-without-compromise',
		brief: 'Idempotency, deduplication, and caching patterns for APIs that see the same request more than once.',
		publishedAt: '2024-09-13',
		readTimeInMinutes: 5,
		url: postUrl('build-apis-that-handle-repetitive-requests-without-compromise'),
	},
	{
		title: 'Practical Techniques in Typescript for Solving Concurrency Issues with Modern DBMS',
		slug: 'practical-techniques-in-typescript-for-solving-concurrency-issues-with-modern-dbms',
		brief:
			'Race conditions, lost updates, and isolation levels — with TypeScript examples against real database behaviour.',
		publishedAt: '2024-08-16',
		readTimeInMinutes: 8,
		url: postUrl('practical-techniques-in-typescript-for-solving-concurrency-issues-with-modern-dbms'),
	},
];
