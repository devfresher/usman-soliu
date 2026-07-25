import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

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

function trimField(value: unknown, maxLength: number): string {
	return String(value ?? '')
		.trim()
		.slice(0, maxLength);
}

export async function POST(request: Request) {
	try {
		const rateLimit = checkRateLimit(getClientIp(request));
		if (!rateLimit.allowed) {
			return NextResponse.json(
				{ error: 'Too many requests. Please try again later.' },
				{
					status: 429,
					headers: rateLimit.retryAfterSeconds
						? { 'Retry-After': String(rateLimit.retryAfterSeconds) }
						: undefined,
				},
			);
		}

		const body = await request.json();
		const { name, email, subject, message, website } = body;

		// Honeypot: bots fill hidden fields; respond OK without sending mail.
		if (website) {
			return NextResponse.json({ success: true });
		}

		const safeName = trimField(name, MAX_FIELD_LENGTH);
		const safeEmail = trimField(email, MAX_FIELD_LENGTH);
		const safeSubject = trimField(subject, MAX_FIELD_LENGTH);
		const safeMessage = trimField(message, MAX_MESSAGE_LENGTH);

		if (!safeName || !safeEmail || !safeSubject || !safeMessage) {
			return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
		}

		if (!EMAIL_PATTERN.test(safeEmail)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
		}

		const resend = getResend();
		if (!resend) {
			console.warn('Resend API key not configured.');
			return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
		}

		const recipientEmail = process.env.CONTACT_EMAIL || 'hello@devfresher.me';
		const escapedName = escapeHtml(safeName);
		const escapedEmail = escapeHtml(safeEmail);
		const escapedSubject = escapeHtml(safeSubject);
		const escapedMessage = escapeHtml(safeMessage).replace(/\n/g, '<br>');

		const emailHtml = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${escapedName}</p>
			<p><strong>Email:</strong> ${escapedEmail}</p>
			<p><strong>Subject:</strong> ${escapedSubject}</p>
			<p><strong>Message:</strong></p>
			<p>${escapedMessage}</p>
		`;

		const emailResult = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
			to: recipientEmail,
			replyTo: safeEmail,
			subject: `Portfolio Contact: ${safeSubject}`,
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
