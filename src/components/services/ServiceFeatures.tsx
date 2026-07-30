"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

interface ServiceFeaturesProps {
  features: string[];
  title?: string;
}

export default function ServiceFeatures({
  features,
  title = "What's Included",
}: ServiceFeaturesProps) {
  return (
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <SectionHeading label="Included" title={title} subtitle="Everything you need for outstanding results" />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {features.map((feature, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              transition={defaultTransition}
              className="card-surface card-surface-hover flex items-start gap-3 rounded-brand-xl p-5"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
              <span className="text-navy">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
