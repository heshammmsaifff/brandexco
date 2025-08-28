import React from "react";
import { Link } from "react-router-dom";
import {
  FiSmartphone,
  FiSearch,
  FiDollarSign,
  FiImage,
  FiShoppingCart,
  FiZap,
} from "react-icons/fi";
import ElectricBorder from "./ElectricBorder.jsx";

function ServicesPage({ lang }) {
  const services = [
    {
      title:
        lang === "ar"
          ? "تسويق وسائل التواصل الاجتماعي"
          : "Social Media Marketing",
      description:
        lang === "ar"
          ? "إدارة حسابات التواصل الاجتماعي وإنشاء محتوى جذاب"
          : "Management of social media accounts and creation of engaging content",
      icon: <FiSmartphone className="text-4xl" />,
    },
    {
      title:
        lang === "ar" ? "تحسين محركات البحث" : "Search Engine Optimization",
      description:
        lang === "ar"
          ? "تحسين موقعك لظهوره في النتائج الأولى لمحركات البحث"
          : "Improving your website's visibility in search engine results",
      icon: <FiSearch className="text-4xl" />,
    },
    {
      title: lang === "ar" ? "إعلانات جوجل" : "Google Ads",
      description:
        lang === "ar"
          ? "حملات إعلانية مدفوعة لزيادة المبيعات والوصول"
          : "Paid advertising campaigns to increase sales and reach",
      icon: <FiDollarSign className="text-4xl" />,
    },
    {
      title: lang === "ar" ? "التصميم الجرافيكي" : "Graphic Design",
      description:
        lang === "ar"
          ? "نحوّل فكرتك لرؤية بصرية متكاملة. من الهوية والشعار إلى التصاميم اليومية، نضمن إن كل تفصيلة تعكس شخصيتك وتخاطب جمهورك بأفضل شكل."
          : "We transform your ideas into a complete visual experience. From branding and logos to everyday designs, we ensure every detail reflects your identity and connects with your audience",
      icon: <FiImage className="text-4xl" />,
    },
    {
      title:
        lang === "ar"
          ? "تطوير مواقع التجارة الإلكترونية"
          : "E-commerce Website Development",
      description:
        lang === "ar"
          ? "متاجر إلكترونية متكاملة وآمنة"
          : "Fully integrated and secure e-commerce stores",
      icon: <FiShoppingCart className="text-4xl" />,
    },
    {
      title: lang === "ar" ? "استشارات تقنية" : "Technical Consultations",
      description:
        lang === "ar"
          ? "استشارات متخصصة لتحسين عملياتك الرقمية"
          : "Specialized consultations to improve your digital operations",
      icon: <FiZap className="text-4xl" />,
    },
  ];

  return (
    <section className="relative py-20 bg-brand-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-gray mb-6">
            {lang === "ar" ? "خدماتنا الشاملة" : "Our Comprehensive Services"}
          </h1>
          <p className="text-brand-gray/80 text-lg max-w-3xl mx-auto">
            {lang === "ar"
              ? "نقدم مجموعة واسعة من الخدمات الرقمية المتخصصة لمساعدة عملك على النمو والوصول إلى جمهورك المستهدف"
              : "We offer a wide range of specialized digital services to help your business grow and reach your target audience"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ElectricBorder color="#9ECB0E" className="w-full h-full">
                <div className="bg-brand-black/90 p-8 rounded-xl h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
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
