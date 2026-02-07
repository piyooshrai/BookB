// Amazon SES email sending utility
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  formType: 'trial' | 'contact' | 'demo' | 'quote';
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const fromEmail = process.env.SES_FROM_EMAIL || 'noreply@bookb.io';
    const toEmail = process.env.SES_TO_EMAIL || 'sales@bookb.io';

    const subject = getEmailSubject(data.formType);
    const htmlBody = generateEmailHTML(data);
    const textBody = generateEmailText(data);

    const params = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: textBody,
            Charset: 'UTF-8',
          },
          Html: {
            Data: htmlBody,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [data.email],
    };

    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    return {
      success: true,
      messageId: response.MessageId,
    };
  } catch (error) {
    console.error('SES Email Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

function getEmailSubject(formType: string): string {
  switch (formType) {
    case 'trial':
      return 'New Free Trial Request - BookB';
    case 'contact':
      return 'New Contact Form Submission - BookB';
    case 'demo':
      return 'New Demo Request - BookB';
    case 'quote':
      return 'New Quote Request - BookB';
    default:
      return 'New Form Submission - BookB';
  }
}

function generateEmailHTML(data: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0F172A; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0F172A; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
    .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>BookB - New ${data.formType.charAt(0).toUpperCase() + data.formType.slice(1)} Request</h1>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${escapeHtml(data.name)}</div>
      </div>

      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
      </div>

      ${data.phone ? `
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${escapeHtml(data.phone)}</div>
      </div>
      ` : ''}

      ${data.company ? `
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">${escapeHtml(data.company)}</div>
      </div>
      ` : ''}

      ${data.message ? `
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">Form Type:</div>
        <div class="value">${data.formType.toUpperCase()}</div>
      </div>

      <div class="field">
        <div class="label">Submitted:</div>
        <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</div>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from the BookB website contact form.</p>
      <p>&copy; 2026 BookB. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function generateEmailText(data: EmailData): string {
  return `
BookB - New ${data.formType.toUpperCase()} Request

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
${data.message ? `\nMessage:\n${data.message}` : ''}

Form Type: ${data.formType.toUpperCase()}
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC

---
This email was sent from the BookB website contact form.
© 2026 BookB. All rights reserved.
  `.trim();
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
