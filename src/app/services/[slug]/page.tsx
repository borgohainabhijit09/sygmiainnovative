import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Building2, 
  MessageSquare,
  Globe,
  RefreshCw,
  Zap,
  Cpu
} from 'lucide-react';
import { SERVICES_DATA } from '@/content/services';
import { INDUSTRIES_DATA } from '@/content/industries';
import { WORK_DATA } from '@/content/work';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { JsonLd, generateServiceSchema, generateFaqSchema } from '@/components/seo/JsonLd';
import { StartConversationButton } from '@/components/buttons/StartConversationButton';

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `https://sygmiainnovative.co.in/services/${service.slug}`,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const relatedIndustries = service.relatedIndustrySlugs
    .map(s => INDUSTRIES_DATA[s])
    .filter(Boolean);

  const whatsappUrl = `https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20discuss%20${encodeURIComponent(service.name)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      
      {/* Structured Data */}
      <JsonLd schema={[
        generateServiceSchema(service.name, service.metaDescription, `https://sygmia.com/services/${service.slug}`),
        generateFaqSchema(service.faqs)
      ]} />

      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: service.name }
      ]} />

      {/* 1. HERO (2-COLUMN HOMEPAGE STYLE) */}
      <section className="relative pt-4 pb-8 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{service.bucket} • {service.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {service.heroHeadline}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {service.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <StartConversationButton requirement={service.slug} />
              <Link href="#deliverables" className="btn-secondary text-base px-8 py-3.5 text-center">
                <span>See Deliverables</span>
              </Link>
            </div>

            {/* Key Capabilities Pills */}
            <div className="pt-6 border-t border-white/10 flex items-center flex-wrap gap-3 text-xs font-medium text-slate-400">
              {service.capabilities.slice(0, 3).map((cap, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Service Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 relative overflow-hidden bg-[#0b0f17]/90 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      {slug === 'business-websites' && <Globe className="w-6 h-6" />}
                      {slug === 'website-redesign' && <RefreshCw className="w-6 h-6" />}
                      {slug === 'business-automation' && <Zap className="w-6 h-6" />}
                      {slug === 'custom-business-software' && <Cpu className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <p className="text-xs text-indigo-400 font-medium">Sygmia Execution</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Expected Commercial Results</div>
                  <div className="space-y-2">
                    {service.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs flex items-center justify-between gap-2">
                        <span className="text-slate-300 font-medium">{d.businessNeed}</span>
                        <span className="font-bold text-indigo-300 shrink-0">✓ Verified</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Transparent Scope
                  </span>
                  <span className="font-semibold text-cyan-400">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="glass-card p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-indigo">The Problem</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {service.problemHeadline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.problemStatement}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.problems.map((prob, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <p className="text-xs text-slate-300 leading-relaxed">{prob}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SOLUTION & CAPABILITIES */}
      <section className="space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="badge-indigo">Sygmia Solution</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {service.solutionHeadline}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.solutionOverview}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, i) => (
            <div key={i} className="glass-card p-6 space-y-3 border border-indigo-500/20">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-white">{cap}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DELIVERABLES MATRIX */}
      <section id="deliverables" className="glass-card p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="space-y-2">
          <span className="badge-indigo">Tangible Results</span>
          <h2 className="text-3xl font-bold text-white">What You Get</h2>
          <p className="text-xs text-slate-400">Clear deliverables mapped directly to your commercial business needs.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4 font-semibold">Your Business Need</th>
                <th className="py-3 px-4 font-semibold text-indigo-400">Sygmia Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {service.deliverables.map((d, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-slate-200 font-medium">{d.businessNeed}</td>
                  <td className="py-4 px-4 text-white font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{d.sygmiaSolution}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. PRICING PHILOSOPHY */}
      <section className="glass-card p-8 text-center space-y-4 border border-indigo-500/30">
        <h3 className="text-xl font-bold text-white">Pricing & Scope Philosophy</h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Every business is different. We scope projects based on what you actually need rather than forcing every business into the same rigid tier package.
        </p>
        <StartConversationButton requirement={service.slug} label="Get a Tailored Proposal" variant="secondary" />
      </section>

      {/* 6. PROCESS STEPS */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-indigo">Process</span>
          <h2 className="text-3xl font-bold text-white">How We Work Together</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((p, i) => (
            <div key={i} className="glass-card p-6 space-y-3">
              <span className="text-2xl font-black text-indigo-400/40">{p.step}</span>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. RELATED INDUSTRIES */}
      {relatedIndustries.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="badge-indigo">Industry Relevance</span>
            <h2 className="text-2xl font-bold text-white">Recommended for These Industries</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedIndustries.map((ind) => (
              <Link 
                key={ind.slug} 
                href={`/industries/${ind.slug}`}
                className="glass-card p-5 space-y-2 hover:border-indigo-500/40 transition-colors group"
              >
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-300">{ind.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{ind.heroTagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 8. FAQ */}
      <section className="space-y-6">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="badge-indigo">Questions</span>
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="glass-card p-10 sm:p-14 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white">Ready to improve your digital side?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Tell us what you&apos;re trying to achieve. We will help you figure out what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <StartConversationButton requirement={service.slug} />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-8 py-3 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </section>

    </div>
  );
}
