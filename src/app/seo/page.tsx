import type { Metadata } from "next";
import { generatePageMetadata, generateLocalBusinessJsonLd, generateGEOGraphJsonLd } from "@/utils/seo";
import PageHero from "@/components/ui/PageHero";
import SeoAeoGeoShowcase from "@/components/seo/SeoAeoGeoShowcase";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "SEO, Bing, AEO & GEO Optimization Hub | ProFix & Shine",
  description:
    "Explore ProFix & Shine's search engine optimization, Bing Webmaster tools integration, IndexNow instant indexing, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) architecture.",
  keywords:
    "ProFix & Shine SEO, Bing Webmaster Luton, IndexNow Bing, Voice Search AEO, Generative Engine Optimization GEO, llms.txt Luton cleaning",
  path: "/seo",
});

export default function SeoPage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const geoGraphJsonLd = generateGEOGraphJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoGraphJsonLd) }}
      />

      <PageHero
        title="SEO, Bing, AEO & GEO Engine"
        subtitle="Full transparency into our Search Engine Optimization, Bing Webmaster, Voice Answer (AEO), and Generative AI (GEO) indexing standards."
        label="Search & AI Optimization Hub"
      />

      <div className="section-container py-8">
        <SeoAeoGeoShowcase />
      </div>

      <CTABanner />
    </>
  );
}
