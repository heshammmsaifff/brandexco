// Performance optimization utilities

/**
 * مراقبة Core Web Vitals
 */
export const monitorCoreWebVitals = () => {
  if (typeof window === "undefined") return;

  // مراقبة Largest Contentful Paint (LCP)
  const observerLCP = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];

    console.log("LCP:", lastEntry.startTime);

    // إرسال البيانات إلى Google Analytics أو أي خدمة أخرى
    if (window.gtag) {
      window.gtag("event", "LCP", {
        value: Math.round(lastEntry.startTime),
        event_category: "Web Vitals",
      });
    }
  });

  observerLCP.observe({ entryTypes: ["largest-contentful-paint"] });

  // مراقبة First Input Delay (FID)
  const observerFID = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log("FID:", entry.processingStart - entry.startTime);

      if (window.gtag) {
        window.gtag("event", "FID", {
          value: Math.round(entry.processingStart - entry.startTime),
          event_category: "Web Vitals",
        });
      }
    });
  });

  observerFID.observe({ entryTypes: ["first-input"] });

  // مراقبة Cumulative Layout Shift (CLS)
  let clsValue = 0;
  let clsEntries = [];

  const observerCLS = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
      }
    });

    console.log("CLS:", clsValue);

    if (window.gtag) {
      window.gtag("event", "CLS", {
        value: Math.round(clsValue * 1000) / 1000,
        event_category: "Web Vitals",
      });
    }
  });

  observerCLS.observe({ entryTypes: ["layout-shift"] });
};

/**
 * تحسين تحميل الخطوط
 */
export const optimizeFontLoading = () => {
  if (typeof window === "undefined") return;

  // إضافة preload للخطوط المهمة
  const fontLinks = [
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap",
  ];

  fontLinks.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.onload = () => {
      link.rel = "stylesheet";
    };
    document.head.appendChild(link);
  });
};

/**
 * تحسين تحميل الصور
 */
export const optimizeImageLoading = () => {
  if (typeof window === "undefined") return;

  // إضافة Intersection Observer للصور
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // مراقبة الصور مع data-src
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * تحسين تحميل JavaScript
 */
export const optimizeScriptLoading = () => {
  if (typeof window === "undefined") return;

  // تحميل scripts غير الحرجة بشكل متأخر
  const nonCriticalScripts = [
    // قائمة بالـ scripts غير الحرجة
  ];

  nonCriticalScripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });
};

/**
 * تحسين التخزين المؤقت
 */
export const optimizeCaching = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  // تسجيل Service Worker للتخزين المؤقت
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("SW registered: ", registration);
    })
    .catch((registrationError) => {
      console.log("SW registration failed: ", registrationError);
    });
};

/**
 * تحسين الأداء العام
 */
export const optimizePerformance = () => {
  monitorCoreWebVitals();
  optimizeFontLoading();
  optimizeImageLoading();
  optimizeScriptLoading();
  optimizeCaching();
};

/**
 * قياس سرعة التحميل
 */
export const measureLoadTime = () => {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log("Page load time:", loadTime + "ms");

    if (window.gtag) {
      window.gtag("event", "page_load_time", {
        value: loadTime,
        event_category: "Performance",
      });
    }
  });
};

/**
 * تحسين التمرير
 */
export const optimizeScrolling = () => {
  if (typeof window === "undefined") return;

  // إضافة passive listeners للتمرير
  const passiveSupported = () => {
    let passive = false;
    const options = Object.defineProperty({}, "passive", {
      get: () => {
        passive = true;
        return passive;
      },
    });

    try {
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e) {
      passive = false;
    }

    return passive;
  };

  if (passiveSupported()) {
    document.addEventListener("scroll", () => {}, { passive: true });
    document.addEventListener("touchstart", () => {}, { passive: true });
    document.addEventListener("touchmove", () => {}, { passive: true });
  }
};

export default {
  monitorCoreWebVitals,
  optimizeFontLoading,
  optimizeImageLoading,
  optimizeScriptLoading,
  optimizeCaching,
  optimizePerformance,
  measureLoadTime,
  optimizeScrolling,
};
