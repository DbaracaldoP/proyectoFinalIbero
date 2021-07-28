global.UserN = require('../models/User.js'); //de esta manera se importa el modelo a este controlador para que funcione
global.ProveedorN = require('../models/Proveedor.js');
global.ContactenosN= require('../models/Contactenos.js');
//creadion paquete de instrucciones para crear
function create(request,response){
    console.log('dentro de createUserController ');
    var params = request.body;
    console.log(params);
    var user =new UserN;
    user.nombre= params.nombre;
    user.apellido= params.apellido;
    user.edad= params.edad;
    user.telefono= params.telefono;
    //ahora se van aenviar los datos al modelo
    user.save((error, userCreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en mongo..." }); //manejo errores en basese de datos
        } else {
            response.status(200).send({ mensaje: "usuario almacenado..." });
        }
    })
}

function proveedor(request, response) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    console.log('dentro de proveedorUserController ');
    var params = request.body;
    console.log(params);
    //se realiza la respuesta
    //response.json({ status: true, mensaje: "si llegaron los datos" });
    var proveedor = new ProveedorN(); //crear instancia 
    proveedor.nombreEmpr= params.nombreEmpr;    
    proveedor.nombreVen = params.nombreVen;
    proveedor.diaRt = params.diaRt;
    proveedor.telefono = params.telefono;
    proveedor.save((error, proveedorCreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en mongo..." }); //manejo errores en basese de datos
        } else {
            response.status(200).send({ mensaje: "usuario almacenado..." });
        }
    })
}

function contactenos(request, response) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    console.log('dentro de contactenosUserController ');
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
    create,
        proveedor
        //contactenos

    }
    // se maneja ahora el llamado desde rutas