document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2_seleccionElementos.html

// ----------------------SELECCIÓN POR ETIQUETA------------------------------
// La selección por etiqueta permite seleccionar todos los elementos que tengan ese nombre
// de etiqueta. El método que lo consigue es getElementByTagName. En este caso se devuelve 
// una lista de elementos de tipo NodeList. Es decir, no se selecciona un elemento (como
// ocurría con getElementById), sino todos los elementos que usen esa etiqueta.

// Ejemplo de uso de getElementByTagName
let elementosP = document.getElementsByTagName("p");
console.log(elementosP.length); // Salida: 5
console.log(elementosP[0]); // Salida: <p>Uno</p>


// El método getElementsByTagName lo tienen todos los elementos. Si en lugar de utilizar 
// document, usamos un elemento concreto, entonces se buscan los elementos con esa etiqueta
// dentro del que digamos.

// Ejemplo de uso de getElementByTagName con un elemento concreto
let nodoMain = document.getElementById("principal");
let elementosPDeMain = nodoMain.getElementsByTagName("p");
console.log(elementosPDeMain.length); // Salida: 3


});