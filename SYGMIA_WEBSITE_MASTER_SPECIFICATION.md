# SYGMIA INNOVATIVE — WEBSITE MASTER SPECIFICATION

**Document Version:** 1.0  
**Status:** Planning / Pre-Implementation  
**Prepared:** September 2026  
**Purpose:** Master product, content, UX, SEO, acquisition, technical, and implementation specification for the new Sygmia Innovative website.

---

# 1. Executive Summary

Sygmia Innovative is building a new website intended to function as a **customer-acquisition system**, not merely as a company brochure or development portfolio.

The website must:

- Clearly communicate what Sygmia does.
- Address small businesses and organizations without restricting the company to a single industry.
- Position Sygmia around three practical customer needs:
  1. **Get Online**
  2. **Improve What You Have**
  3. **Automate Your Work**
- Support industry-specific and service-specific landing pages.
- Be designed from the beginning for Google Search, Google Ads, SEO, conversion tracking, and future expansion.
- Build trust for businesses that may not know whom to trust with technology work.
- Turn enquiries into measurable leads.
- Allow the company to learn from actual acquisition data and expand the pages/services that perform best.
- Remain technically simple enough to maintain while being architecturally capable of supporting many landing pages.

The central principle is:

> **Simple website for humans. Detailed architecture for search engines and prospects.**

The website should not become a generic "everything technology" agency site.

---

# 2. Mandatory Pre-Implementation Instruction

## IMPORTANT — DO NOT START CODING IMMEDIATELY

Before implementation, study this entire specification and:

1. Identify contradictions.
2. Identify missing decisions.
3. Identify assumptions that need validation.
4. Identify UX, SEO, architecture, performance, security, or conversion risks.
5. Map the requested UI structure to the proposed technical architecture.
6. Identify reusable components and data models.
7. Propose the implementation phases and dependencies.
8. Identify which requirements should be V1 versus future phases.
9. Highlight anything that should be changed before implementation.
10. Produce an implementation plan for review before substantial application code is written.

Do not blindly implement ambiguous requirements.

Where a technical decision is required, recommend the simplest robust solution that supports the business objective.

---

# 3. Business Objective

The website should help Sygmia build a repeatable customer-acquisition engine:

```text
Search / Ads / Referral
        ↓
Relevant Landing Page
        ↓
Trust + Clear Problem/Solution
        ↓
CTA
        ↓
Lead
        ↓
Qualification
        ↓
Conversation / Proposal
        ↓
Customer
        ↓
Revenue
        ↓
Reinvestment + Optimization
```

The long-term objective is not simply to generate traffic.

It is to determine:

> **Which customer problems, services, and industries can be acquired profitably?**

The website therefore needs measurable conversion and attribution from the beginning.

---

# 4. Brand Positioning

## Primary Positioning

> **Digital Solutions for Small Businesses & Organizations**

## Core Statement

> **Sygmia helps small businesses and organizations build, improve and automate their digital operations.**

## Core Promise

> **Your business is already working. Let's make the digital side work better.**

## Supporting Message

> We build websites, improve digital experiences and automate business processes for small businesses and organizations.

---

# 5. Brand Philosophy

Sygmia should be positioned around solving business problems rather than selling technology.

Core beliefs:

- Technology should solve a business problem.
- Start with the business, not the technology.
- The right solution is not always the biggest solution.
- Small businesses deserve practical digital solutions.
- Customers should not need to understand technology to work with Sygmia.
- Clear scope and communication matter.
- Build for today's needs without unnecessarily blocking tomorrow's growth.
- Do not introduce complexity merely because it is technically possible.

---

# 6. What Sygmia Is NOT

The website must avoid positioning Sygmia as:

### 6.1 A generic web agency

Avoid leading with:

> "We create stunning websites."

### 6.2 A low-cost freelancer marketplace

Do not compete primarily on cheapest price.

### 6.3 A technology showcase

Do not make React, Node.js, PostgreSQL, Docker, AI, APIs, etc. the primary message.

Technology can appear as supporting information.

### 6.4 An "everything technology" company

Avoid a laundry list such as:

> Web + Mobile + Blockchain + AI + Cloud + IoT + Cybersecurity + Metaverse...

### 6.5 An SEO-only agency

SEO is a capability and acquisition mechanism, not the core identity.

### 6.6 SaaS-only

Sygmia can build SaaS products, but should also solve individual business problems through websites, automation, and custom software.

---

# 7. Target Market

## Primary Audience

Small businesses and organizations that need practical digital solutions.

## Initial Industry Markets

1. Coaching Centres
2. Salons
3. Gyms
4. Consultants
5. Small Manufacturers
6. Travel Agencies
7. Real Estate
8. Restaurants & Cafes
9. NGOs
10. Small E-commerce Businesses
11. Distributors
12. Other Small Businesses

These are **industry solution markets**, not permanent restrictions on whom Sygmia can serve.

---

# 8. Horizontal Capability + Vertical Landing Pages

The strategic model is:

> **Horizontal capabilities + vertical landing pages**

