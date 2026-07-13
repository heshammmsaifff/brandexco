import Link from "next/link";
import {
  FiTrendingUp,
  FiZap,
  FiTarget,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import Hero from "../components/Hero";
import CardSwap, { Card } from "../components/CardSwap";
import Orb from "../components/Orb";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import LatestProjects from "../components/LatestProjects";
import LatestPosts from "../components/LatestPosts";
import { supabase } from "../supabaseClient";
import Head from "next/head";

export default function HomePage({ lang, t, isRTL, latestProjects = [], latestPosts = [] }) {
  const title =
    lang === "ar"
      ? "BrandExCo | وكالة تسويق رقمي متخصصة"
      : "BrandExCo | Professional Digital Marketing Agency";

  const description =
    lang === "ar"
      ? "تعرف على BrandExCo، وكالة تسويق رقمي متخصصة في السعودية. نقدم حلول تسويقية إبداعية وشاملة لبناء علامات تجارية قوية."
      : "Learn about BrandExCo, a specialized digital marketing agency in Saudi Arabia. We provide creative and comprehensive marketing solutions to build strong brands.";

  const keywords =
    lang === "ar"
      ? "من نحن, وكالة تسويق, تسويق رقمي, براندكسكو, السعودية, الرياض, بناء علامات تجارية"
      : "about us, marketing agency, digital marketing, brandexco, saudi arabia, riyadh, brand building";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Hero labels={t.hero} isRTL={isRTL} />

      {/* CardSwap Section */}
      <section className="relative py-20 bg-brand-dark">
        {/* Orb Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Orb hue={120} hoverIntensity={0.3} rotateOnHover={true} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content on the left */}
            <div className="animate-in order-1 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
                {lang === "ar" ? "خدماتنا المميزة" : "Our Premium Services"}
              </h2>
              <p className="text-brand-gray/80 text-lg leading-relaxed mb-8">
                {lang === "ar"
                  ? "نقدم مجموعة شاملة من الخدمات الرقمية لمساعدة عملك على النمو والوصول إلى جمهورك المستهدف بفعالية"
                  : "We provide a comprehensive range of digital services to help your business grow and reach your target audience effectively"}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <FiTrendingUp className="text-brand-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar"
                        ? "استراتيجية شاملة"
                        : "Comprehensive Strategy"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نطور استراتيجيات مخصصة تناسب أهداف عملك الفريدة"
                        : "We develop customized strategies that fit your unique business goals"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <FiZap className="text-brand-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "نتائج سريعة" : "Fast Results"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نضمن تحقيق نتائج ملموسة في أقصر وقت ممكن"
                        : "We ensure tangible results in the shortest possible time"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-green-1/20 flex items-center justify-center flex-shrink-0">
                    <FiTarget className="text-brand-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "دعم مستمر" : "Continuous Support"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نوفر دعم فني مستمر لضمان نجاح مشروعك"
                        : "We provide continuous technical support to ensure your project's success"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contactpage"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition-colors btn-shimmer"
                >
                  {lang === "ar"
                    ? "ابدأ مشروعك الآن"
                    : "Start Your Project Now"}
                </Link>
              </div>
            </div>

            {/* Cards on the right */}
            <div className="relative order-2 lg:order-2 flex justify-center lg:justify-start">
              <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-xs sm:max-w-sm lg:max-w-none overflow-hidden lg:ml-32">
                <CardSwap
                  cardDistance={55}
                  verticalDistance={65}
                  delay={5000}
                  pauseOnHover={false}
                  width={380}
                  height={340}
                >
                  <Card
                    className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8"
                    style={{
                      backgroundImage: "url(/creative-design.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card1.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card1.content}
                    </p>
                  </Card>
                  <Card
                    className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8"
                    style={{
                      backgroundImage: "url(/web-solutions.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card2.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card2.content}
                    </p>
                  </Card>
                  <Card
                    className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8"
                    style={{
                      backgroundImage: "url(/digital-marketing.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card3.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card3.content}
                    </p>
                  </Card>
                  <Card
                    className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8"
                    style={{
                      backgroundImage: "url(brand-strategy.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card4.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card4.content}
                    </p>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>

          {/* More Services Button */}
          <div className="text-center mt-16">
            <Link
              href="/servicespage"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-black/80 border border-brand-gray/30 text-brand-gray font-semibold hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 btn-shimmer group"
            >
              <span className="mr-3 group-hover:mr-4 transition-all duration-300">
                {lang === "ar" ? "المزيد من الخدمات" : "More Services"}
              </span>
              {lang === "ar" ? (
                <FiArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
              ) : (
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <LatestProjects projects={latestProjects} lang={lang} />

      {/* About Us Section */}
      <AboutUs lang={lang} />

      {/* Latest Posts Section */}
      <LatestPosts posts={latestPosts} lang={lang} />

      {/* Contact Form Section */}
      <ContactForm lang={lang} />
    </>
  );
}

export async function getStaticProps() {
  let latestProjects = [];
  let latestPosts = [];
  try {
    const [projectsRes, postsRes] = await Promise.all([
      supabase
        .from("projects")
        .select(
          "id, slug, category, title_ar, title_en, images, created_at"
        )
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(4),
      supabase
        .from("posts")
        .select(
          "id, slug, category, title_ar, title_en, excerpt_ar, excerpt_en, content_ar, content_en, cover_image, created_at"
        )
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(2),
    ]);
    latestProjects = projectsRes.data || [];
    latestPosts = postsRes.data || [];
  } catch (e) {
    console.error("home getStaticProps failed:", e?.message || e);
  }

  return {
    props: { latestProjects, latestPosts },
    revalidate: 60,
  };
}
