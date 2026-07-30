/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.profixandshine.co.uk",
  outDir: "out",
  generateRobotsTxt: true,
  trailingSlash: true,
  exclude: ["/icon.png", "/icon.ico", "/apple-icon.png", "/_next/*", "/404", "/500"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Prevent non-page assets from entering the sitemap
    if (path.includes(".") || path.startsWith("/icon")) {
      return null;
    }

    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/services/") && path !== "/services") {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path === "/services" || path === "/about" || path === "/contact" || path === "/seo") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path === "/blog") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/privacy-policy" || path === "/terms") {
      priority = 0.3;
      changefreq = "yearly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
