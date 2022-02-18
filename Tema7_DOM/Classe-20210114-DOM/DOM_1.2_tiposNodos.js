document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_1.html

// -------------------------TIPOS DE NODOS-------------------------
// Más adelante se mostrarán más métodos para acceder a los elementos de un documento, pero
// el más habitual es el método getElementById del objeto document. 

// Ejemplo de utilización de getElementById
let seccion = document.getElementById("s1");

// Este método hace que la variable seccion sea una referencia al elemento identificado 
// como s1. Es decir, s1 es un nodo del documento. 

// Todos los nodos tiene una propiedad llamada nodeType.

// Ejemplo de utilización de la propiedad nodeType
console.log(seccion); // Salida: section#s1 ....
console.log(seccion.nodeType); // Salida: 1
console.log(document.nodeType); // Salida: 9

/*
     Lista de posible valores del nodeType
        https://www.w3schools.com/jsref/prop_node_nodetype.asp
*/

// Algunas entradas están muy relacionadas con documentos XML por lo que no son útiles para 
// manipulas documentos HTML. Normalmente, bastará con las tres primeras entradas de las tablas.
// Las constantes definidas en el objeto Node, permiten no tener que aprender los números
// y manejar en su lugar las constantes que son más entendibles.

// La propiedad nodeType es de lectura. Al igual que la propiedad nodeName que permite
// obtener el nombre del nodo. Los valores del nodeName cambian en funciíon del tipo de 
// nodo que tengamos.

// Ejemplo de uso de la propiedad nodeName
console.log(seccion.nodeName); // Salida: SECTION
console.log(s1.nodeType); // Salida: SECTION
console.log(document.nodeName); // Salida: #document

/*
    Lista de posibles valores del nodeName
        https://www.w3schools.com/jsref/prop_node_nodename.asp
*/

// La propiedad nodeValue es capaz de devolver el valor del nodo, aunque en el caso del
// document completo nodeValue devuelve null

// Ejemplo de uso de la propiedad nodeValue
// console.log(seccion.nodeValue);
// console.log(s1.nodeValue); 
// console.log(document.nodeValue);

// Estas tres propiedades (nodeType, nodeName y nodeValue) facilitan obtener la información
// más importante sobre un nodo a la hora de manipularlo.
});