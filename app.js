global.express = require('express'); //descarga todo el paquete en una vaariable-- la variable global me deja ir a rutas
const port = 3000;
global.app = express(); //invoca la funcionalidad de todo el express
global.mongoose = require('mongoose'); //esta herramienta tiene todo el paquete descargado
//se realiza la coneccion a la base de datos enviando unos parametros y la funcion presenta si se conecta o no para levantar el paquete mongo
mongoose.connect('mongodb://127.0.0.1:27017/panisofMean', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Conexión correcta en mongo...');
    }
})
require('./rutas/rutas.js') //estube practicando esta pero no me deja desde /rutas/rutas.js toca hacerlo desde el archivo... se soluciono con global.express
    //primer paso--para levantar los servicions del puerto
app.use('/', express.static(__dirname + '/')) //me deja el index desde la raiz sin mostrar rutas
    //este es para levantar el servidor
app.listen(port, function() {       //este es el servidor de expres
    console.log('servidor en funcinamiento puerto dentro de apps de experss  ' + port)
});