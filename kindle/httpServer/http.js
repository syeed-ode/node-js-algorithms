var http = require("kindle/httpServer/http");
var server = http.createServer(function onRequst(req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Welcome to a Simple HTTP Server');
    res.end();
}).listen(3000);