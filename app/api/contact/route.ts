import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, EmailData } from '@/lib/ses';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate name (2-100 characters, letters, spaces, hyphens, apostrophes only)
    const nameRegex = /^[a-zA-Z\s'-]{2,100}$/;
    if (!nameRegex.test(body.name.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name (2-100 characters, letters only)' },
        { status: 400 }
      );
    }

    // Validate email format and length
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(body.email) || body.email.length > 254) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Block common disposable/temporary email domains
    const disposableDomains = ['tempmail.com', 'throwaway.email', 'guerrillamail.com', '10minutemail.com', 'mailinator.com'];
    const emailDomain = body.email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(emailDomain)) {
      return NextResponse.json(
        { success: false, error: 'Please use a permanent email address' },
        { status: 400 }
      );
    }

    // Honeypot field check (if present, it's a bot)
    if (body.website || body.url) {
      return NextResponse.json(
        { success: false, error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData: EmailData = {
      name: body.name,
      email: body.email,
      phone: body.phone || undefined,
      company: body.company || undefined,
      message: body.message || undefined,
      formType: body.formType || 'contact',
    };

    // Send email via SES
    const result = await sendEmail(emailData);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
        messageId: result.messageId,
      });
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
