//1. paso crear el modelo para la conexion con la base de datos 
const mongoose = require('mongoose') //importando 
const Schema = mongoose.Schema; //crear un esquema de datos
var UserSchema= new Schema({
    nombre: String,
    apellido: String,
    edad: String,
    telefono: String
});
var ProveedorSchema = new Schema({
    nombre: String,
    nombreVen: String,
    diaRt: String,
    telefono: String
}); //para realizar el modelo de datos para la base

var contactenosSchema = new Schema({
    nombre: String,
    pApellido: String,
    sApellido: String,
    email: String,
    fNacimiento: String,
    genero: String,
    frecuencia: String
}); //para realizar el modelo de datos para la base
module.exports = mongoose.model('proveedor', ProveedorSchema);
module.exports = mongoose.model('contactenos', contactenosSchema);
module.exports = mongoose.model('user',UserSchema);   
//2. paso es crear un controlador, para que administro las rutas y el modelo vista controlador MVC
//se crea en la carpeta controles


//el funcionamiento es modelo controlador rutas...
//como biene biene del index, pasa ruta, llama controlador, llama modelo y este con la base de datos