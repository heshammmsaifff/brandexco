import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "../../supabaseClient";
import { categoryLabel } from "../../lib/categories";
import { pick } from "../../lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://brandexco.com";

export default function ProjectDetail({ project, lang = "ar" }) {
  const router = useRouter();
  const [active, setActive] = useState(0);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-gray/60">
        {lang === "ar" ? "جاري التحميل..." : "Loading..."}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center gap-4 text-brand-gray">
        <p>{lang === "ar" ? "المشروع غير موجود" : "Project not found"}</p>
        <Link href="/portfolio" className="text-brand-primary font-semibold">
          {lang === "ar" ? "العودة للأعمال" : "Back to work"}
        </Link>
      </div>
    );
  }

  const title = pick(project, "title", lang);
  const description = pick(project, "description", lang);
  const images = project.images || [];
  const url = `${SITE}/portfolio/${project.slug}`;

  return (
    <>
      <Head>
        <title>{`${title} - BrandExCo`}</title>
        <meta name="description" content={description.slice(0, 160)} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description.slice(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {images[0] && <meta property="og:image" content={images[0]} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="min-h-screen bg-brand-dark py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-gray/60 hover:text-brand-primary transition-colors text-sm mb-6"
          >
            {lang === "ar" ? "→ العودة للأعمال" : "← Back to work"}
          </Link>

          <span className="inline-block bg-brand-primary/15 text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
            {categoryLabel(project.category, lang)}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-gray mb-8 leading-tight">
            {title}
          </h1>

          {/* Gallery */}
          {images.length > 0 && (
            <div className="mb-10">
              <div className="relative w-full aspect-video bg-brand-black/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[active]}
                  alt={`${title} - ${active + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {images.length > 1 && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        i === active
                          ? "border-brand-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`${title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="text-brand-gray/85 leading-relaxed whitespace-pre-line text-lg">
            {description}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  let data = [];
  try {
    ({ data } = await supabase
      .from("projects")
      .select("slug")
      .eq("published", true));
  } catch (e) {
    console.error("portfolio getStaticPaths failed:", e?.message || e);
  }

  return {
    paths: (data || []).map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let project = null;
  try {
    ({ data: project } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle());
  } catch (e) {
    console.error("portfolio [slug] getStaticProps failed:", e?.message || e);
  }

  if (!project) {
    return { notFound: true, revalidate: 30 };
  }

  return {
    props: { project },
    revalidate: 60,
  };
}
