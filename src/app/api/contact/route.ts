import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

const NOTIFICATION_EMAIL = 'borgohainabhijit09@gmail.com';

async function sendEmailNotification(lead: Record<string, any>) {
  const resendApiKey = process.env.RESEND_API_KEY;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; color: #333; }
          .card { background: #ffffff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 600px; margin: 0 auto; }
          .header { font-size: 20px; font-weight: bold; color: #4f46e5; border-b: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 16px; }
          .field { margin-bottom: 12px; }
          .label { font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; }
          .value { font-size: 15px; font-weight: 600; color: #111827; margin-top: 2px; }
          .message-box { background: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; border-radius: 8px; font-size: 14px; margin-top: 8px; }
          .footer { font-size: 11px; color: #9ca3af; margin-top: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">🚀 New Lead Received — Sygmia Innovative</div>
          
          <div class="field">
            <div class="label">Contact Name</div>
            <div class="value">${lead.name}</div>
          </div>

          <div class="field">
            <div class="label">Business / Organization</div>
            <div class="value">${lead.businessName}</div>
          </div>

          <div class="field">
            <div class="label">Phone / WhatsApp</div>
            <div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>

          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>

          <div class="field">
            <div class="label">Selected Requirement</div>
            <div class="value" style="color: #4f46e5;">${lead.requirement}</div>
          </div>

          <div class="field">
            <div class="label">Message & Objectives</div>
            <div class="message-box">${lead.message}</div>
          </div>

          <div class="field" style="margin-top: 16px; font-size: 12px; color: #6b7280;">
            <strong>UTM Attribution:</strong> Source: ${lead.utm_source} | Medium: ${lead.utm_medium} | Campaign: ${lead.utm_campaign}
          </div>

          <div class="footer">
            Captured on ${new Date(lead.createdAt).toLocaleString()} • Sygmia Lead Engine
          </div>
        </div>
      </body>
    </html>
  `;

  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Sygmia Web Leads <onboarding@resend.dev>',
          to: [NOTIFICATION_EMAIL],
          subject: `⚡ New Lead: ${lead.name} (${lead.businessName})`,
          html: emailHtml
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('[EMAIL NOTIFICATION FAILED]', errorText);
      } else {
        console.log(`[EMAIL NOTIFICATION SENT SUCCESSFULLY TO ${NOTIFICATION_EMAIL}]`);
      }
    } catch (err) {
      console.error('[EMAIL DISPATCH ERROR]', err);
    }
  } else {
    console.log(`[SIMULATED EMAIL DESPATCH] No RESEND_API_KEY provided in .env.local. Recipient set to: ${NOTIFICATION_EMAIL}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate payload with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 2. Format lead record
    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: leadData.name,
      businessName: leadData.businessName,
      phone: leadData.phone,
      email: leadData.email,
      requirement: leadData.requirement,
      message: leadData.message,
      utm_source: leadData.utm_source || 'direct',
      utm_medium: leadData.utm_medium || 'none',
      utm_campaign: leadData.utm_campaign || 'none',
      landingPage: leadData.landingPage || '/contact',
      createdAt: new Date().toISOString(),
      recipientTarget: NOTIFICATION_EMAIL,
      status: 'New'
    };

    // 3. Log lead record to console
    console.log('[NEW LEAD CAPTURED FOR BORGOHAINABHIJIT09@GMAIL.COM]', JSON.stringify(leadRecord, null, 2));

    // 4. Send Email Notification
    await sendEmailNotification(leadRecord);

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! We have received your enquiry and will respond within 24 hours.',
      leadId: leadRecord.id
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Something went wrong while submitting your enquiry. Please try again or reach out on WhatsApp.' 
      },
      { status: 500 }
    );
  }
}
