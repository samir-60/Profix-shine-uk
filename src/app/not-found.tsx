import Link from "next/link";
import { Home, ArrowRight, Phone, Compass } from "lucide-react";
import { companyInfo } from "@/utils/seo";
import { notFoundQuickLinks } from "@/utils/constants/notFound";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-page px-4 py-24 pt-28">
      <DecorativeBackground variant="mesh" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 animate-aurora rounded-full bg-royal/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 animate-aurora-delayed rounded-full bg-cyan/15 blur-[90px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="mx-auto max-w-2xl">
          <div className="card-surface rounded-brand-xl p-8 text-center md:p-12">
            <SectionLabel>Page Not Found</SectionLabel>

            <div className="relative mx-auto mt-8 w-fit">
              <div className="flex h-16 w-16 items-center justify-center rounded-brand-xl bg-brand-gradient text-white ring-4 ring-page">
                <Compass className="h-8 w-8" />
              </div>
            </div>

            <p
              className="mt-8 font-heading text-[5.5rem] font-extrabold leading-none tracking-tighter sm:text-[7rem]"
              aria-hidden="true"
            >
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                4
              </span>
              <span className="text-navy/[0.08]">0</span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                4
              </span>
            </p>

            <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              This page doesn&apos;t exist
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-text-secondary">
              The link may be broken or the page may have moved. Head back home
              or explore our services below.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/" size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-10 border-t border-border/60 pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
                Popular pages
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {notFoundQuickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-border/80 bg-page px-4 py-2 text-sm font-medium text-navy ring-1 ring-inset ring-black/[0.03] transition hover:border-royal/25 hover:text-royal hover:ring-royal/[0.07]"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={`tel:${companyInfo.phone}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:text-royal-hover"
            >
              <Phone className="h-4 w-4" />
              Or call us at {companyInfo.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
