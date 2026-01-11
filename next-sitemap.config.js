/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rahul-mudavath.vercel.app/",
  generateRobotsTxt: true, // auto-generate robots.txt
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/api/*"],
};
