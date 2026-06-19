'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

interface ProjectLogoProps {
	name: string;
	logo?: string;
	logoLight?: string;
	logoDark?: string;
	logoInlineWordmark?: boolean;
	logoFullLockup?: boolean;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const inlineWordmarkStyles = {
	sm: { box: 'h-9 gap-2 px-2.5', icon: 'h-6 w-6', text: 'text-sm font-semibold' },
	md: { box: 'h-11 gap-2.5 px-3', icon: 'h-8 w-8', text: 'text-base font-semibold' },
	lg: { box: 'h-14 gap-3 px-3.5', icon: 'h-10 w-10', text: 'text-lg font-semibold' },
} as const;

const wideSizeStyles = {
	sm: { box: 'h-9 px-3', img: 'max-h-5 max-w-[5.5rem]' },
	md: { box: 'h-11 px-4', img: 'max-h-6 max-w-[6.5rem]' },
	lg: { box: 'h-14 px-5', img: 'max-h-8 max-w-[8.5rem]' },
} as const;

const fullLockupStyles = {
	sm: { box: 'h-10 px-2.5', img: 'max-h-7 max-w-[5.5rem]' },
	md: { box: 'h-12 px-3', img: 'max-h-9 max-w-[6.5rem]' },
	lg: { box: 'h-14 px-3.5', img: 'max-h-11 max-w-[8rem]' },
} as const;

const logoTileClass =
	'rounded-md border border-border bg-logo-tile transition-colors duration-200';

function useMounted() {
	return useSyncExternalStore(
		() => () => {},
		() => true,
		() => false
	);
}

function initials(name: string) {
	return name
		.split(/\s+/)
		.map((w) => w[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();
}

function resolveLogoSrc(
	theme: string | undefined,
	logo?: string,
	logoLight?: string,
	logoDark?: string
) {
	if (theme === 'light' && logoLight) return logoLight;
	if (theme === 'dark' && logoDark) return logoDark;
	return logoDark ?? logoLight ?? logo;
}

export function ProjectLogo({
	name,
	logo,
	logoLight,
	logoDark,
	logoInlineWordmark = false,
	logoFullLockup = false,
	size = 'md',
	className,
}: ProjectLogoProps) {
	const { resolvedTheme } = useTheme();
	const mounted = useMounted();

	const src = mounted
		? resolveLogoSrc(resolvedTheme, logo, logoLight, logoDark)
		: logoDark ?? logo ?? logoLight;

	if (logoInlineWordmark && src) {
		const styles = inlineWordmarkStyles[size];
		return (
			<div
				className={cn(
					'inline-flex shrink-0 items-center',
					logoTileClass,
					styles.box,
					className
				)}
			>
				<Image
					src={src}
					alt=""
					width={40}
					height={40}
					className={cn('shrink-0 object-contain', styles.icon)}
					aria-hidden
				/>
				<span className={cn('tracking-tight text-logo-tile-foreground', styles.text)}>
					{name}
				</span>
			</div>
		);
	}

	const tile = logoFullLockup ? fullLockupStyles[size] : wideSizeStyles[size];

	return (
		<div
			className={cn(
				'inline-flex shrink-0 items-center justify-center',
				logoTileClass,
				tile.box,
				className
			)}
		>
			{src ? (
				<Image
					src={src}
					alt={`${name} logo`}
					width={160}
					height={48}
					className={cn('h-auto w-auto object-contain', tile.img)}
				/>
			) : (
				<span className="font-mono text-xs font-medium text-logo-tile-foreground/70">
					{initials(name)}
				</span>
			)}
		</div>
	);
}
