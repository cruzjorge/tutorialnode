var http = require("http");

var manejador = function(solicitud, respuesta) {
    console.log("Recibimos una respuesta");
    respuesta.end();
}

var servidor = http.createServer(manejador);

servidor.listen(8080);
