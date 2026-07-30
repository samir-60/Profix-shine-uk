import type { Metadata } from "next";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateServicePageMetadata } from "../metadata";

export function generatePaintingDecoratingMetadata(): Metadata {
  const service = getServiceBySlug("painting-decorating");
  if (!service) return {};
  return generateServicePageMetadata(service);
}
