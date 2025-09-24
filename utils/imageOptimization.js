// Utility functions for image optimization and SEO

/**
 * تحسين الصور للـ SEO
 * @param {string} src - مسار الصورة
 * @param {string} alt - النص البديل
 * @param {string} title - عنوان الصورة
 * @param {object} options - خيارات إضافية
 * @returns {object} - خصائص الصورة المحسنة
 */
export const optimizeImage = (src, alt, title = "", options = {}) => {
  const {
    loading = "lazy",
    decoding = "async",
    sizes = "100vw",
    className = "",
    ...rest
  } = options;

  return {
    src,
    alt: alt || "صورة BrandExCo",
    title: title || alt,
    loading,
    decoding,
    sizes,
    className: `optimized-image ${className}`.trim(),
    ...rest,
  };
};

/**
 * إنشاء srcset للصور المتجاوبة
 * @param {string} baseSrc - مسار الصورة الأساسي
 * @param {array} sizes - أحجام الصور
 * @returns {string} - srcset string
 */
export const createSrcSet = (baseSrc, sizes = [320, 640, 960, 1280, 1920]) => {
  const srcSet = sizes.map((size) => {
    const width = size;
    const height = Math.round((size * 9) / 16); // نسبة 16:9
    return `${baseSrc}?w=${width}&h=${height} ${width}w`;
  });

  return srcSet.join(", ");
};

/**
 * تحويل الصورة إلى WebP إذا كان مدعوماً
 * @param {string} src - مسار الصورة
 * @returns {string} - مسار الصورة المحسنة
 */
export const getWebPSrc = (src) => {
  if (
    typeof window !== "undefined" &&
    window.Modernizr &&
    window.Modernizr.webp
  ) {
    return src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  }
  return src;
};

/**
 * إنشاء صورة متجاوبة مع WebP
 * @param {string} src - مسار الصورة
 * @param {string} alt - النص البديل
 * @param {object} options - خيارات إضافية
 * @returns {object} - خصائص الصورة المتجاوبة
 */
export const createResponsiveImage = (src, alt, options = {}) => {
  const webpSrc = getWebPSrc(src);
  const srcSet = createSrcSet(src, options.sizes);
  const webpSrcSet = createSrcSet(webpSrc, options.sizes);

  return {
    ...optimizeImage(src, alt, options.title, options),
    srcSet,
    webpSrc,
    webpSrcSet,
    sizes:
      options.sizes ||
      "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };
};

/**
 * تحسين الصور للشبكات الاجتماعية
 * @param {string} src - مسار الصورة
 * @param {string} alt - النص البديل
 * @returns {object} - خصائص الصورة للشبكات الاجتماعية
 */
export const optimizeForSocialMedia = (src, alt) => {
  return {
    src: `${src}?w=1200&h=630&fit=crop`,
    alt,
    width: 1200,
    height: 630,
    type: "image/jpeg",
  };
};

/**
 * إنشاء صورة مع lazy loading
 * @param {string} src - مسار الصورة
 * @param {string} alt - النص البديل
 * @param {string} placeholder - صورة placeholder
 * @returns {object} - خصائص الصورة مع lazy loading
 */
export const createLazyImage = (
  src,
  alt,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
) => {
  return {
    src: placeholder,
    "data-src": src,
    alt,
    loading: "lazy",
    className: "lazy-image",
    onLoad: (e) => {
      e.target.src = e.target.dataset.src;
      e.target.classList.remove("lazy-image");
    },
  };
};

export default {
  optimizeImage,
  createSrcSet,
  getWebPSrc,
  createResponsiveImage,
  optimizeForSocialMedia,
  createLazyImage,
};
