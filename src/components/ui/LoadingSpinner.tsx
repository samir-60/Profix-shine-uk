import { cn } from "@/utils/helpers/cn";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      role="status"
      aria-label="Loading"
    >
      <div
        className={cn(
          "animate-spin rounded-full border-royal border-t-transparent",
          sizes[size]
        )}
      />
    </div>
  );
}
