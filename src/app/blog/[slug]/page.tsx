import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/utils/constants/blogPosts";
import {
  generateBlogPostMetadata,
  generateArticleJsonLd,
} from "@/utils/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return generateBlogPostMetadata(slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
    return null;
  }

  const related = getRelatedBlogPosts(slug, 3);
  const jsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    date: post.date,
    author: post.author,
    image: post.image,
  });

  const paragraphs = post.content
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="relative flex min-h-[40vh] items-end bg-hero-gradient pt-20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-12 lg:px-8">
            <div className="mb-6 flex flex-col items-start gap-4">
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title, href: `/blog/${post.slug}` },
                ]}
                className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md text-white [&_span]:text-white/80 [&_a]:text-white/80 [&_a:hover]:text-cyan [&_svg]:text-white/60"
              />
              <Badge variant="cyan">{post.category}</Badge>
            </div>
            <h1 className="font-heading text-3xl font-extrabold text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span>By {post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <AnimatedSection className="section-padding">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none text-text-secondary">
              {paragraphs.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="mt-8 mb-4 font-heading text-2xl font-bold text-text-main"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={i} className="mt-4 font-semibold text-text-main">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </article>

      {related.length > 0 && (
        <AnimatedSection className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 font-heading text-2xl font-bold text-text-main">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((relPost) => (
                <Card key={relPost.slug} hover className="overflow-hidden p-0">
                  <div className="relative h-40">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-text-main line-clamp-2">
                      {relPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-royal"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}
