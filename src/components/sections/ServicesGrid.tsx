"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/utils/constants/services";
import { companyInfo } from "@/utils/seo";
import { getIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

export default function ServicesGrid() {
  return (
    <AnimatedSection className="relative section-padding">
      <DecorativeBackground variant="mesh" />
      <div className="section-container relative z-10">
        <SectionHeading
          label="What We Do"
          title="Our Expert Services"
          subtitle={`Professional cleaning solutions tailored to your needs in ${companyInfo.serviceArea.label}`}
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-surface card-surface-hover relative flex h-full flex-col overflow-hidden rounded-brand-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.serviceImage}
                      alt={`${service.title} service preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div
                      className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-brand-lg text-white shadow-brand"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all group-hover:bg-royal group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-heading text-xl font-bold text-navy md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary md:text-base">
                      {service.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
