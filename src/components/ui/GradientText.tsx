import { cn } from "@/utils/helpers/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-brand-gradient bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
}
