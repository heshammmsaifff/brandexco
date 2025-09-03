import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const Breadcrumbs = ({ lang = "ar" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbMap = {
    services: lang === "ar" ? "الخدمات" : "Services",
    about: lang === "ar" ? "من نحن" : "About Us",
    contact: lang === "ar" ? "تواصل معنا" : "Contact",
    seo: lang === "ar" ? "تحسين محركات البحث" : "SEO",
    "social-media":
      lang === "ar" ? "التسويق الاجتماعي" : "Social Media Marketing",
    "web-development": lang === "ar" ? "تطوير المواقع" : "Web Development",
    "web-design": lang === "ar" ? "تصميم المواقع" : "Web Design",
    branding: lang === "ar" ? "إدارة العلامات التجارية" : "Branding",
  };

  const homeLabel = lang === "ar" ? "الرئيسية" : "Home";

  return (
    <nav
      className="py-4 px-6 bg-brand-dark/50 backdrop-blur-sm"
      aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb navigation"}
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-brand-gray/70 hover:text-brand-primary transition-colors duration-200"
              aria-label={homeLabel}
            >
              {homeLabel}
            </Link>
          </li>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = breadcrumbMap[name] || name;

            return (
              <li key={name} className="flex items-center">
                <FiChevronLeft className="text-brand-gray/50 mx-2" />
                {isLast ? (
                  <span
                    className="text-brand-primary font-medium"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-brand-gray/70 hover:text-brand-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
