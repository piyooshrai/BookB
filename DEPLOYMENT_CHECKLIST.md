# BookB Deployment Checklist

Before going live with bookb.io, you need to configure the following environment variables in your Vercel project.

## Required Environment Variables

### 1. AWS SES (Email Functionality)
Add these 5 variables in Vercel Project Settings → Environment Variables:

```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
SES_FROM_EMAIL=noreply@bookb.io
SES_TO_EMAIL=sales@bookb.io
```

**How to get AWS SES credentials:**
1. Go to AWS IAM Console
2. Create a new user with SES permissions
3. Generate access keys
4. Verify your sender/receiver emails in AWS SES

### 2. Google Analytics (Traffic Monitoring)
Add this variable in Vercel:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**How to get Google Analytics ID:**
1. Go to https://analytics.google.com/
2. Create a property for bookb.io
3. Click Admin → Data Streams → Create Web Stream
4. Copy the Measurement ID (starts with G-)

### 3. Google Tag Manager (Optional - for Facebook Pixel, etc.)
Only add if you need additional tracking (Facebook, LinkedIn, etc.):

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**How to get GTM ID:**
1. Go to https://tagmanager.google.com/
2. Create a container for bookb.io
3. Copy the Container ID (starts with GTM-)

## Vercel Setup Steps

1. Go to https://vercel.com/
2. Select your BookB project
3. Go to Settings → Environment Variables
4. Add each variable (select "Production", "Preview", and "Development")
5. After adding all variables, trigger a new deployment:
   - Go to Deployments tab
   - Click "..." on the latest deployment
   - Click "Redeploy"

## Testing After Deployment

### Email Functionality
1. Visit bookb.io/contact
2. Submit the contact form
3. Check that email arrives at SES_TO_EMAIL

### Google Analytics
1. Go to Google Analytics Real-Time view
2. Visit your live site
3. You should see yourself in Real-Time dashboard
4. Navigate between pages to verify tracking

## What's Already Done

✅ Google Analytics code is implemented in app/layout.tsx
✅ AWS SES email integration is complete
✅ All OG images are configured for social sharing
✅ Mobile responsive navigation is working
✅ All 5 content pages are SEO-ready

## What You Need to Do

⬜ Add AWS SES credentials to Vercel
⬜ Add Google Analytics ID to Vercel
⬜ (Optional) Add Google Tag Manager ID to Vercel
⬜ Bind bookb.io domain to Vercel deployment
⬜ Test email functionality after deployment
⬜ Test Google Analytics tracking

---

**Note:** Environment variables in Vercel are separate from your local `.env.local` file. You must add them manually in the Vercel dashboard.
