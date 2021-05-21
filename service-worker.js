if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b94acd13662831f011ab13172d1ee778","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b94acd13662831f011ab13172d1ee778","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"df7d7fd295c26581b611d68f365be2ee","url":"static/css/21.45bb297a.chunk.css"},{"revision":"0aee82a351acea6495f5c3eb96f640bb","url":"static/js/0.d6778aa1.chunk.js"},{"revision":"8c834f416a560dc105601b976f7103fb","url":"static/js/1.c34f7b07.chunk.js"},{"revision":"50d3e9fc88454bcf3f34ee4ddd8001f4","url":"static/js/10.f67cdd06.chunk.js"},{"revision":"c78f03c4e2f1d20cbe1097247b8c321a","url":"static/js/11.8eb504ee.chunk.js"},{"revision":"f0d2da1398986873619a89cfc18a4334","url":"static/js/12.4566ed6c.chunk.js"},{"revision":"d32ae1204109e150c75c121a3e1cd8eb","url":"static/js/13.4fca8c66.chunk.js"},{"revision":"5379ccd274f0da4499bfc34f8ea8f449","url":"static/js/14.28a601fb.chunk.js"},{"revision":"de703cd5ad3781961a58f0c38799f315","url":"static/js/15.aaee0ac4.chunk.js"},{"revision":"1173e863a0cf84727a0d5d2b51c7d353","url":"static/js/16.1065039c.chunk.js"},{"revision":"dce0ff2f41809c4ac92e9be56615d859","url":"static/js/17.14e43186.chunk.js"},{"revision":"d684dd36173ae0119b49a5fe002977fb","url":"static/js/18.5e5db135.chunk.js"},{"revision":"1c65f41762b43899e5340cbfb385f652","url":"static/js/19.2e7dc918.chunk.js"},{"revision":"9017d426b38f42d4a4e2c364b6747d09","url":"static/js/2.5b711af0.chunk.js"},{"revision":"b98cdeb423589a31266b6a80b9f5c0c5","url":"static/js/20.5de242a5.chunk.js"},{"revision":"59cb04e30694a8bc878c058070edb9f6","url":"static/js/21.3e494c82.chunk.js"},{"revision":"fd1a1a40075f17bdf29f0a7145c9d72a","url":"static/js/22.03637533.chunk.js"},{"revision":"1fc3f499fc4991e655e9a3e67962dbe3","url":"static/js/23.7414c61c.chunk.js"},{"revision":"32649bf328cbbf7b7f78dcd3b6236f17","url":"static/js/24.8b672f04.chunk.js"},{"revision":"d05cd10ba52d3832b8b235638837a32c","url":"static/js/25.460ed633.chunk.js"},{"revision":"5d61d9fc283d2836a4d4c49cd97caf8a","url":"static/js/26.5fa4ef3f.chunk.js"},{"revision":"345a5b547498fe289768315b33e177c4","url":"static/js/27.3afc5fe8.chunk.js"},{"revision":"7299509441f4b2c509a5aeaaa78fba2a","url":"static/js/28.4f4396e9.chunk.js"},{"revision":"2c3ff3a6c4662f774368634898b9af3b","url":"static/js/29.740be246.chunk.js"},{"revision":"3913dd47cf570d7e29267a915c13cab4","url":"static/js/3.5c155bdd.chunk.js"},{"revision":"5f55c0236f4b2cc8adc0b04b4c12fee9","url":"static/js/30.a1887e86.chunk.js"},{"revision":"4df267b928f1d11c887a4645a1d15130","url":"static/js/31.9a728fc8.chunk.js"},{"revision":"f9f41733b60a478faa7fbd1b9221a45b","url":"static/js/32.86a17829.chunk.js"},{"revision":"e66e6026de8288264b6d959425bbeeec","url":"static/js/33.4f26e54b.chunk.js"},{"revision":"f803b47f37a1e5a270746f3fd5083a89","url":"static/js/34.523c123d.chunk.js"},{"revision":"6905c102e0498f59ffd60e6796f5ac79","url":"static/js/35.254d9a55.chunk.js"},{"revision":"ed28e89e8a4634723823e2bffbb2efda","url":"static/js/36.d331c977.chunk.js"},{"revision":"fc1cd45bc03666ce6b387868bf8f05f5","url":"static/js/37.180b5d3b.chunk.js"},{"revision":"5583ec5aaf9596e69afa90fa05658436","url":"static/js/38.0a8c0c98.chunk.js"},{"revision":"4a4d997f9e9c647d27b97f3a445d9874","url":"static/js/39.569547e5.chunk.js"},{"revision":"713a08aa0a4dd1c8eaa053d89bb1f03d","url":"static/js/4.24efcc05.chunk.js"},{"revision":"4f91fdaa2ce6134a350753d3daf05fed","url":"static/js/40.df7d01ad.chunk.js"},{"revision":"b35d5487c83af5dbe47efd9466e210b9","url":"static/js/41.5df1f62f.chunk.js"},{"revision":"a166d7c77ee97ea494c1d1e67d692938","url":"static/js/42.d549608d.chunk.js"},{"revision":"b1cf70659258a3764895efe3de6ee924","url":"static/js/43.0e98d7a1.chunk.js"},{"revision":"ec3e5a54b1e2a1e6f5e46de94ee568ca","url":"static/js/44.1a60c759.chunk.js"},{"revision":"6199364814cc4e346e9542a783fffac2","url":"static/js/45.a40887b8.chunk.js"},{"revision":"5b91216eaeda873f392880246e4e6036","url":"static/js/46.8b2e747d.chunk.js"},{"revision":"7f03ebf09303eb8dc75ad529646a401e","url":"static/js/5.831433a2.chunk.js"},{"revision":"4ae1cc5fdb5f24a1fd21bc61d4fd9924","url":"static/js/6.a8b58fd4.chunk.js"},{"revision":"9327800d46c914d2cfa3a29c30bb4eae","url":"static/js/7.bed78f24.chunk.js"},{"revision":"8e2d0c0d03a1f2f8a71333064d3d93f4","url":"static/js/main.d19c14f6.chunk.js"},{"revision":"a0f7dc111a2d34da912a803301065703","url":"static/js/runtime-main.66714432.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