Sygmia maintains broad capabilities:

- Websites
- Digital experiences
- Automation
- Custom software

Industry pages explain those capabilities in the language and context of specific businesses.

Example:

```text
                 SYGMIA
                    |
        +-----------+-----------+
        |           |           |
    GET ONLINE   IMPROVE    AUTOMATE
        |           |           |
        +-----------+-----------+
                    |
          INDUSTRY-SPECIFIC
             SOLUTIONS
                    |
      +------+------+------+------+------+
      |      |      |      |      |      |
    Salon   Gym  Restaurant NGO  Coaching ...
```

This allows Sygmia to remain broad without making every marketing message generic.

---

# 9. Three Core Commercial Buckets

These are central to the website.

## 9.1 GET ONLINE

### Positioning

> **Build your digital presence.**

For businesses without a proper digital presence.

Potential services:

- Business websites
- Landing pages
- E-commerce websites
- Digital presence setup
- SEO foundations
- Business information pages
- Contact/enquiry setup

---

## 9.2 IMPROVE WHAT YOU HAVE

### Positioning

> **Make your existing digital presence work better.**

For businesses that already have a website or digital presence but it is outdated, slow, confusing, ineffective, or poorly optimized.

Potential services:

- Website redesign
- Performance improvements
- Mobile optimization
- SEO improvements
- Conversion optimization
- UX improvements
- Content structure improvements

---

## 9.3 AUTOMATE YOUR WORK

### Positioning

> **Replace repetitive manual work with systems.**

Potential services:

- Business automation
- Lead management
- Booking systems
- Dashboards
- WhatsApp workflows
- Internal tools
- Integrations
- Custom business software
- Notifications and workflow automation

---

# 10. Primary CTA Strategy

## Primary CTA

> **Start a Conversation**

Supporting message:

> Tell us what you're trying to improve. We'll help you figure out what you need.

## Secondary CTAs

- See Our Work
- Explore Solutions
- Explore Services
- Get a Free Website Audit
- Talk About Your Business

The primary conversion action should remain consistent across the site.

Avoid having many unrelated CTA labels competing with each other.

---

# 11. Information Architecture

## 11.1 Primary Navigation

```text
SYGMIA

Home
Services
Industries
Work
About
Contact

[Start a Conversation]
```

Desktop:

- Services can use a dropdown/mega menu.
- Industries can use a dropdown/mega menu.

Mobile:

- Hamburger navigation.
- Expandable Services and Industries groups.
- Primary CTA remains prominent.

---

# 12. Core Site Pages

```text
/
 /services
 /industries
 /work
 /about
 /contact
```

These are the primary human-facing navigation pages.

---

# 13. Service Page Architecture

```text
/services
/services/business-websites
/services/website-redesign
/services/business-automation
/services/custom-business-software
/services/ecommerce
/services/lead-management
/services/booking-systems
/services/whatsapp-automation
```

## V1 Service Pages

Launch initially with:

```text
/services/business-websites
/services/website-redesign
/services/business-automation
/services/custom-business-software
```

Additional pages can be added based on demand.

---

# 14. Industry Page Architecture

```text
/industries
/industries/small-businesses
/industries/coaching-centres
/industries/salons
/industries/gyms
/industries/consultants
/industries/manufacturers
/industries/travel-agencies
/industries/real-estate
/industries/restaurants
/industries/ngos
/industries/ecommerce
/industries/distributors
```

## V1 Industry Pages

Initial launch should prioritize:

```text
/industries/small-businesses
/industries/coaching-centres
/industries/salons
/industries/restaurants
```

Additional industries should be added after initial acquisition experiments or when sufficient unique content is available.

---

# 15. Work / Case Study Architecture

```text
/work
/work/[project-slug]
```

Each case study should focus on:

1. Problem
2. Business context
3. Approach
4. Solution
5. Key capabilities
6. Outcome
7. Technology (secondary)
8. CTA

Do not make technology the primary case-study story.

Business owners should understand:

> What problem existed?

> What did Sygmia build?

> What changed?

before seeing:

> React / Node / PostgreSQL / Docker

---

# 16. Homepage Specification

## Section 1 — Header

### Navigation

```text
SYGMIA

Home | Services | Industries | Work | About | Contact

[Start a Conversation]
```

Requirements:

- Sticky on scroll.
- Clean initial state.
- Subtle background/contrast change on scroll.
- Responsive.
- Accessible keyboard navigation.
- Mobile navigation.
- Services and Industries expandable menus.

---

# 17. Homepage Hero

## Primary Headline

> **Your business is already working. Let's make the digital side work better.**

## Supporting Copy

> We build websites, improve digital experiences and automate business processes for small businesses and organizations.

## Primary CTA

> **Start a Conversation**

## Secondary CTA

> **See Our Work**

## Supporting Line

> Websites • Digital Experiences • Business Automation

## Visual Direction

Avoid generic stock photography of developers looking at laptops.

Prefer a visual system representing:

