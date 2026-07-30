"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { getLatestBlogPosts } from "@/utils/constants/blogPosts";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { fadeInUp, staggerContainer, defaultTransition } from "@/utils/helpers/animations";

export default function BlogPreview() {
  const posts = getLatestBlogPosts(3);

  return (
    <AnimatedSection className="relative section-padding">
      <DecorativeBackground variant="mesh" />
      <div className="section-container relative z-10">
        <SectionHeading
          label="Our Blog"
          title="Latest Tips & Advice"
          subtitle="Expert guidance for maintaining your UK home and garden"
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group card-surface card-surface-hover flex h-full flex-col overflow-hidden rounded-brand-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="cyan">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy line-clamp-2 group-hover:text-royal">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-pill border border-royal/20 bg-royal-light px-6 py-3 text-sm font-semibold text-royal transition-all hover:bg-royal hover:text-white"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
