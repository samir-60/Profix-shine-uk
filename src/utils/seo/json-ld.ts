import { defaultSEO, companyInfo } from "./config";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HouseCleaner"],
    "@id": `${defaultSEO.siteUrl}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    description: defaultSEO.defaultDescription,
    url: defaultSEO.siteUrl,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    logo: companyInfo.logoUrl,
    image: companyInfo.ogImageUrl,
    priceRange: companyInfo.priceRange,
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.region,
      postalCode: companyInfo.address.postcode,
      addressCountry: companyInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    areaServed: companyInfo.serviceArea.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
    openingHoursSpecification: companyInfo.openingHours.map((schedule) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: schedule.days,
      opens: schedule.opens,
      closes: schedule.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: companyInfo.rating.ratingValue,
      reviewCount: companyInfo.rating.reviewCount,
      bestRating: companyInfo.rating.bestRating,
      worstRating: companyInfo.rating.worstRating,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning & Restoration Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Painting & Decorating",
          description: "Interior and exterior painting, wallpapering and surface prep in Luton",
        },
        {
          "@type": "OfferCatalog",
          name: "Garden & Ground Cleaning",
          description: "Garden clearance, hedge trimming and patio tidy-ups across Bedfordshire",
        },
        {
          "@type": "OfferCatalog",
          name: "Crystal Clear Window Cleaning",
          description: "Pure water streak-free window cleaning for residential and commercial",
        },
        {
          "@type": "OfferCatalog",
          name: "High Pressure Jet Wash",
          description: "High pressure jet washing for driveways, patios, block paving and walls",
        },
      ],
    },
    knowsAbout: [
      "High Pressure Jet Washing",
      "Driveway and Patio Cleaning",
      "Pure Water Window Cleaning",
      "Commercial Window Cleaning",
      "Exterior & Interior Painting",
      "Residential Decorating",
      "Garden Clearance & Groundskeeping",
      "Hedge Trimming & Lawn Maintenance",
      "Property Maintenance Bedfordshire & Hertfordshire",
    ],
    sameAs: [companyInfo.whatsappUrl],
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${defaultSEO.siteUrl}/#website`,
    url: defaultSEO.siteUrl,
    name: defaultSEO.siteName,
    description: defaultSEO.defaultDescription,
    publisher: {
      "@id": `${defaultSEO.siteUrl}/#organization`,
    },
    inLanguage: "en-GB",
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${defaultSEO.siteUrl}${item.url}`,
    })),
  };
}

export function generateServiceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${defaultSEO.siteUrl}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${defaultSEO.siteUrl}/#organization`,
      name: companyInfo.name,
      telephone: companyInfo.phone,
      url: defaultSEO.siteUrl,
    },
    areaServed: companyInfo.serviceArea.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
    url: `${defaultSEO.siteUrl}/services/${service.slug}`,
    ...(service.image && { image: `${defaultSEO.siteUrl}${service.image}` }),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${defaultSEO.siteUrl}/services/${service.slug}`,
    },
  };
}

export function generateFAQJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToJsonLd(howTo: {
  name: string;
  description: string;
  steps: { step: number; title: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };
}

export function generateSpeakableJsonLd(selectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: selectors,
  };
}

export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${defaultSEO.siteUrl}/blog/${article.slug}/#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${defaultSEO.siteUrl}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${defaultSEO.siteUrl}/#organization`,
      name: companyInfo.name,
      logo: {
        "@type": "ImageObject",
        url: companyInfo.logoUrl,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    image: article.image.startsWith("http")
      ? article.image
      : `${defaultSEO.siteUrl}${article.image}`,
    url: `${defaultSEO.siteUrl}/blog/${article.slug}`,
    inLanguage: "en-GB",
  };
}

export function generateGEOGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${defaultSEO.siteUrl}/#organization`,
        name: companyInfo.name,
        legalName: companyInfo.legalName,
        url: defaultSEO.siteUrl,
        logo: companyInfo.logoUrl,
        telephone: companyInfo.phone,
        email: companyInfo.email,
        sameAs: [companyInfo.whatsappUrl],
        description: defaultSEO.defaultDescription,
        knowsAbout: companyInfo.geoEntityGraph.knowsAbout,
        address: {
          "@type": "PostalAddress",
          streetAddress: companyInfo.address.street,
          addressLocality: companyInfo.address.city,
          addressRegion: companyInfo.address.region,
          postalCode: companyInfo.address.postcode,
          addressCountry: companyInfo.address.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${defaultSEO.siteUrl}/#website`,
        url: defaultSEO.siteUrl,
        name: defaultSEO.siteName,
        description: defaultSEO.defaultDescription,
        publisher: {
          "@id": `${defaultSEO.siteUrl}/#organization`,
        },
        inLanguage: "en-GB",
      },
    ],
  };
}

export function generateAEOAnswerJsonLd(question: string, answer: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Question",
    name: question,
    text: question,
    answerCount: 1,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
      url: url.startsWith("http") ? url : `${defaultSEO.siteUrl}${url}`,
      author: {
        "@type": "Organization",
        name: companyInfo.name,
      },
    },
  };
}


