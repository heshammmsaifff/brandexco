import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const router = useRouter();

  // 🟢 القاموس كامل (ar / en)
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

  // تأثير تغيير اللغة
  const [langAnimKey, setLangAnimKey] = useState(0);
  const setLangWithEffect = (next) => {
    if (next === lang) return;
    setLang(next);
    setLangAnimKey((k) => k + 1);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div dir={dir} className="min-h-screen flex flex-col relative">
        <ScrollToTop />

        {/* overlay عند تغيير اللغة */}
        <div
          key={langAnimKey}
          className="lang-switch-overlay"
          aria-hidden="true"
        >
          <div className="lang-switch-sweep" />
        </div>

        <Navbar lang={lang} setLang={setLangWithEffect} labels={t.nav} />

        {/* 🟢 AnimatePresence عشان الانتقالات بين الصفحات */}
        <main className="flex-1 lang-content-anim">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full"
            >
              <Component {...pageProps} lang={lang} t={t} isRTL={isRTL} />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer lang={lang} />
        <FloatingButtons />
      </div>
    </>
  );
}

export default MyApp;
