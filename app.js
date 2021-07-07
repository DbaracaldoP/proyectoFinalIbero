//console.log("esta es un aprueba");
//console.log(4 * 6);
var express = require('express'); //descarga todo el paquete en una vaariable
const port = 3000;
var app = express(); //invoca la funcionalidad de todo el express
//segundo paso manejo del post y el get, el post maneja los datos ocultos no vistos por el cliente y el get maneja los datos por al url http://google/13/jhon/6555  las dos primeras son del dominio y las otras son parametros

//primer paso--para levantar los servicions del puerto
app.listen(port, function() {
    console.log('servidor en funcinamiento puerto ' + port);
});