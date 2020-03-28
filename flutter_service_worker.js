'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "4ae58a2efcc68573ca7fa465f4966a7e",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/Calibre%2520Semibold.otf": "85d899ede90fe5568dad1b0438022ab3",
"/assets/assets/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"/assets/assets/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"/assets/assets/image_03.jpg": "055e6e96ec934b93037dc5037f4cdad2",
"/assets/assets/image_01.png": "11e0115482c2152e0d5d189d05779df0",
"/assets/assets/image_02.jpg": "f6342d4e8aaa9e3073dbaeb190f89aa7",
"/assets/assets/custom_icons.ttf": "fa69a076bf31b2b94c13b62f7e61deaf",
"/assets/assets/image_04.jpg": "ccb0274837f8afa57d748ebe9cccfab2",
"/assets/FontManifest.json": "9856dea07860f4b80340256c9a48946d",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "dee65982bc039d3251b38df6f1f9e265",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "9bc027813e27388b2e2492e68c6b1d6c",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
