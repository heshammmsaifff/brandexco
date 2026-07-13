// Shared content categories for blog posts and projects.
// The DB stores the `key`; the UI shows the localized label.

export const CATEGORIES = [
  { key: "creative_design", ar: "التصميم الإبداعي", en: "Creative Design" },
  { key: "web_solutions", ar: "حلول الويب", en: "Web Solutions" },
  { key: "digital_marketing", ar: "التسويق الرقمي", en: "Digital Marketing" },
  { key: "brand_strategy", ar: "استراتيجية العلامة التجارية", en: "Brand Strategy" },
];

export const CATEGORY_KEYS = CATEGORIES.map((c) => c.key);

export function categoryLabel(key, lang = "ar") {
  const found = CATEGORIES.find((c) => c.key === key);
  if (!found) return key;
  return lang === "ar" ? found.ar : found.en;
}
