import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Send welcome email
    const welcomeEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B1C39; margin-bottom: 20px;">Welcome to Web3 Mates Newsletter! 🚀</h2>
        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          Thank you for subscribing to our newsletter! You're now part of our growing community of innovators, developers, and Web3 enthusiasts.
        </p>
        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          You'll receive monthly updates about:
        </p>
        <ul style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          <li>Latest project developments and collaborations</li>
          <li>Upcoming events, hackathons, and workshops</li>
          <li>Community highlights and success stories</li>
          <li>Industry insights and Web3 trends</li>
          <li>Exclusive opportunities and partnerships</li>
        </ul>
        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          Stay connected with us on our social platforms:
        </p>
        <div style="margin-bottom: 20px;">
          <a href="https://discord.gg/qzECSsvuxu" style="color: #5865F2; text-decoration: none; margin-right: 15px;">Discord</a>
          <a href="https://t.me/+Gc9JJOqazxgxZmQ0" style="color: #26A5E4; text-decoration: none; margin-right: 15px;">Telegram</a>
          <a href="https://x.com/Web3Mates" style="color: #000; text-decoration: none;">X (Twitter)</a>
        </div>
        <p style="color: #666; font-size: 14px;">
          If you have any questions, feel free to reach out to our team.
        </p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          Best regards,<br>
          The Web3 Mates Team
        </p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: 'Welcome to Web3 Mates Newsletter! 🚀',
      html: welcomeEmailHtml,
    });

    // Send notification email to admin (optional)
    const adminNotificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B1C39; margin-bottom: 20px;">New Newsletter Subscription</h2>
        <p style="color: #333; line-height: 1.6;">
          A new user has subscribed to the newsletter: <strong>${email}</strong>
        </p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          Web3 Mates Newsletter System
        </p>
      </div>
    `;

    // You can uncomment this if you want admin notifications
    // await sendEmail({
    //   to: 'admin@web3mates.com', // Replace with your admin email
    //   subject: 'New Newsletter Subscription',
    //   html: adminNotificationHtml,
    // });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again.' },
      { status: 500 }
    );
  }
}
