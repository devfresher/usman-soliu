'use client';

import { motion } from 'framer-motion';

export function DecorativeBackground() {
	return (
		<div className="pointer-events-none fixed inset-0 overflow-hidden">
			{/* Glowing orb - top right */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-transparent blur-3xl"
			/>

			{/* Geometric shapes */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 0.1, x: 0 }}
				transition={{ duration: 1.5, delay: 0.5 }}
				className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-foreground/10"
			/>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 0.08, y: 0 }}
				transition={{ duration: 1.5, delay: 0.7 }}
				className="absolute bottom-[15%] right-[15%] h-24 w-24 rotate-12 border border-foreground/10"
			/>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 0.06, scale: 1 }}
				transition={{ duration: 1.5, delay: 0.9 }}
				className="absolute left-[20%] bottom-[25%] h-16 w-16 rounded-full border border-foreground/10"
			/>

			{/* Subtle gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/50" />
		</div>
	);
}

export function FloatingShape({ delay = 0, className = '' }: { delay?: number; className?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 0.08, y: 0 }}
			transition={{ duration: 1.5, delay, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
			className={className}
		/>
	);
}