```text
Business
   ↓
Website / Digital Presence
   ↓
Customer
   ↓
Enquiry
   ↓
Business System
   ↓
Automation
```

The visual should feel modern, professional, practical, and connected to real business operations.

---

# 18. Homepage — Three Bucket Slider

Use a three-card responsive slider/carousel.

## Card 1 — GET ONLINE

Headline:

> **You don't have a proper digital presence yet.**

Copy:

> Build a professional website and digital foundation that gives customers a better way to discover and connect with your business.

CTA:

> Explore →

Visual concept:

Business transitioning from physical/local presence to a professional digital storefront.

---

## Card 2 — IMPROVE WHAT YOU HAVE

Headline:

> **Your website exists. But it isn't doing enough.**

Copy:

> Redesign, optimize and improve your existing digital presence so it works better for your customers and your business.

CTA:

> Explore →

Visual concept:

Before/after digital experience transformation.

---

## Card 3 — AUTOMATE YOUR WORK

Headline:

> **You're doing too much manually.**

Copy:

> Turn repetitive processes into connected digital workflows, dashboards and business systems.

CTA:

> Explore →

Visual concept:

Customer → enquiry → follow-up → booking → notification workflow becoming automated.

---

# 19. Homepage — Problem Section

Headline:

> **Technology isn't the problem. Knowing what to build is.**

Copy:

> Small businesses often know they need a website, better systems or automation — but aren't sure where to start, what they actually need, or whom to trust.

Three problem statements:

### "I need a website."

But what kind?

### "We need to automate this."

But where do you begin?

### "Our website isn't working."

But what's actually wrong?

Closing statement:

> **We help you figure that out before we start building.**

Purpose:

Directly address the trust/discovery gap between businesses and technology providers.

---

# 20. Homepage — What We Do

Headline:

> **From your first website to your next business system.**

Four categories:

## Websites

Professional business websites, landing pages and e-commerce experiences.

## Digital Experiences

Redesign, performance, UX and SEO foundations.

## Business Automation

Replace repetitive manual work with connected workflows.

## Custom Software

When existing tools do not fit, build around the business process.

CTA:

> **Explore All Services →**

---

# 21. Homepage — Approach

Headline:

> **We don't start with technology. We start with your business.**

Three steps:

### 01 — Understand

What does the business actually need?

### 02 — Simplify

What can be improved, removed, or automated?

### 03 — Build

What technology will solve the problem?

Closing principle:

> **The right solution isn't always the biggest one.**

---

# 22. Homepage — Industries

Headline:

> **Different businesses. Similar digital problems.**

Supporting copy:

> From local businesses to growing organizations, we build practical digital solutions around the way you work.

Industry cards:

- Coaching Centres
- Salons
- Gyms
- Consultants
- Manufacturers
- Travel Agencies
- Real Estate
- Restaurants & Cafes
- NGOs
- E-commerce
- Distributors
- Other Small Businesses

Each should eventually link to its relevant landing page.

---

# 23. Homepage — Work

Headline:

> **Things we've built. Problems we've solved.**

Show 3–4 strongest projects.

Each project should communicate:

- Problem
- Solution
- Outcome

CTA:

> **View All Work →**

Projects should be filterable or categorized by:

- Industry
- Capability

This allows contextual case-study display on landing pages.

---

# 24. Homepage — Process

Headline:

> **A straightforward process. No technical maze.**

Five steps:

### 01 — Talk

Tell us what's happening.

### 02 — Understand

We learn about the business and requirements.

### 03 — Plan

We recommend the right approach.

### 04 — Build

We design, develop and test.

### 05 — Launch & Improve

We deploy and continue supporting the digital journey.

CTA:

> **Start a Conversation →**

---

# 25. Homepage — Trust

Headline:

> **You don't need to know technology. You just need someone who understands your problem.**

Trust points:

### Clear Scope

Customers know what they are getting.

### Practical Solutions

Do not build complexity just for the sake of it.

### Direct Communication

Communicate directly with the people working on the project.

### Built to Grow

Start small and expand when the business needs it.

Only make claims that can actually be honored operationally.

---

# 26. Homepage — FAQ

Initial questions:

### Do you only build websites?

No. Websites are one part of what Sygmia does. Sygmia also works on business automation, dashboards, custom software and digital workflows.

### Do you work with small businesses?

Yes. The primary focus is practical digital solutions for small businesses and organizations.

### I don't know what solution I need. Can you help?

Yes. Customers can describe their business problem or objective without preparing a technical specification.

### Can you improve an existing website?

Yes. Sygmia can evaluate and improve an existing website instead of unnecessarily rebuilding everything.

### Do you work with businesses outside your local area?

Answer based on the actual operating model at launch.

---

# 27. Homepage — Final CTA

Headline:

> **Have a business problem you'd like to solve?**

Supporting copy:

> You don't need a technical specification. Tell us what you're trying to achieve.

Primary CTA:

> **Start a Conversation →**

Secondary:

> **WhatsApp Us**

---

# 28. Homepage — Footer

Suggested structure:

