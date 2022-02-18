document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_3.html
console.log ("Salida de DOM_3.2_propiedadInnerHTML`.js");

// -----------------------PROPIEDAD INNERHTML------------------------
// Es una propiedad similar a textContent, pero que sí perminte leer y manipular las 
// etiquetas HTML.

// Ejemplo de uso de innerHTML para mostrar el contenido de un elemento
console.log(document.getElementById("pSol").innerHTML);
/* Salida:
    El Sol, una estrella de tipo espectral <strong>G2</strong> que contiene más del 
    99,85% de la masa del sistema. Con un diámetro de 1400000Km, se compone de un 
    75% de hidrógeno, un 20% de helio y un 5% de oxígeno, hierro y otros elementos.
*/

// Ejemplo de uso de innerHTML para modificar el contenido de un elemento
document.getElementById("pSol").innerHTML = "Soy el <strong>Sol</Strong>";

;});