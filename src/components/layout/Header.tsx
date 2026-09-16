'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Globe, 
  RefreshCw, 
  Zap, 
  Cpu, 
  Store, 
  GraduationCap, 
  Scissors, 
  Utensils, 
  ArrowRight,
  PhoneCall,
  ShoppingCart,
  Target,
  Calendar,
  MessageSquare,
  Dumbbell,
  Briefcase,
  Factory,
  Building
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useContactModal } from '@/components/modals/ContactModalContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const pathname = usePathname();
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
  }, [pathname]);

  const handleCtaClick = (ctaName: string) => {
    trackEvent({
      event: 'cta_click',
      location: 'header',
      cta: ctaName,
      page: pathname
    });
    openModal({ sourceContext: `header_${ctaName}` });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070a11]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group"
            aria-label="Sygmia Innovative Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070a11] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-xl tracking-tighter">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1">
                SYGMIA <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">INNOVATIVE</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase">Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                pathname === '/' ? 'text-indigo-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Home
            </Link>

            {/* Services Mega Menu (Seamless Hover Bridge) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-indigo-400 cursor-pointer ${
                  pathname.startsWith('/services') ? 'text-indigo-400 font-semibold' : 'text-slate-300'
                }`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full -left-44 pt-3 w-[780px] z-50 animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-200">
                  <div className="rounded-3xl glass-card p-6 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-[#070a11]/98 backdrop-blur-2xl grid grid-cols-12 gap-6 relative overflow-hidden">
                    {/* Background glow accent inside mega menu */}
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />
                    
                    {/* Left Column: Get Online */}
                    <div className="col-span-4 space-y-3 relative z-10 border-r border-white/5 pr-4">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 w-max tracking-wider uppercase">
                        <span>Get Online</span>
                      </div>
                      
                      <div className="space-y-1">
                        <Link 
                          href="/services/business-websites"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-indigo-300">Business Websites</div>
                            <div className="text-[10px] text-slate-400 leading-tight">High-conversion brand sites</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/website-redesign"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                            <RefreshCw className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-cyan-300">Website Redesign</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Speed & UI/UX overhaul</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/ecommerce"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                            <ShoppingCart className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-emerald-300">E-commerce Stores</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Direct online product sales</div>
                          </div>
                        </Link>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <Link href="/services" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center justify-between px-2">
                          <span>View All Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Middle Column: Automate & Custom */}
                    <div className="col-span-5 space-y-3 relative z-10 border-r border-white/5 pr-4">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-300 w-max tracking-wider uppercase">
                        <span>Automate & Build</span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-1">
                        <Link 
                          href="/services/lead-management"
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                            <Target className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-amber-300">Lead Management & CRM</div>
                            <div className="text-[10px] text-slate-400 leading-tight">No lost customer leads</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/booking-systems"
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-purple-300">Booking Systems</div>
                            <div className="text-[10px] text-slate-400 leading-tight">24/7 Service scheduling</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/whatsapp-automation"
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all shrink-0">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-teal-300">WhatsApp Automation</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Instant replies & bots</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/business-automation"
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-pink-300">Process Automation</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Eliminate manual admin work</div>
                          </div>
                        </Link>

                        <Link 
                          href="/services/custom-business-software"
                          className="flex items-start gap-3 p-2 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-blue-300">Custom Software</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Tailored portals & dashboards</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Featured Solution Highlight */}
                    <div className="col-span-3 relative z-10 flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-b from-indigo-950/60 to-purple-950/40 border border-indigo-500/20">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-cyan-300 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/30">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Custom Tech</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-white leading-snug">
                          Need a tailored business system?
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          We solve real business problems without bloated software packages or seat licenses.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setServicesDropdown(false);
                          handleCtaClick('mega_menu_services');
                        }}
                        className="btn-primary text-xs py-2 px-3 w-full justify-center mt-4 cursor-pointer"
                      >
                        <span>Start Conversation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu (Seamless Hover Bridge) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-indigo-400 cursor-pointer ${
                  pathname.startsWith('/industries') ? 'text-indigo-400 font-semibold' : 'text-slate-300'
                }`}
              >
                Industries <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdown ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {industriesDropdown && (
                <div className="absolute top-full -left-64 pt-3 w-[780px] z-50 animate-in fade-in zoom-in-95 slide-in-from-top-3 duration-200">
                  <div className="rounded-3xl glass-card p-6 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-[#070a11]/98 backdrop-blur-2xl grid grid-cols-12 gap-6 relative overflow-hidden">
                    {/* Background glow accent inside mega menu */}
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-600/10 blur-3xl rounded-full pointer-events-none" />

                    {/* Left Column: Local Services */}
                    <div className="col-span-4 space-y-3 relative z-10 border-r border-white/5 pr-4">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-300 w-max tracking-wider uppercase">
                        <span>Local Services</span>
                      </div>
                      
                      <div className="space-y-1">
                        <Link 
                          href="/industries/small-businesses"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                            <Store className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-indigo-300">Small Businesses</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Broad digital presence</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/salons"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0">
                            <Scissors className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-purple-300">Salons & Spas</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Booking & service menus</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/restaurants"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                            <Utensils className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-amber-300">Restaurants & Cafes</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Digital menus & ordering</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/gyms"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all shrink-0">
                            <Dumbbell className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-red-300">Gyms & Fitness</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Trial passes & joins</div>
                          </div>
                        </Link>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <Link href="/industries" className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between px-2">
                          <span>Explore All Industries</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Middle Column: B2B & Institutes */}
                    <div className="col-span-5 space-y-3 relative z-10 border-r border-white/5 pr-4">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-300 w-max tracking-wider uppercase">
                        <span>B2B & Professional</span>
                      </div>
                      
                      <div className="space-y-1">
                        <Link 
                          href="/industries/coaching-centres"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-emerald-300">Coaching Centres</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Admissions & course portals</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/consultants"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-blue-300">Consultants & Advisors</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Authority & discovery calls</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/manufacturers"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                            <Factory className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-cyan-300">Manufacturers & B2B</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Industrial catalogs & RFQs</div>
                          </div>
                        </Link>

                        <Link 
                          href="/industries/real-estate"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                            <Building className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-orange-300">Real Estate & Developers</div>
                            <div className="text-[10px] text-slate-400 leading-tight">Listings & site visit scheduling</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Featured Industry Callout */}
                    <div className="col-span-3 relative z-10 flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-b from-cyan-950/60 to-blue-950/40 border border-cyan-500/20">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                          <Store className="w-3 h-3 text-emerald-400" />
                          <span>Custom Niche</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-white leading-snug">
                          Don&apos;t see your exact industry?
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          We design custom digital workflows tailored to any business model or operational rules.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setIndustriesDropdown(false);
                          handleCtaClick('mega_menu_industries');
                        }}
                        className="btn-primary text-xs py-2 px-3 w-full justify-center mt-4 cursor-pointer bg-cyan-600 hover:bg-cyan-500"
                      >
                        <span>Schedule Call</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/work" 
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                pathname.startsWith('/work') ? 'text-indigo-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Work & Portfolio
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                pathname === '/about' ? 'text-indigo-400 font-semibold' : 'text-slate-300'
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                pathname === '/contact' ? 'text-indigo-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+919113067486" 
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 91130 67486</span>
            </a>
            <button 
              onClick={() => handleCtaClick('start_conversation')}
              className="btn-primary group text-xs px-5 py-2.5 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Animated Toggle Button */}
          <button 
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer transition-transform duration-300 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className={`absolute transition-all duration-300 transform ${mobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
                <Menu className="w-6 h-6" />
              </div>
              <div className={`absolute transition-all duration-300 transform ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}>
                <X className="w-6 h-6" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Animated Accordions */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-[calc(100vh-100%)] min-h-[calc(100vh-60px)] bg-[#070a11]/98 backdrop-blur-2xl z-50 p-6 overflow-y-auto border-t border-white/10 shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex flex-col space-y-5">
            <Link href="/" className="text-lg font-medium text-white hover:text-indigo-400 transition-colors">Home</Link>
            
            {/* Services Accordion Toggle */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-white hover:text-indigo-400 transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-3 space-y-2 pl-3 border-l-2 border-indigo-500/30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link href="/services/business-websites" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Business Websites</Link>
                  <Link href="/services/website-redesign" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Website Redesign</Link>
                  <Link href="/services/ecommerce" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">E-commerce Stores</Link>
                  <Link href="/services/lead-management" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Lead Management & CRM</Link>
                  <Link href="/services/booking-systems" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Booking & Scheduling</Link>
                  <Link href="/services/whatsapp-automation" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">WhatsApp Automation</Link>
                  <Link href="/services/business-automation" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Process Automation</Link>
                  <Link href="/services/custom-business-software" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Custom Software</Link>
                  <Link href="/services" className="block text-xs font-semibold text-indigo-400 py-1">View All Services →</Link>
                </div>
              )}
            </div>

            {/* Industries Accordion Toggle */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-white hover:text-indigo-400 transition-colors cursor-pointer"
              >
                <span>Industries</span>
                <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileIndustriesOpen && (
                <div className="mt-3 space-y-2 pl-3 border-l-2 border-indigo-500/30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link href="/industries/small-businesses" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Small Businesses</Link>
                  <Link href="/industries/coaching-centres" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Coaching Centres</Link>
                  <Link href="/industries/salons" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Salons & Spas</Link>
                  <Link href="/industries/restaurants" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Restaurants & Cafes</Link>
                  <Link href="/industries/gyms" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Gyms & Fitness</Link>
                  <Link href="/industries/consultants" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Consultants & Advisors</Link>
                  <Link href="/industries/manufacturers" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Manufacturers & B2B</Link>
                  <Link href="/industries/real-estate" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Real Estate & Developers</Link>
                  <Link href="/industries" className="block text-xs font-semibold text-indigo-400 py-1">Explore All Solutions →</Link>
                </div>
              )}
            </div>

            <Link href="/work" className="text-lg font-medium text-white hover:text-indigo-400 transition-colors">Work & Portfolio</Link>
            <Link href="/about" className="text-lg font-medium text-white hover:text-indigo-400 transition-colors">About Sygmia</Link>
            <Link href="/contact" className="text-lg font-medium text-white hover:text-indigo-400 transition-colors">Contact Us</Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:+919113067486" className="text-sm text-emerald-400 font-semibold flex items-center justify-center gap-2 py-2">
                <PhoneCall className="w-4 h-4" /> Call +91 91130 67486
              </a>
              <button 
                className="btn-primary w-full text-center py-3 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick('mobile_start_conversation');
                }}
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

