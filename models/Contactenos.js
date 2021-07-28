const mongoose = require('mongoose') //importando 
const Schema = mongoose.Schema; //crear un esquema de datos
var contactenosSchema = new Schema({
    nombre: String,
    pApellido: String,
    sApellido: String,
    email: String,
    fNacimiento: String,
    genero: String,
    frecuencia: String
}); //para realizar el modelo de datos para la base
module.exports = mongoose.model('contactenos',contactenosSchema);