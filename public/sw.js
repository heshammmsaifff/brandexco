// Service Worker for caching and performance optimization

const CACHE_NAME = "brandexco-v1.0.0";
const STATIC_CACHE = "brandexco-static-v1.0.0";
const DYNAMIC_CACHE = "brandexco-dynamic-v1.0.0";

// الملفات التي سيتم تخزينها مؤقتاً
const STATIC_FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon.png",
  "/logo-shape.png",
];

// استراتيجية التخزين المؤقت: Cache First
const cacheFirst = async (request) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    return new Response("Network error", { status: 503 });
  }
};

// استراتيجية التخزين المؤقت: Network First
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response("Network error", { status: 503 });
  }
};

// تثبيت Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("Caching static files...");
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log("Service Worker installed");
        return self.skipWaiting();
      })
  );
});

// تفعيل Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("Service Worker activated");
        return self.clients.claim();
      })
  );
});

// اعتراض الطلبات
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل الطلبات غير GET
  if (request.method !== "GET") {
    return;
  }

  // تجاهل الطلبات من مصادر خارجية (إذا لزم الأمر)
  if (url.origin !== self.location.origin) {
    return;
  }

  // استراتيجية التخزين المؤقت حسب نوع الملف
  if (request.destination === "document") {
    // للصفحات: Network First
    event.respondWith(networkFirst(request));
  } else if (request.destination === "image") {
    // للصور: Cache First
    event.respondWith(cacheFirst(request));
  } else if (
    request.destination === "script" ||
    request.destination === "style"
  ) {
    // للـ CSS و JavaScript: Cache First
    event.respondWith(cacheFirst(request));
  } else {
    // للطلبات الأخرى: Network First
    event.respondWith(networkFirst(request));
  }
});

// معالجة الرسائل من التطبيق الرئيسي
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// تنظيف التخزين المؤقت القديم
const cleanupOldCaches = async () => {
  const cacheNames = await caches.keys();
  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE];

  for (const cacheName of cacheNames) {
    if (!currentCaches.includes(cacheName)) {
      await caches.delete(cacheName);
      console.log("Deleted old cache:", cacheName);
    }
  }
};

// تنظيف دوري للتخزين المؤقت
setInterval(cleanupOldCaches, 24 * 60 * 60 * 1000); // كل 24 ساعة
