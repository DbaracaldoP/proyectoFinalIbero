const UserN = require('../models/User.js'); //de esta manera se importa el modelo a este controlador para que funcione
function proveedor(request, response) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    console.log('dentro de proveedorController ');
    var params = request.body;
    console.log(params);
    //se realiza la respuesta
    //response.json({ status: true, mensaje: "si llegaron los datos" });
    var user = new UserN(); //crear instancia 
    user.nombreEmpr = params.nombreEmpr;
    user.nombreVen = params.nombreVen;
    user.diaRt = params.diaRt;
    user.telefono = params.telefono;
    user.save((error, userCreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en mongo..." }); //manejo errores en basese de datos
        } else {
            response.status(200).send({ mensaje: "usuario almacenado..." });
        }
    })
}

function contactenos(request, response) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    console.log('dentro de contactenosController ');
    var params = request.body;
    console.log(params);
    //se realiza la respuesta
    //response.json({ status: true, mensaje: "si llegaron los datos" });
    var user = new UserN(); //crear instancia 
    user.nombreEmpr = params.nombreEmpr;
    user.nombreVen = params.nombreVen;
    user.diaRt = params.diaRt;
    user.telefono = params.telefono;
    user.save((error, userCreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en mongo..." }); //manejo errores en basese de datos
        } else {
            response.status(200).send({ mensaje: "usuario almacenado..." });
        }
    })
}
module.exports = {
        proveedor,
        contactenos
    }
    // se maneja ahora el llamado desde rutas