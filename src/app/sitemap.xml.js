import sitemap from "./sitemap";

export default async function SitemapXML(req, res) {
  const urls = sitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `
  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();
}
