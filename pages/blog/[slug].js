import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "../../supabaseClient";
import { categoryLabel } from "../../lib/categories";
import { pick } from "../../lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://brandexco.com";

export default function BlogPost({ post, lang = "ar" }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-gray/60">
        {lang === "ar" ? "جاري التحميل..." : "Loading..."}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center gap-4 text-brand-gray">
        <p>{lang === "ar" ? "المقال غير موجود" : "Post not found"}</p>
        <Link href="/blog" className="text-brand-primary font-semibold">
          {lang === "ar" ? "العودة للمدونة" : "Back to blog"}
        </Link>
      </div>
    );
  }

  const title = pick(post, "title", lang);
  const content = pick(post, "content", lang);
  const metaTitle = pick(post, "meta_title", lang) || title;
  const metaDescription =
    pick(post, "meta_description", lang) ||
    pick(post, "excerpt", lang) ||
    content.slice(0, 160);
  const url = `${SITE}/blog/${post.slug}`;

  return (
    <>
      <Head>
        <title>{`${metaTitle} - BrandExCo`}</title>
        <meta name="description" content={metaDescription} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {post.cover_image && (
          <meta property="og:image" content={post.cover_image} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: metaTitle,
              description: metaDescription,
              image: post.cover_image || undefined,
              datePublished: post.created_at,
              dateModified: post.updated_at || post.created_at,
              author: { "@type": "Organization", name: "BrandExCo" },
              publisher: {
                "@type": "Organization",
                name: "BrandExCo",
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE}/icon.png`,
                },
              },
              mainEntityOfPage: url,
            }),
          }}
        />
      </Head>

      <article className="min-h-screen bg-brand-dark py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-gray/60 hover:text-brand-primary transition-colors text-sm mb-6"
          >
            {lang === "ar" ? "→ العودة للمدونة" : "← Back to blog"}
          </Link>

          <span className="inline-block bg-brand-primary/15 text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
            {categoryLabel(post.category, lang)}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-gray mb-6 leading-tight">
            {title}
          </h1>

          {post.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover_image}
              alt={title}
              className="w-full max-h-[440px] object-cover rounded-2xl shadow-2xl mb-8"
            />
          )}

          <div className="prose-brand text-brand-gray/85 leading-relaxed whitespace-pre-line text-lg">
            {content}
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  return {
    paths: (data || []).map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("published", true)
    .maybeSingle();

  if (!post) {
    return { notFound: true, revalidate: 30 };
  }

  return {
    props: { post },
    revalidate: 60,
  };
}
