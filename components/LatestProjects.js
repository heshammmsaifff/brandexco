import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { categoryLabel } from "../lib/categories";
import { pick } from "../lib/content";

// Home-page section showing the latest projects (up to 4).
export default function LatestProjects({ projects = [], lang = "ar" }) {
  if (!projects.length) return null;

  return (
    <section className="relative py-20 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-3">
              {lang === "ar" ? "أحدث أعمالنا" : "Our Latest Work"}
            </h2>
            <p className="text-brand-gray/70 text-lg max-w-xl">
              {lang === "ar"
                ? "نماذج من مشاريع نفخر بتنفيذها لعملائنا"
                : "A selection of projects we're proud to have delivered"}
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
          >
            {lang === "ar" ? "كل الأعمال" : "All work"}
            {lang === "ar" ? <FiArrowLeft /> : <FiArrowRight />}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            const title = pick(project, "title", lang);
            const cover = project.images && project.images[0];
            return (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col bg-brand-black/40 border border-brand-gray/15 rounded-2xl overflow-hidden hover:border-brand-primary/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-brand-dark">
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cover}
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
                    {categoryLabel(project.category, lang)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-brand-gray group-hover:text-brand-primary transition-colors line-clamp-2">
                    {title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-brand-dark font-semibold"
          >
            {lang === "ar" ? "كل الأعمال" : "All work"}
          </Link>
        </div>
      </div>
    </section>
  );
}
