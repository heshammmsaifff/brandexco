import React, { useEffect } from "react";

const SchemaMarkup = ({ type, data }) => {
  const getSchemaData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BrandExCo",
          url: "https://brandexco.com",
          logo: "https://brandexco.com/logo.png",
          description:
            "وكالة تسويق رقمي متخصصة في السعودية تقدم خدمات SEO، التسويق عبر وسائل التواصل الاجتماعي، وتطوير المواقع الإلكترونية",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "Riyadh",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Arabic", "English"],
            telephone: "+966-50-000-0000",
          },
          sameAs: [
            "https://twitter.com/brandexco",
            "https://linkedin.com/company/brandexco",
            "https://instagram.com/brandexco",
          ],
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "BrandExCo",
          },
          areaServed: {
            "@type": "Country",
            name: "Saudi Arabia",
          },
          serviceType: data.serviceType,
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BrandExCo",
          url: "https://brandexco.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://brandexco.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };

      default:
        return null;
    }
  };

  useEffect(() => {
    const schemaData = getSchemaData();

    if (schemaData) {
      // إزالة أي structured data سابق
      const existingScript = document.querySelector(
        "script[data-schema-markup]"
      );
      if (existingScript) {
        existingScript.remove();
      }

      // إضافة structured data جديد
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema-markup", "true");
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);

      // تنظيف عند unmount
      return () => {
        const script = document.querySelector("script[data-schema-markup]");
        if (script) {
          script.remove();
        }
      };
    }
  }, [type, data]);

  return null; // لا نعيد أي JSX
};

export default SchemaMarkup;
