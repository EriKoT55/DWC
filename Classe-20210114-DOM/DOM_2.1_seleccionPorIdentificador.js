document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2_seleccionElementos.html

// ----------------------SELECCIÓN POR IDENTIFICADOR------------------------------
// Se trata de seleccionar un nodo del documento por el valor del atributo id. El
// método que lo permite es getElementById que recibe un string con el valor buscado.
// Retorna como resultado el elemento en sí o bien el valor null si ese identificador no
// se encuentra en el elemento.

// Ejemplo de uso de getElementById
let nodoMain = document.getElementById("principal");
console.log(nodoMain); 

/*
    <main id="Principal">
        <p>Uno</p>
        <p>Dos</p>
        <p>Tres></p>
    </main>
*/

});