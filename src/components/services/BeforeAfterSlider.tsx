"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { BeforeAfterImage } from "@/types";

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[];
}

function SingleSlider({ before, after, alt }: BeforeAfterImage) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidthRef = useRef(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);

  const clipPath = useTransform(x, (val) => {
    const width = containerWidthRef.current;
    const percentage = width > 0 ? (val / width) * 100 : 50;
    return `inset(0 ${100 - percentage}% 0 0)`;
  });

  const labelPercent = useTransform(x, (val) => {
    const width = containerWidthRef.current;
    const percentage = width > 0 ? Math.round((val / width) * 100) : 50;
    return `${percentage}%`;
  });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const syncWidth = (isInitial: boolean) => {
      const width = el.offsetWidth;
      if (width <= 0) return;

      const prev = containerWidthRef.current;
      containerWidthRef.current = width;
      setDragConstraints({ left: 0, right: width });

      if (isInitial || prev === 0) {
        x.set(width / 2);
      } else if (prev !== width) {
        x.set((x.get() / prev) * width);
      }
    };

    syncWidth(true);

    const observer = new ResizeObserver(() => syncWidth(false));
    observer.observe(el);
    return () => observer.disconnect();
  }, [x]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-brand-lg"
    >
      <Image
        src={after}
        alt={`${alt} - after`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
        draggable={false}
      />
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <Image
          src={before}
          alt={`${alt} - before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 bottom-0 z-10 w-1 cursor-ew-resize bg-white shadow-lg"
        style={{ left: 0, x }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0}
        dragMomentum={false}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-brand-lg">
          <div className="flex gap-0.5">
            <div className="h-4 w-0.5 rounded bg-navy" />
            <div className="h-4 w-0.5 rounded bg-navy" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute top-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
        style={{
          opacity: useTransform(x, (val) => {
            const width = containerWidthRef.current;
            return width > 0 && val / width > 0.75 ? 0 : 1;
          }),
        }}
      >
        Before
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-4 right-4 rounded-full bg-royal/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
        style={{
          opacity: useTransform(x, (val) => {
            const width = containerWidthRef.current;
            return width > 0 && val / width < 0.25 ? 0 : 1;
          }),
        }}
      >
        After
      </motion.div>
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-3 py-1 text-sm font-bold text-navy backdrop-blur-sm">
        <motion.span>{labelPercent}</motion.span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider({ images }: BeforeAfterSliderProps) {
  return (
    <div className="space-y-8">
      {images.map((img, i) => (
        <SingleSlider key={i} {...img} />
      ))}
    </div>
  );
}
