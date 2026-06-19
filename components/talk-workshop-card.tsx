import { Calendar } from 'lucide-react';
import { Card } from '@/components/card';
import { ImageCarousel } from '@/components/image-carousel';
import type { TalkOrWorkshop } from '@/lib/data/mentorship';

interface TalkWorkshopCardProps {
	session: TalkOrWorkshop;
}

export function TalkWorkshopCard({ session }: TalkWorkshopCardProps) {
	const isUpcoming = session.status === 'upcoming';
	const slides = session.slides ?? [];
	const photos = session.photos ?? [];
	const showPhotos = photos.length > 0 || session.status === 'past';

	return (
		<Card>
			<div className="mb-4 flex flex-wrap items-center gap-2">
				{isUpcoming && (
					<span className="rounded-full border border-accent/30 bg-accent-muted px-2.5 py-0.5 font-mono text-[11px] text-accent">
						Upcoming
					</span>
				)}
				<span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted capitalize">
					{session.type}
				</span>
				<span className="flex items-center gap-1 font-mono text-xs text-muted">
					<Calendar className="h-3 w-3" />
					{session.date}
				</span>
			</div>

			<h3 className="mb-1 text-base font-semibold text-foreground">{session.title}</h3>
			<p className="mb-3 font-mono text-xs text-muted">{session.event}</p>
			<p className="mb-6 text-sm leading-relaxed text-muted">{session.description}</p>

			<div className="space-y-6">
				{(slides.length > 0 || isUpcoming) && (
					<div className="space-y-2">
						<p className="font-mono text-xs text-muted">Slides</p>
						<ImageCarousel
							items={slides.map((slide) => ({
								label: slide.label,
								src: slide.src,
								href: slide.href,
							}))}
							placeholder="Slides coming soon"
						/>
					</div>
				)}

				{showPhotos && (
					<div className="space-y-2">
						<p className="font-mono text-xs text-muted">Event photos</p>
						<ImageCarousel
							items={photos.map((photo) => ({
								label: photo.label,
								src: photo.src,
								href: photo.href,
							}))}
							placeholder="Event photos coming soon"
						/>
					</div>
				)}
			</div>
		</Card>
	);
}
