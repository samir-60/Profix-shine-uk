import Link from "next/link";
import { termsMetadata, companyInfo } from "@/utils/seo";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = termsMetadata;

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
        title="Terms of Service"
        subtitle="Last updated: January 2025"
      />

      <AnimatedSection className="section-padding">
        <div className="prose prose-lg mx-auto max-w-3xl px-4 text-text-secondary lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy">1. Agreement to Terms</h2>
          <p>
            By accessing or using the {companyInfo.name} website and services, you agree
            to be bound by these Terms of Service. If you do not agree, please do not
            use our services.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">2. Services</h2>
          <p>
            {companyInfo.name} provides professional cleaning services
            including painting & decorating, garden & ground cleaning, window cleaning,
            and jet washing in {companyInfo.serviceArea.label}. Service availability may vary
            by location within our local coverage area.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">3. Quotes and Booking</h2>
          <p>
            All quotes provided are estimates based on the information supplied and
            may be adjusted following an on-site assessment. Bookings are confirmed
            upon mutual agreement of scope and pricing. We reserve the right to
            decline service requests at our discretion.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">4. Payment Terms</h2>
          <p>
            Payment is due upon completion of work unless otherwise agreed in writing.
            We accept bank transfer, card payments, and cash. Late payments may incur
            interest charges as permitted by UK law.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">5. Cancellations</h2>
          <p>
            Cancellations made more than 24 hours before the scheduled appointment
            incur no charge. Cancellations within 24 hours may be subject to a
            cancellation fee of up to 50% of the quoted price.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">6. Satisfaction Guarantee</h2>
          <p>
            We stand behind our work with a satisfaction guarantee. If you are not
            satisfied with any aspect of our service, contact us within 48 hours
            and we will rectify the issue at no additional cost.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">7. Liability</h2>
          <p>
            {companyInfo.name} maintains full public liability insurance. Our liability
            is limited to the value of the service provided. We are not liable for
            pre-existing damage or issues not caused by our work.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">8. Website Use</h2>
          <p>
            You may not use our website for any unlawful purpose. Content on this
            website is protected by copyright and may not be reproduced without
            written permission.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">9. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes
            shall be subject to the exclusive jurisdiction of the courts of England
            and Wales.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">10. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <Link href={`mailto:${companyInfo.email}`} className="text-royal hover:underline">
              {companyInfo.email}
            </Link>{" "}
            or visit our{" "}
            <Link href="/contact" className="text-royal hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
