'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FlipProfileCardProps {
	className?: string;
}

/**
 * Playful profile card. Face never revealed on flip.
 * Front: `public/portrait-back.png`. Back: terminal punchline.
 */
export function FlipProfileCard({ className }: FlipProfileCardProps) {
	const [flipped, setFlipped] = useState(false);
	const [hasBackPhoto, setHasBackPhoto] = useState(true);

	const isFlipped = flipped;

	return (
		<div
			className={cn('group w-full', className)}
			style={{ perspective: '1000px' }}
		>
			<div
				role="button"
				tabIndex={0}
				onClick={() => setFlipped((f) => !f)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						setFlipped((f) => !f);
					}
				}}
				className={cn(
					'relative aspect-[4/5] w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d]',
					isFlipped && '[transform:rotateY(180deg)]',
					'[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]'
				)}
				aria-label="Flip profile card"
			>
				{/* Front: back view / silhouette tease */}
				<div className="absolute inset-0 overflow-hidden rounded-lg border border-border bg-surface [backface-visibility:hidden]">
					{hasBackPhoto ? (
						<Image
							src="/portrait-back.png"
							alt=""
							fill
							className="object-cover object-top"
							sizes="(max-width: 1024px) 100vw, 320px"
							priority
							onError={() => setHasBackPhoto(false)}
						/>
					) : (
						<Image
							src="/portrait.png"
							alt=""
							fill
							className="scale-x-[-1] object-cover object-top blur-md brightness-[0.35] saturate-0"
							sizes="(max-width: 1024px) 100vw, 320px"
						/>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

					<div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
						<p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
							profile.view
						</p>
						<p className="text-sm font-medium text-foreground">
							Back-end engineer.
							<br />
							<span className="text-muted">Back-facing.</span>
						</p>
						<p className="font-mono text-xs text-accent">
							{'// hover to see my face →'}
						</p>
					</div>
				</div>

				{/* Back: punchline */}
				<div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
					<div className="space-y-3 font-mono text-xs leading-relaxed">
						<p className="text-muted-foreground">
							<span className="text-accent">$</span> cat face.txt
						</p>
						<div className="space-y-2 rounded-md border border-border bg-background p-4">
							<p className="text-accent">ERR: face_not_required</p>
							<p className="text-sm leading-relaxed text-muted">
								You honestly don&apos;t need my face.
							</p>
							<p className="text-sm leading-relaxed text-muted">
								You need systems that stay up when it matters.
							</p>
						</div>
						<p className="text-muted-foreground">
							<span className="text-accent">$</span>{' '}
							<span className="animate-pulse">_</span>
						</p>
					</div>
					<p className="font-mono text-[10px] text-muted-foreground">
						flip back · tap to toggle
					</p>
				</div>
			</div>
		</div>
	);
}
