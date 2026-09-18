'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  Monitor, 
  Smartphone, 
  ZoomIn, 
  X, 
  Sparkles,
  ShieldCheck,
  Eye
} from 'lucide-react';

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
  capabilities?: string[];
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
  outcomes,
  capabilities
}: ProjectProofProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Extract display domain for browser bar
  const displayDomain = liveUrl
    ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${projectName.toLowerCase().replace(/[^a-z0-9]/g, '')}.sygmiainnovative.co.in`;

  return (
    <>
      <div className="glass-card p-4 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 bg-[#090d16]/95 backdrop-blur-xl relative overflow-hidden transition-all duration-300">
        
        {/* Glow backdrop behind card */}
        <div className="absolute top-0 right-1/4 w-96 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Card Header: Industry & Verification Badge */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold">
                {industry}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-medium">{projectType}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {projectName}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {isDemo ? (
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Interactive Concept Prototype</span>
              </span>
            ) : (
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Live Production Work</span>
              </span>
            )}
          </div>
        </div>

        {/* BROWSER FRAME & SCREENSHOT SHOWCASE CONTAINER */}
        {screenshot && (
          <div className="space-y-3">
            {/* macOS / Chrome Style Browser Window Header */}
            <div className="rounded-t-2xl bg-[#131a29] border border-white/15 px-4 py-3 flex items-center justify-between flex-wrap gap-2 shadow-lg">
              
              {/* Left: Window Dots */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">UI Preview</span>
              </div>

              {/* Center: Address Bar with Domain */}
              <div className="flex-1 max-w-md mx-auto bg-[#0b0f17] border border-white/10 rounded-xl px-3 py-1.5 flex items-center justify-center gap-2 text-xs text-slate-300 shadow-inner truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-mono text-emerald-300 font-medium truncate">{displayDomain}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0 font-semibold">SSL 256-bit</span>
              </div>

              {/* Right: Controls (Desktop / Mobile view toggle & Zoom Lightbox) */}
              <div className="flex items-center gap-2">
                <div className="bg-[#0b0f17] p-1 rounded-xl border border-white/10 flex items-center gap-1">
                  <button
                    onClick={() => setViewMode('desktop')}
                    title="Desktop Preview Mode"
                    className={`p-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      viewMode === 'desktop' 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden md:inline text-[11px]">Desktop</span>
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    title="Mobile Viewport Mode"
                    className={`p-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      viewMode === 'mobile' 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden md:inline text-[11px]">Mobile</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="btn-secondary py-1.5 px-3 text-[11px] border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/15 flex items-center gap-1.5 cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Inspect Full UI</span>
                </button>
              </div>

            </div>

            {/* SCREENSHOT VIEWPORT BOX (100% CLEAR, HIGH VISIBILITY, NO HEAVY DARK OVERLAY) */}
            <div className="rounded-b-2xl border-x border-b border-white/15 bg-[#05070c] p-3 sm:p-4 relative overflow-hidden group">
              
              {viewMode === 'desktop' ? (
                /* Desktop Viewport */
                <div 
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group/viewport transition-all duration-300"
                >
                  <img
                    src={screenshot}
                    alt={`${projectName} UI Screenshot`}
                    className="w-full h-full object-cover object-top group-hover/viewport:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle top glare rim */}
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover/viewport:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-5 py-2.5 rounded-full bg-indigo-600/90 text-white text-xs font-bold flex items-center gap-2 shadow-2xl border border-white/20 transform translate-y-2 group-hover/viewport:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-cyan-300" />
                      <span>Click to Zoom & Inspect Interface</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Mobile Device Viewport */
                <div className="py-6 flex justify-center bg-[#070a11] rounded-xl border border-white/5">
                  <div 
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative w-[270px] sm:w-[300px] h-[520px] rounded-[38px] border-[6px] border-slate-800 bg-[#000] shadow-2xl overflow-hidden cursor-pointer group/mobile transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {/* Speaker Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-b-xl z-20 flex items-center justify-center">
                      <div className="w-10 h-1 bg-slate-900 rounded-full" />
                    </div>

                    <img
                      src={screenshot}
                      alt={`${projectName} Mobile UI`}
                      className="w-full h-full object-cover object-top pt-4"
                    />

                    {/* Mobile Hover Overlay */}
                    <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 rounded-full bg-indigo-600/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xl border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect UI</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Caption Bar under Screenshot */}
              <div className="pt-3 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 border-t border-white/5 mt-3 px-1">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> High-Resolution Interface Architecture
                </span>
                <span className="text-[11px] text-indigo-300 font-semibold">
                  Click screenshot to open full-screen lightbox preview
                </span>
              </div>
            </div>

          </div>
        )}

        {/* PROJECT DESCRIPTION */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          {description}
        </p>

        {/* DELIVERABLES & CAPABILITIES MATRIX */}
        {((deliverables && deliverables.length > 0) || (capabilities && capabilities.length > 0)) && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Engineered Features & Deliverables</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(deliverables || capabilities || []).map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200 font-medium hover:border-indigo-500/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMMERCIAL OUTCOMES GRID */}
        {outcomes && outcomes.length > 0 && (
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Verified Business Results & Metrics</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {outcomes.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-950/30 via-[#0d131f] to-[#0d131f] border border-emerald-500/30 text-center space-y-1 hover:border-emerald-500/50 transition-colors shadow-lg">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400 tracking-tight">{m.value}</div>
                  <div className="text-xs font-bold text-white">{m.label}</div>
                  <div className="text-[11px] text-slate-400 line-clamp-2 leading-tight">{m.context}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER ACTIONS */}
        <div className="pt-4 border-t border-white/10 flex items-center flex-wrap gap-4 justify-between">
          {caseStudyUrl && (
            <Link href={caseStudyUrl} className="btn-primary text-xs py-3 px-5 flex items-center gap-2">
              <span>View Full Case Study & Breakdown</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-3 px-5 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/15 flex items-center gap-2"
            >
              <span>Visit Live Website ({displayDomain})</span>
              <ExternalLink className="w-4 h-4 text-indigo-400" />
            </a>
          )}
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && screenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[92vh] glass-card bg-[#0b0f17] border border-white/20 rounded-3xl p-4 sm:p-6 flex flex-col space-y-4 overflow-y-auto shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold text-indigo-400">{industry} • {projectType}</span>
                <h4 className="text-xl font-bold text-white">{projectName} — UI Showcase</h4>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center min-h-[300px]">
              <img
                src={screenshot}
                alt={`${projectName} Full UI`}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
              <p className="text-xs text-slate-300 max-w-xl">
                {description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="btn-secondary text-xs py-2 px-4"
                >
                  Close Preview
                </button>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
