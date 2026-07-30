"use client";

import React, { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/utils/helpers/cn";
import { getExternalLinkProps } from "@/utils/helpers/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold transition-all duration-300 rounded-brand-lg focus:outline-none focus:ring-2 focus:ring-royal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-brand-gradient text-white shadow-brand-md hover:shadow-brand-lg hover:scale-[1.01] active:scale-[0.99]",
      secondary:
        "bg-cyan text-navy shadow-brand hover:bg-cyan/90 hover:shadow-brand-md",
      outline:
        "border-2 border-royal/30 bg-white text-royal hover:border-royal hover:bg-royal hover:text-white hover:shadow-brand",
      ghost: "text-royal hover:bg-royal-light",
      whatsapp:
        "bg-whatsapp text-white shadow-brand-md hover:bg-[#20BD5A] hover:shadow-brand-lg",
      white:
        "border border-border/80 bg-white text-royal ring-1 ring-inset ring-black/[0.04] hover:border-royal/25 hover:ring-royal/[0.07] hover:bg-white/95 hover:scale-[1.01]",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-sm",
      lg: "px-9 py-4 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes} {...getExternalLinkProps(href)}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
