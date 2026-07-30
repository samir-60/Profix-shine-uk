import type { Metadata } from "next";
import { getServiceBySlug } from "@/utils/constants/services";
import { generateServicePageMetadata } from "../metadata";

export function generateJetWashMetadata(): Metadata {
  const service = getServiceBySlug("jet-wash");
  if (!service) return {};
  return generateServicePageMetadata(service);
}
