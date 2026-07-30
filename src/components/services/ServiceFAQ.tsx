"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/utils/helpers/cn";

interface ServiceFAQProps {
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="section-padding">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about this service"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-surface overflow-hidden rounded-brand-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-heading font-semibold text-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-royal transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-border/60 px-5 pb-5 pt-3">
                        <p className="text-text-secondary">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
