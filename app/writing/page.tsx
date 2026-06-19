import { ArrowUpRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { PostCard } from '@/components/post-card';
import { getHashnodePosts } from '@/lib/hashnode';
import { siteConfig } from '@/lib/data/site';

export default async function Writing() {
	const posts = await getHashnodePosts();

	return (
		<PageContainer className="space-y-12">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
				<PageHeader
					label="Insights"
					title="Writing"
					description="Notes on backend engineering, system design, and things I have learned in production."
				/>
				<a
					href={siteConfig.hashnodeUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
				>
					code-along.hashnode.dev
					<ArrowUpRight className="h-4 w-4" />
				</a>
			</div>

			{posts.length > 0 ? (
				<div className="grid gap-4 sm:grid-cols-2">
					{posts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			) : (
				<div className="rounded-lg border border-border bg-surface p-10 text-center">
					<p className="mb-4 text-muted">No posts synced yet.</p>
					<a
						href={siteConfig.hashnodeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-accent hover:underline"
					>
						Read on Hashnode →
					</a>
				</div>
			)}
		</PageContainer>
	);
}
