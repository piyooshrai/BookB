# BookB Email Setup with Amazon SES

This document explains how to set up email functionality for the BookB contact forms using Amazon SES.

## Prerequisites

1. **AWS Account**: You need an AWS account with SES access
2. **Verified Email Addresses**: Both sending and receiving email addresses must be verified in SES
3. **Production Access**: For sending to any email address, request production access (otherwise limited to verified addresses)

## Step 1: Set Up Amazon SES

### 1.1 Verify Your Email Addresses

1. Log into AWS Console
2. Navigate to Amazon SES
3. Go to "Verified identities"
4. Click "Create identity"
5. Verify both:
   - **From address**: `noreply@bookb.io` (or your domain)
   - **To address**: `sales@bookb.io` (where you want to receive emails)
6. Check your email and click the verification link

### 1.2 Request Production Access (Optional but Recommended)

1. In SES Console, click "Account dashboard"
2. Check if you're in "Sandbox" mode
3. If yes, click "Request production access"
4. Fill out the form explaining your use case
5. Usually approved within 24 hours

### 1.3 Create IAM User for SES

1. Go to IAM Console
2. Create a new user: `bookb-ses-user`
3. Attach policy: `AmazonSESFullAccess` (or create custom policy with SendEmail permission)
4. Create access keys
5. Save the Access Key ID and Secret Access Key

## Step 2: Configure Environment Variables

### 2.1 Create .env.local file

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 2.2 Add Your AWS Credentials

Edit `.env.local` and add your AWS credentials:

```env
# Amazon SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
SES_FROM_EMAIL=noreply@bookb.io
SES_TO_EMAIL=sales@bookb.io

# Other environment variables
NEXT_PUBLIC_SITE_URL=https://bookb.io
```

**Important**: Never commit `.env.local` to git!

## Step 3: Deploy to Production

### 3.1 Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add each environment variable from `.env.local`:
   - `AWS_REGION`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `SES_FROM_EMAIL`
   - `SES_TO_EMAIL`
4. Redeploy your application

### 3.2 Other Hosting Platforms

For other platforms, add the environment variables through their respective dashboards or deployment configuration.

## Step 4: Test Email Functionality

### 4.1 Local Testing

```bash
npm run dev
```

Visit `http://localhost:3000/contact` and submit a test form.

### 4.2 Production Testing

1. Visit your live site
2. Go to the contact page
3. Fill out and submit the form
4. Check the email address specified in `SES_TO_EMAIL`

## API Endpoint

The contact form submits to: `POST /api/contact`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Doe Salon",
  "message": "I'm interested in learning more about BookB",
  "formType": "contact"
}
```

### Response

Success:
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!",
  "messageId": "0100018d9876543210fedcba"
}
```

Error:
```json
{
  "success": false,
  "error": "Failed to send email. Please try again later."
}
```

## Form Types

The system supports different form types:

- `contact`: General contact form
- `trial`: Free trial signup
- `demo`: Demo request
- `quote`: Quote/pricing inquiry

Each form type will have a different email subject line.

## Troubleshooting

### Email not sending

1. **Check SES Sending Limits**: In sandbox mode, you can only send to verified addresses
2. **Check IAM Permissions**: Ensure the IAM user has `ses:SendEmail` permission
3. **Check Email Verification**: Both sender and receiver must be verified
4. **Check Logs**: Look at Vercel logs or local console for error messages

### Common Errors

**Error: "Email address not verified"**
- Solution: Verify the email address in SES Console

**Error: "Access Denied"**
- Solution: Check IAM permissions and access keys

**Error: "MessageRejected"**
- Solution: Check if you're in sandbox mode and trying to send to unverified address

## Security Best Practices

1. **Never commit** `.env.local` or environment variables to git
2. **Rotate access keys** regularly
3. **Use least privilege** IAM policies (only `ses:SendEmail` permission)
4. **Monitor usage** in AWS CloudWatch
5. **Set up billing alerts** to avoid unexpected charges

## Cost

Amazon SES Pricing (as of 2026):
- First 62,000 emails per month: Free (if hosted on EC2)
- Otherwise: $0.10 per 1,000 emails
- Data transfer charges may apply

Most small businesses will stay within the free tier.

## Support

For issues specific to:
- **AWS SES**: Contact AWS Support
- **BookB Integration**: Check application logs and verify environment variables
- **Email Deliverability**: Check SPF/DKIM records for your domain

## Next Steps

- [ ] Set up SPF record for your domain
- [ ] Set up DKIM signing in SES
- [ ] Configure DMARC policy
- [ ] Set up email templates for different form types
- [ ] Add email tracking/analytics
- [ ] Set up auto-responder emails to customers
