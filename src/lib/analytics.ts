export interface AnalyticsEvent {
  event: 'cta_click' | 'whatsapp_click' | 'phone_click' | 'contact_form_start' | 'contact_form_submit' | 'case_study_view';
  location?: string;
  page?: string;
  cta?: string;
  label?: string;
  metadata?: Record<string, any>;
}

export function trackEvent({ event, location, page, cta, label, metadata }: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event,
    location: location || 'body',
    page: page || window.location.pathname,
    cta: cta || 'general',
    label: label || '',
    metadata: metadata || {},
    timestamp: new Date().toISOString()
  };

  // Dispatch to console in dev mode
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics Event]', eventPayload);
  }

  // Push to window.dataLayer for Google Tag Manager / GA4 if present
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push(eventPayload);
  }
}
