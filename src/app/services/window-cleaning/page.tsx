import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateWindowCleaningMetadata } from "@/utils/seo";
import ServicePageContent from "@/components/services/ServicePageContent";

export const generateMetadata = generateWindowCleaningMetadata;

export default function WindowCleaningPage() {
  const service = getServiceBySlug("window-cleaning");
  if (!service) {
    notFound();
    return null;
  }
  return <ServicePageContent service={service} />;
}
