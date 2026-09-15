'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { getStoredUtmParams, captureUtmParams } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';

export interface ContactFormProps {
  defaultRequirement?: string;
  sourceContext?: string;
  isModal?: boolean;
}

export function ContactForm({ defaultRequirement, sourceContext, isModal = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    requirement: defaultRequirement || 'new-website',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    captureUtmParams();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setValidationErrors({});

    trackEvent({
      event: 'contact_form_start',
      location: sourceContext || 'contact_page',
      cta: 'submit_enquiry'
    });

    const utmParams = getStoredUtmParams();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...utmParams
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.details) {
          const errors: Record<string, string> = {};
          Object.keys(result.details).forEach(key => {
            errors[key] = result.details[key][0];
          });
          setValidationErrors(errors);
        }
        throw new Error(result.error || 'Failed to send enquiry');
      }

      setStatus('success');
      trackEvent({
        event: 'contact_form_submit',
        location: sourceContext || 'contact_page',
        cta: 'submit_enquiry',
        metadata: { leadId: result.leadId }
      });

    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong while sending your enquiry.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`glass-card ${isModal ? 'p-6 space-y-4' : 'p-8 sm:p-10 space-y-6'} border border-emerald-500/30 text-center animate-in fade-in zoom-in-95 duration-300`}>
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">Enquiry Received!</h3>
          <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. We have received your details and will get back to you within 24 hours.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button 
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', businessName: '', phone: '', email: '', requirement: 'new-website', message: '' });
            }}
            className="btn-secondary text-xs py-2 px-4"
          >
            Send Another Enquiry
          </button>
          <a
            href="https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20discuss%20my%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 bg-emerald-600 hover:bg-emerald-500"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Message on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const containerPadding = isModal ? 'p-4 sm:p-6 space-y-3' : 'p-6 sm:p-8 space-y-6';
  const inputPadding = isModal ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm';
  const labelTextSize = 'text-[11px] font-semibold text-slate-300';

  return (
    <form onSubmit={handleSubmit} className={`glass-card ${containerPadding} border border-white/10 shadow-2xl bg-[#0b0f17]/95`}>
      {!isModal && (
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">Start a Conversation</h3>
          <p className="text-xs text-slate-400">Tell us what you're trying to achieve. No technical spec required.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p>{errorMessage}</p>
            <p className="text-slate-400 text-[11px]">
              Need help? Message us directly on{' '}
              <a 
                href="https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20talk%20about%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 underline"
              >
                WhatsApp
              </a>.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className={labelTextSize}>Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${inputPadding}`}
          />
          {validationErrors.name && <p className="text-[10px] text-red-400">{validationErrors.name}</p>}
        </div>

        {/* Business Name */}
        <div className="space-y-1">
          <label htmlFor="businessName" className={labelTextSize}>Business / Organization *</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Apex Coaching / Sal Studio"
            className={`w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${inputPadding}`}
          />
          {validationErrors.businessName && <p className="text-[10px] text-red-400">{validationErrors.businessName}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className={labelTextSize}>Phone / WhatsApp *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${inputPadding}`}
          />
          {validationErrors.phone && <p className="text-[10px] text-red-400">{validationErrors.phone}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className={labelTextSize}>Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${inputPadding}`}
          />
          {validationErrors.email && <p className="text-[10px] text-red-400">{validationErrors.email}</p>}
        </div>
      </div>

      {/* Requirement Selector */}
      <div className="space-y-1">
        <label htmlFor="requirement" className={labelTextSize}>What are you looking to solve? *</label>
        <select
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className={`w-full rounded-xl bg-[#0b0f17] border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all ${inputPadding}`}
        >
          <option value="new-website">Build a new business website (Get Online)</option>
          <option value="website-redesign">Redesign/optimize an existing website (Improve)</option>
          <option value="business-automation">Automate manual workflows & WhatsApp (Automate)</option>
          <option value="custom-software">Build custom internal software or portal</option>
          <option value="ecommerce">Online store / E-commerce setup</option>
          <option value="not-sure">Not sure yet — I need advice</option>
          <option value="something-else">Something else</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className={labelTextSize}>Tell us about your business & goals *</label>
        <textarea
          id="message"
          name="message"
          rows={isModal ? 2 : 4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your goals or challenges..."
          className={`w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${inputPadding}`}
        />
        {validationErrors.message && <p className="text-[10px] text-red-400">{validationErrors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`btn-primary w-full flex items-center justify-center gap-2 cursor-pointer ${isModal ? 'py-2.5 text-xs font-semibold' : 'py-3 text-sm'}`}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <span>Send Enquiry</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      {!isModal && (
        <p className="text-[11px] text-slate-500 text-center">
          🔒 We respect your privacy. No spam. Your information is strictly used to evaluate your business enquiry.
        </p>
      )}
    </form>
  );
}
