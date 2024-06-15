const { CONFIG } = require("./site.config")

module.exports = {
  siteUrl: CONFIG.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  // robots.txt - Host 제거 (Google Search Console에서 오류 발생)
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt.replace(`# Host\nHost: ${CONFIG.link}\n\n`, ""),
  },
}
