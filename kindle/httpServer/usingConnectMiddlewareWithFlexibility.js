var connect = require("connect");
var intercept = function (req, res, next) {
    console.log('Hello');
    next();
};

var server = connect()
    .use(intercept)
    .use(function onRequest(req, res) {
        res.write('Hello from the Connect Middleware Package\n');
        res.end();
    })
    .listen(3000);