import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/utils/seo";
import { cn } from "@/utils/helpers/cn";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}>
      <Image
        src="/logo.png"
        alt={companyInfo.name}
        width={240}
        height={80}
        priority={priority}
        className="h-11 w-auto object-contain lg:h-14"
      />
    </Link>
  );
}
