var fs = require("fs");
fs.readFile('simpleserver1.js', 'utf-8', function (err, data){
    if(err) {
        throw err;
    }
    console.log("I am executed immediately after the file reading has started.");
    console.log("File content: ");
    console.log(data);
});