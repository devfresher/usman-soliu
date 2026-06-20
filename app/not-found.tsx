import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import Button from '@/components/button';

export default function NotFound() {
	return (
		<PageContainer className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-20 text-center">
			<p className="font-mono text-xs text-muted">404</p>
			<h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
				Page not found
			</h1>
			<p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
				The page you are looking for does not exist or may have moved.
			</p>
			<div className="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button href="/">
					Back home
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
				<Button href="/contact" variant="secondary">
					Contact
				</Button>
			</div>
			<Link
				href="/projects"
				className="mt-6 text-sm text-muted transition-colors hover:text-foreground"
			>
				View case studies
			</Link>
		</PageContainer>
	);
}
