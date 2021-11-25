
let tipoVia;
let nombreVia;
let numeroEdificio;
let codigoPoatal;
let planta;
let puerta;
let propietario;

let seguir=false;
do{
    tipoVia= prompt("Introduzca el tipo de via(calle/pasaje/avenida/bulevar):");
    if(isNaN(tipoVia)||isNaN(nombreVia)){
        seguir=false;
    }else{
        seguir=true;
    }

}while(seguir==true);