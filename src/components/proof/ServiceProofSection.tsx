'use client';

import React, { useState } from 'react';
import { ProjectProof } from './ProjectProof';
import { WORK_DATA, CaseStudyItem } from '@/content/work';
import { Sparkles, Layers } from 'lucide-react';

interface ServiceProofSectionProps {
  serviceSlug: string;
  serviceName: string;
}

// Map each service slug to a curated list of relevant project slugs
const SERVICE_PROJECT_MAP: Record<string, string[]> = {
  'business-websites': ['julie-hull-landscape', 'bambooho-eco', 'singpho-tea'],
  'website-redesign': ['julie-hull-landscape', 'buzz-firm-demo', 'cr-academy'],
  'business-automation': ['resto-buddy-saas', 'cr-academy', 'dental-clinic-demo'],
  'custom-business-software': ['resto-buddy-saas', 'buzz-firm-demo', 'medicax-hospital-demo'],
  'ecommerce': ['hasty-tasty-bakery', 'singpho-tea', 'bambooho-eco'],
  'lead-management': ['cr-academy', 'resto-buddy-saas', 'buzz-firm-demo'],
  'booking-systems': ['dental-clinic-demo', 'julie-hull-landscape', 'multi-cuisine-demo'],
  'whatsapp-automation': ['resto-buddy-saas', 'cr-academy', 'tiphao-food']
};

export function ServiceProofSection({ serviceSlug, serviceName }: ServiceProofSectionProps) {
  const projectSlugs = SERVICE_PROJECT_MAP[serviceSlug] || [
    'hasty-tasty-bakery',
    'julie-hull-landscape',
    'resto-buddy-saas'
  ];

  const projects: CaseStudyItem[] = projectSlugs
    .map((slug) => WORK_DATA[slug])
    .filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];

  if (!activeProject) return null;

  return (
    <section className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See what we&apos;ve built for <span className="gradient-text">{serviceName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real production systems & verified architecture engineered by Sygmia.
          </p>
        </div>

        {/* Multi-Project Selector Pills */}
        {projects.length > 1 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-400 hidden lg:inline mr-1">Select Example:</span>
            {projects.map((proj, idx) => (
              <button
                key={proj.slug}
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/40'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                <span>{proj.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Render the Active Project Proof */}
      <ProjectProof
        projectName={activeProject.title}
        projectType={activeProject.serviceCategory}
        industry={activeProject.industryName}
        screenshot={activeProject.imageUrl}
        description={activeProject.summary}
        liveUrl={activeProject.websiteUrl}
        caseStudyUrl={`/work/${activeProject.slug}`}
        isDemo={activeProject.isDemo}
        deliverables={activeProject.capabilities}
        outcomes={activeProject.outcomes}
      />
    </section>
  );
}
