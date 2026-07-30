import type { Metadata } from "next";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateServicePageMetadata } from "../metadata";

export function generateWindowCleaningMetadata(): Metadata {
  const service = getServiceBySlug("window-cleaning");
  if (!service) return {};
  return generateServicePageMetadata(service);
}
