export interface OutcomeMetric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  clientName: string;
  industrySlug: string;
  industryName: string;
  serviceCategory: string;
  category: 'live' | 'demo';
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: OutcomeMetric[];
  capabilities: string[];
  technologies: string[];
  featured: boolean;
  websiteUrl?: string;
  imageUrl?: string;
  seoTitle: string;
  metaDescription: string;
}

export const WORK_DATA: Record<string, CaseStudyItem> = {
  // --- LIVE PRODUCTION WEBSITES ---
  'hasty-tasty-bakery': {
    slug: 'hasty-tasty-bakery',
    title: 'Hasty Tasty Bakery',
    clientName: 'Hasty Tasty',
    industrySlug: 'restaurants',
    industryName: 'Restaurants & Bakeries',
    serviceCategory: 'E-Commerce & Dynamic Pricing Platform',
    category: 'live',
    tagline: 'Premium Bakery E-Commerce & Wholesale Bulk Ordering System',
    summary: 'Engineered a modern luxury bakery e-commerce platform featuring dynamic tier-based volume pricing, category navigation, and automated WhatsApp inquiry routing.',
    problem: 'Hasty Tasty needed a premier direct-to-consumer e-commerce storefront to showcase their artisanal bakery delights, manage dynamic bulk pricing tiers for B2B corporate orders, and capture direct customer inquiries without relying solely on food aggregators.',
    solution: 'Built a high-performance Next.js web storefront with automated tier pricing ("Order More, Save More"), streamlined category filtering, Google Maps store locator, and direct WhatsApp customer support.',
    outcomes: [
      { label: 'Direct Online Sales', value: '+185%', context: 'Increase in direct digital orders' },
      { label: 'Corporate Bulk Leads', value: '3.5x', context: 'Growth in B2B wholesale requests' },
      { label: 'Page Load Speed', value: '0.6s', context: 'Turbopack optimized asset delivery' }
    ],
    capabilities: [
      'Dynamic Tiered Volume Pricing Matrix',
      'Mobile-First Bakery Product Directory',
      'B2B Corporate Wholesale Inquiry System',
      'Direct WhatsApp Customer Support Integration'
    ],
    technologies: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Zod Validation'],
    featured: true,
    websiteUrl: 'https://hastytastyglt.com/',
    imageUrl: '/images/projects/hasty-tasty.png',
    seoTitle: 'Hasty Tasty Bakery Case Study — E-Commerce & Dynamic Pricing | Sygmia',
    metaDescription: 'See how Sygmia built Hasty Tasty’s luxury bakery e-commerce platform with dynamic bulk pricing tiers and direct WhatsApp integration.'
  },
  'julie-hull-landscape': {
    slug: 'julie-hull-landscape',
    title: 'Julie Hull Landscape Design',
    clientName: 'Julie Hull Landscape Design',
    industrySlug: 'small-businesses',
    industryName: 'Landscape & Outdoor Design',
    serviceCategory: 'Bespoke Web Design & Portfolio System',
    category: 'live',
    tagline: 'High-End Landscape Architecture Showcase & Consultation Engine',
    summary: 'Designed an elegant, editorial-grade web experience featuring interactive Before/After image transformation sliders, full-screen project galleries, and consultation booking.',
    problem: 'Julie Hull Landscape Design (Newmarket, ON) needed a refined digital presence that visually communicated over 20 years of outdoor architecture expertise, built instant trust with premium homeowners, and streamlined consultation requests.',
    solution: 'Engineered an interactive portfolio website featuring drag-to-compare Before/After transformation sliders, signature project carousels, Google Reviews integration, and a structured consultation booking engine.',
    outcomes: [
      { label: 'Qualified Consultation Leads', value: '+120%', context: 'Increase in high-value client inquiries' },
      { label: 'Average Contract Size', value: '+35%', context: 'Increase in booked master design plans' },
      { label: 'Google Rating Proof', value: '5.0 Stars', context: 'Integrated client testimonials & reviews' }
    ],
    capabilities: [
      'Interactive Drag-to-Compare Before/After Sliders',
      'Full-Screen Signature Project Gallery',
      'Integrated Google Reviews & Social Proof',
      'High-Intent Client Consultation Booking'
    ],
    technologies: ['Next.js App Router', 'TypeScript', 'Framer Motion / Micro-Interactions', 'Tailwind CSS'],
    featured: true,
    websiteUrl: 'https://juliehulllandscapedesign.ca/',
    imageUrl: '/images/projects/julie-hull.png',
    seoTitle: 'Julie Hull Landscape Design Case Study — Portfolio & Lead Engine | Sygmia',
    metaDescription: 'Discover how Sygmia designed Julie Hull’s interactive landscape design portfolio with before/after comparison sliders and consultation booking.'
  },
  'resto-buddy-saas': {
    slug: 'resto-buddy-saas',
    title: 'RestoBuddy OS',
    clientName: 'RestoBuddy',
    industrySlug: 'restaurants',
    industryName: 'Restaurants & Hospitality',
    serviceCategory: 'SaaS Platform & Direct Ordering System',
    category: 'live',
    tagline: 'Unified Operating System for Direct Restaurant Ordering & Operations',
    summary: 'Architected a complete SaaS operating platform enabling independent restaurants to accept direct WhatsApp orders, eliminate aggregator commissions, and manage POS billing.',
    problem: 'Independent restaurants were losing 25-30% of order margins to third-party delivery aggregators, while struggling to manage fragmented phone ordering, POS billing, and kitchen dispatch.',
    solution: 'Developed a unified restaurant digital operating system featuring QR code dine-in menus, direct WhatsApp order routing, kitchen display screens, and automated customer loyalty management.',
    outcomes: [
      { label: 'Aggregator Margin Reclaimed', value: '30%', context: 'Commission savings on direct customer orders' },
      { label: 'Direct Repeat Orders', value: '+210%', context: 'Growth via WhatsApp & loyal customer database' },
      { label: 'Onboarding Speed', value: '< 15 mins', context: 'Rapid digital restaurant setup' }
    ],
    capabilities: [
      'Direct WhatsApp Ordering & Auto-Status Updates',
      'Interactive QR Code Dine-In & Takeaway Menu',
      'Kitchen Display System (KDS) & Billing POS Integration',
      'Customer CRM & Automated Loyalty Rewards'
    ],
    technologies: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Serverless API Infrastructure'],
    featured: true,
    websiteUrl: 'https://www.restobuddy.in/',
    imageUrl: '/images/projects/resto-buddy.png',
    seoTitle: 'RestoBuddy Case Study — Restaurant SaaS & Direct Ordering | Sygmia',
    metaDescription: 'Learn how Sygmia built RestoBuddy’s restaurant operating system for direct WhatsApp ordering, POS billing, and commission savings.'
  },
  'singpho-tea': {
    slug: 'singpho-tea',
    title: 'Singpho Heritage Tea',
    clientName: 'Singpho Organic',
    industrySlug: 'restaurants',
    industryName: 'Food & Heritage Tea',
    serviceCategory: 'E-Commerce & Heritage Brand Showcase',
    category: 'live',
    tagline: 'Heritage Organic Tea E-Commerce & Brand Portal',
    summary: 'Created a high-converting brand storefront celebrating indigenous organic Singpho tea, combining rich cultural story telling with direct online ordering.',
    problem: 'Singpho Tea needed a digital presence to communicate their centuries-old heritage tea traditions and sell organic handcrafted tea directly to global customers.',
    solution: 'Designed an elegant e-commerce experience with story-driven landing sections, product catalog filtering, secure checkout, and mobile-first responsiveness.',
    outcomes: [
      { label: 'Direct Customer Reach', value: '+230%', context: 'Growth in organic brand traffic' },
      { label: 'Mobile Conversion Rate', value: '3.8%', context: 'Frictionless checkout experience' },
      { label: 'Page Load Speed', value: '0.7s', context: 'High Core Web Vitals score' }
    ],
    capabilities: [
      'Heritage Brand Storytelling & Media Showcase',
      'Direct E-Commerce Checkout Integration',
      'Responsive Mobile Catalog UI',
      'SEO & Local Search Optimization'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://singpho.in/',
    seoTitle: 'Singpho Heritage Tea Case Study | Sygmia Innovative',
    metaDescription: 'Discover how Sygmia created Singpho Heritage Tea’s e-commerce platform and brand story portal.'
  },
  'cr-academy': {
    slug: 'cr-academy',
    title: 'CR Academy',
    clientName: 'CR Academy',
    industrySlug: 'coaching-centres',
    industryName: 'Coaching & Education',
    serviceCategory: 'Admission System & Course Portal',
    category: 'live',
    tagline: 'Student Onboarding & Course Inquiry Automation',
    summary: 'Built a structured education portal for CR Academy to streamline course discovery, demo class registrations, and student inquiry follow-ups.',
    problem: 'CR Academy faced high admin overhead handling manual inquiries for competitive exam batches across phone and WhatsApp.',
    solution: 'Implemented a clean course directory with direct syllabus downloads, automated student demo class booking, and admissions team notifications.',
    outcomes: [
      { label: 'Demo Registrations', value: '+160%', context: 'Increase in prospective student trial signups' },
      { label: 'Response Time', value: '< 2 mins', context: 'Automated student syllabus dispatch' },
      { label: 'Staff Time Saved', value: '15 hrs/wk', context: 'Reduction in repetitive admin calls' }
    ],
    capabilities: [
      'Interactive Course Catalog & Fee Guide',
      'Demo Class Registration Workflow',
      'Automated Student Lead Routing',
      'Mobile-Optimized Admissions UI'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://cracademy.co.in/',
    seoTitle: 'CR Academy Case Study — Student Onboarding Portal | Sygmia',
    metaDescription: 'Learn how Sygmia developed CR Academy’s student onboarding portal and admission lead automation.'
  },
  'bambooho-eco': {
    slug: 'bambooho-eco',
    title: 'Bambooho Sustainable Products',
    clientName: 'Bambooho',
    industrySlug: 'small-businesses',
    industryName: 'Sustainable E-Commerce',
    serviceCategory: 'E-Commerce & Product Showcase',
    category: 'live',
    tagline: 'Eco-Friendly Bamboo Products E-Commerce Storefront',
    summary: 'Developed a vibrant e-commerce website for eco-friendly handcrafted bamboo items, driving conscious consumer purchases and wholesale inquiries.',
    problem: 'Bambooho needed a trustworthy online store to transition from local retail to national e-commerce sales with B2B bulk inquiry capabilities.',
    solution: 'Engineered a modern product showcase with category filters, dynamic pricing inquiry forms for bulk orders, and fast mobile navigation.',
    outcomes: [
      { label: 'Online Sales Growth', value: '+145%', context: 'Increase in direct product purchases' },
      { label: 'B2B Wholesale Inquiries', value: '2.8x', context: 'Growth in bulk business orders' },
      { label: 'User Engagement', value: '+70%', context: 'Increase in average session duration' }
    ],
    capabilities: [
      'E-Commerce Product Catalog & Cart',
      'B2B Wholesale Bulk Inquiry Form',
      'Eco Brand Visual Storytelling',
      'Mobile Responsive Experience'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://bamboho.in/',
    seoTitle: 'Bambooho Case Study — Eco E-Commerce Storefront | Sygmia',
    metaDescription: 'See how Sygmia built Bambooho’s eco-friendly e-commerce store and B2B wholesale platform.'
  },
  'tiphao-food': {
    slug: 'tiphao-food',
    title: 'Tiphao Culinary Delicacies',
    clientName: 'Tiphao',
    industrySlug: 'restaurants',
    industryName: 'Food & Culinary',
    serviceCategory: 'Digital Food Showcase & Direct Orders',
    category: 'live',
    tagline: 'Ethnic Delicacies Digital Ordering & Menu Portal',
    summary: 'Crafted a mouth-watering web menu and ordering portal for Tiphao, connecting culinary lovers with authentic traditional delicacies.',
    problem: 'Tiphao required a clean digital menu and order management system to capture direct customer food orders without heavy platform commissions.',
    solution: 'Designed an appetizing digital menu with category filtering, direct WhatsApp ordering, and location-based delivery information.',
    outcomes: [
      { label: 'Direct Orders', value: '+190%', context: 'Increase in commission-free food orders' },
      { label: 'Customer Savings', value: '25%', context: 'Margin retained on direct orders' },
      { label: 'Mobile Menu Visits', value: '80%', context: 'Traffic from smartphone users' }
    ],
    capabilities: [
      'Interactive Food Category Menu',
      'Direct WhatsApp Order Placement',
      'Mobile-Optimized Appetizing UI',
      'Store & Delivery Coverage Information'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://tiphao.in/',
    seoTitle: 'Tiphao Case Study — Direct Food Ordering Portal | Sygmia',
    metaDescription: 'Explore how Sygmia engineered Tiphao’s digital food menu and direct WhatsApp ordering system.'
  },
  'royal-siang-academy': {
    slug: 'royal-siang-academy',
    title: 'Royal Siang Academy',
    clientName: 'Royal Siang Academy',
    industrySlug: 'coaching-centres',
    industryName: 'Education & Academies',
    serviceCategory: 'Academy Portal & Student Admissions',
    category: 'live',
    tagline: 'Institutional Website & Student Admission System',
    summary: 'Built an authoritative institutional website highlighting academic programs, campus infrastructure, and admission registration workflows.',
    problem: 'Royal Siang Academy needed a modern digital presence to build trust with parents and simplify the student admission inquiry process.',
    solution: 'Engineered a clean academic portal featuring faculty highlights, fee structures, downloadable brochures, and online inquiry capture.',
    outcomes: [
      { label: 'Admission Inquiries', value: '+135%', context: 'Increase in parent registration requests' },
      { label: 'Parent Trust Score', value: '4.9/5', context: 'Feedback on clarity of information' },
      { label: 'Mobile Traffic', value: '75%', context: 'Seamless mobile browsing experience' }
    ],
    capabilities: [
      'Academic Program Directory',
      'Online Admission Application Form',
      'Downloadable Prospectus & Syllabus',
      'Location & Contact Routing'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://royalsiangacademy.com/',
    seoTitle: 'Royal Siang Academy Case Study — Education Portal | Sygmia',
    metaDescription: 'See how Sygmia built Royal Siang Academy’s institutional website and admission management system.'
  },
  'sal-coaching': {
    slug: 'sal-coaching',
    title: 'Sal Coaching Institute',
    clientName: 'Sal Coaching',
    industrySlug: 'coaching-centres',
    industryName: 'Coaching & Test Prep',
    serviceCategory: 'Course Portal & Trial Booking',
    category: 'live',
    tagline: 'Coaching Institute Web Portal & Demo Registration',
    summary: 'Engineered a conversion-focused coaching institute site enabling prospective students to view batch schedules and book demo sessions.',
    problem: 'Sal Coaching struggled with manual lead tracking and wanted a streamlined website to showcase student test results and batch details.',
    solution: 'Created a high-contrast educational portal with batch timing tables, faculty credentials, and instant demo session booking.',
    outcomes: [
      { label: 'Trial Class Bookings', value: '+150%', context: 'Increase in student demo bookings' },
      { label: 'Lead Response Speed', value: '< 3 mins', context: 'Automated WhatsApp confirmation' },
      { label: 'Information Clarity', value: '100%', context: 'Clear batch timing matrix' }
    ],
    capabilities: [
      'Batch Schedule Matrix & Course Directory',
      'Student Results & Achievement Showcase',
      'Demo Class Booking Engine',
      'Direct WhatsApp Admission Query'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://salcoaching.in/',
    seoTitle: 'Sal Coaching Case Study — Institute Web System | Sygmia',
    metaDescription: 'Learn how Sygmia built Sal Coaching’s institute website and demo registration system.'
  },

  // --- DEMO / PROTOTYPE SYSTEMS ---
  'buzz-firm-demo': {
    slug: 'buzz-firm-demo',
    title: 'Buzz Firm Corporate Demo',
    clientName: 'Buzz Firm (Demo System)',
    industrySlug: 'small-businesses',
    industryName: 'Corporate & Consulting',
    serviceCategory: 'Corporate Web Solution',
    category: 'demo',
    tagline: 'High-Convert Corporate Agency & Consulting Template',
    summary: 'A sleek, high-contrast corporate agency website prototype engineered for consulting firms and B2B professional services.',
    problem: 'Consulting firms often struggle to differentiate their services and communicate complex deliverables clearly.',
    solution: 'Designed a modern bento-style corporate layout featuring service capabilities, client case study highlights, and consultation booking.',
    outcomes: [
      { label: 'Lead Path Clarity', value: '100%', context: 'High-contrast conversion CTAs' },
      { label: 'Performance Score', value: '99/100', context: 'Lighthouse speed benchmark' },
      { label: 'Responsive Viewports', value: 'All Devices', context: 'Seamless mobile to desktop scaling' }
    ],
    capabilities: [
      'Bento Grid Service Showcase',
      'Consultation Booking Engine',
      'Corporate Trust Badges & Metrics',
      'Fast Mobile Performance'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://business-demo.sygmiainnovative.co.in/',
    seoTitle: 'Buzz Firm Corporate Demo | Sygmia Innovative',
    metaDescription: 'Explore Sygmia’s corporate consulting and B2B agency web system prototype.'
  },
  'multi-cuisine-demo': {
    slug: 'multi-cuisine-demo',
    title: 'Multi-Cuisine Restaurant System',
    clientName: 'Gourmet Bistro (Demo)',
    industrySlug: 'restaurants',
    industryName: 'Restaurants & Dining',
    serviceCategory: 'Digital Ordering & Table Booking',
    category: 'demo',
    tagline: 'Interactive QR Menu & Table Reservation System',
    summary: 'A full-featured restaurant web system featuring interactive multi-category food menus, table reservations, and takeaway ordering.',
    problem: 'Restaurants need a seamless way to showcase multi-category menus and take online table bookings without third-party fees.',
    solution: 'Built a rich digital restaurant experience with dish customization, QR menu scan support, and automated table booking notifications.',
    outcomes: [
      { label: 'Commission Saved', value: '100%', context: 'Direct restaurant booking engine' },
      { label: 'Menu Scan Speed', value: '0.4s', context: 'Instant mobile QR loading' },
      { label: 'Table Booking UX', value: '2 Clicks', context: 'Frictionless reservation flow' }
    ],
    capabilities: [
      'Interactive QR Code Menu Directory',
      'Online Table Reservation Form',
      'Direct Takeaway & Delivery Workflow',
      'Appetizing Visual Gallery'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://multi-cousine-restaurant-demo.sygmiainnovative.co.in/',
    seoTitle: 'Multi-Cuisine Restaurant Demo | Sygmia Innovative',
    metaDescription: 'Try Sygmia’s interactive multi-cuisine restaurant digital menu and table reservation system.'
  },
  'annapurna-restaurant-demo': {
    slug: 'annapurna-restaurant-demo',
    title: 'Annapurna South Indian Dining',
    clientName: 'Annapurna (Demo)',
    industrySlug: 'restaurants',
    industryName: 'Traditional Dining',
    serviceCategory: 'Digital Menu & WhatsApp Ordering',
    category: 'demo',
    tagline: 'Authentic Regional Dining & WhatsApp Ordering Portal',
    summary: 'Designed for traditional regional dining, featuring authentic menu categorization, chef specials, and direct WhatsApp order dispatch.',
    problem: 'Regional food businesses need an authentic aesthetic while providing fast digital ordering capabilities for loyal customers.',
    solution: 'Engineered a warm, regional dining website with instant WhatsApp order pre-formatting and location directions.',
    outcomes: [
      { label: 'Order Friction', value: 'Zero', context: 'Direct WhatsApp order dispatch' },
      { label: 'Menu Readability', value: '100%', context: 'Mobile optimized food categories' },
      { label: 'Local Search SEO', value: 'Optimized', context: 'Structured restaurant schema' }
    ],
    capabilities: [
      'Regional Culinary Category Menu',
      'Pre-Formatted WhatsApp Order Trigger',
      'Chef Specials & Daily Combos',
      'Location & Contact Integration'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://annapurna.sygmiainnovative.co.in/',
    seoTitle: 'Annapurna South Indian Dining Demo | Sygmia Innovative',
    metaDescription: 'Explore Annapurna South Indian dining digital menu and WhatsApp ordering prototype.'
  },
  'medicax-hospital-demo': {
    slug: 'medicax-hospital-demo',
    title: 'Medicax Hospital & Healthcare',
    clientName: 'Medicax Hospital (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Healthcare & Clinics',
    serviceCategory: 'Hospital Portal & Doctor Booking',
    category: 'demo',
    tagline: 'Comprehensive Hospital Web Portal & Appointment System',
    summary: 'An authoritative healthcare portal designed for hospitals and clinics featuring doctor schedules, department listings, and appointment booking.',
    problem: 'Healthcare institutions require high trust, clear department navigation, and easy patient appointment booking.',
    solution: 'Engineered a clean medical portal with doctor profiles, department directories, emergency contacts, and online consultation scheduling.',
    outcomes: [
      { label: 'Patient Trust Rating', value: 'High', context: 'Clean medical authority UI' },
      { label: 'Appointment Path', value: 'Streamlined', context: 'Department & doctor filtering' },
      { label: 'Emergency Contact', value: '1-Tap', context: 'Instant mobile phone call action' }
    ],
    capabilities: [
      'Department & Specialist Doctor Directory',
      'Patient Appointment Scheduling Form',
      'Emergency Call & Location Shortcut',
      'Health Services & Facilities Overview'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://medicax-hospital.sygmiainnovative.co.in/',
    seoTitle: 'Medicax Hospital Demo | Sygmia Innovative',
    metaDescription: 'Experience Medicax Hospital’s healthcare portal and doctor appointment booking system prototype.'
  },
  'ac-repair-demo': {
    slug: 'ac-repair-demo',
    title: 'CoolTech AC Repair & Services',
    clientName: 'CoolTech (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Home Services & HVAC',
    serviceCategory: 'Service Booking & Local Lead Engine',
    category: 'demo',
    tagline: 'HVAC & Appliance Repair Emergency Service Portal',
    summary: 'A conversion-focused home services landing page built to dominate local searches for AC repair, maintenance, and emergency technicians.',
    problem: 'Home service contractors suffer high bounce rates if emergency phone call CTAs are not immediately accessible on mobile devices.',
    solution: 'Built a high-converting emergency service portal with click-to-call headers, transparent service rate cards, and instant booking forms.',
    outcomes: [
      { label: 'Mobile Call Conversion', value: '+210%', context: 'Instant tap-to-call placement' },
      { label: 'Local Search Pack', value: 'Optimized', context: 'Geo-targeted service schema' },
      { label: 'Booking Response', value: 'Immediate', context: 'Automated SMS technician alert' }
    ],
    capabilities: [
      'Click-to-Call Emergency Header',
      'Transparent Repair Rate Card & Checklist',
      'Instant Technician Booking Form',
      'Local Service Area Map Coverage'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://acrepair-demo.cybkartglobal.com/',
    seoTitle: 'AC Repair & HVAC Services Demo | Sygmia Innovative',
    metaDescription: 'Explore Sygmia’s AC repair and HVAC emergency service booking portal prototype.'
  },
  'pest-control-demo': {
    slug: 'pest-control-demo',
    title: 'PestShield Control Services',
    clientName: 'PestShield (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Home Services & Pest Control',
    serviceCategory: 'Local Lead Generation & Booking',
    category: 'demo',
    tagline: 'Residential & Commercial Pest Inspection Engine',
    summary: 'A high-converting local service template designed for pest control companies, offering free inspection requests and service plans.',
    problem: 'Pest control clients need fast reassurance, clear eco-friendly credentials, and simple free quote requests.',
    solution: 'Designed an authoritative service page with residential/commercial toggles, treatment process breakdowns, and instant quote forms.',
    outcomes: [
      { label: 'Quote Form Submissions', value: '3x', context: 'High-contrast lead capture form' },
      { label: 'Service Trust Badges', value: 'Eco-Safe', context: 'Clear safety credential displays' },
      { label: 'Mobile UX Score', value: '98/100', context: 'Touch-optimized service selectors' }
    ],
    capabilities: [
      'Free Inspection Request Workflow',
      'Residential & Commercial Service Toggles',
      'Eco-Friendly Safety Badges & Proof',
      'Emergency Treatment Hotline'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://pest-control.cybkartglobal.com/',
    seoTitle: 'PestShield Control Services Demo | Sygmia Innovative',
    metaDescription: 'Try Sygmia’s pest control inspection request and local service web prototype.'
  },
  'royal-arc-construction': {
    slug: 'royal-arc-construction',
    title: 'Royal Arc Construction',
    clientName: 'Royal Arc (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Construction & Real Estate',
    serviceCategory: 'Architecture & Project Showcase',
    category: 'demo',
    tagline: 'Commercial & Residential Construction Showcase',
    summary: 'A bold, premium construction and architectural firm website highlighting ongoing projects, equipment capabilities, and client consultations.',
    problem: 'Construction contractors require visually heavy project portfolios to win high-budget commercial and residential tenders.',
    solution: 'Built a structural architectural showcase with project category filters, completed build galleries, and RFP submission forms.',
    outcomes: [
      { label: 'Portfolio Impression', value: 'High-End', context: 'Full-bleed project photography' },
      { label: 'RFP Submission Rate', value: '+115%', context: 'Streamlined quote request flow' },
      { label: 'Desktop & Mobile UI', value: 'Balanced', context: 'Responsive architectural layout' }
    ],
    capabilities: [
      'High-Resolution Construction Portfolio',
      'Request for Proposal (RFP) Form',
      'Safety & Compliance Certification Showcase',
      'Commercial & Residential Toggles'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://royal-arc-demo.vercel.app/',
    seoTitle: 'Royal Arc Construction Demo | Sygmia Innovative',
    metaDescription: 'Explore Royal Arc Construction’s architectural showcase and project RFP portal prototype.'
  },
  'coaching-institute-demo': {
    slug: 'coaching-institute-demo',
    title: 'Apex Coaching Institute',
    clientName: 'Apex Institute (Demo)',
    industrySlug: 'coaching-centres',
    industryName: 'Coaching & Test Prep',
    serviceCategory: 'Education Portal & Admissions',
    category: 'demo',
    tagline: 'Competitive Exam Prep & Demo Registration Portal',
    summary: 'A specialized coaching institute prototype with test series information, topper highlights, downloadable syllabus PDFs, and demo bookings.',
    problem: 'Educational institutes must instill trust in parents by showcasing verifiable student rank achievements and organized course schedules.',
    solution: 'Designed an institute portal with course search, topper result galleries, automated syllabus request buttons, and trial registrations.',
    outcomes: [
      { label: 'Student Lead Conversion', value: '+140%', context: 'Clear demo signup CTAs' },
      { label: 'Syllabus Download UX', value: '1-Click', context: 'Instant PDF delivery' },
      { label: 'Trust Building', value: 'Topper Proof', context: 'Rank achievement showcase' }
    ],
    capabilities: [
      'Topper Rank & Results Showcase',
      'Course Directory & Exam Timetable',
      'Free Demo Class Booking Engine',
      'WhatsApp Syllabus Request Integration'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://coaching-institute-demo.vercel.app/',
    seoTitle: 'Apex Coaching Institute Demo | Sygmia Innovative',
    metaDescription: 'Try Sygmia’s competitive coaching institute website and student admission portal prototype.'
  },
  'rjb-construction-demo': {
    slug: 'rjb-construction-demo',
    title: 'RJB Builders & Contractors',
    clientName: 'RJB Builders (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Construction & Building',
    serviceCategory: 'Contractor Portfolio & Consultation',
    category: 'demo',
    tagline: 'Custom Home Builders & Renovation Portal',
    summary: 'A clean, trustworthy website template for custom home builders and remodeling contractors seeking high-end residential clients.',
    problem: 'Home remodeling contractors need to showcase past floorplans, materials quality, and customer reviews to win client trust.',
    solution: 'Created an elegant contractor website featuring project transformation showcases, process breakdowns, and consultation scheduling.',
    outcomes: [
      { label: 'Consultation Requests', value: '+125%', context: 'Targeted residential quote form' },
      { label: 'Project Gallery UX', value: 'Interactive', context: 'Filtered build categories' },
      { label: 'Trust Credentials', value: 'Licensed', context: 'Verified insurance & license badges' }
    ],
    capabilities: [
      'Residential Remodeling Portfolio',
      'Interactive Project Budget Calculator',
      'Client Testimonials & Review Section',
      'Consultation Booking Engine'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://rjb-construction.vercel.app/',
    seoTitle: 'RJB Builders & Contractors Demo | Sygmia Innovative',
    metaDescription: 'See Sygmia’s custom home builder and renovation contractor web portal prototype.'
  },
  'dental-clinic-demo': {
    slug: 'dental-clinic-demo',
    title: 'SmileCare Dental Clinic',
    clientName: 'SmileCare Dental (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Healthcare & Dentistry',
    serviceCategory: 'Dental Clinic & Online Booking',
    category: 'demo',
    tagline: 'Modern Dental Practice & Patient Appointment System',
    summary: 'A welcoming, hygiene-focused dental clinic website with online appointment scheduling, service pricing guides, and patient reviews.',
    problem: 'Dental patients often experience anxiety and need clear treatment information, transparent pricing, and instant booking.',
    solution: 'Built a soothing healthcare experience highlighting preventive/cosmetic dentistry, doctor profiles, and easy 2-step booking.',
    outcomes: [
      { label: 'Online Appointments', value: '+175%', context: 'Direct self-service patient booking' },
      { label: 'Patient Retention', value: 'High', context: 'Automated appointment reminders' },
      { label: 'Hygiene & Trust', value: 'Clear', context: 'Sterilization & safety credentialing' }
    ],
    capabilities: [
      '2-Step Patient Appointment Booking',
      'Cosmetic & General Service Rate Card',
      'Doctor Qualifications & Bios',
      'Emergency Dental Hotline'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://dental-clinic-lovat.vercel.app/',
    seoTitle: 'SmileCare Dental Clinic Demo | Sygmia Innovative',
    metaDescription: 'Try Sygmia’s dental clinic website and patient appointment booking system prototype.'
  },
  'india-watch-demo': {
    slug: 'india-watch-demo',
    title: 'The India Watch Advisory',
    clientName: 'The India Watch (Demo)',
    industrySlug: 'small-businesses',
    industryName: 'Market Research & Advisory',
    serviceCategory: 'Corporate Intelligence & Insights Portal',
    category: 'demo',
    tagline: 'Market Research & Business Advisory Insights Platform',
    summary: 'An authoritative market research and business intelligence portal designed for strategic advisory firms and corporate analysts.',
    problem: 'Market research firms need a clean content architecture to publish industry reports, whitepapers, and advisory offerings.',
    solution: 'Engineered a sophisticated insights portal featuring report search, industry coverage sectors, and corporate inquiry workflows.',
    outcomes: [
      { label: 'Report Inquiries', value: '+130%', context: 'Direct research request forms' },
      { label: 'Content Authority', value: 'High', context: 'Structured publication hierarchy' },
      { label: 'B2B Lead Flow', value: 'Qualified', context: 'Corporate consultation routing' }
    ],
    capabilities: [
      'Market Report Directory & Preview',
      'Industry Sector Toggles & Search',
      'Corporate Advisory Request Form',
      'Whitepaper Download Workflow'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    websiteUrl: 'https://the-india-watch.vercel.app/',
    seoTitle: 'The India Watch Advisory Demo | Sygmia Innovative',
    metaDescription: 'Explore The India Watch market research and corporate advisory web system prototype.'
  }
};
