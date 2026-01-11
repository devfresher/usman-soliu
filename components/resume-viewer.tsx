'use client';

import { useState, useEffect } from 'react';
import { X, Download, Terminal, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ResumeViewerProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isOpen) {
			setIsLoading(true);
			// Reset loading state after a brief moment
			const timer = setTimeout(() => setIsLoading(false), 500);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	// Google Docs viewer URL (using the document ID from the link)
	const resumeUrl = 'https://docs.google.com/document/d/1dXstTbyEnXgT-uJIUk1gtfZRW7r8bMkIC51g3MgRY7w/preview';
	const downloadUrl = 'https://docs.google.com/document/d/1dXstTbyEnXgT-uJIUk1gtfZRW7r8bMkIC51g3MgRY7w/export?format=pdf';

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className="fixed inset-4 z-[80] flex flex-col overflow-hidden rounded-2xl border border-gray-200/50 bg-background shadow-2xl sm:inset-8 md:inset-12 lg:inset-16"
					>
						{/* Terminal-style header */}
						<div className="flex items-center justify-between border-b border-gray-200/60 bg-gray-50/50 px-4 py-3 sm:px-6 sm:py-4">
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
									<FileText className="h-4 w-4" />
								</div>
								<div>
									<div className="flex items-center gap-2">
										<Terminal className="h-3.5 w-3.5 text-accent" />
										<span className="font-mono text-sm font-semibold text-foreground">
											resume.tsx
										</span>
									</div>
									<p className="text-xs text-muted">Usman Soliu - Resume</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								{/* Download button */}
								<a
									href={downloadUrl}
									download
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 rounded-lg border border-gray-200/50 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-gray-100 hover:border-gray-300"
								>
									<Download className="h-3.5 w-3.5" />
									<span className="hidden sm:inline">Download</span>
								</a>
								{/* Close button */}
								<button
									onClick={onClose}
									className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-gray-100"
									aria-label="Close resume viewer"
								>
									<X size={18} />
								</button>
							</div>
						</div>

						{/* Document viewer */}
						<div className="relative flex-1 overflow-hidden bg-gray-50">
							{isLoading && (
								<div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
									<div className="flex flex-col items-center gap-3">
										<motion.div
											animate={{ rotate: 360 }}
											transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
											className="h-8 w-8 rounded-full border-2 border-foreground/20 border-t-foreground"
										/>
										<p className="text-sm text-muted font-mono">Loading resume...</p>
									</div>
								</div>
							)}
							<iframe
								src={resumeUrl}
								className="h-full w-full border-0"
								onLoad={() => setIsLoading(false)}
								title="Resume Viewer"
								allow="fullscreen"
							/>
						</div>

						{/* Terminal-style footer */}
						<div className="border-t border-gray-200/60 bg-gray-50/50 px-4 py-2 sm:px-6">
							<div className="flex items-center gap-2 font-mono text-xs text-muted">
								<span className="text-accent">$</span>
								<span>resume viewer ready</span>
								<motion.span
									animate={{ opacity: [1, 0.3, 1] }}
									transition={{ duration: 1.5, repeat: Infinity }}
									className="text-accent"
								>
									_
								</motion.span>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
