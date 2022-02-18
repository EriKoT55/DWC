document.addEventListener("DOMContentLoaded", function(event) { 
// Documento HTML a utilizar: DOM_2.html
console.log ("Salida de DOM_2.6_obtenerYModificarElDOM.js");

// ----------------------OBTENER Y MODIFICAR EL DOM------------------------------
// 1. Obtener el valor de un atributo
    // Los elementos del DOM disponen del método getAttribute para obtener el valor de un
    // atributo concreto.

    // Ejemplo de uso de get Attribute
    let listaLi = document.querySelectorAll("li");
    console.log(listaLi);
    for (let li of listaLi) {
        console.log(li.getAttribute("class"));
    }
    /* Salida:
        2   verdura
            carne
            verdura
            carne
        2   hidrato
            carne
            verdura
            hidrato
    */

    // Si un elemento no tiene el atributo indicado, getAttribute devuelve null.

// 2. Modificar el valor de un atributo
    // El método setAttribute es el que permite esta operación. El primer parámentro será el 
    // nombre del elemento y el segundo el nuevo valor.

    // Ejemplo de uso de setAttribute
    let listaVerduras = document.getElementsByClassName("verdura");
    console.log(listaVerduras);
    // listaVerduras[0].setAttribute("class","carne");
    let listaCarnes = document.getElementsByClassName("carne");
    console.log(listaCarnes[0]); // Salida: <li class="carne"> ... Cebolla</li>

// 3. Eliminar un atributo
    // El método removeAttribute seguido de un nombre de un atributo, nos permite eliminar
    // el atributo que tenga ese nombre del elemento.

    

// 4. Añadir y quitar atributo de forma rápida
    // El método toggleAttribute permite añadir al elemento el atributo que se indique
    // si no está añadido ya, o quitar el atributo con ese nombre si ya está añadido. Si
    // es la primera vez que utilizamos el método toggleAttribute, añade el atributo,
    // la siguiente lo eliminará, la siguiente lo volverá a añadir, y así sucesivamente.

// 5. Saber si un elemento tiene atributos
    // El método hasAttribute devuelve verdadero si el elemento tiene el atributo cuyo
    // nombre se indica y falso si no lo tiene.

// 6. Obtener todos los atributos de un elemento
    // La propiedad atributes de un elemento permite obtener todos los atributos de un
    // elemento. Lo que devuelve es un objeto de tipo NamedNodeList  que no es una 
    // estructura de array por lo que no tenemos acceso a la mayoría de propiedades del
    // array. Pero sí podemos acceder por número de índice y usar la propiedad length.

    // Cada elemento de la lista que devuelve esta propiedad posee una propiedad llamada
    // name que contiene el nombre del atributo y value que contiene su valor.

    // Ejemplo de navegación por los atributos de un elemento
    let listaAtributos = document.getElementById("edad").attributes;
    for (let atributo of listaAtributos) {
        console.log(`Atributo: ${atributo.name} - Valor: ${atributo.value}`);
    }
    /* Salida:
        Atributo: type - Valor: number
        Atributo: id - Valor: edad
        Atributo: name - Valor: edad
        Atributo: min - Valor: 18
        Atributo: max - Valor: 65
    */
});