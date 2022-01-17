document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2_seleccionElementos.html
console.log ("Salida de DOM_2.4_seleccionPorClase.js");

// ----------------------SELECCIÓN POR CLASE------------------------------
// Se trata de seleccionar todos los elementos posibles que tiene asignada una clase
// determinada de CSS.

// Si queremos operar desde JS con los elementos de una clase concreta, disponemos del
// método getElementByClassName, el cual devuelve un objeto de tipo NodeList con todos
// los elementos que sean de la clase indicada.

// Ejemplo de uso de getElementByClassName
let listaVerduras = document.getElementsByClassName("verdura");
console.log(listaVerduras); // Salida: [li.verdura, li.verdura, li.verdura, li.verdura]

});