const fs = require('fs');

function readJson(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        let parsed;
        if(err) {
            // propagate the error and exit the current function
            // notice that only the error is passed to the
            // callback
            // notice that we return immediately
            return callback(err);
        }

        // the try/catch block assures the thrown error
        // does not propagate to the event loop. If does get to the
        // event loop, it will never propagate to the next call back
        // PLEASE SEE PG 67 [46] for  applicable anti-pattern
        try {
            parsed = JSON.parse(data);
        } catch (err) {
            // notice that only the error is passed to the
            // callback
            // notice that we return immediately
            return callback(err);
        }

        // notice how the callback is invoked
        // the err is nulled out when passing a valid result
        callback(null, parsed);
    });
}