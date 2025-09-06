import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSmartphone,
  FiSearch,
  FiDollarSign,
  FiImage,
  FiShoppingCart,
  FiZap,
  FiMonitor,
  FiTarget,
  FiTrendingUp,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import ElectricBorder from "./ElectricBorder.jsx";
import SEOWrapper from "./SEOWrapper.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

function ServicesPage({ lang }) {
  // Handle scrolling to specific service section when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from hash
      const sectionId = hash.substring(1);
      // Wait a bit for the page to render, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const serviceCategories = [
    {
      id: "creative-design",
      title: lang === "ar" ? "التصميم الإبداعي" : "Creative Design",
      subtitle: lang === "ar" ? "التصميم الإبداعي" : "Creative Design",
      services: [
        {
          title: lang === "ar" ? "تصميم الجرافيك" : "Graphic Design",
          description:
            lang === "ar"
              ? "بطاقات عمل، بروشورات، انفوجرافيك"
              : "Business cards, brochures, infographics",
          icon: <FiImage className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تصميم الويب وتجربة المستخدم"
              : "Web & UI/UX Design",
          description:
            lang === "ar"
              ? "تصاميم حديثة ومتجاوبة"
              : "Modern and responsive designs",
          icon: <FiMonitor className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تصوير المنتجات والفيديوغرافيك"
              : "Product Photography & Videography",
          description:
            lang === "ar"
              ? "الفيديوهات التسويقية القصيرة"
              : "Short marketing videos",
          icon: <FiImage className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تصميم العروض التقديمية الاحترافية"
              : "Professional Presentation Design",
          description:
            lang === "ar"
              ? "عروض تقديمية احترافية ومؤثرة"
              : "Professional and impactful presentations",
          icon: <FiImage className="text-4xl" />,
        },
      ],
    },
    {
      id: "web-solutions",
      title: lang === "ar" ? "حلول الويب" : "Web Solutions",
      subtitle: lang === "ar" ? "حلول الويب" : "Web Solutions",
      services: [
        {
          title:
            lang === "ar"
              ? "تصميم وتطوير مواقع الويب"
              : "Web Design & Development",
          description:
            lang === "ar"
              ? "مواقع ويب حديثة ومتجاوبة"
              : "Modern and responsive websites",
          icon: <FiMonitor className="text-4xl" />,
        },
        {
          title:
            lang === "ar" ? "تطوير متاجر إلكترونية" : "E-commerce Development",
          description:
            lang === "ar"
              ? "متاجر إلكترونية متكاملة وآمنة"
              : "Fully integrated and secure e-commerce stores",
          icon: <FiShoppingCart className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تطوير تطبيقات الهاتف المحمول"
              : "Mobile App Development",
          description:
            lang === "ar"
              ? "تطبيقات iOS و Android"
              : "iOS and Android applications",
          icon: <FiSmartphone className="text-4xl" />,
        },
      ],
    },
    {
      id: "digital-marketing",
      title: lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
      subtitle: lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
      services: [
        {
          title:
            lang === "ar"
              ? "تحسين محركات البحث (SEO)"
              : "Search Engine Optimization (SEO)",
          description:
            lang === "ar"
              ? "تحسين ظهور موقعك في نتائج البحث"
              : "Improve your website's search engine visibility",
          icon: <FiSearch className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "التسويق عبر وسائل التواصل الاجتماعي"
              : "Social Media Marketing",
          description:
            lang === "ar"
              ? "إدارة حسابات التواصل الاجتماعي"
              : "Social media account management",
          icon: <FiInstagram className="text-4xl" />,
        },
        {
          title:
            lang === "ar" ? "إعلانات جوجل وفيسبوك" : "Google & Facebook Ads",
          description:
            lang === "ar"
              ? "إعلانات مدفوعة مستهدفة"
              : "Targeted paid advertising",
          icon: <FiDollarSign className="text-4xl" />,
        },
      ],
    },
    {
      id: "brand-strategy",
      title: lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
      subtitle:
        lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
      services: [
        {
          title:
            lang === "ar"
              ? "تحليل السوق والمنافسين"
              : "Market & Competitor Analysis",
          description:
            lang === "ar"
              ? "دراسة شاملة للسوق والمنافسين"
              : "Comprehensive market and competitor study",
          icon: <FiTrendingUp className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تطوير استراتيجية تسويقية شاملة"
              : "Comprehensive Marketing Strategy Development",
          description:
            lang === "ar"
              ? "خطط تسويقية شاملة ومخصصة"
              : "Comprehensive and customized marketing plans",
          icon: <FiTarget className="text-4xl" />,
        },
      ],
    },
  ];

  return (
    <>
      <SEOWrapper
        title={
          lang === "ar"
            ? "خدماتنا - BrandExCo | تصميم مواقع، تسويق رقمي، تطوير تطبيقات"
            : "Our Services - BrandExCo | Web Design, Digital Marketing, App Development"
        }
        description={
          lang === "ar"
            ? "اكتشف خدماتنا الشاملة في تصميم المواقع، التسويق الرقمي، تطوير التطبيقات، وإدارة العلامات التجارية. نقدم حلول رقمية متكاملة لنجاح عملك."
            : "Discover our comprehensive services in web design, digital marketing, app development, and branding. We provide integrated digital solutions for your business success."
        }
        keywords={
          lang === "ar"
            ? "خدمات تصميم مواقع, تسويق رقمي, تطوير تطبيقات, تصميم جرافيك, SEO, تسويق اجتماعي, براندكسكو"
            : "web design services, digital marketing, app development, graphic design, SEO, social media marketing, brandexco"
        }
        url="https://brandexco.com/services"
        image="https://brandexco.com/services-og-image.jpg"
        schemaType="service"
        schemaData={{
          name: lang === "ar" ? "خدمات BrandExCo" : "BrandExCo Services",
          description:
            lang === "ar"
              ? "خدمات شاملة في التسويق الرقمي وتطوير المواقع"
              : "Comprehensive digital marketing and web development services",
          serviceType: "Digital Marketing & Web Development",
        }}
      />
      <Breadcrumbs lang={lang} />
      <div className="min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-gray mb-6">
              {lang === "ar" ? "خدماتنا" : "Our Services"}
            </h1>
            <p className="text-xl text-brand-gray/80 max-w-3xl mx-auto">
              {lang === "ar"
                ? "نقدم مجموعة شاملة من الخدمات الرقمية لمساعدة عملك على النمو والوصول إلى جمهورك المستهدف"
                : "We provide a comprehensive range of digital services to help your business grow and reach your target audience"}
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.id} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-4">
                  {category.title}
                </h2>
                <div className="w-32 h-1 bg-brand-primary mx-auto mb-4"></div>
                <span className="text-brand-primary text-lg font-semibold">
                  {categoryIndex + 1}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="animate-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ElectricBorder color="#9ECB0E" className="w-full h-full">
                      <div className="bg-brand-black/90 p-8 rounded-xl h-full flex flex-col">
                        <div className="text-4xl mb-4 text-brand-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-gray mb-3">
                          {service.title}
                        </h3>
                        <p className="text-brand-gray/70 flex-1">
                          {service.description}
                        </p>
                        <Link
                          to="/contact"
                          className="mt-6 text-brand-primary hover:text-brand-secondary transition-colors font-semibold inline-block"
                        >
                          {lang === "ar" ? "تعرف على المزيد" : "Learn More"}
                        </Link>
                      </div>
                    </ElectricBorder>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition-colors btn-shimmer"
            >
              {lang === "ar" ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
