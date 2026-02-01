# Amazon SES Setup for Contact Form

The BookB contact form is configured to send emails via Amazon SES. Follow these steps to complete the setup:

## 1. AWS SES Configuration

### Verify Your Email Addresses
1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Navigate to **Verified identities**
3. Click **Create identity**
4. Select **Email address**
5. Enter `info@bookb.io` (the receiving address)
6. Click **Create identity**
7. Check the inbox for `info@bookb.io` and click the verification link
8. Repeat for `noreply@bookb.io` (the sending address)

**OR** verify the entire domain `bookb.io`:
1. Select **Domain** instead of Email address
2. Enter `bookb.io`
3. Follow the DNS verification steps (add TXT and CNAME records to your domain)
4. Once verified, you can send from any address @bookb.io

### Move Out of SES Sandbox (Important!)
By default, SES is in sandbox mode and can only send to verified addresses.

To send to any email address:
1. Go to SES Console → **Account dashboard**
2. Click **Request production access**
3. Fill out the form:
   - **Mail type**: Transactional
   - **Website URL**: https://bookb.io
   - **Use case**: Contact form submissions from website visitors
   - **Compliance**: Explain you only send emails when users submit the contact form
4. Submit and wait for approval (usually 24 hours)

## 2. Create IAM User for SES

1. Go to [IAM Console](https://console.aws.amazon.com/iam/)
2. Click **Users** → **Create user**
3. User name: `bookb-ses-sender`
4. Click **Next**
5. Select **Attach policies directly**
6. Search for and select: `AmazonSESFullAccess` (or create custom policy with SendEmail permission)
7. Click **Next** → **Create user**
8. Click on the created user
9. Go to **Security credentials** tab
10. Click **Create access key**
11. Select **Application running outside AWS**
12. Click **Next** → **Create access key**
13. **Save the Access Key ID and Secret Access Key** (you won't see the secret again!)

## 3. Set Environment Variables

Create a `.env.local` file in the project root (or add to your hosting platform):

```bash
# Amazon SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# Email Configuration
SES_FROM_EMAIL=noreply@bookb.io
```

**For Vercel Deployment:**
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add each variable above
4. Redeploy the site

## 4. Test the Contact Form

1. Go to https://bookb.io/contact
2. Fill out the form with a test message
3. Submit
4. Check `info@bookb.io` inbox for the message
5. Verify the reply-to address works (should be the sender's email)

## 5. Monitor SES Usage

- Check SES sending statistics in AWS Console
- Monitor bounce and complaint rates (keep below 5%)
- Set up CloudWatch alarms for high bounce rates
- Review SES sending limits (14 emails/second by default in production)

## Security Notes

- ✅ Never commit `.env.local` to git (it's in .gitignore)
- ✅ Rotate access keys periodically
- ✅ Use IAM policy with minimal permissions (SendEmail only)
- ✅ Monitor CloudWatch logs for suspicious activity
- ✅ Keep the from address verified to prevent spoofing

## Troubleshooting

**Error: "Email address is not verified"**
- Make sure both `noreply@bookb.io` and `info@bookb.io` are verified in SES
- Or verify the entire `bookb.io` domain

**Error: "MessageRejected: Email address is not verified"**
- You're still in SES sandbox mode
- Request production access (see step 1)

**No email received:**
- Check SES sending statistics for bounces/complaints
- Verify recipient email is correct: `info@bookb.io`
- Check spam folder
- Ensure AWS credentials are correct in environment variables

**Rate limit errors:**
- SES has sending limits (starts at 14/second in production)
- Contact AWS support to increase limits if needed
