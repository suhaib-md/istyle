// I Style Leathers — Basic Service Worker (offline shell)
// V1: caches the shell so the homepage loads offline.
// V2: upgrade to a full Workbox strategy when real product images ship.

const CACHE_NAME = "istyle-v1";
const PRECACHE_URLS = ["/"];

self.addEventListener("install", (event) => {
  // Take control immediately without waiting for old SW to finish
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  // Remove any stale caches from previous SW versions
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only handle top-level navigation requests
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request).catch(() =>
      // Network failed — serve cached shell
      caches.match("/")
    )
  );
});
