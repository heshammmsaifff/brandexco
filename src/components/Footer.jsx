import React from "react";
import { Link } from "react-router-dom";
import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiSmartphone,
  FiMapPin,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

function Footer({ lang }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      {
        name: lang === "ar" ? "التصميم الإبداعي" : "Creative Design",
        path: "/services",
      },
      {
        name: lang === "ar" ? "حلول الويب" : "Web Solutions",
        path: "/services",
      },
      {
        name: lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
        path: "/services",
      },
      {
        name: lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
        path: "/services",
      },
    ],
    company: [
      { name: lang === "ar" ? "من نحن" : "About Us", path: "/#about" },
      { name: lang === "ar" ? "رؤيتنا" : "Our Vision", path: "/#about" },
      { name: lang === "ar" ? "مهمتنا" : "Our Mission", path: "/#about" },
      { name: lang === "ar" ? "قيمنا" : "Our Values", path: "/#about" },
    ],
    support: [
      { name: lang === "ar" ? "المساعدة" : "Help Center", path: "/contact" },
      {
        name: lang === "ar" ? "الدعم الفني" : "Technical Support",
        path: "/contact",
      },
      { name: lang === "ar" ? "الأسئلة الشائعة" : "FAQ", path: "/contact" },
      { name: lang === "ar" ? "تواصل معنا" : "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FiFacebook />,
      url: "https://www.facebook.com/brandexcoagency",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      url: "https://www.instagram.com/brandexco.agency/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      url: "https://x.com/brandexcoagency",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@brandexco",
    },
  ];

  const handleLinkClick = (path) => {
    // If it's a hash link, scroll to the section
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top when navigating to different pages
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-gray/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <img
                  src="/logo-shape.png"
                  alt="BrandExCo Logo"
                  className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 navbar-logo"
                  draggable="false"
                  loading="eager"
                  decoding="async"
                />
                {/* تأثير توهج خفيف */}
                <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 logo-glow" />
                {/* تأثير إضافي للشعار */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
              <span className="font-extrabold tracking-tight text-brand-gray text-xl">
                BRANDEXCO
              </span>
            </div>
            <p className="text-brand-gray/70 mb-6 leading-relaxed">
              {lang === "ar"
                ? "نقود نمو علامتك التجارية رقمياً من خلال حلول تسويقية وبرمجية مبتكرة ومخصصة لاحتياجات عملك الفريدة."
                : "We drive your brand's digital growth through innovative marketing and software solutions tailored to your unique business needs."}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-brand-gray/10 flex items-center justify-center text-brand-gray hover:bg-brand-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gray mb-6">
              {lang === "ar" ? "الخدمات" : "Services"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-brand-gray/70 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gray mb-6">
              {lang === "ar" ? "الشركة" : "Company"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-brand-gray/70 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gray mb-6">
              {lang === "ar" ? "الدعم" : "Support"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-brand-gray/70 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-brand-gray mb-6">
            {lang === "ar" ? "معلومات الاتصال" : "Contact Information"}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiSmartphone className="text-brand-secondary text-lg" />
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <p className="text-brand-gray/70 text-sm">
                  {lang === "ar" ? "المملكة العربية السعودية" : "SAUDI ARABIA"}
                </p>
                <p
                  className="text-brand-gray font-mono"
                  style={{ direction: "ltr" }}
                >
                  +966-530-986-725
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiSmartphone className="text-brand-primary text-lg" />
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <p className="text-brand-gray/70 text-sm">
                  {lang === "ar" ? "مصر" : "EGYPT"}
                </p>
                <p
                  className="text-brand-gray font-mono"
                  style={{ direction: "ltr" }}
                >
                  +20-101-180-308-7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-brand-primary text-lg" />
              <p className="text-brand-gray">info@brandexco.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-brand-primary text-lg" />
              <p className="text-brand-gray">
                {lang === "ar"
                  ? "الرياض, المملكة العربية السعودية"
                  : "Riyadh - Saudi Arabia"}
                <br />
                {lang === "ar" ? "القاهرة, مصر" : "Cairo - Egypt"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-brand-gray/20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-primary flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-brand-gray/70 text-sm">
              BRANDEXCO © {currentYear} COPYRIGHT. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className="text-brand-gray/70 hover:text-brand-primary transition-colors"
            >
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className="text-brand-gray/70 hover:text-brand-primary transition-colors"
            >
              {lang === "ar" ? "شروط الاستخدام" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
