'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface MotionProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export function MotionSection({ children, delay = 0, className }: MotionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			className={className}
		>
			{children}
		</motion.section>
	);
}

export function MotionDiv({ children, delay = 0, className }: MotionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}