```text
SYGMIA

Digital solutions for small businesses
and organizations.

Services
Industries
Work
About
Contact

Business Websites
Website Redesign
Business Automation
Custom Software

Relevant social/company links

Privacy
Terms

© 2026 Sygmia Innovative
```

Optional closing statement:

> **Built to solve real problems.**

---

# 29. Service Landing Page Template

Each service page should follow this structure:

```text
Hero
↓
Problem
↓
Solution
↓
Capabilities / Deliverables
↓
Process
↓
Relevant Work
↓
Who It Is For
↓
Trust / Differentiators
↓
FAQ
↓
Final CTA
```

---

# 30. Service Landing Page — Hero

Must answer:

1. What is this?
2. Who is it for?
3. Why does it matter?

Example:

### Business Website

> **A website that works for your business.**

Supporting copy:

> Professional, fast and conversion-focused websites built around your business — not a generic template.

CTA:

> Start a Conversation

Secondary:

> See Our Work

---

# 31. Service Landing Page — Problem

Example:

> **A website shouldn't just exist.**

Discuss real problems:

- Outdated design
- Poor mobile experience
- Difficult navigation
- Missing information
- No clear CTA
- Slow performance
- Weak conversion path

Avoid technology-heavy language.

---

# 32. Service Landing Page — Solution

Example capabilities:

- Business websites
- Landing pages
- Service websites
- E-commerce
- Location/contact integration
- Lead/enquiry capture
- SEO foundations
- Analytics/conversion tracking

---

# 33. Service Landing Page — Deliverables

Make the deliverable tangible.

Example:

| Business Need | Sygmia Solution |
|---|---|
| Professional presence | Responsive website |
| Customer discovery | SEO-ready structure |
| Enquiries | Contact/WhatsApp integration |
| Mobile users | Responsive experience |
| Performance | Optimized implementation |
| Measurement | Analytics and conversion tracking |

---

# 34. Service Landing Page — Pricing Philosophy

Do not force fixed pricing before sufficient market data exists.

Suggested positioning:

> **Every business is different.**

> We scope projects based on what you actually need rather than forcing every business into the same package.

This can change later when reliable pricing packages emerge.

---

# 35. Industry Landing Page Template

Each industry page should follow:

```text
Industry Hero
↓
Industry Problems
↓
Three Buckets
↓
Industry Workflow
↓
Relevant Solutions
↓
Relevant Services
↓
Relevant Work
↓
Why Sygmia
↓
Industry FAQ
↓
Final CTA
```

---

# 36. Industry Landing Page — Hero

Example for salons:

> **Digital solutions built for salons.**

Supporting copy:

> From your first website to online bookings and customer automation, we help salons build a stronger digital presence and reduce repetitive work.

CTA:

> **Talk About Your Salon**

Secondary:

> **See What We Can Build**

---

# 37. Industry Landing Page — Problem

Use real industry-specific situations.

Example for salons:

- Customers ask repeated questions.
- Customers need service/pricing information.
- Customers want to know availability.
- Booking often happens through messages or calls.
- Business information may be scattered across social platforms.

Closing statement:

> **Your digital presence should answer common questions before you have to.**

Every industry must have genuinely unique problems rather than copied generic text.

---

# 38. Industry Landing Page — Three Buckets

Example:

## GET ONLINE

- Professional website
- Services and pricing
- Gallery
- Location
- Contact/WhatsApp

## IMPROVE

- Better mobile experience
- Booking-focused redesign
- Local SEO foundations
- Better conversion flow

## AUTOMATE

- Online booking
- Appointment reminders
- Customer records
- WhatsApp workflows
- Follow-ups

Each industry should have its own relevant interpretation of the three buckets.

---

# 39. Industry Workflow Visualization

Where applicable, show the business workflow.

Example:

```text
Customer
   ↓
Finds Business
   ↓
Visits Website
   ↓
Views Services
   ↓
Books / Enquires
   ↓
Confirmation
   ↓
Reminder
   ↓
Visit / Purchase
   ↓
Follow-up
```

Purpose:

Help a non-technical business owner understand automation through their actual business process.

---

# 40. Landing Page Content Rules

## Reuse structure, not copy.

The React/component architecture should be reusable.

The content should be unique.

Do NOT create:

> "Sygmia provides innovative digital solutions for salons."

then copy it for:

> gyms / restaurants / NGOs / manufacturers.

Each page must have:

- Unique problems
- Unique workflows
- Relevant terminology
- Unique FAQs
- Relevant services
- Relevant examples
- Meaningful internal links

---

# 41. SEO Strategy

## Core Principle

> **Search intent > page count**

A page should exist because it serves a distinct search intent or customer need.

Do not create pages solely because more URLs are assumed to be good for SEO.

---

# 42. Search Intent Architecture

Three primary acquisition paths:

## Service intent

Example:

> website redesign company

→ `/services/website-redesign`

## Industry intent

Example:

> website for salon

→ `/industries/salons`

## Broad small-business intent

Example:

> website developer for small business

