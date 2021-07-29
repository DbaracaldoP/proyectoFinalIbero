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
function updateUsuario(request,response){
    console.log("dentro de updateUsuario ");
    var params = request.body;
    //console.log(params);
    var idUser =params.idUser; 
    //console.log(idUser)  
    //response.json({mensaje:"ok dentro updateUsuario"}); //segundo paso crar la ruta
    UserN.findByIdAndUpdate(idUser,params,(error, userUpdate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en la insercion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            response.status(200).send({ mensaje: "usuario actualizado..."});  
            console.log("usuario modificado ",userUpdate);          
        }
    })
}
function deleteUsuario(request,response){
    console.log("dentro de deleteUsuario "); 
    var idUser =request.body.idUser; 
    //console.log(idUser)  
    //response.json({mensaje:"ok dentro updateUsuario"}); //segundo paso crar la ruta    
    UserN.findByIdAndDelete(idUser,(error, userUpdate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en la elilminacion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            response.status(200).send({ mensaje: "usuario borrado..."});  
            console.log("usuario borrado ",userUpdate);          
        }
    })
}

function proveedor(request, response) {
    //se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    console.log('dentro de proveedorUserController ');
    var params = request.body;
    //console.log(params);
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
function updateProveedor(request,response){
    console.log("dentro de updateProveedor ");
    var params = request.body;
    console.log(params);
    var idProv =params.idProv; 
    console.log(idProv)  
    response.json({mensaje:"ok dentro updateUsuario"}); //segundo paso crar la ruta
    ProveedorN.findByIdAndUpdate(idProv,params,(error, provUpdate) => {
        if (error) {
            //response.status(500).send({ mensaje: "se presento un error en la insercion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            //response.status(200).send({ mensaje: "proveedor actualizado..."});    //genera conflicto el json con los console no
            console.log("proveedor modificado ",provUpdate);          
        }
    })
}
function deleteProveedor(request,response){
    console.log("dentro de deleteUsuario "); 
    var idProv =request.body.idProv; 
    //console.log(idUser)  
    //response.json({mensaje:"ok dentro updateUsuario"}); //segundo paso crar la ruta    
    ProveedorN.findByIdAndDelete(idProv,(error, userUpdate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en la elilminacion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            response.status(200).send({ mensaje: "Proveedor borrado..."});  
            console.log("Proveedor borrado ",userUpdate);          
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
    var contacto = new ContactenosN(); //crear instancia 
    contacto.nombre = params.nombre;
    contacto.pApellido = params.pApellido;
    contacto.sApellido= params.sApellido;
    contacto.email = params.email;
    contacto.fNacimiento=params.fNacimiento;
    contacto.genero=params.genero;
    contacto.frecuencia = params.frecuencia;
    contacto.save((error, contactorCreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en mongo..." }); //manejo errores en basese de datos
        } else {
            response.status(200).send({ mensaje: "usuario almacenado..." });
        }
    })
}
function updateContactenos(request,response){
    console.log("dentro de updateProveedor ");
    var params = request.body;
    console.log(params);
    var idCont =params.idCont; 
    console.log(idCont)  
    response.json({mensaje:"ok dentro updateUsuario"}); //segundo paso crar la ruta
    ContactenosN.findByIdAndUpdate(idCont,params,(error, contUpdate) => {
        if (error) {
            //response.status(500).send({ mensaje: "se presento un error en la insercion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            //response.status(200).send({ mensaje: "proveedor actualizado..."});    //genera conflicto el json con los console no
            console.log("contacto modificado ",contUpdate);          
        }
    })
}
function deleteContacto(request,response){
    console.log("dentro de updateProveedor ");
    var idCont = request.body.idCont;
   
    ContactenosN.findByIdAndDelete(idCont,(error, contUpdate) => {
        if (error) {
            //response.status(500).send({ mensaje: "se presento un error en la insercion..." }); //manejo errores en basese de datos
            console.log(error);
        } else {           
            //response.status(200).send({ mensaje: "proveedor actualizado..."});    //genera conflicto el json con los console no
            console.log("contacto Borrado ",contUpdate);          
        }
    })
}
module.exports = {
        create,
        proveedor,
        contactenos,
        updateUsuario,
        deleteUsuario,
        updateProveedor,
        deleteProveedor,
        updateContactenos,
        deleteContacto        
    }
    // se maneja ahora el llamado desde rutas
//28-07-21