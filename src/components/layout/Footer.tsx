import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/utils/constants/navigation";
import { socialLinks } from "@/utils/constants/social";
import { companyInfo } from "@/utils/seo";
import { WhatsAppIcon } from "@/utils/icons";
import { getExternalLinkProps } from "@/utils/helpers/link";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-white">
      <DecorativeBackground variant="mesh" />

      <div className="section-container relative z-10 py-12 lg:py-14">
        <div className="rounded-brand-xl border border-border/60 bg-brand-gradient-soft p-6 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Logo className="[&_img]:h-14 [&_img]:lg:h-16" />
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
                {companyInfo.tagline}. Trusted cleaning experts serving
                {` ${companyInfo.serviceArea.description}.`}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${companyInfo.phone}`} size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </Button>
                <Button href="/contact" variant="outline" size="sm">
                  Get Free Quote
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Phone", value: companyInfo.phoneDisplay, href: `tel:${companyInfo.phone}` },
                { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: MapPin, label: "Location", value: companyInfo.fullAddress },
                { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: companyInfo.whatsappUrl },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-surface rounded-brand-lg border-white/80 p-5"
                >
                  <item.icon className="h-5 w-5 text-royal" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-1 block text-sm font-semibold text-navy hover:text-royal"
                      {...getExternalLinkProps(item.href)}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-navy">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-navy">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-royal"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-navy">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-royal"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-navy">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, Icon, active }) =>
                active ? (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="card-surface card-surface-hover flex h-11 w-11 items-center justify-center rounded-brand-lg text-royal hover:bg-royal hover:text-white"
                    {...getExternalLinkProps(href)}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ) : (
                  <span
                    key={label}
                    aria-label={label}
                    aria-disabled="true"
                    className="card-surface flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-brand-lg text-royal opacity-50"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-text-muted">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Fully Insured · Luton Based
          </p>
        </div>
      </div>
    </footer>
  );
}
