if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "static/css/main.5d83feb8.chunk.css",
    "revision": "6832c85d56f4824e54b679156a39d8a2"
  },
  {
    "url": "index.html",
    "revision": "1d25bfed4262990790e3e2eb8f064f34"
  },
  {
    "url": "offline.html",
    "revision": "09b9feaee1fbd9d3f27253d24b7911c9"
  },
  {
    "url": "404.html",
    "revision": "1a6cf0261a93d2c998c813d5588856bb"
  }
]);

  workbox.routing.registerRoute(
    new RegExp('https://cors-anywhere.herokuapp.com/'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'weather-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  )

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
