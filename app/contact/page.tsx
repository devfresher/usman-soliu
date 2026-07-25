'use client';

import { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/card';
import Button from '@/components/button';
import { OpenToWorkBadge } from '@/components/open-to-work-badge';
import ResumeViewer from '@/components/resume-viewer';
import { contactIntro, openToRoles, socialLinks, siteConfig } from '@/lib/data/site';

const inputClassName =
	'w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		website: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const [isResumeOpen, setIsResumeOpen] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({ name: '', email: '', subject: '', message: '', website: '' });
			} else if (response.status === 429) {
				setSubmitStatus('error');
			} else {
				setSubmitStatus('error');
			}
		} catch {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<PageContainer className="space-y-12">
			<div className="space-y-4">
				<OpenToWorkBadge />
				<PageHeader
					label="Contact"
					title="Let's talk"
					description={contactIntro}
				/>
			</div>

			<div className="grid gap-12 lg:grid-cols-5">
				<div className="space-y-8 lg:col-span-3">
					<Card>
						<form onSubmit={handleSubmit} className="relative space-y-5">
							<div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
								<label htmlFor="website">Website</label>
								<input
									type="text"
									id="website"
									name="website"
									tabIndex={-1}
									autoComplete="off"
									value={formData.website}
									onChange={(e) => setFormData({ ...formData, website: e.target.value })}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium text-foreground">
									Name
								</label>
								<input
									type="text"
									id="name"
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className={inputClassName}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium text-foreground">
									Email
								</label>
								<input
									type="email"
									id="email"
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className={inputClassName}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="subject" className="text-sm font-medium text-foreground">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									required
									value={formData.subject}
									onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									className={inputClassName}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium text-foreground">
									Message
								</label>
								<textarea
									id="message"
									required
									rows={5}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className={`${inputClassName} resize-none`}
								/>
							</div>

							<Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
								{isSubmitting ? (
									'Sending...'
								) : (
									<>
										<Send className="mr-2 h-4 w-4" />
										Send message
									</>
								)}
							</Button>

							{submitStatus === 'success' && (
								<p className="text-sm text-accent">Message sent. I will get back to you.</p>
							)}
							{submitStatus === 'error' && (
								<p className="text-sm text-red-500">
									Something went wrong. Email me at {siteConfig.email} directly.
								</p>
							)}

							<p className="text-xs leading-relaxed text-muted">
								Your message is sent by email only. It is not stored on this site. I use
								it solely to reply to you.
							</p>
						</form>
					</Card>
				</div>

				<div className="space-y-6 lg:col-span-2">
					<Card>
						<h3 className="mb-3 font-mono text-xs text-muted">Open to</h3>
						<ul className="space-y-2">
							{openToRoles.map((role) => (
								<li key={role} className="text-sm text-foreground">
									{role}
								</li>
							))}
						</ul>
						<p className="mt-4 text-sm text-muted">
							Also happy to discuss mentorship, workshops, and backend consulting.
						</p>
					</Card>

					<Card className="space-y-4">
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : undefined}
								rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="group flex items-center justify-between text-sm transition-colors"
							>
								<span className="text-foreground group-hover:text-accent">{link.label}</span>
								<ArrowUpRight className="h-4 w-4 text-muted group-hover:text-foreground" />
							</a>
						))}
						<button
							type="button"
							onClick={() => setIsResumeOpen(true)}
							className="group flex w-full items-center justify-between text-sm transition-colors"
						>
							<span className="text-foreground group-hover:text-accent">Resume</span>
							<ArrowUpRight className="h-4 w-4 text-muted group-hover:text-foreground" />
						</button>
					</Card>
				</div>
			</div>

			<ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
		</PageContainer>
	);
}
