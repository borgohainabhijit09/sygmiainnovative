export interface ServiceDeliverable {
  businessNeed: string;
  sygmiaSolution: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  bucket: 'GET ONLINE' | 'IMPROVE WHAT YOU HAVE' | 'AUTOMATE YOUR WORK' | 'CUSTOM SOFTWARE';
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  problemHeadline: string;
  problemStatement: string;
  problems: string[];
  solutionHeadline: string;
  solutionOverview: string;
  capabilities: string[];
  deliverables: ServiceDeliverable[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  relatedIndustrySlugs: string[];
  seoTitle: string;
  metaDescription: string;
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  'business-websites': {
    slug: 'business-websites',
    name: 'Business Websites',
    bucket: 'GET ONLINE',
    tagline: 'Build Your Digital Presence',
    heroHeadline: 'A professional website built around your business — not a generic template.',
    heroSubtitle: 'Fast, responsive, and conversion-focused business websites designed to help customers discover, trust, and connect with your business.',
    problemHeadline: 'Why most small business websites fail to produce results',
    problemStatement: 'Many business websites end up as slow, outdated digital business cards that confuse visitors, fail to explain services clearly, and yield zero customer enquiries.',
    problems: [
      'Cluttered layouts that make services and pricing hard to find',
      'Slow load speeds and poor mobile responsiveness',
      'No clear call-to-action to turn visitors into real leads',
      'Built on heavy templates that break easily and are hard to update'
    ],
    solutionHeadline: 'Clear messaging, modern design, and measurable customer enquiries',
    solutionOverview: 'Sygmia builds custom websites structured specifically around your customer journey. We handle copywriting structure, mobile responsiveness, fast performance, and direct WhatsApp/enquiry routing from day one.',
    capabilities: [
      'Custom Responsive Design (Desktop & Mobile)',
      'High-Intent Landing Page Architecture',
      'WhatsApp & One-Click Phone Integration',
      'SEO & Local Search Readiness',
      'Fast Performance & Core Web Vitals Optimization',
      'Google Analytics & Conversion Tracking'
    ],
    deliverables: [
      { businessNeed: 'Professional Presence', sygmiaSolution: 'Modern, high-contrast responsive website' },
      { businessNeed: 'Customer Discovery', sygmiaSolution: 'SEO-ready structure and Google Search setup' },
      { businessNeed: 'Immediate Enquiries', sygmiaSolution: 'Direct WhatsApp and lead form integrations' },
      { businessNeed: 'Mobile Customers', sygmiaSolution: 'Touch-optimized mobile user interface' },
      { businessNeed: 'Performance & Speed', sygmiaSolution: 'Optimized asset delivery & instant page loads' },
      { businessNeed: 'Measuring Growth', sygmiaSolution: 'Built-in conversion & analytics tracking' }
    ],
    processSteps: [
      { step: '01', title: 'Discovery & Messaging', description: 'We analyze your business, customer offer, and key value propositions.' },
      { step: '02', title: 'Structure & UX Design', description: 'We design clear page layouts that guide visitors toward taking action.' },
      { step: '03', title: 'Development & Build', description: 'We code your site for maximum speed, security, and mobile responsiveness.' },
      { step: '04', title: 'Launch & Analytics', description: 'We connect tracking, test all enquiry paths, and deploy live.' }
    ],
    faqs: [
      { question: 'How long does a business website take to build?', answer: 'Typically 2 to 3 weeks from initial strategy session to live launch.' },
      { question: 'Will my website work well on mobile phones?', answer: 'Yes. Every Sygmia website is engineered mobile-first with touch-friendly navigation.' },
      { question: 'Can customers message me directly on WhatsApp?', answer: 'Yes, we integrate direct WhatsApp action buttons pre-filled with context about what service the customer is viewing.' }
    ],
    relatedIndustrySlugs: ['small-businesses', 'coaching-centres', 'salons', 'restaurants'],
    seoTitle: 'Business Website Development for Small Businesses | Sygmia Innovative',
    metaDescription: 'Get a fast, professional business website designed to convert visitors into phone calls, WhatsApp messages, and qualified leads.'
  },
  'website-redesign': {
    slug: 'website-redesign',
    name: 'Website Redesign & Optimization',
    bucket: 'IMPROVE WHAT YOU HAVE',
    tagline: 'Transform Existing Digital Assets',
    heroHeadline: 'Turn an outdated, ineffective website into a customer conversion engine.',
    heroSubtitle: 'We fix bad mobile layouts, slow loading speeds, confusing navigation, and weak lead flow without throwing away what already works.',
    problemHeadline: 'Is your current website costing you potential customers?',
    problemStatement: 'If visitors leave your site in seconds or you never get enquiries from your web presence, your site suffers from structural UX, speed, or positioning flaws.',
    problems: [
      'Outdated aesthetics that fail to inspire trust in potential clients',
      'Slow mobile load times driving visitors back to Google search',
      'Confusing navigation where customers cannot find pricing or services',
      'No tracking or insight into how many leads your site is missing'
    ],
    solutionHeadline: 'Strategic visual redesign and technical performance overhaul',
    solutionOverview: 'We evaluate your current site, preserve strong SEO content, rebuild the user interface for modern devices, and implement a direct lead capture strategy.',
    capabilities: [
      'Complete Visual UI/UX Overhaul',
      'Core Web Vitals & Speed Optimization',
      'Mobile Experience Redesign',
      'Conversion Rate Optimization (CRO)',
      'SEO Content Preserving & Structure Fixes',
      'Lead Path & Contact Form Streamlining'
    ],
    deliverables: [
      { businessNeed: 'Rebuilding Trust', sygmiaSolution: 'Modern visual aesthetics & clear social proof' },
      { businessNeed: 'Speed & Mobile Users', sygmiaSolution: '90+ Google Lighthouse performance score overhaul' },
      { businessNeed: 'Lead Conversions', sygmiaSolution: 'Simplified enquiry paths & high-contrast CTAs' },
      { businessNeed: 'Preserving SEO Ranks', sygmiaSolution: 'Full URL redirect mapping and metadata retention' }
    ],
    processSteps: [
      { step: '01', title: 'Website Audit', description: 'We identify exact bounce causes, speed bottlenecks, and conversion gaps.' },
      { step: '02', title: 'Redesign Blueprint', description: 'We wireframe a cleaner, faster user journey.' },
      { step: '03', title: 'Rebuild & Migration', description: 'We rebuild the UI on a clean tech stack with zero downtime.' },
      { step: '04', title: 'Optimization & Launch', description: 'We test across devices and verify conversion analytics.' }
    ],
    faqs: [
      { question: 'Do I have to start from scratch to fix my site?', answer: 'Not always. We evaluate what content and search ranking you have, preserving existing value while fixing design and performance.' },
      { question: 'How do you measure if the redesign works?', answer: 'We track page load speed improvements and monitor conversion events like form fills and phone calls.' }
    ],
    relatedIndustrySlugs: ['small-businesses', 'salons', 'restaurants', 'coaching-centres'],
    seoTitle: 'Website Redesign & Conversion Optimization | Sygmia Innovative',
    metaDescription: 'Upgrade your outdated website with custom UX redesign, page speed fixes, and conversion optimization built for small businesses.'
  },
  'business-automation': {
    slug: 'business-automation',
    name: 'Business Process Automation',
    bucket: 'AUTOMATE YOUR WORK',
    tagline: 'Eliminate Repetitive Manual Work',
    heroHeadline: 'Connect your website, customer enquiries, and daily business workflows.',
    heroSubtitle: 'Stop copying lead data manually, losing track of WhatsApp messages, or managing appointments on paper. Put your operations on autopilot.',
    problemHeadline: 'The hidden cost of manual business administration',
    problemStatement: 'Small business owners waste hours every day manually responding to repetitive questions, scheduling appointments, and manually tracking enquiries in notebooks or scattered chats.',
    problems: [
      'Leads lost because follow-ups take hours or days instead of minutes',
      'Endless manual messaging to confirm bookings or share service details',
      'Scattered customer records across personal phones and notebooks',
      'No clear visibility into business performance or active lead status'
    ],
    solutionHeadline: 'Automated enquiry routing, notifications, and workflow management',
    solutionOverview: 'We design custom automation flows that connect lead capture forms, WhatsApp auto-responders, booking calendars, and customer record dashboards.',
    capabilities: [
      'WhatsApp Workflow & Auto-Responder Setup',
      'Lead Capture & Auto-Notification Routing',
      'Automated Appointment & Booking Systems',
      'Customer Relationship & Pipeline Dashboards',
      'Invoice & Notification Workflows',
      'Integration across Custom Forms & Cloud Tools'
    ],
    deliverables: [
      { businessNeed: 'Instant Response to Leads', sygmiaSolution: 'Automated WhatsApp & Email acknowledgement' },
      { businessNeed: 'No Missed Bookings', sygmiaSolution: 'Self-service online booking with auto-reminders' },
      { businessNeed: 'Lead Organization', sygmiaSolution: 'Centralized lead pipeline dashboard' },
      { businessNeed: 'Save Weekly Hours', sygmiaSolution: 'Elimination of repetitive manual copy-pasting' }
    ],
    processSteps: [
      { step: '01', title: 'Workflow Audit', description: 'We map out your current step-by-step manual process and friction points.' },
      { step: '02', title: 'System Architecture', description: 'We design the automated sequence, triggers, and integrations.' },
      { step: '03', title: 'Integration & Testing', description: 'We build and rigorously test automated alerts and data transfers.' },
      { step: '04', title: 'Team Onboarding', description: 'We guide your team on using the new automated workflow effortlessly.' }
    ],
    faqs: [
      { question: 'Do I need expensive software subscriptions?', answer: 'No. We prioritize straightforward, cost-effective solutions and custom lightweight automations.' },
      { question: 'Can WhatsApp be automated safely for customer follow-ups?', answer: 'Yes, we set up official WhatsApp workflows and direct click-to-chat triggers safely.' }
    ],
    relatedIndustrySlugs: ['coaching-centres', 'salons', 'restaurants', 'small-businesses'],
    seoTitle: 'Small Business Process Automation & WhatsApp Workflows | Sygmia',
    metaDescription: 'Automate customer lead capture, appointment booking, WhatsApp notifications, and business workflows to save time and grow.'
  },
  'custom-business-software': {
    slug: 'custom-business-software',
    name: 'Custom Business Software',
    bucket: 'CUSTOM SOFTWARE',
    tagline: 'Tailored Digital Tools for Your Business',
    heroHeadline: 'Software built around your exact business process — not the other way around.',
    heroSubtitle: 'When off-the-shelf software is too bloated, too expensive, or doesn\'t match how your business actually operates, we build custom tools that fit.',
    problemHeadline: 'Tired of forcing your team into rigid, complex software packages?',
    problemStatement: 'Off-the-shelf SaaS tools often require monthly fees per seat, force you to change your operations to match their system, and hide key features behind high enterprise tiers.',
    problems: [
      'Paying monthly fees for dozens of software features you never use',
      'Generic software that misses essential steps in your industry workflow',
      'Clunky spreadsheets that break when multiple team members use them',
      'Lack of ownership over your own operational data'
    ],
    solutionHeadline: 'Lightweight, custom internal tools, portals, and dashboards',
    solutionOverview: 'Sygmia develops bespoke web applications, customer portals, internal management dashboards, and operational tools designed explicitly for your team.',
    capabilities: [
      'Custom Internal Operational Dashboards',
      'Client & Customer Self-Service Portals',
      'Custom Inventory & Service Tracker Systems',
      'Role-Based Access & Data Ownership',
      'Third-Party API & Payment Gateway Integrations',
      'Scalable Web Application Architecture'
    ],
    deliverables: [
      { businessNeed: 'Exact Match to Operations', sygmiaSolution: 'Custom-built software workflows tailored to your rules' },
      { businessNeed: 'Full Data Ownership', sygmiaSolution: 'You own your system and database without seat locks' },
      { businessNeed: 'Simple Team Interface', sygmiaSolution: 'Clean, distraction-free internal user experience' },
      { businessNeed: 'Long-Term Growth', sygmiaSolution: 'Modular system that grows with your business' }
    ],
    processSteps: [
      { step: '01', title: 'Process Blueprinting', description: 'We map every user role, data input, and required business rule.' },
      { step: '02', title: 'Prototype & Feedback', description: 'We build an interactive prototype to validate usability.' },
      { step: '03', title: 'Full Application Development', description: 'We code the secure backend, database, and responsive frontend.' },
      { step: '04', title: 'Deployment & Support', description: 'We deploy your system securely with ongoing maintenance support.' }
    ],
    faqs: [
      { question: 'Is custom software expensive for a small business?', answer: 'We build targeted, modular tools focused strictly on your high-ROI needs, making custom tools practical for growing organizations.' },
      { question: 'Who owns the code and data?', answer: 'You own full rights to your custom application and business database.' }
    ],
    relatedIndustrySlugs: ['small-businesses', 'coaching-centres', 'salons', 'restaurants'],
    seoTitle: 'Custom Business Software & Internal Tools Development | Sygmia',
    metaDescription: 'Build custom internal web applications, customer portals, and business management tools tailored to your business operations.'
  }
};
