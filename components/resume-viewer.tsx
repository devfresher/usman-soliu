'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ResumeViewerProps {
	isOpen: boolean;
	onClose: () => void;
}

const resumeUrl =
	'https://docs.google.com/document/d/1dXstTbyEnXgT-uJIUk1gtfZRW7r8bMkIC51g3MgRY7w/preview';
const downloadUrl =
	'https://docs.google.com/document/d/1dXstTbyEnXgT-uJIUk1gtfZRW7r8bMkIC51g3MgRY7w/export?format=pdf';

function ResumeFrame() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="relative flex-1 bg-surface">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-background">
					<p className="font-mono text-xs text-muted">Loading...</p>
				</div>
			)}
			<iframe
				src={resumeUrl}
				className="h-full w-full border-0"
				onLoad={() => setIsLoading(false)}
				title="Resume"
			/>
		</div>
	);
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.button
						type="button"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
						aria-label="Close resume viewer"
					/>
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 16 }}
						className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-xl sm:inset-8 md:inset-12"
					>
						<div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
							<p className="text-sm font-medium text-foreground">Resume</p>
							<div className="flex items-center gap-2">
								<a
									href={downloadUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-hover"
								>
									<Download className="h-3.5 w-3.5" />
									Download
								</a>
								<button
									type="button"
									onClick={onClose}
									className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
									aria-label="Close"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
						</div>
						<ResumeFrame />
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
