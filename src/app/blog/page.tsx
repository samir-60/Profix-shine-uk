import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/utils/constants/blogPosts";
import { blogMetadata } from "@/utils/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata = blogMetadata;

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        label="Blog"
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        title="Our Blog & Cleaning Guides"
        subtitle="Expert tips and advice for maintaining your UK home, garden, and exterior surfaces."
        image="/blog/blog-hero.jpg"
        imageAlt="ProFix and Shine UK home maintenance and cleaning blog"
      />

      <AnimatedSection className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Articles"
            title="Latest Articles"
            subtitle="Practical advice from our cleaning experts"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {sortedPosts.map((post) => (
              <Card key={post.slug} hover className="overflow-hidden p-0">
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="cyan">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <time
                    dateTime={post.date}
                    className="mt-2 block text-xs text-text-secondary"
                  >
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-3 font-heading text-xl font-bold text-navy">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-text-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 font-medium text-royal hover:text-royal-hover"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
