import React, { createElement } from "react";
import {
  Paintbrush,
  Trees,
  AppWindow,
  Droplets,
  Shield,
  Star,
  MapPin,
  BadgePoundSterling,
  ShieldCheck,
  Leaf,
  Clock,
  GraduationCap,
  ThumbsUp,
  CalendarCheck,
  Truck,
  CircleCheck,
  CircleHelp,
  Award,
  Heart,
  Users,
  Target,
} from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
  Paintbrush,
  Trees,
  AppWindow,
  Droplets,
  Shield,
  Star,
  MapPin,
  BadgePoundSterling,
  ShieldCheck,
  Leaf,
  Clock,
  GraduationCap,
  ThumbsUp,
  CalendarCheck,
  Truck,
  CircleCheck,
  CircleHelp,
  Award,
  Heart,
  Users,
  Target,
};

export function getIcon(name: string): IconType {
  return iconMap[name] ?? CircleHelp;
}

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const IconComponent = iconMap[name] ?? CircleHelp;
  return createElement(IconComponent, { className });
}
