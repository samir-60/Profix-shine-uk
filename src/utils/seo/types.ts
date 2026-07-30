export interface PageSEOOptions {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}
