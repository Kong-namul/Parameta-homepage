/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://parametacorp.com",
  generateRobotsTxt: true,
  exclude: ["/studio/*", "/api/*", "/concept-1", "/concept-2", "/concept-3", "/concept-4", "/concepts"],
  alternateRefs: [
    { href: "https://parametacorp.com", hreflang: "ko" },
    { href: "https://parametacorp.com/en", hreflang: "en" },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/studio", "/api"] },
    ],
  },
};
