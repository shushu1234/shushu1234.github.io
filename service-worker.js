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
    "url": "404.html",
    "revision": "f4be2c9013f8769dad149cfc5595bbd3"
  },
  {
    "url": "assets/css/0.styles.f9355484.css",
    "revision": "256a1a335843664760180f4bcbc29d08"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/js/1.df3817d8.js",
    "revision": "e4d06ef9bf2580651b9fde01083d56d1"
  },
  {
    "url": "assets/js/10.5ad4a5e3.js",
    "revision": "04f0fe2bc82de4873db10dfba3fd2800"
  },
  {
    "url": "assets/js/100.399b50d5.js",
    "revision": "fcd7fcb27ffac3a4852da7b6ee340feb"
  },
  {
    "url": "assets/js/101.c18fe18f.js",
    "revision": "07fed04200a9c8002b4db15c27ddbdc8"
  },
  {
    "url": "assets/js/102.5a9ed99e.js",
    "revision": "6b252cdfe29735abb777087ff3b19079"
  },
  {
    "url": "assets/js/103.4698f0d3.js",
    "revision": "b24d299868cb903ed85072d9dfc3d8c9"
  },
  {
    "url": "assets/js/104.87e93bbc.js",
    "revision": "22acbbadeb609e2506547ef37fe8838c"
  },
  {
    "url": "assets/js/105.da38f05a.js",
    "revision": "ee380bc0407203d3a7aa018e72ad0f44"
  },
  {
    "url": "assets/js/106.0b9330bb.js",
    "revision": "0b173782b7a984791705373e59d610f5"
  },
  {
    "url": "assets/js/107.5b8afbdd.js",
    "revision": "ecae0074af8d1e3a3e46c55121de5e2e"
  },
  {
    "url": "assets/js/108.8158be02.js",
    "revision": "b5cb592b9b34a1953f58e0b3f4918f37"
  },
  {
    "url": "assets/js/109.4f87e21d.js",
    "revision": "c3a4094f2fe7c7e9a603f872403eedfb"
  },
  {
    "url": "assets/js/11.f036e47f.js",
    "revision": "ded16f97d38151d115c8f3d3a2684c23"
  },
  {
    "url": "assets/js/110.c5ee74a7.js",
    "revision": "75ddd767e2f93737685d704546e11ebf"
  },
  {
    "url": "assets/js/111.3593aab1.js",
    "revision": "76331e0b34566b5a965be36a1de24ce7"
  },
  {
    "url": "assets/js/112.f8baa492.js",
    "revision": "00bed9754d708a11837b5ec7ebbbec36"
  },
  {
    "url": "assets/js/113.c0ce8434.js",
    "revision": "e1a5768ea1717e1686f71684f6aafdfb"
  },
  {
    "url": "assets/js/114.060bb626.js",
    "revision": "6eb24bb401dee60ca960adaee62cd9e9"
  },
  {
    "url": "assets/js/115.1f2c261c.js",
    "revision": "2b96e7b2ee41bbc1e318fbb4e1ccedcc"
  },
  {
    "url": "assets/js/116.9368b2f2.js",
    "revision": "cdea6bf2f45f46cf4c8741bd65db0ede"
  },
  {
    "url": "assets/js/117.e5845ebb.js",
    "revision": "8e3e1a1af6d3ca93dc0e07602ebb1de2"
  },
  {
    "url": "assets/js/118.9cd3b31c.js",
    "revision": "3ed81e91f474c26aff2b52394e1b7f9f"
  },
  {
    "url": "assets/js/119.6cd02777.js",
    "revision": "962d6f71933c16b0c0105223a50ea50c"
  },
  {
    "url": "assets/js/12.2e215950.js",
    "revision": "4edd4c00b1e27f977c91be11027879ca"
  },
  {
    "url": "assets/js/120.7220e6a4.js",
    "revision": "7d5280602f3c2aa6a2ed5bb3bb197552"
  },
  {
    "url": "assets/js/121.c117aeae.js",
    "revision": "3c00fa09492230c3e8f03539a0cb1e74"
  },
  {
    "url": "assets/js/122.14580373.js",
    "revision": "60919d90f10293d632bb11864f46e9fa"
  },
  {
    "url": "assets/js/123.35c4bd1f.js",
    "revision": "6703b8423b9cda8bdd5502cc12dd03dc"
  },
  {
    "url": "assets/js/124.e9359652.js",
    "revision": "dd6ecbf8189f9d0e5bb6d9078ab100a0"
  },
  {
    "url": "assets/js/125.8378e220.js",
    "revision": "ec9a47550e1db95b71f8188bd84a56c8"
  },
  {
    "url": "assets/js/126.364f2312.js",
    "revision": "ad5c4d86f2c747715ee30b23efdff7d2"
  },
  {
    "url": "assets/js/127.732782cf.js",
    "revision": "cfe7f5d181537849476b2119185be5a0"
  },
  {
    "url": "assets/js/128.584354e7.js",
    "revision": "afbff887cb110f431f663e6c2e941a5b"
  },
  {
    "url": "assets/js/129.06a1a26c.js",
    "revision": "aa78f2cfa87dfb1156d45b00a42f9747"
  },
  {
    "url": "assets/js/13.0606a536.js",
    "revision": "832960dd5f4e4b8454ba0b347c3cc387"
  },
  {
    "url": "assets/js/130.c2a277f4.js",
    "revision": "77750a9c73bdac9a447c7d88f0e236b9"
  },
  {
    "url": "assets/js/131.a86fd2b2.js",
    "revision": "4ef2d35d617aa8e352545b2cf814179a"
  },
  {
    "url": "assets/js/132.35f5b426.js",
    "revision": "3c64bbb7e1660734bc7c2f7857d1c06f"
  },
  {
    "url": "assets/js/133.6ca6aada.js",
    "revision": "56699770f9bb890a544a8b7b03b0bde8"
  },
  {
    "url": "assets/js/134.3c99e14d.js",
    "revision": "55d9f780b56057cb6892448b8b052788"
  },
  {
    "url": "assets/js/135.677fd362.js",
    "revision": "59cc1cf06083193c49edef57520aebb7"
  },
  {
    "url": "assets/js/136.4d79d530.js",
    "revision": "e64365ac630e6b58edf0bb32c85376b8"
  },
  {
    "url": "assets/js/137.9d8dfcd4.js",
    "revision": "083a75a40e7e252b9f8b28a358329699"
  },
  {
    "url": "assets/js/138.a844ddc6.js",
    "revision": "22c856f2fcd7b030472aa34783854f37"
  },
  {
    "url": "assets/js/139.79ee25e2.js",
    "revision": "f2a5c34fb8217415f9c9b87631280d72"
  },
  {
    "url": "assets/js/14.3dfc8da5.js",
    "revision": "e053fb8349584e8231b75c192ce43f6a"
  },
  {
    "url": "assets/js/140.63cc5914.js",
    "revision": "5662ea609109b92b6eb0f8f1bdea3bd1"
  },
  {
    "url": "assets/js/141.9754742b.js",
    "revision": "dbe32f5c5fa7d017ab31783fc00bf5bc"
  },
  {
    "url": "assets/js/142.d2e0fc3a.js",
    "revision": "847d4722bca5701929c4162b050cecb1"
  },
  {
    "url": "assets/js/143.bbe1be45.js",
    "revision": "9bd42f8db7199d68c7faf7481e452924"
  },
  {
    "url": "assets/js/144.df9b3e31.js",
    "revision": "b3856d01dff7542654b2af46064c873a"
  },
  {
    "url": "assets/js/145.f6ea0390.js",
    "revision": "102a5e1af590bd86160ad6daca0a94a3"
  },
  {
    "url": "assets/js/15.d78086f1.js",
    "revision": "d5857ab268e2438303319c09dce2f34d"
  },
  {
    "url": "assets/js/16.c4ec2dd0.js",
    "revision": "53562fef5d3f6e08bb8c6c675a9989ea"
  },
  {
    "url": "assets/js/17.e0853792.js",
    "revision": "d55b5fe247544bbfee56955af5296281"
  },
  {
    "url": "assets/js/18.7ff41c3a.js",
    "revision": "f0f9f0a2e5d14b13a49e8b5da736aec6"
  },
  {
    "url": "assets/js/19.ebca8ff4.js",
    "revision": "a5659dc748f4a4a05d0b1745aff950f3"
  },
  {
    "url": "assets/js/20.a5293014.js",
    "revision": "460db486a20a553489a1f7d4b7f1881a"
  },
  {
    "url": "assets/js/21.6c702731.js",
    "revision": "bbe38f2c6dd7bdd64fe33be4ecf399c8"
  },
  {
    "url": "assets/js/22.bf931c1b.js",
    "revision": "6d350beeab2f3825695e8eb446177ebd"
  },
  {
    "url": "assets/js/23.cda6f142.js",
    "revision": "5ad064a48868fc81b9eddfd49d682999"
  },
  {
    "url": "assets/js/24.61a90ed7.js",
    "revision": "16117021bafbf32c0695b40554a76ef5"
  },
  {
    "url": "assets/js/25.caa8af39.js",
    "revision": "b70a59532eff6d0bf2106798436dac5b"
  },
  {
    "url": "assets/js/26.12712f4e.js",
    "revision": "5911c3814185d03e59c6c293335453e1"
  },
  {
    "url": "assets/js/27.0280641e.js",
    "revision": "9c205b9b82bdce2dec620cdce74327b2"
  },
  {
    "url": "assets/js/28.8ec05a9f.js",
    "revision": "79d7d850bad7f727ddd124aa3c397233"
  },
  {
    "url": "assets/js/29.27b19eaf.js",
    "revision": "f1135fba039d03f91c9e41c45b09515c"
  },
  {
    "url": "assets/js/3.31aa661f.js",
    "revision": "ef3f02aa45ba5e85df92234924ea905b"
  },
  {
    "url": "assets/js/30.874626ac.js",
    "revision": "c26e89a769e8cd3a5af5bfbab1cf5a13"
  },
  {
    "url": "assets/js/31.680f0d86.js",
    "revision": "82ebfa676ec5aa5706593350cc5ae55b"
  },
  {
    "url": "assets/js/32.950c699a.js",
    "revision": "434c56596dc5fb16fe0246e31c029cce"
  },
  {
    "url": "assets/js/33.e2215f94.js",
    "revision": "4c97671efc98e73a1e6cfa365cf4ed10"
  },
  {
    "url": "assets/js/34.9e67b7b8.js",
    "revision": "a65f45d8e357d72b5bc46e3c91d9ae0a"
  },
  {
    "url": "assets/js/35.3d9e6acb.js",
    "revision": "c2991d974233c8e7a3a9bfcd348be1b1"
  },
  {
    "url": "assets/js/36.5db0cbbf.js",
    "revision": "b2dbd88e90c937f6bfab5daf8ef1cfa3"
  },
  {
    "url": "assets/js/37.9a391ad2.js",
    "revision": "41d04c21ca2923f3b10ea6b7782be8d7"
  },
  {
    "url": "assets/js/38.a3019973.js",
    "revision": "3d924183bdcfd9dfd93611f4fd49e136"
  },
  {
    "url": "assets/js/39.031e4a7f.js",
    "revision": "7bcfde57c106da54b55c49073b39ad23"
  },
  {
    "url": "assets/js/4.13440aa5.js",
    "revision": "116161f1f62258a384758b585bb8faef"
  },
  {
    "url": "assets/js/40.64ef35a4.js",
    "revision": "0284c28d28af7f7141f8ff50ee7766a9"
  },
  {
    "url": "assets/js/41.fc7194a1.js",
    "revision": "a7c9ae1559fd1a31d8d8807d35790e66"
  },
  {
    "url": "assets/js/42.4375b99e.js",
    "revision": "4306a838bbf81bfba4fd2fdf749feddf"
  },
  {
    "url": "assets/js/43.dda8f438.js",
    "revision": "20159b14f9d19090d565ac62da584a80"
  },
  {
    "url": "assets/js/44.a4b5c590.js",
    "revision": "acbafc20b50d5c26106a8e7220e4aafb"
  },
  {
    "url": "assets/js/45.389149e5.js",
    "revision": "b3edbf150348a6834e26dd6bc8a966ad"
  },
  {
    "url": "assets/js/46.552916e7.js",
    "revision": "9d028543bb76fead2090d8dd96124c00"
  },
  {
    "url": "assets/js/47.bbc496f1.js",
    "revision": "b6600d5025582fdc5a9a962001e9da0d"
  },
  {
    "url": "assets/js/48.3f9fc3dc.js",
    "revision": "2f8f5eeaccc391b4460c1775d245334c"
  },
  {
    "url": "assets/js/49.0a58453f.js",
    "revision": "b3164bb4beff74f67b2005d19f2b8d5f"
  },
  {
    "url": "assets/js/5.aa506fa9.js",
    "revision": "80090b98342e1a058ed3d009fbaed9ad"
  },
  {
    "url": "assets/js/50.c0bc64a9.js",
    "revision": "47ece9b151b768ebfc85a2f87cc16ff8"
  },
  {
    "url": "assets/js/51.9deefb34.js",
    "revision": "dbe948828a0a6851e10ebc2236c63cc6"
  },
  {
    "url": "assets/js/52.144bfdc3.js",
    "revision": "deadc14bc97994fb13a12b24a0252bc5"
  },
  {
    "url": "assets/js/53.729d271f.js",
    "revision": "5c0e561c11d37bf98c32e38bef4db59d"
  },
  {
    "url": "assets/js/54.03440b3a.js",
    "revision": "abee2c4f6ed4246c0ee0a0c160803951"
  },
  {
    "url": "assets/js/55.9c9b15e3.js",
    "revision": "4ec2669eb4dcc2d0c5d5f95a34a7731e"
  },
  {
    "url": "assets/js/56.b5342b8f.js",
    "revision": "30555b857707f1e4a04c351c374c7117"
  },
  {
    "url": "assets/js/57.a01dd82f.js",
    "revision": "0334f7cc1dcd8a8bce8e563b169b07d6"
  },
  {
    "url": "assets/js/58.842b7ecd.js",
    "revision": "d69a7bbcc8e5e259cac370ef0542d691"
  },
  {
    "url": "assets/js/59.ba1b0dda.js",
    "revision": "d980a3b756c3be90f886be6d13b0b3f6"
  },
  {
    "url": "assets/js/6.a0dccbd5.js",
    "revision": "2be3557a5496186510284bdeabb9b03b"
  },
  {
    "url": "assets/js/60.c09ff492.js",
    "revision": "139b76ddec2d40565b218893e3b5f7b7"
  },
  {
    "url": "assets/js/61.d94ccc4b.js",
    "revision": "a3db55f2f369e513aee6533d9a093c59"
  },
  {
    "url": "assets/js/62.423db177.js",
    "revision": "5683fc74d240e0495b04f4a4c084beef"
  },
  {
    "url": "assets/js/63.9b18c68d.js",
    "revision": "e27966bb2bf02adf96edcb7745eafbcc"
  },
  {
    "url": "assets/js/64.9e0b378d.js",
    "revision": "b1b051afa856463586e28b3ad49242f1"
  },
  {
    "url": "assets/js/65.4120dbca.js",
    "revision": "748877a4a69b2ff1e21ad0b5f890f272"
  },
  {
    "url": "assets/js/66.bf3603ba.js",
    "revision": "1cccf0b3bf380f823d1cff96fb09e12e"
  },
  {
    "url": "assets/js/67.811c3d1c.js",
    "revision": "72187478eb27587bc2e28d7e93b363b9"
  },
  {
    "url": "assets/js/68.5a5e1a0f.js",
    "revision": "dacf5ed865b5aa3a190e045a5863a59e"
  },
  {
    "url": "assets/js/69.5d14dc34.js",
    "revision": "fcc38b75d99482d7aa5967f63d4e1949"
  },
  {
    "url": "assets/js/7.893af4d4.js",
    "revision": "ba0d168cf68645a2ea56e1734ac69a27"
  },
  {
    "url": "assets/js/70.dfc23a1e.js",
    "revision": "a529c44fe5fdf8b8c5d50254e1ae6688"
  },
  {
    "url": "assets/js/71.5c70fe6d.js",
    "revision": "c6f2a8cafabf55d92365225475cd2df1"
  },
  {
    "url": "assets/js/72.5a2f689e.js",
    "revision": "ba381bac42e32a36c7b7ce8aeebb924f"
  },
  {
    "url": "assets/js/73.e15d00d8.js",
    "revision": "3b8381e3a544c773819bdb463f5521cb"
  },
  {
    "url": "assets/js/74.3ea27735.js",
    "revision": "54309158cf09b4b5df686174267c2ecc"
  },
  {
    "url": "assets/js/75.56d7caa9.js",
    "revision": "2a301716250f99e6b40fc0651bffd023"
  },
  {
    "url": "assets/js/76.74ab2df2.js",
    "revision": "f4874bdf070b8ecf114d9243316af4b9"
  },
  {
    "url": "assets/js/77.b6c2dae5.js",
    "revision": "ed2ddcc637c102e5a693efde0f262f19"
  },
  {
    "url": "assets/js/78.716f425b.js",
    "revision": "235ea8cd876ffc3ebe6ec7873ab5a7e6"
  },
  {
    "url": "assets/js/79.2863ac39.js",
    "revision": "24e00b2e0c67a2243257be4295b6c0d1"
  },
  {
    "url": "assets/js/8.31fe85c2.js",
    "revision": "b7a54ee4b155e93b0d2a412050e2bd27"
  },
  {
    "url": "assets/js/80.bcd6ca03.js",
    "revision": "be8005415fb4665b20a27a6994f1e7a0"
  },
  {
    "url": "assets/js/81.63d16af2.js",
    "revision": "4044b2512887a58a06ff3adec7b4521a"
  },
  {
    "url": "assets/js/82.92c8654e.js",
    "revision": "bae091e60b90f92713379ed8f6b379ae"
  },
  {
    "url": "assets/js/83.bb69232b.js",
    "revision": "0c1a59ef7b380a1e732dadb5f0830e54"
  },
  {
    "url": "assets/js/84.83df4b40.js",
    "revision": "4502281de8150ef53ce11ef18cd1ce5e"
  },
  {
    "url": "assets/js/85.03474e01.js",
    "revision": "684084dbf029ff4030a11dd7328b122a"
  },
  {
    "url": "assets/js/86.563c2c53.js",
    "revision": "6cad0bb07677cb79ec0309b132263cee"
  },
  {
    "url": "assets/js/87.b93d505f.js",
    "revision": "5a18564e3a8dcca9c8a33fa2e94351e8"
  },
  {
    "url": "assets/js/88.f8d5777d.js",
    "revision": "ab0ccb7e83e277b19fd00604acf6e67a"
  },
  {
    "url": "assets/js/89.0e1dbf39.js",
    "revision": "aa475a339fdc0829e7ef52dff37be6ec"
  },
  {
    "url": "assets/js/9.be8194db.js",
    "revision": "978f4f443b8cf2052a84845e8766bf54"
  },
  {
    "url": "assets/js/90.d47e4183.js",
    "revision": "5afc461127fc41177542dcda062ceb40"
  },
  {
    "url": "assets/js/91.dae021f1.js",
    "revision": "de35cb40a4610a688822e9a22f3f1f22"
  },
  {
    "url": "assets/js/92.a40f7243.js",
    "revision": "702374b3f850b6501104feeb8e6fd08f"
  },
  {
    "url": "assets/js/93.1db641e3.js",
    "revision": "4ab6fe33e5ea5e10258eec2df3a93aeb"
  },
  {
    "url": "assets/js/94.d1e42f73.js",
    "revision": "2fe28947e503ce166dfc6f5241880a7b"
  },
  {
    "url": "assets/js/95.e5d46a0f.js",
    "revision": "8a11c12cf214382d6ff7e5e54bc26fe7"
  },
  {
    "url": "assets/js/96.0937322d.js",
    "revision": "452dd22c5319dabdae50f47817acc4b6"
  },
  {
    "url": "assets/js/97.1aa4ff15.js",
    "revision": "ed0a089129fb53ead1a5147b9692546d"
  },
  {
    "url": "assets/js/98.d226f8eb.js",
    "revision": "ad261d1fd9a0722151475ae750b16cf7"
  },
  {
    "url": "assets/js/99.4595447c.js",
    "revision": "f365d4987dc936c5b16d5e03813f50e5"
  },
  {
    "url": "assets/js/app.8813fe7b.js",
    "revision": "5bedd40973461adde5995e73519f713d"
  },
  {
    "url": "categories/index.html",
    "revision": "b1d398bed098ea88aa9aef282335ebe4"
  },
  {
    "url": "categories/中等/index.html",
    "revision": "15c51867086087e2ba00c42a148057a2"
  },
  {
    "url": "categories/中等/page/2/index.html",
    "revision": "9906a6f27bdd498c2b790014790ea31c"
  },
  {
    "url": "categories/中等/page/3/index.html",
    "revision": "96727020221f73c3d93d701d78edc04d"
  },
  {
    "url": "categories/中等/page/4/index.html",
    "revision": "f67d3f18accd617c96e089bdab564747"
  },
  {
    "url": "categories/中等/page/5/index.html",
    "revision": "fef04ef0c4d88cab35d46bd4aed2c26b"
  },
  {
    "url": "categories/中等/page/6/index.html",
    "revision": "048a21db8c9ca0491d8e9eaef08232ed"
  },
  {
    "url": "categories/困难/index.html",
    "revision": "3641e6954778312f518734af0d61c521"
  },
  {
    "url": "categories/简单/index.html",
    "revision": "33760f95da3b63f98c32be7ead594a55"
  },
  {
    "url": "categories/简单/page/2/index.html",
    "revision": "a818afdb74884fdd730dfce8551f6f62"
  },
  {
    "url": "categories/简单/page/3/index.html",
    "revision": "e64d55b97121c755dca1ce5fb7a6e939"
  },
  {
    "url": "categories/简单/page/4/index.html",
    "revision": "52570b1be2cd0db2b9681988886f16bd"
  },
  {
    "url": "categories/简单/page/5/index.html",
    "revision": "aaba608d65d8f5ed7cfd8b6289d72ee3"
  },
  {
    "url": "categories/简单/page/6/index.html",
    "revision": "27c605aac1ac661f7920b3479f16f543"
  },
  {
    "url": "categories/简单/page/7/index.html",
    "revision": "0dcbdb4984960f21ef4af3ba0e5fd76e"
  },
  {
    "url": "categories/简单/page/8/index.html",
    "revision": "5641b964974b6534d5c2dba79c7d958b"
  },
  {
    "url": "icons/avatar.png",
    "revision": "743c0a2ae0caa51bb89ed53433572f9e"
  },
  {
    "url": "icons/pwa_icon_192.png",
    "revision": "ee7ed175fde3c1b19d5d5e47331fc253"
  },
  {
    "url": "images/background.jpg",
    "revision": "ed9ac5c5748bf30b63c7ffd56814122a"
  },
  {
    "url": "images/head.png",
    "revision": "743c0a2ae0caa51bb89ed53433572f9e"
  },
  {
    "url": "images/post-bg-universe.png",
    "revision": "98331581c51c9cca2560223c805daccd"
  },
  {
    "url": "index.html",
    "revision": "b85da9645819a20e4205ec50a39e633a"
  },
  {
    "url": "tag/index.html",
    "revision": "f90b3f3147e7d4df6f7f0ce021c19b78"
  },
  {
    "url": "tags/Ordered Map/index.html",
    "revision": "4bfbd7302d77a3acdce7bb14d8373bec"
  },
  {
    "url": "tags/Sliding Window/index.html",
    "revision": "1ca9c6891529c7340ed26534aab97d86"
  },
  {
    "url": "tags/二分查找<Binary Search>/index.html",
    "revision": "379fe727f6ae3be5b18df27149048853"
  },
  {
    "url": "tags/二分查找<Binary Search>/page/2/index.html",
    "revision": "42ee9560e46db3b13419562726c415a2"
  },
  {
    "url": "tags/位运算<Bit Manipulation>/index.html",
    "revision": "dafde10fe961a1fb04de35472342ce4b"
  },
  {
    "url": "tags/分治算法<Divide and Conquer>/index.html",
    "revision": "c22dc8be725da1245c776e1b5277d36c"
  },
  {
    "url": "tags/动态规划<Dynamic Programming>/index.html",
    "revision": "f28640404133a7d8891fc64b2745148b"
  },
  {
    "url": "tags/动态规划<Dynamic Programming>/page/2/index.html",
    "revision": "d98431e54e887a4de0990c08567e2f48"
  },
  {
    "url": "tags/双指针<Two Pointers>/index.html",
    "revision": "49632d8e8f7e5af782b3e07108e302c1"
  },
  {
    "url": "tags/双指针<Two Pointers>/page/2/index.html",
    "revision": "879bdf57ae66c634bb33bda9ef169805"
  },
  {
    "url": "tags/哈希表<Hash Table>/index.html",
    "revision": "5a0d86d443e2077187770acd02528594"
  },
  {
    "url": "tags/哈希表<Hash Table>/page/2/index.html",
    "revision": "24463b0ec33999a830b556d77c86cf34"
  },
  {
    "url": "tags/回溯算法<Backtracking>/index.html",
    "revision": "855db9b61bf76bb5a5865d87722c6f3a"
  },
  {
    "url": "tags/回溯算法<Backtracking>/page/2/index.html",
    "revision": "02be13caf83aaef97f6ea9ed66c81bff"
  },
  {
    "url": "tags/堆<Heap>/index.html",
    "revision": "7b21e4a86c6685627e167351475d0527"
  },
  {
    "url": "tags/字典树<Trie>/index.html",
    "revision": "b05f7e30e126137f010dd51959aab82e"
  },
  {
    "url": "tags/字符串<String>/index.html",
    "revision": "a4cf089daeb3e17e0ec863e476fc4f49"
  },
  {
    "url": "tags/字符串<String>/page/2/index.html",
    "revision": "2b9b80e82938902fa41ed61f99112bde"
  },
  {
    "url": "tags/并查集<Union Find>/index.html",
    "revision": "9c28969361f0d87d9651ad8bc5aef212"
  },
  {
    "url": "tags/广度优先搜索<Breadth-first Search>/index.html",
    "revision": "fcfc3892397e074878d87e14ced05371"
  },
  {
    "url": "tags/排序<Sort>/index.html",
    "revision": "afe5325d41706ee2e1b5eaece0012007"
  },
  {
    "url": "tags/数学<Math>/index.html",
    "revision": "e4efa1721f24ba07fef8baf8584e77a2"
  },
  {
    "url": "tags/数学<Math>/page/2/index.html",
    "revision": "70e608de37aa0864be7c02315ce2af80"
  },
  {
    "url": "tags/数组<Array>/index.html",
    "revision": "1d53bf995fe630e9b17cc261c629339a"
  },
  {
    "url": "tags/数组<Array>/page/2/index.html",
    "revision": "57ac0beb63b5075546bce336e79f2bc9"
  },
  {
    "url": "tags/数组<Array>/page/3/index.html",
    "revision": "4377f7a0f29387bfe7090fad58480490"
  },
  {
    "url": "tags/数组<Array>/page/4/index.html",
    "revision": "76b71ab1c6204154dbcdb1872bf625d2"
  },
  {
    "url": "tags/栈<Stack>/index.html",
    "revision": "1436bece9add8b5517667f28b9eea037"
  },
  {
    "url": "tags/树<Tree>/index.html",
    "revision": "ca05c187379511a6f16964440b2bd28d"
  },
  {
    "url": "tags/树<Tree>/page/2/index.html",
    "revision": "13d68a2a848836a4ab4b8500f445e08f"
  },
  {
    "url": "tags/树<Tree>/page/3/index.html",
    "revision": "0142cc285ce0f2406a0b265c434cf946"
  },
  {
    "url": "tags/树状数组<Binary Indexed Tree>/index.html",
    "revision": "bc5dc8ffb6da20300fa6af9314ffbb4e"
  },
  {
    "url": "tags/深度优先搜索<Depth-first Search>/index.html",
    "revision": "3309a2f775ce776d420b75670dd7a410"
  },
  {
    "url": "tags/深度优先搜索<Depth-first Search>/page/2/index.html",
    "revision": "be358f8a78b534ce117fd3a39640b272"
  },
  {
    "url": "tags/线段树<Segment Tree>/index.html",
    "revision": "fc12bd3e258caef9beb9fbde49e11de6"
  },
  {
    "url": "tags/脑筋急转弯<Brainteaser>/index.html",
    "revision": "0597122c124f87ee1ee5fb53dfb73842"
  },
  {
    "url": "tags/设计<Design>/index.html",
    "revision": "05a6091b2c53540e7b02a2f44c965df1"
  },
  {
    "url": "tags/贪心算法<Greedy>/index.html",
    "revision": "f7f4877b902483f07925c9164e25fce8"
  },
  {
    "url": "tags/链表<Linked List>/index.html",
    "revision": "8e34a0bb68fc39b3b5528db06b801795"
  },
  {
    "url": "tags/链表<Linked List>/page/2/index.html",
    "revision": "33c68a86f15d6d377c2f80a1185ee524"
  },
  {
    "url": "timeline/index.html",
    "revision": "434720dff674a6b060bfe79853e0aadf"
  },
  {
    "url": "views/中等/0002-两数相加.html",
    "revision": "f19f8ba7d45f4d17375539ca6a67cb08"
  },
  {
    "url": "views/中等/0003-无重复字符的最长子串.html",
    "revision": "e6619e92282e609891019e72a611659f"
  },
  {
    "url": "views/中等/0011-盛最多水的容器.html",
    "revision": "01d4d592e3dc1784bb6c7fd4ca685fd2"
  },
  {
    "url": "views/中等/0015-三数之和.html",
    "revision": "582ba286297d3bb78e8cebf53b4772f1"
  },
  {
    "url": "views/中等/0017-电话号码的字母组合.html",
    "revision": "8eee3ff2978da50ee4dc8f6ec0069660"
  },
  {
    "url": "views/中等/0019-删除链表的倒数第N个节点.html",
    "revision": "744d5d033fe6fbdf6d3995be20a389c4"
  },
  {
    "url": "views/中等/0024-两两交换链表中的节点.html",
    "revision": "e14136317026662d3ab7710bbb2e52f9"
  },
  {
    "url": "views/中等/0039-组合总和.html",
    "revision": "3086d91d9cbf381754908908209969fe"
  },
  {
    "url": "views/中等/0040-组合总和 II.html",
    "revision": "7b90d435d34f216998c609923ab3e6fe"
  },
  {
    "url": "views/中等/0046-全排列.html",
    "revision": "2ed9c5ff299c05952157300090a69dd8"
  },
  {
    "url": "views/中等/0047-全排列 II.html",
    "revision": "f4c20ef56d49def616dd90538a548c1a"
  },
  {
    "url": "views/中等/0049-字母异位词分组.html",
    "revision": "e93c036ba94298a65fb1ee0598d7173d"
  },
  {
    "url": "views/中等/0062-不同路径.html",
    "revision": "f5408b5438f6129c6da23a8cdf835aab"
  },
  {
    "url": "views/中等/0063-不同路径 II.html",
    "revision": "71fa1faa0c2de7523815e310958ce478"
  },
  {
    "url": "views/中等/0064-最小路径和.html",
    "revision": "8564d1688acb16b03c2223fde8ebb073"
  },
  {
    "url": "views/中等/0075-颜色分类.html",
    "revision": "01b279c6943e2311b685f2aeeadb9ab2"
  },
  {
    "url": "views/中等/0077-组合.html",
    "revision": "5aac726f19576b6ef0261322cce07f3a"
  },
  {
    "url": "views/中等/0078-子集.html",
    "revision": "49d6f2dd4f89221c9be8f1908c88bd13"
  },
  {
    "url": "views/中等/0079-单词搜索.html",
    "revision": "782720f49f45abf106e39fce2c13e0f8"
  },
  {
    "url": "views/中等/0080-删除排序数组中的重复项 II.html",
    "revision": "6221c7fc4c49e78bd82beaae163dd6ff"
  },
  {
    "url": "views/中等/0086-分隔链表.html",
    "revision": "c0b507364927a0e172d2f468f89cafbf"
  },
  {
    "url": "views/中等/0090-子集 II.html",
    "revision": "b8cb453874d608afd422b02200c023eb"
  },
  {
    "url": "views/中等/0091-解码方法.html",
    "revision": "95f2261ba2c19e28ea76447a89fc63a8"
  },
  {
    "url": "views/中等/0092-反转链表 II.html",
    "revision": "560905c6c4e135cb4b0263e93bc5d8cb"
  },
  {
    "url": "views/中等/0093-复原IP地址.html",
    "revision": "95fac21d6111d80e07da2c30fd259de2"
  },
  {
    "url": "views/中等/0094-二叉树的中序遍历.html",
    "revision": "e2a03cf2f301863c79c1593f5e7d3f4a"
  },
  {
    "url": "views/中等/0098-验证二叉搜索树.html",
    "revision": "6f26eb52001f6db0f560b89d7fee9a09"
  },
  {
    "url": "views/中等/0102-二叉树的层次遍历.html",
    "revision": "9d3fd7813c54f7a94e08c4b182b3f619"
  },
  {
    "url": "views/中等/0103-二叉树的锯齿形层次遍历.html",
    "revision": "2ecacc23e33badb6dc65247939de28e0"
  },
  {
    "url": "views/中等/0113-路径总和 II.html",
    "revision": "63008705287631c091af4df1501ea4e1"
  },
  {
    "url": "views/中等/0120-三角形最小路径和.html",
    "revision": "aa00371a29feee8caf02b9c745a1ae01"
  },
  {
    "url": "views/中等/0129-求根到叶子节点数字之和.html",
    "revision": "257277e18032b6e7663200a9605930eb"
  },
  {
    "url": "views/中等/0144-二叉树的前序遍历.html",
    "revision": "53e9173f486113344ee2f5d938d8d5c7"
  },
  {
    "url": "views/中等/0150-逆波兰表达式求值.html",
    "revision": "b8422dcaebd4adf90be0e36940fd43ee"
  },
  {
    "url": "views/中等/0200-岛屿数量.html",
    "revision": "538b1991ca8f1efe32dc91b7af124d28"
  },
  {
    "url": "views/中等/0208-实现 Trie (前缀树).html",
    "revision": "b680ea524d75cdae7a89d0c58f7f0778"
  },
  {
    "url": "views/中等/0209-长度最小的子数组.html",
    "revision": "bafa1f088c481b0aad70c25d109e0af1"
  },
  {
    "url": "views/中等/0211-添加与搜索单词 - 数据结构设计.html",
    "revision": "0a38c8db5c0cfc391d66fe74ff407411"
  },
  {
    "url": "views/中等/0213-打家劫舍 II.html",
    "revision": "3c7f60c8f4ca1b88d194f23eeba2fff8"
  },
  {
    "url": "views/中等/0215-数组中的第K个最大元素.html",
    "revision": "f17952d3f0d7411dca5402ea6d6d691a"
  },
  {
    "url": "views/中等/0216-组合总和 III.html",
    "revision": "033eeae973ac741234a4c76580d844e4"
  },
  {
    "url": "views/中等/0220-存在重复元素 III.html",
    "revision": "2353c624dc38a8a93fbfb16e3edb9361"
  },
  {
    "url": "views/中等/0230-二叉搜索树中第K小的元素.html",
    "revision": "f00ea2089b3b12fc5a2cf10724669698"
  },
  {
    "url": "views/中等/0279-完全平方数.html",
    "revision": "26e3d3e2e95f8d61ef30b9e4f1e99cf5"
  },
  {
    "url": "views/中等/0300-最长上升子序列.html",
    "revision": "a37f803481137ad696f58f9ea87698db"
  },
  {
    "url": "views/中等/0307-区域和检索 - 数组可修改.html",
    "revision": "5defdaa56393ba266e59200b3b5bf83d"
  },
  {
    "url": "views/中等/0309-最佳买卖股票时机含冷冻期.html",
    "revision": "19c8b3f793288fd260eb84d3a7b7f02c"
  },
  {
    "url": "views/中等/0322-零钱兑换.html",
    "revision": "4d12917940a9e21ea5bc9227301e548b"
  },
  {
    "url": "views/中等/0337-打家劫舍 III.html",
    "revision": "b23d93c40ef313d204b05276ed37805c"
  },
  {
    "url": "views/中等/0343-整数拆分.html",
    "revision": "2822a4ae49e7dbd0ba64db604226b9d7"
  },
  {
    "url": "views/中等/0347-前 K 个高频元素.html",
    "revision": "5f72f9a50b1ca7ecb9ec949b38abc49d"
  },
  {
    "url": "views/中等/0377-组合总和 Ⅳ.html",
    "revision": "bbf3404feb11eef36d9cc3c70ba2cf41"
  },
  {
    "url": "views/中等/0416-分割等和子集.html",
    "revision": "31b39e9a99786e5c522c511effd1f3aa"
  },
  {
    "url": "views/中等/0435-无重叠区间.html",
    "revision": "3786bee480a2e1d1c196074d534be25d"
  },
  {
    "url": "views/中等/0438-找到字符串中所有字母异位词.html",
    "revision": "06c42ca3289031975ace4ac1d8542bc9"
  },
  {
    "url": "views/中等/0450-删除二叉搜索树中的节点.html",
    "revision": "195668770ef2f8318960e83d44cce6cd"
  },
  {
    "url": "views/中等/0451-根据字符出现频率排序.html",
    "revision": "9694dfbe2876ad2f42a976a314a1356c"
  },
  {
    "url": "views/中等/0454-四数相加 II.html",
    "revision": "634b3dca734a211d1bbb351320901dee"
  },
  {
    "url": "views/困难/0023-合并K个排序链表.html",
    "revision": "b5551c904f81cc174a82df849f7c0dc8"
  },
  {
    "url": "views/困难/0051-N皇后.html",
    "revision": "58281d865b5a2802e0f2dc2834479c6f"
  },
  {
    "url": "views/困难/0145-二叉树的后序遍历.html",
    "revision": "b6645e593149b105d23076ae5c52130f"
  },
  {
    "url": "views/困难/0282-给表达式添加运算符.html",
    "revision": "61b9db8a1df538354c1e929dcbca10d1"
  },
  {
    "url": "views/简单/0001-两数之和.html",
    "revision": "07804e31dad2a7753612d3c34c8673b7"
  },
  {
    "url": "views/简单/0007-整数反转.html",
    "revision": "7b855c4d00a338eb9284f076e39771cc"
  },
  {
    "url": "views/简单/0009-回文数.html",
    "revision": "4067837d9b6321cf0c8b67bbfacbd7b4"
  },
  {
    "url": "views/简单/0013-罗马数字转整数.html",
    "revision": "5b904817d048408ab7ec719d6da44ef6"
  },
  {
    "url": "views/简单/0014-最长公共前缀.html",
    "revision": "53bb56593a1cc3b08d41983c8cf9222a"
  },
  {
    "url": "views/简单/0020-有效的括号.html",
    "revision": "a87c363309a81c046ae611429df721b7"
  },
  {
    "url": "views/简单/0021-合并两个有序链表.html",
    "revision": "a4c03b4da7971ddfa686ae0d7545ecee"
  },
  {
    "url": "views/简单/0026-删除排序数组中的重复项.html",
    "revision": "2171d04c00565c8f01e9fbf580edbcaf"
  },
  {
    "url": "views/简单/0027-移除元素.html",
    "revision": "2d7bf103fe482161ae6a5a46286183d1"
  },
  {
    "url": "views/简单/0028-实现 strStr().html",
    "revision": "00d8e21c5f5cf9ecd6cd1cd143fb585c"
  },
  {
    "url": "views/简单/0035-搜索插入位置.html",
    "revision": "edeb4b8955777b7bd51e092e23669b05"
  },
  {
    "url": "views/简单/0053-最大子序和.html",
    "revision": "097574d58f154954031cf99d2034375c"
  },
  {
    "url": "views/简单/0058-最后一个单词的长度.html",
    "revision": "be1dbaeed12d3f149a488be3cc050194"
  },
  {
    "url": "views/简单/0066-加一.html",
    "revision": "14592969d8097eb1ea9bb19a056aa6fd"
  },
  {
    "url": "views/简单/0067-二进制求和.html",
    "revision": "c6e70adb0b4eb3ed32a75711e1406720"
  },
  {
    "url": "views/简单/0069-x 的平方根.html",
    "revision": "b932184efced236bebfb66ae00151d5c"
  },
  {
    "url": "views/简单/0070-爬楼梯.html",
    "revision": "cf4ad0ac153cd11387408e3050f44e72"
  },
  {
    "url": "views/简单/0083-删除排序链表中的重复元素.html",
    "revision": "302839f739e87ade095a94c57f5a0d4d"
  },
  {
    "url": "views/简单/0088-合并两个有序数组.html",
    "revision": "66fa71c551eaa7d5edeb50a551e6e82b"
  },
  {
    "url": "views/简单/0100-相同的树.html",
    "revision": "7f6973f80055443fcd01a44bc34850bf"
  },
  {
    "url": "views/简单/0101-对称二叉树.html",
    "revision": "25358a354733b9ed7a8f61eea61d2100"
  },
  {
    "url": "views/简单/0104-二叉树的最大深度.html",
    "revision": "053ae671044758456931be24d4f4cc3a"
  },
  {
    "url": "views/简单/0107-二叉树的层次遍历 II.html",
    "revision": "cc6dbec4a3e083c678a7af5736d8fabb"
  },
  {
    "url": "views/简单/0108-将有序数组转换为二叉搜索树.html",
    "revision": "e03109934fa20cdd5371e06c944c934e"
  },
  {
    "url": "views/简单/0110-平衡二叉树.html",
    "revision": "dc4dae32b6ad1b94c4de179182feca18"
  },
  {
    "url": "views/简单/0111-二叉树的最小深度.html",
    "revision": "1151e866aa8d42934de37306ff057478"
  },
  {
    "url": "views/简单/0112-路径总和.html",
    "revision": "488e27df6fd94eafa6d1631670598c06"
  },
  {
    "url": "views/简单/0118-杨辉三角.html",
    "revision": "739f2779f4705b2e2ccfad0b017f5f5f"
  },
  {
    "url": "views/简单/0119-杨辉三角 II.html",
    "revision": "e272c79bc313e95d9d2692dee056c666"
  },
  {
    "url": "views/简单/0121-买卖股票的最佳时机.html",
    "revision": "c1b5716e51d29bb8ac40e9345a29a538"
  },
  {
    "url": "views/简单/0125-验证回文串.html",
    "revision": "e2e3bc7234124e3f1f04e3945a53f771"
  },
  {
    "url": "views/简单/0167-两数之和 II - 输入有序数组.html",
    "revision": "f346ab8cf3d4ee0bc51fcb20bff845a1"
  },
  {
    "url": "views/简单/0168-Excel表列名称.html",
    "revision": "01f9a222d25beae561b70c5a387989bb"
  },
  {
    "url": "views/简单/0198-打家劫舍.html",
    "revision": "57bd40e82e681150e3294dfb8f0a2f70"
  },
  {
    "url": "views/简单/0202-快乐数.html",
    "revision": "f43a5204742528c912cd4058c489914b"
  },
  {
    "url": "views/简单/0203-移除链表元素.html",
    "revision": "64270195b599528f7965a2ce7634de7c"
  },
  {
    "url": "views/简单/0205-同构字符串.html",
    "revision": "2ce6378a261003bbc6d24c5657a175d6"
  },
  {
    "url": "views/简单/0206-反转链表.html",
    "revision": "5e8a6462f1a3fca8c6eaf793dd3bb432"
  },
  {
    "url": "views/简单/0217-存在重复元素.html",
    "revision": "5e71c0057992d9ca5939279b23b0edf8"
  },
  {
    "url": "views/简单/0219-存在重复元素 II.html",
    "revision": "97779e9c2b79166d5e5119c5d39f7e4e"
  },
  {
    "url": "views/简单/0226-翻转二叉树.html",
    "revision": "0186a362c0275c483b36c232be75ad6e"
  },
  {
    "url": "views/简单/0235-二叉搜索树的最近公共祖先.html",
    "revision": "214b68c641aeacc65140050ba89ba109"
  },
  {
    "url": "views/简单/0237-删除链表中的节点.html",
    "revision": "5515caff5e561dbb21e88d7a4c626798"
  },
  {
    "url": "views/简单/0242-有效的字母异位词.html",
    "revision": "69f56f257dee70821974e60f62e90ff1"
  },
  {
    "url": "views/简单/0257-二叉树的所有路径.html",
    "revision": "8e89ffbf24f0a5717b909cdb14d6fbe5"
  },
  {
    "url": "views/简单/0278-第一个错误的版本.html",
    "revision": "163c31539faafaeeecfaf87f6e7dbb71"
  },
  {
    "url": "views/简单/0283-移动零.html",
    "revision": "9a01801c06ec72f0c64fdc5037296e05"
  },
  {
    "url": "views/简单/0290-单词规律.html",
    "revision": "d081fd95da3116fec8ff4387ac8da962"
  },
  {
    "url": "views/简单/0303-区域和检索 - 数组不可变.html",
    "revision": "516c72c881157724035308f641a10baa"
  },
  {
    "url": "views/简单/0344-反转字符串.html",
    "revision": "b56a3dbb6f4fb92387f7f6a1c6f41963"
  },
  {
    "url": "views/简单/0345-反转字符串中的元音字母.html",
    "revision": "72584a17d96dd947bc0bc68db1fb3013"
  },
  {
    "url": "views/简单/0349-两个数组的交集.html",
    "revision": "197255d7db579cb9c6587a7ae3b12aef"
  },
  {
    "url": "views/简单/0350-两个数组的交集 II.html",
    "revision": "b6074150aa81bb8905c9f045bf48e1ac"
  },
  {
    "url": "views/简单/0367-有效的完全平方数.html",
    "revision": "11250b01ff6e65571e084ac9c1add28c"
  },
  {
    "url": "views/简单/0387-字符串中的第一个唯一字符.html",
    "revision": "4027cef6c4599b93a5479bf3ea715c5b"
  },
  {
    "url": "views/简单/0404-左叶子之和.html",
    "revision": "b9d2a17a783e7bb9fcdb7bf52843a72d"
  },
  {
    "url": "views/简单/0437-路径总和 III.html",
    "revision": "be779151b9cea65892b2038cdf6d5006"
  },
  {
    "url": "views/简单/0447-回旋镖的数量.html",
    "revision": "91e2d9f99e19431f4b1f998b9996b7c1"
  },
  {
    "url": "views/简单/0455-分发饼干.html",
    "revision": "db4f6d6758abb89bc3bd389cffc1968b"
  },
  {
    "url": "views/简单/0476-数字的补数.html",
    "revision": "3a03ea6880889e8c247687fb2ff502d5"
  },
  {
    "url": "views/简单/0561-数组拆分 I.html",
    "revision": "4f7910a2c9ff1cae280b34891a632f8c"
  },
  {
    "url": "views/简单/0617-合并二叉树.html",
    "revision": "61dbf97f937b7e103540c9acf8c2adc8"
  },
  {
    "url": "views/简单/0637-二叉树的层平均值.html",
    "revision": "0fb47b299659691d885702f6180a788e"
  },
  {
    "url": "views/简单/0724-寻找数组的中心索引.html",
    "revision": "2bced63fd6c97aa5201d697bc9008ed7"
  },
  {
    "url": "views/简单/0728-自除数.html",
    "revision": "5aab493f867e8430aa2811962bcef2ed"
  },
  {
    "url": "views/简单/0746-使用最小花费爬楼梯.html",
    "revision": "db95b8caa6e547c31bcad672fb44897b"
  },
  {
    "url": "views/简单/0771-宝石与石头.html",
    "revision": "056ba843567d15d3011ed326caaa3410"
  },
  {
    "url": "views/简单/0852-山脉数组的峰顶索引.html",
    "revision": "a86da4b1bd8c98da3f429f7e8991c5c0"
  },
  {
    "url": "views/简单/0929-独特的电子邮件地址.html",
    "revision": "58c66d97029ee422f69e4ac6ad4713ae"
  },
  {
    "url": "views/简单/0941-有效的山脉数组.html",
    "revision": "a7a6b1cb55342dd8eaf329d9adbdd30d"
  },
  {
    "url": "views/简单/1033-移动石子直到连续.html",
    "revision": "945d0d18a32c271452665ea958bb7053"
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
