import { Code2, Layers, Database, Radio, Cloud, Plug } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionLabel } from '@/components/section-label';
import { techStackCategories, techStackIntro } from '@/lib/data/tech-stack';

const categoryIcons: Record<string, LucideIcon> = {
	'Languages & Runtimes': Code2,
	'Frameworks & ORM': Layers,
	'Data & cache': Database,
	'Messaging & real-time': Radio,
	'Infrastructure & ops': Cloud,
	Integrations: Plug,
};

export default function TechStack() {
	return (
		<section className="space-y-8">
			<div className="space-y-3">
				<SectionLabel>Toolkit</SectionLabel>
				<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
					What I work with
				</h2>
				<p className="max-w-2xl text-sm text-muted sm:text-base">{techStackIntro}</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{techStackCategories.map(({ label, items }) => {
					const Icon = categoryIcons[label] ?? Code2;

					return (
						<div
							key={label}
							className="rounded-lg border border-border bg-surface p-5"
						>
							<div className="mb-3 flex items-center gap-2">
								<div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface-hover text-accent">
									<Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
								</div>
								<p className="font-mono text-xs text-muted">{label}</p>
							</div>
							<div className="flex flex-wrap gap-2">
								{items.map((item) => (
									<span
										key={item}
										className="rounded-md border border-border px-2.5 py-1 text-sm text-foreground"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
