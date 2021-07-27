//1. paso crear el modelo para la conexion con la base de datos 
const mongoose = require('mongoose') //importando 
const Schema = mongoose.Schema; //crear un esquema de datos
var UserSchema= new Schema({
    nombre: String,
    apellido: String,
    edad: String,
    telefono: String
});
// me toco dejar este elemento solo ya que no se los otros me generan problema
module.exports = mongoose.model('user',UserSchema);   //aqui es donde se nombra la colleccion d ela base de datos PanisofMean y le agregan una s al final
//2. paso es crear un controlador, para que administro las rutas y el modelo vista controlador MVC
//se crea en la carpeta controles
//el funcionamiento es modelo controlador rutas...
//como biene biene del index, pasa ruta, llama controlador, llama modelo y este con la base de datos