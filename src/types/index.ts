import type React from "react";

export interface ServiceIconMap {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  alt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  serviceImage: string;
  icon: string;
  accentColor: string;
  features: string[];
  processSteps: ProcessStep[];
  beforeAfterImages: BeforeAfterImage[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface TrustBadge {
  id: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  businessHours: string[];
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  twitterHandle: string;
  locale: string;
  bingVerification?: string;
  googleVerification?: string;
  yandexVerification?: string;
  indexNowKey?: string;
}

