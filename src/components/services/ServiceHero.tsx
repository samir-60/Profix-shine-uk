"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DynamicIcon } from "@/utils/helpers/icons";
import type { Service } from "@/types";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-hero-gradient pt-20">
      <Image
        src={service.heroImage}
        alt={`${service.title} professional service`}
        fill
        priority
        className="object-cover opacity-25 mix-blend-overlay"
        sizes="100vw"
      />
      <DecorativeBackground variant="blobs" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy/70 to-royal/40" />

      <div className="section-container relative z-10 w-full pb-12 pt-6 md:pb-14">
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
            className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md w-fit text-white [&_span]:text-white/80 [&_a]:text-white/80 [&_a:hover]:text-cyan [&_svg]:text-white/60"
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5 border-white/20 bg-white/10 text-cyan backdrop-blur-sm [&_span]:bg-cyan">
              Professional Service
            </SectionLabel>
            <div className="flex items-start gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-brand-xl text-white shadow-brand-lg"
                style={{ backgroundColor: service.accentColor }}
              >
                <DynamicIcon name={service.icon} className="h-8 w-8" />
              </div>
              <div>
                <h1 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
