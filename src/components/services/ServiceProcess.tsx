"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          label="Process"
          title="Our Process"
          subtitle="A proven step-by-step approach for consistent, quality results"
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal via-cyan to-royal hidden md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                transition={defaultTransition}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-heading text-xl font-bold text-white shadow-brand">
                  {step.step}
                </div>
                <div className="flex-1 rounded-brand-xl border border-border/60 bg-page p-6 ring-1 ring-inset ring-black/[0.04] transition-all hover:border-royal/25 hover:bg-white hover:ring-royal/[0.07]">
                  <h3 className="font-heading text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
