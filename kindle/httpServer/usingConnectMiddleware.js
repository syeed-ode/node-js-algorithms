var connect = require("connect");
var http = require("kindle/httpServer/http");

var app = connect().use(function (req, res){
    res.end('Hello from Connect!\n');
});

http.createServer(app).listen(3000);