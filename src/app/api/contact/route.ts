import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { contactFormSchema } from '@/lib/validation';

const NOTIFICATION_EMAIL = 'borgohainabhijit09@gmail.com';
const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

async function persistLeadRecord(leadRecord: Record<string, any>): Promise<void> {
  try {
    const dirPath = path.dirname(LEADS_FILE_PATH);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let existingLeads: any[] = [];
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const fileContent = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
      try {
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.unshift(leadRecord);

    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(existingLeads, null, 2), 'utf-8');
    console.log(`[LEAD PERSISTED TO ${LEADS_FILE_PATH}] Lead ID: ${leadRecord.id}`);
  } catch (err) {
    console.error('[LEAD PERSISTENCE ERROR]', err);
    throw new Error('Failed to save lead record to persistent storage.');
  }
}

async function sendEmailNotification(lead: Record<string, any>) {
  const resendApiKey = process.env.RESEND_API_KEY;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; color: #333; }
          .card { background: #ffffff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 600px; margin: 0 auto; }
          .header { font-size: 20px; font-weight: bold; color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 16px; }
          .field { margin-bottom: 12px; }
          .label { font-size: 11px; font-weight: bold; color: #6b7280; text-transform: uppercase; }
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
            <div class="label">WhatsApp / Phone</div>
            <div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>

          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>

          <div class="field">
            <div class="label">Requirement</div>
            <div class="value" style="color: #4f46e5;">${lead.requirement}</div>
          </div>

          <div class="field">
            <div class="label">Approximate Budget</div>
            <div class="value" style="color: #059669;">${lead.budget}</div>
          </div>

          <div class="field">
            <div class="label">Project Details</div>
            <div class="message-box">${lead.message}</div>
          </div>

          <div class="field" style="margin-top: 16px; font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 10px; border-radius: 6px;">
            <strong>Attribution:</strong> Source: ${lead.utm_source} | Medium: ${lead.utm_medium} | Campaign: ${lead.utm_campaign} | Landing: ${lead.landingPage}
          </div>

          <div class="footer">
            Lead ID: ${lead.id} • Captured on ${new Date(lead.createdAt).toLocaleString()} • Sygmia Lead Engine
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
    console.log(`[SIMULATED EMAIL DISPATCH] No RESEND_API_KEY set. Target recipient: ${NOTIFICATION_EMAIL}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    // Rate Limiting check
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous';
    const now = Date.now();
    const timestamps = rateLimitMap.get(clientIp) || [];
    const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    
    if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again in a few minutes or reach out via WhatsApp.' },
        { status: 429 }
      );
    }
    validTimestamps.push(now);
    rateLimitMap.set(clientIp, validTimestamps);

    // Payload size check
    const contentLength = parseInt(req.headers.get('content-length') || '0', 10);
    if (contentLength > 50000) {
      return NextResponse.json(
        { success: false, error: 'Payload size too large.' },
        { status: 413 }
      );
    }

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

    // 2. Format & Sanitize lead record
    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: sanitizeInput(leadData.name),
      businessName: sanitizeInput(leadData.businessName),
      phone: sanitizeInput(leadData.phone),
      email: sanitizeInput(leadData.email),
      requirement: sanitizeInput(leadData.requirement),
      budget: sanitizeInput(leadData.budget || '15k-30k'),
      message: sanitizeInput(leadData.message),
      utm_source: sanitizeInput(leadData.utm_source || 'direct'),
      utm_medium: sanitizeInput(leadData.utm_medium || 'none'),
      utm_campaign: sanitizeInput(leadData.utm_campaign || 'none'),
      utm_content: sanitizeInput(leadData.utm_content || ''),
      utm_term: sanitizeInput(leadData.utm_term || ''),
      landingPage: sanitizeInput(leadData.landingPage || '/contact'),
      referrer: sanitizeInput(leadData.referrer || ''),
      status: 'NEW',
      createdAt: new Date().toISOString(),
      recipientTarget: NOTIFICATION_EMAIL
    };

    // 3. Persist Lead to storage
    await persistLeadRecord(leadRecord);

    // 4. Send Email Notification
    await sendEmailNotification(leadRecord);

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received.',
      leadId: leadRecord.id
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Something went wrong while storing your enquiry. Please try again or reach out directly on WhatsApp.' 
      },
      { status: 500 }
    );
  }
}

