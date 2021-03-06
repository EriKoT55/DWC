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
    let patronNumeroRegistro=/^[A-ZÁÉÍÚÓÇ]{3}[0-9]{3}$/; // Contiene el patrón para comprobar el número de registro
    let patronNombreCompleto=/^[A-ZÁÉÍÚÓÇ]{1}[a-záéíóúç]+\s[A-Z]{1,2}\.$/; // Contiene el patrón para comprobar el nombre
    let patronNumeroSS=/^[0-9]{1,9}$/; // Contiene el patrón para comprobar el número de la seguridad social
    let patronDireccion=/^(Av\.|C\/){1}[A-ZÁÉÍÚÓÇ]{1}[a-záéíóúçñ]+\s?[a-záéíóúçñ\s]*\,\s[0-9]+$/; // Contiene el patrón para comprobar la dirección
                                                                //METO EL ESPACIO DENTRO DE LOS CORCHETES
                                                                // YA QUE ASI SE PERMITE CUALQUIERA DE LO
                                                                // QUE ESTA DENTRO Y PUEDO LETRA/S, PALABRA/S
                                                                // Y ESPACIO/S       
    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

