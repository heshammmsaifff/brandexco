import React from "react";
import { Helmet } from "react-helmet-async";

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

  const schemaData = getSchemaData();

  if (!schemaData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
