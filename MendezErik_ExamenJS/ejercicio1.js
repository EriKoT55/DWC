/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */

const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro; // Contiene el patrón para comprobar el número de registro
    let patronNombreCompleto; // Contiene el patrón para comprobar el nombre
    let patronNumeroSS; // Contiene el patrón para comprobar el número de la seguridad social
    let patronDireccion; // Contiene el patrón para comprobar la dirección

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    //Si se a introducido uno de los siguientes se hace su respectiva comprobacion y devulve true o false si la comprobacion es correcta

    if(tipoComprobacion=='numeroRegistro'){

        patronNumeroRegistro=/^[A-Z]{3}[0-9]{3}/;

        if(patronNumeroRegistro.test(elementoAComprobar)==true){
            return true
        }else{
            return false
        }

    }else if(tipoComprobacion=='nombre'){

        patronNombreCompleto =/^[A-Z]{1}[a-z][" "]{1}[A-Z]{1,2}\.$/;
       
        if(patronNombreCompleto.test(elementoAComprobar)==true){
            return true;
        }else{
            return false;
        }

    }else if(tipoComprobacion=='numeroSS'){

        patronNumeroSS=/[0-9]{1,9}/;

        if(patronNumeroSS.test(elementoAComprobar)==true){
            return true;
        }else{
            return false;
        }

    }else if(tipoComprobacion=='direccion'){

        patronDireccion=/((^(C\/|Av){1}[A-Z]{1}[A-Za-z])|(^(C\/|Av){1}[A-Z]{1}([A-Za-z][" "]{1})+))\,[0-9]+/;

        if(patronDireccion.test(elementoAComprobar)==true){
            return true;
        }else{
            return false;
        }

    }

}
