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
  PhoneCall
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

            {/* Services Dropdown (Seamless Hover Bridge) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-indigo-400 cursor-pointer ${
                  pathname.startsWith('/services') ? 'text-indigo-400 font-semibold' : 'text-slate-300'
                }`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="rounded-2xl glass-card p-4 border border-white/10 shadow-2xl bg-[#0b0f17]/98 backdrop-blur-xl">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1 mb-2">Core Solutions</div>
                    <div className="space-y-1">
                      <Link 
                        href="/services/business-websites"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-indigo-300">Business Websites</div>
                          <div className="text-xs text-slate-400">Build your digital presence</div>
                        </div>
                      </Link>

                      <Link 
                        href="/services/website-redesign"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-300">Website Redesign</div>
                          <div className="text-xs text-slate-400">Make existing sites work better</div>
                        </div>
                      </Link>

                      <Link 
                        href="/services/business-automation"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-emerald-300">Business Automation</div>
                          <div className="text-xs text-slate-400">Automate manual workflows</div>
                        </div>
                      </Link>

                      <Link 
                        href="/services/custom-business-software"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-300">Custom Software</div>
                          <div className="text-xs text-slate-400">Bespoke tools & portals</div>
                        </div>
                      </Link>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/5">
                      <Link href="/services" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center justify-between px-3 py-1">
                        <span>Explore All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown (Seamless Hover Bridge) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-indigo-400 cursor-pointer ${
                  pathname.startsWith('/industries') ? 'text-indigo-400 font-semibold' : 'text-slate-300'
                }`}
              >
                Industries <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdown ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {industriesDropdown && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="rounded-2xl glass-card p-4 border border-white/10 shadow-2xl bg-[#0b0f17]/98 backdrop-blur-xl">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1 mb-2">Industry Solutions</div>
                    <div className="space-y-1">
                      <Link 
                        href="/industries/small-businesses"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <Store className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-indigo-300">Small Businesses</div>
                          <div className="text-xs text-slate-400">Broad digital solutions</div>
                        </div>
                      </Link>

                      <Link 
                        href="/industries/coaching-centres"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-emerald-300">Coaching Centres</div>
                          <div className="text-xs text-slate-400">Admissions & course portals</div>
                        </div>
                      </Link>

                      <Link 
                        href="/industries/salons"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          <Scissors className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-300">Salons & Spas</div>
                          <div className="text-xs text-slate-400">Booking & service menus</div>
                        </div>
                      </Link>

                      <Link 
                        href="/industries/restaurants"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-amber-300">Restaurants & Cafes</div>
                          <div className="text-xs text-slate-400">Digital menus & ordering</div>
                        </div>
                      </Link>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/5">
                      <Link href="/industries" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center justify-between px-3 py-1">
                        <span>Explore Solutions for Your Industry</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
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
                  <Link href="/services/business-automation" className="block text-sm text-slate-300 hover:text-indigo-300 py-1">Business Automation</Link>
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

