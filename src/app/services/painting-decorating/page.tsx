import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/utils/constants/services";
import { generatePaintingDecoratingMetadata } from "@/utils/seo";
import ServicePageContent from "@/components/services/ServicePageContent";

export const generateMetadata = generatePaintingDecoratingMetadata;

export default function PaintingDecoratingPage() {
  const service = getServiceBySlug("painting-decorating");
  if (!service) {
    notFound();
    return null;
  }
  return <ServicePageContent service={service} />;
}
