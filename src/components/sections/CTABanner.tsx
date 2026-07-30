"use client";

import { Phone, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/utils/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

export default function CTABanner() {
  return (
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-brand-xl bg-brand-gradient px-6 py-12 text-center md:px-12 md:py-14">
          <DecorativeBackground variant="grid" className="opacity-20" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-brand-xl bg-white/15 backdrop-blur-sm">
              <CheckCircle2 className="h-7 w-7 text-cyan" />
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Ready for a Spotless Property?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              Get your free, no-obligation quote today. Our expert team is ready
              to transform your home or business in {companyInfo.serviceArea.label}.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4">
              <Button
                href={`tel:${companyInfo.phone}`}
                variant="white"
                size="lg"
                className="min-w-0 flex-1 justify-center gap-2 px-4 text-sm sm:flex-none sm:px-9 sm:text-base"
              >
                <Phone className="h-5 w-5" />
                Book Now
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="min-w-0 flex-1 justify-center border-white/40 bg-white/10 px-4 text-sm text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-royal sm:flex-none sm:px-9 sm:text-base"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