→ `/industries/small-businesses`

The homepage should establish the broad brand/topic, not attempt to rank for every industry and service simultaneously.

---

# 43. Google Ads Architecture

Ads should map to highly relevant landing pages.

Example:

```text
Search:
"website for salon"

        ↓

Ad:
"Salon Website Development
Services • Gallery • Booking • WhatsApp"

        ↓

/industries/salons

        ↓

Salon-specific CTA
```

Another:

```text
Search:
"website redesign company"

        ↓

Ad:
"Is Your Business Website Outdated?"

        ↓

/services/website-redesign
```

Another:

```text
Search:
"business automation services"

        ↓

Ad:
"Automate Repetitive Business Work"

        ↓

/services/business-automation
```

Do not send every ad to the homepage.

---

# 44. Acquisition Experiment Strategy

Do not assume the best niche theoretically.

Test.

Initial possible experiments:

1. Business website for small businesses
2. Website redesign
3. Business automation
4. Free website audit
5. Selected industry pages such as coaching, salons, restaurants

Measure:

```text
Impressions
↓
Clicks
↓
Enquiries
↓
Qualified Leads
↓
Meetings
↓
Proposals
↓
Customers
↓
Revenue
```

Use actual market results to decide which industries and offers deserve more investment.

---

# 45. Customer Acquisition Economics

Track:

## CAC

Customer Acquisition Cost:

> Total acquisition/sales expenditure ÷ new customers

## Customer contribution/value

Measure the actual gross contribution from each customer.

The objective is not simply:

> More traffic

or:

> More leads

The objective is:

> **Profitable customer acquisition.**

Do not blindly copy another company's advertising budget or expected conversion rate.

---

# 46. Internal Linking

Every commercial page should link logically to:

- Related services
- Related industries
- Relevant case studies
- Contact
- Relevant supporting content

Example:

```text
Salon
 ├── Business Website
 ├── Booking System
 ├── WhatsApp Automation
 ├── Website Redesign
 └── Relevant Work
```

And:

```text
Business Website
 ├── Salons
 ├── Restaurants
 ├── Coaching Centres
 └── Small Businesses
```

---

# 47. Breadcrumbs

Use visible breadcrumbs where useful:

```text
Home → Industries → Salons
```

or:

```text
Home → Services → Business Automation
```

Implement appropriate structured data where valid.

---

# 48. SEO Metadata Requirements

Every indexable page must have:

- Unique title
- Unique meta description
- One primary H1
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Appropriate structured data
- Meaningful image alt text
- Internal links
- Appropriate indexability settings

Potential schema types, only when genuinely applicable:

- Organization
- WebSite
- Service
- BreadcrumbList
- Article
- FAQPage

Do not add schema merely for perceived SEO benefit.

---

# 49. Sitemap

Generate the sitemap automatically from published pages.

It must include actual indexable routes.

Adding a valid new industry/service page should automatically make it eligible for sitemap inclusion.

---

# 50. Robots

Robots configuration should:

- Allow legitimate crawlers to access public pages.
- Prevent crawling/indexing of private/internal routes.
- Avoid exposing internal implementation paths unnecessarily.
- Be validated before production.

---

# 51. Canonical URLs

Each indexable page should have the correct canonical URL.

Avoid duplicate URL variants where possible.

---

# 52. Structured Content Architecture

Do not hard-code every landing page independently.

Use reusable templates and structured content.

Conceptual industry data:

```text
IndustryLandingPage

slug
name
category
headline
subheadline
heroImage
problems[]
solutions[]
workflow[]
services[]
faqs[]
relatedIndustries[]
relatedServices[]
featuredProjects[]
seoTitle
metaDescription
ogImage
```

Conceptual service data:

```text
ServiceLandingPage

slug
name
headline
description
problems[]
capabilities[]
deliverables[]
process[]
faqs[]
relatedIndustries[]
relatedServices[]
featuredWork[]
seoTitle
metaDescription
ogImage
```

The exact implementation can differ.

---

# 53. Technical Stack

Recommended direction:

## Frontend

React + TypeScript.

Because SEO is a primary requirement, prefer a framework supporting SSR/SSG and strong metadata/routing support, such as Next.js, rather than a purely client-rendered SPA.

## Backend

Use a lightweight backend/API where required for lead handling.

## Database

PostgreSQL is sufficient for V1 lead storage.

## Deployment

Use a straightforward Git-based CI/CD deployment.

Avoid unnecessary infrastructure complexity.

---

# 54. Suggested Application Structure

Conceptual:

```text
src/
├── app/
│   ├── page
│   ├── services/
│   ├── industries/
│   ├── work/
│   ├── about/
│   ├── contact/
│   ├── sitemap
│   └── robots
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── cards/
│   ├── forms/
│   ├── case-studies/
│   ├── landing-pages/
│   └── seo/
│
├── content/
│   ├── services/
│   ├── industries/
│   ├── work/
│   └── faq/
│
├── lib/
│   ├── analytics/
│   ├── seo/
│   ├── validation/
│   └── utilities/
│
└── public/
    ├── images/
    ├── icons/
    └── ...
```

