var express = require('express'); //descarga todo el paquete en una vaariable
const port = 3000;
var app = express(); //invoca la funcionalidad de todo el express
require('./rutas/rutas.js') //estube practicando esta pero no me deja desde /rutas/rutas.js toca hacerlo desde el archivo
    //primer paso--para levantar los servicions del puerto
app.use('/', express.static(__dirname + '/')) //me deja el index desde la raiz sin mostrar rutas
app.listen(port, function() {
    console.log('servidor en funcinamiento puerto ' + port)
});