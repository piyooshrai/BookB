# Google Analytics & Tag Manager Setup

Your site is already configured to use Google Analytics and Google Tag Manager. You just need to add your tracking IDs.

## How to Add Google Analytics

### 1. Get Your Google Analytics ID

1. Go to **https://analytics.google.com/**
2. Create a new property for `bookb.io` (or use existing)
3. Click **Admin** (bottom left)
4. Under **Property**, click **Data Streams**
5. Click your web stream (or create one for bookb.io)
6. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Add to Environment Variables

Open `.env.local` and replace the placeholder:

```bash
NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID-HERE
```

### 3. Rebuild and Deploy

```bash
npm run build
```

That's it! Analytics will start tracking automatically.

## Optional: Google Tag Manager

If you want to use GTM for additional tracking (Facebook Pixel, LinkedIn, etc.):

### 1. Get Your GTM ID

1. Go to **https://tagmanager.google.com/**
2. Create a new container for `bookb.io`
3. Copy your **Container ID** (looks like `GTM-XXXXXXX`)

### 2. Add to Environment Variables

Open `.env.local` and add:

```bash
NEXT_PUBLIC_GTM_ID=GTM-YOUR-ACTUAL-ID-HERE
```

### 3. Rebuild

```bash
npm run build
```

## Where Analytics is Configured

- **File**: `/lib/analytics.tsx`
- **Loaded in**: `/app/layout.tsx` (site-wide)
- **Already includes**:
  - Page view tracking
  - Event tracking functions
  - Demo request tracking
  - Pricing tier view tracking
  - ROI calculator tracking

## Testing Analytics

After adding your IDs and deploying:

1. Go to Google Analytics Real-Time view
2. Visit your live site
3. You should see yourself in the Real-Time dashboard
4. Test events by:
   - Viewing pricing page
   - Clicking "Start Free Trial"
   - Navigating between pages

## Privacy & GDPR

The current setup loads analytics for all visitors. If you need GDPR cookie consent:

1. Add a cookie consent banner (use a package like `react-cookie-consent`)
2. Only load analytics after user accepts
3. Update `lib/analytics.tsx` to conditionally load based on consent

## Production Checklist

- [ ] Replace `NEXT_PUBLIC_GA_ID` in `.env.local`
- [ ] Add `.env.local` to `.gitignore` (already done)
- [ ] Set environment variable in hosting platform (Vercel/Netlify)
- [ ] Test in Google Analytics Real-Time view
- [ ] Set up conversion goals in Google Analytics
- [ ] (Optional) Configure GTM if needed

## Hosting Platform Setup

### Vercel
1. Go to Project Settings > Environment Variables
2. Add `NEXT_PUBLIC_GA_ID` with your tracking ID
3. Redeploy

### Netlify
1. Go to Site Settings > Build & Deploy > Environment
2. Add `NEXT_PUBLIC_GA_ID` with your tracking ID
3. Redeploy

The analytics will automatically start tracking once the environment variables are set.
