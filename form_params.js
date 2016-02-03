var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser.js"),
    render = require("./render_views.js");

var p = parser.parse;
var r = render.render;

http.createServer(function(req, res) {

    if (console.log(req.url.indexOf("favicon.ico"))>0) { return;  }

    console.log("=========\n\n");
    console.log(req);
    console.log("=========\n\n");

    fs.readFile("./index.html", function(err, html) {
        var html_string = html.toString();

        var parametros = p(req);
        html_string = r(html_string, parametros);

        res.writeHead(200, {"Contet-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080)
