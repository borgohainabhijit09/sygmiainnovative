import React, { Suspense } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { MessageSquare, Mail, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';

export const metadata = {
  title: "Contact Sygmia Innovative — Start a Conversation",
  description: "Get in touch with Sygmia Innovative. HQ in Dibrugarh Assam, R&D Center in Bangalore Karnataka. Email: info@sygmiainnovative.co.in, Phone: +919113067486.",
};

function ContactContent({ searchParams }: { searchParams: { req?: string; ind?: string } }) {
  const req = searchParams?.req;
  const ind = searchParams?.ind;
  const defaultReq = req || (ind ? 'new-website' : 'new-website');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <div className="badge-indigo">Direct Connection</div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Tell us what you&apos;re trying to improve in your business. We&apos;ll help you figure out what you actually need.
          </p>
        </div>

        {/* Office & Direct Contact Cards */}
        <div className="space-y-4">
          
          {/* Email & Phone */}
          <div className="glass-card p-5 space-y-3 border border-white/10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Contacts</h3>
            
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:info@sygmiainnovative.co.in" className="hover:text-indigo-400 transition-colors font-medium">
                info@sygmiainnovative.co.in
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <a href="tel:+919113067486" className="hover:text-emerald-400 transition-colors font-medium">
                +91 91130 67486
              </a>
            </div>
          </div>

          {/* Office Locations */}
          <div className="glass-card p-5 space-y-3 border border-white/10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Locations</h3>
            
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Headquarters (HQ)</p>
                <p className="text-slate-400">Dibrugarh, Assam - IN</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-300 pt-2 border-t border-white/5">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">R&amp;D Center</p>
                <p className="text-slate-400">Bangalore, Karnataka - IN</p>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-card p-5 space-y-3 border border-white/10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Social Channels</h3>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-indigo-400 hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              <a 
                href="https://www.linkedin.com/company/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://www.instagram.com/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-pink-400 hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div className="glass-card p-5 flex items-start gap-4 border border-white/10">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Direct WhatsApp Support</h3>
              <p className="text-xs text-slate-400 mb-2">Prefer instant messaging? Reach out directly on WhatsApp.</p>
              <a
                href="https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20talk%20about%20a%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Message Us on WhatsApp</span> →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7">
        <ContactForm defaultRequirement={defaultReq} sourceContext="contact_page" />
      </div>
    </div>
  );
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ req?: string; ind?: string }> }) {
  const params = await searchParams;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-24">
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <Suspense fallback={<div className="text-slate-400 text-sm">Loading contact form...</div>}>
        <ContactContent searchParams={params} />
      </Suspense>
    </div>
  );
}
