import { cn } from "@/utils/helpers/cn";
import SectionLabel from "./SectionLabel";
import GradientText from "./GradientText";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = true,
  gradient = false,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        centered && "text-center",
        className
      )}
    >
      {label && (
        <div className={cn("mb-3", centered && "flex justify-center")}>
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}

      {gradient ? (
        <GradientText
          as="h2"
          className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl"
        >
          {title}
        </GradientText>
      ) : (
        <h2
          className={cn(
            "text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-lg leading-relaxed",
            centered && "mx-auto",
            dark ? "text-white/75" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "mt-5 h-1 w-14 rounded-full bg-brand-gradient",
          centered && "mx-auto"
        )}
        aria-hidden="true"
      />
    </div>
  );
}
