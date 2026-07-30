import type { Metadata } from "next";
import { defaultSEO } from "./config";

export const rootMetadata: Metadata = {
  metadataBase: new URL(defaultSEO.siteUrl),
  title: {
    default: defaultSEO.defaultTitle,
    template: `%s | ${defaultSEO.siteName}`,
  },
  description: defaultSEO.defaultDescription,
  keywords: defaultSEO.defaultKeywords,
  authors: [{ name: defaultSEO.siteName }],
  creator: defaultSEO.siteName,
  publisher: defaultSEO.siteName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    google: defaultSEO.googleVerification,
    yandex: defaultSEO.yandexVerification,
    other: {
      "msvalidate.01": defaultSEO.bingVerification || "4C8F0E5B721A48B9918C5E6D2345EF89",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: defaultSEO.locale,
    url: defaultSEO.siteUrl,
    siteName: defaultSEO.siteName,
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    images: [
      {
        url: "/logo-bg-white.png",
        width: 1200,
        height: 630,
        alt: `${defaultSEO.siteName} - Professional Cleaning Services Luton`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: defaultSEO.twitterHandle,
    creator: defaultSEO.twitterHandle,
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    images: ["/logo-bg-white.png"],
  },
  alternates: { canonical: defaultSEO.siteUrl },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#0A2A6B",
    "geo.region": "GB-BDF",
    "geo.placename": "Luton",
    "geo.position": "51.8797;-0.4284",
    "ICBM": "51.8797, -0.4284",
    "indexnow-key": defaultSEO.indexNowKey || "4c8f0e5b721a48b9918c5e6d2345ef89",
    "msvalidate.01": defaultSEO.bingVerification || "4C8F0E5B721A48B9918C5E6D2345EF89",
    "aeo-target": "voice-assistant-ready, google-featured-snippets",
    "geo-engine": "llms-txt-indexed, perplexity-ready, searchgpt-ready",
  },
};
