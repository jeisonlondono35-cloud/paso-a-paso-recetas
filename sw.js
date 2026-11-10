/* Modo sin conexión: guarda la app y las fotos que ya viste. */
var CACHE = 'paso-a-paso-v1';
var BASE = ['./', 'index.html', 'styles.css', 'app.js', 'extras.js', 'recetas.js', 'recetas-mas.js', 'familias-1.js', 'familias-2.js', 'familias-3.js',
  'japonesa.js', 'cocinas-1.js', 'cocinas-2.js', 'fotos-familias.js', 'creditos.js', 'manifest.json', 'icono.svg'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(BASE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (/\/fotos\//.test(url.pathname)) {
    // Fotos: primero la copia guardada (no cambian)
    e.respondWith(caches.match(e.request).then(function (r) {
      return r || fetch(e.request).then(function (resp) {
        var copia = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
        return resp;
      });
    }));
    return;
  }
  // La app: primero internet (para recibir actualizaciones) y, si no hay, la copia guardada
  e.respondWith(fetch(e.request).then(function (resp) {
    var copia = resp.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
    return resp;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); }); }));
});
