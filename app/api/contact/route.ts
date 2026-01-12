import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		// Validate input
		if (!name || !email || !subject || !message) {
			return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
		}

		// Check if Resend is configured
		if (!process.env.RESEND_API_KEY) {
			console.warn(
				'Resend API key not configured. Please set RESEND_API_KEY environment variable.'
			);
			console.log('Contact form submission:', { name, email, subject, message });
			return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
		}

		const recipientEmail = process.env.CONTACT_EMAIL || 'hello@devfresher.me';

		// Prepare email content
		const emailHtml = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Subject:</strong> ${subject}</p>
			<p><strong>Message:</strong></p>
			<p>${message.replace(/\n/g, '<br>')}</p>
		`;

		// Send email using Resend
		const emailResult = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
			to: recipientEmail,
			replyTo: email,
			subject: `Portfolio Contact: ${subject}`,
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
