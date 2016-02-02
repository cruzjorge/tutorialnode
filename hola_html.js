var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        res.writeHead(200, {"Contet-Type":"application/json"});
        res.write(JSON.stringify({nombre: "Uriel", username: "uriel"}));
        res.end();
    });
}).listen(8080)
