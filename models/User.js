//1. paso crear el modelo para la conexion con la base de datos 
const mongoose = require('mongoose') //importando 
const Schema = mongoose.Schema; //crear un esquema de datos
var ProveedorSchema = new Schema({
    nombreEmpr: String,
    nombreVen: String,
    diaRt: String,
    telefono: Number
}); //para realizar el modelo de datos para la base
module.export = mongoose.model('user', ProveedorSchema);
//2. paso es crear un controlador, para que administro las rutas y el modelo vista controlador MVC
//se crea en la carpeta controles


//el funcionamiento es modelo controlador rutas...
//como biene biene del index, pasa ruta, llama controlador, llama modelo y este con la base de datos