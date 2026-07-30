import { cn } from "@/utils/helpers/cn";

interface DecorativeBackgroundProps {
  variant?: "mesh" | "grid" | "dots" | "blobs";
  className?: string;
}

export default function DecorativeBackground({
  variant = "mesh",
  className,
}: DecorativeBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {variant === "mesh" && (
        <div className="absolute inset-0 bg-mesh-gradient" />
      )}
      {variant === "grid" && (
        <div className="absolute inset-0 grid-pattern opacity-60" />
      )}
      {variant === "dots" && (
        <div className="absolute inset-0 dot-pattern opacity-40" />
      )}
      {(variant === "blobs" || variant === "mesh") && (
        <>
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-royal/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
        </>
      )}
    </div>
  );
}
