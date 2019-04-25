var http = require("kindle/httpServer/http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var server = http.createServer(function onRequest(req, res){
    var urlParts = url.parse(req.url);
    var page = 'pages' + urlParts.pathname;
    fs.exists(page, function fileExists(exists) {
        if(exists) {
            res.writeHead(200, {'Content-Type':'text/plain'});
            fs.createReadStream(page).pipe(res);
        } else {
            res.write('Page Not Found');
            res.end();
        }
    });
}).listen(3000);