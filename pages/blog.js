import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { supabase } from "../supabaseClient";
import { CATEGORIES, categoryLabel } from "../lib/categories";
import { pick } from "../lib/content";
import Breadcrumbs from "../components/Breadcrumbs";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://brandexco.com";

export default function Blog({ posts = [], lang = "ar" }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Only show filter buttons for categories that actually have posts.
  const availableCategories = CATEGORIES.filter((cat) =>
    posts.some((post) => post.category === cat.key)
  );

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const title =
    lang === "ar"
      ? "المدونة - BrandExCo | مقالات التسويق الرقمي والعلامات التجارية"
      : "Blog - BrandExCo | Digital Marketing & Branding Insights";
  const description =
    lang === "ar"
      ? "اكتشف أحدث المقالات والأفكار في التسويق الرقمي، تصميم الهوية، تطوير الويب واستراتيجيات العلامة التجارية من فريق براندكسكو."
      : "Explore the latest articles on digital marketing, branding, web development and brand strategy from the BrandExCo team.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/blog`} />
      </Head>

      <Breadcrumbs lang={lang} />

      <section className="relative min-h-screen bg-brand-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-gray mb-4">
              {lang === "ar" ? "المدونة" : "Blog"}
            </h1>
            <p className="text-brand-gray/70 text-lg max-w-2xl mx-auto">
              {lang === "ar"
                ? "أفكار ومقالات في التسويق الرقمي وبناء العلامات التجارية"
                : "Insights and articles on digital marketing and brand building"}
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <FilterButton
              active={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            >
              {lang === "ar" ? "الكل" : "All"}
            </FilterButton>
            {availableCategories.map((cat) => (
              <FilterButton
                key={cat.key}
                active={selectedCategory === cat.key}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {categoryLabel(cat.key, lang)}
              </FilterButton>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="text-center text-brand-gray/60 py-20">
              {lang === "ar" ? "لا توجد مقالات حالياً" : "No articles yet"}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
        active
          ? "bg-brand-primary text-brand-dark border-brand-primary shadow-lg shadow-brand-primary/20"
          : "bg-brand-black/40 text-brand-gray border-brand-gray/20 hover:border-brand-primary hover:text-brand-primary"
      }`}
    >
      {children}
    </button>
  );
}

function BlogCard({ post, lang }) {
  const title = pick(post, "title", lang);
  const excerpt =
    pick(post, "excerpt", lang) ||
    pick(post, "content", lang).slice(0, 120);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-brand-black/40 border border-brand-gray/15 rounded-2xl overflow-hidden hover:border-brand-primary/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-brand-dark">
        {post.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover_image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-gray/30 text-4xl font-bold">
            B
          </div>
        )}
        <span className="absolute top-3 start-3 bg-brand-primary/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
          {categoryLabel(post.category, lang)}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-bold text-brand-gray mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-brand-gray/60 text-sm leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>
        <span className="mt-4 text-brand-primary text-sm font-semibold">
          {lang === "ar" ? "اقرأ المزيد ←" : "Read more →"}
        </span>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  let posts = [];
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        "id, slug, category, title_ar, title_en, excerpt_ar, excerpt_en, content_ar, content_en, cover_image, created_at"
      )
      .eq("published", true)
      .order("created_at", { ascending: false });
    if (error) console.error("blog getStaticProps:", error.message);
    posts = data || [];
  } catch (e) {
    console.error("blog getStaticProps failed:", e?.message || e);
  }

  return {
    props: { posts },
    revalidate: 60,
  };
}
