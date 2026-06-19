import { socialLinks } from '@/lib/data/site';

export default function Footer() {
	return (
		<footer className="border-t border-border">
			<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
				<p className="font-mono text-xs text-muted">
					© {new Date().getFullYear()} Usman Soliu
				</p>
				<div className="flex items-center gap-6">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={link.href.startsWith('http') ? '_blank' : undefined}
							rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className="text-xs text-muted transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
