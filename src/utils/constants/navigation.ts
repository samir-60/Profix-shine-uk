import type { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Painting & Decorating",
        href: "/services/painting-decorating",
      },
      {
        label: "Garden & Ground Cleaning",
        href: "/services/garden-ground-cleaning",
      },
      {
        label: "Window Cleaning",
        href: "/services/window-cleaning",
      },
      {
        label: "Jet Wash",
        href: "/services/jet-wash",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Painting & Decorating", href: "/services/painting-decorating" },
    { label: "Garden & Ground Cleaning", href: "/services/garden-ground-cleaning" },
    { label: "Window Cleaning", href: "/services/window-cleaning" },
    { label: "Jet Wash", href: "/services/jet-wash" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "SEO, AEO & GEO Hub", href: "/seo" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