This is architectural guidance, not a requirement to copy the exact folder names.

---

# 55. Reusable Component Strategy

Create reusable components for:

- Header
- Footer
- Hero
- CTA
- Service cards
- Industry cards
- Three-bucket cards
- Case-study cards
- FAQ
- Breadcrumbs
- Process timeline
- Trust cards
- Contact form
- Related content
- SEO metadata

Do not create separate bespoke implementations for every industry.

---

# 56. Lead Model

Conceptual lead structure:

```text
Lead
├── id
├── name
├── businessName
├── phone
├── email
├── requirement
├── message
├── source
├── medium
├── campaign
├── landingPage
├── createdAt
└── status
```

Initial statuses:

```text
New
Contacted
Qualified
Proposal
Won
Lost
```

The exact CRM implementation can be expanded later.

---

# 57. Contact Form

Keep the form low-friction.

Fields:

- Name
- Business / Organization
- Phone / WhatsApp
- Email
- What are you looking for?
- Tell us about it

Requirement options:

- New website
- Website improvement
- Business automation
- Custom software
- E-commerce
- Something else
- Not sure yet

Primary CTA:

> Send Enquiry

Do not create a 15–20 field form.

---

# 58. Conversion Tracking

Track at minimum:

```text
page_view
cta_click
whatsapp_click
phone_click
email_click
contact_form_start
contact_form_submit
case_study_view
landing_page_conversion
```

CTA events should capture context where useful:

```text
cta_click

{
  location: "hero",
  page: "/industries/salons",
  cta: "start_conversation"
}
```

---

# 59. Attribution / UTM Tracking

Support campaign parameters such as:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Preserve relevant attribution information with the lead submission where technically practical.

Example:

```text
?utm_source=google
&utm_medium=cpc
&utm_campaign=salon-websites
&utm_content=ad-01
```

This allows later analysis of:

> Which campaign generated this lead/customer?

---

# 60. Google Analytics / Search Console / Ads

The production website should support integration with:

- Google Analytics
- Google Search Console
- Google Ads conversion tracking

These should be implemented in a privacy-conscious and technically correct manner.

Do not mark simple page views as business conversions.

Meaningful conversions include:

- Contact form submission
- Qualified contact action
- Other verified lead actions

---

# 61. Performance Requirements

The site must be designed for strong performance.

## Images

- Modern formats where appropriate
- Responsive sizing
- Lazy loading where appropriate
- Correct intrinsic dimensions
- Avoid unnecessarily large files

## Fonts

Load only required font families and weights.

## JavaScript

Do not ship large client-side bundles for static marketing content.

## Animations

Use animation to improve comprehension and polish.

Avoid animation merely to demonstrate technical capability.

## Core Web Vitals

Performance should be treated as a launch requirement, especially for paid and organic traffic.

---

# 62. Mobile-First Requirements

The site must work well across:

- Small mobile screens
- Standard smartphones
- Tablets
- Desktop
- Large desktop

Do not simply shrink a desktop design onto mobile.

Prioritize:

- readable typography
- accessible controls
- touch-friendly CTAs
- fast loading
- compact navigation
- swipe-friendly three-bucket slider

---

# 63. Accessibility

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Adequate contrast
- Meaningful alt text
- Accessible form labels
- Accessible buttons/links
- Appropriate ARIA only when necessary
- Reduced-motion consideration for animation

---

# 64. Security

Lead forms and APIs must have:

- Server-side validation
- Client-side validation
- Input sanitization
- Rate limiting
- Spam protection
- Secure error handling
- Appropriate CSRF protection where applicable
- No secrets exposed in frontend code

Never expose:

- Database credentials
- Private API keys
- Authentication secrets
- Email service credentials
- Other private tokens

---

# 65. Database Scope

V1 does not need a complex CMS/database architecture.

Possible tables:

```text
leads
contact_submissions
projects
industries
services
```

Analytics events can initially remain in the analytics platform rather than being duplicated in PostgreSQL unless there is a clear product requirement.

---

# 66. Content Management Strategy

V1 recommendation:

> Version-controlled structured content.

Advantages:

- Simple
- Fast
- Auditable
- Easy deployment
- No unnecessary admin system
- Suitable for a small number of pages

A headless CMS can be introduced later if content volume and editorial needs justify it.

Do not build a CMS merely because it is technically possible.

---

# 67. Publishing Safeguards

A landing page should not become indexable unless it has, at minimum:

- Unique title
- Unique description
- H1
- Meaningful content
- CTA
- Appropriate image/visual content where needed
- Internal linking
- Canonical
- SEO metadata

Avoid automatically publishing empty or thin data-driven pages.

---

# 68. No Thin Programmatic SEO

Do not generate hundreds of pages by swapping industry names into the same template.

Reusable code is encouraged.

Duplicated content is not.

Every industry page needs meaningful unique content.

---

# 69. Work / Case Study Data Model

Conceptual:

