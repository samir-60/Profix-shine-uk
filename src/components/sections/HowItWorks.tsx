"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/utils/constants/faqs";
import { DynamicIcon } from "@/utils/helpers/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

const ICON_SIZE = 80;

function HorizontalConnector({ delay }: { delay: number }) {
  return (
    <div
      className="hidden min-w-[40px] flex-1 items-center self-start px-1 pt-10 md:flex"
      aria-hidden="true"
    >
      <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-royal to-cyan"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function VerticalConnector({ delay }: { delay: number }) {
  return (
    <div className="flex justify-center py-1 md:hidden" aria-hidden="true">
      <div className="relative h-10 w-0.5 overflow-hidden rounded-full bg-border">
        <motion.div
          className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-royal to-cyan"
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StepNode({
  step,
  index,
}: {
  step: (typeof howItWorksSteps)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.12 }}
      className="relative z-10 flex flex-col items-center text-center md:px-2"
    >
      <div
        className="relative z-10 mb-6 inline-flex md:mb-8"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      >
        <div className="relative flex h-full w-full items-center justify-center rounded-brand-xl bg-brand-gradient text-white shadow-brand-lg ring-4 ring-page">
          <DynamicIcon name={step.icon} className="h-8 w-8" />
        </div>
        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan font-heading text-sm font-extrabold text-navy shadow-brand">
          {step.step}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-navy">{step.title}</h3>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary md:text-base">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <AnimatedSection className="relative section-padding overflow-hidden">
      <DecorativeBackground variant="dots" />
      <div className="section-container relative z-10">
        <SectionHeading
          label="Simple Process"
          title="How It Works"
          subtitle="Getting started is easy — three simple steps to a cleaner, better property"
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop: step — line — step — line — step */}
          <div className="hidden md:flex md:items-start">
            {howItWorksSteps.map((step, index) => (
              <div key={step.id} className="contents">
                <div className="flex-1">
                  <StepNode step={step} index={index} />
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <HorizontalConnector delay={0.2 + index * 0.25} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: stacked with vertical connectors */}
          <div className="md:hidden">
            {howItWorksSteps.map((step, index) => (
              <div key={step.id}>
                <StepNode step={step} index={index} />
                {index < howItWorksSteps.length - 1 && (
                  <VerticalConnector delay={0.2 + index * 0.25} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
