import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Mail, MessageSquare, MapPin, PhoneCall } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04060b] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Locations */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#04060b] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-indigo-400 text-sm">S</span>
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">SYGMIA <span className="text-xs text-indigo-400">INNOVATIVE</span></span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Digital solutions for small businesses and organizations. We build websites, improve digital experiences, and automate business processes.
            </p>

            {/* Offices & Contact Details */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">HQ:</span> Dibrugarh, Assam-IN
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">R&amp;D Center:</span> Bangalore, Karnataka-IN
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@sygmiainnovative.co.in" className="hover:text-emerald-300 transition-colors">
                  info@sygmiainnovative.co.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919113067486" className="hover:text-amber-300 transition-colors">
                  +91 91130 67486
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://www.facebook.com/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-indigo-400 hover:bg-white/10 transition-colors"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn Company Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/sygmiainnovative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-pink-400 hover:bg-white/10 transition-colors"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Services</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/services/business-websites" className="hover:text-indigo-400 transition-colors">Business Websites</Link>
              </li>
              <li>
                <Link href="/services/website-redesign" className="hover:text-indigo-400 transition-colors">Website Redesign</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-indigo-400 transition-colors">E-commerce Stores</Link>
              </li>
              <li>
                <Link href="/services/lead-management" className="hover:text-indigo-400 transition-colors">Lead Management</Link>
              </li>
              <li>
                <Link href="/services/booking-systems" className="hover:text-indigo-400 transition-colors">Booking Systems</Link>
              </li>
              <li>
                <Link href="/services/whatsapp-automation" className="hover:text-indigo-400 transition-colors">WhatsApp Automation</Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-indigo-400 transition-colors">Business Automation</Link>
              </li>
              <li>
                <Link href="/services/custom-business-software" className="hover:text-indigo-400 transition-colors">Custom Software</Link>
              </li>
            </ul>
          </div>

          {/* Industry Focus */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Industries</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/industries/small-businesses" className="hover:text-indigo-400 transition-colors">Small Businesses</Link>
              </li>
              <li>
                <Link href="/industries/coaching-centres" className="hover:text-indigo-400 transition-colors">Coaching Centres</Link>
              </li>
              <li>
                <Link href="/industries/salons" className="hover:text-indigo-400 transition-colors">Salons & Spas</Link>
              </li>
              <li>
                <Link href="/industries/restaurants" className="hover:text-indigo-400 transition-colors">Restaurants & Cafes</Link>
              </li>
              <li>
                <Link href="/industries/gyms" className="hover:text-indigo-400 transition-colors">Gyms & Fitness</Link>
              </li>
              <li>
                <Link href="/industries/consultants" className="hover:text-indigo-400 transition-colors">Consultants & Advisors</Link>
              </li>
              <li>
                <Link href="/industries/manufacturers" className="hover:text-indigo-400 transition-colors">Manufacturers & B2B</Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-indigo-400 transition-colors">Real Estate & Developers</Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-indigo-400 transition-colors">Our Work & Case Studies</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors">Start a Conversation</Link>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20discuss%20a%20digital%20solution." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20"
                >
                  <MessageSquare className="w-3 h-3" /> WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Sygmia Innovative. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Practical digital solutions for small businesses.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