```text
Project
├── slug
├── title
├── client
├── industry
├── problem
├── solution
├── outcome
├── capabilities[]
├── technologies[]
├── images[]
└── featured
```

Projects should support tagging by:

- Industry
- Service/capability

This allows contextual display of relevant work on landing pages.

---

# 70. 404 Page

Suggested tone:

> **Looks like this page took a wrong turn.**

Actions:

- Go Home
- Explore Services
- Explore Industries
- Start a Conversation

---

# 71. Error States

Form failure should not display raw server errors.

Example:

> Something went wrong while sending your enquiry. Please try again or contact us directly on WhatsApp.

Use human-readable recovery paths.

---

# 72. Deployment

Keep V1 deployment simple:

```text
GitHub
   ↓
CI/CD
   ↓
Production
   ↓
Domain
   ↓
HTTPS
```

Where practical, maintain:

- Development
- Staging
- Production

Use environment-specific configuration and secrets.

---

# 73. Development Phases

## Phase 1 — Foundation

Build:

- Core layout
- Navigation
- Design system
- Homepage
- Services
- Industries
- Work
- About
- Contact

## Phase 2 — Service Pages

Build reusable service landing-page template and initial pages.

## Phase 3 — Industry Pages

Build reusable industry landing-page template and initial industry pages.

## Phase 4 — Conversion Infrastructure

Implement:

- Contact form
- Lead storage
- WhatsApp/phone/email tracking
- CTA tracking
- UTM attribution

## Phase 5 — SEO Infrastructure

Implement:

- Metadata
- Canonicals
- Sitemap
- Robots
- Breadcrumbs
- Structured data
- Search Console readiness

## Phase 6 — Performance / Accessibility

Audit and optimize.

## Phase 7 — QA

Test all routes, forms, responsive states, SEO metadata, tracking, and error states.

## Phase 8 — Deployment

Production launch and post-launch verification.

---

# 74. V1 Page Scope

Recommended V1:

```text
/
 /services
 /services/business-websites
 /services/website-redesign
 /services/business-automation
 /services/custom-business-software

 /industries
 /industries/small-businesses
 /industries/coaching-centres
 /industries/salons
 /industries/restaurants

 /work
 /about
 /contact
```

This provides enough structure without creating unnecessary content-production overhead.

---

# 75. V2 Expansion

After acquisition experiments:

```text
/industries/gyms
/industries/consultants
/industries/manufacturers
/industries/travel-agencies
/industries/real-estate
/industries/ngos
/industries/ecommerce
/industries/distributors
```

Potential services:

```text
/services/lead-management
/services/booking-systems
/services/whatsapp-automation
/services/ecommerce
```

Only add pages when they can contain meaningful, useful content.

---

# 76. V3 Expansion

Potential intent-specific pages:

```text
/industries/salons/website
/industries/salons/booking
/industries/restaurants/website
/industries/coaching-centres/admission-system
```

These should be driven by actual search demand, customer requests, or demonstrated conversion opportunities.

---

# 77. Future Resources

Reserve architecture for:

```text
/resources
/resources/guides
/resources/articles
/resources/tools
```

Potential future lead-generation tool:

> **Free Website Audit**

Potential audit dimensions:

- Performance
- Mobile experience
- SEO basics
- UX
- Conversion issues

This can eventually become an automated lead magnet.

---

# 78. Content Strategy

Content should answer actual business questions.

Potential topics:

- How much does a website cost for a small business?
- Does my small business really need a website?
- Website vs Instagram for a local business
- How to get more enquiries from a business website
- How can a small business automate WhatsApp enquiries?
- When should a business replace its old website?
- What should a small business website contain?

Content should support service/industry pages rather than become a generic blog.

---

# 79. Trust Strategy

The website must solve the trust gap between:

> Businesses that need technology

and:

> Technology providers they do not know whether to trust.

Trust should come from:

- Real case studies
- Clear process
- Clear scope
- Human communication
- Demonstrable work
- Relevant industry understanding
- Transparent expectations
- No fake testimonials
- No fake statistics
- No fabricated client results

---

# 80. Customer Progression Model

The service business can naturally evolve:

```text
GET ONLINE
     ↓
Website Customer
     ↓
IMPROVE
     ↓
Redesign / Optimization
     ↓
AUTOMATE
     ↓
Business Systems
     ↓
Long-Term Relationship
```

A website customer may later need:

- Website improvements
- SEO
- Lead management
- Booking
- WhatsApp automation
- Dashboards
- Custom software

The architecture should allow this progression.

---

# 81. Measurement Model

The website should eventually provide visibility into:

```text
Traffic
↓
Clicks
↓
Enquiries
↓
Qualified Leads
↓
Meetings
↓
Proposals
↓
Customers
↓
Revenue
```

Useful analysis dimensions:

- Landing page
- Industry
- Service
- Campaign
- Search intent
- Acquisition source
- Conversion rate
- Customer acquisition cost
- Revenue

---

# 82. Design Direction

The visual identity should feel:

