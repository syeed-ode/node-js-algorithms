// using process.nextTick() defers the execution of a
// function until the next pass of the event loop
// it takes a callback as an argument and pushes
// it to the top of the event queue, and returns
// immediately.
const fs = require('fs');
const cache = {};
function consistentReadAsync(filename, callback) {
    if(cache[filename]) {
        process.nextTick(() => callback(cache[filename]));
    } else {
        //asynchronous function
        fs.readFile(filename, 'utf8', (err, data) => {
            cache[filename] = data;
            callback(data);
        });
    }
}
// Now, our function is guaranteed to invoke its callback
// asynchronously, under any circumstances