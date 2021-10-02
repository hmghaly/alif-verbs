var cacheName = 'alif-verbs';
// var filesToCache = [
//   '',
//   'index.html'
// ];

var filesToCache = [
  '',
  'index.html',
  'txt/verbs-eg_ar-data.json',
  'css/style.css',
  'js/pwa_main.js',
  'js/script.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});