import type { Metadata } from "next";
import type { Service } from "@/types";
import { defaultSEO } from "./config";
import type { PageSEOOptions } from "./types";

export function generatePageMetadata(options: PageSEOOptions): Metadata {
  const {
    title,
    description,
    keywords,
    path = "",
    image = `${defaultSEO.siteUrl}/logo-bg-white.png`,
    type = "website",
    publishedTime,
    author,
  } = options;

  const url = `${defaultSEO.siteUrl}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${defaultSEO.siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    title,
    description,
    keywords: keywords ?? defaultSEO.defaultKeywords,
    authors: author ? [{ name: author }] : [{ name: defaultSEO.siteName }],
    creator: defaultSEO.siteName,
    publisher: defaultSEO.siteName,
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
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaultSEO.siteName,
      locale: defaultSEO.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: defaultSEO.twitterHandle,
      creator: defaultSEO.twitterHandle,
      images: [imageUrl],
    },
  };
}

export function generateServicePageMetadata(service: Service): Metadata {
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}
