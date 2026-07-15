'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideItem {
	label: string;
	src?: string;
	href?: string;
}

interface ImageCarouselProps {
	items: SlideItem[];
	className?: string;
	placeholder?: string;
	/** Persistent download/open action (e.g. full PDF deck) shown under the gallery */
	actionHref?: string;
	actionLabel?: string;
}

function LinkOnlyFrame({ label, href }: { label: string; href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
		>
			<FileText className="h-8 w-8 text-accent" aria-hidden />
			<div className="space-y-1">
				<p className="text-sm font-medium text-foreground">{label}</p>
				<p className="inline-flex items-center gap-1 text-xs text-accent">
					Open PDF
					<ArrowUpRight className="h-3 w-3" aria-hidden />
				</p>
			</div>
		</a>
	);
}

export function ImageCarousel({
	items,
	className,
	placeholder = 'Photo coming soon',
	actionHref,
	actionLabel = 'Download PDF',
}: ImageCarouselProps) {
	const [index, setIndex] = useState(0);
	const hasMultiple = items.length > 1;
	const current = items[index];
	const itemHref = current?.href ?? actionHref;
	const isLinkOnly = Boolean(itemHref && !current?.src);

	if (items.length === 0) {
		if (actionHref) {
			return (
				<div
					className={cn(
						'aspect-video overflow-hidden rounded-lg border border-border bg-surface',
						className
					)}
				>
					<LinkOnlyFrame label={actionLabel} href={actionHref} />
				</div>
			);
		}

		return (
			<div
				className={cn(
					'flex aspect-video items-center justify-center rounded-lg border border-border bg-surface',
					className
				)}
			>
				<div className="flex flex-col items-center gap-2 text-muted">
					<ImageIcon className="h-6 w-6" />
					<span className="text-xs">{placeholder}</span>
				</div>
			</div>
		);
	}

	const frame = (
		<div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface">
			{current?.src ? (
				itemHref ? (
					<a
						href={itemHref}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
						aria-label={`${current.label} — ${actionLabel}`}
					>
						<Image
							src={current.src}
							alt={current.label}
							fill
							className="object-cover transition-opacity hover:opacity-95"
							sizes="(max-width: 768px) 100vw, 600px"
						/>
					</a>
				) : (
					<Image
						src={current.src}
						alt={current.label}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 600px"
					/>
				)
			) : itemHref ? (
				<LinkOnlyFrame label={current?.label ?? actionLabel} href={itemHref} />
			) : (
				<div className="flex h-full items-center justify-center">
					<div className="flex flex-col items-center gap-2 text-muted">
						<ImageIcon className="h-6 w-6" />
						<span className="text-xs">{current?.label ?? placeholder}</span>
					</div>
				</div>
			)}

			{hasMultiple && (
				<>
					<button
						type="button"
						onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
						className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-md border border-border bg-background/90 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-hover"
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={() => setIndex((i) => (i + 1) % items.length)}
						className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md border border-border bg-background/90 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-hover"
						aria-label="Next slide"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
					<div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
						{items.map((_, idx) => (
							<button
								key={idx}
								type="button"
								onClick={() => setIndex(idx)}
								className={cn(
									'h-1.5 rounded-full transition-all',
									index === idx ? 'w-5 bg-foreground' : 'w-1.5 bg-foreground/30'
								)}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);

	return (
		<div className={cn('relative space-y-2', className)}>
			{frame}

			{(current?.label || actionHref) && !isLinkOnly && (
				<div className="flex flex-wrap items-center justify-between gap-2">
					{current?.label && (
						<p className="font-mono text-xs text-muted">
							{hasMultiple ? `${index + 1}/${items.length} · ` : null}
							{current.label}
						</p>
					)}
					{actionHref && (
						<a
							href={actionHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-foreground"
						>
							{actionLabel}
							<ArrowUpRight className="h-3 w-3" aria-hidden />
						</a>
					)}
				</div>
			)}
		</div>
	);
}
