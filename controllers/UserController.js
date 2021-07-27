global . UserN  =  require ( '../models/User.js' ) ;  // de esta manera se importa el modelo a este controlador para que funcione
global . ProveedorN  =  require ( '../models/Proveedor.js' ) ;
global . ContactenosN =  require ( '../models/Contactenos.js' ) ;
// creadion paquete de instrucciones para crear
función  crear ( solicitud , respuesta ) {
    consola . log ( 'dentro de createUserController' ) ;
    var  params  =  solicitud . el cuerpo ;
    consola . log ( parámetros ) ;
    var  user  = new  UserN ;
    usuario . nombre =  params . nombre ;
    usuario . apellido =  params . apellido ;
    usuario . edad =  params . edad ;
    usuario . telefono =  params . telefono ;
    // ahora se van aenviar los datos al modelo
    usuario . guardar ( ( error ,  userCreate )  =>  {
        if  ( error )  {
            respuesta . estado ( 500 ) . enviar ( {  mensaje : "se presento un error en mongo ..."  } ) ;  // manejo errores en basese de datos
        }  más  {
            respuesta . estado ( 200 ) . enviar ( {  mensaje : "usuario almacenado ..."  } ) ;
        }
    } )
}

 proveedor de función ( solicitud ,  respuesta )  {
    // se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    consola . log ( 'dentro de proveedorUserController' ) ;
    var  params  =  solicitud . el cuerpo ;
    consola . log ( parámetros ) ;
    // se realiza la respuesta
    //response.json ({status: true, mensaje: "si llegaron los datos"});
    var  proveedor  =  nuevo  ProveedorN ( ) ;  // crear instancia
    proveedor . nombreEmpr =  params . nombreEmpr ;    
    proveedor . nombreVen  =  params . nombreVen ;
    proveedor . diaRt  =  params . diaRt ;
    proveedor . telefono  =  params . telefono ;
    proveedor . guardar ( ( error ,  proveedorCreate )  =>  {
        if  ( error )  {
            respuesta . estado ( 500 ) . enviar ( {  mensaje : "se presento un error en mongo ..."  } ) ;  // manejo errores en basese de datos
        }  más  {
            respuesta . estado ( 200 ) . enviar ( {  mensaje : "usuario almacenado ..."  } ) ;
        }
    } )
}

función  contactenos ( solicitud ,  respuesta )  {
    // se capturan los datos, se verifican que lleguen antes de enviar a la base de datos
    consola . log ( 'dentro de contactenosUserController' ) ;
    var  params  =  solicitud . el cuerpo ;
    consola . log ( parámetros ) ;
    // se realiza la respuesta
    //response.json ({status: true, mensaje: "si llegaron los datos"});
    var  user  =  new  UserN ( ) ;  // crear instancia
    usuario . nombreEmpr  =  params . nombreEmpr ;
    usuario . nombreVen  =  params . nombreVen ;
    usuario . diaRt  =  params . diaRt ;
    usuario . telefono  =  params . telefono ;
    usuario . guardar ( ( error ,  userCreate )  =>  {
        if  ( error )  {
            respuesta . estado ( 500 ) . enviar ( {  mensaje : "se presento un error en mongo ..."  } ) ;  // manejo errores en basese de datos
        }  más  {
            respuesta . estado ( 200 ) . enviar ( {  mensaje : "usuario almacenado ..."  } ) ;
        }
    } )
}
módulo . exportaciones  =  {
        crear ,
        proveedor
        // contactenos
        
    }
    // se maneja ahora el llamado desde rutas