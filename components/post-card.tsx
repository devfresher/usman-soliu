import { ArrowUpRight, Clock } from 'lucide-react';
import { Card } from '@/components/card';
import type { HashnodePost } from '@/lib/hashnode';

interface PostCardProps {
	post: HashnodePost;
}

function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function PostCard({ post }: PostCardProps) {
	return (
		<a
			href={post.url}
			target="_blank"
			rel="noopener noreferrer"
			className="group block"
		>
			<Card hover className="h-full">
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-between gap-2">
						<time className="font-mono text-xs text-muted">{formatDate(post.publishedAt)}</time>
						<span className="flex items-center gap-1 font-mono text-xs text-muted">
							<Clock className="h-3 w-3" />
							{post.readTimeInMinutes} min
						</span>
					</div>
					<h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
						{post.title}
					</h3>
					{post.brief && (
						<p className="text-sm text-muted line-clamp-2">{post.brief}</p>
					)}
					<span className="flex items-center gap-1 text-xs font-medium text-muted group-hover:text-foreground transition-colors">
						Read on Hashnode
						<ArrowUpRight className="h-3 w-3" />
					</span>
				</div>
			</Card>
		</a>
	);
}
