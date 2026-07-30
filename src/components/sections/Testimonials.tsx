"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/utils/constants/testimonials";
import { companyInfo } from "@/utils/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = testimonials[current];

  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          subtitle={`Trusted by happy customers in ${companyInfo.serviceArea.label}`}
        />

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-surface relative overflow-hidden rounded-brand-xl bg-gradient-to-br from-page to-white p-8 md:p-12">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-royal/5" />
                <Quote className="mb-6 h-10 w-10 text-royal/20" />
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium leading-relaxed text-navy md:text-2xl">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-heading text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">
                      {testimonial.location} · {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="card-surface card-surface-hover flex h-11 w-11 items-center justify-center rounded-brand-lg text-navy hover:text-royal"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-brand-gradient" : "w-2 bg-border hover:bg-royal/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="card-surface card-surface-hover flex h-11 w-11 items-center justify-center rounded-brand-lg text-navy hover:text-royal"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
