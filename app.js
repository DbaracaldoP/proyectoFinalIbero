  
global . express  =  require ( 'express' ) ;  // descarga todo el paquete en una vaariable-- la variable global me deja ir a rutas
constante puerto   =  3000 ;
global . aplicación  =  express ( ) ;  // invoca la funcionalidad de todo el express
require ( './rutas/rutas.js' )  // estube practicando esta pero no me deja desde /rutas/rutas.js toca hacerlo desde el archivo ... se soluciono con global.express
    // primer paso - para levantar los servicions del puerto
global . mangosta  =  require ( 'mangosta' ) ;  // esta herramienta tiene todo el paquete descargado
// se realiza la coneccion a la base de datos enviando unos parametros y la funcion presenta si se conecta o no para levantar el paquete mongo
mangosta . connect ( 'mongodb: //127.0.0.1: 27017 / panisofMean' ,  {  useNewUrlParser : true ,  useUnifiedTopology : true  } ,  ( error ,  res )  =>  {
    if  ( error )  {
        consola . log ( error ) ;
    }  más  {
        consola . log ( 'Conexión correcta en mongo ...' ) ;
    }
} )
aplicación . use ( '/' ,  express . static ( __dirname  +  '/' ) )  // me deja el índice desde la raiz sin mostrar rutas
    // este es para levantar el servidor
aplicación . listen ( port ,  function ( )  {        // este es el servidor de expres
    consola . log ( 'servidor en funcinamiento puerto dentro de apps de experss'  +  puerto )
} ) ;