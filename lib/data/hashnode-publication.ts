/** Publication metadata from Hashnode — used to build canonical post URLs. */
export const hashnodePublication = {
	url: 'https://code-along.hashnode.dev',
	canonicalURL: 'https://code-along.hashnode.dev',
	redirectionRules: [
		{
			source: '/building-a-notification-system-in-nestjs-part-2-the-smart-strategy-pattern',
			destination: '/building-a-notification-system-in-nestjs-part-2',
		},
	],
} as const;

function stripLeadingSlash(path: string) {
	return path.replace(/^\//, '');
}

/** Map legacy slugs to their current Hashnode paths. */
export function canonicalizeHashnodeSlug(slug: string): string {
	const normalized = stripLeadingSlash(slug);

	for (const rule of hashnodePublication.redirectionRules) {
		if (stripLeadingSlash(rule.source) === normalized) {
			return stripLeadingSlash(rule.destination);
		}
	}

	return normalized;
}

/** Build the canonical Hashnode URL for a post slug. */
export function resolveHashnodePostUrl(slug: string): string {
	const base = hashnodePublication.canonicalURL.replace(/\/$/, '');
	const canonicalSlug = canonicalizeHashnodeSlug(slug);
	return `${base}/${canonicalSlug}`;
}
