import { NextResponse } from 'next/server';
import { sendEmail } from '../../lib/email'; 

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Save to database (implement database logic here)
    // await saveToDatabase(data);
    
    // Send confirmation email
    await sendEmail({
      to: data.email,
      subject: 'Mentor Application Received',
      text: `Hi ${data.name}, we've received your application to become a Web3 Mates mentor.`
    });
    
    // Notify admin
    await sendEmail({
      to: 'admin@web3mates.com',
      subject: 'New Mentor Application',
      text: `New application from ${data.name} (${data.email})`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Error processing application' },
      { status: 500 }
    );
  }
}