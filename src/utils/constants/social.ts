import type { ComponentType } from "react";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  type IconProps,
} from "@/utils/icons";
import { companyInfo } from "@/utils/seo";

export interface SocialLink {
  href: string;
  label: string;
  Icon: ComponentType<IconProps>;
  active: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/share/1Gcn8VsSRA/?mibextid=wwXIfr",
    label: "Facebook",
    Icon: FacebookIcon,
    active: true,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: InstagramIcon,
    active: false,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: TwitterIcon,
    active: false,
  },
  {
    href: companyInfo.whatsappUrl,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    active: true,
  },
];
