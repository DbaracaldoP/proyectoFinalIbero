//console.log("esta es un aprueba");
//console.log(4 * 6);
var express = require('express'); //descarga todo el paquete en una vaariable
const port = 3000;
var app = express(); //invoca la funcionalidad de todo el express
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json()); //configuracion para decir que soporta fomratos Json en app
app.use(bodyParser.urlencoded({ extended: true })); //que viene extendido de la codificacion de la url
//primer paso--para levantar los servicions del puerto
app.listen(port, function() {
    console.log('servidor en funcinamiento puerto ' + port)
});
//segundo paso manejo del post y el get, el post maneja los datos ocultos no vistos por el cliente y el get maneja los datos por al url http://google/13/jhon/6555  las dos primeras son del dominio y las otras son parametros
//el primer parametro de la funcion es un oido y el otro es una respuesta
app.get('/paginax', function(request, response) {
    response.send('hola mundo desde la app con otro dato hora 11:23');
});
//segundo paso manejo del post y el get, el post maneja los datos ocultos no vistos por el cliente y el get maneja los datos por al url http://google/13/jhon/6555  las dos primeras son del dominio y las otras son parametros
//el primer parametro de la funcion es un oido y el otro es una respuesta
app.get('/paginax/suma/:valor1/:valor2/', function(request, response) {
    console.log('dentro de rutas suma ');
    var suma = parseInt(request.params.valor1) + parseInt(request.params.valor2)
    response.send('hola mundo desde la app con otro dato hora 1:46 pm suma: ' + suma);
});

app.get('/paginax/resta/:valor1/:valor2', function(request, response) {
    console.log('dentro de rutas resta ');
    var resta = parseInt(request.params.valor1) - parseInt(request.params.valor2)
    response.send('hola mundo desde la app con otro dato hora 1:46 pm resta: ' + resta);
});

//para hacer un metodo podo post se requiere la libreria bodyparser
app.post('/paginax', function(req, resp) {
    console.log('dentro post');
    console.log(req);
    if (req.body.nombre == "") {
        resp.json({ mensage: "ingrese un nombre " });
        return false;
    } else
        resp.json({ status: true });
});

var datos = [];
app.get('/paginax/registro/:nombre', function(request, salida) {
    console.log('dentro de rutas registro');
    datos.push({ nombre: request.params.nombre });
    salida.json(datos);
})