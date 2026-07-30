import type { BeforeAfterImage } from "@/types";
import { services } from "@/utils/constants/services";

export interface RecentWorkProject extends BeforeAfterImage {
  id: string;
  title: string;
  service: string;
  serviceSlug: string;
  location: string;
}

const projectMeta: Record<string, { title: string; location: string }> = {
  "painting-decorating": {
    title: "House Painting & Decorating",
    location: "Luton, UK",
  },
  "garden-ground-cleaning": {
    title: "Garden Transformation",
    location: "Dunstable, UK",
  },
  "window-cleaning": {
    title: "Crystal Clear Windows",
    location: "St Albans, UK",
  },
  "jet-wash": {
    title: "Driveway Restoration",
    location: "Bedford, UK",
  },
};

export const recentWorkProjects: RecentWorkProject[] = services.map((service) => {
  const image = service.beforeAfterImages[0];
  const meta = projectMeta[service.slug];

  return {
    id: service.id,
    ...image,
    title: meta.title,
    service: service.title,
    serviceSlug: service.slug,
    location: meta.location,
  };
});
