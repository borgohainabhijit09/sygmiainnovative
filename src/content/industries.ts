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
  }
};
