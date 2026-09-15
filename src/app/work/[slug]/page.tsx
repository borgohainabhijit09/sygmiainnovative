import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Cpu, 
  Layers, 
  MessageSquare 
} from 'lucide-react';
import { WORK_DATA } from '@/content/work';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export async function generateStaticParams() {
  return Object.keys(WORK_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = WORK_DATA[slug];
  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.metaDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.metaDescription,
      url: `https://sygmiainnovative.co.in/work/${project.slug}`,
    }
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = WORK_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: project.title }
      ]} />

      {/* Header */}
      <section className="space-y-6 max-w-4xl pt-4">
        <div className="flex items-center gap-3">
          <span className="badge-indigo">{project.industryName}</span>
          <span className="text-xs text-slate-400">{project.serviceCategory}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          {project.title}: <span className="gradient-text">{project.tagline}</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          {project.summary}
        </p>
        {project.websiteUrl && (
          <div className="pt-2">
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary text-xs inline-flex items-center gap-2 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10"
            >
              <span>Visit Live Website ({project.clientName})</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
            </a>
          </div>
        )}
      </section>

      {/* Website Preview Banner */}
      {project.imageUrl && (
        <section className="glass-card p-3 border border-white/10 overflow-hidden shadow-2xl">
          <div className="relative w-full h-[320px] sm:h-[480px] rounded-xl overflow-hidden border border-white/10 group">
            <img 
              src={project.imageUrl} 
              alt={`${project.title} Website Showcase`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a11] via-transparent to-transparent opacity-40" />
            {project.websiteUrl && (
              <div className="absolute bottom-6 right-6">
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-xs px-4 py-2 flex items-center gap-2 shadow-2xl backdrop-blur-md"
                >
                  <span>Launch Live Website</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Measurable Outcomes Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {project.outcomes.map((metric, i) => (
          <div key={i} className="glass-card p-6 border-t-2 border-t-emerald-400 space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">{metric.value}</div>
            <div className="text-sm font-bold text-white">{metric.label}</div>
            <div className="text-xs text-slate-400">{metric.context}</div>
          </div>
        ))}
      </section>

      {/* Problem vs Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="glass-card p-8 space-y-4 border border-white/10">
          <span className="badge-indigo bg-red-500/10 text-red-300 border-red-500/20">01. The Challenge</span>
          <h2 className="text-2xl font-bold text-white">What Problem Existed?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="glass-card p-8 space-y-4 border border-emerald-500/30">
          <span className="badge-emerald">02. The Solution</span>
          <h2 className="text-2xl font-bold text-white">What Did Sygmia Build?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Key Capabilities Delivered */}
      <section className="glass-card p-8 sm:p-12 space-y-6 border border-white/10">
        <div className="space-y-1">
          <span className="badge-indigo">Key System Capabilities</span>
          <h2 className="text-2xl font-bold text-white">Deliverables & Features</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.capabilities.map((cap, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
              <span className="text-sm text-slate-200 font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack (Secondary section as required by spec) */}
      <section className="glass-card p-6 space-y-3 border border-white/5">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-purple-400" /> Technology Stack (Supporting Architecture)
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="glass-card p-10 sm:p-14 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white">Want similar results for your business?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Tell us about your business challenges. We will evaluate your setup and recommend a practical solution.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-sm px-8 py-3">
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I%20read%20your%20case%20study%20for%20${encodeURIComponent(project.title)}%20and%20want%20to%20discuss%20my%20business.`}
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
