if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "2f404c2bc9d919f3dcad5c8e570bc1bf"
  },
  {
    "url": "index.html",
    "revision": "d97e312f16e6a3df2fe58e1e3dee04df"
  },
  {
    "url": "offline.html",
    "revision": "4a9a5105e6c974c6deec1c8893d00961"
  },
  {
    "url": "precache-manifest.09db7c6b5a35d452c821a554498257a5.js",
    "revision": "09db7c6b5a35d452c821a554498257a5"
  },
  {
    "url": "service-worker.js",
    "revision": "ea5994b69bb8cb4e6ab125699f4e94fb"
  },
  {
    "url": "static/css/main.22d85439.chunk.css",
    "revision": "223d476cca8b7b957e2427abac9ab70c"
  },
  {
    "url": "static/js/2.8fb81001.chunk.js",
    "revision": "bad85833101e7192302a29bc38f096b7"
  },
  {
    "url": "static/js/main.6482f830.chunk.js",
    "revision": "a85394bf3925d4f5885699adc9f84821"
  },
  {
    "url": "static/js/runtime~main.480bd28e.js",
    "revision": "1630e16f042e1e518c891830cd7a65f0"
  },
  {
    "url": "static/media/clear-day.373f225d.svg",
    "revision": "373f225d4708a042f7b4216b7635cd86"
  },
  {
    "url": "static/media/clear-night.182ab6e8.svg",
    "revision": "182ab6e8c25ec48f122a9d8dfc1e6255"
  },
  {
    "url": "static/media/cloudy.2e2d0f6b.svg",
    "revision": "2e2d0f6b0a449b8a5b7062590f10528c"
  },
  {
    "url": "static/media/fog.a3a58712.svg",
    "revision": "a3a58712f992fff6756aef77145a78d8"
  },
  {
    "url": "static/media/hail.38a70558.svg",
    "revision": "38a70558f2b3908fa9c5683a36433cfe"
  },
  {
    "url": "static/media/partly-cloudy-day.6038ecf0.svg",
    "revision": "6038ecf0f8ccef10bae5beb2e63ab8a3"
  },
  {
    "url": "static/media/partly-cloudy-night.4d1becdc.svg",
    "revision": "4d1becdcd6b504518caf807b55212f64"
  },
  {
    "url": "static/media/rain.cb4807cc.svg",
    "revision": "cb4807cc0dd09b16e8cef151ac1a8dd6"
  },
  {
    "url": "static/media/sleet.5f3bdbd0.svg",
    "revision": "5f3bdbd07d4c862d1af61da0e9fe111b"
  },
  {
    "url": "static/media/snow.e2dcecf8.svg",
    "revision": "e2dcecf8e93ce91476db7e31310a1021"
  },
  {
    "url": "static/media/thunderstorm.7cad6ca4.svg",
    "revision": "7cad6ca4117b6a3a8158f4142b943ff3"
  },
  {
    "url": "static/media/tornado.4a222b1e.svg",
    "revision": "4a222b1ee3ba40cc8a7f5a2b12f165d4"
  },
  {
    "url": "static/media/wind.c627cea2.svg",
    "revision": "c627cea223b70cbecd6f595aa7909a1b"
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
