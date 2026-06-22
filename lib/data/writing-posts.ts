import { canonicalizeHashnodeSlug, resolveHashnodePostUrl } from '@/lib/data/hashnode-publication';

export interface WritingPost {
	title: string;
	/** Optional Hashnode subtitle shown under the title */
	subtitle?: string;
	slug: string;
	brief: string;
	publishedAt: string;
	readTimeInMinutes: number;
	tags: string[];
	coverImage?: string;
	url: string;
}

function postEntry(
	entry: Omit<WritingPost, 'slug' | 'url'> & { slug: string }
): WritingPost {
	const slug = canonicalizeHashnodeSlug(entry.slug);
	return {
		...entry,
		slug,
		url: resolveHashnodePostUrl(slug),
	};
}

/**
 * Curated posts from code-along.hashnode.dev.
 * Used when the Hashnode API is unavailable — keep slugs aligned with Hashnode.
 */
export const writingPosts: WritingPost[] = [
	postEntry({
		subtitle: 'Building APIs That Survive Production',
		title: 'From Monolith to Microservices',
		brief:
			'Patterns for timeouts, retries, rate limits, and the failure modes that show up after launch — not in tutorials.',
		slug: 'from-monolith-to-microservices',
		publishedAt: '2026-06-13',
		readTimeInMinutes: 29,
		tags: ['APIs', 'Microservices', 'Production', 'System Design'],
	}),
	postEntry({
		title: 'You Can Build Fast With AI. But Would You Survive Production?',
		brief:
			'Speed from AI tools is not the same as engineering maturity. What changes when real users, uptime, and money are on the line.',
		slug: 'you-can-build-fast-with-ai-but-would-you-survive-production',
		publishedAt: '2026-01-27',
		readTimeInMinutes: 4,
		tags: ['AI', 'Engineering', 'Production'],
	}),
	postEntry({
		title: 'Solutions to Dirty Read Concurrency Problem',
		subtitle: 'How Backend Engineers Can Prevent False Data with Transaction Control',
		brief:
			'What dirty reads look like in production, why they erode trust, and how isolation levels and locking fix them.',
		slug: 'solutions-to-dirty-read-concurrency-problem',
		publishedAt: '2025-09-27',
		readTimeInMinutes: 4,
		tags: ['Concurrency', 'Databases', 'Transactions'],
	}),
	postEntry({
		subtitle: 'Smart Strategy Pattern in NestJS Notifications',
		title: 'Building a Notification System in NestJS – Part 2',
		brief:
			'Routing email, push, and in-app channels with a strategy pattern instead of growing if/else chains.',
		slug: 'building-a-notification-system-in-nestjs-part-2',
		publishedAt: '2025-09-25',
		readTimeInMinutes: 8,
		tags: ['NestJS', 'BullMQ', 'Strategy Pattern', 'Notifications'],
	}),
	postEntry({
		subtitle: 'The Event-Driven Core',
		title: 'Building a Notification System in NestJS – Part 1',
		brief:
			'Emitting events, queuing with BullMQ, and keeping the HTTP path fast in an event-driven notification system.',
		slug: 'building-a-notification-system-in-nestjs-part-1-the-event-driven-core',
		publishedAt: '2025-09-25',
		readTimeInMinutes: 5,
		tags: ['NestJS', 'BullMQ', 'Event-Driven', 'Notifications'],
	}),
	postEntry({
		title: 'HTTPS beyond the “S”',
		brief: 'What HTTPS actually guarantees — and what it does not — when you are designing backend security.',
		slug: 'the-buka-series-part-2',
		publishedAt: '2025-04-11',
		readTimeInMinutes: 2,
		tags: ['Security', 'HTTPS', 'Backend'],
	}),
	postEntry({
		title: 'HTTP beyond the acronym',
		brief: 'A practical walkthrough of request/response mechanics every backend engineer should be able to explain.',
		slug: 'the-buka-series-part-1',
		publishedAt: '2025-04-11',
		readTimeInMinutes: 2,
		tags: ['HTTP', 'Backend', 'Fundamentals'],
	}),
	postEntry({
		title: 'Understanding Database Types: When to Use What',
		subtitle: 'A friendly guide to relational, non-relational, and in-memory databases',
		brief:
			'When to reach for Postgres, document stores, or Redis — and how to pick without cargo-culting the stack.',
		slug: 'understanding-database-types-when-to-use-what',
		publishedAt: '2025-04-03',
		readTimeInMinutes: 7,
		tags: ['Databases', 'PostgreSQL', 'Redis'],
	}),
	postEntry({
		title: 'Why Job Queues In Your System Architecture?',
		subtitle: 'A Comprehensive Guide to Efficient Job Queuing and Background Processing for Scalable Applications',
		brief:
			'Queues, workers, retries, and backpressure — the pieces you need before background jobs become a bottleneck.',
		slug: 'why-job-queues-in-your-system-architecture',
		publishedAt: '2024-10-13',
		readTimeInMinutes: 8,
		tags: ['Job Queues', 'Background Jobs', 'Scalability'],
	}),
	postEntry({
		title: 'Idempotency in API Design: Ensuring Reliable and Predictable Systems',
		subtitle: 'Build APIs That Handle Repetitive Requests Without Compromise',
		brief: 'Idempotency, deduplication, and caching patterns for APIs that see the same request more than once.',
		slug: 'idempotency-in-api-design-ensuring-reliable-and-predictable-systems',
		publishedAt: '2024-09-13',
		readTimeInMinutes: 5,
		tags: ['APIs', 'Idempotency', 'System Design'],
	}),
	postEntry({
		title: 'Solutions To Lost Update Concurrency Problem',
		subtitle: 'Practical Techniques in Typescript for Solving Concurrency Issues with Modern DBMS',
		brief:
			'Race conditions, lost updates, and isolation levels — with TypeScript examples against real database behaviour.',
		slug: 'solutions-to-lost-update-concurrency-problem',
		publishedAt: '2024-08-16',
		readTimeInMinutes: 8,
		tags: ['Concurrency', 'TypeScript', 'Databases'],
	}),
	postEntry({
		title: 'How to Upload Files to Any Cloud Storage Platform Using express-file-wizardry in Express.js',
		subtitle: 'How to Upload Files to Any Cloud Storage Platform Using express-file-wizardry in Express.js',
		brief:
			'How to upload files to any cloud storage platform using express-file-wizardry in Express.js',
		slug: 'how-to-upload-files-to-any-cloud-storage-platform-using-express-file-wizardry-in-expressjs',
		publishedAt: '2024-03-02',
		readTimeInMinutes: 9,
		tags: ['Express.js', 'File Upload', 'Node.js'],
	}),
];
