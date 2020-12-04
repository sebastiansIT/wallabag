
const version = '2.3.8'
const activeCacheName = `wallabag_v${version}`

/* Life-Cycle event: Install new Service Worker */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(activeCacheName).then(function(cache) {
      return cache.addAll(
        [
		  'favicon.ico',
		  'img/appicon/apple-touch-icon-152.png',
		  'img/appicon/apple-touch-icon-144.png',
		  'img/appicon/apple-touch-icon-120.png',
		  'img/appicon/apple-touch-icon-114.png',
		  'img/appicon/apple-touch-icon-76.png',
		  'img/appicon/apple-touch-icon-72.png',
		  'img/appicon/apple-touch-icon-57.png',
		  'img/appicon/apple-touch-icon.png'
        ]
      );
    })
  );
});

/* Life-Cycle event: Activate new Service Worker */
self.addEventListener('activate', function(event) {
	event.waitUntil(
		// Delete all caches that are outdated
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName !== activeCacheName
				})
				.map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

/* Interceptor for network access */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
	.then(function(response) {
      return response || fetch(event.request);
    })
  );
});