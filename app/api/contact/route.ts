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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
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
