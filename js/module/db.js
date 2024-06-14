let openRequest = indexedDB.open("storage", 1);

openRequest.onupgradeneeded = function(event) {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('books')) {
        db.createObjectStore('books', {keyPath: 'id'});
    }
};