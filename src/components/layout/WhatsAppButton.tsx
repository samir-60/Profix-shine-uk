"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo } from "@/utils/seo";
import { WhatsAppIcon } from "@/utils/icons";
import { getExternalLinkProps } from "@/utils/helpers/link";

const MotionLink = motion.create(Link);

export default function WhatsAppButton() {
  return (
    <MotionLink
      href={companyInfo.whatsappUrl}
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-brand-lg"
      initial={false}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...getExternalLinkProps(companyInfo.whatsappUrl)}
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="card-surface absolute right-full mr-3 hidden whitespace-nowrap rounded-brand-lg px-4 py-2.5 text-sm font-medium text-navy opacity-0 transition-opacity group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </MotionLink>
  );
}
