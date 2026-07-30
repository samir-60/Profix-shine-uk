"use client";

import { motion } from "framer-motion";
import { trustBadges } from "@/utils/constants/trustBadges";
import { getIcon } from "@/utils/helpers/icons";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

export default function TrustBadges() {
  return (
    <section className="relative -mt-px bg-page pb-2 pt-0">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {trustBadges.map((badge) => {
            const Icon = getIcon(badge.icon);
            return (
              <motion.div
                key={badge.id}
                variants={fadeInUp}
                transition={defaultTransition}
                className="group card-surface card-surface-hover flex items-center gap-4 rounded-brand-lg p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-brand-lg bg-brand-gradient text-white shadow-brand transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-navy md:text-base">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
