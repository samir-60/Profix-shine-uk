"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, defaultTransition } from "@/utils/helpers/animations";
import { cn } from "@/utils/helpers/cn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
