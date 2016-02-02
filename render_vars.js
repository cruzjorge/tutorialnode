var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err, html) {
        var html_string = html.toString();
        // Expresión regular que busca en el HTML donde haya {x}
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "CódigoFacilito";

        // variables ['nombre']
        for (var i = 0; i < variables.length; i++) {
            // Lo ejecutamos como código de JavaScript
            // Para obtner el valor de dicha variable
            var value = eval(variables[i]);

            // Reemplazar el contenido con llaves {x} por su valor correspondiente
            html_string =  html_string.replace("{"+variables[i]+"}", value);
        }

        res.writeHead(200, {"Contet-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080)
