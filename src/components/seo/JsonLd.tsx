import React from 'react';

export function JsonLd({ schema }: { schema: Record<string, any> | Record<string, any>[] }) {
  const schemaData = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export function generateOrganizationSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Sygmia Innovative',
      url: 'https://sygmiainnovative.co.in',
      logo: 'https://sygmiainnovative.co.in/icon.svg',
      image: 'https://sygmiainnovative.co.in/images/hero-devices.png',
      description: 'Sygmia Innovative helps small businesses and organizations build, improve, and automate high-performance websites, custom web apps, and digital workflows.',
      telephone: '+919113067486',
      email: 'info@sygmiainnovative.co.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dibrugarh',
        addressRegion: 'Assam',
        addressCountry: 'IN'
      },
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      sameAs: [
        'https://www.facebook.com/sygmiainnovative',
        'https://www.linkedin.com/company/sygmiainnovative',
        'https://www.instagram.com/sygmiainnovative'
      ],
      priceRange: '₹₹'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Sygmia Innovative',
      url: 'https://sygmiainnovative.co.in',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://sygmiainnovative.co.in/work?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ];
}


export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: 'Sygmia Innovative',
      url: 'https://sygmiainnovative.co.in'
    },
    description,
    url
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
