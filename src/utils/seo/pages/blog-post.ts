import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/utils/constants/blogPosts";
import { generatePageMetadata } from "../metadata";

export function generateBlogPostMetadata(slug: string): Metadata {
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    author: post.author,
  });
}
