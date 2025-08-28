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
import ScrollToTop from "./components/ScrollToTop.jsx";

function HomePage({ lang, t, isRTL }) {
  return (
    <>
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
                    <FiTarget className="text-brand-green-1 text-xl" />
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
                  <Card className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card1.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card1.content}
                    </p>
                  </Card>
                  <Card className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card2.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card2.content}
                    </p>
                  </Card>
                  <Card className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
                      {t.cards.card3.title}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base">
                      {t.cards.card3.content}
                    </p>
                  </Card>
                  <Card className="bg-brand-black/90 border-brand-gray/30 text-brand-gray p-6 sm:p-8">
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
          title: "نقود نمو علامتك رقمياً",
          subtitle: "تسويق رقمي وخدمات برمجية تصنع فرقاً حقيقياً",
          ctaPrimary: "احجز استشارة",
          ctaSecondary: "تعرّف علينا",
        },
        cards: {
          card1: {
            title: "تسويق رقمي",
            content: "استراتيجيات تسويقية متقدمة لتعزيز حضورك الرقمي",
          },
          card2: {
            title: "تطوير البرمجيات",
            content: "حلول برمجية مخصصة تناسب احتياجات عملك",
          },
          card3: {
            title: "تصميم الويب",
            content: "تصاميم حديثة وجذابة تعكس هوية علامتك التجارية",
          },
          card4: {
            title: "تحسين محركات البحث",
            content: "تحسين موقعك لظهوره في النتائج الأولى لمحركات البحث",
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
          title: "We drive your brand's digital growth",
          subtitle:
            "Digital marketing and software services that make real impact",
          ctaPrimary: "Book a Consultation",
          ctaSecondary: "Learn More",
        },
        cards: {
          card1: {
            title: "Digital Marketing",
            content:
              "Advanced marketing strategies to boost your digital presence",
          },
          card2: {
            title: "Software Development",
            content:
              "Custom software solutions tailored to your business needs",
          },
          card3: {
            title: "Web Design",
            content:
              "Modern and attractive designs that reflect your brand identity",
          },
          card4: {
            title: "Search Engine Optimization",
            content:
              "Improving your website's visibility in search engine results",
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
        </Routes>
      </main>
      <Footer lang={lang} />
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
