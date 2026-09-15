'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { WORK_DATA, CaseStudyItem } from '@/content/work';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export default function WorkPage() {
  const [filter, setFilter] = useState<'all' | 'live' | 'demo'>('all');
  const allProjects = Object.values(WORK_DATA);

  const filteredProjects = allProjects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const liveCount = allProjects.filter(p => p.category === 'live').length;
  const demoCount = allProjects.filter(p => p.category === 'demo').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
      <Breadcrumbs items={[{ label: 'Work & Portfolio' }]} />

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="badge-indigo">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Selected Digital Portfolios</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Things we&apos;ve built. <span className="gradient-text">Problems we&apos;ve solved.</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Explore our showcase of live client websites, direct ordering platforms, education portals, and industry demo systems.
        </p>
      </div>

      {/* Category Filter Pills (Clean, uncluttered design) */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40'
              : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          All Systems ({allProjects.length})
        </button>
        <button
          onClick={() => setFilter('live')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === 'live'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25 border border-emerald-400/40'
              : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          Live Client Sites ({liveCount})
        </button>
        <button
          onClick={() => setFilter('demo')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === 'demo'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-lg shadow-purple-500/25 border border-purple-400/40'
              : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          Demo & Industry Prototypes ({demoCount})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {filteredProjects.map((project: CaseStudyItem) => (
          <div 
            key={project.slug} 
            className="glass-card p-6 flex flex-col justify-between space-y-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className={project.category === 'live' ? 'badge-emerald' : 'badge-indigo'}>
                  {project.category === 'live' ? 'Live Production' : 'Demo System'}
                </span>
                <span className="text-slate-400 font-medium text-[11px]">{project.industryName}</span>
              </div>

              {project.imageUrl && (
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/10 group-hover:border-indigo-500/30 transition-all">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-50" />
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {project.serviceCategory}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              {/* Outcome Metrics */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="pt-1 grid grid-cols-2 gap-2">
                  {project.outcomes.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-sm font-extrabold text-emerald-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 leading-tight truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <Link 
                href={`/work/${project.slug}`} 
                className="btn-primary text-xs w-full justify-between py-2.5"
              >
                <span>Read Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[11px] py-2 w-full justify-center gap-1.5 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/10"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="glass-card p-8 sm:p-12 text-center space-y-6 border border-indigo-500/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Have a business problem you&apos;d like to solve?</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          You don&apos;t need a complex project specification. Tell us what you are trying to achieve, and we will build a practical solution.
        </p>
        <Link href="/contact" className="btn-primary text-sm px-8 py-3">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
