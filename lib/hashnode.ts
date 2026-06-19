import { siteConfig } from '@/lib/data/site';
import { writingPosts, type WritingPost } from '@/lib/data/writing-posts';

export type HashnodePost = WritingPost;

const HASHNODE_API = 'https://gql.hashnode.com/';

const POSTS_QUERY = `
  query PublicationPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            title
            slug
            brief
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

interface HashnodeResponse {
	data?: {
		publication?: {
			posts?: {
				edges?: Array<{
					node: {
						title: string;
						slug: string;
						brief: string;
						publishedAt: string;
						readTimeInMinutes: number;
						coverImage?: { url: string } | null;
					};
				}>;
			};
		};
	};
}

function mapApiPosts(json: HashnodeResponse): HashnodePost[] {
	const edges = json.data?.publication?.posts?.edges ?? [];

	return edges.map(({ node }) => ({
		title: node.title,
		slug: node.slug,
		brief: node.brief,
		publishedAt: node.publishedAt,
		readTimeInMinutes: node.readTimeInMinutes,
		coverImage: node.coverImage?.url,
		url: `${siteConfig.hashnodeUrl}/${node.slug}`,
	}));
}

async function fetchFromHashnodeApi(limit: number): Promise<HashnodePost[]> {
	const token = process.env.HASHNODE_API_TOKEN;
	const headers: Record<string, string> = { 'Content-Type': 'application/json' };
	if (token) headers.Authorization = token;

	const response = await fetch(HASHNODE_API, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query: POSTS_QUERY,
			variables: { host: siteConfig.hashnodeHost, first: limit },
		}),
		next: { revalidate: 3600 },
	});

	if (!response.ok) return [];

	const contentType = response.headers.get('content-type') ?? '';
	if (!contentType.includes('application/json')) return [];

	const json = (await response.json()) as HashnodeResponse;
	if (!json.data?.publication?.posts?.edges?.length) return [];

	return mapApiPosts(json);
}

/** Hashnode API when available; otherwise the curated list in lib/data/writing-posts.ts */
export async function getHashnodePosts(limit = 12): Promise<HashnodePost[]> {
	try {
		const fromApi = await fetchFromHashnodeApi(limit);
		if (fromApi.length > 0) return fromApi;
	} catch {
		// fall through to manual posts
	}

	return writingPosts.slice(0, limit);
}
