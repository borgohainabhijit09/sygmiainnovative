import React from 'react';
import Link from 'next/link';
import { ArrowRight, Store, GraduationCap, Scissors, Utensils, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/content/industries';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { StartConversationButton } from '@/components/buttons/StartConversationButton';

export const metadata = {
  title: "Industry Solutions — Digital Solutions for Small Businesses",
  description: "Explore digital website, booking, and process automation solutions tailored for Coaching Centres, Salons, Restaurants, and Small Businesses.",
};

export default function IndustriesPage() {
  const industriesList = Object.values(INDUSTRIES_DATA);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      <Breadcrumbs items={[{ label: 'Industries' }]} />

      {/* 2-COLUMN HERO */}
      <section className="relative pt-4 pb-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tailored Industry Context</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Digital solutions built around <span className="gradient-text">the way you work.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Broad technical capabilities translated into the specific language, problems, and daily workflows of your industry.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <StartConversationButton label="Discuss Your Industry" />
              <Link href="#industries-grid" className="btn-secondary text-base px-8 py-3.5 text-center">
                <span>View Focus Markets</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Industry Quick Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-emerald-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-4 bg-[#0b0f17]/90 backdrop-blur-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Supported Business Domains</div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Store className="w-5 h-5 text-indigo-400" />
                    <div className="text-xs font-bold text-white">Small Businesses</div>
                    <div className="text-[10px] text-slate-400">Leads & Reputation</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                    <div className="text-xs font-bold text-white">Coaching Centres</div>
                    <div className="text-[10px] text-slate-400">Admissions & Demos</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Scissors className="w-5 h-5 text-purple-400" />
                    <div className="text-xs font-bold text-white">Salons & Spas</div>
                    <div className="text-[10px] text-slate-400">24/7 Booking Engine</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Utensils className="w-5 h-5 text-amber-400" />
                    <div className="text-xs font-bold text-white">Restaurants</div>
                    <div className="text-[10px] text-slate-400">QR & WhatsApp Menu</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Tailored Workflows
                  </span>
                  <span className="font-semibold text-cyan-400">Fast Setup</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Grid */}
      <div id="industries-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industriesList.map((ind) => (
          <div key={ind.slug} className="glass-card p-8 flex flex-col justify-between space-y-6 border border-white/10 hover:border-indigo-500/40 transition-colors group">
            <div className="space-y-4">
              <span className="badge-indigo">{ind.heroTagline}</span>
              <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {ind.name}
              </h2>
              <p className="text-sm font-semibold text-slate-200">
                {ind.heroHeadline}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ind.heroSubtitle}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 mb-2">Common Challenges Solved:</div>
                <div className="space-y-1">
                  {ind.problems.slice(0, 3).map((prob, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <Link 
                href={`/industries/${ind.slug}`} 
                className="btn-primary text-xs w-full justify-between"
              >
                <span>View {ind.name} Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="glass-card p-8 sm:p-12 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Don&apos;t see your specific industry listed?</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          These are initial focus markets, not restrictions. We build custom websites and digital workflows for any small business or organization.
        </p>
        <StartConversationButton label="Talk About Your Business" />
      </div>
    </div>
  );
}
