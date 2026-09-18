import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Globe, 
  RefreshCw, 
  Zap, 
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Store,
  GraduationCap,
  Scissors,
  Utensils,
  Plane,
  Heart,
  ShoppingCart,
  Truck,
  Building,
  Briefcase,
  Factory,
  Dumbbell
} from 'lucide-react';
import { INDUSTRIES_DATA } from '@/content/industries';
import { SERVICES_DATA } from '@/content/services';
import { WORK_DATA } from '@/content/work';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { JsonLd, generateServiceSchema, generateFaqSchema } from '@/components/seo/JsonLd';
import { StartConversationButton } from '@/components/buttons/StartConversationButton';
import { ProjectProof } from '@/components/proof/ProjectProof';

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return {};

  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.seoTitle,
      description: industry.metaDescription,
      url: `https://sygmiainnovative.co.in/industries/${industry.slug}`,
    }
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    notFound();
  }

  const relatedServices = industry.relatedServiceSlugs
    .map(s => SERVICES_DATA[s])
    .filter(Boolean);

  const featuredProject = industry.featuredProjectSlug 
    ? WORK_DATA[industry.featuredProjectSlug] 
    : Object.values(WORK_DATA).find(w => w.industrySlug === slug) || null;

  const whatsappUrl = `https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20discuss%20${encodeURIComponent(industry.name)}%20solutions.`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      
      {/* Structured Data */}
      <JsonLd schema={[
        generateServiceSchema(industry.name, industry.metaDescription, `https://sygmiainnovative.co.in/industries/${industry.slug}`),
        generateFaqSchema(industry.faqs)
      ]} />

      <Breadcrumbs items={[
        { label: 'Industries', href: '/industries' },
        { label: industry.name }
      ]} />

      {/* 1. HERO (2-COLUMN HOMEPAGE STYLE) */}
      <section className="relative pt-4 pb-8 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{industry.heroTagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {industry.heroHeadline}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {industry.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <StartConversationButton requirement={industry.slug} label={industry.ctaText} />
              <Link href="#workflow" className="btn-secondary text-base px-8 py-3.5 text-center">
                <span>See Workflow System</span>
              </Link>
            </div>

            {/* Quick Benefits List */}
            <div className="pt-6 border-t border-white/10 flex items-center flex-wrap gap-3 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Digital Intake
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Direct WhatsApp Routing
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Mobile Responsive
              </div>
            </div>
          </div>

          {/* Right Column: Industry Workflow Preview Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-emerald-400/20 rounded-3xl blur-2xl -z-10 transform scale-95" />
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 relative overflow-hidden bg-[#0b0f17]/90 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {slug === 'small-businesses' && <Store className="w-6 h-6" />}
                      {slug === 'coaching-centres' && <GraduationCap className="w-6 h-6" />}
                      {slug === 'salons' && <Scissors className="w-6 h-6" />}
                      {slug === 'restaurants' && <Utensils className="w-6 h-6" />}
                      {slug === 'gyms' && <Dumbbell className="w-6 h-6" />}
                      {slug === 'consultants' && <Briefcase className="w-6 h-6" />}
                      {slug === 'manufacturers' && <Factory className="w-6 h-6" />}
                      {slug === 'real-estate' && <Building className="w-6 h-6" />}
                      {slug === 'travel-agencies' && <Plane className="w-6 h-6" />}
                      {slug === 'ngos' && <Heart className="w-6 h-6" />}
                      {slug === 'ecommerce-brands' && <ShoppingCart className="w-6 h-6" />}
                      {slug === 'distributors' && <Truck className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                      <p className="text-xs text-emerald-400 font-medium">Digital Workflow Architecture</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Customer Flow Stages</div>
                  <div className="space-y-2">
                    {industry.workflowSteps.slice(0, 3).map((ws, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs flex items-center justify-between gap-2">
                        <span className="font-bold text-indigo-400">{ws.step}</span>
                        <span className="text-slate-200 font-semibold flex-1 text-center">{ws.stage}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Custom Tailored
                  </span>
                  <span className="font-semibold text-indigo-300">Zero Maintenance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INDUSTRY PROBLEM */}
      <section className="glass-card p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-indigo">Real Friction Points</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {industry.problemHeadline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {industry.problemStatement}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industry.problems.map((prob, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
              <p className="text-xs text-slate-300 leading-relaxed">{prob}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THREE BUCKETS tailored to industry */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="badge-indigo">Structured Progression</span>
          <h2 className="text-3xl font-bold text-white">Three Ways We Help Your Business</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Get Online */}
          <div className="glass-card p-6 space-y-4 border-t-2 border-t-indigo-500">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">GET ONLINE</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {industry.bucketOverview.getOnline.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Improve */}
          <div className="glass-card p-6 space-y-4 border-t-2 border-t-cyan-400">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">IMPROVE</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {industry.bucketOverview.improve.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automate */}
          <div className="glass-card p-6 space-y-4 border-t-2 border-t-emerald-400">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">AUTOMATE</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {industry.bucketOverview.automate.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY WORKFLOW VISUALIZATION */}
      <section id="workflow" className="glass-card p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="badge-indigo">Customer Journey</span>
          <h2 className="text-3xl font-bold text-white">{industry.workflowHeadline}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {industry.workflowSteps.map((ws, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-indigo-400">{ws.step}</span>
              <h3 className="text-sm font-bold text-white">{ws.stage}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{ws.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY / PROOF Component */}
      {featuredProject && (
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="badge-indigo">Industry Proof of Work</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">See what this can look like</h2>
          </div>

          <ProjectProof
            projectName={featuredProject.title}
            projectType={featuredProject.serviceCategory}
            industry={featuredProject.industryName}
            screenshot={featuredProject.imageUrl}
            description={featuredProject.summary}
            liveUrl={featuredProject.websiteUrl}
            caseStudyUrl={`/work/${featuredProject.slug}`}
            isDemo={featuredProject.isDemo}
            outcomes={featuredProject.outcomes}
            capabilities={featuredProject.capabilities}
          />
        </section>
      )}

      {/* 5. RELEVANT SERVICES */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="badge-indigo">Capabilities</span>
          <h2 className="text-2xl font-bold text-white">Services Tailored for {industry.name}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedServices.map((srv) => (
            <Link 
              key={srv.slug} 
              href={`/services/${srv.slug}`}
              className="glass-card p-5 space-y-2 hover:border-indigo-500/40 transition-colors group"
            >
              <h3 className="text-sm font-bold text-white group-hover:text-indigo-300">{srv.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{srv.heroHeadline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="space-y-6">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="badge-indigo">Questions</span>
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.faqs.map((faq, i) => (
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

      {/* 7. FINAL CTA */}
      <section className="glass-card p-10 sm:p-14 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white">Ready to improve your digital operations?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Tell us about your business goals. We will design the right practical digital path forward.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <StartConversationButton requirement={industry.slug} label={industry.ctaText} />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-8 py-3 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </section>

    </div>
  );
}

