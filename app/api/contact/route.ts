import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import twilio from 'twilio';
import TelegramBot from 'node-telegram-bot-api';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, whatsapp, subject, message } = body;

		// Validate required input
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Name, email, subject, and message are required' },
				{ status: 400 }
			);
		}

		// Check if Resend is configured
		if (!process.env.RESEND_API_KEY) {
			console.warn('Resend API key not configured. Please set RESEND_API_KEY environment variable.');
			console.log('Contact form submission:', { name, email, whatsapp, subject, message });
			return NextResponse.json(
				{ error: 'Email service not configured' },
				{ status: 503 }
			);
		}

		const recipientEmail = process.env.CONTACT_EMAIL || 'hello@devfresher.me';
		const recipientWhatsApp = process.env.WHATSAPP_NUMBER; // Your WhatsApp number in E.164 format (e.g., +1234567890)

		// Prepare email content
		const emailHtml = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
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

		// Send notification via Telegram (FREE alternative to Twilio)
		let telegramResult = null;
		if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
			try {
				const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
				const telegramMessage = `📧 *New Contact Form Submission*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}${whatsapp ? `\n📱 *WhatsApp:* ${whatsapp}` : ''}\n📌 *Subject:* ${subject}\n\n💬 *Message:*\n${message}`;

				telegramResult = await bot.sendMessage(
					process.env.TELEGRAM_CHAT_ID,
					telegramMessage,
					{ parse_mode: 'Markdown' }
				);
			} catch (telegramError) {
				console.error('Telegram sending error:', telegramError);
				// Don't fail the request if Telegram fails
			}
		}

		// Send WhatsApp message if Twilio is configured and WhatsApp number is provided (OPTIONAL - PAID)
		let whatsappResult = null;
		if (whatsapp && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && recipientWhatsApp) {
			try {
				const client = twilio(
					process.env.TWILIO_ACCOUNT_SID,
					process.env.TWILIO_AUTH_TOKEN
				);

				const whatsappMessage = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nSubject: ${subject}\n\nMessage:\n${message}`;

				whatsappResult = await client.messages.create({
					from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, // Your Twilio WhatsApp number
					to: `whatsapp:${recipientWhatsApp}`, // Your WhatsApp number
					body: whatsappMessage,
				});
			} catch (whatsappError) {
				console.error('WhatsApp sending error:', whatsappError);
				// Don't fail the request if WhatsApp fails, email is the primary method
			}
		}

		return NextResponse.json({
			success: true,
			emailSent: !!emailResult,
			telegramSent: !!telegramResult,
			whatsappSent: !!whatsappResult,
		});
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Failed to send message' },
			{ status: 500 }
		);
	}
}
