import { cn } from "@/utils/helpers/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-royal-light text-royal border border-royal/10",
    cyan: "bg-cyan-light text-navy border border-cyan/20",
    outline: "border border-royal/30 text-royal bg-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3.5 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
