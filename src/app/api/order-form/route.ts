import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Configure this with your Hostinger SMTP settings
    const emailData = {
      to: 'your-email@hostinger.com',
      subject: `New Web Development Order - ${body.package}`,
      html: `
        <h2>New Order Details</h2>
        <p><strong>Package:</strong> ${body.package}</p>
        <p><strong>Price:</strong> R${body.price}</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        <p><strong>Additional Notes:</strong> ${body.notes}</p>
      `,
    }

    const transporter = nodemailer.createTransport({
      host: 'your-hostinger-smtp-host',
      port: 465,
      secure: true,
      auth: {
        user: 'your-email@hostinger.com',
        pass: 'your-password',
      },
    })

    await transporter.sendMail({
      from: 'your-email@hostinger.com',
      ...emailData,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
