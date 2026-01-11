import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t border-gray-200/60 bg-background">
			<div className="mx-auto w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
						<p className="text-sm text-muted">
							© {new Date().getFullYear()} Usman Soliu. All rights reserved.
						</p>
						<div className="flex items-center gap-8">
							<a
								href="https://github.com/devfresher"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted transition-colors hover:text-foreground"
								aria-label="GitHub"
							>
								<Github size={20} />
							</a>
							<a
								href="https://linkedin.com/in/devfresher"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted transition-colors hover:text-foreground"
								aria-label="LinkedIn"
							>
								<Linkedin size={20} />
							</a>
							<a
								href="mailto:hello@devfresher.me"
								className="text-muted transition-colors hover:text-foreground"
								aria-label="Email"
							>
								<Mail size={20} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
