// The lesson to learn from Zalgo is it is imperative for an API to
// clearly define its nature: either synchronous or asynchronous.
const fs = require('fs');
const cache = {};
function consistentReadSync(filename) {
    if(cache[filename]) {
        return cache[filename];
    } else {
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename];
    }
}


function createFileReader(filename) {
    const listeners = [];
    consistentReadSync(filename, value => {
        listeners.forEach(listener => listener(value));
    });
    return {
        onDataReady: listener => listeners.push(listener)
    };
}

// ***** I have to go back and fix this API *****////
const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
    console.log('First call data: ' + data);
    //...sometime later we try to read again from
    //the same file
    // this second operation is never invoked
    const reader2 = createFileReader('data.txt');
    reader2.onDataReady( data => {console.log('Second call data: ' + data);});
});

