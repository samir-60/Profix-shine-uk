import React, { type HTMLAttributes } from "react";
import { cn } from "@/utils/helpers/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  padding?: boolean;
  children?: React.ReactNode;
}

export default function Card({
  className,
  hover = false,
  glow = false,
  padding = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-brand-lg card-surface bg-card",
        padding && "p-6",
        hover &&
          "card-surface-hover hover:-translate-y-0.5",
        glow && "ring-1 ring-royal/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
