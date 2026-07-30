export function isExternalHref(href: string): boolean {
  return /^(https?:\/\/|\/\/)/.test(href);
}

export function getExternalLinkProps(href: string) {
  if (isExternalHref(href)) {
    return { target: "_blank" as const, rel: "noopener noreferrer" };
  }

  return {};
}
