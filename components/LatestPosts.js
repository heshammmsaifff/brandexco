import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { categoryLabel } from "../lib/categories";
import { pick } from "../lib/content";

// Home-page section showing the latest blog posts (up to 2).
export default function LatestPosts({ posts = [], lang = "ar" }) {
  if (!posts.length) return null;

  return (
    <section className="relative py-20 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-3">
              {lang === "ar" ? "أحدث المقالات" : "Latest Articles"}
            </h2>
            <p className="text-brand-gray/70 text-lg max-w-xl">
              {lang === "ar"
                ? "أفكار ونصائح في التسويق الرقمي وبناء العلامات التجارية"
                : "Insights and tips on digital marketing and brand building"}
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
          >
            {lang === "ar" ? "كل المقالات" : "All articles"}
            {lang === "ar" ? <FiArrowLeft /> : <FiArrowRight />}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => {
            const title = pick(post, "title", lang);
            const excerpt =
              pick(post, "excerpt", lang) ||
              pick(post, "content", lang).slice(0, 140);
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row bg-brand-dark/60 border border-brand-gray/15 rounded-2xl overflow-hidden hover:border-brand-primary/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative sm:w-44 h-44 sm:h-auto flex-shrink-0 overflow-hidden bg-brand-dark">
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
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-brand-primary text-xs font-bold mb-2">
                    {categoryLabel(post.category, lang)}
                  </span>
                  <h3 className="text-lg font-bold text-brand-gray mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-brand-gray/60 text-sm leading-relaxed line-clamp-3 flex-1">
                    {excerpt}
                  </p>
                  <span className="mt-3 text-brand-primary text-sm font-semibold">
                    {lang === "ar" ? "اقرأ المزيد ←" : "Read more →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-brand-dark font-semibold"
          >
            {lang === "ar" ? "كل المقالات" : "All articles"}
          </Link>
        </div>
      </div>
    </section>
  );
}
