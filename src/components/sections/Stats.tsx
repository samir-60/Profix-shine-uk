"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { stats } from "@/utils/constants/stats";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-brand-gradient" />
      <DecorativeBackground variant="grid" className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/20 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              transition={defaultTransition}
              className="group text-center"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-cyan/60 transition-all group-hover:w-16" />
              <div className="font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                {stat.prefix}
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/70 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
