import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/utils/seo";
import { businessHours } from "@/utils/constants/contact";
import { WhatsAppIcon } from "@/utils/icons";
import { getExternalLinkProps } from "@/utils/helpers/link";

const cardClass =
  "card-surface card-surface-hover flex items-start gap-4 rounded-brand-xl p-5";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-navy">
          Get in Touch
        </h2>
        <p className="mt-3 text-text-secondary">
          {companyInfo.tagline}. Contact us today for a free, no-obligation
          quote on any of our professional cleaning services.
        </p>
      </div>

      <ul className="space-y-5">
        <li>
          <Link href={`tel:${companyInfo.phone}`} className={cardClass}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-cyan/10">
              <Phone className="h-5 w-5 text-royal" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-secondary">Phone</p>
              <p className="font-semibold text-navy">{companyInfo.phoneDisplay}</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={companyInfo.whatsappUrl}
            className={cardClass}
            {...getExternalLinkProps(companyInfo.whatsappUrl)}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-whatsapp/10">
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-secondary">WhatsApp</p>
              <p className="font-semibold text-navy">+44 {companyInfo.whatsapp}</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`mailto:${companyInfo.email}`} className={cardClass}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-cyan/10">
              <Mail className="h-5 w-5 text-royal" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-secondary">Email</p>
              <p className="font-semibold text-navy">{companyInfo.email}</p>
            </div>
          </Link>
        </li>
        <li className={cardClass}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-cyan/10">
            <MapPin className="h-5 w-5 text-royal" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-secondary">Location</p>
            <p className="font-semibold text-navy">{companyInfo.fullAddress}</p>
          </div>
        </li>
        <li className={cardClass}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brand bg-cyan/10">
            <Clock className="h-5 w-5 text-royal" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-secondary">
              Business Hours
            </p>
            <ul className="mt-1 space-y-1">
              {businessHours.map((hours) => (
                <li key={hours} className="text-sm text-navy">
                  {hours}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
