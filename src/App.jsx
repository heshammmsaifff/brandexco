import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FiTrendingUp,
  FiZap,
  FiTarget,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CardSwap, { Card } from "./components/CardSwap.jsx";
import Orb from "./components/Orb.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ContactForm from "./components/ContactForm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsOfService from "./components/TermsOfService.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import SEOWrapper from "./components/SEOWrapper.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";

function HomePage({ lang, t, isRTL }) {
  return (
    <>
      <SEOWrapper
        title={
          lang === "ar"
            ? "BrandExCo - خدمات التسويق الرقمي وتطوير المواقع الإلكترونية | السعودية"
            : "BrandExCo - Digital Marketing & Web Development Services | Saudi Arabia"
        }
        description={
          lang === "ar"
            ? "BrandExCo - وكالة تسويق رقمي متخصصة في السعودية. نقدم خدمات SEO، التسويق عبر وسائل التواصل الاجتماعي، تطوير المواقع الإلكترونية، وإدارة العلامات التجارية. نساعد الشركات على النمو عبر الإنترنت."
            : "BrandExCo - Professional digital marketing agency in Saudi Arabia. We provide SEO, social media marketing, web development, and branding services. We help businesses grow online."
        }
        keywords={
          lang === "ar"
            ? "تسويق رقمي, تطوير مواقع, SEO, تسويق اجتماعي, تصميم مواقع, براندكسكو, السعودية, الرياض, جدة, الدمام"
            : "digital marketing, web development, SEO, social media marketing, web design, brandexco, saudi arabia, riyadh, jeddah, dammam"
        }
        url="https://brandexco.com/"
        image="https://brandexco.com/og-image.jpg"
        schemaType="website"
        schemaData={{
          name: "BrandExCo",
          url: "https://brandexco.com",
        }}
      />
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
                  to="/contact"
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
              to="/services"
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

      {/* About Us Section */}
      <AboutUs lang={lang} />

      {/* Contact Form Section */}
      <ContactForm lang={lang} />
    </>
  );
}

function AppContent() {
  const [lang, setLang] = useState("ar");
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const t = useMemo(() => {
    const dict = {
      ar: {
        nav: {
          home: "الرئيسية",
          services: "الخدمات",
          portfolio: "الأعمال",
          contact: "تواصل",
        },
        hero: {
          companyName: "براندكسكو - BRANDEXCO",
          title: "نقود نمو علامتك رقمياً",
          subtitle:
            "براندكسكو ليست مجرد وكالة تسويق، نحن شركاؤك في رحلة بناء الهوية. نقدم حلولاً تسويقية إبداعية وشاملة مصممة خصيصًا لتحويل رؤيتك إلى واقع ملموس وبناء علامة تجارية قوية تترسخ في أذهان عملائك وتنمو بشكل مستمر.",
          ctaPrimary: "احجز استشارة",
          ctaSecondary: "تعرّف علينا",
        },
        cards: {
          card1: {
            title: "التصميم الإبداعي",
            content:
              "تصميم جرافيك، تصميم الويب وتجربة المستخدم، تصوير المنتجات والفيديوغرافيك، تصميم العروض التقديمية الاحترافية",
          },
          card2: {
            title: "حلول الويب",
            content:
              "تصميم وتطوير مواقع الويب، تطوير متاجر إلكترونية، حلول تقنية متكاملة",
          },
          card3: {
            title: "التسويق الرقمي",
            content:
              "إدارة وسائل التواصل الاجتماعي، تسويق المحتوى وإنشاء المدونات، تحسين محركات البحث، إعلانات جوجل",
          },
          card4: {
            title: "استراتيجية العلامة التجارية",
            content:
              "بناء الهوية البصرية، تحديد صوت العلامة التجارية، دراسة السوق والمنافسين، تطوير خطة تسويقية استراتيجية",
          },
        },
      },
      en: {
        nav: {
          home: "Home",
          services: "Services",
          portfolio: "Work",
          contact: "Contact",
        },
        hero: {
          companyName: "BRANDEXCO",
          title: "We drive your brand's digital growth",
          subtitle:
            "BRANDEXCO is more than a marketing agency; we are your partners in identity-building. We provide creative, comprehensive marketing solutions tailored to transform your vision into a tangible reality and build a powerful brand that resonates with your audience and grows consistently.",
          ctaPrimary: "Book a Consultation",
          ctaSecondary: "Learn More",
        },
        cards: {
          card1: {
            title: "Creative Design",
            content:
              "Graphic design, web & UI/UX design, product photography & videography, professional presentation design",
          },
          card2: {
            title: "Web Solutions",
            content:
              "Web design & development, e-commerce development, integrated technical solutions",
          },
          card3: {
            title: "Digital Marketing",
            content:
              "Social media management, content marketing & blogging, SEO, Google Ads",
          },
          card4: {
            title: "Brand Strategy",
            content:
              "Building visual identity, defining brand voice and personality, market and competitor research, comprehensive strategic marketing plan",
          },
        },
      },
    };
    return dict[lang];
  }, [lang]);

  const [langAnimKey, setLangAnimKey] = useState(0);

  const setLangWithEffect = (next) => {
    if (next === lang) return;
    setLang(next);
    setLangAnimKey((k) => k + 1);
  };

  return (
    <div dir={dir} className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <div key={langAnimKey} className="lang-switch-overlay" aria-hidden="true">
        <div className="lang-switch-sweep" />
      </div>
      <Navbar lang={lang} setLang={setLangWithEffect} labels={t.nav} />
      <main key={lang} className="flex-1 lang-content-anim">
        <Routes>
          <Route
            path="/"
            element={<HomePage lang={lang} t={t} isRTL={isRTL} />}
          />
          <Route path="/services" element={<ServicesPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy lang={lang} />}
          />
          <Route
            path="/terms-of-service"
            element={<TermsOfService lang={lang} />}
          />
        </Routes>
      </main>
      <Footer lang={lang} />
      <FloatingButtons />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
