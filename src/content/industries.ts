export interface IndustryBucketOverview {
  getOnline: string[];
  improve: string[];
  automate: string[];
}

export interface IndustryWorkflowStep {
  step: string;
  stage: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  heroTagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  ctaText: string;
  problemHeadline: string;
  problemStatement: string;
  problems: string[];
  bucketOverview: IndustryBucketOverview;
  workflowHeadline: string;
  workflowSteps: IndustryWorkflowStep[];
  solutionHeadline: string;
  solutionCopy: string;
  faqs: IndustryFAQ[];
  relatedServiceSlugs: string[];
  featuredProjectSlug?: string;
  seoTitle: string;
  metaDescription: string;
}

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  'small-businesses': {
    slug: 'small-businesses',
    name: 'Small Businesses & Organizations',
    heroTagline: 'Digital Solutions for Local & Growing Businesses',
    heroHeadline: 'Make the digital side of your business work as hard as you do.',
    heroSubtitle: 'Whether you need your first professional website, a complete online refresh, or systems to eliminate manual admin, we build practical solutions tailored to small business growth.',
    ctaText: 'Talk About Your Business',
    problemHeadline: 'The common digital roadblocks small businesses face',
    problemStatement: 'Most small businesses have great physical services or products, but their digital presence fails to reflect their quality, leading to lost sales and wasted effort.',
    problems: [
      'Potential customers cannot find accurate service information or pricing online',
      'Enquiries arrive erratically through social DMs, phone calls, and missed emails',
      'The business relies on manual admin, notebooks, and repetitive WhatsApp messaging',
      'Previous web developers used complex jargon, missed deadlines, or built hard-to-use sites'
    ],
    bucketOverview: {
      getOnline: [
        'Professional business website',
        'Clear service overview & pricing',
        'Google Business Profile integration',
        'WhatsApp & one-click call buttons'
      ],
      improve: [
        'Speed & mobile layout redesign',
        'Clear call-to-action optimization',
        'Local SEO & discovery fixes',
        'Modern visual trust building'
      ],
      automate: [
        'Automated WhatsApp enquiry replies',
        'Centralized lead capture form',
        'Simple booking & reminder flows',
        'Owner dashboard for active leads'
      ]
    },
    workflowHeadline: 'How a modern digital system works for your business',
    workflowSteps: [
      { step: '01', stage: 'Discovery', description: 'Customer searches for your service or clicks your digital ad.' },
      { step: '02', stage: 'Trust & Clarity', description: 'Customer lands on your fast, clear website and sees exact solutions & proof.' },
      { step: '03', stage: 'Instant Action', description: 'Customer clicks to message on WhatsApp or submits a simple enquiry form.' },
      { step: '04', stage: 'Automated Response', description: 'System sends instant pre-formatted confirmation and notifies your team.' },
      { step: '05', stage: 'Conversion & Service', description: 'You close the sale and convert a prospect into a loyal customer.' }
    ],
    solutionHeadline: 'No technical jargon. Just clear scope and results.',
    solutionCopy: 'We take time to understand how your business operates today before writing a single line of code. We recommend only what solves your actual operational problems.',
    faqs: [
      { question: 'Do I need a big budget to work with Sygmia?', answer: 'No. We scope projects around your immediate priorities — whether starting with a clean 3-page website or automating lead management.' },
      { question: 'Can I update my website content after launch?', answer: 'Yes, we structure your site so content updates are straightforward and hassle-free.' }
    ],
    relatedServiceSlugs: ['business-websites', 'website-redesign', 'business-automation', 'custom-business-software'],
    featuredProjectSlug: 'nexus-coaching-portal',
    seoTitle: 'Digital Solutions & Website Development for Small Businesses | Sygmia',
    metaDescription: 'Websites, redesigns, and business process automation built specifically for small businesses and growing organizations.'
  },
  'coaching-centres': {
    slug: 'coaching-centres',
    name: 'Coaching Centres & Institutes',
    heroTagline: 'Digital Systems for Educational Institutes',
    heroHeadline: 'Turn student & parent enquiries into confirmed admissions.',
    heroSubtitle: 'From course details and fee structures to automated batch registration and WhatsApp follow-ups, help students discover and enroll in your programs.',
    ctaText: 'Talk About Your Institute',
    problemHeadline: 'Why coaching institutes lose potential student enrollments',
    problemStatement: 'Parents and students expect quick answers regarding courses, batch timings, fees, and faculty credentials. Delayed responses often mean lost enrollments to competitors.',
    problems: [
      'Parents constantly calling to ask repetitive questions about batch timings and fees',
      'Admissions inquiries scattered across phone logs, WhatsApp chats, and paper registers',
      'No structured website to display student results, test series, and achievements',
      'Manual follow-ups for fee reminders and upcoming demo classes'
    ],
    bucketOverview: {
      getOnline: [
        'Institute website with course directory',
        'Faculty credentials & student results gallery',
        'Demo class booking form',
        'Location & branch map setup'
      ],
      improve: [
        'Mobile course catalog optimization',
        'High-converting admission LP design',
        'Local SEO ranking for coaching terms',
        'Clear CTA for parent enquiries'
      ],
      automate: [
        'WhatsApp automated syllabus share',
        'Demo class registration & SMS reminders',
        'Student lead pipeline manager',
        'Automated admission confirmation'
      ]
    },
    workflowHeadline: 'The student acquisition & admission workflow',
    workflowSteps: [
      { step: '01', stage: 'Search', description: 'Student or parent searches for top coaching in their area.' },
      { step: '02', stage: 'Course Review', description: 'Visits website, views course details, results, and faculty highlights.' },
      { step: '03', stage: 'Demo Request', description: 'Fills out a quick form or clicks WhatsApp to request a free demo class.' },
      { step: '04', stage: 'Auto-Syllabus & Alert', description: 'Receives instant syllabus PDF on WhatsApp; admissions coordinator is notified.' },
      { step: '05', stage: 'Enrollment', description: 'Attends demo, receives automated reminder, and completes admission.' }
    ],
    solutionHeadline: 'Streamlined student onboarding with zero admin chaos',
    solutionCopy: 'We build structured institute portals that organize your courses, display verifiable student success stories, and automate trial registration.',
    faqs: [
      { question: 'Can parents receive course details directly on WhatsApp?', answer: 'Yes! We can set up automated triggers that immediately send course brochures and syllabus PDFs via WhatsApp when a parent submits a request.' },
      { question: 'Can we manage multiple branches on one website?', answer: 'Absolutey. We can create branch-specific landing pages and lead routing.' }
    ],
    relatedServiceSlugs: ['business-websites', 'business-automation', 'custom-business-software'],
    featuredProjectSlug: 'nexus-coaching-portal',
    seoTitle: 'Website Development & Admission Automation for Coaching Centres | Sygmia',
    metaDescription: 'Custom websites, student enquiry management, and admission automation designed for coaching institutes and tuition academies.'
  },
  'salons': {
    slug: 'salons',
    name: 'Salons & Spas',
    heroTagline: 'Digital Experience Built for Salons & Beauty Clinics',
    heroHeadline: 'Fill your appointment calendar and reduce phone interruptions.',
    heroSubtitle: 'Showcase your service menu, pricing, before/after transformations, and let clients book appointments 24/7 via WhatsApp or online booking.',
    ctaText: 'Talk About Your Salon',
    problemHeadline: 'The daily operational bottlenecks in salon management',
    problemStatement: 'Stylists and salon owners waste valuable service time answering phone calls for pricing, checking availability manually, and dealing with last-minute no-shows.',
    problems: [
      'Clients messaging at night or during peak hours asking for service rates and openings',
      'No central digital showcase for hair, nail, and skincare work',
      'High rate of client no-shows due to lack of automated appointment reminders',
      'Prices listed inconsistently across old Instagram posts and paper brochures'
    ],
    bucketOverview: {
      getOnline: [
        'Elegant salon website & service menu',
        'High-resolution transformation gallery',
        'Stylist profiles & specialization highlights',
        'Direct WhatsApp booking shortcut'
      ],
      improve: [
        'Mobile service menu & pricing UX',
        'Google Maps & local search optimization',
        'Before/After visual proof redesign',
        'Instagram-to-website conversion funnel'
      ],
      automate: [
        '24/7 online appointment booking',
        'Automated WhatsApp appointment reminders',
        'Client visit history record keeping',
        'Automated post-service review requests'
      ]
    },
    workflowHeadline: 'The salon client booking journey',
    workflowSteps: [
      { step: '01', stage: 'Discovery', description: 'Client discovers salon on Instagram, Google Maps, or referral.' },
      { step: '02', stage: 'Menu & Gallery', description: 'Browses full service rate card and views recent transformation photos.' },
      { step: '03', stage: 'Time Selection', description: 'Selects desired service, date, and preferred stylist.' },
      { step: '04', stage: 'Confirmation', description: 'Receives instant booking confirmation on WhatsApp with salon address.' },
      { step: '05', stage: 'Reminder & Visit', description: 'Receives automated reminder 2 hours prior, drastically reducing no-shows.' }
    ],
    solutionHeadline: 'A stylish, mobile-first experience your clients will love',
    solutionCopy: 'We create visually stunning, fast-loading salon websites that highlight your artistry and give clients an effortless way to book appointments anytime.',
    faqs: [
      { question: 'Will this replace our existing Instagram page?', answer: 'No! It complements Instagram by providing a permanent, organized destination for full pricing and instant booking.' },
      { question: 'How do appointment reminders work?', answer: 'Bookings trigger automated WhatsApp or SMS notifications sent to the client prior to their scheduled slot.' }
    ],
    relatedServiceSlugs: ['business-websites', 'website-redesign', 'business-automation'],
    featuredProjectSlug: 'lumina-salon-experience',
    seoTitle: 'Salon Website Development & Booking Automation | Sygmia Innovative',
    metaDescription: 'Beautiful websites, online service menus, and automated appointment booking systems for salons, spas, and beauty clinics.'
  },
  'restaurants': {
    slug: 'restaurants',
    name: 'Restaurants, Cafes & Food Businesses',
    heroTagline: 'Digital Ordering & Presence for Food Businesses',
    heroHeadline: 'Put your menu online, take direct orders, and drive dine-in visits.',
    heroSubtitle: 'Eliminate heavy commission fees from third-party platforms. Build a direct digital menu, table reservation system, and brand presence.',
    ctaText: 'Talk About Your Restaurant',
    problemHeadline: 'Why food businesses struggle with direct digital customer relationships',
    problemStatement: 'Relying solely on third-party aggregators cuts deep into profit margins, while outdated PDF menus on social media frustrate hungry customers.',
    problems: [
      'Customers struggling to read blurry PDF menus on mobile screens',
      'High aggregator commissions eating up 25-30% of order revenue',
      'No way to capture customer contact info for repeat marketing or offers',
      'Manual phone handling during busy peak dining hours for table reservations'
    ],
    bucketOverview: {
      getOnline: [
        'Mobile-optimized digital menu',
        'Ambiance photo gallery & location guide',
        'Direct WhatsApp order link',
        'Google Business Profile syncing'
      ],
      improve: [
        'Fast QR code menu experience',
        'Dine-in table booking optimization',
        'Local SEO ranking for dining searches',
        'High-converting landing page layout'
      ],
      automate: [
        'Direct online delivery/pickup order engine',
        'Automated table reservation management',
        'WhatsApp order status updates',
        'Customer feedback & review collection'
      ]
    },
    workflowHeadline: 'The direct restaurant customer experience',
    workflowSteps: [
      { step: '01', stage: 'Discovery', description: 'Customer searches for nearby dining or scans QR code at table.' },
      { step: '02', stage: 'Digital Menu', description: 'Explores interactive menu with photos, dietary tags, and clear pricing.' },
      { step: '03', stage: 'Order or Reserve', description: 'Selects items for pickup/delivery or reserves a table for the evening.' },
      { step: '04', stage: 'Kitchen Alert', description: 'Order details sent directly to kitchen display or restaurant WhatsApp.' },
      { step: '05', stage: 'Fulfillment', description: 'Customer receives confirmation and real-time status update.' }
    ],
    solutionHeadline: 'Take back control of your customer relationships & margins',
    solutionCopy: 'We build lightning-fast digital menus and direct ordering workflows that keep your brand front-and-center while saving high commission costs.',
    faqs: [
      { question: 'Can customers view our menu via QR codes?', answer: 'Yes! We generate high-speed QR codes linked directly to your clean digital menu.' },
      { question: 'Do we pay commissions on direct orders?', answer: 'Zero commissions. You own your ordering platform completely.' }
    ],
    relatedServiceSlugs: ['business-websites', 'business-automation', 'custom-business-software'],
    featuredProjectSlug: 'artisan-bakes-digital',
    seoTitle: 'Restaurant Website Development & Digital Menu Systems | Sygmia',
    metaDescription: 'Digital menus, direct ordering systems, and table reservation web solutions for restaurants, cafes, and bakeries.'
  },
  'gyms': {
    slug: 'gyms',
    name: 'Gyms & Fitness Centers',
    heroTagline: 'Digital Growth Solutions for Fitness Businesses',
    heroHeadline: 'Turn local fitness searchers into active, paying gym members.',
    heroSubtitle: 'Showcase your facilities, trainer profiles, trial class passes, and automate membership inquiries and trial bookings.',
    ctaText: 'Talk About Your Fitness Center',
    problemHeadline: 'Why fitness centers struggle to convert local interest into memberships',
    problemStatement: 'People looking for a gym want to see real facility photos, class schedules, trainer qualifications, and membership plans before visiting in person.',
    problems: [
      'Potential members calling or DMing for basic membership pricing',
      'High drop-off rate for free trial pass signups due to slow follow-up',
      'No structured showcase of gym equipment, personal training, and group classes',
      'Manual attendance and membership renewal tracking'
    ],
    bucketOverview: {
      getOnline: [
        'High-impact gym website & virtual tour',
        'Trainer profiles & class schedules',
        'Free trial pass landing page',
        'Google Maps local SEO setup'
      ],
      improve: [
        'Mobile speed & equipment gallery UX',
        'Membership pricing table redesign',
        'Local search ranking for fitness queries',
        'High-converting trial CTA buttons'
      ],
      automate: [
        'Instant WhatsApp trial pass delivery',
        'Automated membership renewal alerts',
        'Online personal training booking',
        'Member lead pipeline manager'
      ]
    },
    workflowHeadline: 'The gym member acquisition journey',
    workflowSteps: [
      { step: '01', stage: 'Local Search', description: 'Prospective member searches for top gyms or fitness classes nearby.' },
      { step: '02', stage: 'Virtual Tour', description: 'Views high-res equipment photos, class schedules, and membership benefits.' },
      { step: '03', stage: 'Trial Pass Request', description: 'Fills out a quick form to claim a 1-Day Free Trial Pass.' },
      { step: '04', stage: 'Auto Pass Delivery', description: 'Receives digital pass instantly on WhatsApp; front desk is notified.' },
      { step: '05', stage: 'Gym Visit & Join', description: 'Visits gym, completes trial session, and converts to monthly membership.' }
    ],
    solutionHeadline: 'A modern digital brand that builds instant trust with fitness enthusiasts',
    solutionCopy: 'We build high-energy websites and trial pass engines that attract fitness-conscious people in your area and convert them into long-term members.',
    faqs: [
      { question: 'Can prospective members claim a free trial pass on WhatsApp?', answer: 'Yes! We create direct WhatsApp triggers that issue a digital trial pass voucher immediately when requested.' },
      { question: 'Can we list group class schedules that update easily?', answer: 'Yes, we build clean class schedule tables that can be updated in seconds.' }
    ],
    relatedServiceSlugs: ['business-websites', 'booking-systems', 'whatsapp-automation'],
    seoTitle: 'Gym Website Development & Member Acquisition Systems | Sygmia Innovative',
    metaDescription: 'High-converting websites, free trial pass engines, and automated membership inquiry workflows for gyms, fitness centers, and trainers.'
  },
  'consultants': {
    slug: 'consultants',
    name: 'Consultants & Professional Services',
    heroTagline: 'Authority Digital Systems for Professional Services',
    heroHeadline: 'Position your expertise, showcase case studies, and book high-value client consultations.',
    heroSubtitle: 'Build a high-trust digital presence that demonstrates your track record, pre-qualifies prospective clients, and fills your calendar with paid or discovery calls.',
    ctaText: 'Talk About Your Advisory Practice',
    problemHeadline: 'Why standard portfolio websites fail for consultants and advisors',
    problemStatement: 'Clients hiring high-value consultants need deep trust, proven client outcomes, and a clear methodology before committing to an initial consultation.',
    problems: [
      'Generic websites that sound like everyone else and fail to communicate unique value',
      'Wasting time on consultation calls with unqualified, budget-mismatched prospects',
      'Client case studies hidden in old slide decks instead of accessible web pages',
      'Back-and-forth email tagging just to find an agreeable meeting time'
    ],
    bucketOverview: {
      getOnline: [
        'Authority brand website & bio page',
        'Service framework & methodology overview',
        'Client case study directory',
        'Direct discovery call booking link'
      ],
      improve: [
        'Clean typography & executive UI design',
        'Client testimonial & proof showcase',
        'SEO for niche advisory searches',
        'High-ticket conversion positioning'
      ],
      automate: [
        'Pre-consultation qualification questionnaire',
        'Automated calendar scheduling & zoom link',
        'WhatsApp meeting reminders',
        'Client intake document dispatch'
      ]
    },
    workflowHeadline: 'The high-ticket client acquisition workflow',
    workflowSteps: [
      { step: '01', stage: 'Discovery', description: 'Prospective client reads your article, referral link, or social post.' },
      { step: '02', stage: 'Authority Review', description: 'Explores your site, reviews detailed client case studies and advisory approach.' },
      { step: '03', stage: 'Pre-Qualification', description: 'Fills out a brief intake form answering budget and business goal questions.' },
      { step: '04', stage: 'Call Booking', description: 'Selects a convenient time on your automated calendar and receives calendar invite.' },
      { step: '05', stage: 'Consultation', description: 'Conducts strategic meeting with an informed, pre-qualified prospect.' }
    ],
    solutionHeadline: 'Build an unbeatable reputation as the go-to expert in your niche',
    solutionCopy: 'We build sophisticated, authority-building web presences for consultants, financial advisors, tax experts, and executive coaches that filter out tire-kickers and attract ideal clients.',
    faqs: [
      { question: 'Can we screen clients before they book a call?', answer: 'Yes! We embed pre-qualification questions so only qualified prospects can access your consultation calendar.' },
      { question: 'Can this integrate with Google Calendar or Outlook?', answer: 'Yes, booking calendars sync bi-directionally with Google Calendar, Outlook, and Zoom.' }
    ],
    relatedServiceSlugs: ['business-websites', 'booking-systems', 'lead-management'],
    seoTitle: 'Consultant Website Development & Client Acquisition Systems | Sygmia Innovative',
    metaDescription: 'Authority websites, pre-qualification intake forms, and automated consultation booking systems for consultants and professional advisors.'
  },
  'manufacturers': {
    slug: 'manufacturers',
    name: 'Manufacturers & Industrial Units',
    heroTagline: 'Digital Product Catalogs & RFQ Systems for Industry',
    heroHeadline: 'Showcase your industrial capabilities and capture qualified B2B RFQs.',
    heroSubtitle: 'Replace static PDF product sheets with an interactive B2B catalog, technical specification tables, and automated Request for Quote (RFQ) lead routing.',
    ctaText: 'Talk About Your Manufacturing Unit',
    problemHeadline: 'The digital friction holding B2B manufacturers back',
    problemStatement: 'B2B buyers and procurement officers demand detailed technical specifications, certifications, and fast RFQ responses. Dated websites lose large commercial deals to modern competitors.',
    problems: [
      'Heavy technical catalogs trapped in outdated 50MB downloadable PDFs',
      'B2B buyers unable to easily filter products by material, size, or spec',
      'RFQ requests arriving as vague emails missing essential specification details',
      'No central portal to display plant capacity, machinery, and ISO certifications'
    ],
    bucketOverview: {
      getOnline: [
        'Industrial web portal & plant showcase',
        'Filterable B2B product catalog',
        'ISO certification & compliance section',
        'Direct RFQ inquiry form'
      ],
      improve: [
        'Technical specification table UI',
        'Fast search by product SKU / Spec',
        'Mobile responsiveness for field buyers',
        'Industrial SEO ranking for product terms'
      ],
      automate: [
        'Structured RFQ form with file upload',
        'Instant RFQ notification to sales engineers',
        'Automated spec sheet PDF dispatch on WhatsApp',
        'B2B buyer lead pipeline dashboard'
      ]
    },
    workflowHeadline: 'The B2B industrial procurement journey',
    workflowSteps: [
      { step: '01', stage: 'Requirement Search', description: 'Procurement manager searches for custom component or industrial product.' },
      { step: '02', stage: 'Spec Verification', description: 'Examines product specifications, CAD drawings, and ISO certifications on your portal.' },
      { step: '03', stage: 'RFQ Submission', description: 'Submits structured RFQ specifying quantity, material grade, and delivery timeline.' },
      { step: '04', stage: 'Automated Alert', description: 'Your sales engineering team receives complete specification payload immediately.' },
      { step: '05', stage: 'Quote & Contract', description: 'Sales team responds with accurate commercial proposal within hours.' }
    ],
    solutionHeadline: 'Transform your manufacturing business into a modern B2B powerhouse',
    solutionCopy: 'We build robust, professional industrial web portals that organize complex product catalogs, communicate manufacturing capability, and streamline the B2B quoting process.',
    faqs: [
      { question: 'Can buyers attach engineering drawings or CAD files to RFQ forms?', answer: 'Yes, RFQ forms include secure file upload fields for PDF, DWG, and STEP files.' },
      { question: 'Can we manage hundreds of industrial products easily?', answer: 'Absolutey! We structure product catalogs so adding or updating technical specs is straightforward.' }
    ],
    relatedServiceSlugs: ['business-websites', 'ecommerce', 'lead-management', 'custom-business-software'],
    seoTitle: 'Manufacturer Website Development & Industrial RFQ Portals | Sygmia Innovative',
    metaDescription: 'B2B web portals, interactive product catalogs, and automated Request for Quote (RFQ) systems for manufacturers and industrial suppliers.'
  },
  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate & Developers',
    heroTagline: 'Lead Generation & Property Showcase Systems',
    heroHeadline: 'Showcase property listings and generate high-intent buyer & tenant leads.',
    heroSubtitle: 'Present residential & commercial properties with rich galleries, floor plans, neighborhood guides, and direct site-visit scheduling.',
    ctaText: 'Talk About Your Property Business',
    problemHeadline: 'Why real estate agencies miss out on serious property buyers',
    problemStatement: 'Property buyers browse late at night and want instant floor plans, price breakdowns, and location details. Slow responses lead buyers directly to alternative listings.',
    problems: [
      'Property photos posted on social media without structured price and amenity details',
      'High volume of casual inquiries taking up agent time on non-serious buyers',
      'No central web listing for active residential and commercial inventory',
      'Manual follow-ups for site visit scheduling and brochure sharing'
    ],
    bucketOverview: {
      getOnline: [
        'Property agency website & project listings',
        'High-res image & floor plan showcase',
        'Amenities & location map integration',
        'Direct agent WhatsApp shortcut'
      ],
      improve: [
        'Property filter UX (Price, Location, BHK)',
        'Mobile property brochure viewing',
        'Local real estate SEO optimization',
        'High-converting site-visit CTA buttons'
      ],
      automate: [
        'Instant WhatsApp brochure & layout PDF bot',
        'Automated site visit scheduling flow',
        'Property buyer inquiry CRM dashboard',
        'New listing alert broadcast system'
      ]
    },
    workflowHeadline: 'The property buyer conversion journey',
    workflowSteps: [
      { step: '01', stage: 'Property Search', description: 'Buyer searches for apartments, villas, or commercial space in your city.' },
      { step: '02', stage: 'Listing Review', description: 'Explores property photos, floor plan layouts, pricing, and project amenities.' },
      { step: '03', stage: 'Brochure Request', description: 'Requests detailed project brochure or schedules a guided site visit.' },
      { step: '04', stage: 'Instant WhatsApp Dispatch', description: 'Receives complete project PDF & location pin on WhatsApp immediately.' },
      { step: '05', stage: 'Site Visit & Closing', description: 'Attends scheduled site visit with assigned sales agent and closes deal.' }
    ],
    solutionHeadline: 'Turn property views into confirmed site visits and closed deals',
    solutionCopy: 'We build sleek, modern real estate portals and project landing pages that showcase properties in their best light and automate site visit bookings.',
    faqs: [
      { question: 'Can buyers receive property brochures automatically on WhatsApp?', answer: 'Yes! When a buyer requests details, our automated system instantly dispatches the project PDF brochure on WhatsApp.' },
      { question: 'Can we feature multiple agents and property types?', answer: 'Yes, you can organize listings by property type (Residential, Commercial, Land) and assign dedicated agents.' }
    ],
    relatedServiceSlugs: ['business-websites', 'lead-management', 'whatsapp-automation', 'booking-systems'],
    seoTitle: 'Real Estate Website Development & Property Lead Generation | Sygmia Innovative',
    metaDescription: 'Property showcase portals, interactive project landing pages, site visit scheduling, and WhatsApp lead automation for real estate.'
  }
};
