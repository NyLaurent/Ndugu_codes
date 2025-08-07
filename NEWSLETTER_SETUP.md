# Newsletter Subscription Setup Guide

## Overview
This project now includes a complete newsletter subscription system with email notifications using Resend.

## Features Implemented

### 1. Newsletter Subscription Form
- Located on `/join-community` page
- Real-time form validation
- Loading states and error handling
- Success/error message display
- Form clears on successful subscription

### 2. Email Notifications
- Welcome email sent to new subscribers
- Professional HTML email template
- Includes community links and information
- Optional admin notification (commented out)

### 3. API Endpoint
- `POST /api/newsletter` - Handles subscription requests
- Email validation
- Error handling and logging

## Required Configuration

### 1. Environment Variables
Create or update your `.env.local` file with:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 2. Resend Setup
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Verify your domain (optional but recommended)
4. Update the `from` email in `app/api/lib/email.ts` if needed

### 3. Optional Admin Notifications
To enable admin notifications when someone subscribes:

1. Uncomment the admin notification section in `app/api/newsletter/route.ts`
2. Replace `'admin@web3mates.com'` with your actual admin email

## Files Created/Modified

### New Files:
- `app/api/newsletter/route.ts` - Newsletter subscription API endpoint
- `hooks/useNewsletter.ts` - Custom hook for newsletter functionality
- `NEWSLETTER_SETUP.md` - This setup guide

### Modified Files:
- `app/join-community/page.tsx` - Added newsletter subscription form with state management

## Testing the Implementation

1. Start your development server: `npm run dev`
2. Navigate to `/join-community`
3. Fill out the newsletter subscription form
4. Check your email for the welcome message
5. Verify the success/error messages display correctly

## Customization Options

### Email Template
The welcome email template is in `app/api/newsletter/route.ts`. You can customize:
- Email subject
- HTML content and styling
- Links to social platforms
- Brand colors and messaging

### Form Styling
The newsletter form uses Tailwind CSS classes. You can modify the styling in `app/join-community/page.tsx`.

### Validation
Email validation is basic (checks for @ symbol). You can enhance it by:
- Adding regex pattern validation
- Checking for disposable email domains
- Implementing rate limiting

## Security Considerations

1. **Rate Limiting**: Consider implementing rate limiting to prevent spam
2. **Email Validation**: Enhance email validation as needed
3. **CSRF Protection**: Next.js provides built-in CSRF protection
4. **Environment Variables**: Never commit API keys to version control

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check your Resend API key and domain verification
2. **Form not working**: Ensure the API route is accessible at `/api/newsletter`
3. **Styling issues**: Verify Tailwind CSS is properly configured

### Debug Steps:
1. Check browser console for errors
2. Verify API endpoint returns correct responses
3. Check server logs for any errors
4. Test email delivery in Resend dashboard

## Next Steps

Consider implementing:
- Email list management (unsubscribe functionality)
- Newsletter content management system
- Analytics tracking for subscription rates
- Integration with email marketing platforms
- A/B testing for different email templates
