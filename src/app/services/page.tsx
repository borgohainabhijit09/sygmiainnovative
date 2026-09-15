import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, RefreshCw, Zap, Cpu, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '@/content/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { StartConversationButton } from '@/components/buttons/StartConversationButton';

export const metadata = {
  title: "Services — Get Online, Improve & Automate",
  description: "Explore Sygmia's digital services: Business websites, website redesign, process automation, and custom software.",
};

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* 2-COLUMN HERO */}
      <section className="relative pt-4 pb-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Practical Digital Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Practical digital services built for <span className="gradient-text">business growth.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              From your first website to complex business automation and custom portals, we match technology directly to your commercial business goals.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <StartConversationButton label="Explore Custom Solution" />
              <Link href="#services-grid" className="btn-secondary text-base px-8 py-3.5 text-center">
                <span>View All 4 Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Capabilities Summary Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-4 bg-[#0b0f17]/90 backdrop-blur-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">Core Capability Matrix</div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    <div className="text-xs font-bold text-white">Get Online</div>
                    <div className="text-[10px] text-slate-400">Websites & Portals</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <RefreshCw className="w-5 h-5 text-cyan-400" />
                    <div className="text-xs font-bold text-white">Improve</div>
                    <div className="text-[10px] text-slate-400">Redesign & Speed</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <div className="text-xs font-bold text-white">Automate</div>
                    <div className="text-[10px] text-slate-400">WhatsApp & Workflows</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <div className="text-xs font-bold text-white">Custom Tools</div>
                    <div className="text-[10px] text-slate-400">Internal Systems</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Plain-English Scope
                  </span>
                  <span className="font-semibold text-indigo-300">Affordable Tiers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service) => (
          <div key={service.slug} className="glass-card p-8 flex flex-col justify-between space-y-6 border border-white/10 hover:border-indigo-500/40 transition-colors group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-indigo">{service.bucket}</span>
                <span className="text-xs text-slate-400 font-medium">{service.tagline}</span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {service.name}
              </h2>
              <p className="text-sm font-semibold text-slate-200">
                {service.heroHeadline}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {service.heroSubtitle}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 mb-2">Key Capabilities:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <Link 
                href={`/services/${service.slug}`} 
                className="btn-primary text-xs w-full justify-between"
              >
                <span>View Full Service Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="glass-card p-8 sm:p-12 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Not sure which service you need?</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Tell us what problem you are facing in your business. We will recommend the right approach without pushing unnecessary complexity.
        </p>
        <StartConversationButton label="Start a Conversation" />
      </div>
    </div>
  );
}
