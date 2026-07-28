'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SessionMedia } from '@/lib/data/mentorship';

interface EventPhotoStripProps {
	photos: SessionMedia[];
	className?: string;
	placeholder?: string;
}

function PhotoFrame({
	photo,
	className,
	priority = false,
	sizes = '(max-width: 768px) 100vw, 640px',
}: {
	photo: SessionMedia;
	className?: string;
	priority?: boolean;
	sizes?: string;
}) {
	if (!photo.src) {
		return (
			<div
				className={cn(
					'flex aspect-4/3 items-center justify-center rounded-lg border border-border bg-surface text-muted',
					className,
				)}
			>
				<span className="font-mono text-xs">{photo.label}</span>
			</div>
		);
	}

	return (
		<div
			className={cn(
				'relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-surface',
				className,
			)}
		>
			<Image
				src={photo.src}
				alt={photo.label}
				fill
				priority={priority}
				className="object-cover"
				sizes={sizes}
			/>
		</div>
	);
}

export function EventPhotoStrip({
	photos,
	className,
	placeholder = 'Event photos coming soon',
}: EventPhotoStripProps) {
	const withSrc = photos.filter((photo) => photo.src);
	const [index, setIndex] = useState(0);

	if (withSrc.length === 0) {
		return (
			<div
				className={cn(
					'flex aspect-21/9 items-center justify-center rounded-lg border border-dashed border-border bg-surface/60',
					className,
				)}
			>
				<div className="flex flex-col items-center gap-2 text-muted">
					<ImageIcon className="h-5 w-5" aria-hidden />
					<span className="font-mono text-xs">{placeholder}</span>
				</div>
			</div>
		);
	}

	if (withSrc.length === 1) {
		return (
			<figure className={cn('space-y-2', className)}>
				<PhotoFrame photo={withSrc[0]} className="aspect-16/10" priority />
				<figcaption className="font-mono text-xs text-muted">{withSrc[0].label}</figcaption>
			</figure>
		);
	}

	if (withSrc.length === 2) {
		return (
			<figure className={cn('space-y-2', className)}>
				<ul className="grid grid-cols-2 gap-2 sm:gap-3">
					{withSrc.map((photo, i) => (
						<li key={photo.src ?? photo.label}>
							<PhotoFrame
								photo={photo}
								priority={i === 0}
								sizes="(max-width: 768px) 50vw, 320px"
							/>
						</li>
					))}
				</ul>
				<figcaption className="font-mono text-xs text-muted">
					{withSrc.map((photo) => photo.label).join(' · ')}
				</figcaption>
			</figure>
		);
	}

	const current = withSrc[Math.min(index, withSrc.length - 1)];

	return (
		<figure className={cn('space-y-3', className)} aria-roledescription="carousel">
			<div className="relative overflow-hidden rounded-lg border border-border bg-surface">
				<div className="relative aspect-16/10">
					<Image
						key={current.src}
						src={current.src!}
						alt={current.label}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 640px"
					/>
				</div>
			</div>

			<ul className="grid grid-cols-5 gap-1.5 sm:gap-2" role="tablist" aria-label="Event photos">
				{withSrc.map((photo, i) => {
					const selected = i === index;
					return (
						<li key={photo.src ?? photo.label}>
							<button
								type="button"
								role="tab"
								aria-selected={selected}
								aria-label={photo.label}
								onClick={() => setIndex(i)}
								className={cn(
									'group relative block w-full overflow-hidden rounded-md border bg-surface transition-[border-color,opacity] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
									selected
										? 'border-foreground/40 opacity-100'
										: 'border-border opacity-70 hover:opacity-100',
								)}
							>
								<span className="relative block aspect-4/3">
									<Image
										src={photo.src!}
										alt=""
										fill
										className="object-cover"
										sizes="120px"
									/>
								</span>
							</button>
						</li>
					);
				})}
			</ul>

			<figcaption className="font-mono text-xs text-muted">
				{index + 1}/{withSrc.length} · {current.label}
			</figcaption>
		</figure>
	);
}
