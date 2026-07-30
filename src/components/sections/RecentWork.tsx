"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, MoveHorizontal } from "lucide-react";
import { companyInfo } from "@/utils/seo";
import { recentWorkProjects } from "@/utils/constants/recentWork";
import { cn } from "@/utils/helpers/cn";
import BeforeAfterSlider from "@/components/services/BeforeAfterSlider";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export default function RecentWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = recentWorkProjects[activeIndex];

  return (
    <AnimatedSection className="relative overflow-hidden section-padding bg-white">
      <DecorativeBackground variant="dots" />
      <div className="section-container relative z-10">
        <SectionHeading
          label="Recent Work"
          title="See the Difference"
          subtitle={`Real before and after results from recent jobs in ${companyInfo.serviceArea.label}. Drag the slider to compare.`}
          gradient
        />

        <div className="flex flex-wrap justify-center gap-2">
          {recentWorkProjects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-brand-gradient text-white ring-2 ring-royal/20"
                    : "border border-border/80 bg-page text-text-secondary ring-1 ring-inset ring-black/[0.03] hover:border-royal/25 hover:text-navy hover:ring-royal/[0.07]"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {project.service}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 text-center lg:order-1 lg:col-span-4 lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-md lg:mx-0 lg:max-w-none"
              >
                <span className="inline-flex rounded-pill border border-royal/15 bg-royal-light px-3 py-1 text-xs font-bold uppercase tracking-widest text-royal">
                  {active.service}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-text-secondary lg:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 text-royal" />
                  {active.location}
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {active.alt}
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <Button
                    href={`/services/${active.serviceSlug}`}
                    variant="outline"
                    className="gap-2"
                  >
                    View Service
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="card-surface rounded-brand-xl p-2 sm:p-3">
              <ErrorBoundary>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <BeforeAfterSlider images={[active]} />
                  </motion.div>
                </AnimatePresence>
              </ErrorBoundary>
              <p className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-text-muted">
                <MoveHorizontal className="h-4 w-4 text-royal" />
                Drag to compare before &amp; after
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
