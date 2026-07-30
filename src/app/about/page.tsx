import Image from "next/image";
import { aboutMetadata, companyInfo } from "@/utils/seo";
import { companyValues } from "@/utils/constants/about";
import { getIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
        title="About ProFix & Shine"
        subtitle={`${companyInfo.tagline} — serving ${companyInfo.serviceArea.description} since 2024.`}
        image="/about/about-us.jpg"
        imageAlt="ProFix and Shine professional team"
      />

      <AnimatedSection className="section-padding">
        <div className="section-container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                label="Our Story"
                title="Built on Trust & Quality"
                subtitle="From a small local business to a trusted service provider in Bedfordshire"
                centered={false}
              />
              <div className="space-y-4 text-text-secondary">
                <p>
                  ProFix & Shine was founded in 2024 with a simple mission: to
                  provide exceptional cleaning services that homeowners and
                  businesses in Luton and nearby towns could rely on. What started as a
                  one-man operation has grown into a dedicated team of skilled
                  professionals serving customers across {companyInfo.serviceArea.coverage}.
                </p>
                <p>
                  We believe that every property deserves to look its best.
                  Whether it is a fresh coat of paint, a crystal-clear window,
                  a revitalised garden, or a spotless driveway, we bring the same
                  level of care and professionalism to every job — no matter
                  how big or small.
                </p>
                <p>
                  Today, we are proud to have served over 100 satisfied clients,
                  maintaining a 100% satisfaction rate and a reputation built
                  on trust, quality, and reliability.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 card-surface card-surface-hover relative aspect-[4/3] overflow-hidden rounded-brand-xl">
              <Image
                src="/about/profix-and-shine.png"
                alt="ProFix and Shine team at work on a property in Luton"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <SectionHeading label="Values" title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => {
              const Icon = getIcon(value.icon);
              return (
                <Card key={value.id} glow className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-royal/10">
                    <Icon className="h-6 w-6 text-royal" />
                  </div>
                  <h3 className="font-heading font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding-sm">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-text-secondary">
            Get in touch today for a free, no-obligation quote.
          </p>
          <Button href="/contact" className="mt-6" size="lg">
            Contact Us Today
          </Button>
        </div>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
