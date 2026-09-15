import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Globe, 
  RefreshCw, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare,
  Building2,
  GraduationCap,
  Scissors,
  Utensils,
  Store,
  Compass,
  Layers,
  ChevronRight
} from 'lucide-react';
import { WORK_DATA } from '@/content/work';
import { INDUSTRIES_DATA } from '@/content/industries';
import { StartConversationButton } from '@/components/buttons/StartConversationButton';

export const metadata = {
  title: "Sygmia Innovative — Digital Solutions for Small Businesses",
  description: "We build websites, improve digital experiences and automate business processes for small businesses and organizations.",
};

export default function HomePage() {
  const featuredWork = Object.values(WORK_DATA).filter(w => w.featured);

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* SECTION 1: HOMEPAGE HERO */}
      <section className="relative pt-8 md:pt-16 pb-12 md:pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/20 to-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Digital Solutions for Small Businesses & Organizations</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Your business is already working.{' '}
                <span className="gradient-text">Let&apos;s make the digital side work better.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                We build websites, improve digital experiences and automate business processes for small businesses and organizations.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <StartConversationButton />
                <Link href="/work" className="btn-secondary text-base px-8 py-3.5 text-center">
                  <span>See Our Work</span>
                </Link>
              </div>

              {/* Supporting Line */}
              <div className="pt-6 border-t border-white/10 flex items-center flex-wrap gap-4 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Websites
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Digital Experiences
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Business Automation
                </span>
              </div>
            </div>

            {/* Right Column: Device Showcase Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring under image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-cyan-400/20 to-purple-500/30 rounded-3xl blur-2xl -z-10 transform scale-95" />
                
                {/* Device Frame */}
                <div className="glass-card p-3 sm:p-4 rounded-3xl border border-white/15 shadow-2xl relative group overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden bg-[#070a11]">
                    <img 
                      src="/images/hero-devices.png" 
                      alt="Sygmia Website Showcase on Laptop, Mobile, and Tablet"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Responsive Mockups</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>Multi-Device Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 2: THREE CORE COMMERCIAL BUCKETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="badge-indigo">Practical Entry Points</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where is your business right now?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We structure our work around three fundamental business stages so you get exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: GET ONLINE */}
          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-indigo-500 space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Bucket 01</span>
                <h3 className="text-xl font-bold text-white mt-1">GET ONLINE</h3>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                &ldquo;You don&apos;t have a proper digital presence yet.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build a professional website and digital foundation that gives customers a better way to discover and connect with your business.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/services/business-websites" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Get Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: IMPROVE WHAT YOU HAVE */}
          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-cyan-400 space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Bucket 02</span>
                <h3 className="text-xl font-bold text-white mt-1">IMPROVE WHAT YOU HAVE</h3>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                &ldquo;Your website exists. But it isn&apos;t doing enough.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Redesign, optimize and improve your existing digital presence so it works better for your customers and your business.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/services/website-redesign" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Improve</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: AUTOMATE YOUR WORK */}
          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-emerald-400 space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Bucket 03</span>
                <h3 className="text-xl font-bold text-white mt-1">AUTOMATE YOUR WORK</h3>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                &ldquo;You&apos;re doing too much manually.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Turn repetitive processes into connected digital workflows, dashboards, WhatsApp alerts, and custom business systems.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/services/business-automation" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Automate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: PROBLEM SECTION (THE DISCOVERY GAP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Core Message & Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-indigo">The Discovery Gap</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Technology isn&apos;t the problem.{' '}
                <span className="gradient-text">Knowing what to build is.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Small businesses often know they need a website, better systems or automation — but aren&apos;t sure where to start, what they actually need, or whom to trust.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="text-sm font-semibold text-white">
                  We help you figure that out before we start building.
                </p>
                <StartConversationButton label="Talk With Us First" variant="secondary" />
              </div>
            </div>

            {/* Right Column: Diagnostic Question Cards (Fills the blank space) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Discovery Scenario 01</span>
                <p className="text-sm font-bold text-indigo-300">&ldquo;I need a website.&rdquo;</p>
                <p className="text-xs text-slate-400 leading-relaxed">But what kind will actually bring real paying customers instead of sitting idle?</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Discovery Scenario 02</span>
                <p className="text-sm font-bold text-cyan-300">&ldquo;We need to automate.&rdquo;</p>
                <p className="text-xs text-slate-400 leading-relaxed">But where do you begin without causing chaos in daily operations?</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Discovery Scenario 03</span>
                <p className="text-sm font-bold text-emerald-300">&ldquo;Our site isn&apos;t working.&rdquo;</p>
                <p className="text-xs text-slate-400 leading-relaxed">But what is actually broken under the hood — UX, speed, or SEO?</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-colors space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">Discovery Scenario 04</span>
                <p className="text-sm font-bold text-purple-300">&ldquo;We need custom software.&rdquo;</p>
                <p className="text-xs text-slate-400 leading-relaxed">How do we build lightweight tools without paying massive enterprise fees?</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4: WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="badge-indigo">Core Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From your first website to your next business system.
            </h2>
          </div>
          <Link href="/services" className="btn-secondary text-xs self-start md:self-auto">
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Link href="/services/business-websites" className="glass-card p-6 space-y-4 hover:border-indigo-500/40 transition-colors group">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit border border-indigo-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">Websites</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional business websites, high-converting landing pages, and clean e-commerce storefronts.
            </p>
          </Link>

          {/* Card 2 */}
          <Link href="/services/website-redesign" className="glass-card p-6 space-y-4 hover:border-cyan-400/40 transition-colors group">
            <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 w-fit border border-cyan-400/20">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Digital Experiences</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Redesign, page speed overhaul, mobile UX improvement, and search engine optimization foundations.
            </p>
          </Link>

          {/* Card 3 */}
          <Link href="/services/business-automation" className="glass-card p-6 space-y-4 hover:border-emerald-400/40 transition-colors group">
            <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 w-fit border border-emerald-400/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Business Automation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Replace repetitive manual copy-pasting with connected WhatsApp alerts, booking calendars, and workflows.
            </p>
          </Link>

          {/* Card 4 */}
          <Link href="/services/custom-business-software" className="glass-card p-6 space-y-4 hover:border-purple-400/40 transition-colors group">
            <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400 w-fit border border-purple-400/20">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Custom Software</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When standard tools do not fit, we build lightweight internal portals, databases, and operational dashboards.
            </p>
          </Link>
        </div>
      </section>


      {/* SECTION 5: APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 border border-white/10 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="badge-indigo">Working Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              We don&apos;t start with technology. We start with your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 01 */}
            <div className="space-y-4 relative">
              <span className="text-4xl font-extrabold text-indigo-500/30">01</span>
              <h3 className="text-xl font-bold text-white">Understand</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                What does your business actually need? Who are your customers, and what problem are they trying to solve when they land on your page?
              </p>
            </div>

            {/* Step 02 */}
            <div className="space-y-4 relative">
              <span className="text-4xl font-extrabold text-cyan-500/30">02</span>
              <h3 className="text-xl font-bold text-white">Simplify</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                What can be improved, removed, or automated? We cut away unnecessary steps and design a clean, friction-free customer journey.
              </p>
            </div>

            {/* Step 03 */}
            <div className="space-y-4 relative">
              <span className="text-4xl font-extrabold text-emerald-500/30">03</span>
              <h3 className="text-xl font-bold text-white">Build</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                What technology will solve the problem robustly? We build custom, fast-loading software assets that require low maintenance.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-sm font-semibold text-indigo-300">
              The right solution isn&apos;t always the biggest one.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 6: INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="badge-indigo">Industry Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Different businesses. Similar digital problems.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From coaching institutes to local salons and dining spots, we build practical digital solutions around the way you work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/small-businesses" className="glass-card p-6 space-y-3 hover:border-indigo-500/40 transition-colors group">
            <Store className="w-6 h-6 text-indigo-400" />
            <h3 className="text-base font-bold text-white group-hover:text-indigo-300">Small Businesses</h3>
            <p className="text-xs text-slate-400">Broad digital presence, trust building & lead capture.</p>
          </Link>

          <Link href="/industries/coaching-centres" className="glass-card p-6 space-y-3 hover:border-emerald-400/40 transition-colors group">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300">Coaching Centres</h3>
            <p className="text-xs text-slate-400">Course portals, syllabus downloads & demo booking.</p>
          </Link>

          <Link href="/industries/salons" className="glass-card p-6 space-y-3 hover:border-purple-400/40 transition-colors group">
            <Scissors className="w-6 h-6 text-purple-400" />
            <h3 className="text-base font-bold text-white group-hover:text-purple-300">Salons & Spas</h3>
            <p className="text-xs text-slate-400">Digital service menus & 24/7 appointment booking.</p>
          </Link>

          <Link href="/industries/restaurants" className="glass-card p-6 space-y-3 hover:border-amber-400/40 transition-colors group">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h3 className="text-base font-bold text-white group-hover:text-amber-300">Restaurants & Cafes</h3>
            <p className="text-xs text-slate-400">Direct QR code menus & commission-free ordering.</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/industries" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1">
            <span>Explore Solutions for Your Industry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>


      {/* SECTION 7: WORK SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="badge-indigo">Demonstrated Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Things we&apos;ve built. Problems we&apos;ve solved.
            </h2>
          </div>
          <Link href="/work" className="btn-secondary text-xs self-start md:self-auto">
            <span>View All Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWork.map((project) => (
            <Link 
              key={project.slug} 
              href={`/work/${project.slug}`}
              className="glass-card p-6 flex flex-col justify-between space-y-6 hover:border-indigo-500/40 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="badge-indigo">{project.industryName}</span>
                  <span>{project.serviceCategory}</span>
                </div>
                {project.imageUrl && (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/10 group-hover:border-indigo-500/30 transition-all">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-60" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {project.outcomes.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/5 text-center">
                      <div className="text-sm font-bold text-emerald-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-semibold text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Case Study <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* SECTION 8: PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="badge-indigo">Clear Execution</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A straightforward process. No technical maze.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Talk', desc: 'Tell us what is happening in your business.' },
            { step: '02', title: 'Understand', desc: 'We analyze your workflows and goals.' },
            { step: '03', title: 'Plan', desc: 'We recommend the right practical approach.' },
            { step: '04', title: 'Build', desc: 'We design, develop, and test thoroughly.' },
            { step: '05', title: 'Launch & Improve', desc: 'We deploy and continue supporting growth.' }
          ].map((p, i) => (
            <div key={i} className="glass-card p-5 space-y-2 border border-white/5">
              <span className="text-2xl font-black text-indigo-400/40">{p.step}</span>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <StartConversationButton />
        </div>
      </section>


      {/* SECTION 9: TRUST & FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Trust Points */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="badge-indigo">Building Trust</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              You don&apos;t need to know technology. You just need someone who understands your problem.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl glass-card flex items-start gap-4">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Clear Scope</h3>
                <p className="text-xs text-slate-400">You know exactly what you are getting and why it matters before work begins.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-card flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Practical Solutions</h3>
                <p className="text-xs text-slate-400">We do not build unnecessary complexity just for the sake of it.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-card flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Direct Communication</h3>
                <p className="text-xs text-slate-400">Communicate directly with the people building your project — no account managers in between.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="badge-indigo">Common Questions</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 text-xs">
            <div className="glass-card p-5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" /> Do you only build websites?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                No. Websites are one part of what Sygmia does. Sygmia also works on business automation, dashboards, custom software, and digital workflows.
              </p>
            </div>

            <div className="glass-card p-5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" /> Do you work with small businesses?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Yes. Our primary focus is practical, affordable digital solutions for small businesses and growing organizations.
              </p>
            </div>

            <div className="glass-card p-5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" /> I don&apos;t know what solution I need. Can you help?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Yes. Simply describe your business problem or objective without preparing a technical specification. We will help you figure out what you need.
              </p>
            </div>

            <div className="glass-card p-5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" /> Can you improve an existing website?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Yes. We evaluate and improve existing websites instead of unnecessarily rebuilding everything from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 10: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 sm:p-16 text-center space-y-8 border border-indigo-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-cyan-500/10 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Have a business problem you&apos;d like to solve?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              You don&apos;t need a technical specification. Tell us what you&apos;re trying to achieve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <StartConversationButton />
            <a
              href="https://wa.me/919113067486?text=Hello%20Sygmia%20Innovative,%20I'd%20like%20to%20talk%20about%20a%20digital%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
