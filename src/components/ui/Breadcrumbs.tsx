import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbJsonLd } from "@/utils/seo";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showJsonLd?: boolean;
}

export default function Breadcrumbs({
  items,
  className = "",
  showJsonLd = true,
}: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLdItems = allItems.map((item) => ({
    name: item.label,
    url: item.href,
  }));

  const jsonLd = generateBreadcrumbJsonLd(jsonLdItems);

  return (
    <>
      {showJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs md:text-sm text-text-secondary ${className}`}
      >
        <ol
          className="flex flex-wrap items-center gap-1.5 md:gap-2"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight
                    className="mx-1 h-3.5 w-3.5 text-text-muted shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-navy truncate max-w-[200px] sm:max-w-none"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-royal hover:underline"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5 text-royal" aria-hidden="true" />}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
