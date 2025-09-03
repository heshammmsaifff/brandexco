import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  lang = "ar",
  structuredData = null,
}) => {
  useEffect(() => {
    // تحديث عنوان الصفحة
    document.title = title;

    // تحديث وصف الصفحة
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // تحديث الكلمات المفتاحية
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // تحديث Open Graph
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:type", type);
    updateMetaTag("og:url", url);
    if (image) {
      updateMetaTag("og:image", image);
    }

    // تحديث Twitter Cards
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:url", url);
    if (image) {
      updateMetaTag("twitter:image", image);
    }

    // تحديث canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // إضافة Structured Data
    if (structuredData) {
      let script = document.querySelector("script[data-seo-structured-data]");
      if (script) {
        script.remove();
      }
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-structured-data", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // تنظيف عند unmount
    return () => {
      // إزالة Structured Data المضافة
      const script = document.querySelector("script[data-seo-structured-data]");
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, image, url, type, structuredData]);

  // دالة مساعدة لتحديث meta tags
  const updateMetaTag = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  return null; // لا نعيد أي JSX
};

export default SEO;
