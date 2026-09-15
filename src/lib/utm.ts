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

    // Only update if url contains utm params or if no existing record
    const hasUtm = Array.from(urlParams.keys()).some(k => k.startsWith('utm_'));
    
    if (hasUtm || !existing.landingPage) {
      const params: UtmParams = {
        utm_source: urlParams.get('utm_source') || existing.utm_source || '',
        utm_medium: urlParams.get('utm_medium') || existing.utm_medium || '',
        utm_campaign: urlParams.get('utm_campaign') || existing.utm_campaign || '',
        utm_content: urlParams.get('utm_content') || existing.utm_content || '',
        utm_term: urlParams.get('utm_term') || existing.utm_term || '',
        landingPage: existing.landingPage || window.location.pathname,
        referrer: existing.referrer || document.referrer || ''
      };

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
  } catch (err) {
    console.error('Failed to capture UTM params:', err);
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
