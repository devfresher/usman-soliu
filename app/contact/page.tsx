'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, MessageCircle } from 'lucide-react';
import Button from '@/components/button';
import { DecorativeBackground } from '@/components/decorative-bg';
import ResumeViewer from '@/components/resume-viewer';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
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
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({ name: '', email: '', subject: '', message: '' });
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative">
			<DecorativeBackground />

			<div className="relative mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
						{/* Left Column - Header & Form */}
						<div className="space-y-10">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="space-y-6"
							>
								<div className="flex items-center gap-3">
									<div className="h-px w-12 bg-foreground/20" />
									<span className="text-sm font-medium uppercase tracking-wider text-muted">
										Contact
									</span>
								</div>
								<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
									Let's Connect
								</h1>
								<p className="text-base text-muted sm:text-lg">
									Open to opportunities, mentorship, and meaningful
									collaborations.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="rounded-2xl border border-gray-200/50 bg-background/50 p-8 backdrop-blur-sm sm:p-10"
							>
								<form onSubmit={handleSubmit} className="flex flex-col gap-7">
									<div className="flex flex-col gap-3">
										<label
											htmlFor="name"
											className="text-sm font-medium text-foreground"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											className="rounded-lg border border-gray-300/80 bg-background px-4 py-3 text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
										/>
									</div>

									<div className="flex flex-col gap-3">
										<label
											htmlFor="email"
											className="text-sm font-medium text-foreground"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											className="rounded-lg border border-gray-300/80 bg-background px-4 py-3 text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
										/>
									</div>

									<div className="flex flex-col gap-3">
										<label
											htmlFor="subject"
											className="text-sm font-medium text-foreground"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											required
											value={formData.subject}
											onChange={(e) =>
												setFormData({
													...formData,
													subject: e.target.value,
												})
											}
											className="rounded-lg border border-gray-300/80 bg-background px-4 py-3 text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
										/>
									</div>

									<div className="flex flex-col gap-3">
										<label
											htmlFor="message"
											className="text-sm font-medium text-foreground"
										>
											Message
										</label>
										<textarea
											id="message"
											required
											rows={6}
											value={formData.message}
											onChange={(e) =>
												setFormData({
													...formData,
													message: e.target.value,
												})
											}
											className="rounded-lg border border-gray-300/80 bg-background px-4 py-3 text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
										/>
									</div>

									<Button
										type="submit"
										variant="primary"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											'Sending...'
										) : (
											<>
												<Send className="mr-2 h-4 w-4" />
												Send Message
											</>
										)}
									</Button>

									{submitStatus === 'success' && (
										<p className="mt-2 text-sm text-green-600">
											Message sent successfully!
										</p>
									)}
									{submitStatus === 'error' && (
										<p className="mt-2 text-sm text-red-600">
											Failed to send message. Please try again or email
											directly.
										</p>
									)}
								</form>
							</motion.div>
						</div>

						{/* Right Column - Contact Links & Visual */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="space-y-8"
						>
							{/* Animated Icon Card - Prominent at Top */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="relative h-64 w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-background shadow-lg"
							>
								<div className="absolute inset-0 flex items-center justify-center">
									<motion.div
										animate={{
											scale: [1, 1.2, 1],
											rotate: [0, 180, 360],
											y: [0, -10, 0],
										}}
										transition={{
											duration: 8,
											repeat: Infinity,
											ease: 'easeInOut',
										}}
										className="text-6xl text-foreground/20"
									>
										💬
									</motion.div>
								</div>
								{/* Terminal label */}
								<div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-gray-200/50">
									<Mail className="h-3 w-3 text-accent" />
									<span className="font-mono text-[10px] text-foreground">
										contact.tsx
									</span>
								</div>
							</motion.div>

							<div className="space-y-6">
								<a
									href="mailto:hello@devfresher.me"
									className="group flex items-center gap-5 rounded-xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
										<Mail size={24} />
									</div>
									<div className="flex-1">
										<h3 className="mb-2 font-semibold text-foreground">
											Email
										</h3>
										<p className="text-sm text-muted">hello@devfresher.me</p>
									</div>
								</a>

								<a
									href="https://linkedin.com/in/devfresher"
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-5 rounded-xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
										<Linkedin size={24} />
									</div>
									<div className="flex-1">
										<h3 className="mb-2 font-semibold text-foreground">
											LinkedIn
										</h3>
										<p className="text-sm text-muted">Connect professionally</p>
									</div>
								</a>

								<a
									href="https://github.com/devfresher"
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-5 rounded-xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
										<Github size={24} />
									</div>
									<div className="flex-1">
										<h3 className="mb-2 font-semibold text-foreground">
											GitHub
										</h3>
										<p className="text-sm text-muted">View my code</p>
									</div>
								</a>

								<button
									onClick={() => setIsResumeOpen(true)}
									className="group flex w-full items-center gap-5 rounded-xl border border-gray-200/50 bg-background/50 p-7 backdrop-blur-sm transition-all hover:border-gray-300/80 hover:shadow-lg"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
										<FileText size={24} />
									</div>
									<div className="flex-1 text-left">
										<h3 className="mb-2 font-semibold text-foreground">
											My Resume
										</h3>
										<p className="text-sm text-muted">View resume</p>
									</div>
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Resume Viewer Modal */}
			<ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
		</div>
	);
}