- Modern
- Professional
- Confident
- Human
- Practical
- Technology-enabled without being technology-obsessed

Avoid:

- Generic SaaS gradients everywhere
- Excessive glassmorphism
- Stock developer photography
- Overly futuristic "AI company" visuals
- Excessive animations
- Huge walls of text
- Excessive card grids

The site should feel like a **serious modern business partner**, not a template marketplace.

---

# 83. Copywriting Principles

Use:

- Clear language
- Business outcomes
- Short paragraphs
- Specific statements
- Customer language
- Concrete examples

Avoid:

- "Cutting-edge"
- "World-class"
- "Innovative solutions" without explanation
- "Revolutionary"
- Empty corporate jargon
- Unverifiable claims

Technology terminology should appear when useful, not as the primary sales language.

---

# 84. Technical Details Should Be Secondary

A potential customer should first understand:

> Problem → Solution → Outcome

Then, if interested:

> How it was built

Technical stacks can be included in case studies or supporting sections.

Example:

```text
Problem
↓
Solution
↓
Outcome
↓
Capabilities
↓
Technology
```

Not:

```text
React
Node
PostgreSQL
Docker
...
↓
????
```

---

# 85. Acceptance Criteria

## UX

- Navigation works on all supported breakpoints.
- All primary CTAs work.
- Forms work.
- WhatsApp links work.
- Phone links work.
- Case studies are accessible.
- Industry/service navigation is logical.
- No dead-end commercial pages.

## SEO

- Unique page titles.
- Unique meta descriptions.
- Correct H1.
- Canonicals.
- Sitemap.
- Robots.
- Open Graph metadata.
- Valid structured data where applicable.
- No accidental noindex.
- No broken internal links.
- Clean URLs.

## Performance

- Optimized images.
- Minimal unnecessary JavaScript.
- Responsive layouts.
- Strong Core Web Vitals.
- No unnecessarily heavy third-party scripts.

## Analytics

- Page views.
- CTA clicks.
- WhatsApp clicks.
- Phone clicks.
- Form starts.
- Form submissions.
- Case-study views.
- Attribution captured.

## Security

- Validated inputs.
- Rate limiting.
- Spam protection.
- Secrets protected.
- Safe error handling.

## Content

- No placeholder copy.
- No fake testimonials.
- No fake statistics.
- No fabricated results.
- No duplicated industry pages.
- No keyword stuffing.

---

# 86. Explicit "Do Not" List for Antigravity

Do NOT:

1. Start coding before reviewing this specification.
2. Build every landing page independently.
3. Duplicate industry-page copy.
4. Create pages purely to increase URL count.
5. Send all Google Ads traffic to the homepage.
6. Make technology the primary marketing message.
7. Add unnecessary CMS infrastructure.
8. Add unnecessary backend complexity.
9. Add animations everywhere.
10. Use fake testimonials or results.
11. Invent customer statistics.
12. Make unsupported SEO claims.
13. Treat Google Ads budget assumptions as guaranteed results.
14. Create 50+ pages in V1 without content justification.
15. Hard-code every industry page as a separate React implementation.
16. Expose secrets in frontend code.
17. Treat page views as meaningful business conversions.
18. Build a complex CRM before there is a clear requirement.
19. Optimize for search engines at the expense of human readability.
20. Treat this document as permission to make major business decisions without flagging them.

---

# 87. Architectural Principle Summary

The final architecture should support:

```text
                    SYGMIA
                      |
            +---------+---------+
            |                   |
        CORE SITE          ACQUISITION LAYER
            |                   |
      Brand + Trust       Service + Industry
                              Pages
                                |
                    +-----------+-----------+
                    |                       |
                  SEO                   GOOGLE ADS
                    |                       |
                    +-----------+-----------+
                                |
                         RELEVANT PAGE
                                |
                             CTA
                                |
                              LEAD
                                |
                             SALES
                                |
                            CUSTOMER
                                |
                             REVENUE
                                |
                         DATA / LEARNING
                                |
                      Better pages + offers
                                |
                         More acquisition
```

---

# 88. Final Product Definition

The new Sygmia website is not simply:

> A company website.

It is:

> **A scalable digital acquisition and trust-building system for Sygmia Innovative.**

Its public-facing experience remains simple:

> **Home → Services → Industries → Work → About → Contact**

Its underlying architecture is scalable:

> **Service pages + Industry pages + Case studies + SEO + Ads + Analytics + Lead capture**

Its commercial model is:

> **Get Online → Improve → Automate**

Its acquisition model is:

> **Specific intent → Specific page → Specific offer → Specific CTA**

Its optimization model is:

> **Traffic → Leads → Customers → Data → Better acquisition**

---

# 89. Immediate Next Step

Before implementation:

1. Review this specification.
2. Resolve any remaining business decisions.
3. Confirm brand/design direction.
4. Confirm V1 scope.
5. Produce Antigravity's implementation plan.
6. Review its proposed architecture against this document.
7. Only then begin implementation.

**The next artifact should be Antigravity's implementation plan, not application code.**
