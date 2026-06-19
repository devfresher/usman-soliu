import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) return null;
	return new Resend(apiKey);
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		if (!name || !email || !subject || !message) {
			return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
		}

		const resend = getResend();
		if (!resend) {
			console.warn('Resend API key not configured.');
			return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
		}

		const recipientEmail = process.env.CONTACT_EMAIL || 'hello@devfresher.me';
		const safeName = escapeHtml(String(name));
		const safeEmail = escapeHtml(String(email));
		const safeSubject = escapeHtml(String(subject));
		const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br>');

		const emailHtml = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${safeName}</p>
			<p><strong>Email:</strong> ${safeEmail}</p>
			<p><strong>Subject:</strong> ${safeSubject}</p>
			<p><strong>Message:</strong></p>
			<p>${safeMessage}</p>
		`;

		const emailResult = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
			to: recipientEmail,
			replyTo: String(email),
			subject: `Portfolio Contact: ${String(subject)}`,
			html: emailHtml,
		});

		return NextResponse.json({
			success: true,
			emailSent: !!emailResult,
		});
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
	}
}
