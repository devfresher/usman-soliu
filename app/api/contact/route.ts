import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		// Validate input
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		// Check if email is configured
		if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
			console.warn('Email not configured. Please set SMTP_USER and SMTP_PASS environment variables.');
			// In development, you might want to log the message instead
			console.log('Contact form submission:', { name, email, subject, message });
			return NextResponse.json(
				{ error: 'Email service not configured' },
				{ status: 503 }
			);
		}

		// Configure nodemailer
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST || 'smtp.gmail.com',
			port: parseInt(process.env.SMTP_PORT || '587'),
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		// Send email
		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: 'info@devfresher.me', // Your email
			replyTo: email,
			subject: `Portfolio Contact: ${subject}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Failed to send message' },
			{ status: 500 }
		);
	}
}

