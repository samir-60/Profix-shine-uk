import { companyInfo } from "@/utils/seo";

export default function MapPlaceholder() {
  return (
    <div className="overflow-hidden rounded-brand-lg bg-navy-dark shadow-brand-lg">
      <div className="relative aspect-[16/9] w-full">
        <iframe
          title="ProFix & Shine location map"
          src={`https://maps.google.com/maps?q=${companyInfo.mapQuery}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-medium text-white">{companyInfo.fullAddress}</p>
        <p className="mt-1 text-sm text-white/70">
          Serving customers in {companyInfo.serviceArea.coverage}
        </p>
      </div>
    </div>
  );
}
