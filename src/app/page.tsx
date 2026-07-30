import {
  homeMetadata,
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
  generateGEOGraphJsonLd,
} from "@/utils/seo";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RecentWork from "@/components/sections/RecentWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import SeoAeoGeoShowcase from "@/components/seo/SeoAeoGeoShowcase";

export const metadata = homeMetadata;

export default function HomePage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();
  const geoGraphJsonLd = generateGEOGraphJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoGraphJsonLd) }}
      />
      <Hero />
      <Stats />
      <ErrorBoundary>
        <ServicesGrid />
      </ErrorBoundary>
      <ErrorBoundary>
        <RecentWork />
      </ErrorBoundary>
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <div className="section-container">
        <SeoAeoGeoShowcase />
      </div>
      <BlogPreview />
      <CTABanner />
    </>
  );
}
