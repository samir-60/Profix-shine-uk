"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-4 md:left-4 md:right-auto md:max-w-md"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="card-surface rounded-brand-lg p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-navy">
                  We value your privacy
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  We use cookies to enhance your browsing experience and analyse
                  site traffic. By clicking Accept, you consent to our use of
                  cookies. Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-royal underline hover:text-royal-hover"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={declineCookies}
                aria-label="Close cookie banner"
                className="shrink-0 text-text-secondary hover:text-navy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 rounded-brand bg-royal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-royal-hover"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 rounded-brand border border-border px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-page"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
