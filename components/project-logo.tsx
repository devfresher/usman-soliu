'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectLogoProps {
	name: string;
	logo?: string;
	logoLight?: string;
	logoDark?: string;
	/** plain = logo on card surface; tile = dark badge (legacy contrast fallback) */
	appearance?: 'plain' | 'tile';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const plainLogoStyles = {
	sm: 'max-h-8 max-w-[6.5rem]',
	md: 'max-h-10 max-w-[8rem]',
	lg: 'max-h-12 max-w-[10rem]',
} as const;

const tileLogoStyles = {
	sm: { box: 'h-9 px-3', img: 'max-h-5 max-w-[5.5rem]' },
	md: { box: 'h-11 px-4', img: 'max-h-6 max-w-[6.5rem]' },
	lg: { box: 'h-14 px-5', img: 'max-h-8 max-w-[8.5rem]' },
} as const;

const logoTileClass =
	'rounded-md border border-border bg-logo-tile transition-colors duration-200';

function initials(name: string) {
	return name
		.split(/\s+/)
		.map((w) => w[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();
}

function hasThemeVariants(logoLight?: string, logoDark?: string) {
	return Boolean(logoLight && logoDark && logoLight !== logoDark);
}

function LogoImage({
	src,
	name,
	size,
	className,
	appearance,
}: {
	src: string;
	name: string;
	size: 'sm' | 'md' | 'lg';
	className?: string;
	appearance: 'plain' | 'tile';
}) {
	const imgClass =
		appearance === 'plain'
			? cn('h-auto w-auto object-contain', plainLogoStyles[size], className)
			: cn('h-auto w-auto object-contain', tileLogoStyles[size].img, className);

	return (
		<Image
			src={src}
			alt={`${name} logo`}
			width={160}
			height={48}
			unoptimized
			className={imgClass}
		/>
	);
}

export function ProjectLogo({
	name,
	logo,
	logoLight,
	logoDark,
	appearance = 'plain',
	size = 'md',
	className,
}: ProjectLogoProps) {
	if (hasThemeVariants(logoLight, logoDark)) {
		if (appearance === 'plain') {
			return (
				<div className={cn('inline-flex shrink-0 items-center', className)}>
					<LogoImage
						src={logoLight!}
						name={name}
						size={size}
						appearance={appearance}
						className="dark:hidden"
					/>
					<LogoImage
						src={logoDark!}
						name={name}
						size={size}
						appearance={appearance}
						className="hidden dark:block"
					/>
				</div>
			);
		}

		const tile = tileLogoStyles[size];
		return (
			<div className={cn('inline-flex shrink-0 items-center', className)}>
				<div
					className={cn(
						'inline-flex items-center justify-center dark:hidden',
						logoTileClass,
						tile.box
					)}
				>
					<LogoImage
						src={logoLight!}
						name={name}
						size={size}
						appearance={appearance}
					/>
				</div>
				<div
					className={cn(
						'hidden items-center justify-center dark:inline-flex',
						logoTileClass,
						tile.box
					)}
				>
					<LogoImage src={logoDark!} name={name} size={size} appearance={appearance} />
				</div>
			</div>
		);
	}

	const src = logo ?? logoLight ?? logoDark;

	if (!src) {
		return (
			<span
				className={cn(
					'inline-flex shrink-0 font-mono text-sm font-medium text-muted',
					className
				)}
			>
				{initials(name)}
			</span>
		);
	}

	if (appearance === 'plain') {
		return (
			<div className={cn('inline-flex shrink-0 items-center', className)}>
				<LogoImage src={src} name={name} size={size} appearance={appearance} />
			</div>
		);
	}

	const tile = tileLogoStyles[size];

	return (
		<div
			className={cn(
				'inline-flex shrink-0 items-center justify-center',
				logoTileClass,
				tile.box,
				className
			)}
		>
			<LogoImage src={src} name={name} size={size} appearance={appearance} />
		</div>
	);
}
