import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, XCircle, HeartHandshake, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata = {
  title: "About Sygmia Innovative — Digital Solutions for Small Businesses",
  description: "Sygmia helps small businesses and organizations build, improve and automate their digital operations. Read our brand philosophy and approach.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="badge-indigo">Brand Positioning & Philosophy</div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Your business is already working.{' '}
          <span className="gradient-text">Let&apos;s make the digital side work better.</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Sygmia helps small businesses and organizations build, improve and automate their digital operations.
        </p>
      </section>

      {/* Core Beliefs */}
      <section className="glass-card p-8 sm:p-12 space-y-8 border border-white/10">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="badge-indigo">Our Core Beliefs</span>
          <h2 className="text-3xl font-bold text-white">How We View Digital Solutions</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-indigo-300">Solve Business Problems First</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Technology should solve a real business problem. We start with your business goals, not trendy framework hype.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-cyan-300">Practical & Right-Sized</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The right solution is not always the biggest solution. Small businesses deserve practical, manageable digital systems.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-emerald-300">No Jargon Required</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customers should not need to understand technology to work with Sygmia. We communicate clearly in plain business language.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-purple-300">Clear Scope & Transparency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clear expectations, honest pricing, and defined scopes matter. You always know what you are getting.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-amber-300">Built to Grow</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We build for today&apos;s needs without unnecessarily blocking tomorrow&apos;s growth or trapping you in proprietary locks.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 space-y-3">
            <h3 className="text-base font-bold text-rose-300">Zero Added Complexity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We do not introduce complexity merely because it is technically possible. Simplicity is the ultimate sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* What Sygmia Is NOT */}
      <section className="glass-card p-8 sm:p-12 space-y-8 border border-white/10">
        <div className="space-y-2">
          <span className="badge-indigo">Clarity & Boundaries</span>
          <h2 className="text-3xl font-bold text-white">What Sygmia Is NOT</h2>
          <p className="text-xs text-slate-400">We stand apart from typical agencies by focusing strictly on business outcomes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white">Not a Generic Design Agency</h3>
              <p className="text-xs text-slate-400">We don&apos;t just make pretty pictures. We build customer-acquisition and business systems.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white">Not a Cheapest-Freelancer Shop</h3>
              <p className="text-xs text-slate-400">We do not compete on disposable low quality. We deliver reliable long-term value.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white">Not a Tech-Showcase Distraction</h3>
              <p className="text-xs text-slate-400">We don&apos;t force artificial tech buzzwords onto clients who just want their business to work.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white">Not an "Everything Technology" Laundry List</h3>
              <p className="text-xs text-slate-400">We specialize deeply in web presence, UX improvement, and practical business process automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-10 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white">Ready to work with a straightforward partner?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Tell us about your business. We will listen, understand your problem, and give you honest advice.
        </p>
        <Link href="/contact" className="btn-primary text-sm px-8 py-3">
          <span>Start a Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
