import { supabase } from "../supabaseClient";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://brandexco.com";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/servicespage", priority: "0.9", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/contactpage", priority: "0.8", changefreq: "monthly" },
  { path: "/PrivacyPolicy", priority: "0.3", changefreq: "yearly" },
  { path: "/TermsOfService", priority: "0.3", changefreq: "yearly" },
];

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function getServerSideProps({ res }) {
  const [{ data: posts }, { data: projects }] = await Promise.all([
    supabase
      .from("posts")
      .select("slug, updated_at")
      .eq("published", true),
    supabase
      .from("projects")
      .select("slug, updated_at")
      .eq("published", true),
  ]);

  const entries = [
    ...STATIC_ROUTES.map((r) =>
      urlEntry({
        loc: `${SITE}${r.path}`,
        changefreq: r.changefreq,
        priority: r.priority,
      })
    ),
    ...(posts || []).map((p) =>
      urlEntry({
        loc: `${SITE}/blog/${p.slug}`,
        lastmod: p.updated_at ? p.updated_at.split("T")[0] : undefined,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
    ...(projects || []).map((p) =>
      urlEntry({
        loc: `${SITE}/portfolio/${p.slug}`,
        lastmod: p.updated_at ? p.updated_at.split("T")[0] : undefined,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
