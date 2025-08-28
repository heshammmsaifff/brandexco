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

function Footer({ lang }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      {
        name: lang === "ar" ? "تسويق رقمي" : "Digital Marketing",
        path: "/services",
      },
      {
        name: lang === "ar" ? "تطوير البرمجيات" : "Software Development",
        path: "/services",
      },
      { name: lang === "ar" ? "تصميم الويب" : "Web Design", path: "/services" },
      {
        name:
          lang === "ar" ? "تطوير تطبيقات الموبايل" : "Mobile App Development",
        path: "/services",
      },
    ],
    company: [
      { name: lang === "ar" ? "من نحن" : "About Us", path: "/#about" },
      { name: lang === "ar" ? "فريق العمل" : "Our Team", path: "/" },
      { name: lang === "ar" ? "الأعمال" : "Portfolio", path: "/" },
      { name: lang === "ar" ? "الوظائف" : "Careers", path: "/" },
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
    { name: "Twitter", icon: <FiTwitter />, url: "#" },
    { name: "LinkedIn", icon: <FiLinkedin />, url: "#" },
    { name: "Instagram", icon: <FiInstagram />, url: "#" },
    { name: "Facebook", icon: <FiFacebook />, url: "#" },
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
              <span className="inline-block h-8 w-8 rounded bg-brand-primary" />
              <span className="font-extrabold tracking-tight text-brand-gray text-xl">
                BrandExco
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

        {/* Contact Info */}
        <div className="border-t border-brand-gray/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                <FiMail className="text-brand-primary" />
              </div>
              <div>
                <p className="text-sm text-brand-gray/50">
                  {lang === "ar" ? "البريد الإلكتروني" : "Email"}
                </p>
                <p className="text-brand-gray">info@brandexco.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-secondary/20 flex items-center justify-center">
                <FiSmartphone className="text-brand-secondary" />
              </div>
              <div>
                <p className="text-sm text-brand-gray/50">
                  {lang === "ar" ? "الهاتف" : "Phone"}
                </p>
                <p className="text-brand-gray">+966 50 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-green-1/20 flex items-center justify-center">
                <FiMapPin className="text-brand-green-1" />
              </div>
              <div>
                <p className="text-sm text-brand-gray/50">
                  {lang === "ar" ? "العنوان" : "Address"}
                </p>
                <p className="text-brand-gray">
                  {lang === "ar"
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-gray/70 text-sm">
              © {currentYear} BrandExco.{" "}
              {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </p>
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
      </div>
    </footer>
  );
}

export default Footer;
