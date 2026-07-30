import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateGardenGroundCleaningMetadata } from "@/utils/seo";
import ServicePageContent from "@/components/services/ServicePageContent";

export const generateMetadata = generateGardenGroundCleaningMetadata;

export default function GardenGroundCleaningPage() {
  const service = getServiceBySlug("garden-ground-cleaning");
  if (!service) {
    notFound();
    return null;
  }
  return <ServicePageContent service={service} />;
}
