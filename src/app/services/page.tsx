import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/utils/constants/services";
import { companyInfo, servicesMetadata } from "@/utils/seo";
import { getIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        title="Our Professional Services"
        subtitle={`Comprehensive cleaning solutions for ${companyInfo.serviceArea.description}.`}
      />

      <AnimatedSection className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="What We Offer"
            title="Services Tailored to You"
            subtitle="Four expert services designed to keep your property looking its absolute best"
          />

          <div className="space-y-8">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={service.id} hover className="overflow-hidden p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={service.serviceImage}
                        alt={`${service.title} professional service in Luton and Bedfordshire`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-brand-lg text-white"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-navy">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-text-secondary">
                        {service.fullDescription}
                      </p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-navy"
                          >
                            <CheckCircle className="h-4 w-4 shrink-0 text-royal" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                          href={`/services/${service.slug}`}
                          className="gap-2"
                        >
                          View {service.title}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                          href={`tel:${companyInfo.phone}`}
                          variant="outline"
                          className="gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
