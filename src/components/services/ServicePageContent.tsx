import type { Service } from "@/types";
import { getRelatedServices } from "@/utils/constants/services";
import {
  generateServiceJsonLd,
  generateFAQJsonLd,
  generateHowToJsonLd,
  generateSpeakableJsonLd,
} from "@/utils/seo";
import ServiceHero from "@/components/services/ServiceHero";
import BeforeAfterSlider from "@/components/services/BeforeAfterSlider";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import WaveDivider from "@/components/services/WaveDivider";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import RelatedServices from "@/components/services/RelatedServices";
import MobileServiceCTA from "@/components/services/MobileServiceCTA";
import CTABanner from "@/components/sections/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

interface ServicePageContentProps {
  service: Service;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  const related = getRelatedServices(service.slug);
  const serviceJsonLd = generateServiceJsonLd({
    title: service.title,
    description: service.fullDescription,
    slug: service.slug,
  });
  const faqJsonLd = generateFAQJsonLd(service.faqs);
  const howToJsonLd = generateHowToJsonLd({
    name: `${service.title} Process`,
    description: service.shortDescription,
    steps: service.processSteps,
  });
  const speakableJsonLd = generateSpeakableJsonLd([
    "h1",
    ".service-summary-callout",
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      <ServiceHero service={service} />

      <AnimatedSection className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="service-summary-callout mt-8 rounded-2xl border border-cyan/30 bg-cyan-light/40 p-6 text-left shadow-sm backdrop-blur-sm">
              <h2 className="mb-3 font-heading text-lg font-bold text-navy">
                Key Highlights & Service Overview
              </h2>
              <ul className="grid gap-2 text-sm text-text-main md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                  100% Satisfaction Guarantee across Bedfordshire & Hertfordshire
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                  Fully Insured & CRB/DBS Checked Local Specialists
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                  Eco-Friendly & Safe Professional Equipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                  Free Instant Quotes with No Obligation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-6 text-center font-heading text-3xl font-bold text-navy">
            Before & After
          </h2>
          <ErrorBoundary>
            <BeforeAfterSlider images={service.beforeAfterImages} />
          </ErrorBoundary>
        </div>
      </AnimatedSection>

      <ServiceFeatures features={service.features} />
      <WaveDivider />
      <ServiceProcess steps={service.processSteps} />
      <ServiceFAQ faqs={service.faqs} />
      <RelatedServices services={related} />
      <CTABanner />
      <MobileServiceCTA />
      <div className="h-20 md:hidden" />
    </>
  );
}
