  
// var express = require ('express'); // descarga todo el paquete en una vaariable
puerto  constante =  3000 ;
// var app = express (); // invoca la funcionalidad de todo el express
var  bodyParser  =  require ( 'body-parser' ) ;
const  { respuesta }  =  require ( 'express' ) ;
aplicación . use ( bodyParser . json ( ) ) ;  // configuracion para decir que soporta fomratos Json en app
aplicación . use ( bodyParser . urlencoded ( {  extendido : verdadero  } ) ) ;  // que viene extendido de la codificacion de la url
consola . log ( 'dentro rutas ...' ) ;
const  UserController  =  require ( '../controllers/UserController.js' ) ;      // esta appi es para mongo

// segundo paso manejo del post y el get, el post maneja los datos ocultos no vistos por el cliente y el get maneja los datos por al url http: // google / 13 / jhon / 6555 las dos primeras son del dominio y las otras son parametros
// el primer parametro de la funcion es un oido y el otro es una respuesta
aplicación . get ( '/ paginax' ,  function ( solicitud ,  respuesta )  {
    respuesta . send ( 'hola mundo desde la app con otro dato hora 11:23' ) ;
} ) ;
// segundo paso manejo del post y el get, el post maneja los datos ocultos no vistos por el cliente y el get maneja los datos por al url http: // google / 13 / jhon / 6555 las dos primeras son del dominio y las otras son parametros
// el primer parametro de la funcion es un oido y el otro es una respuesta
aplicación . get ( '/ paginax / suma /: valor1 /: valor2 /' ,  function ( request ,  response )  {
    consola . log ( 'dentro de rutas suma' ) ;
    var  suma  =  parseInt ( solicitud . params . valor1 )  +  parseInt ( solicitud . params . valor2 )
    respuesta . send ( 'hola mundo desde la app con otro dato hora 1:46 pm suma:'  +  suma ) ;
} ) ;

aplicación . get ( '/ paginax / resta /: valor1 /: valor2' ,  function ( request ,  response )  {
    consola . log ( 'dentro de rutas resta' ) ;
    var  resta  =  parseInt ( solicitud . params . valor1 )  -  parseInt ( solicitud . params . valor2 )
    respuesta . send ( 'hola mundo desde la app con otro dato hora 1:46 pm resta:'  +  resta ) ;
} ) ;

// para hacer un metodo podo post se requiere la libreria bodyparser
aplicación . post ( '/ paginax' ,  function ( req ,  resp )  {
    consola . log ( 'dentro de la publicación' ) ;
    consola . log ( req ) ;
    if  ( req . body . nombre  ==  "" )  {
        resp . json ( {  mensage : "ingrese un nombre"  } ) ;
        devolver  falso ;
    }  más
        resp . json ( {  estado : verdadero  } ) ;
} ) ;

var  datos  =  [ ] ;
aplicación . get ( '/ paginax / registro /: nombre' ,  function ( request ,  salida )  {
        consola . log ( 'dentro de rutas registro' ) ;
        datos . push ( {  nombre : request . params . nombre  } ) ;
        salida . json ( datos ) ;
    } )
    // este¿a es para la página proveedor ingreso proveedor
aplicación . post ( '/ proveedor' ,  function ( request ,  salida )  {
        consola . log ( 'dentro de rutas post registro ingreso por archivos de bodega' ) ;
        consola . log ( solicitud . cuerpo ) ;
        salida . json ( {  stado : 'OK proveedor'  } ) ;
        UserController . proveedor ( solicitud ,  salida ) ;
    } )
    // esta es para el fomulario de contactos se ejecuta bien para ingreso usuarios en la opcion contactenos
aplicación . post ( '/ contactenos' ,  function ( request ,  salida )  {
        consola . log ( 'dentro de rutas post registro ingreso por archivos de contactenos' ) ;
        consola . log ( solicitud . cuerpo ) ;
        salida . json ( {  stado : 'OK contactenos'  } ) ;
        UserController . contactenos ( solicitud ,  salida ) ;
    } )
    // appi para usar con mongo
// de esta manera se puede ver el flujo de informacion request y response
aplicación . publicar ( '/ crear' ,  función ( solicitud ,  respuesta )  {
    // se invoca para llamar al Usercontrolador y este al usuario userjs y este lo guarda en mongo
    // lo primero es importar los datos linea 9 de este codigo
    consola . log ( 'pase por rutas' ) ;
    UserController . crear ( solicitud ,  respuesta ) ;

} ) ;