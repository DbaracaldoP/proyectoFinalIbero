líneas (9 sloc)  346 bytes
  
const  mangosta  =  require ( 'mangosta' )  // importando
const  Esquema  =  mangosta . Esquema ;  // crear un esquema de datos
var  ProveedorSchema  =  new  Schema ( {
    nombreEmpr : String ,
    nombreVen : String ,
    diaRt : String ,
    telefono : String
} ) ;  // para realizar el modelo de datos para la base
módulo . exportaciones  =  mangosta . modelo ( 'proveedor' , ProveedorSchema ) ;