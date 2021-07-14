const User = require('../models/User.js'); //de esta manera se importa el modelo a este controlador para que funcione
function create(request, respose) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    var params = request.body;
    console.log('dentro de UserController ');
    console.log(params);
    //se realiza la respuesta
    respose.json({ status: true, mensaje: "si llegaron los datos" });
}
module.exports = {
        create
    }
    // se maneja ahora el llamado desde rutas