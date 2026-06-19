import { Code2, Layers, Database, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionLabel } from '@/components/section-label';

const stackCategories: {
	label: string;
	icon: LucideIcon;
	items: string[];
}[] = [
	{
		label: 'Languages & Runtimes',
		icon: Code2,
		items: ['Node.js', 'TypeScript', 'Golang', 'PHP'],
	},
	{
		label: 'Frameworks',
		icon: Layers,
		items: ['NestJS', 'Express.js'],
	},
	{
		label: 'Data',
		icon: Database,
		items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
	},
	{
		label: 'Infrastructure',
		icon: Cloud,
		items: ['AWS', 'Docker', 'CI/CD'],
	},
];

export default function TechStack() {
	return (
		<section className="space-y-8">
			<div className="space-y-3">
				<SectionLabel>Toolkit</SectionLabel>
				<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
					What I work with
				</h2>
				<p className="max-w-xl text-sm text-muted sm:text-base">
					Tools change. I pick what fits the problem — not what is trending.
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				{stackCategories.map(({ label, icon: Icon, items }) => (
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
				))}
			</div>
		</section>
	);
}
