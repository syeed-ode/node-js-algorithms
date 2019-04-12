// One of the most dangerous situations is to have an
// API that behaves synchronously under
// certain conditions and asynchronously under others.

const fs = require('fs');
const cache = {};

function inconsistentRead(filename, callback) {
    if(cache[filename]) {
        // invoked synchronously
        callback(cache[filename]);
    } else {
        // asynchronous function
        fs.readFile(filename, 'utf8', (err, data) => {
            cache[filename] = data;
            callback(data);
        });
    }
}
// the preceding function is dangerous because it behaves
// asynchronously if the cache is not set-which is not
// until the fs.readFile() function returns its results
// but it will also be synchronous for all the subsequent
// requests for a file already in the cache-triggering an
// immediate invocation of the callback.


// client intent on breaking the above code
function createFileReader(filename) {
    const listeners = [];
    inconsistentRead(filename, value => {
        listeners.forEach(listener => listener(value));
    });
    return {
        onDataReady: listener => listeners.push(listener)
    };
}
// When the preceding function is invoked, it creates a new object that acts as a notifier,
// allowing us to set multiple listeners for a file read operation. All the listeners will be
// invoked at once when the read operation completes and the data is available. The preceding
// function uses our inconsistentRead() function to implement this functionality. Let's
// now try to use the createFileReader() function:

// client of createFileReader
const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
    console.log('First call data: ' + data);
    //...sometime later we try to read again from
    //the same file
    // this second operation is never invoked
    const reader2 = createFileReader('data.txt');
    reader2.onDataReady( data => {console.log('Second call data: ' + data);});
});

// During the creation of reader1, our inconsistentRead() function behaves
// asynchronously because there is no cached result available.
        // Therefore, we have all the time in the world to
        // register our listener,
                // as it will be invoked later in another
                // cycle of the event loop, when the read
                // operation completes
// Then, reader2 is created in a cycle of the event loop in which the cache for the
// requested file already exists
        //