const CACHE_NAME = 'arch-v1';
const assets = ['./index.html', './mesero.html', './cocina.html', './admin.html', './tv.html', './manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
