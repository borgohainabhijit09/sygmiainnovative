import React from 'react';
import Link from 'next/link';
import { ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';

export interface ProjectProofProps {
  projectName: string;
  projectType: string;
  industry: string;
  screenshot?: string;
  description: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  isDemo: boolean;
  deliverables?: string[];
  outcomes?: { label: string; value: string; context: string }[];
}

export function ProjectProof({
  projectName,
  projectType,
  industry,
  screenshot,
  description,
  liveUrl,
  caseStudyUrl,
  isDemo,
  deliverables,
  outcomes
}: ProjectProofProps) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all space-y-6 bg-[#0b0f17]/90">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-400 font-semibold">{industry}</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">{projectType}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{projectName}</h3>
        </div>
        <div>
          {isDemo ? (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Demo Project
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              ✓ Verified Client Work
            </span>
          )}
        </div>
      </div>

      {screenshot && (
        <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 group">
          <img
            src={screenshot}
            alt={`${projectName} Preview`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-60" />
        </div>
      )}

      <p className="text-sm text-slate-300 leading-relaxed">
        {description}
      </p>

      {deliverables && deliverables.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {outcomes && outcomes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {outcomes.map((m, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center space-y-0.5">
              <div className="text-sm font-bold text-emerald-400">{m.value}</div>
              <div className="text-[11px] font-semibold text-white">{m.label}</div>
              <div className="text-[10px] text-slate-400 truncate">{m.context}</div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-white/10 flex items-center flex-wrap gap-4 justify-between">
        {caseStudyUrl && (
          <Link href={caseStudyUrl} className="btn-primary text-xs py-2.5 px-4">
            <span>View Project Breakdown</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-4 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/10 inline-flex items-center gap-1.5"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
