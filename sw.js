if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "static/css/main.4ea25ec8.chunk.css",
    "revision": "2f8d409f9e9fcacdb20a9d00d2292599"
  },
  {
    "url": "index.html",
    "revision": "9a699f55eff04df7dd7c5cb6109df827"
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
