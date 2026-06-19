'use client';

import { useState } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import Button from '@/components/button';
import ResumeViewer from '@/components/resume-viewer';

export default function HomeActions() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
				<Button href="/projects">
					Case studies
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
				<Button variant="secondary" onClick={() => setIsResumeOpen(true)}>
					<Download className="mr-2 h-4 w-4" />
					Resume
				</Button>
			</div>
			<ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
		</>
	);
}
