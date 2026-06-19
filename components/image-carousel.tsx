'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
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
}

export function ImageCarousel({ items, className, placeholder = 'Photo coming soon' }: ImageCarouselProps) {
	const [index, setIndex] = useState(0);
	const hasMultiple = items.length > 1;
	const current = items[index];

	if (items.length === 0) {
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

	return (
		<div className={cn('relative', className)}>
			<div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface">
				{current?.src ? (
					<Image
						src={current.src}
						alt={current.label}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 600px"
					/>
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
							className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background/90 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-hover"
							aria-label="Previous slide"
						>
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							type="button"
							onClick={() => setIndex((i) => (i + 1) % items.length)}
							className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background/90 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-surface-hover"
							aria-label="Next slide"
						>
							<ChevronRight className="h-4 w-4" />
						</button>
						<div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
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

			{current?.href && (
				<a
					href={current.href}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 inline-block text-xs text-accent hover:underline"
				>
					View slides
				</a>
			)}
		</div>
	);
}
