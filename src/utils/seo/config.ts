import type { SEOConfig } from "@/types";

export const defaultSEO: SEOConfig = {
  siteName: "ProFix & Shine",
  siteUrl: "https://www.profixandshine.co.uk",
  defaultTitle:
    "ProFix & Shine | Professional Cleaning & Painting Services Luton",
  defaultDescription:
    "Expert painting & decorating, garden cleaning, window cleaning & high pressure jet washing in Luton, Dunstable, Bedford, St Albans & Bedfordshire. Fully insured, 5-star rated, free instant quotes.",
  defaultKeywords:
    "cleaning services Luton, jet wash Luton, pressure washing Bedfordshire, window cleaning Luton, painting decorating Luton, garden cleaning Dunstable, commercial cleaning Luton, exterior house cleaning Luton, driveway jet washing Luton, local cleaners near me",
  twitterHandle: "@profixandshine",
  locale: "en_GB",
  bingVerification: "4C8F0E5B721A48B9918C5E6D2345EF89",
  googleVerification: "GOOGLE_VERIFICATION_KEY_PROFIX_SHINE",
  yandexVerification: "yandex-verification-id",
  indexNowKey: "4c8f0e5b721a48b9918c5e6d2345ef89",
};

export const companyInfo = {
  name: "ProFix & Shine",
  legalName: "ProFix & Shine Ltd",
  tagline: "Fixing with Precision, Cleaning to Perfection",
  phone: "+447562296592",
  phoneDisplay: "+44 7562 296592",
  whatsapp: "7562296592",
  whatsappUrl: "https://wa.me/447562296592",
  email: "info@profixandshine.co.uk",
  logoUrl: "https://www.profixandshine.co.uk/logo.png",
  ogImageUrl: "https://www.profixandshine.co.uk/logo-bg-white.png",
  address: {
    street: "Wimborne Road",
    city: "Luton",
    region: "Bedfordshire",
    postcode: "LU1 1PD",
    country: "GB",
    countryName: "United Kingdom",
  },
  fullAddress: "Wimborne Road, Luton, LU1 1PD, United Kingdom",
  mapQuery: "Wimborne+Road,+Luton,+LU1+1PD",
  googleMapsUrl: "https://maps.google.com/?q=Wimborne+Road,+Luton,+LU1+1PD",
  serviceArea: {
    label: "Luton & surrounding areas",
    coverage: "Luton, Dunstable, Bedford, St Albans, Harpenden, Hitchin, Stevenage & nearby towns",
    towns: [
      "Luton",
      "Dunstable",
      "Bedford",
      "St Albans",
      "Harpenden",
      "Hitchin",
      "Stevenage",
      "Leighton Buzzard",
      "Ampthill",
      "Flitwick",
    ],
    description: "homes and businesses in Luton and surrounding Bedfordshire areas",
    seoPhrase: "in Luton, Dunstable & Bedfordshire",
    marquee: "Local Area Coverage across Bedfordshire & Hertfordshire",
  },
  geo: {
    latitude: 51.8797,
    longitude: -0.4284,
  },
  priceRange: "££",
  rating: {
    ratingValue: "5.0",
    reviewCount: "124",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  companyNumber: "12345678",
  openingHoursSchema: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
  // AEO & GEO entity attributes
  aeoTargeting: {
    speakableSelectors: ["#speakable-summary", "[data-speakable]", "h1", ".faq-answer"],
    voiceQueryTriggers: [
      "best pressure washing Luton",
      "window cleaner near Luton",
      "painting and decorating Dunstable",
      "garden clearance Bedfordshire"
    ],
  },
  geoEntityGraph: {
    primaryTopic: "Property Cleaning & Maintenance Services",
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
  },
};

