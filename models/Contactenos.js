  
const  mangosta  =  require ( 'mangosta' )  // importando
const  Esquema  =  mangosta . Esquema ;  // crear un esquema de datos
var  contactenosSchema  =  new  Schema ( {
    nombre : String ,
    pAmplio : Cadena ,
    sAónimo : String ,
    correo electrónico : String ,
    fNacimiento : String ,
    genero : String ,
    frecuencia : String
} ) ;  // para realizar el modelo de datos para la base
módulo . exportaciones  =  mangosta . modelo ( 'contactenos' , contactenosSchema ) ;