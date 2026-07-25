'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.25, 0.1, 0.25, 1] as const;

const inViewOptions = {
	once: true,
	amount: 0.2,
	margin: '0px 0px -10% 0px' as const,
};

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

/** Fade + rise when scrolled into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, inViewOptions);
	const reduceMotion = useReducedMotion();

	const transition: Transition = {
		duration: 0.45,
		ease,
		delay: reduceMotion ? 0 : delay,
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: 18 }}
			animate={
				reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
			}
			transition={transition}
		>
			{children}
		</motion.div>
	);
}

interface RevealStaggerProps {
	children: React.ReactNode;
	className?: string;
}

/** Layout wrapper. Pair with RevealItem index for stagger. */
export function RevealStagger({ children, className }: RevealStaggerProps) {
	return <div className={className}>{children}</div>;
}

interface RevealItemProps {
	children: React.ReactNode;
	className?: string;
	index?: number;
	stagger?: number;
}

export function RevealItem({
	children,
	className,
	index = 0,
	stagger = 0.09,
}: RevealItemProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, inViewOptions);
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			ref={ref}
			className={cn(className)}
			initial={reduceMotion ? false : { opacity: 0, y: 20 }}
			animate={
				reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
			}
			transition={{
				duration: 0.45,
				ease,
				delay: reduceMotion ? 0 : index * stagger,
			}}
		>
			{children}
		</motion.div>
	);
}

/** Hero / above-the-fold entrance. Runs on mount, no scroll needed. */
export function RevealOnMount({
	children,
	className,
	delay = 0,
}: RevealProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: 14 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.55,
				ease,
				delay: reduceMotion ? 0 : delay,
			}}
		>
			{children}
		</motion.div>
	);
}
