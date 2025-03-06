import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { phone, desc, subject } = await req.json();

        if (!phone || !desc) {
            return new Response(JSON.stringify({ error: 'Phone number and description are required' }), {
                status: 400,
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Support <onboarding@resend.dev>',
            to: ['davlatjonsoqqamode@gmail.com'], // Bu yerni o'zgartiring
            subject: subject,
            react: EmailTemplate({ phone, desc }),
        });

        if (error) {
            return new Response(JSON.stringify({ error: 'Failed to send email', details: error }), {
                status: 400,
            });
        }

        return new Response(JSON.stringify({ success: 'Email sent successfully!', data }), {
            status: 200,
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Server error', details: err }), {
            status: 500,
        });
    }
}
