"use client";

import { motion } from "framer-motion";

export default function WaveDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-page">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          fill="#156FEA"
          fillOpacity="0.1"
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          animate={{
            y: [0, 6, 0],
            scaleY: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="#24C7FF"
          fillOpacity="0.15"
          d="M0,50 C480,20 960,70 1440,45 L1440,80 L0,80 Z"
          animate={{
            y: [0, -6, 0],
            scaleY: [1, 0.95, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 10}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
