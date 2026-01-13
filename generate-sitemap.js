import fs from "fs";
import path from "path";

const DOMAIN = "https://barbs-bites-cafe.netlify.app/";

const PAGES = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/products/", priority: "0.8", changefreq: "weekly" },
];

const today = new Date().toISOString().split("T")[0];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${DOMAIN}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve("./public/sitemap.xml"), xml);
console.log("✅ Sitemap Generated");
