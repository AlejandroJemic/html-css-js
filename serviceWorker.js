let version ='version2';
let isCacheEnabled = false; // true = enable cache, false = disable cache

self.addEventListener('install', (event) => {
    console.log('service worker installed and running');
    self.skipWaiting(); // Force the waiting service worker to become active immediately

    //para hacer un ceche ofline de la pagina 
if (isCacheEnabled) {
        caches.open(version)
        .then(cache => {
            cache.addAll([
                './',
                './page4.html',
                './pages.css',
                './page4.js',
                'normalize.css'
            ])
            .then(() => console.log('page added to cache'))
            .catch(err => console.log(err))
        })
}

});
self.addEventListener('activate', (event) => {
    console.log('service worker activated');
    event.waitUntil(clients.claim()); // Take control of all pages immediately

    // delete old cached pages
    if (isCacheEnabled) {
        caches.keys()
        .then(keys => {
            keys.forEach(key => {
                if(key !== version) {
                    caches.delete(key);
                }
            })
        })
    }
})

self.addEventListener('fetch', (event) => {
    console.log('service worker intercepting fetch request', event.request.url);

    if (isCacheEnabled) {
        event.respondWith(
            (async () => {
                // Primero, intenta obtener la respuesta del caché.
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) {
                    // Responde con el contenido del caché.
                    return cachedResponse;
                }

                try {
                    // Si no está en caché, haz una solicitud de red.
                    const networkResponse = await fetch(event.request);

                    // Clona la respuesta para poder almacenarla en caché y devolverla.
                    const responseClone = networkResponse.clone();

                    // Abre el caché y almacena la respuesta.
                    const cache = await caches.open('my-cache'); // Cambia 'my-cache' por el nombre de tu caché.
                    cache.put(event.request, responseClone);

                    return networkResponse;
                } catch (error) {
                    // Maneja cualquier error de red aquí.
                    console.error('Fetching failed:', error);
                    throw error; // Opcional: vuelve a lanzar el error si quieres manejarlo más arriba.
                }
            })()
        );
    }
});


self.addEventListener('error', (event) => {
    console.error('service worker error', event.error);
})


self.addEventListener('message', (event) => {
    console.log('service worker received message', event.data);
    if (event.data === 'ping') {
        console.log('pong');
        event.source.postMessage('pong');
    }
})