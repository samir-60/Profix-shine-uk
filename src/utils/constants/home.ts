import { services } from "./services";
import { companyInfo } from "@/utils/seo";

export const heroHighlights = [
  { icon: "Star", text: "5★ Rated" },
  { icon: "Shield", text: "Fully Insured" },
  { icon: "BadgePoundSterling", text: "Free Quotes" },
];

export function getHeroMarqueeItems() {
  return [
    ...services.map((service) => service.title),
    "Fully Insured",
    "Free Quotes",
    companyInfo.serviceArea.marquee,
    companyInfo.serviceArea.label,
    ...services.map((service) => service.title),
  ];
}

export const HERO_SLIDE_DURATION_MS = 6000;
