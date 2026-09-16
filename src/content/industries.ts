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
    heroHeadline: 'Professional restaurant websites & direct ordering workflows.',
    heroSubtitle: 'Whether you simply need a clean digital menu and location site or a full direct-ordering & QR table management system, Sygmia builds practical food business solutions.',
    ctaText: 'Get My Restaurant Website Quote',
    problemHeadline: 'Solving the digital challenges of modern food businesses',
    problemStatement: 'Relying solely on third-party food aggregators cuts 25-30% into your order margins, while outdated PDF menus frustrates hungry smartphone customers.',
    problems: [
      'Customers struggling to read blurry social media PDF menus on mobile screens',
      'High aggregator commission fees eating up 25-30% of profit margins',
      'No way to capture customer contact info for direct repeat offers',
      'Manual phone calls during busy dining hours for table reservations'
    ],
    bucketOverview: {
      getOnline: [
        'Mobile-optimized digital restaurant website',
        'Clean photo gallery, menu & location guide',
        'Direct WhatsApp inquiry & order links',
        'Google Business Profile integration'
      ],
      improve: [
        'Fast QR code menu experience',
        'Local SEO ranking for dining searches',
        'Dine-in table booking & contact flow',
        'High-converting mobile layout'
      ],
      automate: [
        'Direct delivery/pickup order engine',
        'Automated table reservation management',
        'WhatsApp order status notifications',
        'Direct customer feedback collection'
      ]
    },
    workflowHeadline: 'Two tailored options for your restaurant',
    workflowSteps: [
      { step: 'Option 01', stage: 'Restaurant Website', description: 'Menu, Gallery, Location, Contact/WhatsApp, Reservation options, SEO & Mobile-friendly UI.' },
      { step: 'Option 02', stage: 'Restaurant Ordering & Automation', description: 'QR menu, Online ordering, Order management, Table management & direct workflows.' },
      { step: '03', stage: 'Customer Discovery', description: 'Nearby food lovers discover your menu on Google Search or Maps.' },
      { step: '04', stage: 'Direct Action', description: 'Customer views dish photos and orders directly on WhatsApp or reserves a table.' },
      { step: '05', stage: 'Zero Commission', description: 'You retain 100% of your food order margins and build direct customer loyalty.' }
    ],
    solutionHeadline: 'Simple presence or advanced ordering — you choose what fits',
    solutionCopy: 'We build lightning-fast restaurant websites that highlight your culinary delights, make menu browsing effortless, and save heavy platform commission fees.',
    faqs: [
      { question: 'What if I only want a simple restaurant website without complex ordering?', answer: 'We build clean, affordable restaurant websites with your menu, location, photos, and WhatsApp contact button without forcing you into complex software.' },
      { question: 'Do we pay commissions on direct orders?', answer: 'Zero commissions. You own your ordering platform completely.' },
      { question: 'Can customers scan QR codes at tables to see our menu?', answer: 'Yes! We generate high-speed QR codes linked directly to your clean digital menu.' }
    ],
    relatedServiceSlugs: ['business-websites', 'business-automation', 'custom-business-software'],
    featuredProjectSlug: 'resto-buddy-saas',
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
  },
  'travel-agencies': {
    slug: 'travel-agencies',
    name: 'Travel Agencies & Tour Operators',
    heroTagline: 'Digital Tour Packages & Booking Systems',
    heroHeadline: 'Showcase tour itineraries, capture travel inquiries, and book custom trips.',
    heroSubtitle: 'Build a high-converting travel website featuring interactive day-wise itineraries, package pricing guides, lead capture, and direct WhatsApp trip customizer.',
    ctaText: 'Talk About Your Travel Agency',
    problemHeadline: 'Why travel agencies lose prospective travelers',
    problemStatement: 'Travelers want clear day-by-day itineraries, inclusions, transparency, and quick WhatsApp responses when planning holidays.',
    problems: [
      'Sending messy PDF itineraries over WhatsApp that get lost in chat history',
      'No central search for destination tour packages and seasonal deals',
      'Manual response delays resulting in travelers booking with online portals',
      'Inability to capture structured trip preferences (budget, dates, guests)'
    ],
    bucketOverview: {
      getOnline: [
        'Travel agency website & tour package catalog',
        'Day-wise visual itineraries & inclusions',
        'Custom trip inquiry builder',
        'Direct WhatsApp itinerary shortcut'
      ],
      improve: [
        'Mobile tour itinerary viewing',
        'Destination search & filter UX',
        'SEO ranking for regional tour packages',
        'Traveler trust & review showcase'
      ],
      automate: [
        'Instant WhatsApp itinerary PDF dispatch',
        'Automated trip inquiry lead routing',
        'Traveler preference intake form',
        'Seasonal deal broadcast campaigns'
      ]
    },
    workflowHeadline: 'The traveler inquiry & booking workflow',
    workflowSteps: [
      { step: '01', stage: 'Destination Search', description: 'Traveler searches for tour packages to their dream destination.' },
      { step: '02', stage: 'Itinerary Review', description: 'Explores day-by-day schedules, hotel tiers, inclusions, and package cost.' },
      { step: '03', stage: 'Customization Request', description: 'Submits trip dates, guest count, and special requests via simple form.' },
      { step: '04', stage: 'Instant WhatsApp Dispatch', description: 'Receives detailed itinerary breakdown and quotation on WhatsApp.' },
      { step: '05', stage: 'Booking Confirmation', description: 'Finalizes trip details with your travel agent and confirms booking.' }
    ],
    solutionHeadline: 'Present irresistible travel itineraries that turn inquiries into bookings',
    solutionCopy: 'We build visually captivating travel agency websites that highlight your destination expertise and automate itinerary sharing.',
    faqs: [
      { question: 'Can travelers customize their itineraries online?', answer: 'Yes! We build simple inquiry forms where travelers can specify dates, budget, hotel preferences, and activities.' },
      { question: 'Can we send PDF itineraries directly on WhatsApp?', answer: 'Absolutey! When a lead selects a tour package, our system dispatches the complete itinerary on WhatsApp.' }
    ],
    relatedServiceSlugs: ['business-websites', 'lead-management', 'whatsapp-automation'],
    seoTitle: 'Travel Agency Website Development & Tour Package Systems | Sygmia',
    metaDescription: 'Custom travel agency websites, interactive day-wise tour itineraries, trip inquiry forms, and WhatsApp automation.'
  },
  'ngos': {
    slug: 'ngos',
    name: 'NGOs & Non-Profit Organizations',
    heroTagline: 'Impact Digital Portals for Non-Profits',
    heroHeadline: 'Communicate your mission, showcase impact stories, and drive supporter contributions.',
    heroSubtitle: 'Build a trustworthy, transparent digital presence for your organization to engage donors, recruit volunteers, and highlight community initiatives.',
    ctaText: 'Talk About Your Organization',
    problemHeadline: 'The digital challenges facing non-profit organizations',
    problemStatement: 'Donors and grant partners demand clear evidence of impact, financial transparency, and simple ways to contribute online.',
    problems: [
      'Outdated websites that fail to demonstrate real on-the-ground impact',
      'No online donation gateway setup for instant digital contributions',
      'Difficulty collecting volunteer applications and event registrations',
      'Lack of accessible annual reports and program document downloads'
    ],
    bucketOverview: {
      getOnline: [
        'Authoritative non-profit website',
        'Mission, vision & initiative showcase',
        'Impact story photo & video galleries',
        'Direct WhatsApp contact & inquiry'
      ],
      improve: [
        'Mobile donation & contribution UX',
        'Annual report & brochure download portal',
        'SEO for cause-related searches',
        'Trust & transparency badge display'
      ],
      automate: [
        'Digital donation gateway (Razorpay / UPI)',
        'Automated 80G tax exemption receipt email',
        'Volunteer application intake pipeline',
        'Supporter newsletter broadcast system'
      ]
    },
    workflowHeadline: 'The supporter & donor engagement journey',
    workflowSteps: [
      { step: '01', stage: 'Cause Discovery', description: 'Supporter discovers your initiative via search, news, or referral.' },
      { step: '02', stage: 'Impact Verification', description: 'Reads real field project stories, photo proof, and financial reports.' },
      { step: '03', stage: 'Action Selection', description: 'Chooses to donate online, volunteer, or partner on a community project.' },
      { step: '04', stage: 'Contribution / Registration', description: 'Completes digital donation or submits volunteer registration form.' },
      { step: '05', stage: 'Automated Receipt & Thank You', description: 'Receives instant digital payment receipt and donation acknowledgement.' }
    ],
    solutionHeadline: 'Build deep trust with donors and scale your social impact',
    solutionCopy: 'We build transparent, impact-driven websites for non-profits, foundations, and social enterprises that inspire supporters to get involved.',
    faqs: [
      { question: 'Can donors pay directly via GPay, UPI, or Credit Cards?', answer: 'Yes! We integrate secure Indian & international payment gateways like Razorpay with zero monthly fees.' },
      { question: 'Can we upload downloadable annual reports and audited statements?', answer: 'Yes, we structure clean resource centers for PDF document downloads.' }
    ],
    relatedServiceSlugs: ['business-websites', 'website-redesign', 'lead-management'],
    seoTitle: 'NGO & Non-Profit Website Development | Sygmia Innovative',
    metaDescription: 'Impact websites, digital donation gateway integration, annual report portals, and volunteer intake systems for non-profits and NGOs.'
  },
  'ecommerce-brands': {
    slug: 'ecommerce-brands',
    name: 'E-commerce Brands & Retail',
    heroTagline: 'Direct-to-Consumer Online Store Systems',
    heroHeadline: 'Sell your products online directly with zero marketplace commissions.',
    heroSubtitle: 'Launch a high-converting D2C e-commerce store with instant UPI payments, mobile checkout, product catalog management, and automated WhatsApp order alerts.',
    ctaText: 'Talk About Your Product Store',
    problemHeadline: 'Why selling only on marketplaces limits your brand potential',
    problemStatement: 'Marketplaces charge 25-30% commissions, hijack your customer relationships, and prevent you from building direct brand equity.',
    problems: [
      'High marketplace fees eating away at product gross margins',
      'No ownership over customer emails and phone numbers for repeat marketing',
      'Slow mobile checkout experiences causing high cart abandonment',
      'Complex inventory setup and payment gateway integration headaches'
    ],
    bucketOverview: {
      getOnline: [
        'Custom D2C e-commerce storefront',
        'Mobile product catalog & category filters',
        'Integrated UPI, Card & Netbanking checkout',
        'WhatsApp direct order confirmation'
      ],
      improve: [
        'Lightning-fast mobile page speed',
        'High-converting product detail UI',
        'E-commerce product schema for Google Shopping',
        'Customer review & social proof integration'
      ],
      automate: [
        'Automated WhatsApp shipping & order status',
        'Abandoned cart recovery messages',
        'Customer purchase history database',
        'Promotional coupon & discount engine'
      ]
    },
    workflowHeadline: 'The direct e-commerce purchase journey',
    workflowSteps: [
      { step: '01', stage: 'Product Discovery', description: 'Customer lands on product page from search, social ad, or referral.' },
      { step: '02', stage: 'Catalog Selection', description: 'Browses high-res product photos, size/variant options, and pricing.' },
      { step: '03', stage: 'One-Click Checkout', description: 'Enters delivery address and pays instantly via UPI (GPay/PhonePe) or Card.' },
      { step: '04', stage: 'Instant WhatsApp Receipt', description: 'Receives instant order confirmation receipt and tracking code on WhatsApp.' },
      { step: '05', stage: 'Delivery & Repeat Sale', description: 'Product arrives; customer is added to your direct brand database for future offers.' }
    ],
    solutionHeadline: 'Build a profitable, commission-free digital sales channel',
    solutionCopy: 'We engineer fast, beautiful e-commerce web applications optimized for mobile buying habits and direct customer relationships.',
    faqs: [
      { question: 'Do we pay commissions on sales made through our website?', answer: 'Zero sales commissions! You keep 100% of your product revenue.' },
      { question: 'Can customers pay using GPay, PhonePe, and Paytm UPI?', answer: 'Yes, we integrate direct UPI payment buttons for fast 1-tap mobile payments.' }
    ],
    relatedServiceSlugs: ['ecommerce', 'business-websites', 'whatsapp-automation'],
    seoTitle: 'E-commerce Website Development & D2C Stores | Sygmia Innovative',
    metaDescription: 'Commission-free e-commerce storefronts, fast mobile checkout, UPI payment gateway setup, and WhatsApp order automation for retail brands.'
  },
  'distributors': {
    slug: 'distributors',
    name: 'Distributors & Wholesale Suppliers',
    heroTagline: 'B2B Wholesale Ordering & Dealer Portals',
    heroHeadline: 'Streamline bulk ordering, dealer inquiries, and wholesale catalog management.',
    heroSubtitle: 'Replace manual phone orders and WhatsApp price list messages with a digital B2B dealer portal, wholesale catalog, and bulk inquiry engine.',
    ctaText: 'Talk About Your Distribution Business',
    problemHeadline: 'The operational complexity in B2B wholesale distribution',
    problemStatement: 'Handling manual phone calls for stock availability, sending PDF price lists to hundreds of dealers, and processing handwritten orders leads to costly mistakes.',
    problems: [
      'Dealers constantly calling staff to check stock availability and wholesale rates',
      'Sending outdated PDF price sheets that cause pricing discrepancies',
      'Processing bulk orders manually via fragmented WhatsApp messages',
      'No central portal for new dealer applications and credit term checks'
    ],
    bucketOverview: {
      getOnline: [
        'B2B distributor portal & brand showcase',
        'Filterable wholesale product directory',
        'New dealer registration & inquiry form',
        'Direct WhatsApp sales desk connection'
      ],
      improve: [
        'Bulk volume tier pricing calculator',
        'Mobile catalog browsing for field reps',
        'SEO for regional wholesale distribution terms',
        'Dealer trust credential display'
      ],
      automate: [
        'Private dealer login & order portal',
        'Automated wholesale order summary PDF',
        'Stock alert notifications on WhatsApp',
        'B2B customer account management'
      ]
    },
    workflowHeadline: 'The B2B dealer ordering workflow',
    workflowSteps: [
      { step: '01', stage: 'Dealer Onboarding', description: 'Retailer or dealer applies for wholesale account on your portal.' },
      { step: '02', stage: 'Catalog Review', description: 'Browses wholesale SKU list, minimum order quantities (MOQs), and tier pricing.' },
      { step: '03', stage: 'Bulk Inquiry / Order', description: 'Selects quantities across multiple product SKUs and submits wholesale order.' },
      { step: '04', stage: 'Automated Invoice Summary', description: 'System generates structured purchase inquiry payload sent to your sales desk.' },
      { step: '05', stage: 'Dispatch & Settlement', description: 'Sales team verifies inventory, confirms credit/payment, and dispatches goods.' }
    ],
    solutionHeadline: 'Modernize your distribution business with effortless B2B digital workflows',
    solutionCopy: 'We build practical B2B wholesale web systems that save staff time, reduce order entry errors, and give your dealers a professional 24/7 ordering experience.',
    faqs: [
      { question: 'Can we restrict wholesale pricing so only approved dealers can see it?', answer: 'Yes! We can create password-protected dealer sections or require inquiry verification.' },
      { question: 'Can field sales reps use this site to place orders for customers on mobile?', answer: 'Absolutey! The mobile interface is designed for fast, frictionless multi-item ordering.' }
    ],
    relatedServiceSlugs: ['business-websites', 'custom-business-software', 'lead-management', 'ecommerce'],
    seoTitle: 'Distributor & Wholesale B2B Website Development | Sygmia Innovative',
    metaDescription: 'B2B wholesale web portals, dealer inquiry management, bulk order calculators, and distributor product catalogs.'
  }
};

