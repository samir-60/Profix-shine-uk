"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { getIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

interface RelatedServicesProps {
  services: Service[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Related Services" subtitle="Explore our other professional services" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <Card hover className="h-full overflow-hidden p-0">
                  <div className="relative h-40">
                    <Image
                      src={service.serviceImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-brand text-white"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-royal hover:text-royal-hover"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
