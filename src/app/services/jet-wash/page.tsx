import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateJetWashMetadata } from "@/utils/seo";
import ServicePageContent from "@/components/services/ServicePageContent";

export const generateMetadata = generateJetWashMetadata;

export default function JetWashPage() {
  const service = getServiceBySlug("jet-wash");
  if (!service) {
    notFound();
    return null;
  }
  return <ServicePageContent service={service} />;
}
