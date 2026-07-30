import { cn } from "@/utils/helpers/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-royal/15 bg-royal-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-royal",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden="true" />
      {children}
    </span>
  );
}
