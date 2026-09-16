export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landingPage?: string;
  referrer?: string;
}

const STORAGE_KEY = 'sygmia_utm_attribution';

export function captureUtmParams(): void {
  if (typeof window === 'undefined') return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existing = getStoredUtmParams();

    const hasUtm = Array.from(urlParams.keys()).some(k => k.startsWith('utm_'));
    
    // Preserve first-touch attribution: only set initial values if not set, or update if new UTM params are passed
    const params: UtmParams = {
      utm_source: (hasUtm ? urlParams.get('utm_source') : null) || existing.utm_source || 'direct',
      utm_medium: (hasUtm ? urlParams.get('utm_medium') : null) || existing.utm_medium || 'none',
      utm_campaign: (hasUtm ? urlParams.get('utm_campaign') : null) || existing.utm_campaign || 'none',
      utm_content: (hasUtm ? urlParams.get('utm_content') : null) || existing.utm_content || '',
      utm_term: (hasUtm ? urlParams.get('utm_term') : null) || existing.utm_term || '',
      landingPage: existing.landingPage || window.location.pathname,
      referrer: existing.referrer || document.referrer || ''
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch (err) {
    console.error('Failed to capture UTM params:', err);
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

