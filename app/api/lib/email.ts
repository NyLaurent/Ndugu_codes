// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); 

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await resend.emails.send({
      from: 'Web3 Mates <onboarding@resend.dev>',
      to,
      subject,
      html,
    });

    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}
