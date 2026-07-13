// Helpers for bilingual content rows.

// Pick a localized field, falling back to the other language if empty.
export function pick(row, base, lang = "ar") {
  if (!row) return "";
  const primary = row[`${base}_${lang}`];
  if (primary) return primary;
  const fallbackLang = lang === "ar" ? "en" : "ar";
  return row[`${base}_${fallbackLang}`] || "";
}

// Build a URL-safe slug. Keeps Arabic letters, converts spaces to dashes.
export function slugify(input) {
  return (input || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
