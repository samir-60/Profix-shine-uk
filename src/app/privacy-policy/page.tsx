import Link from "next/link";
import { privacyPolicyMetadata, companyInfo } from "@/utils/seo";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = privacyPolicyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
        title="Privacy Policy"
        subtitle="Last updated: January 2025"
      />

      <AnimatedSection className="section-padding">
        <div className="prose prose-lg mx-auto max-w-3xl px-4 text-text-secondary lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy">1. Introduction</h2>
          <p>
            {companyInfo.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website{" "}
            <Link href="/" className="text-royal hover:underline">
              profixandshine.co.uk
            </Link>{" "}
            or use our services, in accordance with the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">2. Information We Collect</h2>
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and postcode</li>
            <li>Service preferences and enquiry details</li>
            <li>Website usage data via cookies and analytics</li>
            <li>Communication records when you contact us</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">3. How We Use Your Information</h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to enquiries and provide quotes</li>
            <li>Deliver our cleaning services</li>
            <li>Send service-related communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">4. Legal Basis for Processing</h2>
          <p>
            We process your data based on: your consent (for marketing communications),
            contractual necessity (to provide services), legitimate interests (to improve
            our business), and legal obligations.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with trusted
            service providers who assist in operating our business, subject to strict
            data protection agreements.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">6. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience and analyse
            site traffic. You can manage cookie preferences through our cookie consent
            banner or your browser settings.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">8. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes
            outlined in this policy, typically up to 3 years after your last interaction
            with us.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">9. Contact Us</h2>
          <p>
            For privacy-related enquiries, contact us at{" "}
            <Link href={`mailto:${companyInfo.email}`} className="text-royal hover:underline">
              {companyInfo.email}
            </Link>{" "}
            or call{" "}
            <Link href={`tel:${companyInfo.phone}`} className="text-royal hover:underline">
              {companyInfo.phoneDisplay}
            </Link>
            .
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
