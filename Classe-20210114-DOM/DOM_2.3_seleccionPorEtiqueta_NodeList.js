document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2_seleccionElementos.html
console.log ("Salida de DOM_2.3_seleccionPorEtiqueta_NodeList.js");

// ----------------------OBJETO NODELIST------------------------------
// El selector por etiqueta devuelve un objeto NodeList que representa una colección de
// nodos del DOM, es decir, una serie de elementos del documento. Es fundamental este 
// objeto porque son muchas las propiedades y métodos de document que devuelven este tipo
// de objetos.

// Aunque los objetos NodeList no son realmente arrays, se manejan en gran medida como si
// lo fueran. Se pueden usar todos los bucles de recorrido vistos en los arrays, se puede
// acceder a cada elemento indicando su índice entre corchetes y dispone de propiedades 
// comunes arrays como length o forEach. Sin embargo, otros métodos de los arrays como 
// slice, sort o join, no están disponibles.

// No obstante, si deseamos disponer de esos métodos y de otros, tendremos que convertir
// este tipo de objetos en un array, lo cual es posible mediante el operador de propagación
// aunque no suele ser necesaria esta conversión.

// Ejemplo de conversión de objeto NodeList a array

let elementosP = document.getElementsByTagName("p");
let arrayElementosP = [...elementosP];
// let arrayElementos= Array.from(elementosP); // Otra manera de convertir un objeto NodeList en Array
console.log(arrayElementosP); // Salida: (5)[p,p,p,p,p]



});