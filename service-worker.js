/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "192.png",
    "revision": "3d94ded37836df49eacc2d9710b621d1"
  },
  {
    "url": "404.html",
    "revision": "9be6be5bb0f86f81c74a5106519c6e09"
  },
  {
    "url": "assets/css/0.styles.98c41c19.css",
    "revision": "fcf91d057bcb941a8206707f1c8caa2a"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
  },
  {
    "url": "assets/img/1.65339bf8.png",
    "revision": "65339bf8aed0416aeabe54efd7b91ac3"
  },
  {
    "url": "assets/img/iconfont.49414ec1.svg",
    "revision": "49414ec1e8ab596ac10fcfdafc058152"
  },
  {
    "url": "assets/img/image-20200504162559224.d29dfda8.png",
    "revision": "d29dfda89e21c0280fc304efcf07b19d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dac745b3.js",
    "revision": "1ad1b983ae65bceed78fd6f87bf55dc8"
  },
  {
    "url": "assets/js/11.8249a0d1.js",
    "revision": "81d3d6df075b7e9a22e35a33426135ac"
  },
  {
    "url": "assets/js/12.1c6bd20b.js",
    "revision": "1ef6193fdb009169fa04d00c12936585"
  },
  {
    "url": "assets/js/13.b9d39d78.js",
    "revision": "85547f8980865645cf58cf93e0d49fd2"
  },
  {
    "url": "assets/js/14.bc3f7e10.js",
    "revision": "d8556a131e7f42b3a4051ce640f5ff2f"
  },
  {
    "url": "assets/js/2.1ab89cd9.js",
    "revision": "61fe97cfce5b98babad398cb44e48349"
  },
  {
    "url": "assets/js/3.20e6585b.js",
    "revision": "1334119ce7ef79ae2d42155ce0a3add9"
  },
  {
    "url": "assets/js/4.8d6e97e4.js",
    "revision": "fbe7fed61c65b8c1a9e977143277d5d0"
  },
  {
    "url": "assets/js/5.e5ab0d2f.js",
    "revision": "1f7c08368a5579a7036be8ada70a01ec"
  },
  {
    "url": "assets/js/6.75b41931.js",
    "revision": "82e8bf8375d4a397fb5c18ff2e0625a6"
  },
  {
    "url": "assets/js/7.e2d9b2fa.js",
    "revision": "29602ad8dfe617c3812e54cf91a27de2"
  },
  {
    "url": "assets/js/8.33b9ec27.js",
    "revision": "0c9cdfed738922ea1d5bab3866a28932"
  },
  {
    "url": "assets/js/9.1194af56.js",
    "revision": "6a753516c729e2fe4760e787d8292cee"
  },
  {
    "url": "assets/js/app.231f0754.js",
    "revision": "63562b34bb389c6afca5fba113a272c4"
  },
  {
    "url": "index.html",
    "revision": "4f5686d802ffa21591e4bce18795abdf"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "page-nav-test.html",
    "revision": "b4dc0e7633872c6200ef2b2a4fc66020"
  },
  {
    "url": "qrcode_qq.jpg",
    "revision": "0ae72783a4ae41b17131444b25c8bb93"
  },
  {
    "url": "qrcode.png",
    "revision": "a529573d8d48bd853ed8d41b9b964d2a"
  },
  {
    "url": "volunteers.html",
    "revision": "afaf8f7edbca5179b325eccb6df81b12"
  },
  {
    "url": "vuepress-plugin-baidu-tongji-analytics/index.html",
    "revision": "942d51c0937f8b75c40c9ea713d5d92f"
  },
  {
    "url": "vuepress-plugin-tags/index.html",
    "revision": "d033a8b153138509adaa0dfac4b82ffc"
  },
  {
    "url": "vuepress-plugin-toolbar/index.html",
    "revision": "c044c69f50bed00472bf8a43d9bc48f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
