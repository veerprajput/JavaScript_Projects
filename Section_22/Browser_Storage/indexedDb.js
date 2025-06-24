/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable indent */
const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
    db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
    const db = event.target.result;
    // eslint-disable-next-line max-len
    const indexedDbObjStore = db.createObjectStore('products', {keyPath: 'product'});
    indexedDbObjStore.transaction.oncomplete = function(event) {
        const pStore = db.transaction('products', 'readwrite').objectStore('products');
        pStore.add({product: 'Nintendo Switch', price: 999.289293, description: 'Latest Nintendo Switch OLED LITE, OMG THIS IS CRAZY.'});
    };
};
dbRequest.onerror = function(event) {
    console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
    if (!db) {
        return;
    };
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    productsStore.add({
        product: 'A 132 floor mansion',
        price: 1299888435,
        description: 'Simple, a mansion',
    });
});

retrBtn.addEventListener('click', () => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    const request = productsStore.get('A 132 floor mansion');

    request.onsuccess = function() {
        console.log(request.result);
        return;
    };
});
