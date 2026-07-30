"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigationLinks } from "@/utils/constants/navigation";
import { companyInfo } from "@/utils/seo";
import { cn } from "@/utils/helpers/cn";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (latest < 50) {
      setIsVisible(true);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
      if (diff > 5) setIsVisible(false);
      if (diff < -5) setIsVisible(true);
    }
    lastScrollY.current = latest;
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={false}
      animate={isVisible ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-border/50 bg-white/90 shadow-brand backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <nav
        className="section-container flex items-center justify-between py-3 lg:py-4"
        aria-label="Main navigation"
      >
        <Logo priority />

        <div className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-pill px-4 py-2.5 text-sm font-medium transition-all",
                    isActive(link.href)
                      ? "bg-royal-light text-royal"
                      : "text-navy hover:bg-page hover:text-royal"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="card-surface absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-brand-lg py-2 ring-royal/[0.06]"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "mx-2 block rounded-brand px-4 py-3 text-sm transition-colors",
                            isActive(child.href)
                              ? "bg-royal-light font-medium text-royal"
                              : "text-text-secondary hover:bg-page hover:text-royal"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-pill px-4 py-2.5 text-sm font-medium transition-all",
                  isActive(link.href)
                    ? "bg-royal-light text-royal"
                    : "text-navy hover:bg-page hover:text-royal"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="ml-4 border-l border-border pl-4">
            <Button href={`tel:${companyInfo.phone}`} size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Book Now
            </Button>
          </div>
        </div>

        <button
          className="rounded-brand-lg p-2.5 text-navy transition-colors hover:bg-royal-light lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-6">
              {navigationLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex w-full items-center justify-between rounded-brand-lg px-4 py-3.5 text-base font-semibold text-navy"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-brand px-4 py-2.5 text-text-secondary hover:text-royal"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "rounded-brand-lg px-4 py-3.5 text-base font-semibold transition-colors",
                      isActive(link.href)
                        ? "bg-royal-light text-royal"
                        : "text-navy hover:bg-page"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button
                href={`tel:${companyInfo.phone}`}
                className="mt-4 w-full gap-2"
              >
                <Phone className="h-4 w-4" />
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
