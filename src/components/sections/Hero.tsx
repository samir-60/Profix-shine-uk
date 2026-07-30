"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { companyInfo } from "@/utils/seo";
import { services } from "@/utils/constants/services";
import {
  heroHighlights,
  getHeroMarqueeItems,
  HERO_SLIDE_DURATION_MS,
} from "@/utils/constants/home";
import { getIcon } from "@/utils/helpers/icons";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

const marqueeItems = getHeroMarqueeItems();

function CircularProgress({
  progress,
  size = 44,
}: {
  progress: number;
  size?: number;
}) {
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(21, 111, 234, 0.15)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#156FEA"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-[stroke-dashoffset] duration-100 ease-linear"
      />
    </svg>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeService = services[activeIndex];
  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + services.length) % services.length);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const tickMs = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + tickMs / HERO_SLIDE_DURATION_MS;
        return next >= 1 ? 1 : next;
      });
    }, tickMs);

    timerRef.current = setInterval(nextSlide, HERO_SLIDE_DURATION_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPaused, prefersReducedMotion, nextSlide, activeIndex]);

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-page"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setProgress(0);
      }}
      aria-roledescription="carousel"
      aria-label="Featured cleaning services"
    >
      <DecorativeBackground variant="mesh" />
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-16 h-96 w-96 animate-aurora rounded-full blur-[100px] transition-colors duration-700"
          style={{ backgroundColor: `${activeService.accentColor}18` }}
        />
        <div className="absolute -right-24 bottom-40 h-72 w-72 animate-aurora-delayed rounded-full bg-cyan/15 blur-[90px]" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pt-20 lg:pt-24">
        <div className="section-container w-full pb-4 lg:pb-6">
          <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Copy */}
            <div className="lg:col-span-5 xl:col-span-5">
              <SectionLabel>Luton&apos;s Trusted Cleaning Experts</SectionLabel>

              <h1 className="mt-6 font-heading text-[2.65rem] font-extrabold leading-[0.95] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
                Professional
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Cleaning
                </span>
                <br />
                Services
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                {companyInfo.tagline}. Premium results for {companyInfo.serviceArea.description}.
              </p>

              <div className="mt-8 flex flex-row items-stretch gap-2 sm:items-center sm:gap-3">
                <Button
                  href={`tel:${companyInfo.phone}`}
                  size="lg"
                  className="min-w-0 flex-1 justify-center whitespace-nowrap px-3 py-3.5 text-xs sm:flex-none sm:px-9 sm:py-4 sm:text-base [&_span]:gap-1.5 sm:[&_span]:gap-2"
                >
                  <Phone className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  Book Now
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="min-w-0 flex-1 justify-center whitespace-nowrap px-3 py-3.5 text-xs sm:flex-none sm:px-9 sm:py-4 sm:text-base [&_span]:gap-1.5 sm:[&_span]:gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block sm:h-5 sm:w-5" />
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {heroHighlights.map(({ icon, text }) => {
                  const Icon = getIcon(icon);
                  return (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-royal/10 bg-royal-light px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    <Icon className="h-3.5 w-3.5 text-royal" />
                    {text}
                  </span>
                  );
                })}
              </div>
            </div>

            {/* Visual carousel */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-[2rem] opacity-40 blur-2xl transition-colors duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${activeService.accentColor}40, #24C7FF40, #156FEA40)`,
                  }}
                />

                <div className="card-surface relative overflow-hidden rounded-[1.75rem] p-1.5">
                  <div className="relative overflow-hidden rounded-[1.4rem]">
                    <motion.div
                      className="flex"
                      animate={{ x: `-${activeIndex * 100}%` }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 32,
                      }}
                    >
                      {services.map((service, i) => (
                        <div
                          key={service.id}
                          className="relative min-w-full aspect-[16/11] sm:aspect-[16/10]"
                        >
                          <Image
                            src={service.heroImage}
                            alt={service.title}
                            fill
                            priority={i === 0}
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                            <div className="flex items-end justify-between gap-4">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
                                  {String(i + 1).padStart(2, "0")} /{" "}
                                  {String(services.length).padStart(2, "0")}
                                </p>
                                <p className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">
                                  {service.title}
                                </p>
                              </div>
                              <Link
                                href={`/services/${service.slug}`}
                                className="hidden shrink-0 items-center gap-2 rounded-pill bg-white px-4 py-2 text-sm font-semibold text-royal shadow-brand transition hover:bg-royal-light sm:inline-flex"
                              >
                                Details
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-navy transition hover:border-royal/30 hover:text-royal hover:ring-royal/[0.07]"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="card-surface relative flex h-11 w-11 items-center justify-center rounded-full">
                      <CircularProgress progress={progress} />
                      <span className="absolute font-heading text-xs font-bold text-navy">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-navy transition hover:border-royal/30 hover:text-royal hover:ring-royal/[0.07]"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 shrink-0 border-t border-border/60 bg-white/80 py-2.5 backdrop-blur-sm">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-10"
            animate={
              prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeItems.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.22em] text-text-muted"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-royal/50" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
