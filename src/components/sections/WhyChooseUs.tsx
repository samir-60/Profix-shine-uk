"use client";

import { motion } from "framer-motion";
import { whyChooseUsItems } from "@/utils/constants/faqs";
import { getIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          label="Why Us"
          title="Why Choose ProFix & Shine"
          subtitle="We deliver exceptional results with professionalism, reliability, and care on every single job"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUsItems.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-brand-xl border border-border/60 bg-page p-7 ring-1 ring-inset ring-black/[0.04] transition-all duration-500 hover:border-royal/25 hover:bg-white hover:ring-royal/[0.07]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-royal/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-brand-lg bg-brand-gradient text-white shadow-brand transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
