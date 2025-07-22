import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, message, subject } = body;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: ['akaimoveiseplanejados@gmail.com'], 
      subject: `Novo Contato: ${name} - ${subject}`,
      react: EmailTemplate({ name, email, phone, city, message, subject }),
    });

    // Handle potential errors from the Resend API
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
    }

    // Send a success response back to the form
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    // Handle unexpected errors
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
