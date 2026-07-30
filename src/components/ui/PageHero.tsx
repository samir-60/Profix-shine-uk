import Image from "next/image";
import { cn } from "@/utils/helpers/cn";
import DecorativeBackground from "./DecorativeBackground";
import SectionLabel from "./SectionLabel";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle: string;
  label?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  title,
  subtitle,
  label,
  image,
  imageAlt,
  className,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-hero-gradient pt-24 pb-12 md:pt-28 md:pb-14",
        className
      )}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          className="object-cover opacity-15 mix-blend-overlay"
          sizes="100vw"
        />
      )}
      <DecorativeBackground variant="blobs" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/30" />

      <div className="section-container relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumbs
              items={breadcrumbs}
              className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md w-fit text-white [&_span]:text-white/80 [&_a]:text-white/80 [&_a:hover]:text-cyan [&_svg]:text-white/60"
            />
          </div>
        )}
        {label && !breadcrumbs && (
          <div className="mb-4">
            <SectionLabel className="border-white/20 bg-white/10 text-cyan backdrop-blur-sm [&_span]:bg-cyan">
              {label}
            </SectionLabel>
          </div>
        )}
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
