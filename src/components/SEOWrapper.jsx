import React from "react";
import SEO from "./SEO.jsx";
import SchemaMarkup from "./SchemaMarkup.jsx";

const SEOWrapper = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  lang = "ar",
  structuredData = null,
  schemaType = null,
  schemaData = null,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
        lang={lang}
        structuredData={structuredData}
      />
      {schemaType && schemaData && (
        <SchemaMarkup type={schemaType} data={schemaData} />
      )}
    </>
  );
};

export default SEOWrapper;
