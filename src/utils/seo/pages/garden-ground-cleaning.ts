import type { Metadata } from "next";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateServicePageMetadata } from "../metadata";

export function generateGardenGroundCleaningMetadata(): Metadata {
  const service = getServiceBySlug("garden-ground-cleaning");
  if (!service) return {};
  return generateServicePageMetadata(service);
}
