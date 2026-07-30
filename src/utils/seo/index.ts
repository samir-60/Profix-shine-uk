export { defaultSEO, companyInfo } from "./config";
export type { PageSEOOptions } from "./types";
export {
  generatePageMetadata,
  generateServicePageMetadata,
} from "./metadata";
export { rootMetadata } from "./root-metadata";
export {
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
  generateFAQJsonLd,
  generateHowToJsonLd,
  generateSpeakableJsonLd,
  generateArticleJsonLd,
  generateGEOGraphJsonLd,
  generateAEOAnswerJsonLd,
} from "./json-ld";
export { submitIndexNow } from "./indexnow";

export { homeMetadata } from "./pages/home";
export { aboutMetadata } from "./pages/about";
export { contactMetadata } from "./pages/contact";
export { blogMetadata } from "./pages/blog";
export { generateBlogPostMetadata } from "./pages/blog-post";
export { servicesMetadata } from "./pages/services";
export { privacyPolicyMetadata } from "./pages/privacy-policy";
export { termsMetadata } from "./pages/terms";
export { generatePaintingDecoratingMetadata } from "./pages/painting-decorating";
export { generateGardenGroundCleaningMetadata } from "./pages/garden-ground-cleaning";
export { generateWindowCleaningMetadata } from "./pages/window-cleaning";
export { generateJetWashMetadata } from "./pages/jet-wash";
