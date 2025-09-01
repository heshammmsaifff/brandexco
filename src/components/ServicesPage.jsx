import React from "react";
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

function ServicesPage({ lang }) {
  const serviceCategories = [
    {
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
      ],
    },
    {
      title: lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
      subtitle: lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
      services: [
        {
          title:
            lang === "ar"
              ? "إدارة وسائل التواصل الاجتماعي"
              : "Social Media Management",
          description:
            lang === "ar"
              ? "إدارة حسابات التواصل الاجتماعي وإنشاء محتوى جذاب"
              : "Management of social media accounts and creation of engaging content",
          icon: <FiSmartphone className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تسويق المحتوى وإنشاء المدونات"
              : "Content Marketing & Blogging",
          description:
            lang === "ar"
              ? "محتوى إبداعي ومؤثر لجمهورك المستهدف"
              : "Creative and impactful content for your target audience",
          icon: <FiZap className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تحسين محركات البحث"
              : "Search Engine Optimization (SEO)",
          description:
            lang === "ar"
              ? "تحسين موقعك لظهوره في النتائج الأولى لمحركات البحث"
              : "Improving your website's visibility in search engine results",
          icon: <FiSearch className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "التسويق عبر محركات البحث"
              : "Search Engine Marketing (SEM/Google Ads)",
          description:
            lang === "ar"
              ? "حملات إعلانية مدفوعة لزيادة المبيعات والوصول"
              : "Paid advertising campaigns to increase sales and reach",
          icon: <FiDollarSign className="text-4xl" />,
        },
        {
          title:
            lang === "ar" ? "التسويق عبر البريد الإلكتروني" : "Email Marketing",
          description:
            lang === "ar"
              ? "حملات بريد إلكتروني فعالة ومستهدفة"
              : "Effective and targeted email campaigns",
          icon: <FiMail className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "إعلانات وسائل التواصل الاجتماعي"
              : "Social Media Advertising",
          description:
            lang === "ar"
              ? "إعلانات فيسبوك، إنستغرام، لينكد إن، سناب شات"
              : "Facebook, Instagram, LinkedIn, Snapchat ads",
          icon: <FiFacebook className="text-4xl" />,
        },
      ],
    },
    {
      title: lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
      subtitle:
        lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
      services: [
        {
          title:
            lang === "ar" ? "بناء الهوية البصرية" : "Building Visual Identity",
          description:
            lang === "ar" ? "شعار، ألوان، خطوط" : "Logo, colors, typography",
          icon: <FiTarget className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تحديد صوت العلامة التجارية وشخصيتها"
              : "Defining Brand Voice and Personality",
          description:
            lang === "ar"
              ? "تطوير شخصية مميزة لعلامتك التجارية"
              : "Developing a distinctive personality for your brand",
          icon: <FiZap className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "دراسة السوق والمنافسين"
              : "Conducting Market and Competitor Research",
          description:
            lang === "ar"
              ? "تحليل شامل للسوق والمنافسين"
              : "Comprehensive market and competitor analysis",
          icon: <FiTrendingUp className="text-4xl" />,
        },
        {
          title:
            lang === "ar"
              ? "تطوير خطة تسويقية استراتيجية شاملة"
              : "Developing a Comprehensive Strategic Marketing Plan",
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
    <section className="relative py-20 bg-brand-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-gray mb-6">
            {lang === "ar" ? "خدماتنا" : "OUR SERVICES"}
          </h1>
          <p className="text-brand-gray/80 text-lg max-w-3xl mx-auto">
            {lang === "ar"
              ? "نقدم مجموعة شاملة من الخدمات التسويقية والتصميمية لمساعدة علامتك التجارية على النمو والوصول إلى جمهورك المستهدف"
              : "We provide a comprehensive range of marketing and design services to help your brand grow and reach your target audience"}
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
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
    </section>
  );
}

export default ServicesPage;
