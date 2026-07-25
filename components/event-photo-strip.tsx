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
}: {
	photo: SessionMedia;
	className?: string;
	priority?: boolean;
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

	const image = (
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
				className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
				sizes="(max-width: 768px) 100vw, 320px"
			/>
		</div>
	);

	if (photo.href) {
		return (
			<a
				href={photo.href}
				target="_blank"
				rel="noopener noreferrer"
				className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				aria-label={photo.label}
			>
				{image}
			</a>
		);
	}

	return <div className="group">{image}</div>;
}

export function EventPhotoStrip({
	photos,
	className,
	placeholder = 'Event photos coming soon',
}: EventPhotoStripProps) {
	const withSrc = photos.filter((photo) => photo.src);

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

	return (
		<figure className={cn('space-y-2', className)}>
			<ul
				className={cn(
					'grid gap-2 sm:gap-3',
					withSrc.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3',
				)}
			>
				{withSrc.map((photo, index) => (
					<li key={photo.src ?? photo.label}>
						<PhotoFrame photo={photo} priority={index === 0} />
					</li>
				))}
			</ul>
			{withSrc.length <= 3 && (
				<figcaption className="font-mono text-xs text-muted">
					{withSrc.map((photo) => photo.label).join(' · ')}
				</figcaption>
			)}
		</figure>
	);
}
