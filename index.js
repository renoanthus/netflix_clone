var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejss");
});

server.listen(3000);

console.log("server running on http://localhost:3000");