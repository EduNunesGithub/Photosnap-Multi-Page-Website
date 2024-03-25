/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateRobotsTxt: true,
  outDir: "public",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  sitemapSize: 5000,
};
