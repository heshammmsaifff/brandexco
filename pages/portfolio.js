import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { supabase } from "../supabaseClient";
import { CATEGORIES, categoryLabel } from "../lib/categories";
import { pick } from "../lib/content";
import Breadcrumbs from "../components/Breadcrumbs";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://brandexco.com";

export default function Portfolio({ projects = [], lang = "ar" }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const title =
    lang === "ar"
      ? "أعمالنا - BrandExCo | معرض المشاريع"
      : "Our Work - BrandExCo | Projects Portfolio";
  const description =
    lang === "ar"
      ? "استعرض مجموعة من أبرز مشاريعنا في التصميم الإبداعي، حلول الويب، التسويق الرقمي واستراتيجية العلامة التجارية."
      : "Browse a selection of our finest projects in creative design, web solutions, digital marketing and brand strategy.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE}/portfolio`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/portfolio`} />
      </Head>

      <Breadcrumbs lang={lang} />

      <section className="relative min-h-screen bg-brand-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-gray mb-4">
              {lang === "ar" ? "أعمالنا" : "Our Work"}
            </h1>
            <p className="text-brand-gray/70 text-lg max-w-2xl mx-auto">
              {lang === "ar"
                ? "مشاريع نفخر بها عبر مختلف تخصصاتنا"
                : "Projects we are proud of across our disciplines"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <FilterButton
              active={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            >
              {lang === "ar" ? "الكل" : "All"}
            </FilterButton>
            {CATEGORIES.map((cat) => (
              <FilterButton
                key={cat.key}
                active={selectedCategory === cat.key}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {categoryLabel(cat.key, lang)}
              </FilterButton>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-brand-gray/60 py-20">
              {lang === "ar" ? "لا توجد مشاريع حالياً" : "No projects yet"}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} lang={lang} />
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

function ProjectCard({ project, lang }) {
  const title = pick(project, "title", lang);
  const description = pick(project, "description", lang);
  const cover = project.images && project.images[0];
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col bg-brand-black/40 border border-brand-gray/15 rounded-2xl overflow-hidden hover:border-brand-primary/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-brand-dark">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-gray/30 text-5xl font-bold">
            B
          </div>
        )}
        <span className="absolute top-3 start-3 bg-brand-primary/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
          {categoryLabel(project.category, lang)}
        </span>
        {project.images && project.images.length > 1 && (
          <span className="absolute bottom-3 end-3 bg-brand-black/70 text-brand-gray text-xs px-2 py-1 rounded-full">
            {project.images.length} {lang === "ar" ? "صور" : "photos"}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-bold text-brand-gray mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-brand-gray/60 text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <span className="mt-4 text-brand-primary text-sm font-semibold">
          {lang === "ar" ? "عرض المشروع ←" : "View project →"}
        </span>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  let projects = [];
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "id, slug, category, title_ar, title_en, description_ar, description_en, images, created_at"
      )
      .eq("published", true)
      .order("created_at", { ascending: false });
    if (error) console.error("portfolio getStaticProps:", error.message);
    projects = data || [];
  } catch (e) {
    console.error("portfolio getStaticProps failed:", e?.message || e);
  }

  return {
    props: { projects },
    revalidate: 60,
  };
}
