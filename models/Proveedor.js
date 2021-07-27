const mongoose = require('mongoose') //importando 
const Schema = mongoose.Schema; //crear un esquema de datos
var ProveedorSchema = new Schema({
    nombreEmpr: String,
    nombreVen: String,
    diaRt: String,
    telefono: String
}); //para realizar el modelo de datos para la base
module.exports = mongoose.model('proveedor',ProveedorSchema);