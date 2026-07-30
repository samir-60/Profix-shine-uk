import { contactMetadata, generateLocalBusinessJsonLd } from "@/utils/seo";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapPlaceholder from "@/components/contact/MapPlaceholder";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = contactMetadata;

export default function ContactPage() {
  const jsonLd = generateLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="Contact"
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
        title="Get in Touch"
        subtitle="Get your free, no-obligation quote today. We respond within 24 hours."
      />

      <AnimatedSection className="section-padding">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding-sm bg-white">
        <div className="section-container">
          <MapPlaceholder />
        </div>
      </AnimatedSection>
    </>
  );
}
